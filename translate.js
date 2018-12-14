function Translate(word,language){
    this.apikey = "trnsl.1.1.20181211T114927Z.1d71cfa59c35dc3c.dc837132c4e775fcdd7361ba2108cfa53560e43c";
    this.word = word;
    this.language = language;

    //XHR objesi

    this.xhr = new XMLHttpRequest();
}
Translate.prototype.translateWord = function(callback){
    //Ajax İşlemleri-this ile aldığımız yerler dinamik
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET",endpoint,true); //true ile işlemin asenkron olduğunu belirtiyoruz

    this.xhr.onload =()=>{
        if(this.xhr.status === 200){ //sorunsuz şekilde döndüğünü kontrol ediyoruz
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];
            callback(null,text); //hata yoksa null varsa text dönecek
           //console.log(JSON.parse(this.xhr.responseText).text[0]);
        }
        else{
            console.log("Hata oluştu",null);
        }
    }

    this.xhr.send();
};
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;

}