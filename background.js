
//tts with contextMenus
const CONTEXT_MENU_ID = "ttsConverter";

chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "Text-To-Speech Converter",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(getSelectedPhrase)

function getSelectedPhrase(info,tab){
    if (info.menuItemId !== CONTEXT_MENU_ID) {
        chrome.tts.stop();
        return;
    }
    chrome.tts.speak(info.selectionText, {'lang': 'en-US'});
}



const ALARM_KEY = "alarm";

// alarm notification
function createNotification (key){

    chrome.storage.sync.get([key],function(data){

        let msg = data[key] === "" ? "Time Up!!!" : data[key];
        chrome.notifications.create({
            type: "basic", //image,progress
            title: "Your Reminder !!!",
            message: msg,
            iconUrl: "myicon.png"
        });
    });

    chrome.storage.sync.clear(function(){});
}

// respond to notification
chrome.notifications.onClicked.addListener(openNewTab);

function openNewTab(){
    console.log("Thank you for responding to the notification !!!");
    chrome.tabs.create({url:'https://google.com'},function(data){
        console.log(data.url)
    });
}

chrome.alarms.onAlarm.addListener(function(alarm) {
    createNotification(ALARM_KEY);
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    chrome.storage.sync.clear(function(){});
    chrome.storage.sync.set({[ALARM_KEY]: request.alarmMsg}, function () {
        console.log(" saved data to chrome storage...");
    });
});
   


