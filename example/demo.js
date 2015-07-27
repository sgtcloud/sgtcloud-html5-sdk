/**
 * Created by Administrator on 2015/6/4.
 */

/**
 *设置SGT SDK 配置文件
 */
var configret=false;
function setconfig(){
    var appid=document.getElementById("appid").value;
    var channelId=document.getElementById("channelId").value;
    SgtApi.init({
        "AppId":appid,//设置应用标识
        "ChannelId":channelId,//设置渠道标识
        //"CheckInBoardId":"checkin"//设置签到板ID
    });
    if(SgtApi.config.AppId!==""){
        configret=true;
    }
    if(configret){
        document.getElementById('infos').innerHTML+="<br>sdk配置成功";
    }else{
        document.getElementById('error').innerHTML+="<br>sdk配置失败";
    }
}
//注册
var userdata=null;
function register(){
    var playname=document.getElementById('regname').value;
    var playpassword=document.getElementById('regpassword').value;
    if(!configret){
        alert("请先配置");
        return;
    }
    if(!playname||playname==""||!playpassword||playpassword==""){
        alert("请输入账号和密码");
        return;
    }
    ////快速注册
    //SgtApi.AccountService.quickLogin(function (ret,data) {
    //    if(ret){
    //        //成功
    //        userdata=data;
    //        document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
    //    }else{
    //        //失败
    //        document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
    //    }
    //});

    //正常注册

    var newuser=new SgtApi.User();//初始化一个user对象
    newuser.userName=playname;
    newuser.password=playpassword;
    SgtApi.AccountService.register(newuser,function(ret,data){
        if(ret){
            //成功
            userdata=data;
            document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
        }else{
            //失败
            document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
        }
    });
}

function quicklogin(){
    if(!configret){
        alert("请先配置");
        return;
    }
    SgtApi.AccountService.quickLogin(function(ret,data){
        if(ret){
            //成功
            userdata=data;
            document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
        }else{
            //失败
            document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
        }
    });
}

//登陆
function login(){
    var playname=document.getElementById('regname').value;
    var playpassword=document.getElementById('regpassword').value;
    if(!configret){
        alert("请先配置");
        return;
    }
    if(!playname||playname==""||!playpassword||playpassword==""){
        alert("请输入账号和密码");
        return;
    }
    SgtApi.config["UserName"] = playname;//设置用户名
    SgtApi.config["UserPassword"] = playpassword;//设置用户密码
    SgtApi.AccountService.login(function (ret,data) {
        if(ret){
            //成功
            userdata=data;
            document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
        }else{
            //失败
            document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
        }
    });
}
//创建角色
var playerData=null;
function createplayer(){
    var playname=document.getElementById('playname').value;
    var playlevel=parseInt(document.getElementById('playlevel').value);
    var playgender=parseInt(document.getElementById('playgender').value);
    var playmoney=parseInt(document.getElementById('playmoney').value);
    if(playname==""){
        alert("请填写角色名！");
        return;
    }
    if(isNaN(playlevel)||isNaN(playgender)||isNaN(playmoney)){
        alert("等级、性别、初始金币请输入数字！");
        return;
    }
    //使用接口前 要初始化接口
    if(SgtApi.PlayerService.init()){
        //角色对象
        var players=new SgtApi.Player();
        players.name=playname;
        players.customId="player0";
        players.equip="";
        players.level=playlevel;
        players.gender=playgender;
        players.money=playmoney;

        SgtApi.PlayerService.create(players,function(ret,data){
            if(ret){
                //成功
                playerData=data;
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        })
    }else{
        alert("初始化角色接口失败");
    }

}
//获取角色信息
function getplayer(){
    if(SgtApi.PlayerService.init()){
        SgtApi.PlayerService.getByUserId(SgtApi.AccountService.userData.userid,function (ret,data) {
            if(ret){
                //成功
                if(data){
                    playerData=data[0];
                    document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
                }else{
                    document.getElementById('error').innerHTML+="<br>没有创建角色";
                }
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        })
    }else{
        alert("初始化角色接口失败");
    }
}

function sendFeedback(){
    //初始化签到接口
    if(SgtApi.TicketService.init(playerData.id)){
        var ticket = new SgtApi.Ticket();
        ticket.title = document.getElementById('feedbackTitle').value;
        ticket.content = document.getElementById('feedbackContent').value;
        SgtApi.TicketService.sendTicket(ticket,function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化签到接口失败");
    }
}

function listFeedback(){
    //初始化签到接口
    if(SgtApi.TicketService.init(playerData.id)){
        SgtApi.TicketService.getTicketsById(0,10,1,function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化签到接口失败");
    }
}


//签到
function checkin(){
    //初始化签到接口
    if(SgtApi.CheckinService.init(playerData.id)){
        SgtApi.CheckinService.getAvailableChekinboards(function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化签到接口失败");
    }
}
//日常任务
function listDailyTasks(){
    //初始化接口
    if(SgtApi.DailyTaskService.init(playerData.id)){
        SgtApi.DailyTaskService.getDailyTasks(function (ret,data) {
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化日常任务接口失败");
    }
}

//邮件接口
function getMails(){
    //初始化接口
    if(SgtApi.MailService.init(playerData)){
        SgtApi.MailService.receive(0,10,0,function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化邮件接口失败");
    }
}

//商城接口
function shops(){
    //初始化接口
    if(SgtApi.StoreService.init(playerData.id)){
        SgtApi.StoreService.getDefaultStore(function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化商城接口失败");
    }
}

//公共通道业务接口
////创建消息通道
//function creatmsgbox(){
//    //初始化接口
//    if(SgtApi.PublicChannelService.init()){
//        SgtApi.PublicChannelService.createChannel("msg01","msg01",function(ret,data){
//            if(ret){
//                //成功
//                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
//            }else{
//                //失败
//                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
//            }
//        });
//    }else{
//        alert("初始化公共通道业务接口失败");
//    }
//}


//发送消息
function sendmsg(){
    var playmsgid=document.getElementById('playmsgid').value;
    var playmsgtype=document.getElementById('playmsgtype').value;
    var playmsgtxt=document.getElementById('playmsgtxt').value;
    if(playmsgid==""||playmsgtype==""||playmsgtxt==""){
        alert("请把信息填写完整！");
        return;
    }
    //初始化接口
    if(SgtApi.PublicChannelService.init()){
        SgtApi.PublicChannelService.pushMessage(playmsgid,playmsgtype,playmsgtxt,function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化公共通道业务接口失败");
    }
};

//接收消息
function getmsg(){
    var rplaymsgid=document.getElementById('rplaymsgid').value;
    if(rplaymsgid==""){
        alert("请填写key！");
        return;
    }
    //初始化接口
    if(SgtApi.PublicChannelService.init()){
        SgtApi.PublicChannelService.popAllMessage(rplaymsgid,function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化公共通道业务接口失败");
    }
};

//结构化数据业务接口
//添加或保存StringValue
function setdataValue(){
    var playdatakey=document.getElementById('playdatakey').value;
    var playdatavalue=document.getElementById('playdatavalue').value;
    if(playdatakey==""||playdatavalue==""){
        alert("请填写key和value！");
        return;
    }
    //初始化接口
    if(SgtApi.StructuredDataService.init()){
        SgtApi.StructuredDataService.saveOrUpdateValue(playdatakey,playdatavalue,function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化结构化数据业务接口失败");
    }
}

//获取普通的StringValue
function getvalue(){
    var rplaydatakey=document.getElementById('rplaydatakey').value;
    if(rplaydatakey==""){
        alert("请填写key！");
        return;
    }
    //初始化接口
    if(SgtApi.StructuredDataService.init()){
        SgtApi.StructuredDataService.getValue(rplaydatakey,function(ret,data){
            if(ret){
                //成功
                document.getElementById('infos').innerHTML+="<br>"+JSON.stringify(data);
            }else{
                //失败
                document.getElementById('error').innerHTML+="<br>"+JSON.stringify(data);
            }
        });
    }else{
        alert("初始化结构化数据业务接口失败");
    }
}












