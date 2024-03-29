// FiveWin Web Interface
// (c) FiveTech Software 2012

var CRLF = "\r\n";

function Go( cUrl )
{
   document.location = cUrl;
}   

// background management

function SetColor( cColor )
{
   document.body.style.backgroundColor = cColor;	
}   

function SetBackImage( cUrlImage )
{
   document.body.style.backgroundImage = "url( '" + cUrlImage + "' )";
   document.body.style.backgroundSize = "100%";   	
}   

// themes management

function SetTheme( cTheme )
{
	 var css = "http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/themes/name/jquery-ui.css"
	
   $( "link" ).eq( 0 ).attr( { href: css.replace( "name", cTheme ) } );
}

function SetAristoTheme()
{
   $( "link" ).eq( 0 ).attr( { href: "http://taitems.github.com/Aristo-jQuery-UI-Theme/css/Aristo/Aristo.css" } ); 
}
	
function SetBootstrapTheme()
{
   $( "link" ).eq( 0 ).attr( { href: "http://addyosmani.github.com/jquery-ui-bootstrap/css/custom-theme/jquery-ui-1.8.16.custom.css" } ); 
}
	
// ProgressBars	
	
function ProgressInc( cProgBar, nStep )
{
	 var nValue = $( "#" + cProgBar ).progressbar( "value" );
	 	
   $( "#" + cProgBar ).progressbar( "value", nValue + nStep );
}   	

function ProgressDec( cProgBar, nStep )
{
	 var nValue = $( "#" + cProgBar ).progressbar( "value" );
	 	
   $( "#" + cProgBar ).progressbar( "value", nValue - nStep );
}   	

// Forms designer www.fivetechsoft.net/cgi-bin/fiveform

var oCtrl;

function CenterHorizontally()
{
   if( oCtrl != null )
   {
      dlgWidth = $( "#oDlg" ).css( "width" );
      dlgWidth = dlgWidth.substr( 0, dlgWidth.length - 2 );
      dlgWidth = parseInt( dlgWidth ).toFixed( 0 );

      ctlWidth = oCtrl.css( "width" );
      ctlWidth = ctlWidth.substr( 0, ctlWidth.length - 2 );
      ctlWidth = parseInt( ctlWidth ).toFixed( 0 );

      oCtrl.css( "left", dlgWidth / 2 - ctlWidth / 2 );
   }   
}      	

function CenterVertically()
{
   if( oCtrl != null )
   {
      dlgHeight = $( "#oDlg" ).css( "height" );
      dlgHeight = dlgHeight.substr( 0, dlgHeight.length - 2 );
      dlgHeight = parseInt( dlgHeight ).toFixed( 0 );

      ctlHeight = oCtrl.css( "height" );
      ctlHeight = ctlHeight.substr( 0, ctlHeight.length - 2 );
      ctlheight = parseInt( ctlHeight ).toFixed( 0 );

      oCtrl.css( "top", dlgHeight / 2 - ctlHeight / 2 );
   }   
}      	

function DelControl()
{
   if( oCtrl != null )
   {
      oCtrl.remove();
   }
}
      
function AddButton( cDlgName )
{
   var oDlg = document.getElementById( cDlgName );
   var cVarName = "ctrl" + ( oDlg.children.length + 1 );
   var div = document.createElement( "div" );
   
   div.className = "ui-widget-content";
   div.id = cVarName;
   div.style.position = "absolute";
   div.style.top    = "20px";
   div.style.left   = "20px";
   div.style.width  = "110px";
   div.style.height = "40px";
   div.innerHTML = "Button";
      
   oDlg.appendChild( div );

   $( "#" + cVarName ).button().resizable().draggable();
   $( "#" + cVarName ).data( "tag", "BUTTON" );
   
   $( "#" + cVarName ).on( "dragstart", function( event, ui ) { oCtrl = $( "#" + cVarName ); } );
   oCtrl = $( "#" + cVarName );   
}   

function AddGet( cDlgName )
{
   var oDlg = document.getElementById( cDlgName );
   var cVarName = "ctrl" + ( oDlg.children.length + 1 );
   var div = document.createElement( "div" );
   
   div.className = "ui-widget-content";
   div.id = cVarName;
   div.style.position = "absolute";
   div.style.top    = "20px";
   div.style.left   = "20px";
   div.style.width  = "300px";
   div.style.height = "40px";

   oDlg.appendChild( div );

   $( "#" + cVarName ).resizable().draggable();
   $( "#" + cVarName ).css( 'background-image', "none" );
   $( "#" + cVarName ).css( 'background-color', "white" );
   $( "#" + cVarName ).data( "tag", "GET" );

   $( "#" + cVarName ).on( "dragstart", function( event, ui ) { oCtrl = $( "#" + cVarName ); } );
   oCtrl = $( "#" + cVarName );   
}   

function AddProgress( cDlgName )
{
   var oDlg = document.getElementById( cDlgName );
   var cVarName = "ctrl" + ( oDlg.children.length + 1 );
   var div = document.createElement( "div" );
   
   div.className = "progressbar";
   div.id = cVarName;
   div.style.position = "absolute";
   div.style.top    = "20px";
   div.style.left   = "20px";
   div.style.width  = "300px";
   div.style.height = "40px";

   oDlg.appendChild( div );

   $( "#" + cVarName ).progressbar().resizable().draggable();
   $( "#" + cVarName ).progressbar( "value", 30 );
   // $( "#" + cVarName ).css( 'background-image', "none" );
   // $( "#" + cVarName ).css( 'background-color', "white" );
   $( "#" + cVarName ).data( "tag", "PROGRESS" );

   $( "#" + cVarName ).on( "dragstart", function( event, ui ) { oCtrl = $( "#" + cVarName ); } );
   oCtrl = $( "#" + cVarName );   
}   

function AddSay( cDlgName )
{
   var oDlg = document.getElementById( cDlgName );
   var cVarName = "ctrl" + ( oDlg.children.length + 1 );
   var div = document.createElement( "div" );
   
   div.className = "ui-widget-content";
   div.id = cVarName;
   div.style.position = "absolute";
   div.style.top    = "20px";
   div.style.left   = "20px";
   div.style.width  = "110px";
   div.style.height = "40px";
   div.innerHTML = "Say";

   oDlg.appendChild( div );

   $( "#" + cVarName ).resizable().draggable();
   $( "#" + cVarName ).css( 'background-image', "none" );
   $( "#" + cVarName ).data( "tag", "SAY" );

   $( "#" + cVarName ).on( "dragstart", function( event, ui ) { oCtrl = $( "#" + cVarName ); } );
   oCtrl = $( "#" + cVarName );   
}   

function AddBrowse( cDlgName )
{
   var oDlg = document.getElementById( cDlgName );
   var cVarName = "ctrl" + ( oDlg.children.length + 1 );
   var div = document.createElement( "div" );
   
   div.className = "ui-widget-content";
   div.id = cVarName;
   div.style.position = "absolute";
   div.style.top    = "20px";
   div.style.left   = "20px";
   div.style.width  = "274px";
   div.style.height = "217px";
   div.innerHTML = "<table class='browse'><tr><th>Col 1</th><th>Col 2<th></tr><tr><td>row 1-1</td><td>row 1-2</td></tr><tr><td>row 2-1</td><td>row 2-2</td></tr></table>";
   div.oncontextmenu = function() { MsgInfo( "right click" ); return false; }

   oDlg.appendChild( div );

   $( "#" + cVarName ).resizable().draggable();
   $( "#" + cVarName ).data( "tag", "BROWSE" );

   $( "#" + cVarName ).on( "dragstart", function( event, ui ) { oCtrl = $( "#" + cVarName ); } );
   oCtrl = $( "#" + cVarName );   
}   

function AddFolder( cDlgName )
{
   var oDlg = document.getElementById( cDlgName );
   var cVarName = "ctrl" + ( oDlg.children.length + 1 );
   var div = document.createElement( "div" );
   
   div.className = "ui-widget-content";
   div.id = cVarName;
   div.style.position = "absolute";
   div.style.top    = "20px";
   div.style.left   = "20px";
   div.style.width  = "342px";
   div.style.height = "241px";
   div.innerHTML = "<ul><li><a href=#tab1>One</li><li><a href=#tab2>Two</li><li><a href=#tab3>Three</li></ul>";
   div.oncontextmenu = function() { ShowPopup( "oDlg" ); return false; }

   oDlg.appendChild( div );

   $( "#" + cVarName ).tabs();
   $( "#" + cVarName ).resizable().draggable();
   $( "#" + cVarName ).data( "tag", "FOLDER" );

   $( "#" + cVarName ).on( "dragstart", function( event, ui ) { oCtrl = $( "#" + cVarName ); } );
   oCtrl = $( "#" + cVarName );   
}   

function ShowPopup( cDlgName )
{
   var oDlg = document.getElementById( cDlgName );
   var div = document.createElement( "ul" );
   
   div.className = "ui-widget-content";
   div.id = "popup";
   div.style.position = "relative";
   div.style.top    = "80px";
   div.style.left   = "150px";
   div.style.width  = "240px";
   div.style.height = "200px";
   div.innerHTML = "<li><a href=#option1>One</li><li><a href=#option2>Two</li><li><a href=#option3>Three</li>";

   oDlg.appendChild( div );

   $( "#popup" ).menu();
   $( "#popup" ).bind( "menuselect", function( event, ui ) { $( "#popup" ).hide().remove(); } );
   $( "#popup" ).css( 'background-image', "none" );
}   

function GenCode( cDlgName )
{
   var oDlg    = document.getElementById( cDlgName );
   var cCode   = '#include "FiveWeb.ch"' + CRLF + CRLF;
   var cWidth  = $( "#" + cDlgName ).css( "width" );
   var cHeight = $( "#" + cDlgName ).css( "height" );
   
   cWidth  = cWidth.substr( 0, cWidth.length - 2 );
   cHeight = cHeight.substr( 0, cHeight.length - 2 );
   
   cCode += "function Main()" + CRLF + CRLF;
   cCode += "   local oDlg" + CRLF + CRLF;
   cCode += '   DEFINE DIALOG oDlg TITLE "' + $( "#" + cDlgName ).dialog( "option", "title" ) + '" ;' + CRLF;
   cCode += "      SIZE " + cWidth + ", " + cHeight + CRLF + CRLF;

   for( n = 1; n <= oDlg.children.length; n++ )
   {
   	  var oCtrl   = $( "#" + "ctrl" + n.toString() );
      var cTop    = oCtrl.css( "top" );
      var cLeft   = oCtrl.css( "left" );
      var cClass  = oCtrl.data( "tag" );
      var cWidth  = oCtrl.css( "width" );
      var cHeight = oCtrl.css( "height" );

      cTop    = cTop.substr( 0, cTop.length - 2 );
      cTop    = parseInt( cTop ).toFixed( 0 );
      cLeft   = cLeft.substr( 0, cLeft.length - 2 );
      cLeft   = parseInt( cLeft ).toFixed( 0 );
      cWidth  = cWidth.substr( 0, cWidth.length - 2 );
      cWidth  = parseInt( cWidth ).toFixed( 0 );
      cHeight = cHeight.substr( 0, cHeight.length - 2 );
      cHeight = parseInt( cHeight ).toFixed( 0 );
      
      cCode += "   @ " + cTop + ", " + cLeft + " " + cClass +  
               " SIZE " + cWidth + ", " + cHeight + 
               " OF oDlg" + CRLF + CRLF;
   }   	

   cCode += "   ACTIVATE DIALOG oDlg" + CRLF + CRLF;
   cCode += "return nil";
   
   MemoEdit( cCode, "FiveWeb source code" );
}      

function ShowHTML( cDlgName )
{
   var oDlg  = document.getElementById( cDlgName );
   
   MemoEdit( oDlg.innerHTML, "HTML Source code" );
}      

// DataBase management

var cAlias, nRecNo;

function Alias()
{
   return cAlias;
}

function SetAlias( cName )
{
   cAlias = cName;
}   	   
   
// GUI Classes and functions

var oDlg, oBrw, oFrame, oScript;   
   
function MsgAbout( cAppName, cAuthor )
{
   oDlg = new Dialog( "About", 450, 350 );
      
   Image( 70, 30, "../images/fivetech.bmp", oDlg );
      
   Say(  90, 170, cAppName, oDlg );
   Say( 120, 160, cAuthor, oDlg );

   Button( 210, 170, "Ok", oDlg, 100, 40, "oDlg.End()" );  
}    
   
function MsgFind()
{
   oDlg = new Dialog( "Find", 500, 200 );
      
   Say( 60, 40, "what:", oDlg );
   Get( 56, 110, "                       ", oDlg, 360, 30 );
      
   Image( 100, 30, "images/search.png", oDlg, 80, 80 );

   Button( 140, 150, "Ok", oDlg, 100, 40, "oDlg.End()" );  
   Button( 140, 270, "Cancel", oDlg, 100, 40, "oDlg.End()" );  
}   
   
function MsgInfo( cMsg, cTitle )
{
   var div = document.createElement( "div" );
   
   div.className = "dialog_window";
   div.id = "msginfo";
   div.title = "Information";
   div.innerHTML = "<span class='ui-icon ui-icon-info' width=40px; " + 
                   "height=40px; style='float: left; margin: 0 7px 20px 0;'></span>" + cMsg;
   
   document.body.appendChild( div );

   $( "#msginfo" ).dialog( { width: 400, height: 250, modal: false, 
   buttons: { 'Ok': function() { $( "#msginfo" ).dialog( "close" ).remove(); } } } );
}   

function MemoEdit( cMsg, cTitle )
{
   var div = document.createElement( "div" );
   
   div.className = "dialog_window";
   div.id = "memoedit";
   div.title = cTitle;
   div.innerHTML = '<textarea style="width:630px; height:800px;">' + 
                   cMsg + "</textarea>";
   
   document.body.appendChild( div );

   $( "#memoedit" ).dialog( { width: 700, height: 550, modal:true, 
   buttons: { 'Ok': function() { $( "#memoedit" ).dialog( "close" ).remove(); } } } );
}   

function MsgYesNo( cMsg, OnYes )
{
   oDlg = new Dialog( "Please select", 500, 200 );
      
   Say( 80, 180 - ( cMsg.length / 2 ), cMsg, oDlg ); 
   Image( 60, 30, "images/question.png", oDlg, 80, 80 );

   Button( 140, 150, "Yes", oDlg, 100, 40, "OnYes()" );  
   Button( 140, 270, "No",  oDlg, 100, 40, "oDlg.End()" );  
}   

function Div( nTop, nLeft, oDlg, nWidth, nHeight )
{
   var div = document.createElement( "div" );
      
   div.className = "div";
   div.id = "div";
   div.style.background = "#ffffff";
   div.style.position = "absolute";
   div.style.top  = nTop;
   div.style.left = nLeft;
   div.style.width    = nWidth;
   div.style.height   = nHeight;
      
   oDlg.dlg.appendChild( div );
   
   return div;
}   

function Say( nTop, nLeft, cText, oDlg )
{
   var span = document.createElement( "span" );
      
   span.className = "say";
   span.id = "say";
   span.style.top  = nTop;
   span.style.left = nLeft;
   span.innerHTML  = cText;
      
   oDlg.dlg.appendChild( span );
}   

function Button( nTop, nLeft, cText, oDlg, nWidth, nHeight, cAction )
{
   var button = document.createElement( "input" );
      
   button.type           = "button";
   button.style.position = "absolute";
   button.style.top      = nTop;
   button.style.left     = nLeft;
   button.style.width    = nWidth;
   button.style.height   = nHeight;
   button.value          = cText;
   button.onclick        = new Function( cAction );
      
   oDlg.dlg.appendChild( button );
}   

function BtnOpen( nTop, nLeft, cText, oDlg, nWidth, nHeight )
{
   var btnOpen = document.createElement( "input" );
      
   btnOpen.type           = "file";
   btnOpen.className      = "get";
   btnOpen.id             = "get";
   btnOpen.style.position = "absolute";
   btnOpen.style.top      = nTop;
   btnOpen.style.left     = nLeft;
   btnOpen.style.width    = nWidth;
   btnOpen.style.height   = nHeight;
   btnOpen.value          = cText;
      
   oDlg.dlg.appendChild( btnOpen );
      
   return btnOpen;
}   

function Get( nTop, nLeft, cText, oDlg, nWidth, nHeight )
{
   var get = document.createElement( "input" );
   var aGets = document.getElementsByClassName( "get" );

   get.type           = "text";
   get.className      = "get";
   get.id             = "get";
   get.style.position = "absolute";
   get.style.top      = nTop;
   get.style.left     = nLeft;
   get.style.width    = nWidth;
   get.style.height   = nHeight;
   get.value          = cText;
   get.name           = "get" + ( aGets.length + 1 ).toString();
      
   oDlg.dlg.appendChild( get );
}   

function TextArea( nTop, nLeft, cText, oDlg, nWidth, nHeight )
{
   var text = document.createElement( "textarea" );
   var aGets = document.getElementsByClassName( "memo" );

   text.className      = "memo";
   text.id             = "memo";
   text.style.position = "absolute";
   text.style.top      = nTop;
   text.style.left     = nLeft;
   text.style.width    = nWidth;
   text.style.height   = nHeight;
   text.value          = cText;
   text.name           = "memo" + ( aGets.length + 1 ).toString();
      
   oDlg.dlg.appendChild( text );
   
   return text;
}   

function Table( nTop, nLeft, oDlg, nWidth, nHeight )
{
   var div   = document.createElement( "div" );
   var table = document.createElement( "table" );
   var tbody = document.createElement( "tbody" );
      
   div.style.overflow = "auto";   
   div.style.top      = nTop;
   div.style.left     = nLeft;
   div.style.width    = nWidth;
   div.style.height   = 300;
   div.style.border   = 1;
      
   table.className      = "table";
   table.id             = "table";
   table.style.position = "absolute";
   table.style.top      = nTop;
   table.style.left     = nLeft;
   table.style.width    = nWidth;
   table.style.height   = nHeight;
   table.style.border   = 1;

   div.appendChild( table ); 
   table.appendChild( tbody );      
   oDlg.dlg.appendChild( div );
   
   this.table = table;
   this.body = tbody;
   this.rows = 0;

   this.SetHeaders = function( aHeaders ) 
   { 
      var row = document.createElement( "tr" );
      var n;
      
      for( n = 0; n < aHeaders.length; n++ )
      {	
         var header = document.createElement( "th" );
         
         header.innerText = aHeaders[ n ];
         row.appendChild( header );
    	}  
    	
    	this.body.appendChild( row ); 
   };

   this.AddRow = function( aRow ) 
   { 
      var row = document.createElement( "tr" );
      var col = document.createElement( "td" );
      var checkbox = document.createElement( "input" ); 
      var n;

      row.onmouseover = function() { this.className = "over"; };
      
      if( this.rows % 2 == 0 )
      {
         row.onmouseout  = function() { setRowColor( this, "even" ); };
         row.className = "even";
      }   
      else
      {	   
         row.onmouseout  = function() { setRowColor( this, "odd" ); };
         row.className = "odd";
      }

      checkbox.type = "checkbox";
      checkbox.onclick = function() { toggleRowSelected( this ); };
      col.appendChild( checkbox );
      col.width = 10;
      row.appendChild( col );
      
      for( n = 0; n < aRow.length; n++ )
      {	
         col = document.createElement( "td" );
         col.innerText   = aRow[ n ];
         row.appendChild( col );
    	}  
    	
    	this.body.appendChild( row );
    	this.rows++; 
   };
}   

function Form( cFormName )
{
   oDlg   = new Dialog( "loading form...", 300, 45 );
   
   oFrame = Frame( 10, 10, "http://www.fivetechsoft.com/fivegen/form.php?name=" + cFormName, 
                   oDlg, 20, 20 );
}	

function Frame( nTop, nLeft, cSource, oDlg, nWidth, nHeight )
{
   var iframe = document.createElement( "iframe" );
      
   iframe.className      = "container";
   iframe.id             = "container";
   iframe.style.position = "absolute";
   iframe.style.top      = nTop;
   iframe.style.left     = nLeft;
   iframe.style.width    = nWidth;
   iframe.style.height   = nHeight;
   iframe.src            = cSource;
      
   oDlg.dlg.appendChild( iframe );
   
   return iframe;
}   

function Image( nTop, nLeft, cFileName, oDlg, nWidth, nHeight )
{
   var image = document.createElement( "image" );
      
   image.style.position = "absolute";
   image.className      = "image";
   image.id             = "image";
      
   if( nTop != 0 )
      image.style.top = nTop;
         
   if( nLeft != 0 )   
      image.style.left = nLeft;
      
   if( typeof nWidth != "undefined" )
      image.style.width = nWidth;
         
   if( typeof nHeight != "undefined" )   
      image.style.height = nHeight;
      
   image.src = cFileName;
      
   if( nTop == 0 )
      image.style.top = ( parseFloat( document.body.clientHeight ) / 2 ) - ( parseFloat( image.style.height ) / 2 );   

   if( nLeft == 0 )
      image.style.left = ( parseFloat( document.body.clientWidth ) / 2 ) - ( parseFloat( image.style.width ) / 2 );   
      
   if( typeof oDlg != "undefined" )
      oDlg.dlg.appendChild( image );
   else
   	 document.body.appendChild( image );
      	 
   return image;	    
}   
  
function ValType( o )
{
   return typeof o;
}     
  
function ScreenHeight()
{
   var db = document.body;
   var de = document.documentElement;
   
   return Math.max( Math.max( db.scrollHeight, de.scrollHeight ), 
                    Math.max( db.offsetHeight, de.offsetHeight ), 
                    Math.max( db.clientHeight, de.clientHeight ) );
}	  
   
function Script( cScriptName )
{
   oDlg   = new Dialog( "loading script...", 300, 45 );
   
   oFrame = Frame( 10, 10, "http://www.fivetechsoft.com/fivegen/script.php?name=" + cScriptName, 
                   oDlg, 20, 20 );
}	
   
function Dialog( cTitle, nWidth, nHeight, lModal )
{
   this.dlg = document.createElement( "div" );
      
   this.dlg.className = "dialog_window";
   this.dlg.id = "dialog";
   this.dlg.title = cTitle;
   
   this.End = function() { $( "#dialog" ).dialog( "close" ).remove(); };

   document.body.appendChild( this.dlg );

   if( ValType( lModal ) == "undefined" )
      lModal = false;

   $( "#dialog" ).on( "dialogclose", function( event, ui ) { $( "#dialog" ).remove(); } );
   
   $( "#dialog" ).dialog( { width: nWidth, height: nHeight, modal: lModal, 
   	                        close: function( event, ui ) {} } );
}

function GetColor( cClass, cType )
{
   var obj = document.getElementById( cClass );
   	  
   if( cType == "back" )
   {
      try
      {	
         return obj.currentStyle.backgroundColor;
      }
      catch( exception )
      {
         return document.defaultView.getComputedStyle( obj, null ).backgroundColor;   
      }
   }   	   
   	     
   if( cType == "text" )
   {
      try
      {	
         return obj.currentStyle.color;
      }
      catch( exception )
      {
         return document.defaultView.getComputedStyle( obj, null ).color;   
      }
   }   	   
}   

function SetColor( cClass, cType, cValue )
{
   var obj = document.getElementById( cClass );
   	  
   if( cType == "back" )
   {
      try
      {	
         obj.currentStyle.backgroundColor = cValue;
      }
      catch( exception )
      {
         document.defaultView.getComputedStyle( obj, null ).backgroundColor = cValue;   
      }
   }   	   
   	     
   if( cType == "text" )
   {
      try
      {	
         obj.currentStyle.color = cValue;
      }
      catch( exception )
      {
         document.defaultView.getComputedStyle( obj, null ).color = cValue;   
      }
   }   	   
}   

function colorToHex( color ) 
{
   var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec( color );
   var red, green, blue, rgb;
      
   if( color.substr( 0, 1 ) === '#' ) 
     return color;
    
   red   = parseInt( digits[ 2 ] );
   green = parseInt( digits[ 3 ] );
   blue  = parseInt( digits[ 4 ] );
   rgb   = blue | ( green << 8 ) | ( red << 16 );
    
   return digits[ 1 ] + '#' + rgb.toString( 16 );
}
   
function toggleRowSelected( checkbox )
{
   if( checkbox.checked )
      checkbox.parentNode.parentNode.className = "selected";
   else
      checkbox.parentNode.parentNode.className = "over";
}   

function setRowColor( row, mode )
{
   if( row.firstChild.firstChild.checked )
      row.className = "selected";
   else
      row.className = mode;
}   

function GetIframeDoc( oIframe )
{
   if( oIframe.contentDocument ) 
			return oIframe.contentDocument;
			 
	 else if( oIframe.contentWindow )
			return oIframe.contentWindow.document;
			
	 else if( oIframe.document )
			return oIframe.document;
			
	 else 
	 	 return null;
}

function BrwSelCount( oIframe )
{
	 var aCheckBoxes = GetIframeDoc( oIframe ).getElementsByTagName( "input" );
	 var n, nSelected = 0;
	  
   for( n = 0; n < aCheckBoxes.length; n++ )
   {
      if( aCheckBoxes[ n ].type == "checkbox" && aCheckBoxes[ n ].checked )
      {
         nSelected++;	
      }      
   }      	   
   
   return nSelected;
}

function BrwSelRecord( oIframe )
{
	 var aCheckBoxes = GetIframeDoc( oIframe ).getElementsByTagName( "input" );
	 var n;
	  
   for( n = 0; n < aCheckBoxes.length; n++ )
   {
      if( aCheckBoxes[ n ].type == "checkbox" && aCheckBoxes[ n ].checked )
      {
         return aCheckBoxes[ n ].name; 
      }      
   }      	   
   
   return "0";
}   	 
 
function GetInputValues( oIframe )
{
	 var aInputs = GetIframeDoc( oIframe ).getElementsByTagName( "input" );
	 var n;
	 var cResult = "";
	  
   for( n = 0; n < aInputs.length; n++ )
   {
      cResult += aInputs[ n ].name + "=" + escape( aInputs[ n ].value.trim() ) + "&";	
   }      	   
   
   aInputs = GetIframeDoc( oIframe ).getElementsByTagName( "textarea" );

   for( n = 0; n < aInputs.length; n++ )
   {
      cResult += aInputs[ n ].name + "=" + escape( aInputs[ n ].value.trim() ) + "&";	
   }      	   
   
   return cResult.substring( 0, cResult.length - 1 );
}	 
 
// Cookies support

function createCookie( cName, value, days ) 
{
	 if( days ) 
	 {
		 var date = new Date();
		
		 date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
		
		 var expires = "; expires=" + date.toGMTString();
	 }
	 else 
		 var expires = "";
		
   document.cookie = cName + "=" + value + expires + "; path=/";
} 

function readCookie( name ) 
{
	var nameEQ = name + "=";
	var ca = document.cookie.split( ';' );

	for( var i = 0; i < ca.length; i++ ) 
	{
		var c = ca[ i ];
		
		while( c.charAt(0) == ' ' ) 
		   c = c.substring( 1, c.length );
		   
		if( c.indexOf( nameEQ ) == 0 ) 
		   return c.substring( nameEQ.length,c.length );
	}
	
	return null;
}

function eraseCookie( name ) 
{
   createCookie( name, "", -1 );
}

String.prototype.trim = function() { return this.replace(/^\s*/, "").replace(/\s*$/, ""); }

String.prototype.rtrim = function() { return this.replace(/\s+$/, ""); }