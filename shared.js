const NAV = `
<nav>
  <a href="index.html" class="nav-logo">Dr Ketaki Sharma</a>
  <ul class="nav-links">
    <li><a href="index.html" id="nav-about">About</a></li>
    <li class="nav-dropdown">
      <a href="#" id="nav-faqs" class="nav-dropdown-toggle">FAQs &amp; Resources &#9662;</a>
      <ul class="nav-dropdown-menu">
        <li><a href="faqs-general.html">General Paediatrics</a></li>
        <li><a href="faqs-allergy.html">Allergy &amp; Eczema</a></li>
        <li><a href="faqs-adhd.html">ADHD &amp; Neurodevelopment</a></li>
      </ul>
    </li>
  </ul>
  <a href="appointments.html" class="nav-cta" id="nav-appt">Make an appointment</a>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">About</a>
  <span style="font-size:0.75rem; font-weight:500; letter-spacing:0.1em; text-transform:uppercase; color:var(--stone); padding:0.2rem 0; display:block;">FAQs &amp; Resources</span>
  <a href="faqs-general.html" style="padding-left:1rem;">General Paediatrics</a>
  <a href="faqs-allergy.html" style="padding-left:1rem;">Allergy &amp; Eczema</a>
  <a href="faqs-adhd.html" style="padding-left:1rem;">ADHD &amp; Neurodevelopment</a>
  <div class="mobile-cta-wrap"><a href="appointments.html">Make an appointment</a></div>
</div>`;

const FOOTER = `
<footer>
  <div>
    <div class="footer-brand">Dr Ketaki Sharma</div>
    <div class="footer-address">Suite 3, Level 5, North Shore Private Hospital<br>3 Westbourne Street, St Leonards NSW 2065</div>
  </div>
  <div class="footer-links">
    <a href="index.html">About</a>
    <a href="faqs-general.html">General</a>
    <a href="faqs-allergy.html">Allergy</a>
    <a href="faqs-adhd.html">ADHD</a>
    <a href="appointments.html">Appointments</a>
  </div>
  <div class="footer-copy">The information on this website is general in nature and does not substitute for individualised medical advice. &copy; Dr Ketaki Sharma ${new Date().getFullYear()}</div>
</footer>`;

document.getElementById('nav-root').innerHTML = NAV;
document.getElementById('footer-root').innerHTML = FOOTER;

const page = location.pathname.split('/').pop() || 'index.html';
const faqPages = ['faqs-allergy.html','faqs-adhd.html','faqs-general.html'];
if (page === 'index.html') document.getElementById('nav-about')?.classList.add('active');
if (faqPages.includes(page)) document.getElementById('nav-faqs')?.classList.add('active');
if (page === 'appointments.html') document.getElementById('nav-appt')?.style.setProperty('background', 'var(--forest-light)');

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
