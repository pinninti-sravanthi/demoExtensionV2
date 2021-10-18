
document.getElementById('alarmOn').onclick = function(){
    // chrome.alarms.create("myAlarm", {delayInMinutes: 1, periodInMinutes: 2} );
    chrome.alarms.create("myAlarm", { when: new Date().getTime() + 30000 } );
    var alarmTxt = document.getElementById('alarmTxt').value;
    chrome.runtime.sendMessage({alarmMsg: alarmTxt}, function(response) {});
    alert(" Alarm is set successfully ");
    window.close();
};

document.getElementById('alarmOff').onclick = function(){
    alert(" Alarm is Unset successfully ");
    chrome.alarms.clear("myAlarm");
    window.close();
};











