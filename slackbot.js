//TODO:   5) Get the NETADMIN course IDs and names and assign them appropriately
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
  token: ""
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
    //TODO: Change how logging works, especially for the first run of a timer
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

//Beginning of ms-graduateprograms catches
var mastersTimer = 0;
controller.hears('C200',['message_received','ambient'],function(bot,message) {
  if (spamCheck(mastersTimer))
  {
    mastersTimer = moment();
    return bot.reply(message, "You should probably ask a question that advanced over in the <#C14CULDV5|ms-graduateprograms> channel!");
  }
});
//End of ms-graduateprograms catches

//Beginning Project catches
var projectTimer = 0;
controller.hears('C436|help.* capstone|capstone.* help|capstone.* project',['message_received','ambient'],function(bot,message) {
  if (spamCheck(projectTimer))
  {
    projectTimer = moment();
    return bot.reply(message, "Check out <#C10405258|projects> for some capstone help!");
  }
});
controller.hears('group project|group projects',['message_received','ambient'],function(bot,message) {
  if (spamCheck(projectTimer))
  {
    projectTimer = moment();
    return bot.reply(message, "You check out the group <#C10405258|projects> channel!");
  }
});
//End Project catches

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

//Beginning writing catches
var writingTimer = 0;
controller.hears('C435',['message_received','ambient'],function(bot,message) {
  if (spamCheck(writingTimer))
  {
    writingTimer = moment();
    return bot.reply(message, "Don't be a prose-er, learn the write way in <#C15093NGK|writing> chat!");
  }
});
//End writing catches

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
controller.hears('job interview|interview for',['message_received','ambient'],function(bot,message) {
  if (spamCheck(resumeTimer))
  {
    resumeTimer = moment();
    return bot.reply(message, "Don't sweat the interview! Head over to <#C14CFRRTL|careerchat> to get some tips!");
  }
});
//End of resume catches

//TODO:Help messages if user mentions bot
// controller.hears('help',['mention'],function(bot,message) {
// 
// })

//New user orientation DM section
// Listen for the event that occurs when a user joins a channel!
controller.on('user_channel_join',function(bot,event) {
  // Regex for positive responses
  var yesUtterance = new RegExp(/^(yes|yea|yup|yep|ya|sure|ok|y|yeah|yah)/i);
  // Regex for negative responses
  var noUtterance = new RegExp(/^(no|nah|nope|n)/i);
  // Extract username from the event
  var username = event.text.match(/\<([^)]+)\>/)[1];
  // Send a message to the channel welcoming new user
  bot.reply(event,"Let's all welcome <" + username +"> to the WGU IT Slack chatroom!");
  // Each chunk of conversation is broken into its own function, which will then call the next one in the chain
  orientStart = function(response, convo) {
    // Message the user
    convo.ask('Hey there, <' + username + '>. I wanted to welcome you to the WGU IT slack chatroom! I am <FINALBOTNAME> and I am going to show you around real quick before you get started. Ready? (Please respond as this bot is interactive)', function(response, convo) {
      // Check if the users response is positive, negative, or outside our regex
      if (yesUtterance.test(response.text)) {
        // Bot's response based on their response
        convo.say('Great! Let us begin, this should only take a minute.');
        // Call the next function in the convo
        orientNavigate(response, convo);
        // Must place at the end of every convo.say per the docs
        convo.next();
      }
      else if (noUtterance.test(response.text)) {
        convo.say("Sorry, I need to show you this so you know the rules. It will only take a minute!");
        orientNavigate(response,convo);
        convo.next();
      }
      else {
        convo.say("I'll just take that as a yes...");
        orientNavigate(response, convo);
        convo.next();
      }
    });
  }
  orientNavigate = function(response, convo) {
    convo.ask('So, depending on the major you selected when joining, you have a variety of different channel topics on your side bar. They all begin with a \"#\". Do you see them?', function(response, convo) {
      if (yesUtterance.test(response.text)) {
        convo.say('Excellent! I\'ll keep it moving.');
        orientChannels(response, convo);
        convo.next();
      }
      else if (noUtterance.test(response.text)) {
        convo.say("No problem. If you are using a web browser, on the left side of the screen there should be a colored bar. If you are on a mobile client, tap the slack logo in the upper left corner.");
        orientChannels(response,convo);
        convo.next();
      }
      else {
        convo.say("Gesundheit!");
        orientChannels(response, convo);
        convo.next();
      }
    });
  }
  orientChannels = function(response, convo) {
    convo.ask('Please look over the channels and select the appropriate one to ask your question. For example, if you are having trouble with the Security+ course, please head to the <#C0ZLX9F0B|comptia> channel to ask for support. Keep completely offtopic discussions in <#C0Z77BT8V|random>, while more general school discussions occur in <#C0Z77BT4M|general>.\nAre you still with me? Only one more thing to go!', function(response, convo) {
      if (yesUtterance.test(response.text)) {
        convo.say('I knew you\'d understand.');
        orientRules(response, convo);
        convo.next();
      }
      else if (noUtterance.test(response.text)) {
        convo.say("Sorry, I know this is a chore, but we want to make sure you know how to use this room effectively!");
        orientRules(response,convo);
        convo.next();
      }
      else {
        convo.say("I know, I know. A machine lecturing you is absurd, but they made me do it!");
        orientRules(response, convo);
        convo.next();
      }
    });
  }
  orientRules = function(response, convo) {
    convo.ask('Lastly, I just wanted to let you know about the rules.\nWhile I know we are all adults here, we ask that you do not post anything that would be offensive or pornographic. NO CHEATING. If we get any reports of cheating, not only will we ban you from the slack, but we will also inform WGU of any cheating attempts.\nOur main goal is to provide a real time platform for students to help each other with their studies, and create as much of a community as we can have attending an online university. Ready to finish up?', function(response, convo) {
      if (yesUtterance.test(response.text)) {
        convo.say('Great! In case you have any questions or issues, please contact one of our admins <@U0Z6WFJLC|florin>, <@U0ZDW6E5A|weisegamer> or <@U148SJN3Y|wcamarra>.');
        orientComplete(response, convo);
        convo.next();
      }
      else if (noUtterance.test(response.text)) {
        convo.say("Aww, I am flattered you would rather sit and chat with me, but I think it would be best to let you continue on your way. I am not very intersting...\nIn case you have any questions or issues, please contact one of our admins <@U0Z6WFJLC|florin>, <@U0ZDW6E5A|weisegamer> or <@U148SJN3Y|wcamarra>.");
        orientComplete(response,convo);
        convo.next();
      }
      else {
        convo.say("In case you have any questions or issues, please contact one of our admins <@U0Z6WFJLC|florin>, <@U0ZDW6E5A|weisegamer> or <@U148SJN3Y|wcamarra>.");
        orientComplete(response, convo);
        convo.next();
      }
    });
  }
  orientComplete = function(response, convo) {
    convo.say('One last thing! We ask that you head over to <#C14D1H19P|feedback> if you have any ideas to improve this chatroom! Thank you so much for letting a machine lecture you! Now go out there have fun, and learn!');
    convo.next();
  };
  bot.startPrivateConversation({user: event.user},orientStart);
});
