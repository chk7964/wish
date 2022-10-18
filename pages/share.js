import { useRouter } from "next/router";
import Head from "next/head";
import slugify from "slugify";
import 'animate.css';
import { ImWhatsapp, ImTelegram } from "react-icons/im";

export default function Home() {
    const router = useRouter();
    const query = router.query;
    const name = query.by;
    const users = slugify(String(name), {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
      })
    const slugname = "chrishtmas";
    const pathname = "https://wishes4u.xyz/" + slugname + "/"
    const sharetext = encodeURIComponent(
          " Wishing you a Happy Women's Day " + pathname + "?by=" + users
    )
    

    const Whatsappshare = `https://api.whatsapp.com/send/?text=${sharetext}`
    const Telegramshare =
    "https://telegram.me/share/url?url=" +
    pathname + "?" + users +
    "&text=" +
   
    " Wishing you a Happy Women's Day"
  const copied = () => {
    toast.dark("📝 Copied", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
    })
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
    <title>!! दिवाली की हार्दिक शुभकामनाएँ !!</title>    </Head>
    
    
           <div  className="text-center mx-auto bg-white max-w-md p-4" >
        <div className="font-bold">
            <h1 className="uppercase" id="n1">{users}</h1>
            <p className="m-4">की ओर से आपको</p>
        </div>
               
            <b>
                <p id='demo' > </p>
            </b>
            <div className="text-center">
            <div ><img className=" block mx-auto h-52" src="/images/diwali-shubh-new1.png" /></div>
        </div>
            <br/>
          
            <div >
            <div className="font-bold text-xl">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">मंदिर की घंटी, आरती की थाली,</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">नदी के किनारे सूरज की लाली</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">ज़िंदगी लाए खुशियों की बहार
                </p>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">मंगलमय हो आपको सावन का त्योहार|
                </p>
            </div>
        
            <br/>
            <div><img className="block mx-auto h-72" src="/images/flowers.png"/></div>
           <p className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 w-52 block mx-auto uppercase shadow-lg shadow-indigo-500/40 font-bold border-2 border-rose-600">By- {users}</p>
        
    </div>
    <div className="flex">
            <a id="share1" className="bg-green-400 p-4 rounded m-2 w-1/2 border-2 border-rose-600"  href={Whatsappshare}
            ><span className="inline-block"><ImWhatsapp/></span> <b>यहाँ से whatsapp पर शेयर करे </b><span className="inline-block"><ImWhatsapp/></span></a>

              <a id="share2"  className="bg-sky-500 p-4 rounded m-1 w-1/2 border-2 border-rose-600"  href={Telegramshare}
          
            ><span className="inline-block"><ImTelegram/></span> <b>यहाँ से Telegram पर शेयर करे </b><span className="inline-block"><ImTelegram/></span></a>

              {/* <a id="share3"  className="open-button"
            
               > <i className="fa fa-twitter-square"
                ></i> <b >यहाँ से Twiiter पर शेयर करे </b><i
                 className="fa fa-twitter-square" ></i></a> */}
            </div>
    {/* <script src="js/main2.js"></script> */}

    <audio autoPlay>
        <source src="./song/bhola2.mpeg" type="audio/ogg"/>
        <source src="./song/bhola2.mpeg" type="audio/mpeg"/>
      </audio>

<marquee className="m1" behavior="scroll" direction="up" scrolldelay="0"> <br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
    </marquee>
    <marquee className="m2" behavior="scroll" direction="down" scrolldelay="0"> <br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/m2.png" height="30px" width="30px" /><br/><br/>
        <img src="/images/flowers.png" height="30px" width="30px" />
        <br/><br/>
    </marquee>
    </div>
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

    #n1 {
      animation: pulse 0.5s infinite;
      background: url(/images/bdbd.gif);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-stroke: 1px;
     }
      `}</style>
      </>
 )
}
