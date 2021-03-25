

let touchpoint;
let pos = 0;
const cs = document.getElementById("setting");
window.addEventListener("touchstart", clicksetting);

const setting = document
let canmove = true;

  let touchend;

function clicksetting() {

      canmove = true;

  touchpoint = event.touches[0].clientX;


    window.addEventListener("touchmove", movesetting);



      touchend = false;

}


document.getElementById("wrap").addEventListener("touchend", function (event) {

  if (event.srcElement.id === "wrap") {

    if (!touchend) {

      settings(2);

      touchend = true;

    }

  }





})

function movesetting() {
  if (event.srcElement.id === "wrap") {
  if (canmove) {

    st(event.touches[0].clientX + "px");



    if (touchpoint + 444 < event.touches[0].clientX) {

      pos ++ ;

      settings(pos);

      canmove = false;

    }


    if (touchpoint - 444 > event.touches[0].clientX) {

      pos ++ ;

      settings(pos);

      canmove = false;

    }

    }
}
}



     function settings(pos) {

       if (pos % 2) {

         touchend = true;

         st("25%");

         card.removeEventListener("touchstart", start);

       }
       else {

         st("125%")
         card.addEventListener("touchstart", start);

       }

     }


     card.addEventListener("touchstart", function () {

              console.log(event.srcElement.className);

       if (event.srcElement === card) {

         st("125%");
         pos = 0;

       }



     })
           function st(value) {

             cs.style.top = value;


           }
