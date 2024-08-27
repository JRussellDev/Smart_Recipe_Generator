const arrowButton = document.getElementById('arrow-button');
const darkSegment = document.getElementById('dark-segment');


arrowButton.addEventListener('mouseover', () => {
    darkSegment.style.boxShadow = '0 0 20px 10px #F5853F';
});

arrowButton.addEventListener('mouseout', () => {
    darkSegment.style.boxShadow = 'none';
});

arrowButton.addEventListener("click", () => {
    window.location.href = "generator.html";
});

generatorTitle.addEventListener("click", () => {
    window.location.href = "index.html";
});

