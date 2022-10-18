import Script from "next/Script"
export default function Home() {
 

  
  
    return (
        <>
   

      <Script async id="timer">{`
      // alert('Hello world!');
      
// Set the date we're counting down to
var countDownDate = new Date("Oct 18, 2022 00:00:00").getTime();

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

      `}</Script>

<p id='demo' > </p>
  </>

    )
}