let shareUrl = 'https://www.wishes4u.xyz/Independence-Day-India';    // get full url
let params = new URLSearchParams(window.location.search); // object to get query or strings in url
let name1 = localStorage.getItem("name");
document.title = name1 + ' Wish You Happy Independence Day';


document.getElementById("obj1").innerHTML = name1;
document.getElementById("namefooter").innerHTML = "By " + name1;
document.getElementById("share1").href = "whatsapp://send?text=" + "अब की बार हर घर 🇮🇳 तिरंगा 🇮🇳 " + "%0A %0A" + "*" + name1 + "*" + " ने आपके लिए कुछ नया भेजा है।" + "%0A %0A" + "नीचे blue line पर क्लिक करे और देखे👇👇👇👇" + "%0A" + shareUrl + "?by=" + name1.replace("#", "").replace(/ /g, "_");
document.getElementById("share2").href = "https://telegram.me/share/url?url=" + shareUrl + "?by=" +name1.replace("#", "").replace(/ /g, "_")+"&text="+ "अब की बार हर घर 🇮🇳 तिरंगा 🇮🇳 " + name1 + " ने आपके लिए कुछ नया भेजा है।" + "%0A" + "नीचे blue line पर क्लिक करे और देखे👆👆👆👆";
document.getElementById("share3").href = "https://twitter.com/intent/tweet?text=" + "अब की बार हर घर 🇮🇳 तिरंगा 🇮🇳 "  + "%0A %0A" + name1 + " ने आपके लिए कुछ नया भेजा है।" + "%0A" + "नीचे blue line पर क्लिक करे और देखे 👇👇👇👇" + "%0A" + shareUrl + "?by=" + name1.replace("#", "").replace(/ /g, "_");
document.getElementById("share4").href = "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl + "?by=" + name1.replace("#", "").replace(/ /g, "_");


// Click Body Event
const body = document.querySelector('body')
window.addEventListener("click", (e) => {
  var coX = e.clientX;
  var coY = e.clientY;

  //console.log(coX)

  let heart = `<i class="fa fa-heart clickHeart" style="left:${coX}px;top:${coY}px"></i>`
  body.insertAdjacentHTML('afterbegin', heart)


  var heartTags = document.querySelectorAll(".clickHeart")

  heartTags.forEach((heartTag) => {

    setTimeout(function () {
      heartTag.remove()
    }, 2000)

  }
  )
})


// Set the date we're counting down to
var countDownDate = new Date("August 15, 2022 00:00:00").getTime();

// Update the count down every 01 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "<font color='green'> दिन,</font> " + hours + "<font color='green'> घंटे,</font> "
    + minutes + "<font color='green'>  मिनट,<br></font> " + seconds + "<font color='green'> सेकेंड </font>पहले  ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
  }
}, 1000);