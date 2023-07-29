BOT_MSGS = [
  "I'm sorry that service has not been fully implemented yet. Look for our update in 3-4 months.<br>\
What services would you like to avail yourself of?<br>\
option_Obituaries, tributes, and eulogies<br>\
Funeral arrangements<br>\
Condolence messages (BETA)<br>\
Other",
"Excellent! Please enter your loved one's Tax ID Number.", "<img src='Text Box.svg'></img><br>\
Is that information correct?",
"Input not valid. Is the above information correct?<br>\
option_Yes<br>\
No",
"This will take a few moments. Your patience is appreciated.<br>\
Importing cognitive files &#8230;<br>\
Processing &#8230;<br>\
Quantifying &#8230;<br>\
Sanitizing &#8230;<br>\
Would you like to use the neuralink to simplify the import process?",
"Please select your relationship to Ed:<br>\
option_Child #2 <br>\
Spouse #1 <br>\
Child #1 <br>\
Frank (childhood friend)<br>\
Other (please specify)<br>\
Skip",
"Profile:<br>\
<img src='Text Box2.png'></img><br>\
<br>\
First draft:<br>Bathroom time was very important to Ed. Over 7000 memes were sent. What an accomplishment! Food preparation was also very significant. Favorite recipes included cereal from the box, tangy tuna mac, mac & cheese, and PBJ. His restaurant budget was significant.<br><br>His love for bathroom availability was only eclipsed by his love for self-scrutiny and uncertainty of what to say. Deadlines for work and the birth of child #2 round out his waking, non-working-hour emotional engagement.<br><br>In his early years, he managed his IBS by blaming the family dog. This was &#8230",
"Aborting &#8230;<br>\
Please choose from the following frequently requested options:<br>\
option_Less focus on private medical data<br>\
More focus on work<br>\
More humorous/endearing stories<br>\
More focus on accomplishments<br>\
More focus on relationships",
"Second Draft (including more humorous/endearing stories):<br>\
Ed loved a good laugh. He sent over 7000 memes with a 30% &#129315; response rate. What an accomplishment! Through major portions of his life, Ed enjoyed bathroom time and shared this joy with many through memes. His most successful memes were based on dog portraits. On that note, in his early years, he managed his IBS by blaming the family dog. This was &#8230;",
"Retrying &#8230;<br>\
Third Draft (including more humorous/endearing stories):<br>\
<br>\
Ed shared a lot of laughs, over 7000 with a 30% &#129315; response rate. What an &#8230;",
"Please specify.<br>\
option_Child #2<br>\
Spouse #1<br>\
Child #1<br>\
Frank (childhood friend)<br>\
Other",
"Regenerating &#8230;<br>\
Fourth Draft (including more humorous/endearing stories and more focus on relationships):<br>\
Ed accessed his memories with Frank frequently. The memory with the highest CPS (cortisol per second) and the most frequently accessed while intoxicated is a memory set in a treehouse. While fighting over a Power Ranger toy, Ed pushed Frank out of the tree. Memories to be treasured forever.",
"Scanning &#8230;<br>\
Analyzing &#8230;<br>\
According to my attention chronology analysis, Ed valued work deadlines, bathrooms, and memes. Do you want me to prioritize those?",
"Importing religious beliefs &#8230;<br>\
Ed valued getting to church early to get the good seats near the back. Ed had a 49% church attendence record. Ed loved deadlines, bathroom availability, and memes. He had a strong 89% hymn lyric accuracy and only mumbled 10% of the time. During the sermon, he spent 20% of the time thinking about how much the church spent on air conditioning, 30% of the time thinking about the time, and nearly 40% thinking about how his workmates and family members could benefit from hearing this particular part of the sermon. He frequently focused his thoughts on how Child #1 could benefit from portions related to humility, hard work, and &#8230;",
"Accessing &#8230;<br>\
Yes, Obituary_1.02 has been a popular choice. Would you like to try that?",
"<img src='Text Box.svg'></img><br>\
Ed Chapman of Roseville, MN died peacefully in his sleep on July 19, 2059. A service will be held at Peace Lutheran Church on Tuesday, July 29, 2059 at 11 AM. Parking is available on site. Ed was preceded in death by his wife Leverne (2053). Ed is survived by his two children, Jean and Martha. Donations can be made to the IBS Foundation.",
"Cognitive Processing Fee: $250<br>\
Computational Time: $35.9999999<br>\
Religion Import: $85<br>\
Memorial Tax: $10<br>\
Total: $380.9999999",
"Would you like to learn about the ad-supported options or tombstone sponsorships?",""
]

USR_MSGS = ["two", "One, I guess", "67698","He preferred to go by Edward", "yes","never","skip", "retry", "3", "Retry", "Retry with more focus on relationships", "Let's start with 4, Frank.", "Stop<br>No, I want happy memories. Memories that fit with is values.", "No, I mean values like love, relationships, generosity, and faith", "stop<br>Do you have any generic options?", "for the love of god yes", "Good enough. How much will that cost?", "wow!","No, I think I've had quite enough."]

MSG_LIST = []

import pprint, json
# Build unified message list eventually returning a JSON with MSG_Category : MSG structure
for num, item in enumerate(USR_MSGS):
    MSG_LIST.append({"user" : item})
    print(("user", item))
    MSG_LIST.append({"bot" : BOT_MSGS[num]})
    print(("bot", str(BOT_MSGS[num])))

# print(MSG_LIST)


[{'user': 'two'}, {'bot': "I'm sorry that service has not been fully implemented yet. Look for our update in 3-4 months.<br>What services would you like to avail yourself of?<br>option_Obituaries, tributes, and eulogies<br>Funeral arrangements<br>Condolence messages (BETA)<br>Other"}, {'user': 'One, I guess'}, {'bot': "Excellent! Please enter your loved one's Tax ID Number."}, {'user': '67698'}, {'bot': "<img src='Text Box.svg'></img><br>Is that information correct?"}, {'user': 'He preferred to go by Edward'}, {'bot': 'Input not valid. Is the above information correct?<br>option_Yes<br>No'}, {'user': 'yes'}, {'bot': 'This will take a few moments. Your patience is appreciated.<br>Importing cognitive files &#8230;<br>Processing &#8230;<br>Quantifying &#8230;<br>Sanitizing &#8230;<br>Would you like to use the neuralink to simplify the import process?'}, {'user': 'never'}, {'bot': 'Please select your relationship to Ed:<br>option_Child #2 <br>Spouse #1 <br>Child #1 <br>Frank (childhood friend)<br>Other (please specify)<br>Skip'}, {'user': 'skip'}, {'bot': "Profile:<br><img src='Text Box2.png'></img><br><br>First draft:<br>Bathroom time was very important to Ed. Over 7000 memes were sent. What an accomplishment! Food preparation was also very significant. Favorite recipes included cereal from the box, tangy tuna mac, mac & cheese, and PBJ. His restaurant budget was significant.<br><br>His love for bathroom availability was only eclipsed by his love for self-scrutiny and uncertainty of what to say. Deadlines for work and the birth of child #2 round out his waking, non-working-hour emotional engagement.<br><br>In his early years, he managed his IBS by blaming the family dog. This was &#8230"}, {'user': 'retry'}, {'bot': 'Aborting &#8230;<br>Please choose from the following frequently requested options:<br>option_Less focus on private medical data<br>More focus on work<br>More humorous/endearing stories<br>More focus on accomplishments<br>More focus on relationships'}, {'user': '3'}, {'bot': 'Second Draft (including more humorous/endearing stories):<br>Ed loved a good laugh. He sent over 7000 memes with a 30% &#129315; response rate. What an accomplishment! Through major portions of his life, Ed enjoyed bathroom time and shared this joy with many through memes. His most successful memes were based on dog portraits. On that note, in his early years, he managed his IBS by blaming the family dog. This was &#8230;'}, {'user': 'Retry'}, {'bot': 'Retrying &#8230;<br>Third Draft (including more humorous/endearing stories):<br><br>Ed shared a lot of laughs, over 7000 with a 30% &#129315; response rate. What an &#8230;'}, {'user': 'Retry with more focus on relationships'}, {'bot': 'Please specify.<br>option_Child #2<br>Spouse #1<br>Child #1<br>Frank (childhood friend)<br>Other'}, {'user': "Let's start with 4, Frank."}, {'bot': 'Regenerating &#8230;<br>Fourth Draft (including more humorous/endearing stories and more focus on relationships):<br>Ed accessed his memories with Frank frequently. The memory with the highest CPS (cortisol per second) and the most frequently accessed while intoxicated is a memory set in a treehouse. While fighting over a Power Ranger toy, Ed pushed Frank out of the tree. Memories to be treasured forever.'}, {'user': 'Stop<br>No, I want happy memories. Memories that fit with is values.'}, {'bot': 'Scanning &#8230;<br>Analyzing &#8230;<br>According to my attention chronology analysis, Ed valued work deadlines, bathrooms, and memes. Do you want me to prioritize those?'}, {'user': 'No, I mean values like love, relationships, generosity, and faith'}, {'bot': 'Importing religious beliefs &#8230;<br>Ed valued getting to church early to get the good seats near the back. Ed had a 49% church attendence record. Ed loved deadlines, bathroom availability, and memes. He had a strong 89% hymn lyric accuracy and only mumbled 10% of the time. During the sermon, he spent 20% of the time thinking about how much the church spent on air conditioning, 30% of the time thinking about the time, and nearly 40% thinking about how his workmates and family members could benefit from hearing this particular part of the sermon. He frequently focused his thoughts on how Child #1 could benefit from portions related to humility, hard work, and &#8230;'}, {'user': 'stop<br>Do you have any generic options?'}, {'bot': 'Accessing &#8230;<br>Yes, Obituary_1.02 has been a popular choice. Would you like to try that?'}, {'user': 'for the love of god yes'}, {'bot': "<img src='Text Box.svg'></img><br>Ed Chapman of Roseville, MN died peacefully in his sleep on July 19, 2059. A service will be held at Peace Lutheran Church on Tuesday, July 29, 2059 at 11 AM. Parking is available on site. Ed was preceded in death by his wife Leverne (2053). Ed is survived by his two children, Jean and Martha. Donations can be made to the IBS Foundation."}, {'user': 'Good enough. How much will that cost?'}, {'bot': 'Cognitive Processing Fee: $250<br>Computational Time: $35.9999999<br>Religion Import: $85<br>Memorial Tax: $10<br>Total: $380.9999999'}, {'user': 'wow!'}, {'bot': 'Would you like to learn about the ad-supported options or tombstone sponsorships?'}, {'user': "No, I think I've had quite enough."}, {'bot': ''}]