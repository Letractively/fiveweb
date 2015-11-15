http://www.fivetechsoft.net/cgi-bin/tutor01

tutor01.prg
```
#include "FiveWeb.ch"

function Main()

   MsgInfo( "Hello world from FiveWeb" )

return nil
```

https://bitbucket.org/fivetech/screenshots/downloads/fiveweb_tutor01.JPG

Generated code:
```
<html>
<head>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js"></script>
<link type="text/css" rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/themes/trontastic/jquery-ui.css">
<script>
   $(document).ready(function() {
   $('#oDlg').dialog();
   });
</script>
</head>
<body>
<div id="oDlg" class="dialog_window" title="Attention">
Hello world from FiveWeb
</div>
</body>
</html>
```