/* https://github.com/kibkibe/roll20-api-scripts/tree/master/smallchat */
/* (smallchat.js) 210306 코드 시작 */
/* 양천일염님 배포 코드를 따로 수정한 버전입니다. */
/* 재배포!! 하지 말아주세요!!!!!!!! 원본이 있는 코드니까!!!! */
// define: option

on("chat:message", function(msg)
{
if (msg.type == "api"){
	// on.chat:message:api
	
	 if (msg.content.indexOf("!회상 ") === 0) {
        const style = "text-decoration:none; font-weight: normal; font-size: 100%; font-style: normal; color: #000000; background: #D1D1D1; text-align:left; display:block; line-height:1.3; padding:8px 25px 8px 60px; margin: -20px -20px -2px -20px; word-break:keep-all;";
        try {
            let chat_id = " ";
            sendChat(chat_id,'/desc '+"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
    
    if (msg.content.indexOf("!블루 ") === 0) {
        const style = "color:white; background: #3478F6; border-radius: 15px 15px 15px 0px; padding: 8px; display: inline-block; line-height:1.3; box-shadow: 1px 1px 1px 1px #97A9B9; text-align:left; text-decoration:none; margin: 0px 0px 3px 0px; word-break:keep-all;";
        try {
            let chat_id = "블루";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
    
    if (msg.content.indexOf("!필립 ") === 0) {
        const style = "color:#8a006a;";
        try {
            let chat_id = "필립 스미스";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
    
    if (msg.content.indexOf("!나레 ") === 0) {
        
        try {
            let chat_id = " ";
            sendChat(chat_id,msg.content.substring(3, msg.content.length),null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
    
    
if (msg.content.indexOf("!에바 ") === 0) {
        const style = "color:#001aff;";
        try {
            let chat_id = "에바 래티머";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
    
    if (msg.content.indexOf("!워든 ") === 0) {
        const style = "color:#85677e;";
        try {
            let chat_id = "워든 체이스";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
    

    if (msg.content.indexOf("!모니 ") === 0) {
        const style = "color:#34A0AE;";
        try {
            let chat_id = "모니카 수아레즈";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
    
    

    if (msg.content.indexOf("!앰버 ") === 0) {
        const style = "color:#ed4902;";
        try {
            let chat_id = "앰버 도쉬";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
    
    if (msg.content.indexOf("!제리 ") === 0) {
        const style = "color:#d18b00;";
        try {
            let chat_id = "제러미 최";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    }
	// /on.chat:message:api
}
});




/* (smallchat.js) 210306 코드 종료 */
