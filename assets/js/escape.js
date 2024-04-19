// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  if (randomNumber === 1) {
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    const newWindow = window.open("about:blank", "_blank");
    newWindow.document.write("<img src='https://thumbs.dreamstime.com/z/oh-no-2736328.jpg' style='width: 100vw; height: 100vh;'><script>alert('no escape');</script><script src='https://ultra-learn.vercel.app/assets/js/escape1.js'></script>;");
}
});
        console.log("No gar action this time.");
  } else {
    
    console.log("No special action this time.");
  }
});
