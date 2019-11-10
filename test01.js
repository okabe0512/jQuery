//alert('外部ファイル');
var a = 1;
//alert(a);
var b =2;
var c = a + b;
alert(c);

var A ='りんご';
var B ='バナナ';
var C = A + B;
alert(C);

var fruits =[
  {'name': 'りんご', 'price': 100},
  {'name': 'バナナ', 'price': 150},
  {'name': 'いちご', 'price': 200},
];
alert(fruits[1].price);

//キー入力
var answer = prompt('1 + 1 は?');
if (answer == 2){
  alert('正解');
} else{
  alert('不正解');
}  

var answer2 = prompt('りんごとバナナのどちらが好きですか?');
if (answer2 == 'りんご') {
    alert('りんごは英語でappleです');
}   else if (answer2 == 'バナナ') {
    alert('バナナは英語でbananaです');
}   else{
    alert('りんご or バナナを入力してください');
}

var answer3 = prompt('りんごとバナナのどちらが好きですか？');
switch (answer3) {
  case 'りんご':
    alert('りんごは英語でappleです');
    break; // このbreakは重要です
  case 'バナナ':
    alert('バナナは英語でbananaです');
    break; // このbreakは重要です
  default:
    alert('りんご or バナナを入力してください');
    break; 
}

//for文
var fruits2 = ['りんご', 'バナナ', 'いちご', 'ぶどう', 'もも', 'キウイ', 'メロン', 'スイカ', 'みかん', 'さくらんぼ'];

for (var i = 0; i < fruits2.length; i++) {
  alert(fruits2[i]);
}

//while文
var fruits3 = ['りんご', 'バナナ', 'いちご', 'ぶどう', 'もも', 'キウイ', 'メロン', 'スイカ', 'みかん', 'さくらんぼ'];

var i = 0;
while (i < fruits3.length) {
    alert(fruits3[i]);
    i++;
}


var fruits4 = ['りんご', 'バナナ', 'いちご', 'ぶどう', 'もも', 'キウイ', 'メロン', 'スイカ', 'みかん', 'さくらんぼ'];

var i = 0;
while (true) {
  if (i >= fruits4.length) {
    break;
  }
  alert(fruits4[i]);
  i++;
}