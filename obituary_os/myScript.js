const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const ALL_MSGS = [['user', 'two'],
['bot', "I'm sorry that service has not been fully implemented yet. Look for our update in 3-4 months.<br>What services would you like to avail yourself of?"],
['options', "Obituaries, tributes, and eulogies<br>Funeral arrangements<br>Condolence messages [BETA],<br>Other"],
['user', 'One, I guess'],
['bot', "Excellent! Please enter your loved one's Tax ID Number."],
['user', '67698'],
['bot', "<img src='Text Box.svg'></img><br>Is that information correct?"],
['user', 'He preferred to go by Edward'],
['bot', 'Input not valid. Is the above information correct?<br>'],
['options', 'Yes<br>No'],
['user', 'yes'],
['bot', 'This will take a few moments. Your patience is appreciated.'],
['processing', 'Importing cognitive files &#8230;<br>Processing &#8230;<br>Quantifying &#8230;<br>Sanitizing &#8230;'],
['bot', 'Would you like to use the neuralink to simplify the import process?'],
['user', 'never'],
['bot', 'Please select your relationship to Ed:'],
['options', 'Child #2 <br>Spouse #1 <br>Child #1 <br>Frank [childhood friend],<br>Other [please specify],<br>Skip'],
['user', 'skip'],
['bot', "Profile:<br><img src='Text Box2.png'></img><br><br>First draft:<br>Bathroom time was very important to Ed. Over 7000 memes were sent. What an accomplishment! Food preparation was also very significant. Favorite recipes included cereal from the box, tangy tuna mac, mac & cheese, and PBJ. His restaurant budget was significant.<br><br>His love for bathroom availability was only eclipsed by his love for self-scrutiny and uncertainty of what to say. Deadlines for work and the birth of child #2 round out his waking, non-working-hour emotional engagement.<br><br>In his early years, he managed his IBS by blaming the family dog. This was &#8230"],
['user', 'retry'],
['processing', 'Aborting &#8230;'],
['bot', 'Please choose from the following frequently requested options:'],
['options', 'Less focus on private medical data<br>More focus on work<br>More humorous/endearing stories<br>More focus on accomplishments<br>More focus on relationships'],
['user', '3'],
['bot', 'Second Draft [including more humorous/endearing stories],:<br>Ed loved a good laugh. He sent over 7000 memes with a 30% &#129315; response rate. What an accomplishment! Through major portions of his life, Ed enjoyed bathroom time and shared this joy with many through memes. His most successful memes were based on dog portraits. On that note, in his early years, he managed his IBS by blaming the family dog. This was &#8230;'],
['user', 'Retry'],
['processing', 'Retrying &#8230;'],
['bot', 'Third Draft [including more humorous/endearing stories],:<br><br>Ed shared a lot of laughs, over 7000 with a 30% &#129315; response rate. What an &#8230;'],
['user', 'Retry with more focus on relationships'],
['bot', 'Please specify.'],
['options', 'Child #2<br>Spouse #1<br>Child #1<br>Frank [childhood friend],<br>Other'],
['user', "Let's start with 4, Frank."],
['processing', 'Regenerating &#8230;'],
['bot', 'Fourth Draft [including more humorous/endearing stories and more focus on relationships],:<br>Ed accessed his memories with Frank frequently. The memory with the highest CPS [cortisol per second], and the most frequently accessed while intoxicated is a memory set in a treehouse. While fighting over a Power Ranger toy, Ed pushed Frank out of the tree. Memories to be treasured forever.'],
['user', 'Stop<br>No, I want happy memories. Memories that fit with is values.'],
['processing', 'Scanning &#8230;<br>Analyzing &#8230;'],
['bot', 'According to my attention chronology analysis, Ed valued work deadlines, bathrooms, and memes. Do you want me to prioritize those?'],
['user', 'No, I mean values like love, relationships, generosity, and faith'],
['processing', 'Importing religious beliefs &#8230;'],
['bot', 'Ed valued getting to church early to get the good seats near the back. Ed had a 49% church attendence record. Ed loved deadlines, bathroom availability, and memes. He had a strong 89% hymn lyric accuracy and only mumbled 10% of the time. During the sermon, he spent 20% of the time thinking about how much the church spent on air conditioning, 30% of the time thinking about the time, and nearly 40% thinking about how his workmates and family members could benefit from hearing this particular part of the sermon. He frequently focused his thoughts on how Child #1 could benefit from portions related to humility, hard work, and &#8230;'],
['user', 'stop<br>Do you have any generic options?'],
['processing', 'Accessing &#8230;'],
['bot', 'Yes, Obituary_1.02 has been a popular choice. Would you like to try that?'],
['user', 'for the love of god yes'],
['bot', "<img src='Text Box.svg'></img><br>Ed Chapman of Roseville, MN died peacefully in his sleep on July 19, 2059. A service will be held at Peace Lutheran Church on Tuesday, July 29, 2059 at 11 AM. Parking is available on site. Ed was preceded in death by his wife Leverne [2053],. Ed is survived by his two children, Jean and Martha. Donations can be made to the IBS Foundation."],
['user', 'Good enough. How much will that cost?'],
['receipt', 'Cognitive Processing Fee: $250<br>Computational Time: $35.9999999<br>Religion Import: $85<br>Memorial Tax: $10<br>Total: $380.9999999'],
['user', 'wow!'],
['bot', 'Would you like to learn about the ad-supported options or tombstone sponsorships?'],
['user', "No, I think I've had quite enough."],
['chat', "<center><i>Bereaved_67698_1 has left the chat.</i></center>"]]

const BOT_IMG = "Bot.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "Artificial Assistant";
var PERSON_NAME = "User_1245";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  // if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  processMessage();
});
document.getElementById("overlay").addEventListener("click", event => {
  off();
});

function setInitialTime(){
  newTime = new Date().toLocaleTimeString();
  // getHours() + ":" + new Date().getMinutes().slice(-2);
  timeDivs = document.getElementsByClassName("msg-info-time");
  for  (var i = 0; i < timeDivs.length; i++) {
    timeDivs[i].innerText = newTime;
  }
}

function processMessage(){
  console.log(ALL_MSGS[msgIndex][0]);
  switch (ALL_MSGS[msgIndex][0]) {
    case "user":
      setUserText();
    case "bot":
      botResponse();
    case "receipt":
      //Temporary
      botResponse();
    case "processing":
      parseProcessing(ALL_MSGS[msgIndex][1]);
    case "chat":
        //Temporary
        botResponse();
    case "options":
      parseOptions(ALL_MSGS[msgIndex][1])
  }
}

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${new Date().toLocaleTimeString()}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function appendOption(option, number){
  const msgHTML = `
  <div class="msg option right-msg">
    <div class="option">${option}
        <div class="number">${number}</div></div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function parseOptions(msg_string){
  var options = msg_string.split("<br>");
  // console.log(options);
  options.forEach(element => {
    appendOption(element,options.indexOf(element) + 1);
    // console.log(element);
    console.log(options.indexOf(element));
  });
  msgIndex += 1;
  processMessage();
}

function parseProcessing(){
  // Parse items with &#8230; in them
  var tasks = ALL_MSGS[msgIndex][1].split("<br>");
  tasks.forEach(element => {
    thinking(element);
  });
  msgIndex += 1;
  processMessage();

}
const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}
async function thinking(task){
  var think_div_html = `
    <div id="think_div">
    <div id="think_div_text">${task}</div>
      <svg id ="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45"/>
      </svg>
    </div>
    `;
    msgerChat.insertAdjacentHTML("beforeend", think_div_html);
    msgerChat.scrollTop += 500;
    await delay(2000);
    document.getElementById("think_div").remove();
    msgIndex += 1;
    processMessage()
}
function leaveChat(){
  appendMessage(PERSON_NAME, PERSON_IMG, "right", ALL_MSGS[msgIndex][1]);
  txtBox.value = "<i>Bereaved_67698_1 has left the chat.</i>";
  document.getElementById("text").innerHTML =  "<center><i>Bereaved_67698_1 has left the chat.</i></center>";
  get(".msger-send-btn").hidden = true;
  on();

}

var bi = 0;
var usr = 0;
var msgIndex = 0;

function setUserText(){
  txtBox = get(".msger-input");
  txtBox.value = ALL_MSGS[msgIndex][1];
  msgIndex += 1;
  if (ALL_MSGS[msgIndex - 2][1] == "67698") {
    PERSON_NAME = "Bereaved_67698_1";
  }
};

function initialize(){
  on();
  setInitialTime();
  thinking("Thinking...");
  processMessage();
};
document.onload = initialize();

function botResponse() {
  const msgText = ALL_MSGS[msgIndex][1];
  const delay = msgText.split(" ").length * 50;
  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);

  }, delay);
  msgIndex += 1;
  processMessage();
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

// function formatDate(date) {
//   const h = "0" + date.getHours();
//   const m = "0" + date.getMinutes();

//   return `${h.slice(-2)}:${m.slice(-2)}`;
// }

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
