// Скрипт для прокрутки с отступом для фиксированного меню
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Проверка существования элемента перед прокруткой
        if (targetElement) {
            // Прокрутка с учётом отступа
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

let currentImages = [];
let currentIndex = 0;

// Открыть модальное окно
function openModal(element) {
    currentImages = element.getAttribute('data-images').split(', ');
    currentIndex = 0;
    
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-image").src = currentImages[currentIndex];
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Показать следующее изображение
function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    document.getElementById("modal-image").src = currentImages[currentIndex];
}

// Показать предыдущее изображение
function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    document.getElementById("modal-image").src = currentImages[currentIndex];
}