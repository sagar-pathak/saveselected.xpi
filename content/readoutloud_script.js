function readoutloud_function(){
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	//getting platform type
	getPlatform= navigator.platform.toLowerCase().split(" ");
	var platform = getPlatform[0];
	if(platform =='linux'){
		file.initWithPath("/home/sagar/Desktop/test.txt");
		if ( file.exists() == false ) 
			file.create(Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
	}else if(platform =='win32' || platform == 'win16') {
		file.initWithPath("C:\\test.txt");
		if ( file.exists() == false ) 
			file.create(Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
	}else{
		alert("The addon is accessible only for Linux and Windows platform. Please Wait!! We are working for other");
		return;
	}

	// WRITE
	var text = content.getSelection().toString();
	//'\u091C\u093E\u0935\u093E\u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u091F'+
	var outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
	outputStream.init(file, 0x04 | 0x08, 00002, 0); //read and write | create file | 0x10 = append
	outputStream.write(text, text.length);

	// READ
	var inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
	var sstream = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);
	inputStream.init(file, 0x04, 00004, 0);
	sstream.init(inputStream);
	var output = sstream.read(sstream.available());
	 
	alert(text);
} 

