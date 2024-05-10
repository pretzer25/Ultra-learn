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
            dev.style.right = "6%";
            dev.style.top = "1%";
            dev.onclick = function() {
alert('To ensure optimal performance, each time you click on this app, clear your cache before you start and reload this page, you can clear your cache by navigating to chrome://settings/clearBrowserData and selecting Cached images and files');
const iframe = document.getElementById('iframe')
              let count = 0
      let notfound = 0
      const limit = 10
      const max = 45
      const reloadInterval = setInterval(() => {
        if (count < limit && iframe) {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document
          const element = iframeDocument.querySelector('.sc-dHxrtn VlOxS')
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
