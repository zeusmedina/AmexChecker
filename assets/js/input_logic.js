$(document).ready(function() {
    $("#hit").click(function() {
        var term = $(".input").val();
        if (term === "Dj Khaled") {
            $("#ans").text("You Loyal.")
        } else if (term.length % 2 === 0) {
            $("#ans").text("You Loyal.")
        } else {
            $("#ans").text("You a hater.")
        }
    })
});