


window.addEventListener("touchstart", touchstarttomovedelete);

let el;
let el__touchstart;
let deletepos = 0;
let eventtocontrol;
let normalcontrol;


function touchstarttomovedelete(event) {




      if (event.srcElement.className === "poleyoutube") {

        el = event.srcElement;

        el__touchstart =  event.touches[0].clientX;
        normalcontrol = el.offsetLeft + "px"

        eventtocontrol = event;

        window.addEventListener("touchmove", touchmovetomovedelete);

      }
      else if (event.srcElement.parentNode.className === "poleyoutube") {

        el = event.srcElement.parentNode;

        el__touchstart =  event.touches[0].clientX;
        normalcontrol = el.offsetLeft + "px"

        eventtocontrol = event;

        window.addEventListener("touchmove", touchmovetomovedelete);

      }

}
function touchmovetomovedelete() {

  const pravo =  event.touches[0].clientX - el__touchstart;
  const levo = el__touchstart -  event.touches[0].clientX;

  deletepos ++ ;
  if (pravo < 0) {
    //levo
        el.style.left = -levo + "px"
        console.log("levo");
  }
  else {
    //pravo
    el.style.left = pravo + "px";
    console.log("pravo");
  }

  control();
  console.log(deletepos);

}
window.addEventListener("touchend", () => {


  window.removeEventListener("touchmove", touchmovetomovedelete);

  if (deletepos < 45) {

    el.style.left = normalcontrol;

  }
  deletepos = 0;


});



function control() {

  if (deletepos > 24) {
       deleteFromDatabase(eventtocontrol)
  }


}
