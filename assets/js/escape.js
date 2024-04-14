document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    const newWindow = window.open("about:blank", "_blank");
    newWindow.document.write("<img src='https://thumbs.dreamstime.com/z/oh-no-2736328.jpg' style='width: 100vw; height: 100vh;'><script>alert('no escape');</script><script src='escape.js'></script>;");
}
});
