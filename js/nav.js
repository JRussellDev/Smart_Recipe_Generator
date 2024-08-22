const SiteTitle = document.getElementById("page-title")
const generatorDirectory = document.getElementById("recipe-generator-directory")
const recipeSearchDirectory = document.getElementById("page-title")

SiteTitle.addEventListener("click", () => {
    window.location.href = "index.html";
});

generatorDirectory.addEventListener("click", () => {
    window.location.href = "generator.html";
});

recipeSearchDirectory.addEventListener("click", () => {
    window.location.href = "index.html";
});