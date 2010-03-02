var Drag={
  "obj":null,
  "zIndex":0,
  "init":function(a){
      a.onmousedown=Drag.start;
    },
  "start":function(a){  
      var b=Drag.obj=this;
      a=Drag.fixE(a);
      b.startX=a.clientX;
      b.startY=a.clientY;
      b.posX = parseInt(b.style.left);
      b.posY = parseInt(b.style.top);
      b.style.zIndex = ++Drag.zIndex;
      document.onmousemove=Drag.drag;
      document.onmouseup=Drag.end;
      return false;
    },  
  "drag":function(a){
      a = Drag.fixE(a);
      var b=Drag.obj;
      b.style.top = a.clientY - (b.startY - b.posY);
      b.style.left = a.clientX  - (b.startX - b.posX);
      return false;
    },
  "end":function(){  
      document.onmousemove=null;
      document.onmouseup=null;
      Drag.obj=null;
    },
  "fixE":function(a){
      if(typeof a=="undefined")a=window.event;
      if(typeof a.layerX=="undefined")a.layerX=a.offsetX;
      if(typeof a.layerY=="undefined")a.layerY=a.offsetY;
      return a;
    }
};