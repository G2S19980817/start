var CURSOR;Math.lerp=(s,t,e)=>(1-e)*s+e*t;const getStyle2=(s,t)=>{try{return window.getComputedStyle?window.getComputedStyle(s)[t]:s.currentStyle[t]}catch(s){}return""};class Cursor{constructor(){this.pos={curr:null,prev:null},this.pt=[],this.create(),this.init(),this.render()}move(s,t){this.cursor.style.left=`${s}px`,this.cursor.style.top=`${t}px`}create(){this.cursor||(this.cursor=document.createElement("div"),this.cursor.id="cursor",this.cursor.classList.add("hidden"),document.body.append(this.cursor));var s=document.getElementsByTagName("*");for(let t=0;t<s.length;t++)"pointer"==getStyle2(s[t],"cursor")&&this.pt.push(s[t].outerHTML);document.body.appendChild(this.scr=document.createElement("style")),this.scr.innerHTML="* {cursor: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='.75' fill='cyan'/></svg>\") 4 4, auto}"}refresh(){this.scr.remove(),this.cursor.classList.remove("hover"),this.cursor.classList.remove("active"),this.pos={curr:null,prev:null},this.pt=[],this.create(),this.init(),this.render()}init(){document.onmouseover=s=>this.pt.includes(s.target.outerHTML)&&this.cursor.classList.add("hover"),document.onmouseout=s=>this.pt.includes(s.target.outerHTML)&&this.cursor.classList.remove("hover"),document.onmousemove=s=>{null==this.pos.curr&&this.move(s.clientX-8,s.clientY-8),this.pos.curr={x:s.clientX-8,y:s.clientY-8},this.cursor.classList.remove("hidden")},document.onmouseenter=s=>this.cursor.classList.remove("hidden"),document.onmouseleave=s=>this.cursor.classList.add("hidden"),document.onmousedown=s=>this.cursor.classList.add("active"),document.onmouseup=s=>this.cursor.classList.remove("active")}render(){this.pos.prev?(this.pos.prev.x=Math.lerp(this.pos.prev.x,this.pos.curr.x,.15),this.pos.prev.y=Math.lerp(this.pos.prev.y,this.pos.curr.y,.15),this.move(this.pos.prev.x,this.pos.prev.y)):this.pos.prev=this.pos.curr,requestAnimationFrame((()=>this.render()))}}CURSOR=new Cursor;