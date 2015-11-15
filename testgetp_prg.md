Example of GET with PICTURE

demo:
http://www.fivetechsoft.net/cgi-bin/testgetp

testgetp.prg
```
#include "FiveWeb.ch"

function Main()

   local oDlg, cName := Space( 50 ), dDate := Space( 10 )

   DEFINE DIALOG oDlg TITLE "GET with PICTURE"

   @ 20, 20 SAY "Name:" OF oDlg
   
   @ 20, 100 GET cName SIZE 200, 30 OF oDlg	

   @ 70, 20 SAY "Date:" OF oDlg

   @ 70, 100 GET dDate SIZE 130, 30 ;
      PICTURE "99/99/9999" OF oDlg

   @ 250, 250 BUTTON "Ok" OF oDlg ;
      ACTION ( oDlg:End() )  // ( ... ) processed in the server

   ACTIVATE DIALOG oDlg CENTERED

return nil
```

https://bitbucket.org/fivetech/screenshots/downloads/fiveweb_testgetp.JPG

Generated code:

```
<html>
<head>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js"></script>
<script src="https://fiveweb.googlecode.com/svn/trunk/source/js/fiveweb.js"></script>
<script src="https://bitbucket.org/fivetech/fiveweb/downloads/jquery.maskedinput.js"></script>
<link type="text/css" rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/themes/trontastic/jquery-ui.css">
<link type="text/css" rel="stylesheet" href="https://fiveweb.googlecode.com/svn/trunk/source/css/styles.css">
</head>
<body>
<div id="oDlg" class="dialog_window" title="GET with PICTURE">
<label id="oSay1" style = "position: absolute; top: 20px; left: 20px; width: 60px; height: 40px;"  > 
Name:
 </label>
<input type=text id="oGet1"  style="position: absolute; top: 20px; left: 100px; width: 200px; height: 30px;" value = "                                                  ">
<label id="oSay2" style = "position: absolute; top: 70px; left: 20px; width: 60px; height: 40px;"  > 
Date:
 </label>
<input type=text id="oGet2"  style="position: absolute; top: 70px; left: 100px; width: 130px; height: 30px;" value = "          ">
<button id="oBtn1" style = "position: absolute; top: 250px; left: 250px; width: 110px; height: 40px; " >Ok</button>
</div>
<script>
$( "#oDlg" ).dialog( { width: 600, height: 500, modal:true } );
</script>
<script>
$("#oGet2").mask("99/99/9999");
</script>
<script>
$( "#oBtn1" ).button();
$( "#oBtn1" ).click( function( event ){ $( "#oDlg" ).dialog( "close" ) } );
</script>
</body>
</html>
```