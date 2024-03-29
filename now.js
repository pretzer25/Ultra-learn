// Function to check if an iframe with the id "iframe" exists and its source URL starts with "https://example."
function checkIframe() {
    const iframeElement = document.getElementById("iframe");
    if (iframeElement) {
        const iframeSource = iframeElement.src;
        if (iframeSource.startsWith("https://example.")) {
            // Run the function called "nowblock()"
            nowblock();
        }
    }
}

// Check for iframes every 500 milliseconds
setInterval(checkIframe, 500);
