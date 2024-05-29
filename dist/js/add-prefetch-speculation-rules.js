document.addEventListener("DOMContentLoaded", () => {
    addSpeculationRules();
});

function addSpeculationRules() {
    const specScript = document.createElement('script');
    specScript.id = 'speculationrules';
    specScript.type = 'speculationrules';
    specScript.textContent = `
        {
          "prefetch": [{
            "source": "list",
            "urls": [
              "/prefetch/index.html",
              "/prefetch/movie-detail.html",
              "/prefetch/about.html",
              "/prefetch/catalog.html"
            ]
          }]
        }`;
    document.body.appendChild(specScript);
}