// Navbar Register Button
document.querySelector('.nav-register-btn').addEventListener('click', function() {
    console.log('Register Now clicked');
    // Add your registration logic here
});

// Book Button
document.querySelector('.book-btn').addEventListener('click', function() {
    console.log('Book clicked');
    // Add your booking logic here
});

// Download Button
document.querySelector('.download-btn').addEventListener('click', function() {
    console.log('Download clicked');
    // Add your download logic here
});

// Happy Cat Calculator
let display = document.getElementById('display');
let catMessage = document.getElementById('catMessage');
let currentInput = '0';
let shouldResetDisplay = false;

const happyCatMessages = [
    '🐱 Meow! Great calculation!',
    '🐾 Purr-fect!',
    '😸 Happy cat approves!',
    '🐈 Awesome math!',
    '😺 You\'re pawsome!',
    '🐱 Meow meow!',
    '😻 Fantastic!',
    '🐾 Wonderful!'
];

function updateDisplay() {
    display.textContent = currentInput;
}

function showCatMessage() {
    const randomMessage = happyCatMessages[Math.floor(Math.random() * happyCatMessages.length)];
    catMessage.textContent = randomMessage;
    
    setTimeout(() => {
        catMessage.textContent = '';
    }, 2000);
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
    catMessage.textContent = '';
}

function appendOperator(operator) {
    if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }
    
    const lastChar = currentInput[currentInput.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
    catMessage.textContent = '';
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
    catMessage.textContent = '';
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
    catMessage.textContent = '';
}

function calculate() {
    try {
        const expression = currentInput.replace(/×/g, '*');
        const result = Function('"use strict"; return (' + expression + ')')();
        
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        
        currentInput = result.toString();
        updateDisplay();
        showCatMessage();
        shouldResetDisplay = true;
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        catMessage.textContent = '😿 Oops! Try again!';
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
            catMessage.textContent = '';
        }, 2000);
    }
}

// Image Gallery Lightbox
let currentImageIndex = 0;
const galleryImages = [];

// Initialize gallery images
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        galleryImages.push(item.src);
    });
});

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = galleryImages[currentImageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = galleryImages[currentImageIndex];
}

// Close lightbox on Escape key
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
    
    if (lightbox.classList.contains('active')) {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

