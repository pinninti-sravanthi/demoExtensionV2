
document.getElementById('alarmOn').onclick = function(){
    // chrome.alarms.create("myAlarm", {delayInMinutes: 1, periodInMinutes: 2} );
    
    const SCHEDULEDTIME = new Date().getTime() + 10000;
    chrome.alarms.create("myAlarm", { when: SCHEDULEDTIME } );
   
    var alarmTxt = document.getElementById('alarmTxt').value;
    chrome.runtime.sendMessage({alarmMsg: alarmTxt}, function(response) {});
    
    window.close();
};

document.getElementById('alarmOff').onclick = function(){
    alert(" Alarm is Unset successfully ");
    chrome.alarms.clear("myAlarm");
    window.close();
};











