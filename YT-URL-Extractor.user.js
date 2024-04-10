// ==UserScript==
// @name         YT-URL-Extractor
// @namespace    https://github.com/NebularNerd/YT-URL-Extractor
// @version      2024-04-10
// @downloadURL  https://github.com/NebularNerd/YT-URL-Extractor/raw/main/YT-URL-Extractor.user.js
// @updateURL    https://github.com/NebularNerd/YT-URL-Extractor/raw/main/YT-URL-Extractor.user.js
// @description  Adds a 📋 button at the top of most YouTube pages, extracts multi ID's from those containing playlist style elements or single url from watch pages.
// @author       NebularNerd
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @grant        GM.setClipboard
// @grant        GM_setClipboard
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at document-idle
// ==/UserScript==


(function() {
    'use strict';
    // Nothing above here

    // Checks which clipboard we need
    // From https://www.reddit.com/r/userscripts/comments/p7mra9/comment/h9l6p8c/?utm_source=share&utm_medium=web2x&context=3
    // Solves issues where your *monkey version might prefer one over the other
    function setClipboard(text) {
        if (typeof GM_setClipboard === "function"){
            GM_setClipboard(text);
        } else {
            GM.setClipboard(text);
        }
    }

    // Regex matcher
    function gottacatchthemall(data){
        const regexp = /(\/shorts\/|watch.*?v=)([0-9A-z-_]{11})/g;
        const array = [...data.matchAll(regexp)];
        let txt = "";
        array.forEach(myFunction);
        function myFunction(value, index, array) {
            txt += 'https://youtu.be/'+ value[2]+'\n';
            console.log('Found: ' + txt);
        }
        // Remove duplicates
        let collection = txt.match(/.*/g).filter((item, index, self) => index === self.indexOf(item));
        setClipboard(collection.filter((str) => str !== '').join('\n'));
        banner_flash();
    }

    // Grab playlist <div> or plain url and send to clipboard
    function omnomnom() {
        if (currentPage.match(/playlist\?list=/) || currentPage.match(/com\/.*\/(videos|shorts)/)){gottacatchthemall(document.querySelector("#spinner-container+#contents").outerHTML);}
        if (currentPage.match(/\/featured/)){gottacatchthemall(document.querySelector("#header-container+#contents").outerHTML);} // The featured/home page will only grab visible ID's anything not seen on screen is not captured.
        if (currentPage.match(/watch.*?v=/)|| currentPage.match(/com(\/)shorts/)){gottacatchthemall(currentPage);}
    }

    // Delay timer from https://masteringjs.io/tutorials/fundamentals/wait-1-second-then
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    function killit(){
        const element = document.getElementById("onatop");
        element.remove();
    }

    // Make an overlay
    function banner_flash() {
    var overlaydiv = document.createElement('div');
    overlaydiv.id = 'onatop';
    overlaydiv.innerHTML = '<style>.centerme {margin: auto;width:75%;background: #d4e9fd; border: 3px solid #d4e9fd;border-radius: 12px; padding: 10px;}</style><div class="centerme"><center><p>Copied to clipboard 📋</p></center></div>';
    overlaydiv.style = "background: #f2f2f2;margin: auto;font-size: 4em;color:black;padding: 0.3em;width:100%;height:100%;position:fixed;opacity: 0.75;z-index: 9999";
    document.body.appendChild(overlaydiv);
    delay(500).then(() => killit());
    }

    // Make a discrete button
    var clickMeButton = document.createElement('button');
    var styling = "padding: 0;border: none;background: none;font-size: 2em;z-index: 9998;"
    function button(){
        clickMeButton.id = 'myButton';
        clickMeButton.innerHTML = '📋'; // emoji's make life so much easier 🙂
        clickMeButton.onclick = omnomnom;
        clickMeButton.title = 'Click to copy video url(s) to clipboard'
        clickMeButton.style = styling += 'opacity: 0.5;'
        clickMeButton.onmouseover = over;
        clickMeButton.onmouseout = andout;
        document.getElementById("center").appendChild(clickMeButton);
    }

    function over(){
        clickMeButton.style = styling += 'opacity: 1.0;'
    }

    function andout(){
        clickMeButton.style = styling += 'opacity: 0.5;'
    }

    // Check URL of page, derived from https://stackoverflow.com/a/35038669
    // store url on load
    let currentPage = location.href;
    // listen for changes
    setInterval(function(){
        if (currentPage != location.href){
            // page has changed, set new page as 'current'
            currentPage = location.href;
        } else {
            letsdoit();
        }
    }, 400);

    // Initial button loader, above function only works on page updates so we have to kick off the action.
    function letsdoit(){
        if (currentPage.match(/playlist\?list=/) || currentPage.match(/com\/.*\/videos/) || currentPage.match(/com\/.*\/shorts/) || currentPage.match(/watch\?v=/) || currentPage.match(/watch\?.*?v=/) || currentPage.match(/com\/shorts/) || currentPage.match(/\/featured/)) {
            button();
        } else {
            const element = document.getElementById("myButton");
            element.remove();}
    }

    letsdoit();

// Nothing below here
})();
