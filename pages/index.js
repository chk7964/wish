import Router, { useRouter } from "next/router";
import Script from 'next/script'
import { useState, useEffect } from "react";
import slugify from "slugify";
import Head from "next/head";
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home(props) {

    const { query } = useRouter();
    const uname = query.by;
    console.log(uname);
    const [data, setData] = useState({ by: "" });

    let greeting;
    if (uname === undefined) {
        greeting = "[Your Name]";
    } else {
        greeting = uname;
    }

   



    const users = slugify(String(greeting), {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
    })

    const goTo = () =>  {
        if( document.getElementById('name').value === '' ){
            toast["warning"]("Please Enter Any Name")
          }
          else {
            Router.push({
                pathname: '/share',
                query:  data,
            })
        }
       
        // console.log('Free pizza!');
        // console.log(e);
    }

    
    return (
        <>
        <Head>
        <meta name="google" content="notranslate" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="!! दिवाली की हार्दिक शुभकामनाएँ !!" />
   
    <meta property="og:description" content="!! दिवाली की हार्दिक शुभकामनाएँ !!" />
    <meta property="og:site_name" content="!! दिवाली की हार्दिक शुभकामनाएँ !!" />
    <meta property="og:image" content="msg.html" /> 
    <title>!! दिवाली की हार्दिक शुभकामनाएँ !!</title>
     
        </Head>
        <ToastContainer />

        {/* <style jsx>{`#ma{
      background: white;
      max-width: 450px;
      min-height: 200px;
      margin: 0 auto;
      text-align: center;
      padding: 15px;
      box-shadow: 0 0 10px 1px rgb(0 0 0 / 14%), 0 1px 14px 2px rgb(0 0 0 / 12%), 0 0 5px -3px rgb(0 0 0 / 30%);}
      `}</style> */}
         <div id="ma" className="text-center mx-auto bg-white max-w-md p-4">

            <div>
                <h1 className=" uppercase" id="n1">{users}</h1>
                <p >की ओर से आपको</p>
            </div>
            <b>
                <p className="text-lg" id='demo'> </p>
            </b>
            <div ><img className=" block mx-auto h-52" src="/images/diwali-shubh-new1.png" /></div>

   

            <div>
                <div>

                    <p>मंदिर की घंटी, आरती की थाली,</p>
                    <p>नदी के किनारे सूरज की लाली</p>
                    <p>ज़िंदगी लाए खुशियों की बहार
                    </p>
                    <p>मंगलमय हो आपको सावन का त्योहार|
                    </p>
                </div>
                <br />
                <div><img className=" block mx-auto" src="/images/Lord1.png" /></div>
                <p className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 w-52 block mx-auto uppercase font-bold border-2 border-rose-600">By- {users}</p>
                <br />
                <div className="flex h-20">
                    <input id="name" className="w-4/5 p-4 rounded mr-2.5 inline-block border-2 border-rose-600" type="text" minLength="8"
                        placeholder="👉 Enter your name here..." value={data.by}
                        onChange={(event) =>
                            setData({
                                by: event.target.value,
                            })
                            
                        } />
                 
                 <button type="submit" onClick={goTo} className="w-1/5 bg-green-500 rounded p-4 inline-block border-2 border-rose-600 text-sm">👉 Create Wish</button>
                    

                </div>
            </div>

            <marquee className="m1" behavior="scroll" direction="up" scrolldelay="0"> <br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
            </marquee>
            <marquee className="m2" behavior="scroll" direction="down" scrolldelay="0"> <br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" /><br /><br />
                <img src="/images/m2.png" height="30px" width="30px" /><br /><br />
                <img src="/images/flowers.png" height="30px" width="30px" />
                <br /><br />
            </marquee>
            </div>
            {/* <audio controls autoplay preload="auto" hidden>
        <source src="./song/bhola1.mpeg"
            type="audio/ogg">
        <source src="./song/bhola1.mpeg"
            type="audio/mpeg">
    </audio> */}
            {/* <script src="js/main.js"></script> */}
            <style jsx>{`
     .m1 {
      position: fixed;
      left: 2%;
      width: auto;
      height: 100%;
      top: 1%;
      color: #000;
    }
    
    .m2 {
      position: fixed;
      right: 2%;
      width: auto;
      height: 100%;
      top: 1%;
      color: #000;
    }
   #n1 {animation: pulse 0.5s infinite;
    background: url(./images/bdbd.gif);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    // background-clip: text;
    -webkit-text-stroke: 1px;
   }
      `}</style>

<Script async id="timer">{`
      // alert('Hello world!');
      
// Set the date we're counting down to
var countDownDate = new Date("Oct 24, 2022 00:00:00").getTime();

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
        </>
    )
}


