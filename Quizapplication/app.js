//問題文は増えるため配列でコードの省略化を図る
const quiz = [
  {
    question:'次の式のうち、コンパイルエラーとなるものはどれか？',
    answers:[
        'int a = 267',
        'int b = 0827',
        'int c = 0x10B',
        'int d = 0b100001011'
    ],
    correct:'int b = 0827',
  },{
    question:'次の変数宣言のうち、コンパイルエラーとならないものはどれか？',
    answers:[
        'var a;',
        'var b = null;',
        'var c = new ArrayList<>();',
        'var d = {1,2,3,};'
    ],
    correct:'var c = new ArrayList<>();',
  },{
    question:'メソッド宣言の記述として正しいものはどれ？',
    answers:[
        'Void sample(){ };',
        'void sample(){ };',
        'sample(){ };',
        'void sample(){ return "sample"};'
    ],
    correct:'void sample(){ };',
  }
];

const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;

//定数の文字列をHTMLに反映させる
const $button = document.getElementsByTagName('button');
//buttonlengthの値は変わらないので共通の値として定義
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = ()  => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
//定義した関数の呼び出し
setupQuiz();

//e：イベントのオブジェクトのこと。e.targetでtargetメソッドを呼び出し
const clickHandler = (e) => { //clickHandler：クリックしたら動く意味で関数定義
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('正解');
      score++;
    }else{
      window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizlength){
    //問題数がまだあれば実行
    setupQuiz();
  }else{
    //問題が無ければ実行
    window.alert('終了!あなたの正解数は' + score + '/' +  quizlength + 'です。');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}


//console.logとは？
//letとconstの違いは？
//getElementByIdとは？
//documentとは？