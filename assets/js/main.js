$(document).ready(function() {
    $(".north-1").click(function() {
        $(".north").slideToggle("slow");
    });

    $(".east-1").click(function() {
        $(".east").slideToggle("slow");
    });

    $(".south-1").click(function() {
        $(".south").slideToggle("slow");
    });

    $(".west-1").click(function() {
        $(".west").slideToggle("slow");
    });

    $(".central-1").click(function() {
        $(".central").slideToggle("slow");
    });

    $(".about").click(function() {
        $(".location").hide();
        $(".option").removeClass("red");
        $(".opener").show("slow");
    });

    $(".option").click(function() {
        $(this).toggleClass("red");
    });

    $(".option").on("click", function() {
        $(".opener").hide("slow");
    });


    var template_params = {
        "your_name": "your_name_value",
        "your_email": "your_email_value",
        "your_request": "your_request_value"
    }

    var myform = $("form#myform");
    myform.submit(function(event) {
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "default_service";
        var template_id = "bicycle_scotland";

        myform.find("button").text("Sending...");
        emailjs.sendForm(service_id, template_id, myform[0])
            .then(function() {
                alert("Sent!");
                myform.find("button").text("Send");
            }, function(err) {
                alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                myform.find("button").text("Send");
            });
        return false;
    });
});
/*
function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {
                lat: 56.4907,
                lng: -4.2026
            }
        });
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var locations = [
            { lat: 56.3745, lng: -3.3546 },
            { lat: 56.1966, lng: -3.3764 },
            { lat: 56.2543, lng: -3.2056 },
            { lat: 56.3410, lng: -3.8710 },
            { lat: 56.9458, lng: -2.1972 },
            { lat: 57.5759, lng: -5.7430 },
            { lat: 56.4157, lng: -5.4692 },
            { lat: 55.6048, lng: -2.4599 }
        ];
        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    };
    
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
*/
