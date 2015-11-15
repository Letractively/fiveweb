**Download Dolphin from its repository:**

svn checkout http://www.sitasoft.net/tdolphin


**I had to modify setenvh.sh for my own settings:**

export PRG\_COMP\_PATH=~/harbour

export PRG\_COMP\_INC\_PATH=$PRG\_COMP\_PATH/include


**then do:**

chmod +x setenvh.sh

./setenvh.sh


**We need to download the MySQL client package:**

sudo apt-get install libmysqlclient-dev


**We need to link these two libraries to build our apps:**

> -ldolphin -lmysqlclient

(already included in samples/build.sh)