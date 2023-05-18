    
    var path = window.location.pathname;
    var projectName = path.split("/").pop().split(".").shift();
    locationName = "url(projects/" + projectName + "/";
    phone = locationName + "vorschau-phone.jpg)";
    tablet = locationName + "vorschau-tablet.jpg)";
    standard = locationName + "vorschau.jpg)";
    
    changeImage()
    
    function changeImage() {
        if (window.innerWidth > 1150) {
            document.getElementsByClassName("header")[0].style.backgroundImage= standard;
        } else if (window.innerWidth > 600) {
            document.getElementsByClassName("header")[0].style.backgroundImage= tablet;
        } else {
            document.getElementsByClassName("header")[0].style.backgroundImage= phone;
        }
    }

    window.onresize = changeImage;