http://www.fivetechsoft.net/cgi-bin/tutor03

```
// Using controls

#include "FiveWeb.ch"

function Main()

   local oDlg
   
   DEFINE DIALOG oDlg TITLE "Hello FiveWeb" SIZE 600, 400
   
   @ 120,  70 BUTTON "One" SIZE 120, 50 OF oDlg ACTION MsgInfo( "one" )

   @ 120, 220 BUTTON "Two" SIZE 120, 50 OF oDlg ACTION MsgInfo( "two" )

   @ 120, 370 BUTTON "Three" SIZE 120, 50 OF oDlg ACTION MsgInfo( "three" )
   
   ACTIVATE DIALOG oDlg 

return nil
```

https://bitbucket.org/fivetech/screenshots/downloads/fiveweb_tutor03.JPG