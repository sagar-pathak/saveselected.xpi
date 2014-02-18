function readoutloud_function(){

var file = Components.classes["@mozilla.org/file/local;1"]
           .createInstance(Components.interfaces.nsILocalFile);
file.initWithPath("E:\\test.txt");		
 
// WRITE
var text = content.getSelection().toString();
//var text = "Text to be written";
var outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"]
                   .createInstance(Components.interfaces.nsIFileOutputStream);
outputStream.init(file, 0x04 | 0x08 | 0x10, 00002, 0);
outputStream.write(text, text.length);
	
// READ
var inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"]
                  .createInstance(Components.interfaces.nsIFileInputStream);
var sstream = Components.classes["@mozilla.org/scriptableinputstream;1"]
                  .createInstance(Components.interfaces.nsIScriptableInputStream);
inputStream.init(file, 0x04, 00004, 0);
sstream.init(inputStream);
var output = sstream.read(sstream.available());
 
alert(output);
} 

