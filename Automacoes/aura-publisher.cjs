/**
 * Aura Decore — Publisher Autônomo v2
 * Publica posts QUEUE via Meta Graph API + FB Pessoal @auras.decore
 * Captions alternando profissional / humanizado com CTA + site + hashtags
 */
const { Client } = require('pg');
const https = require('https');
const { execSync } = require('child_process');

const FB_TOKEN   = 'EAAddz68Jp1wBRmBNg0wxfWzJrRPBajsjxv7G4dUbsbAvbSws4kHNjDS08zh6O917oUjUmVBbWKHhAcG7w9AqXAGhj5rKnWXb1liW8WMmHlsegetHfwkaZAqNto9EXFgYxQdRuTf1hQFt9yTEbmkmBaomU3KZB7NQPUDGqro8wA4ZAt6QZCZCyNbNn3t6MkeL1s5I89Lzh5p5ALFYTn6i0';
const IG_ID      = '17841442799060573';
const FB_PAGE    = '1111100822090245';
// FB Pessoal @auras.decore — defina o Page ID abaixo quando Eduardo confirmar se é uma Página ou Perfil
// Para obter: acesse business.facebook.com → Configurações → Ativos → Páginas → copiar ID
// Se for perfil pessoal (não Page), Chrome automation via fb_pessoal_chrome_post.py é necessária
const FB_PESSOAL_PAGE_ID = process.env.FB_PESSOAL_PAGE_ID || '';
const SITE_URL   = 'auradecore.com.br';
const DB_URL     = 'postgresql://postgres:PzjTaROWHIzlntJsCxvMFuLHhgWHlxEE@acela.proxy.rlwy.net:51860/postiz';

// Janela de publicação: posts com publishDate entre (agora - 90min) e (agora + 5min)
// Isso garante que posts atrasados são recuperados e posts futuros não são antecipados
const WINDOW_BEHIND_MS = 90 * 60 * 1000;
const WINDOW_AHEAD_MS  = 5  * 60 * 1000;

function apiPost(hostname, path, body) {
  return new Promise((resolve, reject) => {
    const data = new URLSearchParams(body).toString();
    const req = https.request({
      hostname, path, method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(data) }
    }, res => { let d=''; res.on('data',x=>d+=x); res.on('end',()=>{ try{resolve(JSON.parse(d));}catch(e){resolve({raw:d});} }); });
    req.on('error', reject);
    req.write(data); req.end();
  });
}

function apiGet(hostname, path) {
  return new Promise((resolve, reject) => {
    https.get({hostname, path}, res => {
      let d=''; res.on('data',x=>d+=x); res.on('end',()=>{ try{resolve(JSON.parse(d));}catch(e){resolve({raw:d});} });
    }).on('error', reject);
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ========== CAPTION ENHANCER ==========
// Alterna entre formato profissional (índices pares) e humanizado (índices ímpares)
const HASHTAGS_BASE = '#auradecore #decoracaojapandi #wabisabi #japandistyle #casacomestilo';
const HASHTAGS_EXTRA = [
  '#decoracaobrasil #minimalismobr #dicasdedecoracao #vasodecorativo #designdeinteriores',
  '#lardossonhos #homedecorbr #decoracao2026 #decorminimalista #ambientejapandi',
  '#ceramicaartesanal #objetosdecoracao #japandilife #decoracaoestilo #casabonita',
  '#interioresbrasileiros #decoracaomoderna #stilejapandi #homesweethome #decoracaonatural',
];
let captionIndex = 0;

const MUSICAS_STORY = [
  '🎵 Música sugerida: "Tsubaki" — Keshi',
  '🎵 Música sugerida: "Winter" — Ludovico Einaudi',
  '🎵 Música sugerida: "Lofi Study" — ChilledCow',
  '🎵 Música sugerida: "Sakura" — Yo-Yo Ma',
  '🎵 Música sugerida: "Weightless" — Marconi Union',
  '🎵 Música sugerida: "River Flows in You" — Yiruma',
  '🎵 Música sugerida: "Horizon" — Joep Beving',
];
let musicaIndex = 0;

function enhanceCaption(rawCaption, isStory) {
  const idx = captionIndex++;
  const extra = HASHTAGS_EXTRA[idx % HASHTAGS_EXTRA.length];

  // Remover hashtags existentes do final (se já tiver)
  const lines = rawCaption.trim().split('\n');
  const cleanLines = lines.filter(l => !l.trim().startsWith('#') && l.trim() !== '');
  const body = cleanLines.join('\n').trim();

  if (isStory) {
    // Stories: curto + música sugerida
    const musica = MUSICAS_STORY[musicaIndex++ % MUSICAS_STORY.length];
    return `${body}\n\n${musica}\n\n${HASHTAGS_BASE}`;
  }

  if (idx % 2 === 0) {
    // Profissional: estruturado com CTA, site, hashtags
    return `${body}\n\n✨ Conheça todos os produtos em auradecore.com.br\n\n🛍️ Frete grátis acima de R$299 | Entrega para todo o Brasil\n\n${HASHTAGS_BASE} ${extra}`;
  } else {
    // Humanizado: íntimo, sutil, CTA na bio
    return `${body}\n\n↳ Link na bio para ver mais 🌿\n\n${HASHTAGS_BASE} ${extra}`;
  }
}

// ========== FB PESSOAL ==========
async function publishFBPessoal(imgUrl, caption) {
  if (!FB_PESSOAL_PAGE_ID) {
    // Tenta via Chrome automation se script existir
    try {
      const py = 'C:\\Users\\erick\\aura-office-dashboard\\backend\\fb_pessoal_chrome_post.py';
      const fs = require('fs');
      if (fs.existsSync(py)) {
        execSync(`python "${py}" --url "${imgUrl}" --caption "${caption.replace(/"/g, "'").substring(0,500)}" --headless`, { timeout: 60000 });
        return { ok: true, id: 'chrome-automation' };
      }
    } catch(e) {}
    return { ok: false, error: 'FB_PESSOAL_PAGE_ID não configurado. Defina a variável de ambiente.' };
  }
  const r = await apiPost('graph.facebook.com', `/v19.0/${FB_PESSOAL_PAGE_ID}/photos`, {
    url: imgUrl, message: caption, access_token: FB_TOKEN
  });
  if (r.error || r.errors) return { ok: false, error: JSON.stringify(r).slice(0,200) };
  return { ok: true, id: r.post_id || r.id };
}

async function publishIG(imgUrl, caption) {
  const r1 = await apiPost('graph.facebook.com', '/v19.0/' + IG_ID + '/media', {
    image_url: imgUrl, caption: caption, access_token: FB_TOKEN
  });
  if (!r1.id) return { ok: false, error: 'container_fail: ' + JSON.stringify(r1).slice(0,200) };

  // Aguardar processamento do container (max 30s)
  await sleep(8000);
  for (let i = 0; i < 3; i++) {
    const st = await apiGet('graph.facebook.com', '/v19.0/' + r1.id + '?fields=status_code&access_token=' + FB_TOKEN);
    if (st.status_code === 'FINISHED') break;
    if (st.status_code === 'ERROR') return { ok: false, error: 'container_error: ' + JSON.stringify(st) };
    await sleep(5000);
  }

  const r2 = await apiPost('graph.facebook.com', '/v19.0/' + IG_ID + '/media_publish', {
    creation_id: r1.id, access_token: FB_TOKEN
  });
  if (r2.error || r2.errors) return { ok: false, error: JSON.stringify(r2).slice(0,200) };
  return { ok: true, id: r2.id, container: r1.id };
}

async function publishIGStory(imgUrl) {
  // Cria container de Story (media_type=STORIES, sem caption — IG não exibe texto em stories via API)
  const r1 = await apiPost('graph.facebook.com', '/v19.0/' + IG_ID + '/media', {
    image_url: imgUrl, media_type: 'STORIES', access_token: FB_TOKEN
  });
  if (!r1.id) return { ok: false, error: 'story_container_fail: ' + JSON.stringify(r1).slice(0,200) };

  await sleep(8000);
  for (let i = 0; i < 4; i++) {
    const st = await apiGet('graph.facebook.com', '/v19.0/' + r1.id + '?fields=status_code&access_token=' + FB_TOKEN);
    if (st.status_code === 'FINISHED') break;
    if (st.status_code === 'ERROR') return { ok: false, error: 'story_container_error: ' + JSON.stringify(st) };
    await sleep(5000);
  }

  const r2 = await apiPost('graph.facebook.com', '/v19.0/' + IG_ID + '/media_publish', {
    creation_id: r1.id, access_token: FB_TOKEN
  });
  if (r2.error || r2.errors) return { ok: false, error: JSON.stringify(r2).slice(0,200) };
  return { ok: true, id: r2.id, container: r1.id };
}

async function publishFB(imgUrl, caption) {
  const r = await apiPost('graph.facebook.com', '/v19.0/' + FB_PAGE + '/photos', {
    url: imgUrl, message: caption, access_token: FB_TOKEN
  });
  if (r.error || r.errors) return { ok: false, error: JSON.stringify(r).slice(0,200) };
  return { ok: true, id: r.post_id || r.id };
}

async function publishFBStory(imgUrl) {
  // Tenta endpoint oficial photo_stories (retorna 500 para imagens não-9:16)
  const r = await apiPost('graph.facebook.com', '/v19.0/' + FB_PAGE + '/photo_stories', {
    url: imgUrl, access_token: FB_TOKEN
  });
  if (r.id && !r.error) return { ok: true, id: r.id };
  // Fallback: postar no feed com marcação de story
  console.log(`  ⚠️ FB photo_stories falhou (${JSON.stringify(r).slice(0,100)}), postando no feed...`);
  const r2 = await apiPost('graph.facebook.com', '/v19.0/' + FB_PAGE + '/photos', {
    url: imgUrl, message: '✨ #auradecore #japandistyle #decoracao2026', access_token: FB_TOKEN
  });
  if (r2.error || r2.errors) return { ok: false, error: JSON.stringify(r2).slice(0,200) };
  return { ok: true, id: r2.post_id || r2.id, fallback: true };
}

async function main() {
  const c = new Client({ connectionString: DB_URL, ssl: { rejectUnauthorized: false } });
  await c.connect();

  const now = new Date();
  const windowStart = new Date(now.getTime() - WINDOW_BEHIND_MS);
  const windowEnd   = new Date(now.getTime() + WINDOW_AHEAD_MS);

  console.log(`[${now.toISOString()}] Publisher iniciado`);
  console.log(`Janela: ${windowStart.toISOString()} → ${windowEnd.toISOString()}`);

  const { rows: posts } = await c.query(
    `SELECT id, content, image, settings, "integrationId", "publishDate"
     FROM "Post"
     WHERE "deletedAt" IS NULL
       AND state = 'QUEUE'
       AND "publishDate" >= $1
       AND "publishDate" <= $2
     ORDER BY "publishDate"`,
    [windowStart, windowEnd]
  );

  console.log(`Posts a publicar: ${posts.length}`);

  let published = 0, errors = 0;

  for (const p of posts) {
    const isIG     = p.integrationId.startsWith('4c');
    const imgData  = p.image ? JSON.parse(p.image) : [];
    const imgUrl   = imgData.length ? imgData[0].url : null;
    const canal    = isIG ? 'IG' : 'FB';
    const horaBRT  = new Date(p.publishDate).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    console.log(`\n[${canal}] ${horaBRT} — ${p.content.slice(0,50).replace(/\n/g,' ')}...`);

    if (!imgUrl) {
      console.log('  ⚠️ Sem imagem — pulando');
      continue;
    }

    const isStory = p.settings && (() => { try { return JSON.parse(p.settings).type === 'story'; } catch(e) { return false; } })();
    const caption = enhanceCaption(p.content, isStory);

    try {
      let result;
      if (isIG && isStory) {
        console.log(`  📸 Publicando como IG Story...`);
        result = await publishIGStory(imgUrl);
      } else if (!isIG && isStory) {
        console.log(`  📸 Publicando como FB Story...`);
        result = await publishFBStory(imgUrl);
      } else if (isIG) {
        result = await publishIG(imgUrl, caption);
      } else {
        result = await publishFB(imgUrl, caption);
      }

      if (result.ok) {
        const tipo = isStory ? 'Story' : 'Post';
        console.log(`  ✅ ${tipo} publicado — ID: ${result.id}`);
        await c.query(`UPDATE "Post" SET state = 'PUBLISHED', "updatedAt" = NOW() WHERE id = $1`, [p.id]);
        published++;

        // Espelhar no FB Pessoal @auras.decore (apenas posts do FB Comercial, não stories — API FB stories retorna 500)
        if (!isIG && !isStory) {
          const fbPessoalResult = await publishFBPessoal(imgUrl, caption);
          if (fbPessoalResult.ok) {
            console.log(`  ✅ FB Pessoal espelhado — ID: ${fbPessoalResult.id}`);
          } else {
            console.log(`  ⚠️  FB Pessoal: ${fbPessoalResult.error}`);
          }
        }
      } else {
        console.log(`  ❌ Erro: ${result.error}`);
        await c.query(`UPDATE "Post" SET state = 'ERROR', error = $1, "updatedAt" = NOW() WHERE id = $2`, [result.error.slice(0,255), p.id]);
        errors++;
      }
    } catch (e) {
      console.log(`  ❌ Exception: ${e.message}`);
      await c.query(`UPDATE "Post" SET state = 'ERROR', error = $1, "updatedAt" = NOW() WHERE id = $2`, [e.message.slice(0,255), p.id]);
      errors++;
    }
  }

  // Resumo
  const { rows: summary } = await c.query(
    `SELECT state, COUNT(*) as n FROM "Post" WHERE "deletedAt" IS NULL AND "publishDate" >= '2026-06-17' GROUP BY state ORDER BY state`
  );
  console.log('\n=== RESUMO SEMANA 25 ===');
  summary.forEach(r => console.log(`  ${r.state}: ${r.n}`));
  console.log(`\nEsta execução: ${published} publicados, ${errors} erros`);

  // Verificar se token FB está próximo de expirar (alertar se < 7 dias)
  try {
    const debug = await apiGet('graph.facebook.com', `/v19.0/debug_token?input_token=${FB_TOKEN}&access_token=${FB_TOKEN}`);
    if (debug.data && debug.data.expires_at) {
      const expiresAt = new Date(debug.data.expires_at * 1000);
      const daysLeft = Math.round((expiresAt - now) / 86400000);
      console.log(`\nToken FB expira em: ${daysLeft} dias (${expiresAt.toISOString().slice(0,10)})`);
      if (daysLeft < 7) console.log('⚠️ RENOVAR TOKEN URGENTE!');
    }
  } catch(e) {}

  await c.end();
}

main().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
