// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 4 + 'px';
  cursor.style.top  = my - 4 + 'px';
});
function animRing() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // animate language bars
      const fill = e.target.querySelector('.lang-fill');
      if (fill) setTimeout(() => fill.style.width = fill.dataset.width, 200);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(r => obs.observe(r));

// Also trigger lang bars already visible
document.querySelectorAll('.lang-fill').forEach(f => {
  const item = f.closest('.lang-item');
  if (item && item.classList.contains('visible')) {
    f.style.width = f.dataset.width;
  }
});
