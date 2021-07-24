/* https://novicengineering.com/javascript_typinggame/ *//* タイピングゲームの作り方 */
/* https://techacademy.jp/magazine/5537 *//* タイマー処理の説明 */
/* https://www.javadrive.jp/javascript/string/index12.html *//* charAtの説明 */
/* https://www.javadrive.jp/javascript/number/index5.html *//* toFixedの説明 */
/* https://web-designer.cman.jp/javascript_ref/keyboard/keycode/ *//* キーコードの説明 */
var wordlistA = ["daigaku","azisai","orinpikku","kuruma","umi","sunahama","kyakuhon","sunadokei","reizouko","hatiouzi"];
var wordlistA_ex = ["大学","紫陽花","オリンピック","車","海","砂浜","脚本","砂時計","冷蔵庫","八王子"];
var wordlistB = ["inta-nsippu","bokyaburari-","puroguramingu","nettyuusyou","ryukkusakku","syoppingubaggu","fissingusenta-","singatakoronauirusu","wettotelissyu","toirettope-pa-"];
var wordlistB_ex = ["インターンシップ","ボキャブラリー","プログラミング","熱中症","リュックサック","ショッピングバッグ","フィッシングセンター","新型コロナウイルス","ウェットティッシュ","トイレットペーパー"];
var wordlistC = ["zenkokukenkouhokenkyoukai","syounennyotaisiwoidake","hyakugaiatteitirinasi","sukikosomononozyouzunare","akamakigamiaomakigamikimakigami","mitugonotamasiihyakumade","anonagesinonaganaginatahadaganaganaginatazo","toukyoudelizuni-rando","atamakakusitesirikakusazu","nouarutakahatumewokakusu"];
var wordlistC_ex = ["全国健康保険協会","少年よ大志を抱け","百害あって一利なし","好きこそ物の上手なれ","赤巻紙青巻紙黄巻紙","三つ子の魂百まで","あの長押の長薙刀は誰が長薙刀ぞ","東京ディズニーランド","頭隠して尻隠さず","脳ある鷹は爪を隠す"];
var wordlist;
var wordlist_ex;
var time_limit;
var readytime = 3;
var score = 0;
var correct;
var mistake = 0;
var char_num = 0;
var word_char;
var random;

function ready() {
    count.style.visibility = "visible";
    word.style.visibility = "visible";
    readytime = 3;
    scoredis.innerHTML="";//innerHTML = HTML内の書き換え
    start_button.style.visibility = "hidden";
    //.style.visibility = CSSの役割と同様にstyleを指定
    //.visibilityはボックスの表示、hiddenは非表示
    var readytimer = setInterval(function(){
        count.innerHTML = readytime;
        readytime--;
        if(readytime<0){
            clearInterval(readytimer);
            gameStart();
        }
    },1000);//1000 = 1000ミリ秒ごとということ = 1秒ごと
}
/*********************************************
タイマー処理
・setTimeout = 一定時間後に一度だけ特定処理を行う
    setTimeout( 関数function, 一定時間の指定[, 引数1, 引数2,.....])
・setInterval = 一定時間ごとに特定処理を繰り返す
    setInterval( 関数function, 一定時間の指定[, 引数1, 引数2,.....])
    
    関数は定義をする
    一定時間の設定はミリ単位
・clearInterval = setIntervalの処理を停止する
**********************************************/
function gameStart(){
    score = 0.0;
    mistake = 0;
    correct = 0;
    if(document.formname2.sec.value=="30"){
    time_limit=30;
    }else if(document.formname2.sec.value=="60"){
        time_limit=60;
    }else if(document.formname2.sec.value=="90"){
        time_limit=90;
    }
    wordDisplay();
    var time_remaining = time_limit;//90
    console.log(time_remaining);
    var gametimer = setInterval(function(){
        count.innerHTML = "残り時間：" + time_remaining + " 秒";
        time_remaining--;
        if(time_remaining <= 0){
            clearInterval(gametimer);
            finish();
        }
    },1000);
}
function wordDisplay(){
    if(document.formname2.List.value=="A"){
        wordlist = wordlistA;
        wordlist_ex = wordlistA_ex;
    }else if(document.formname2.List.value=="B"){
        wordlist = wordlistB;
        wordlist_ex = wordlistB_ex;
    }else if(document.formname2.List.value=="C"){
        wordlist = wordlistC;
        wordlist_ex = wordlistC_ex;
    }
    random = Math.floor(Math.random() * wordlist.length);
    word.innerHTML = wordlist[random];//ランダムで配列番号を挿入
    japanese.innerHTML = wordlist_ex[random];
    charInsort();
}
function charInsort(){
    word_char = wordlist[random].charAt(char_num);
    //文字列.charAt(インデックス)で指定した位置の文字を戻り値として返す
}
function finish(){
    count.style.visibility = "hidden";
    word.style.visibility = "hidden";
    score = Math.floor(Math.pow(correct,2) * Math.pow((correct/(correct+mistake)),5));
    scoredis.innerHTML="<h1>Your Score："+score+"点</h1>"+"<h2>正タイプ数："+correct+" types</h2>"+"<h2>ミスタイプ数："+mistake+" types</h2>"+"<h2>正答率："+(correct/(correct+mistake)*100).toFixed(1)+"%</h2>";
    //数値.toFixed([小数点の桁数])
    count.innerHTML="";
    word.innerHTML="";
    japanese.innerHTML="";
    start_button.style.visibility = "visible";
    word_char=0;
    random=0;
    char_num=0;
}
document.onkeydown = function(e){
    //onkeydown = キーを押している時にイベントが行われる
    if(e.keyCode == 189){
        //キーコードがあって、189は = または -
        keyStr = "-";
    }else if(e.keyCode == 188){
        //188は < または ,
        keyStr = ",";
    }else{
        var keyStr = String.fromCharCode(e.keyCode);// キーコードを渡して、文字に変換
        keyStr = keyStr.toLowerCase();// .toLowerCase()=文字列に大文字が含まれていたときに小文字に変換
    }
    if(keyStr == word_char){
        if(document.formname2.music.value=="1"){    
            document.getElementById('missaudio').pause();
            document.getElementById('missaudio').currentTime = 0;
            document.getElementById('correctaudio').pause();
            document.getElementById('correctaudio').currentTime = 0;
            document.getElementById('correctaudio').play();
        }
        word.innerHTML="<span style='color: red;'>"+wordlist[random].substr(0, char_num+1)+"</span>"+wordlist[random].substr(char_num+1,wordlist[random].length);
        char_num++;
        correct++;
        charInsort();
    }else{
        if(document.formname2.music.value=="1"){
            document.getElementById('missaudio').pause();
            document.getElementById('missaudio').currentTime = 0;
            document.getElementById('correctaudio').pause();
            document.getElementById('correctaudio').currentTime = 0;
            document.getElementById('missaudio').play();
        }
        mistake++;
    }
    if(char_num == wordlist[random].length){
        char_num=0;
        wordDisplay();
    }
};
