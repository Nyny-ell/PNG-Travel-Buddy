
function share(platform) {
  const url = window.location.href;
  const text = "Check out this amazing destination on PNG Travel Buddy!";
  
  switch(platform) {
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
      break;
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
      break;
    case 'instagram':
      alert('Opening Instagram app... Share your journey with #PNGTravelBuddy');
      break;
  }
}

function initMap() {
  const map = L.map('map').setView([-6.314993, 143.95555], 6);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for destinations
  const destinations = [
    { name: 'Port Moresby', coords: [-9.443383, 147.180647], description: 'Capital city of PNG' },
    { name: 'Lae', coords: [-6.733333, 146.999998], description: 'Second-largest city' },
    { name: 'Mount Wilhelm', coords: [-5.7800, 145.0297], description: 'Highest mountain in PNG' }
  ];

  destinations.forEach(dest => {
    L.marker(dest.coords)
      .bindPopup(`<b>${dest.name}</b><br>${dest.description}`)
      .addTo(map);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const mapElement = document.getElementById('map');
  
  if (mapElement) {
    initMap();
  }
  const ctaButton = document.querySelector('.cta-button');

  ctaButton.addEventListener('click', () => {
    document.getElementById('destinations').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
});
