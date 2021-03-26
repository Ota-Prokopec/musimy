


window.addEventListener("load", function () {

  let object = localStorage.getItem("database");
  object = JSON.parse(object);

  database = object;

  for (const [key, value] of Object.entries(object)) {

    if (value !== undefined) {

      console.log(database);
      array.push({name:value, uri:key});
      doelementtosetting({uri:key, name:value});
    }



  }

})
                 function doelementtosetting(thisMusic) {

                   const element = Ota.createElementByTagName("div", {class:"poleyoutube"}, Ota.createElementByTagName("a", {href:thisMusic.uri}, `${thisMusic.name}`));

                   appendElement(document.getElementById("youtube"), element)

                   return element;

                 }
