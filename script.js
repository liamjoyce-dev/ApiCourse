
// Theme toggle
const toggle = () => {
  const body = document.body;
  const current = body.classList.contains('light') ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  body.classList.remove(current);
  body.classList.add(next);
  localStorage.setItem('theme', next);
};
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'light';
  document.body.classList.add(saved);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggle);

  // Render module cards on index
  const grid = document.getElementById('module-grid');
  const searchInput = document.getElementById('search-input');
  if (grid) {
    fetch('modules.json')
      .then(r => r.json())
      .then(modules => {
        const render = (items) => {
          grid.innerHTML = items.map(m => `
            <article class="card module-card">
              <span class="tag">Module ${m.id}</span>
              <h3><a href="${m.path}">${m.title}</a></h3>
              <p>${m.summary}</p>
              <a class="btn" href="${m.path}">Open Module</a>
            </article>
          `).join('');
        };
        render(modules);

        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase();
            const filtered = modules.filter(m => 
              m.title.toLowerCase().includes(q) || m.summary.toLowerCase().includes(q)
            );
            render(filtered);
          });
        }
      });
  }
});
