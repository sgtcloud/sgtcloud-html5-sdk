## sgtcloud-html5-sdk

### 介绍
[![Build Status](https://travis-ci.org/sgtcloud/sgtcloud-html5-sdk.svg?branch=2.0.0)](https://travis-ci.org/sgtcloud/sgtcloud-html5-sdk.svg?branch=2.0.0)

A html5 out-of-box sdk for damn cool mbaas.

了解更多, 请访问我们的主页 **[http://www.sgtcloud.cn](http://www.sgtcloud.cn)**

### 安装

* 直接下载最新版本的 release

* 解压该 release

* 在 $release/dist 目录中选择你需要的sdk

* 引入sdk到你的项目中

### 入门

将 sdk 引入到项目中 :

```javascript
<script src="sgtcloud-html5-sdk.2.1.0.min.js"></script>
```

或则使用CDN的方式 :
```javascript
<script src="http://www.sgtcloud.cn/dist/sgtcloud-html5-sdk.2.1.0.min.js"></script>
```

点击 **[申请应用标识](http://wj.qq.com/survey.html?type=survey&id=136756&hash=233f)**  
首次使用需要初始化**应用标识** :

```javascript
SgtApi.init({
    appId: 'xxx'	//填写应用标识
});
```

生成一个简单实体 :

```javascript
var user = new sgt.User();
user.userName = 'xxx';
user.password = 'xxx';
```

再调用一个简单业务, 每个业务的最后一个参数都是一个回调函数 :


```javascript
sgt.UserService.quickLogin(function(result, data) {
	if (result) {
		// .....
		// 快速登录成功代码块
	} else {
		// .....
		// 快速登录失败代码块
	}
});
```

当登录/注册成功后, 解锁其他服务，这时可以操作该用户去执行其他服务

### 文档

- <a href="http://www.sgtcloud.cn" target="_blank">官网</a>
- <a href="http://www.sgtcloud.cn/api" target="_blank">API</a> 
- <a href="https://www.gitbook.com/book/sgtcloud/sgtcloud-html5-sdk/details" target="_blank">用户指南</a>
- <a href="http://www.sgtcloud.cn/tutorials" target="_blank">排行榜教程</a>
- <a href="http://www.sgtcloud.cn/tutorials/tutorial-wx" target="_blank">微信中控教程</a>
- <a href="http://www.sgtcloud.cn/tutorials/demo-lobby-room" target="_blank">聊天室Demo</a>
- <a href="http://www.sgtcloud.cn/tutorials/console" target="_blank">开发者后台使用教程</a>
	+ <a href="http://www.sgtcloud.cn/tutorials/console/doc/公告，公共消息和私有消息应该怎么使用？.html" target="_blank">公告，公共消息和私有消息应该怎么使用？</a>
	+ <a href="http://www.sgtcloud.cn/tutorials/console/doc/如何利用签到版实现周签到和月份签到？.html" target="_blank">如何利用签到版实现周签到和月份签到？</a>
	+ <a href="http://www.sgtcloud.cn/tutorials/console/doc/如何利用sgt开发充值功能？.html" target="_blank">如何利用sgt开发充值功能？</a>
	+ <a href="http://www.sgtcloud.cn/tutorials/console/doc/如何实现（类似dota传奇的）月卡功能？.html" target="_blank">如何实现（类似dota传奇的）月卡功能？</a>
	+ <a href="http://www.sgtcloud.cn/tutorials/console/doc/如何实现根据vip等级设定角色的好友上限？.html" target="_blank">如何实现根据vip等级设定角色的好友上限？</a>
	+ <a href="http://www.sgtcloud.cn/tutorials/console/doc/游戏开发最佳实践.html" target="_blank">游戏开发最佳实践</a>
	+ <a href="http://www.sgtcloud.cn/tutorials/console/doc/SGTCloud后台操作手册.doc">SGTCloud后台操作手册(Word版)</a>
	
	
### 技术架构

sdk 采用了 [jsonrpc2.0](http://www.jsonrpc.org/) 的通讯协议

![](http://blog.espol.edu.ec/taws/files/2009/01/jrj2.jpg)

### 业务模块

* 用户  
User - UserService

* 角色  
Player - PlayerService

* 角色扩展  
PlayerExtra - PlayerExtraService

* 成就  
Achievement - AchievementService

* 公告  
Announcement - AnnouncementService

* 活动  
Campaign - CampaignService

* 签到  
CheckinBoard - CheckinBoardService
 
* 任务  
Task -  TaskService

* 日常任务  
DailyTask - DailyTaskService

* 好友  
Friendship - FriendshipService

* 好友扩展  
FriendshipExtra - FriendshipExtraService

* 黑名单  
Blacklist - BlackListService

* 抽奖  
GachaBox - GachaBoxService

* 排行榜  
LeaderBoard - LeaderBoardService

* 邮件  
Mail - MailService

* 通知  
Notification - NotificationService

* 充值  
Purchase - PurchaseService

* 商城  
Store - StoreService

* 计费点  
ChargePoint - ChargePointService

* Boss  
Boss - BossService

* 文件存储  
FileStorage - FileStorageService

* 礼包  
GiftCode - GiftCodeService

* 个人通道  
PrivateChannel - PrivateChannelService

* 公共通道  
PublicChannel - PublicChannelService

* 第三方  
DelegateDid - DelegateDidService

* 结构化数据  
StructuredDate - StructuredDateService

* 反馈  
Ticket - TicketService

* 微信中控  
WxCentralService

* 用户留资  
UserLeaveInfo - UserLeaveInfoService

* 随机角色名  
RandomNameGroupService

* Socketio服务
SocketService


### 贡献

如果你有好的意见或建议，欢迎给我们提 issue 或 pull request，为提升 sgtcloud-html5-sdk 贡献力量

### License
    
The MIT License(http://opensource.org/licenses/MIT) 请自由地享受和参与开源

