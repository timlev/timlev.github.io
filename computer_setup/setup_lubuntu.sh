#Get Dropbox and Google Chrome
sudo sh -c 'echo "deb http://linux.dropbox.com/ubuntu xenial main" >> /etc/apt/sources.list';
sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 1C61A2656FB57B7E4DE0F4C1FC918B335044912E;
sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -;
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list';
sudo apt update;
sudo apt install -f google-chrome-stable dropbox;
sudo apt install geany libreoffice hexchat keepass2 elinks git;

#Set up Keepass for Browsers
wget https://raw.github.com/pfn/keepasshttp/master/KeePassHttp.plgx;
sudo mv KeePassHttp.plgx /usr/lib/keepass2/;
chmod 644 /usr/lib/keepass2/KeePassHttp.plgx;
sudo apt install mono-complete;
sudo apt install libmono-system-xml-linq4.0-cil libmono-system-data-datasetextensions4.0-cil libmono-system-runtime-serialization4.0-cil mono-mcs;


#Customize the clock
#https://help.ubuntu.com/community/Lubuntu/Documentation/CustomizingTheClock
echo "Remember to set clock to\n %a %d %b %y  %I:%M %p";


sudo adduser wpstudent;
sudo touch /etc/lightdm/lightdm.conf;
sudo echo "[SeatDefaults]" >> /etc/lightdm/lightdm.conf;
sudo echo "autologin-user=wpstudent" >> /etc/lightdm/lightdm.conf;
sudo echo "autologin-user-timeout=0" >> /etc/lightdm/lightdm.conf;
sudo echo "# Check https://bugs.launchpad.net/lightdm/+bug/854261 before setting a timeout" >> /etc/lightdm/lightdm.conf;
sudo echo "user-session=Lubuntu" >> /etc/lightdm/lightdm.conf;
sudo echo "greeter-session=lightdm-gtk-greeter" >> /etc/lightdm/lightdm.conf;

sudo apt install conky;

sudo cp conky.conf /etc/conky/conky.conf;
#sudo echo "conky &" >> /etc/xdg/lxsession/Lubuntu/autostart;
su -c 'echo "@conky" > /home/wpstudent/.config/lxsession/Lubuntu/autostart' wpstudent;
