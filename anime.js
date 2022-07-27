var request= new XMLHttpRequest();
request.open('GET','https://animechan.vercel.app/api/random')
request.send();
request.onload = function(){
    var data=JSON.parse(request.response);
     var a= (data.anime)
      var b= (data.character)
      var c=(data.quote)
      
    document.getElementById("1").innerText = "Anime:" +a
    document.getElementById("2").innerText = "Character:" +b
    document.getElementById("3").innerText =  "Quote:" +c

    }   

    