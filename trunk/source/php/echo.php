<?php
   $file = fopen( "temp.html", "w" );
   fwrite( $file, $_GET[ 'code' ] );
   fclose( $file );
   echo "processing...";
   echo "<script>";
   echo "document.location='http://www.fivetechsoft.com/fiveweb/temp.html'";
   echo "</script>";
?>
