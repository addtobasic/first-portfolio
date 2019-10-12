// $('#profile').hover
// {
//     function() {
//         font - size : 8vh;
//     },

//     function() {
//         display: none;
//     }
// };



function typing(str = ""){
    let buf = document.getElementById("typing").innerHTML; //書き込み済みの文字を要素から取得
    let writed = buf.length; //書き込み済みの文字数を取得
    let write = "";
    if(writed < str.length){
        write = str.charAt(writed); //1文字だけ取得する
    }else{
        buf = ""; //今回は何度も繰り返すために内容を消去します
    }
    document.getElementById("typing").innerHTML = buf + write; //1文字だけ追加していく
}

const str = document.getElementById("typing").innerHTML; //書き込む文字を要素から取得
const delay = 200 //1文字が表示される時間

document.getElementById("typing").innerHTML = "";
window.setInterval(function(){typing(str);}, delay);