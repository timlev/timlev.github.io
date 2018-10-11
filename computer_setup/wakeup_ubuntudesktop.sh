MAC=1c:1b:0d:38:8d:23
Broadcast=192.168.0.40
PortNumber=9
echo -e $(echo $(printf 'f%.0s' {1..12}; printf "$(echo $MAC | sed 's/://g')%.0s" {1..16}) | sed -e 's/../\\x&/g') | nc -w1 -u -b $Broadcast $PortNumber

