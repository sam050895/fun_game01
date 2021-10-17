function add_number() {

    var first_number = parseInt(document.getElementById("text").value);
    var a =parseInt(2);
    var b= parseInt(5);
    var c =parseInt(50);
    var d = parseInt(1771);
    // var e = parseInt(1770);
    var second_number = parseInt(document.getElementById("text1").value);
    var result = first_number * a;
    var f =result + b;
    var g= f * c;
    // let text;
    // if (isNaN(x) || x < 1 || x > 10) {
    //   text = "Input not valid";
    // } else {
    //   text = "Input OK";
    // }
    
        document.getElementById("text2").value=d+g-second_number;
  
}
// const inputs = document.querySelectorAll('input');

// inputs.forEach(el => {
//   el.addEventListener('blur', e => {
//     if(e.target.value) {
//       e.target.classList.add('dirty');
//     } else {
//       e.target.classList.remove('dirty');
//     }
//   })
// })
