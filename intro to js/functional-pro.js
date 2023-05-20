/* Task 1:
 Build a function-based
console log message generator */

function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    var style = `color: ${color};` += `background: ${background};` += `font-size: ${fontSize};`
}

console.log(message);
console.log(style);

/* Task 2:
Build another 
console log message generator */

function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px;"
    if(reason == "birthday") {
        console.log(`%cHappy birthday`, fontSize);
    } else if(reason == "Champions") {
        console.log(`%cCongrats on the title!`, fontSize);
    } else{
        console.log(message, style);
    }
}

//Task 3:
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

/* Task 4:
Insert a congratulatory
and custom message */

function styleAndCelebrate() {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'Champions');
