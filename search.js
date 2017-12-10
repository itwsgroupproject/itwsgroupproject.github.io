$(document).ready(function() {
    $("#search").click(function() {
        //In here write an ajax that sends a get request 
        var uri = encodeURI("http://129.161.139.216:8080/LukesDonuts/OrderList?name=" + document.getElementById("fullName").value);
        $.ajax({
            type: "GET",
            url: uri,
			dataType: "json",
            success: function(orders) {
            	var output = "<ul>";
                $.each(orders, function(i, order) {
					alert(order.product.name);

					output+="<img src=\"http://129.161.139.216:8080/LukesDonuts/"+order.product.id+".jpg\">"
					output+="<p>customername: " + order.customername + "</p>"
					output+="<p>id: " + order.id + "</p>"
					output+="<p>Product id: " + product.id + "</p>"
					output+="<p>Product name: " + product.name + "</p>"
					output+="<p>Product price: " + product.price + "</p>"
					output+="<p>Product timeStamp: " + product.timeStamp + "</p>"
					output+="<p>quantity: " + order.quantity + "</p>"
					output+="<p>Order timeStamp: " + order.timeStamp + "</p>"
					output+="<p>Order total: " + order.total + "</p>"


//[{
//    "customername": "Travis",
//    "id": 0,
//    "product": {
//        "id": 3,
//        "name": "Banana",
//        "price": 3,
//        "timeStamp": "2017-11-30 12:30:20.0"
//    },
//    "quantity": 1,
//    "timeStamp": 1512853462226,
//    "total": 3
//}, {

//    "customername": "Travis",
//    "id": 0,
//    "product": {
//        "id": 2,
//        "name": "Orange",
//        "price": 2,
//        "timeStamp": "2017-11-30 12:28:10.0"
//    },
//    "quantity": 1,
//    "timeStamp": 1512853465279,
//    "total": 2
//}]
//                });
//            }
//
//
//        });
//    });
//});