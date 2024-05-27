# Speculative Navigation API

*By Poort80 Amsterdam, May 2024*

For this demo to work make sure you (temporarily) turn off your web browser's **content blocking tools** like uBlock Origin or AdBlocker like extensions. It prevents things like pre-loading of other web pages.

## Prerender pages for instant page navigations

This (inspired) demo contains a few static HTML pages and a small piece of JavaScript that utilizes the new [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API). The small piece of JavaScript injects a *speculationrules* object into the web page.

```html
<script type="speculationrules">
{
    "prefetch": [{
    "source": "list",
    "urls": [
        "index.html",
        "movie-detail.html",
        "about.html",
        "catalog.html"
    ]
    }]
}
</script>
```

Supported web browsers (see below at the end of this documentation) will then **prefetch** those web page URL's in the background. You can see this in the Dev. Tools Network panel.

This helps to **improve almost instant page loading**. These *speculationrules* can be constructed and injected based on any criteria you want. This can be done up-front, server-side, or client-side via JavaScript after page load.

## Developer tools and debugging

As of this writing Google Chrome has great developer tools to inspect these speculationrules in separate dev. panels.

* See this article [Chrome for Developers: Debugging speculation rules](https://developer.chrome.com/docs/devtools/application/debugging-speculation-rules)
* See this video  [Chrome for Developers: Debugging speculative navigations for faster page loads](https://www.youtube.com/watch?v=BIpz9Hdjm_A)

## What about the HTML meta-tags for preconnect, prefetch and preload?

While the below is great for preloading certain *asset* file URL's to prefetch / preconnecting to other domains. 

```html
<link rel="preconnect" href="https://cdn.mysite.nl">
<link rel="preconnect" href="https://www.google-analytics.com/">

<link rel="dns-prefetch" href="https://cdn.mysite.nl">

<link rel="preload" href="/assets/fonts/font-file.woff" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/img/logo.svg" as="image" type="image/svg+xml" crossorigin>
```

The Speculation Rules API **is designed for future navigations**. It targets document URL's rather than specific resource files. And makes sense in a multi-page application (MPA's) rather than a single-page application (SPA's).

## More information

* This demo is inspired by: [Chrome for Developers: Debugging speculative navigations for faster page loads](https://www.youtube.com/watch?v=BIpz9Hdjm_A)
* Their demo: [Speculative-rules.glitch.me](https://speculative-rules.glitch.me/)
* Their article: [DevTools Tips: Debugging speculative navigations for faster page loads](https://developer.chrome.com/blog/devtools-tips-31)
* MDN Documentation: [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API)
* MDN Documentation: [Speculative loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Speculative_loading)

## Web browser support

As of this writing **speculative navigation** only works in the following web browser(s):

* **Works in** (desktop and mobile):
    * Chrome 
    * Edge
    * Opera
    * Samsung Internet
    * WebView Android
* **Doesn’t work in** (desktop and mobile):
    * Firefox
    * Brave 
    * Safari (macOS, iPadOS & iOS)

See also [MDN Documentation: Speculation Rules API Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API#browser_compatibility)

## Progressive-enhancement

Should we use this technique to enhance the user's page loading experience? Implementing this technique just requires **injecting**, either server-side or client side, a simple JavaScript `<script type="speculationrules">` -tag with a **speculationrules** -object containing (known) URL's. 

More and more modern web browser (might, hopefully?) implement this API as well. Non-supporting (older) web browsers that don't understand `<script type="speculationrules">` will skip it. 

Any new shine web feature can be used today! As long as you implement it using an accecptable fallback for non-supporting web browsers. Then **enhance** that same (user) experience with that shiny new feature. This is called **progressive-enhancement**.