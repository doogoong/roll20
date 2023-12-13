
/* 배포하신 K님의 사담 : */
/* 원본 : 양천일염님의 smallchat_split.js https://github.com/kibkibe/roll20-api-scripts/tree/master/smallchat_split */
/* 이 코드는 양천일염님의 코드를 기반으로 만들어졌습니다. 대부분 양천일염님이 작업하셨고 저는 출력형식에만 조금 손을 댔습니다.*/
/* 배포를 허가해 주셔서 감사해요! */

/* 두궁 사담 */
/* 재배포!! 하지 말아주세요!!!!!!!! 원본이 있는 코드니까!!!! */
/* 코드 설명 타래 https://twitter.com/DGcommu/status/1734903250447671354 */
/* (smallchat_twitter.js) 220913 코드 시작 */

on('ready', function() {
    if (!state.smallchatlog) state.smallchatlog = [];
    if (!state.smallchatonair) state.smallchatonair = [];
});


on("chat:message", function(msg)
{
    if (msg.type == "api"){
     if (msg.content.indexOf("!@ ") === 0) {
        try {
        // option
        // 트윗 내역을 저장할 핸드아웃의 이름을 지정합니다.
        var logname = '(트위터)';
        // 실시간 트윗을 표시할 별도의 핸드아웃의 이름을 지정합니다.
        var onair_name = '(실시간 탐라)';
        // 실시간 트윗용 핸드아웃에서 최신순으로 몇개까지 채팅을 표시할지를 지정합니다.
        var onair_lines = 8;
        // 핸드아웃에 표시하는 채팅시각의 표준시간대를 지정합니다. 기본값은 KST(UTC+9)입니다.
        var timezone = 9;
  
        var ho = findObjs({ _type: 'handout', name:logname});
        var player = getObj('player',msg.playerid);
        var c=player.get('color');
        var player_id = '';
        
        let ss_setting = {
    	// option: 채팅창의 글씨크기를 지정합니다.
    	font_size: 14,
    	// option: 채팅창의 글씨색을 지정합니다.
    	color: "rgb(255, 255, 255)",
    	// option: 채팅창의 상하좌우 여백을 설정합니다. (글자 크기와 줄 개수에 의존하기 때문에 정확하게 입력한대로 배치되지 않습니다. 의도하는 레이아웃에 맞춰 위치를 조금씩 조정하는데 사용하세요.)
    	margin: {top:40,right:30,bottom:20,left:30},
    	// option: 채팅로그에 플레이어/PC 중 어느쪽 이름을 표시할지 지정합니다. (true:플레이어/false:PC)
    	show_player_name: true,
    	// option: 핸드아웃에 저장되는 채팅로그에 플레이어의 고유색상을 적용할지의 여부를 설정합니다
    	// 0: 사용안함 / 1: 이름만 컬러 / 2: 채팅까지 컬러
    	use_personal_color: 1,
        }

        let ava_img= "";
        var split;
        
        
         if(player.get('_displayname')=="두궁"){ //수정해주세요!!!!!!!!!!!!!!롤방GM의닉네임
            player='폭풍을부르는 말랑곰발바닥 대작전'; //수정해주세요! 롤방GM이 해당 사담창에서 사용할 닉네임
            player_id='DGcommu'; //수정해주세요! 롤방GM이 해당 사담창에서 사용할 아이디
            ava_img="https://i.imgur.com/xy0353q.png"; //수정해주세요! 롤방 GM이 해당 사담창에서 이용할 프사
        } 
         else {
            player='예시용 플레이어 닉'
            player_id='FULL0F_F00D'
            ava_img="https://i.imgur.com/IvKsH58.png";
        } 
        

        if (ho.length > 0) {
            ho = ho[0];
        } else {
            ho = createObj('handout', {
                notes: ' ',
                inplayerjournals: 'all',
                name: logname
            });
        }
        

       let content_str = msg.content.substring(2); 

       
        
var res_img = content_str.match(/\[.+\]\(http.+\)/g);
let img_str = "";
if (res_img) {
for (var i=0;i<res_img.length;i++) {
 content_str = content_str.replace(res_img[i],"");
 img_str += "<div style ='border-radius:15px;overflow:hidden;text-align:center;border:1px solid #C4CFD6;margin-top:10px;margin-left:60px;margin-right:10px;'><img src ='" 
 + res_img[i].replace(/\[.+\]\(/g,"").replace(")","") + "'></div>";
}
}
        var d = new Date();
        var tz = d.getTime() + (d.getTimezoneOffset() * 60000) + (timezone * 3600000);
        d.setTime(tz);
        
        
        var final_notes = "<span style='color:#aaaaaa;font-size:7pt;'>"
					+ d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
					+ "</span>" + "<br>"
					+ (ss_setting.use_personal_color!=0?("<span style='color:"+c+";'>"):"") + "<b>"
					+ player + "</b>" + (ss_setting.use_personal_color===1?"</span>":"") + ": "
					+ (ss_setting.use_personal_color===2?"</span>":"") +content_str;
					
					
        
        var final_str = "<div width=70 style='border-radius:70%;overflow:hidden;valign:top;float:left;margin-right:10px'>"
                +"<img src='"+ava_img+"' width=50 height=50>" + "</div>"
                +"<div style='valign:top;'>"
                +"<span style='font-size:11pt'><b>"
                + player + "</b>" + "</span>"
                + "<span style='color:#848484;font-size:10pt;'>" + " @"+player_id+" · "
                + d.getFullYear() + "년 " + (d.getMonth()+1) + "월 " + d.getDate() + "일 " + "</span>" 
                + "<div style='float:right;valign:top;'><img src='https://i.imgur.com/MONxPND.png'></div>" + "<br><div><span style='font-size:11pt;'>"
                + content_str
                +"</span><br><div style='clear:both;'>"
                + img_str
                +"<div style='margin-left:50px;float:left;width: 21%;'><img src='https://i.imgur.com/3n6ZKwZ.png'></div>"
                +"<div style='float:left; width: 21%;'><img src='https://i.imgur.com/Wt5bQ5S.png'></div>"
                +"<div style='float:left; width: 21%;'><img src='https://i.imgur.com/6mnK0lU.png'></div>"
                +"<div style='float:left;width: 21%;'><img src='https://i.imgur.com/WuZtI1V.png'></div>"
                +"</div>"+"<div style='border-bottom:1px solid #ebeef0;clear:both;'></div>";

            var oa = findObjs({ _type: 'handout', name:onair_name});
            if (oa.length > 0) {
                oa = oa[0];
            } else {
                oa = createObj('handout', {
                    notes: ' ',
                    inplayerjournals: 'all',
                    name: onair_name
                });
            }
            oa.get('notes',function(text) {
                var final_split = (text.length > 0 && text != 'null' ? text.split("<br><i></i>") : []);
                final_split.push(final_str);
                if (final_split.length > onair_lines) {
                    final_split.splice(0,1);
                }
                state.smallchatonair.push(final_split.join("<br><i></i>"));
                if (state.smallchatonair.length > 0) {
                    oa.set({notes: state.smallchatonair[0]});
                    state.smallchatonair.splice(0,1);
                }
            });
        
        ho.get('notes',function(text) {
            state.smallchatlog.push((text.length > 0 && text != 'null' ? text : "") + "<br><i></i>" + final_notes);
            if (state.smallchatlog.length > 0) {
                ho.set({notes: state.smallchatlog[0]});
                state.smallchatlog.splice(0,1);
            }
        });
	} catch (error) {
        sendChat('error','/w GM '+error,null,{noarchive:true});
	}
    }
}
});
const findCharacterWithName = function(who) {
    let chat_cha = findObjs({ _type: 'character', name: who});
    return (chat_cha.length > 0) ? chat_cha[0] : null;
};
/* (smallchat_twitter.js) 220913 코드 종료 */
