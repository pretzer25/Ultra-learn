"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("searchbox");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("search");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("searchengine");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await registerSW();
  } catch (err) {
    alert(err.toString());
    throw err;
  }
  const url = search(address.value, searchEngine.value);
      var white = document.createElement('div');
            white.style.cursor="pointer";
            white.style.position = "absolute";
            white.style.width = "100%";
            white.style.height = "100%";
            white.style.zIndex="100";
            white.style.right = "0px";
            white.className="black";
            white.style.top = "0px";
            document.body.appendChild(white);

            var iframe = document.createElement('iframe');

            iframe.style.position = "absolute";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.top = "0px";
            iframe.style.left = "0px";
            iframe.id = "iframe";
            iframe.style.zIndex="1000";
            iframe.style.border = "none";
            iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
            document.body.appendChild(iframe);


            var dev = document.createElement('img');
            dev.style.cursor="pointer";
            dev.style.position = "absolute";
            dev.style.width = "50px";
            dev.style.borderRadius="50%";
            dev.style.height = "50px";
            dev.src = "data:image/png;base64,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";
            dev.style.zIndex = "1001";
            dev.style.right = "1%";
            dev.style.top = "1%";
            dev.onclick = function() {
window.location.reload(true);
            };

            document.body.appendChild(dev);

              var dev = document.createElement('img');
            dev.style.cursor="pointer";
            dev.style.position = "absolute";
            dev.style.width = "50px";
            dev.style.borderRadius="50%";
            dev.style.height = "50px";
            dev.src = "data:image/png;base64,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";
            dev.style.zIndex = "1001";
            dev.style.right = "10%";
            dev.style.top = "1%";
            dev.onclick = function() {
alert('To ensure optimal performance, each time you click on this app, clear your cache before you start and reload this page, you can clear your cache by navigating to chrome://settings/clearBrowserData and selecting Cached images and files');
        let count = 0
      let notfound = 0
      const limit = 10
      const max = 45
      const reloadInterval = setInterval(() => {
        if (count < limit && iframe) {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document
          const element = iframeDocument.querySelector('.sc-hGPBjI.gGkQpt')
          if (element) {
            console.log('Class found inside the iframe.')
            document.getElementById('iframe').style.display = 'none'
            iframeDocument.location.reload()
            count += 1
            notfound = 0
          } else {
            console.log('Class not found inside the iframe.')
            notfound += 1
            if (notfound >= max) {
              clearInterval(reloadInterval)
              document.getElementById('iframe').style.display = 'block'
            }
          }
        } else {
          clearInterval(reloadInterval)
        }
      }, 500)
            };
            document.body.appendChild(dev);


});
