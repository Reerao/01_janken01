// $(".push").on("click", function () {

// var random = Math.floor(Math.random() * 3 +1 );
// console.log(random,  "ランダムな数字の箱")

// if(random === 1){
//     console.log("大吉");
//     $(".guruguru").html('<img src="./img/oji.jpeg" alt="画像">');
    
// }else if (random === 2){
//     console.log("中吉");
//     $(".guruguru").html('<img src="./img/pop.jpeg" alt="画像">');

// }else if (random === 3){
//     console.log("小吉");
//     $(".guruguru").html('<img src="./img/oji.jpeg" alt="画像">');
// }
//   });



const buttonStop = document.querySelector(".push");
const animationElement = document.querySelector(".laundryset");
const HTML = document.querySelector("html");

animationElement.addEventListener("animationiteration", () => {
  const animationCount = Number(getComputedStyle(HTML).getPropertyValue("--animationCount"));
  HTML.style.setProperty("--animationCount", animationCount + 1);
});


buttonStop.addEventListener("click", () => {
    animationElement.classList.remove("on-animation");
    animationElement.classList.add("is-stopped");
    animationElement.addEventListener("animationend", (event) => {
      /* イベント対象のアニメーション名で処理の出し分可能 */
      if (event.animationName === "guru") {
        animationElement.classList.remove("is-stopped");
        HTML.style.setProperty("--animationCount", 1);
      }
    });
    // alert("クリックしました")

  });










