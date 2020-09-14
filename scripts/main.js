let inputNameButton = document.querySelector('button');
let welcomeText = document.querySelector('h3');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        welcomeText.innerHTML = 'Welcome, ' + myName;
        inputNameButton.textContent = 'change your id';
    }
}
if (localStorage.getItem('name')) {
    let storedName = localStorage.getItem('name');
    welcomeText.textContent = 'Meet you again, ' + storedName;
    inputNameButton.textContent = 'change your id';
}
inputNameButton.onclick = function () {
    setUserName();
}

let tempImages = document.getElementById('skins');
tempImages.onclick = function() {
    //alert("???");
    let mySrc = tempImages.getAttribute('src');
    if (mySrc === '/images/Arknights-summer2.jpg') {
        tempImages.setAttribute('src', '/images/Arknights-summer1.jpg');
        tempImages.setAttribute('alt', '明日方舟珊瑚海岸1');
        tempImages.setAttribute('title', '明日方舟珊瑚海岸1');
    }
    else if (mySrc === '/images/Arknights-summer1.jpg') {
        tempImages.setAttribute('src', '/images/Arknights-new-year.jpg');
        tempImages.setAttribute('alt', '明日方舟春节');
        tempImages.setAttribute('title', '明日方舟春节');
    }
    else if (mySrc === '/images/Arknights-new-year.jpg') {
        tempImages.setAttribute('src', '/images/Arknights-summer2.jpg');
        tempImages.setAttribute('alt', '明日方舟珊瑚海岸2');
        tempImages.setAttribute('title', '明日方舟珊瑚海岸2');
    }
}


