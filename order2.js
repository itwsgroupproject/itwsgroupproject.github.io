$(document).ready(function() {
  
$.ajax({
        type: "GET",
        url: "http://129.161.137.119:8080/LukesDonuts/ProductList?id=31",
      //url: "Luke'sDonuts.json",
        dataType: "json",
        success: function(responseData, status){
        var output = "<ul>";
            $.each(responseData, function(i, menuItem) { //Takes in the "menuItems" from the projectURL.json file and uses the 'function(i, menuItem) code to convert them to menuItem variables'
              
           
           

            output+="<img src=\"//129.161.137.119/LukesDonuts"+menuItem.id+".jpg\">"

            output+="<h2>"+menuItem.name+"</h2>"
            //output+="<p>Price: " + menuItem.price + "</p>";
            output += "<p>ID: " + menuItem.id + "</p>";
            output += "<p>Name: " + menuItem.name + "</p>";
            output += "<p>Price: " + menuItem.price + "</p>";
            output += "<div id =\"small\">"
            output += "<p>Timestamp: " + menuItem.timeStamp+"</p><br>";
            output += "</div>"
            output+="<form action=\"http://129.161.139.216:8080/LukesDonuts/Order\">"
            output+="<label class=\"field\" for=\"fullName\">"
            output+= "Full Name:"
            output+= "</label>"
            output+="<div class = \"value\">"
            //output+="Full Name: "
            output+="<input type=\"text\" name=\"fullName\"/>"
            output+="</div>"
            output+="<br>"
             output+="<label class=\"field\" for=\"quantity\">"
            output+="Quantity: "
            output+= "</label>"
            output+="<div class = \"value\">"
            output+="<input type=\"text\" name=\"quantity\"/>"
            output+="</div>"
           // output+="<input type=\"text\" name=\"quantity\">"
           // output+="<input type=\"hidden\" value=\"menuItem.id\" name=\"id\">"
            output+="<br>"
            output+="<input id =\"submit\" type=\"submit\" value=\"Submit\">"
            output+="<input type=\"hidden\" value=" + menuItem.id + " name=\"id\">"
            output+="<br>"
            output+="<br>"
            output+="<br>"
            output+="<br>"
            output+="</form>"
            output+="<br>"
            output+="<br>"
            output+="<br>"



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
            //$(this).next().next().next().next().next().next().toggle(0);
           // $(this).next().next().next().next().next().next().next().toggle(0);
          });
          
          $("#submit").click(function(){
            alert("The order has been placed. Please wait for response");
          });
        }
});
});


