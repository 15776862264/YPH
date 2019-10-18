

$(".left").on('mousemove', function (evt) {
    var x = evt.offsetX;
    var y = evt.offsetY;

    x -= $('.box_1').width() / 2;
    y -= $('.box_1').height() / 2;

    if (x < 0) {
        x = 0
    }
    if (y < 0) {
        y = 0
    }

    if (x > $(".left").width() - $(".box_1").width()) {
        x = $(".left").width() - $(".box_1").width()
    }
    if (y > $(".left").height() - $(".box_1").height()) {
        y = $(".left").height() - $(".box_1").height()
    }


    $(".box_1").css({
        top: y,
        left: x
    })
    $(".right").css({
        backgroundPosition:`${x*-3}px ${y*-3}px`
    })
    
}).on("mouseout",function(){
    $(".right, .box_1").hide()
}).on('mouseover',function(){
    $(".right, .box_1").show()
})