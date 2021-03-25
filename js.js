



let touchpositionX = 0;
let touchpositionY = 0;


const card = document.getElementById("card");





      card.addEventListener("touchstart", start);
       function start () {


             console.log("click  ");
        touchpositionX = event.touches[0].clientX;
        touchpositionY = event.touches[0].clientY;

        card.addEventListener("touchmove", move);

      }







      card.addEventListener("touchend", function () {

        donormalposition();

        card.addEventListener("touchmove", move);

      })









    function move() {



              if (event.srcElement === card) {

                card.style.transform = `rotate(${(event.touches[0].clientX - touchpositionX)/44}deg)`;
                console.log();
                card.style.left = `${(event.touches[0].clientX - touchpositionX)/8.44}px`;
                card.style.top = `${(event.touches[0].clientY - touchpositionY)/8.44}px`;

                // Pro podržení aby se vymazal interval a písnička se navypla nezapla
                       clearInterval(interval);



                 if (event.touches[0].clientX - touchpositionX > 444) {
                   newsong();
                 }
                 else if (event.touches[0].clientX - touchpositionX < -444) {
                   newsong();
                 }
                 else if (event.touches[0].clientY - touchpositionY > 1444) {
                   newsong();
                 }
                 else if (event.touches[0].clientY - touchpositionY < -1444) {
                   newsong();
                 }

              }

    }
                     function newsong() {

                       nextsong();
                       card.removeEventListener("touchmove", move);

                       donormalposition();

                     }
                     function donormalposition() {

                       card.style.left = 0;
                       card.style.top = 0;
                       card.style.transform = "rotate(0deg)"

                     }
