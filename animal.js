

var request = new XMLHttpRequest();
request.open('GET','https://zoo-animal-api.herokuapp.com/animals/rand');
request.send();
request.onload = function(){
var countrydata=JSON.parse(request.response);

    var aa= (countrydata.name)
    var bb= (countrydata.diet)
    var cc=(countrydata.habitat)
    var dd= (countrydata.animal_type)   
    var a= countrydata.image_link
    document.getElementById("image").src=a
    document.getElementById("name").innerText=`Animal Name:`+aa
    document.getElementById("diet").innerText=`Diet:`+bb
    document.getElementById("habitat").innerText= `Habitat:`+cc
    document.getElementById("animal_type").innerText=`Animal_type:`+dd
}
