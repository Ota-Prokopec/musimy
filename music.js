


function playm(value) {

  if (value) {
    //start
    if (audio !== undefined) {
      startForTwo();
    }
    else {
      clicking();
    }

  }
  else {
    //  stop
    if (audio !== undefined) {
      audio.pause();
    }
  }

}




    function nextsong() {

      clicking();
        nullheart();
    }
