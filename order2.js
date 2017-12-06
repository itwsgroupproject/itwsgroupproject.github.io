$(document).ready(function() {
  
$.ajax({
        type: "GET",
        url: "http://128.113.193.180:8080/LukesDonuts/ProductList?id=3",
      //url: "Luke'sDonuts.json",
        dataType: "json",
        success: function(responseData, status){
        var output = "<ul>";
            $.each(responseData, function(i, menuItem) { //Takes in the "menuItems" from the projectURL.json file and uses the 'function(i, menuItem) code to convert them to menuItem variables'
              
           
           

            output+="<img src=\"http://128.113.193.180:8080/LukesDonuts/"+menuItem.id+".jpg\">"

            output+="<h2>"+menuItem.name+"</h2>"
            output+="<p>Price: " + menuItem.price + "</p>";
            output += "<p>ID: " + menuItem.id + "</p>";
            output += "<p>Name: " + menuItem.name + "</p>";
            output += "<p>Price: " + menuItem.price + "</p>";
            output += "<p>Timestamp: " + menuItem.timeStamp+"</p><br>";
            output+="<form>"
            output+="Full Name:<br>"
            output+="<input type=\"text\" name=\"fullname\">"
            output+="<br>"
            output+="<input id =\"submit\" type=\"submit\" value=\"Submit\">"
            output+="<input type=\"hidden\" value=\"menuItem.id\" name=\"id\">"
            output+="</form>"




            });output += "</ul>";
            
          $("#LukeDonutsOutput").html(output);
        },
        
        error: function(msg) {
          
                    // there was a problem
          alert("There was a problem: " + msg.status + " " + msg.statusText);
        },
        complete: function(response){
          $("p").hide();
          $("form").hide();
          $('h2').click(function(){
            $(this).next().toggle(0);
            $(this).next().next().toggle(0);
            $(this).next().next().next().toggle(0);
            $(this).next().next().next().next().toggle(0);
            $(this).next().next().next().next().next().toggle(0);
            $(this).next().next().next().next().next().next().toggle(0);
            $(this).next().next().next().next().next().next().next().toggle(0);
          });
          p
          $("#submit").click(function(){
            alert("The order has been placed");
          });
        }
});
});


