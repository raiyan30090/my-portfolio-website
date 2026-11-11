// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#070f1e';
                navLinks.style.padding = '20px';
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById('sendBtn');
  
  if (sendBtn) {
    sendBtn.addEventListener('click', function () {
      // ইনপুট ফিল্ড থেকে ডাটা সংগ্রহ
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      // ভ্যালিডেশন
      if (!name || !phone || !message) {
        alert('দয়া করে আপনার নাম, ফোন নম্বর এবং মেসেজটি পূরণ করুন!');
        return;
      }

      // আপনার WhatsApp নম্বর
      const myPhoneNumber = '8801814628003';

      // হোয়াটসঅ্যাপ টেক্সট ফরম্যাট
      const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
      const whatsappURL = `https://wa.me/${myPhoneNumber}?text=${text}`;

      // সফল মেসেজ ও রিডাইরেক্ট
      alert('Thank you! Redirecting to WhatsApp...');
      window.location.href = whatsappURL;
    });
  }
});

// Mobile Hamburger Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // মেনু লিংকে ক্লিক করলে মেনু নিজে থেকেই বন্ধ হবে
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}