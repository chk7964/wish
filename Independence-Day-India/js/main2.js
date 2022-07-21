let shareUrl = 'https://www.wishes4u.xyz/Independence-Day-India';    // get full url
let params = new URLSearchParams(window.location.search); // object to get query or strings in url
let name1=localStorage.getItem("name");
          document.title = name1 + ' Wish You Happy Indepensday' ;


document.getElementById("obj1").innerHTML = name1 + " wishes";
document.getElementById("share").href = "whatsapp://send?text= " + name1 + " wish u *HAPPY INDEPENDANCE DAY* " + shareUrl + "?n=" + name1 ; 



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
