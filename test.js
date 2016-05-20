var moment = require('moment');
var Botkit = require('botkit');
var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
// Token for TestSlack
//  token: ""
// Token for WGUIT
}).startRTM()

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention','ambient'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});
controller.hears('\[Hh\]ey \[Hh\]oot',['ambient','mention'],function(bot,message) {

  bot.reply(message,'Heya! Whatcha need?');

});
function spamCheck(spamTimer, durationMinutes)
{
  // Recreate now everytime we hear something for accurate maths
  nowTime = moment();
  // Check if the function supplied a timer, if not default to five minutes
  if (durationMinutes == null)
  {
    durationMinutes = 5;
  }
  // Check if the passed spamTimer is a moment object
  // OR Check to see if 5 minutes have passed between now and the timer
  if (!(moment.isMoment(spamTimer)) || (nowTime.diff(spamTimer, 'minutes') >= durationMinutes))
  {
    //Logging
    console.log("Timer differential: " + nowTime.diff(spamTimer, 'minutes') + "min");
    // Return true if okay to speak
    return true;
  }
}
//Beginning of Cisco catches
var ciscoTimer = 0;
controller.hears('C299|cisco|ccent|ccna|icnd.?1|icnd.?2|100-101|100-102',['message_received','ambient'],function(bot,message) {
  if (spamCheck(ciscoTimer))
  {
    ciscoTimer = moment();
    return bot.reply(message, "I hear the kind people over at <#C14BDHK43|cisco> are in a listening state!");
  }
});
//End of Cisco Catches

//Beginning of Comptia catches
var comptiaTimer = 0;
controller.hears('C176|C178|C393|C394|C480|C697|C698|220-80[12]|220-90[12]|220-70[12]|[Ll][Xx]0-10[34]|[Nn]10-006|[Ss][Yy]0-401|[Pp][Kk]0-003|[Aa]\\+|[Ss]ecurity\\+|[Nn]etwork\\+|[Pp]roject\\+|[Ll]inux\\+',['message_received','ambient'],function(bot,message) {
  // Call the spamCheck function to make sure we don't botspam ala slackbot
  if (spamCheck(comptiaTimer))
  {
    // Since this came back true and okay to speak, lets restart the timer
    comptiaTimer = moment();
    // and then give people some much needed direction
    return bot.reply(message, "You should try asking the nice folks in <#C0ZLX9F0B|comptia> for help!");
  }
});
//End of Comptia catches

//Beginning of Data catches
var dataTimer = 0;
controller.hears('book.*?(sql|mysql|database|data (warehousing|processing|management))|(sql|mysql|database|data (warehousing|processing|management)).*?book',['message_received','ambient'],function(bot,message) {
  if (spamCheck(dataTimer))
  {
    dataTimer = moment();
    return bot.reply(message, "I think you should JOIN the conversation in <#C14UM3XCZ|data>!");
  }
});
//controller.hears("/help.*?(sql|mysql|database|data (warehousing|processing|management))|(sql|mysql|database|data (warehousing|processing|management)).*?help/i",['message_received','ambient'],function(bot,message) {
controller.hears("C170|C175|C192|C189|sql|mysql|database|data (warehousing|processing|management)",['message_received','ambient'],function(bot,message) {
  if (spamCheck(dataTimer))
  {
    dataTimer = moment();
    return bot.reply(message, "INSERT INTO <#C14UM3XCZ|data> VALUES ('this', 'conversation')");
  }
});
//End of Data catches

//Beginning of gen_ed catches
var genEdTimer = 0;
controller.hears('/book.*?(math|english|literature|humanities|science|physics|alegbra)|(math|english|literature|humanities|science|physics|alegbra).*?book/i',['message_received','ambient'],function(bot,message) {
  if (spamCheck(genEdTimer))
  {
    genEdTimer = moment();
    return bot.reply(message, "If I am reading you correctly, <#C14UTM5U5|gen_ed> should be able to help you out!");
  }
});
controller.hears('math|english|literature|humanities|science|physics|alegbra|ORA1|C100|C132|C164|C168|C182|C255|C278|C455-7|C459|C483|C484',['message_received','ambient'],function(bot,message) {
  if (spamCheck(genEdTimer))
  {
    genEdTimer = moment();
    return bot.reply(message, "Sounds like you should ask over in <#C14UTM5U5|gen_ed>!");
  }
});
//End of gen_ed catches

//Beginning Java catches
var javaTimer = 0;
controller.hears('java|OCA|OCP|C169|C195|C196',['message_received','ambient'],function(bot,message) {
  if (spamCheck(javaTimer))
  {
    javaTimer = moment();
    return bot.reply(message, "Pour your problems into our <#C14CTP2G0|java> channel!");
  }
});
//End Java catches

//Beginning of Microsoft catches
var msTimer = 0;
controller.hears('C18[5-7]|70-41[0-2]|mcsa|help.*?\\bmicrosoft\\b|70-41[0-2]|mcsa|C18[5-7].*?|.*?\\bmicrosoft|70-41[0-2]|mcsa|C18[5-7]\\b.*?help',['message_received','ambient'],function(bot,message) {
  if (spamCheck(msTimer))
  {
    msTimer = moment();
    return bot.reply(message, "Check out <#C14CWTFQD|microsoft> if you need any MCSA help!");
  }
});
//End of Microsoft catches

//Beginning Python catches
var pythonTimer = 0;
controller.hears('python|C173|scripting and programming foundations',['message_received','ambient'],function(bot,message) {
  if (spamCheck(pythonTimer))
  {
    pythonTimer = moment();
    return bot.reply(message, "Don't worry, <#C14CVGZ71|python> is for the programming language, not to hang out with snakes.");
  }
});
//End Python catches

//Beginning webdev catches
var webdevTimer = 0;
controller.hears('xzys|C376|html|webdev|css|jquery|bootstrap',['message_received','ambient'],function(bot,message) {
  if (spamCheck(webdevTimer))
  {
    webdevTimer = moment();
    return bot.reply(message, "Get your <head> on straight in the <#C151NCWD6|webdev> chat!");
  }
});
//End webdev catches

//Beginning of resume catches
var resumeTimer = 0;
controller.hears('\\b[Hh]elp\\b.*?\\b[Rr]esume\\b|\\b[Rr]esume\\b.*?\\b[Hh]elp\\b',['message_received','ambient'],function(bot,message) {
  if (spamCheck(resumeTimer))
  {
    resumeTimer = moment();
    return bot.reply(message, "Need help with your resume? Check out <#C14CFRRTL|careerchat>!");
  }
});
controller.hears('\\b[Cc]heck\\b.*?\\b[Rr]esume\\b|\\b[Rr]esume\\b.*?\\b[Cc]heck\\b',['message_received','ambient'],function(bot,message) {
  if (spamCheck(resumeTimer))
  {
    resumeTimer = moment();
    return bot.reply(message, "Please head on over to <#C14CFRRTL|careerchat> to get some feedback!");
  }
});
controller.hears('\\b[Rr]eview\\b.*?\\b[Rr]esume\\b|\\b[Rr]esume\\b.*?\\b[Rr]eview\\b',['message_received','ambient'],function(bot,message) {
  if (spamCheck(resumeTimer))
  {
    resumeTimer = moment();
    return bot.reply(message, "Did I hear someone say resume? Report to <#C14CFRRTL|careerchat> soldier, on the double!");
  }
});
controller.hears('job interview|interview for|',['message_received','ambient'],function(bot,message) {
  if (spamCheck(resumeTimer))
  {
    resumeTimer = moment();
    return bot.reply(message, "Don't sweat the interview! Head over to <#C14CFRRTL|careerchat> to get some tips!");
  }
});
//End of resume catches

controller.on('user_channel_join',function(bot,event) {
  var username = event.text.match(/\<([^)]+)\>/)[1];
  //TODO: Look at what channels that user is a part of using the web api pull, and use that to out what degree program they are in
  // or look at the user's title assuming that actually worked lol
  bot.reply(event,"Let's all welcome <" + username +"> to the WGU IT Slack chatroom!");
  bot.startPrivateConversation({user: event.user},function(err,dm){
    dm.say("Hey there, <" + username + ">! Let me give you a quick idea of how this chatroom is layed out!");
    dm.say("This is where we will tell you about the different channels and their uses! Sadly, they guy who is supposed to tell me what to say is lazy and just wants to get the proof of concept done. Soooo.... I have no information for you right now.")
  });
});
