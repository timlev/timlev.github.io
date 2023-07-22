const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "I'm sorry that service has not been fully implemented yet. Look for our update in 3-4 months.<br>\
What services would you like to avail yourself of?<br>\
1) obituaries, tributes, and eulogies<br>\
2) funeral arrangements<br>\
3) condolence messages<br>\
4) other (beta)",
"Excellent! Please enter your loved one's Tax ID Number.",
"Ed Chapman<br>\
Roseville, MN<br>\
Deceased 7/19/59<br>\
Is that information correct?",
"Input not valid. Is the above information correct? (Yes or No)",
"This will take a few moments. Your patience is appreciated.<br>\
Importing cognitive files &#8230;<br>\
Processing &#8230;<br>\
Quantifying &#8230;<br>\
Sanitizing &#8230;",
"Profile:<br>\
30% Sleeping, Limited REM !<br>\
30% Work<br>\
25% Food preparation / eating<br>\
5% Family memories<br>\
7% Bathroom phone time<br>\
3% Other<br>\
<br>\
Peak emotional engagement:<br>\
Deadlines, bathroom availability, uncertainty of what to say, birth of child #2<br>\
<br>\
First draft:<br>\
Bathroom time was very important to Ed. Over 7000 memes were sent. What an accomplishment! Food preparation was also very significant. Favorite recipes included cereal from the box, tangy tuna mac, mac & cheese, and PBJ. His restaurant budget was significant.<br>\
<br>\
His love for bathroom availability was only eclipsed by his love for self-scrutiny and uncertainty of what to say. Deadlines and the birth of child #2 round out his waking, non-working hours.<br>\
<br>\
In his early years, he managed his IBS by blaming the family dog. This was &#8230",
"Aborting &#8230;<br>\
Please choose from the following frequently requested options:<br>\
1) Less focus on private medical data<br>\
2) More focus on work<br>\
3) More humorous/endearing stories<br>\
4) More focus on accomplishments<br>\
5) More focus on relationships",
"Second Draft (including more humorous/endearing stories):<br>\
Ed loved a good laugh. He sent over 7000 memes with a 30% &#129315; response rate. What an accomplishment! Through major portions of his life, Ed enjoyed bathroom time and shared this joy with many through memes. In his early years, he managed his IBS by blaming the family dog. This was &#8230;",
"Retrying &#8230;<br>\
Third Draft (including more humorous/endearing stories):<br>\
<br>\
Ed shared a lot of laughs, over 7000 with a 30% &#129315; response rate. What an &#8230;",
"Please specify.<br>\
1) Child #2<br>\
2) Spouse #1<br>\
3) Child #1<br>\
4) Frank (childhood friend)<br>\
5) Other",
"Regenerating &#8230;<br>\
Fourth Draft (including more humorous/endearing stories and more focus on relationships):<br>\
Ed accessed his memories with Frank frequently. The memory with the highest cortisol per second and most frequently accessed while intoxicated is a memory set in a treehouse. While fighting over a Power Ranger toy, Ed pushed Frank out of the tree. Memories to be treasured forever.",
"Scanning &#8230;<br>\
Analyzing &#8230;<br>\
According to my analysis, Ed valued deadlines, bathroom availability, and memes. Do you want me to prioritize those?",
"Importing religious beliefs &#8230;<br>\
Ed valued getting to church early to get the good seats near the back. Ed had a 49% church attendence record. Ed loved deadlines, bathroom availability, and memes. He had a strong 89% hymn lyric accuracy and only mumbled 10% of the time. During the sermon, he spent 20% of the time thinking about how much the church spent on air conditioning, 30% of the time thinking about the time, and nearly 40% thinking about how his family members could benefit from hearing this particular part of the sermon. He frequently focused his thoughts on how Child #1 could benefit from portions related to humility, hard work, and &#8230;",
"Accessing &#8230;<br>\
Yes, Obituary_1.02 has been a popular choice. Would you like to try that?",
"Ed Chapman of Roseville, MN died peacefully in his sleep on July 19, 2059. A service will be held at Peace Lutheran Church on Tuesday, July 29, 2059 at 11 AM. Parking is available on site. Ed was preceded in death by his wife Leverne (2053). Ed is survived by his two children. Jean and Martha. Donations can be made to the IBS Foundation.",
"Cognitive Processing Fee: $700<br>\
Computational Time: $35.9999999<br>\
Religion Import: $85<br>\
Memorial Tax: $10<br>\
Total: $830.9999999",
"Would you like to learn about the ad-supported options or tombstone sponsorships?"
];
const USR_MSGS = ["4", "1 I guess", "67698","He preferred to go by Edward", "yes","...", "retry", "3", "Retry", "Retry with more focus on relationships", "Let's start with 4, Frank.", "Stop<br>No, I want happy memories. Memories that fit with is values.", "No, I mean values like love, relationships, generosity, and faith", "stop<br>Do you have any generic options?", "for the love of god yes", "Good enough. How much will that cost?", "wow!","No, I think I've had quite enough."]
// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "Artificial Assistant";
var PERSON_NAME = "User_1245";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function setInitialTime(){
  newTime = new Date().toLocaleTimeString();
  // getHours() + ":" + new Date().getMinutes().slice(-2);
  timeDivs = document.getElementsByClassName("msg-info-time");
  for  (var i = 0; i < timeDivs.length; i++) {
    timeDivs[i].innerText = newTime;
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

function leaveChat(){
  appendMessage(PERSON_NAME, PERSON_IMG, "right", USR_MSGS[USR_MSGS.length -1]);
  txtBox.value = "<i>Bereaved_67698_1 has left the chat.</i>";
  get(".msger-send-btn").hidden = true;
}

var bi = 0;
var usr = 0;
function setUserText(){
  txtBox = get(".msger-input");
  txtBox.value = USR_MSGS[usr];
  usr += 1;
  if (USR_MSGS[usr - 2] == "67698") {
    PERSON_NAME = "Bereaved_67698_1";
  }
  if (usr == USR_MSGS.length) {
    leaveChat();
  }
}

function initialize(){
  setInitialTime();
  setUserText();
}
document.onload = initialize();

function botResponse() {
  const msgText = BOT_MSGS[bi];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);  bi += 1;
    setUserText();
  }, delay);

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
