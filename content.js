

var alarmOnElement = document.getElementById('alarmOn');
var alarmOffElement = document.getElementById('alarmOff');

if(alarmOnElement && alarmOffElement){
    alarmOnElement.addEventListener('click',createAlarm);
    alarmOffElement.addEventListener('click',stopAlarm);
}
    
function createAlarm(){

    const SCHEDULEDTIME = new Date().getTime() + 5000;
   
    chrome.alarms.create("myAlarm", { when: SCHEDULEDTIME } );
       // chrome.alarms.create("myAlarm", {delayInMinutes: 1, periodInMinutes: 2} );

    var alarmTxt = document.getElementById('alarmTxt').value;
    chrome.runtime.sendMessage({alarmMsg: alarmTxt}, function(response) {
        alarmOnElement.removeEventListener("click", createAlarm);
    });
    
    window.close();
}

function stopAlarm(){
    chrome.alarms.clear("myAlarm");
    alert(" Alarm is Unset successfully ");
    window.close();
    alarmOffElement.removeEventListener("click", stopAlarm);
}











