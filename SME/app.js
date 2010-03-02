// --- utils
function $(id) {return document.getElementById(id);}
function sortNumber(a, b) {return a[0] - b[0]}
// --- app code
var App = new Object()
App.moduleList = [];
App.Modules = new Object();
// --- modules
App.Modules.Box = {
    desc: "create a box with user defined dimensions",
    title: "box",
    data: {width: 10, height: 15, length: 20}
}
App.Modules.Copy = {
    desc: "copy the selected entity",
    title: "copy",
    data: {}
}
App.Modules.RandRotate = {
    desc: "rotate with a random amount",
    title: "randrotate",
    data: {}
}
// --- functions
App.getAll = function() {
    var ret = ""
    for (var z in App.moduleList) {
        ret += App.moduleList[z].title + "|";
    }
    return ret;
}
App.script = function() {
    var ret = []
    for (var z in App.moduleList) {
        ret.push (new Array(parseInt(App.moduleList[z].box.style.top,10),App.moduleList[z]))
    }
    ret.sort(sortNumber)
    var script = ""
    for (var z in ret) {
        script += (ret[z][1].title) + "|";
    }
    new ajax ('script.php', {postBody: "data="+script.toString(), update: 'script', onComplete:myFunc});
    function myFunc(request) {
        $("script").innerHTML = request.ResponseText;
        $("script").style.display = "block";
    }
    // setTimeout(App.hidescript, 1000);
}
App.hidescript = function() {
    $("script").style.display = "none";
}
App.remove = function(id) {
    for (var z in App.moduleList) {
        if (App.moduleList[z].id==id) {
            document.body.removeChild(App.moduleList[z].box)
            delete App.moduleList[z]
        }
    }
}
App.newscript = function() {
    for (var z in App.moduleList) {
        App.remove(App.moduleList[z].id)
    }
}
App.help = function(id) {
    if (id != 0)
      $("help").innerHTML = App.Modules[id].desc;
    else
      $("help").innerHTML = "";
}
var Module = function(moduleID) {
    var self = this;
    this.setTitle = function(newtext) {this.title = this.etitle.innerHTML = newtext?newtext:"noname";}
    this.id = Math.round(Math.random().toString()*1000)
    this.newValue = function(obj) {
      alert (obj.innerHTML);
    }
    this.build = function () {
        var elmclose = document.createElement("IMG");
        elmclose.src = "close.gif";
        elmclose.className = "close";
        elmclose.onclick = function(){App.remove(self.id)};

        var elmedit = document.createElement("DIV");
        elmedit.className = "close";
        elmedit.style.color = "white";
        elmedit.appendChild(document.createTextNode("edit"));

        var elmtitle = document.createElement("DIV");
        elmtitle.className = "title";
        elmtitle.style.height = "15px";
        // elmtitle.style.width = "100%";
        // elmtitle.onclick = function(){self.setTitle(prompt("new name",""))}
        this.etitle = elmtitle;
        this.setTitle(App.Modules[moduleID].title);
        var elmdata = document.createElement("DIV");
        elmdata.style.background = "#ccc";
        
        mytable = document.createElement("TABLE");
        mytable.style.border = "1px solid black";
        mytablebody = document.createElement("TBODY");

        this.data = new Object();
        var o = App.Modules[moduleID].data;

        for(i in o) {
            if (i != "")
            {
                // create table with the box data
                mycurrent_row=document.createElement("TR");
                mycurrent_cell=document.createElement("TD");
                var eheader = document.createTextNode(i);
                mycurrent_cell.appendChild(eheader);
                mycurrent_row.appendChild(mycurrent_cell);
                
                mycurrent_cell=document.createElement("TD");
                var eheader = document.createTextNode(o[i]);
                mycurrent_cell.onclick = function(){self.newValue(this);}
                mycurrent_cell.appendChild(eheader);
                mycurrent_row.appendChild(mycurrent_cell);

                mytablebody.appendChild(mycurrent_row);
                mytable.appendChild(mytablebody);
                this.data[i] = o[i];
            }
        }
        elmdata.appendChild(mytable);  
        var box = document.createElement("DIV");
        this.box = box;
        box.style.position = "absolute";
        box.style.top = "100px";
        box.style.left = Math.round(Math.random().toString()*600)+"px";
        box.style.width = "150px";
        box.style.cursor = "move";
        box.style.backgroundColor = "#000";
        box.onmouseover = function(){App.help(moduleID);}
        box.onmouseout = function(){App.help(0);}
        Drag.init(box);

        box.appendChild(elmclose);
        box.appendChild(elmedit);
        box.appendChild(elmtitle);
        box.appendChild(elmdata);
        document.body.appendChild(box);
        App.moduleList.push(this)
    }
    this.build();
}
// --- application start
var ret = ""
for (var z in App.Modules) {
    var a = document.createElement("A");
    a.innerHTML = App.Modules[z].title;
    a.style.padding = "5px";
    a.id = z;
    a.href = "#"
    a.onclick = function(){new Module(this.id);}
    $("nav").appendChild(a);
}
new Module("Box")
new Module("Copy") 
