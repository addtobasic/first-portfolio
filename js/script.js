$(function () {
    function welcome(str = "") {
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
    window.setInterval(function () { welcome(str); }, delay);
});
