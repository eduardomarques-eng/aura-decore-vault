const { Client } = require('pg');
const c = new Client({ connectionString: 'postgresql://postgres:PzjTaROWHIzlntJsCxvMFuLHhgWHlxEE@acela.proxy.rlwy.net:51860/postiz', ssl: { rejectUnauthorized: false } });
c.connect().then(async () => {
  const { rows } = await c.query(`SELECT id, state, settings, "integrationId", "publishDate" FROM "Post" WHERE "deletedAt" IS NULL AND "publishDate" >= NOW() - interval '2 days' ORDER BY "publishDate" LIMIT 30`);
  let stories = 0, posts = 0;
  rows.forEach(r => {
    let isStory = false;
    try { isStory = JSON.parse(r.settings).type === 'story'; } catch(e) {}
    if (isStory) stories++; else posts++;
    const canal = r.integrationId && r.integrationId.startsWith('4c') ? 'IG' : 'FB';
    const dt = new Date(r.publishDate).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    console.log(`${r.state} | ${canal} | ${isStory ? 'STORY' : 'POST '} | ${dt}`);
  });
  console.log(`\nTotal: ${stories} stories, ${posts} posts`);
  await c.end();
}).catch(e => console.error(e.message));
