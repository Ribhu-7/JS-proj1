


  function currentTime(){
    var date = new Date();
    var hours = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    let session = "AM";
    if(hours > 12){
      session = "PM";
   }
    // // hours = (hours > 12 ) ? hours -12 : hours ;
    // //  hours= ((hours - 12) <10 ) ? "0" + hours : hours;
    // var hrs = document.getElementsByClassName('nn');
    // hrs[0].innerText = hours ;
    // hrs[1].innerHTML = mm;
    // hrs[2].innerHTML = ss;
    
    // let sess = document.getElementsByClassName('am');  
    
    //   sess[0].innerHTML = session ;
    let waketime = document.getElementById("wakeup").value;
    let lunchtime = document.getElementById("lunch").value;
    let naptime = document.getElementById("nap").value;
    let nighttime = document.getElementById("night").value;
    if(waketime == hours){
        document.getElementById("changeImage").style.backgroundImage = "url('./Component 30 – 1.svg')";
    }

    if (lunchtime == hours) {
        document.getElementById("changeImage").style.backgroundImage =
          "url('./Component 31 – 1.svg')"; 
        document.getElementById("mesg").innerHTML = "LETS HAVE SOME LUNCH !!";
        document.getElementById("up").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
      }
      if (naptime== hours) {
        document.getElementById("changeImage").style.backgroundImage =
          "url('./lunch_image.png')";
        document.getElementById("mesg").innerHTML = "STOP YAWNING , GET SOME TEA !!";
        document.getElementById("up").innerHTML = "GOOD EVENING !!";
      }
      if (nighttime == hours) {
        document.getElementById("changeImage").style.backgroundImage =
          "url('./Component 32 – 1.svg')";
        document.getElementById("mesg").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP !!";
        document.getElementById("up").innerHTML = "GOOD NIGHT !!";
      }
    hours = (hours > 12 ) ? hours -12 : hours ;
    hours= ((hours - 12) <10 ) ? "0" + hours : hours;
    var hrs = document.getElementsByClassName('nn');
    hrs[0].innerText = hours ;
    hrs[1].innerHTML = mm;
    hrs[2].innerHTML = ss;
    
    let sess = document.getElementsByClassName('am');  
    
      sess[0].innerHTML = session ;
      var t = setTimeout(function(){ currentTime() }, 1000); 
      displayValue()
}

function displayValue(){
    let waketime = document.getElementById("wakeup").value
    let lunchtime = document.getElementById("lunch").value
    let naptime = document.getElementById("nap").value
    let nighttime = document.getElementById("night").value

    var wakeValue = document.getElementById("wakeup");
    var value1 = wakeValue.options[wakeValue.selectedIndex].text;

    var lunchValue = document.getElementById("lunch");
    var value2 = lunchValue.options[lunchValue.selectedIndex].text;

    var napValue = document.getElementById("nap");
    var value3 = napValue.options[napValue.selectedIndex].text;

    var nightValue = document.getElementById("night");
    var value4 = nightValue.options[nightValue.selectedIndex].text;
    
    if (waketime == "none") {
      document.getElementById("nwake").innerHTML = "";
    } else {
      document.getElementById("nwake").innerHTML =
        "Wake up time : " + value1;
    }

    if (lunchtime == "none") {
      document.getElementById("nlunch").innerHTML = "";
    } else {
      document.getElementById("nlunch").innerHTML =
        "Lunch time : " + value2;
    }

    if (naptime == "none") {
      document.getElementById("nnap").innerHTML = "";
    } else {
      document.getElementById("nnap").innerHTML = "Nap time : " + value3;
    }
    if (nighttime == "none") {
        document.getElementById("sleep").innerHTML = "";
      } else {
        document.getElementById("sleep").innerHTML = "Sleep time : " + value4;
      }
  }

  currentTime();