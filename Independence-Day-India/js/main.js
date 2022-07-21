

let params = new URLSearchParams(window.location.search); // object to get query or strings in url
let myparams = params.get('n');
if (myparams === null) {
	myparams = "[Your Name]";
}
console.log(myparams);
localStorage.setItem("name", myparams);
var name = localStorage.getItem("name");
console.log(name);

document.getElementById("obj1").innerHTML = myparams + "<br> की ओर से आपको";




function get_name() {   // on-click function

	var x = document.getElementById("name").value;
	if(x == ""){
		alert('Please enter your name');
		}else if (x.length <=2 ) {
		alert('Min lenght is 3')
		}else if(!isNaN(x)){
		alert('Numbers are not allowed');
		} else{

	localStorage.setItem("name", x);
	var name = localStorage.getItem("name");
	console.log(name);
    window.location = 'share.html';
		}
}

var name1 = localStorage.getItem("name");
document.title = name1 + ' Wish You Happy Indepensday';
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
var x = setInterval(function() {

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
document.getElementById("demo").innerHTML = days + "<font color='red'> दिन,</font> " + hours + "<font color='red'> घंटे,</font> "
+ minutes + "<font color='red'>  मिनट,<br></font> " + seconds + "<font color='red'> सेकेंड </font>पहले  ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
  }
}, 1000);
