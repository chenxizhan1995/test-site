// var myHeading = document.querySelector('h1');
// myHeading.innerHTML = 'Hello world!';

// document.querySelector("html").onclick = function(){
//     alert('Ouch! Stop poking me!');
// }



var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox-icon.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}


/*添加个性化的欢迎信息

接下来我们会添加另一段代码，在用户初次进入站点时将网页的标题改成一段个性化的欢迎信息。
欢迎信息会由Web Storage API保存下来，
即使用户关闭页面之后再重新打开此页面，我们仍然可以得到之前的信息。*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
/*函数包含了一个 prompt() 函数， 会弹出一个对话框，
有一点像 alert() 只不过 prompt() 需要用户输入数据,，
而且在用户点击 OK 后将数据存储在变量里。
在这里，我们要求用户输入姓名。
接下来，我们调用一个叫 localStorage 的API，
它允许我们将数据存储在浏览器里以供后续调用。
我们使用 localStorage 的 setItem() 函数来创建并将数据存储在 'name'参数里，
然后将其值设置为包含用户输入的姓名的 myName 变量。
最后，我们将标题的 innerHTML 属性设置成加上用户姓名的字符串。*/
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
/*这段代码首先用一个非运算符（逻辑非）来检查 name 数据是否存在。
如果不存在， setUserName() 函数就会运行来创建它。
如果存在（比如用户在之前创建过） 我们通过 getItem()调用存储过的 name
然后将 innerHTML 设置为加上用户姓名的字符串，就像我们在 setUserName()里做的一样。*/
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}

// 因为 name 是存放在 localStorage 里的，它会持续到网站关闭，所以这段个性化的信息在你重新打开浏览器时将仍然在这！
// ?? 是存在浏览器还是存在服务器?