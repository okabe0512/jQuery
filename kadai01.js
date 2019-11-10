//1. promptで入力した値から「正の数」「負の数」を判定してalertする処理を書いてください。
//2. 1.で数値以外が入力された場合には「数値を入力してください」とalertする処理を追加してください。

var judg =0;

var judg = prompt('数字を入力してください');
if (judg < 0  ){
    alert('負の数です');
} else if(judg > 0){
    alert('正の数です');
}
  else if(judg == 0){
    alert('0です');
} else{
    alert('数値を入力してください')
}


//3. 配列に'パンダ', 'ライオン', 'キリン'を定義し、while文ですべて表示する処理を書いてください。
//4. 3.でwhile文より前にpromptでキー入力し、その入力した内容が'ライオン'の場合に処理を中断するように変更してください。
//5. 4.で中断したときの'ライオン'の添字もalertするように変更してください。

var animals = ['パンダ', 'ライオン', 'キリン'];
var choice = prompt('動物を入力');

var i = 0;
while (i < animals.length) {
  if(choice ==='ライオン' && animals[i] ==='ライオン'){
  alert('ライオン');
  break;
 }
 alert(animals[i]);
 i++;
}

//6. オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。
//7. 6.でpromptで入力した動物名の体重をalertするように変更してください。

var animals2 = [
  {'name': 'パンダ', 'weight': '80kg'},
  {'name': 'ライオン', 'weight': '200kg'},
  {'name': 'キリン', 'weight': '300kg'}
 ];
 
var answer = prompt('知りたい動物の体重');

for(var x = 0; x < animals2.length; x++){
    
if(answer == animals2[x].name){
    alert(animals2[x].weight);
    
}

}

//8. 円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。円周率は3.14とします。

var answer8 = prompt('円の半径を入力');
var area = answer8 * answer8 * 3.14159;

alert(area);