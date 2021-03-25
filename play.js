


let cas = 0;
let interval;
let sp = 0;
window.addEventListener("touchstart", function () {

     cas = performance.now();
     interval = setInterval(startinterval, 144);


})
window.addEventListener("touchend", function () {

     clearInterval(interval);


})



function startinterval() {

  if (cas + 1444 < performance.now()) {

    sp ++;


       if (sp % 2) {

         playm(false);

       }
       else {

         playm(true);

       }
    clearInterval(interval)

  }

}
