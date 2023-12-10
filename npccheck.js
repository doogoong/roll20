/* https://github.com/kibkibe/roll20-api-scripts/tree/master/smallchat */
/* (smallchat.js) 210306 코드 시작 */
/* 양천일염님 배포 코드를 따로 수정한 버전입니다. */
/* 재배포!! 하지 말아주세요!!!!!!!! 원본이 있는 코드니까!!!! */
/* 코드 설명 타래 https://twitter.com/DGcommu/status/1733722690148851943 */



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
    } //회상 코드. 타래로 서술합니다. 
    
    if (msg.content.indexOf("!블루 ") === 0) {
        const style = "color:white; background: #3478F6; border-radius: 15px 15px 15px 0px; padding: 8px; display: inline-block; line-height:1.3; box-shadow: 1px 1px 1px 1px #97A9B9; text-align:left; text-decoration:none; margin: 0px 0px 3px 0px; word-break:keep-all;";
        try {
            let chat_id = "블루";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    } //말풍선이 붙는 코드
    
    if (msg.content.indexOf("!예시 ") === 0) {
        const style = "color:#8a006a;";
        try {
            let chat_id = "예시";
            sendChat(chat_id,"<span style='" + style + "'>"+msg.content.substring(3, msg.content.length)+"</span>",null,{noarchive:false});
        } catch (err) {
			sendChat('error','/w GM '+err,null,{noarchive:true});
        }
    } //단순히 NPC 대사 색을 바꾸는 코드입니다. NPC 대사색 복붙은 이걸로.
    
	// /on.chat:message:api
}
});




/* (smallchat.js) 210306 코드 종료 */
