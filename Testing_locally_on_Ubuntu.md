**1. Install Apache:**

sudo apt-get install apache2

To test it, go to the Internet browser and go to "localhost"

**2. Copy the FiveWeb apps to:**

sudo cp tutor01 /usr/lib/cgi-bin/

**3. If you are copying it to a remote hosting server, i.e. DreamHost then do:**

ssh username@yourdomain

chmod 755 yourCgi