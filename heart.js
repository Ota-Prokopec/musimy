


const heart = document.getElementById("heart");
let posclick = 0;
function nullheart() {

  posclick = 0;
  none();
  document.getElementById("first-heart").style.display = "block";



}
heart.addEventListener("click", function () {

  posclick ++;

      if (posclick % 2) {

        none();
        document.getElementById("second-heart").style.display = "block"


        let canI = true;
        for (const [key, value] of Object.entries(database)) {

          if (key === thisMusic.uri && value !== undefined) {
            canI = false;

          }

        }

            if (canI) {

              array.push(thisMusic);


                   //element to setting
                   //from heart in onreload.js
                const element = doelementtosetting(thisMusic);


              // give to database

              console.log(element);
              database[thisMusic.uri] = element.innerText;
              //  to local storage
              givelocal();
            }




      }
      else {

        none();
        document.getElementById("thirt-heart").style.display = "block";

      }

})


         function none() {

           document.getElementById("first-heart").style.display = "none";
           document.getElementById("second-heart").style.display = "none";
           document.getElementById("thirt-heart").style.display = "none";


         }
