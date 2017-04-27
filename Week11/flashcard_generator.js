function BasicCard(front, back) {
    this.front = front,
    this.back = back
};
var meBasic = new BasicCard("Who was the first Disney princess?", "Snow White");
console.log(meBasic.front);
console.log(meBasic.back);

function ClozeCard(text, cloze) {
    this.text = text,
    this.cloze = cloze
};
ClozeCard.prototype.showCloze = function() {
    console.log(this.cloze);
};
ClozeCard.prototype.showSome = function() {
    if (this.text.indexOf(this.cloze) >= 0) {
        var newText = this.text.replace(this.cloze, "...");
        console.log(newText);
    }
};
ClozeCard.prototype.showFull = function() {
    console.log(this.text);
};
var meCloze = new ClozeCard("Who was the first Disney character?", "Oswald the Lucky Rabbit");
meCloze.showCloze();
meCloze.showSome();
meCloze.showFull();
