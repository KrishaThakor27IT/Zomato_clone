// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", () => {

  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust for navbar height
          behavior: "smooth"
        });
      }
    });
  });

  // Button primary hover effect
  const buttonPrimary = document.querySelector('.button-primary');
  
  if (buttonPrimary) {
    buttonPrimary.addEventListener('mouseover', () => {
      buttonPrimary.style.transform = 'scale(1.05)';
    });
    
    buttonPrimary.addEventListener('mouseout', () => {
      buttonPrimary.style.transform = 'scale(1)';
    });
  }
})

