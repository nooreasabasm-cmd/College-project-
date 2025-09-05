// Alert when section clicked

const sections = document.querySelectorAll('section');

sections.forEach(section => {

    section.addEventListener('click', () => {

        alert(`You clicked on ${section.querySelector('h2').innerText} section`);

    });

});

// Contact section alert

const contactSection = document.getElementById('contact');

contactSection.addEventListener('click', () => {

    alert("Feel free to contact us at info@deliciousrestaurant.com or call +1 234 567 890");

});
