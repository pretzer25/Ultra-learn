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

 /*           var loading = document.createElement('img');
            loading.style.cursor="pointer";
            loading.style.width = "125px";
            loading.style.height = "125px";
            loading.style.position="absolute";
            loading.style.zIndex="101"; 
            loading.src = "/img/loading.gif";
            loading.style.top="50%";
            loading.style.left="50%";
            loading.style.transform="translate(-50%, -50%)";
            document.body.appendChild(loading);
*/
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


    
            

    
    /*
            var x = document.createElement('img');
            x.style.cursor="pointer";
            x.style.position = "absolute";
            x.style.width = "50px";
            x.style.height = "50px";
            x.src = "/img/x.png";
            x.style.zIndex = "1001";
            x.style.right = "1%";
            x.style.top = "1%";
            x.onclick = function() {
                window.location.reload(1);
            };

            document.body.appendChild(x);


            var open = document.createElement('img');
            open.style.cursor="pointer";
            open.style.position = "absolute";
            open.style.width = "50px";
            open.style.height = "50px";
            open.src = "/img/open.png";
            open.style.zIndex = "1001";
            open.style.right = "65px";
            open.style.top = "1%";
            open.onclick = function() {
                if (document.getElementById("iframe").contentWindow.location.href!="about:blank"){
                    window.open(document.getElementById("iframe").contentWindow.location.href);
                }
            };

            document.body.appendChild(open);

            var inpcont=document.createElement('div');
            inpcont.style.maxWidth="80%";
            inpcont.style.overflowX="scroll";
            inpcont.style.overflowY="hidden";
            inpcont.style.padding="5px";
            inpcont.style.position="absolute";
            inpcont.style.top="2.5%";
            inpcont.style.left="75px";
    
            var inp = document.createElement('span');
            inp.style.zIndex = '999999999999999999999999999999999999999999999999999999';
            inp.id='inp';
            inp.style.textWrap="nowrap";
            inp.contentEditable="true";
            inp.spellcheck="false";
            inp.innerText="Run a bookmarklet..";
            inp.style.color="black";
            inp.style.top="2.5%";
            inp.style.fontFamily="font-family: Arial,Helvetica Neue,Helvetica,sans-serif !important;";
            inp.style.left="0px";
            inp.style.outline="none";
            inp.style.padding="3px";
            setInterval(() => {
              inp.style.backgroundColor="white";
            },1);
            inp.style.borderRadius="25px";
            inp.style.border="2px solid black";
            inp.style.position="relative";
            window.addEventListener('keydown',function(e) {
                if (e.keyIdentifier=='U+000A' || e.keyIdentifier=='Enter' || e.keyCode==13) {
                    var code=document.getElementById("inp").innerText;
                      var codescript=document.getElementById("iframe").contentWindow.document.createElement("script");
                      codescript.innerHTML=code;
                      document.getElementById("iframe").contentWindow.document.body.appendChild(codescript);
                  document.getElementById("inp").innerText="Run a bookmarklet..";
                    e.preventDefault();
                }
            });

            document.body.appendChild(inpcont);
            inpcont.appendChild(inp);
  */
            var dev = document.createElement('img');
            dev.style.cursor="pointer";
            dev.style.position = "absolute";
            dev.style.width = "50px";
            dev.style.borderRadius="50%";
            dev.style.height = "50px";
            dev.src = "data:image/png;base64,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";
            dev.style.zIndex = "1001";
            dev.style.left = "1%";
            dev.style.top = "1%";
            dev.onclick = function() {
               window.location.reload(true);
            };

            document.body.appendChild(dev);

});
