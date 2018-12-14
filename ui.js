/**
 * Created by lenovo on 11.12.2018.
 */
function UI() {

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");
}
UI.prototype.changeUI = function(){
    //Arayüzü değiştiriyoruz

    this.outputImage.src = `images/${this.languageList.value}.png`; //image'si dinamik olarak değiştirdik
    this.outputLanguage.textContent = this.languageList.options[this.languageList.selectedIndex].textContent;



}
UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}

