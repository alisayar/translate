//Prototype,Ajax,Callback

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);//Submit olayı olduğunda translateWord fonksiyonu çalışacak

    document.getElementById("language").onchange = function(){
        //Arayüz işlemleri
        console.log("Event");
        ui.changeUI();

    }
}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();
function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value); //çevrilecek kelime değiştiğinde
    translate.translateWord(function(err,response){
        if(err){
            //hata
            console.log("err");
        } else {
            ui.displayTranslate(response);
            //ui.changeLanguage(response);
        }
    });
    e.preventDefault(); //sayfanın yenilenmesini önlemek için
}