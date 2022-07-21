let shareUrl = 'http://127.0.0.1:5500/index.html';    // get full url
let params = new URLSearchParams(window.location.search); // object to get query or strings in url

    var name1 =localStorage.getItem("name");
    console.log(name1);
document.getElementById("obj1").innerHTML = name1 + " wishes";
document.getElementById("share").href = "whatsapp://send?text= " + name1 + " wish u *HAPPY INDEPENDANCE DAY* " + shareUrl + "?n=" + name ; 

var name1=localStorage.getItem("name");
          document.title = name1 + ' Wish You Happy Indepensday' ;

// Click Body Event
const body=document.querySelector('body')
window.addEventListener("click",(e)=>{
	var coX=e.clientX;
	var coY=e.clientY;
	
	//console.log(coX)
	
	let heart=`<i class="fa fa-heart clickHeart" style="left:${coX}px;top:${coY}px"></i>`
	body.insertAdjacentHTML('afterbegin',heart)
	
	
	var heartTags=document.querySelectorAll(".clickHeart")
	
	heartTags.forEach((heartTag)=>{
	
	setTimeout(function(){
		heartTag.remove()
	},2000)
	
	}
	)
})
