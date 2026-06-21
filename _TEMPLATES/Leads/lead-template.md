---
nome: <% tp.system.prompt("Nome do lead") %>
telefone: ""
email: ""
origem: whatsapp
status: novo
temperatura: fria
agente_responsavel: LENA
interesse: ""
orcamento: ""
prazo: ""
primeira_mensagem: <% tp.date.now("YYYY-MM-DD HH:mm") %>
ultima_mensagem: <% tp.date.now("YYYY-MM-DD HH:mm") %>
tags: [lead, aura-decore]
---

# Lead: <% tp.frontmatter.nome %>

## Perfil

| Campo | Valor |
|---|---|
| Telefone | — |
| Email | — |
| Origem | WhatsApp |
| Interesse | — |
| Orçamento | — |

## Histórico de Mensagens

### <% tp.date.now("DD/MM") %>

**Cliente:** 

**LENA:** 

---

## Próximas Ações

- [ ] 

## Notas do Agente
