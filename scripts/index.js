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
