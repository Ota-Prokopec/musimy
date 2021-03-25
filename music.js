


function playm(value) {

  if (value) {
    //start
    console.log("start");
    if (audio !== undefined) {
      audio.play();
    }
    else {
      clicking();
    }

  }
  else {
    //  stop
    console.log("stop");
    if (audio !== undefined) {
      audio.pause();
    }
  }

}




    function nextsong() {

      clicking();
        nullheart();
    }
