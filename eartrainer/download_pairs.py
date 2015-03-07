import download_dict_sound
import os
with open("ick_ack_uck_pairs.txt", "r") as fp:
    read_data = fp.read()

wordlist = []
read_data = read_data.replace("\n",", ")
read_data = read_data.split(", ")
read_data = [x for x in read_data if x not in [" ",""]]
read_data = list(set(read_data))
print read_data

sound_files = os.listdir("sounds/")
downloaded_words = [x[:x.rfind(".")] for x in sound_files]
print downloaded_words

failed = []
for word in read_data:
    if word not in downloaded_words:
        try:
            download_dict_sound.download(word, "sounds/")
        except:
            failed.append(word)
print "Failed: "
print failed
    
