Combobox demo

http://www.fivetechsoft.net/cgi-bin/testcomb

testcomb.prg
```
#include "FiveWeb.ch"

function Main()

   local oDlg, oCbx

   DEFINE DIALOG oDlg TITLE "Using a combobox"

   @ 30, 30 COMBOBOX oCbx ITEMS "one", "two", "three" ;
      OF oDlg

   @ 220, 220 BUTTON "Ok" OF oDlg ;
      ACTION alert( oCbx.value ) 

   ACTIVATE DIALOG oDlg NOWAIT

return nil
```

https://bitbucket.org/fivetech/screenshots/downloads/fiveweb_combobox.JPG

generated code:
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
<div id="oDlg" class="dialog_window" title="Using a combobox">
<div id="combobox" class="ui.widget" style="position: absolute; top: 30px; left: 30px;" >
<select id="oCbx">
<option value="one">one</option>
<option value="two">two</option>
<option value="three">three</option>
</select>
</div>
<button id="oBtn1" style = "position: absolute; top: 220px; left: 220px; width: 110px; height: 40px; " >Ok</button>
</div>
<script>
$( "#oDlg" ).dialog( { width: 600, height: 500, modal:false } );
</script>
<script>
$( "#oBtn1" ).button();
$( "#oBtn1" ).click( function( event ){ alert( oCbx.value ) } );
</script>
</body>
</html>
```