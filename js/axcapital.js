window.onscroll = function() {myFunction()};

var myButton = document.getElementById('myBtn');

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("scrollUp").className = "slideUp";
        document.getElementById('scrollUp').innerHTML = "ax capital";
        document.getElementById("scrollUp1").className = "slideUp1";
        document.getElementById('scrollUp1').innerHTML = "lorem40Lorem ipsum dolor sit amet, consectetur adipisicing" +
            " elit. Alias corporis delectus eos, et maiores modi mollitia nam non quaerat quibusdam repellendus reprehenderit?" +
            " Animi cumque ea id nihil optio quidem, quos voluptatum. Deleniti ipsam, ";
        document.getElementById('lifestyles').innerHTML = "lifestyles";
    }

    if (document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        myButton.style.display = "block";
    }else {
        myButton.style.display = "none"
    }
}

function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

