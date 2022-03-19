
$('#signup-btn').on('click', function() {
    $('.login-container').css("display","none");
    $('.signup-container').css("display","block");

    $('.signup').css("margin-top","400px");
});

$('#login-btn').on('click', function() {
    $('.login-container').css("display","block");
    $('.signup-container').css("display","none");

    $('.signup').css("margin-top","100px");
});