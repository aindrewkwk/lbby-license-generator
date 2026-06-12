// ── Fetch releases from GitHub API ─────────────────────────────────
const REPO = 'aindrewkwk/lbby-releases';
const API = `https://api.github.com/repos/${REPO}/releases`;

// Platform detection
function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('win')) return 'windows';
  if (ua.includes('mac')) return 'macos';
  if (ua.includes('linux')) return 'linux';
  return 'unknown';
}

// Find best asset for a platform
function findAsset(assets, platform) {
  const patterns = {
    windows: [/\.msi$/i, /windows.*\.exe$/i, /\.exe$/i],
    macos: [/\.dmg$/i, /macos.*\.dmg$/i, /aarch64.*\.dmg$/i],
    linux: [/\.deb$/i, /\.rpm$/i, /\.appimage$/i],
  };

  for (const pattern of patterns[platform] || []) {
    const found = assets.find(a => pattern.test(a.name) && !a.name.endsWith('.sig'));
    if (found) return found;
  }
  return null;
}

// Format date
function fmtDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

// Format file size
function fmtSize(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Platform icons and labels
const PLATFORMS = {
  windows: { icon: '🪟', label: 'Windows', ext: '.msi' },
  macos: { icon: '🍎', label: 'macOS', ext: '.dmg' },
  linux: { icon: '🐧', label: 'Linux', ext: '.deb' },
};

// Safe DOM helpers
function el(tag, attrs, ...children) {
  const e = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'style' && typeof v === 'object') {
        Object.assign(e.style, v);
      } else if (k === 'className') {
        e.className = v;
      } else if (k.startsWith('on')) {
        e.addEventListener(k.slice(2).toLowerCase(), v);
      } else {
        e.setAttribute(k, v);
      }
    }
  }
  for (const child of children) {
    if (typeof child === 'string') {
      e.appendChild(document.createTextNode(child));
    } else if (child) {
      e.appendChild(child);
    }
  }
  return e;
}

async function loadReleases() {
  const container = document.getElementById('download-cards');
  if (!container) return;

  try {
    const resp = await fetch(`${API}?per_page=1`);
    if (!resp.ok) throw new Error('Failed to fetch releases');
    const releases = await resp.json();
    const release = releases[0];
    if (!release) throw new Error('No releases found');

    const platform = detectPlatform();
    const version = release.tag_name.replace(/^v/, '');
    const date = fmtDate(release.published_at);

    container.textContent = '';

    for (const [key, info] of Object.entries(PLATFORMS)) {
      const asset = findAsset(release.assets, key);
      const isCurrent = key === platform;

      const card = el('div', { className: 'download-card' });
      card.style.borderColor = isCurrent ? 'var(--accent)' : 'var(--border)';
      card.style.boxShadow = isCurrent ? '0 0 0 1px var(--accent), 0 8px 30px var(--accent-glow)' : 'none';

      card.appendChild(el('div', { className: 'platform-icon' }, info.icon));

      const h3 = el('h3', null, info.label);
      if (isCurrent) {
        const tag = el('span', { style: { color: 'var(--accent)', fontSize: '12px', marginLeft: '6px' } }, '← Your system');
        h3.appendChild(tag);
      }
      card.appendChild(h3);
      card.appendChild(el('div', { className: 'version' }, `v${version} · ${date}`));

      if (asset) {
        const btn = el('a', {
          href: asset.browser_download_url,
          className: 'btn btn-primary btn-sm',
          style: { width: '100%', justifyContent: 'center' },
        }, `Download ${info.ext} · ${fmtSize(asset.size)}`);
        card.appendChild(btn);
      } else {
        const btn = el('button', {
          className: 'btn btn-secondary btn-sm',
          disabled: 'true',
          style: { width: '100%', justifyContent: 'center' },
        }, 'Not available');
        card.appendChild(btn);
      }

      container.appendChild(card);
    }
  } catch (err) {
    container.textContent = '';
    const card = el('div', { className: 'download-card' });
    const p = el('p', { style: { color: 'var(--red)' } }, 'Failed to load releases. ');
    const link = el('a', { href: `https://github.com/${REPO}/releases`, target: '_blank', style: { color: 'var(--accent)' } }, 'View on GitHub');
    p.appendChild(link);
    card.appendChild(p);
    container.appendChild(card);
  }
}

// ── Load changelog ─────────────────────────────────────────────────
async function loadChangelog() {
  const container = document.getElementById('changelog-list');
  if (!container) return;

  try {
    const resp = await fetch(`${API}?per_page=5`);
    if (!resp.ok) throw new Error('Failed to fetch changelog');
    const releases = await resp.json();

    container.textContent = '';

    for (const r of releases) {
      const item = el('div', { className: 'changelog-item' });
      item.appendChild(el('h3', null, r.name || r.tag_name));
      item.appendChild(el('div', { className: 'date' }, fmtDate(r.published_at)));
      const body = el('div', { className: 'body' });
      body.textContent = r.body || 'No release notes.';
      item.appendChild(body);
      container.appendChild(item);
    }
  } catch (err) {
    container.textContent = '';
    container.appendChild(el('p', { className: 'text-muted text-center' }, 'Failed to load changelog.'));
  }
}

// Init
loadReleases();
loadChangelog();
