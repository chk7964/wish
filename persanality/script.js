
function checkloveper() {
    var name = document.getElementById('name').value;
    
    
    
    
    if(name == ""){
    alert('Please enter your name');
    }else if (name.length <=2 ) {
    alert('Min lenght is 3')
    }else if(!isNaN(name)){
    alert('Numbers are not allowed');
    }
    else{
    var lovdata = Math.floor(Math.random() * 50) + 50;
    document.getElementById('lovevalue').value = lovdata + "%"; 
    
    var lovdata1 = Math.floor(Math.random() * 50) + 50;
    document.getElementById('lovevalue1').value = lovdata1 + "%"; 
    
    var lovdata2 = Math.floor(Math.random() * 50) + 50;
    document.getElementById('lovevalue2').value = lovdata2 + "%"; 
    
    var lovdata3 = Math.floor(Math.random() * 50) + 50;
    document.getElementById('lovevalue3').value = lovdata3 + "%"; 
    
    var lovdata4 = Math.floor(Math.random() * 50) + 50;
    document.getElementById('lovevalue4').value = lovdata4 + "%"; 
    
    var lovdata5 = Math.floor(Math.random() * 50) + 50;
    document.getElementById('lovevalue5').value = lovdata5 + "%"; 
    
    var lovdata6 = Math.floor(Math.random() * 50) + 50;
    document.getElementById('lovevalue6').value = lovdata6 + "%"; 
    
    document.querySelector("#enter").hidden = true;
    document.querySelector("#result").hidden = false;
    
    
    document.querySelector("#name1").innerHTML = name;
    }
    
    }
    
    
    
    function gotowhatsapp() {
      var nameenter = document.getElementById("name").value;
        var name = document.getElementById("lovevalue").value;
        var phone = document.getElementById("lovevalue1").value;
        var email = document.getElementById("lovevalue2").value;
        var service = document.getElementById("lovevalue3").value;
        var service1 = document.getElementById("lovevalue4").value;
        var service2 = document.getElementById("lovevalue5").value;
        var service3 = document.getElementById("lovevalue6").value;
    
        var url = "https://api.whatsapp.com/send?text="
         +"*"+ nameenter+"*" + " की विशेषताए" + "%0a"
        + "व्यक्तित्व:- " + name + " 😘 %0a"
        + "निष्ठावान:- " + phone + " 😎 %0a"
        + "अमीरी:- " + email  + " 😊 %0a"
        + "बुद्धि :- " + service  + " 🤗 %0a"
        + "गुस्सा:- " + service1 + " 😡 %0a"
        + "Care:- " + service2 + " 😊 %0a"
        + "प्रेम:- " + service3 + " ❤️ %0a"
        +  "Cheak Your 👇👇" +  "%0a"
        +    "link.wishes4u.xyz/persanality" ; 
    
        window.open(url, '_blank').focus();
    }
    