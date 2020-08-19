$("document").ready(function(){
    setTimeout(function(){
        $("div.alert").fadeOut();
    }, 5000 ); // 5 secs

});

$(".delete-sup").on("submit", function() {
    return confirm("Are you sure?");
});
