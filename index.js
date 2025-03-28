/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

function openResume(event) {
  event.preventDefault(); // Prevent default link behavior

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // For mobile devices, open the PDF in a new browser tab
    window.open('./resume.pdf', '_blank');
  } else {
    // For desktop, open the PDF in a modal
    const pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = "./resume.pdf"; // Path to your PDF file

    const pdfModal = document.getElementById("pdfModal");
    pdfModal.style.display = "block";
  }
}

function closeModal() {
  // Hide the modal
  const pdfModal = document.getElementById("pdfModal");
  pdfModal.style.display = "none";

  // Clear the iframe src to stop loading the PDF
  const pdfViewer = document.getElementById("pdfViewer");
  pdfViewer.src = "";
}

document.addEventListener("DOMContentLoaded", function() {
    const text = "Jagaputhran S"; // Your name
    const typingElement = document.querySelector(".typing-container");

    let i = 0;
    function type() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150); // Typing speed
        }
    }

    type();
});

