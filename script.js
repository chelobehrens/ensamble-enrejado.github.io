document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('last-updated');
  if (el) {
    try {
      const now = new Date();
      const formatted = now.toLocaleString('es-ES', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
      });
      el.textContent = formatted;
    } catch {
      el.textContent = new Date().toISOString();
    }
  }

  const btn = document.getElementById('action-btn');
  const out = document.getElementById('action-result');
  if (btn && out) {
    btn.addEventListener('click', () => {
      out.textContent = '¡Funciona! 🎉 Este sitio está servido desde GitHub Pages.';
    });
  }
});

