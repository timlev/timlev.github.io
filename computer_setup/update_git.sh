#!/bin/bash

#Define GitProjectsDir
GitProjectsDir="~/GitProjects/";

#Define GitProjectsList declare -a 
gplist=("Bowls"
    "Sound-Spelling"
    "Crowd_Recorder"
    "Drag_n_Drop"
    "eartrainer"
    "Learning-English"
    "Learning-English-HTML"
    "Proxy-Hours"
    "read-story"
    "sound_board"
    "timlevhub.io"
    "download_wiktionary_word"
    "Pre-Literate-Curriculum"
    "high-frequency-word-master"
    "sampleextension");

for project in "${gplist[@]}"; do
    cd $GitProjectsDir;
    cd $project;
    echo "Updating $project"; 
    git pull;
done