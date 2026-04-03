// Shared nav and footer injected into all pages
const NAV = `
<nav>
  <a href="index.html" class="nav-logo">Dr Ketaki Sharma</a>
  <ul class="nav-links">
    <li><a href="index.html" id="nav-about">About</a></li>
    <li><a href="faqs.html" id="nav-faqs">FAQs & Resources</a></li>
    <li><a href="contact.html" id="nav-contact">Contact</a></li>
  </ul>
  <a href="contact.html" class="nav-cta">Make an appointment</a>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">About</a>
  <a href="faqs.html">FAQs & Resources</a>
  <a href="contact.html">Contact</a>
  <div class="mobile-cta-wrap"><a href="contact.html">Make an appointment</a></div>
</div>`;

const FOOTER = `
<footer>
  <div>
    <div class="footer-brand">Dr Ketaki Sharma</div>
    <div class="footer-address">Suite 3, Level 5, North Shore Private Hospital<br>3 Westbourne Street, St Leonards NSW 2065</div>
  </div>
  <div class="footer-links">
    <a href="index.html">About</a>
    <a href="faqs.html">FAQs</a>
    <a href="contact.html">Contact</a>
  </div>
  <div class="footer-copy">The information on this website is general in nature and does not substitute for individualised medical advice. &copy; Dr Ketaki Sharma ${new Date().getFullYear()}</div>
</footer>`;

document.getElementById('nav-root').innerHTML = NAV;
document.getElementById('footer-root').innerHTML = FOOTER;

// highlight active nav link
const page = location.pathname.split('/').pop() || 'index.html';
const map = { 'index.html': 'nav-about', 'faqs.html': 'nav-faqs', 'contact.html': 'nav-contact' };
if (map[page]) document.getElementById(map[page])?.classList.add('active');

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
