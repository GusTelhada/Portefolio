console.log("hello");/*
var body = document.body;
var html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );

var hi_message = document.getElementById("about_me1");

window.addEventListener('scroll', function() {
    if(getYPosition()>600){
        var calculations = -1*(getYPosition()-600);
        var myString = calculations.toString();
        hi_message.style.bottom = myString + "px";
        document.getElementById("himsm").style.fontSize = myString + "px";
        //console.log("Passou");
    }
    
})


function getYPosition(){
    var top  = window.pageYOffset || document.documentElement.scrollTop
    return top;
  }*/