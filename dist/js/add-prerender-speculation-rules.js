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
              "/prerender/index.html",
              "/prerender/movie-detail.html",
              "/prerender/about.html",
              "/prerender/catalog.html"
            ]
          }]
        }`;
    document.body.appendChild(specScript);
}