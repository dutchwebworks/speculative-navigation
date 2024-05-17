document.addEventListener("DOMContentLoaded", () => {
    addSpeculationRules();
});

function addSpeculationRules() {
    const specScript = document.createElement('script');
    specScript.id = 'speculationrules';
    specScript.type = 'speculationrules';
    specScript.textContent = `
        {
          "prerender": [{
            "source": "list",
            "urls": [
              "index.html",
              "movie-detail.html",
              "about.html",
              "catalog.html"
            ]
          }]
        }`;
    document.body.appendChild(specScript);
}