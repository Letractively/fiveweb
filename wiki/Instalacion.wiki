FiveWeb se usa con Harbour. Si vas a usar un servidor Windows, entonces necesitas Harbour para Windows:

http://code.google.com/p/harbour-and-xharbour-builds/downloads/detail?name=harbour_bcc582_20121106.zip&can=2&q=

Si vas a usar un servidor Linux, entonces necesitas Harbour para Linux:

http://code.google.com/p/harbour-and-xharbour-builds/downloads/detail?name=harbour_linux_20121029.zip&can=2&q=

FiveWeb proporciona ficheros make para ser construido para Windows y para Linux. Asi mismo en la carpeta samples se encuentra un build.bat para Windows y un build.sh para Linux

Las aplicaciones construidas con FiveWeb son aplicaciones que se denominan "CGIs". Normalmente solo las podras usar desde la carpeta cgi-bin de tu wervidor web. Recuerda que si usas un servidor Linux, a tus aplicaciones tendrás que darles permiso de ejecución haciendo:

chmod 755 myapp

en donde myapp es la aplicacion que hayas construido a partir de myapp.prg