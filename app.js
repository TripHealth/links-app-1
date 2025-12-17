
async function getLinks() {
  try {
    const res = await fetch('config/links.json?ts=' + Date.now(), {cache: 'no-store'});
    if (!res.ok) throw new Error('Failed to load links.json');
    const json = await res.json();
    return Array.isArray(json.Links) ? json.Links : [];
  } catch (e) {
    console.error('Error loading links:', e);
    return [];
  }
}

function isAllowedUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' || u.protocol === 'http:'; // tighten to https in prod
  } catch {
    return false;
  }
}

function renderLinks(links) {
  const list = document.getElementById('links-list');
  list.innerHTML = '';
  links.forEach(l => {
    if (!isAllowedUrl(l.url)) return;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = l.url;
    a.textContent = l.label || l.key || l.url;
    a.setAttribute('rel', 'noopener noreferrer');
    a.setAttribute('target', '_blank');
    li.appendChild(a);
    if (l.category) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = l.category;
      li.appendChild(badge);
    }
    list.appendChild(li);
  });
}

(async function init() {
  const links = await getLinks();
  renderLinks(links);
})();
