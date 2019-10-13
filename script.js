$(function () {

    // $('#icon').on(function () {
    //     $('#icon').html('<img src=".\\images\\mabataki.png" alt="icon">');
    //     //$('#typing').css('color','red');
    // });

    // $(function(){
    //     $('#sample')
    //     .mousedown(function(){
    //         $(this).css('background-color', 'Blue');
    //     })
    //     .mouseup(function(){
    //         $(this).css('background-color', 'Red');
    //     })
    // });

    // $('#profile').hover(function () {
    //     $(this).css('font-size', '10vh');
    // },
    //     function () {
    //         $(this).css('font-size', '');
    //     });

    // $('#work').hover(function () {
    //     $(this).css('font-size', '10vh');
    // },
    //     function () {
    //         $(this).css('font-size', '');
    //     });

    // $('#blog').hover(function () {
    //     $(this).css('font-size', '10vh');
    // },
    //     function () {
    //         $(this).css('font-size', '');
    //     });

    function typing(str = "") {
        let buf = document.getElementById("typing").innerHTML;
        let writed = buf.length;
        let write = "";
        if (writed < str.length) {
            write = str.charAt(writed);
        } else {

        }
        document.getElementById("typing").innerHTML = buf + write;
    }

    const str = document.getElementById("typing").innerHTML;
    const delay = 80

    document.getElementById("typing").innerHTML = "";
    window.setInterval(function () { typing(str); }, delay);
});



