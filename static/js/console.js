// 控制台输出字符画
if (window.console) {
    Function.prototype.makeMulti = function () {
        let l = new String(this);
        l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
        return l;
    };
    let string = function () {
        /*
  ______                    _ _                 _           
 |  ____|                  | | |               | |          
 | |__ ___  _ __ ___   __ _| | |__   __ _ _   _| |_ 
 |  __/ _ \| '_ ` _ \ / _` | | '_ \ / _` | | | | __|
 | | | (_) | | | | | | (_| | | | | | (_| | |_| | |_ 
 |_|  \___/|_| |_| |_|\__,_|_|_| |_|\__,_|\__,_|\__|
                                                    
                ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
                ───█▒▒░░░░░░░░░▒▒█───
                ────█░░█░░░░░█░░█────
                ─▄▄──█░░░▀█▀░░░█──▄▄─
                █░░█─▀▄░░░░░░░▄▀─█░░█
                                                    
        */
    };
    console.log(string.makeMulti());
    console.log("欢迎访问%cFomalhaut🥝の Tiny Home", "color:#1fc7b6;font-weight:bold");
}