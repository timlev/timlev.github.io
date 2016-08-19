#wget https://www.dropbox.com/download?dl=packages/ubuntu/dropbox_2015.10.28_amd64.deb;
#sudo dpkg -i -f dropbox_2015.10.28_amd64.deb;
#sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -;
#sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list';
#sudo apt update;
#sudo apt install -f google-chrome-stable;
sudo apt install geany libreoffice hexchat keepass2 elinks git;
#Customize the clock
#https://help.ubuntu.com/community/Lubuntu/Documentation/CustomizingTheClock
echo "Remember to set clock to\n %a %d %b %y  %I:%M %p";


#Set up Keepass for Browsers
wget https://raw.github.com/pfn/keepasshttp/master/KeePassHttp.plgx;
sudo mv KeePassHttp.plgx /usr/lib/keepass2/;
chmod 644 /usr/lib/keepass2/KeePassHttp.plgx;
sudo apt install mono-complete;
sudo apt install libmono-system-xml-linq4.0-cil libmono-system-data-datasetextensions4.0-cil libmono-system-runtime-serialization4.0-cil mono-mcs;


