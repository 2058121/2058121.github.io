function dispText() {
    var text = "Contact Me Output-->\n姓：" +
        document.formname.lastname.value + "\n名：" +
        document.formname.firstname.value + "\n性別：" +
        document.formname.sex.value + "　\nお問い合わせ内容（詳細）：" +
        document.formname.requests.value + "\n年齢：" +
        document.formname.age.value + "\n電話番号：" +
        document.formname.tel.value + "\nメールアドレス：" +
        document.formname.email.value + "";
    var blob = new Blob([text], { "type": "text/plain" });

    //IEの場合
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, "outFileFromWindows.txt");
        //IE以外の場合
    } else {
        document.getElementById("createFile").href = window.URL.createObjectURL(blob);
    }
}
