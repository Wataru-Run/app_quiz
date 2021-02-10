const quiz =[
{
  question: "日本プロ野球史上、歴代最多のホームラン数を誇る選手は次のうち誰？",
  answers: [ 
  "張本勲",
  "王貞治",
  "ハンク・アーロン",
  "長嶋茂雄"
  ],
correct: "王貞治"
}, 
{
  question: "日本人初のメジャーリーガーは？",
answers: [ 
"野茂英雄",
"イチロー",
"村上雅則",
"マック鈴木"
],
correct: "村上雅則"
}, 
{  
  question: "2021年時点の日本プロ野球の球団数は？",
answers: [ 
"12",
"10",
"16",
"9"
],
correct: "12"
},
{
  question: "日本プロ野球の中で、１シーズンの安打数記録保持者は誰？",
answers: [ 
"イチロー",
"内川聖一",
"ランディ・バース",
"秋山翔吾"
],
correct: "秋山翔吾"
}, 
{question: "広島東洋カープのマスコットキャラクターの名前は？",
answers: [ 
"カプリーナ",
"スターマン",
"スラィリー",
"ベル"
],
correct: "スラィリー"

}, 
{question: "日本歴代最多の盗塁記録保持者は誰？",
answers: [ 
"福本豊",
"高木豊",
"リッキー・ヘンダーソン",
"周東右京"
],
correct: "福本豊"

}, 
{
  question: "１シーズンで最も活躍した投手に送られる賞の名前は？",
answers: [ 
"サイヤング賞",
"野村賞",
"工藤賞",
"沢村賞"
],
correct: "沢村賞"
},
 {
  question: "名球会入りの資格を有することの出来るセーブ数は？",
  answers: [ 
  "150",
  "200",
  "250",
  "300"
  ],
  correct: "250"
 }, 
 {
  question: "北海道日本ハムファイターズが以前本拠地としていた都道府県は？",
answers: [ 
"横浜",
"福島",
"東京",
"京都"
],
correct: "東京"
 }, 
 {
  question: "東京ヤクルトスワローズの本拠地となっている球場の名前は？",
  answers: [ 
  "ミルミルドーム",
  "後楽園球場",
  "バンテリンスタジアム",
  "神宮球場"
  ],
  correct: "神宮球場"
 }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");

const buttonLength = $button.length;

//クイズの問題、選択肢を定義させる
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
   window.alert("残念・・・") ;
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  } else{
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};


//ボタンをクリックしたら正誤判定をする。
let handlerIndex = 0;
while (handlerIndex < $button.length){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
    });
  handlerIndex++;
}

