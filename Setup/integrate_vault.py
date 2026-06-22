# -*- coding: utf-8 -*-
"""
integrate_vault.py — Integra e interliga notas de agentes e tarefas no vault Obsidian.
"""
import os
import pathlib

VAULT_DIR = pathlib.Path(r"C:\Users\erick\AURA-decor-vault")
AGENTES_DIR = VAULT_DIR / "Agentes"

def update_perfil_md(file_path: pathlib.Path, agent_name: str):
    if not file_path.exists():
        print(f"[WARN] Perfil não encontrado: {file_path}")
        return
    
    content = file_path.read_text(encoding="utf-8")
    
    # Corta seções anteriores de tarefas e ações para evitar duplicação
    headers_to_split = [
        "## 🔗 Tarefas & Ações Vinculadas",
        "## 🔗 Tarefas e Ações Vinculadas",
        "## 🔗 Tarefas & Ações",
        "## 🔗 Tarefas e Ações"
    ]
    for header in headers_to_split:
        if header in content:
            content = content.split(header)[0].strip()
            break
            
    # Remove separadores '---' no final se houver
    if content.endswith("---"):
        # Se for o frontmatter no topo, não tira. Apenas se for no final do arquivo
        parts = content.split("---")
        if len(parts) > 2 and parts[-1].strip() == "":
            content = "---".join(parts[:-1]).strip()

    block = f"""
---

## 🔗 Tarefas & Ações Vinculadas

```dataview
TABLE WITHOUT ID file.link AS "Tarefa", priority AS "Prioridade", status AS "Status", created_at AS "Criada"
FROM "Tarefas"
WHERE lower(agent) = lower(this.agente)
SORT created_at DESC
```

## 🧠 Memória do Agente

- [[diario]] — diário de aprendizado (atualizado por tarefa)
- [[aprendizados]] — aprendizados consolidados
- [[kaizen-dna]] — DNA Kaizen / evolução autônoma
- [[Agentes/{agent_name}|Ficha Técnica Operacional]]

## 🗂️ Notas & Ações Relacionadas

```dataview
LIST
FROM "Decisoes" OR "Relatorios" OR "Sprints"
WHERE contains(lower(file.name), lower(this.agente))
SORT file.mtime DESC
LIMIT 10
```
"""
    file_path.write_text(content.strip() + "\n" + block, encoding="utf-8")
    print(f"[OK] Perfil atualizado: {file_path.relative_to(VAULT_DIR)}")

def update_root_md(file_path: pathlib.Path, agent_name: str):
    if not file_path.exists():
        print(f"[WARN] Ficha técnica raiz não encontrada: {file_path}")
        return
        
    content = file_path.read_text(encoding="utf-8")
    
    # Corta seções anteriores de memória e tarefas para evitar duplicação
    headers_to_split = [
        "## 📂 Memória e Conexões",
        "## 📂 Memória e Conexões (Dataview)",
        "## 📋 Quadro de Tarefas Dinâmico (Dataview)"
    ]
    for header in headers_to_split:
        if header in content:
            content = content.split(header)[0].strip()
            break
            
    # Remove separadores '---' no final se houver
    if content.endswith("---"):
        content = content[:-3].strip()

    block = f"""
---

## 📂 Memória e Conexões
- 👤 [[Agentes/{agent_name}/perfil|Perfil de Configuração]]
- 📔 [[Agentes/{agent_name}/diario|Diário de Atividades]]
- 🧠 [[Agentes/{agent_name}/aprendizados|Aprendizados e Insights]]
- 🧬 [[Agentes/{agent_name}/kaizen-dna|Kaizen DNA]]

## 📋 Quadro de Tarefas Dinâmico (Dataview)

### ⏳ Tarefas Pendentes
```dataview
TABLE status AS "Status", priority AS "Prioridade", created_at AS "Criado"
FROM "Tarefas"
WHERE lower(agent) = "{agent_name.lower()}" AND status != "concluido"
SORT created_at DESC
```

### ✅ Tarefas Concluídas
```dataview
TABLE completed_at AS "Concluído", priority AS "Prioridade"
FROM "Tarefas"
WHERE lower(agent) = "{agent_name.lower()}" AND status = "concluido"
SORT completed_at DESC
LIMIT 10
```
"""
    file_path.write_text(content.strip() + "\n" + block, encoding="utf-8")
    print(f"[OK] Raiz atualizada: {file_path.relative_to(VAULT_DIR)}")

def main():
    print("Iniciando integração de notas do vault...")
    if not AGENTES_DIR.exists():
        print(f"[ERROR] Pasta {AGENTES_DIR} não existe!")
        return

    # Escaneia a pasta Agentes
    updated_count = 0
    for child in AGENTES_DIR.iterdir():
        if child.is_dir() and not child.name.startswith("."):
            agent_name = child.name
            perfil_file = child / "perfil.md"
            root_file = AGENTES_DIR / f"{agent_name}.md"
            
            if perfil_file.exists():
                update_perfil_md(perfil_file, agent_name)
                update_root_md(root_file, agent_name)
                updated_count += 1
                
    print(f"\nConcluído! {updated_count} agentes integrados e interligados.")

if __name__ == "__main__":
    main()
