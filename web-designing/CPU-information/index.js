alert("JavaScript Working");

var str = "";
var objVar = GetObject("C:\\CAD\\SCHEMA.CAD!Layer2");

var wmi = GetObject("winmgmts:{impersonationLevel=impersonate}");
e = new Enumerator(wmi.InstancesOf("Win32_Processor"));
for(; !e.atEnd(); e.moveNext()) {
    var s = e.item();
    str = s.ProcessorID;
}

document.getElementById("spanCPUID").innerHTML = str;
