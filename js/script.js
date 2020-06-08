var menuClosed = 0;

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft= "250px";
  document.getElementById("videoLink").style.marginLeft= "10px";
  document.getElementById("thumb1").style.marginLeft= "40px";
  document.getElementById("sidenavLinks").style.display="block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "10px";
  document.getElementById("main").style.marginLeft = "10px";
  document.getElementById("videoLink").style.marginLeft = "10px";
  document.getElementById("thumb1").style.marginLeft = "40px";
  document.getElementById("sidenavLinks").style.display="none";
}


function menuClick() {
  if (menuClosed) {
    openNav()
    menuClosed = false;
  }
    else {
      closeNav()
      menuClosed = true;
    }
}

var originalThumb = document.getElementById("thumb1");
originalThumb.style.display = "none";
var videoLink = document.getElementById("videoLink");
videoLink.style.display = "none";

function snip () {
  var startInput = document.getElementById("startTime").value;
  var endInput = document.getElementById("endTime").value;
  var startT = startInput.split(":");
  var endT = endInput.split(":");
  startT = startT[0]*60+startT[1]*1;
  endT = endT[0]*60+endT[1]*1;
  var url = document.getElementById("input-box").value;
  var embedUrl = url.split("watch?v=");
  var urlFinal = "https://www.youtube.com/embed/" + embedUrl[1] + "?start=" + startT + "&end=" + endT + "&version=3";
  document.getElementById("thumb1").src = urlFinal;
  originalThumb.style.display = "block";
  document.getElementById("videoLink").innerHTML= urlFinal;
  videoLink.style.display = "block";
}
