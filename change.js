

on("chat:message", function(msg)
{
  
if (msg.type == "api"){
	// on.chat:message:api
	    let target_cha=null;

  //!KPC의 KPC 부분은 변경 가능합니다. (EX: !에단, !페리)
  
    if (msg.content.indexOf("!KPC ") === 0) { 
       let gm = findObjs({ name: "KPC", type: 'character'}); //이름에 띄어쓰기가 있을 경우 띄어쓰기까지 정확히 입력합니다.
	   target_cha = target_cha = gm[0];
	   sendChat("character|"+target_cha.get('_id'),msg.content.replace('!KPC ','')+state.api_tag);
				
    }
    
    if (msg.content.indexOf("!PC ") === 0) {
       let gm = findObjs({ name: "PC", type: 'character'}); //이름에 띄어쓰기가 있을 경우 띄어쓰기까지 정확히 입력합니다.
	   target_cha = target_cha = gm[0];
	   sendChat("character|"+target_cha.get('_id'),msg.content.replace('!PC ','')+state.api_tag);
				
    }
    
}
});

/* 코드 종료 */
