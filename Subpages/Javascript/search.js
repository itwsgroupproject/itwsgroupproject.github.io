$(document).ready(function() {
    $("#search").click(function() {
        //In here write an ajax that sends a get request 
        var uri = encodeURI("http://129.161.196.212:8080/LukesDonuts/OrderList?name=" + document.getElementById("fullName").value);
        $.ajax({
            type: "GET",
            url: uri,
			dataType: "json",
            success: function(orders) {
            	var output = "<ul>";
                $.each(orders, function(i, order) {

					output+="<img src=\"http://129.161.196.212:8080/LukesDonuts/"+order.product.id+".jpg\">"
					output+="<p>customername: " + order.customername + "</p>"
					output+="<p>id: " + order.id + "</p>"
					output+="<p>Product id: " + order.product.id + "</p>"
					output+="<p>Product name: " + order.product.name + "</p>"
					output+="<p>Product price: " + order.product.price + "</p>"
					output+="<p>Product timeStamp: " + order.product.timeStamp + "</p>"
					output+="<p>quantity: " + order.quantity + "</p>"
					output+="<p>Order timeStamp: " + order.timeStamp + "</p>"
					output+="<p>Order total: " + order.total + "</p>"

          
                    
                });
                $("#return").html(output);
            }


        });
    });
});