


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
        console.log(thisMusic);


        let canI = true;
        for (let pos = 0; pos < array.length; pos ++) {

          if (array[pos].uri === thisMusic.uri) {
            canI = false;

          }

        }

            if (canI) {

              array.push(thisMusic);


              const element = Ota.createElementByTagName("div", {class:"poleyoutube"}, Ota.createElementByTagName("a", {href:thisMusic.uri}, `${thisMusic.name}`));

              appendElement(document.getElementById("youtube"), element)
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
