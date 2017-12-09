$(document).ready(function() {      
    $("#submit").click(function(){
        //In here write an ajax that sends a get request 
        $.ajax({
            type: "GET",
            url: "http://129.161.195.97:8080/LukesDonuts/OrderList?name=int",
            
        

        });
    });
});







