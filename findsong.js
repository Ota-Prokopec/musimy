


function deleteFromDatabase(event) {

  const valueKey = event.srcElement.childNodes[0].getAttribute("href");

  for (const [key, value] of Object.entries(database)) {

    console.log(key, valueKey);

    if (valueKey === key) {


        console.log("remove",  valueKey);
      database[valueKey] =  undefined;
      givelocal();
      deleteelement(event.srcElement);

    }

  }

}




    function deleteelement(element) {


      element.remove();

    }
