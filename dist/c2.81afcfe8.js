new class{constructor(){this.dom={wrapper:{key:"[data-hm-w]",current:null},cursor:{key:"hm-cx",current:null}},this.mode={monochrome:!1,invert:!1,autoplay:!0},this.cursorConfig={blueClass:"--clr-b",redClass:"--clr-r",width:.75*window.innerHeight,height:.75*window.innerHeight},this.mouseHasMovedOnce=!1,this.DEBUG_VERBOSE=!0,this.init()}generateBodyFilter(){let t=`hue-rotate(${1e3*Math.random()}deg) contrast(${Math.floor(1*Math.random())+1}) invert(${Math.random()>.5?1:0})`;document.body.setAttribute("style",`filter: ${t};`)}handleCursorClick(){this.log("handleCursorClick(): fired");let t=this.dom.cursor.current,{blueClass:e,redClass:s}=this.cursorConfig;t.classList.contains(e)?(t.classList.remove(e),t.classList.add(s)):(t.classList.remove(s),t.classList.add(e)),this.generateBodyFilter()}prependCursorStyleStr(t){return`width: ${this.cursorConfig.width+"px"}; height: ${this.cursorConfig.height+"px"}; `+t}handleCursorMove(t){this.log("handleCursorMove(): fired",t);let e=this.dom.cursor.current,s=this.cursorConfig.width,r=this.cursorConfig.height,i=t.clientX-s/2,o=t.clientY-r/2;this.mouseHasMovedOnce||e.classList.contains("--a")||e.classList.add("--a");let n=`transform: translate(${i}px, ${o}px)`;e.setAttribute("style",this.prependCursorStyleStr(n))}createCursor(){requestAnimationFrame(function(){this.log("createCursor(): creating cursor");let t=document.createElement("span");t.classList.add(this.dom.cursor.key),Math.random()<.5?t.classList.add(this.cursorConfig.blueClass):t.classList.add(this.cursorConfig.redClass),t.setAttribute("style",this.prependCursorStyleStr("")),document.body.addEventListener("click",this.handleCursorClick.bind(this)),document.body.addEventListener("mousemove",this.handleCursorMove.bind(this)),document.body.appendChild(t),this.dom.cursor.current=t}.bind(this))}createDOM(){this.log("createDOM(): creating dom"),this.createCursor()}log(t,e=" ",s=!1){this.DEBUG_VERBOSE&&(s?console.error("c2 ~ "+t,e):console.log("c2 ~ "+t,e))}init(){this.log("init(): initialized"),this.createDOM()}};
//# sourceMappingURL=c2.81afcfe8.js.map