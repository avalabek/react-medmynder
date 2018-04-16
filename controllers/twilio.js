const schedule = require("node-schedule");
// const accountSid = "ACd81ab3ef3e31190aca6c237abc43934b";
// const authToken = "46299682eb41071496b5cdea9e169315";
// const twilioNumber = "+16023627417";
// const client = require("twilio")(accountSid, authToken);
const sendFunction = require("./sendText.js");

module.exports = {
  twilio: function(hour,minute,userNumber,userName,medicine,instructions,twilioNumber) {
    console.log("twilio function hit");
    console.log("hour", hour);
    console.log("minute", minute);
    console.log("userNumber", userNumber);
    console.log("twilioNumber", twilioNumber)
    var messageBody =
      "Hi " + userName + ", it's time to take your " + medicine + ". " + instructions;
    console.log ("message body", messageBody)

    var textSchedule = new setSchedule.RecurrenceRule();
    textSchedule.dayOfWeek[(0, new schedule.Range(1, 6))];
    textSchedule.hour = hour;
    textSchedule.minute = minute;
    

    // function sendText(userNumber, twilioNumber, messageBody) {
    //   console.log("sendtext function hit");
    //   client.messages
    //     .create({
    //       to: userNumber,
    //       from: twilioNumber,
    //       body: messageBody
    //     })
    //     .then(message => console.log("message sent", message.sid));
    // }

    // var text = schedule.scheduleJob(textSchedule, function() {
    //   sendText(userNumber, twilioNumber, messageBody);
    // });

    sendFunction.sendText(userNumber, twilioNumber, "Initial Test From MedMynder");
  }
};
