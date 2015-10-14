## sgtcloud-html5-sdk

### 介绍

A html5 out-of-box sdk for damn cool mbaas.

致力于发展为 mbass的, 开箱即用的, 超酷的 html5 软件开发工具.

了解更多, 请访问我们的主页 **[http://sgtcloud.cn](http://sgtcloud.cn)**

### 安装

* 直接下载最新版本的 release

* 解压该 release

* 在 $release/dist 目录中选择你需要的sdk

* 引入sdk到你的项目中

### 教程

将 sdk 引入到项目中 :

```javascript
<script src="sgtcloud-html5-sdk.2.0.0.js"></script>
```

首次使用需要初始化 **应用标识** 和 **网关** :

```javascript
SgtApi.init({
    appGateway: 'http://gw.sgtcloud.cn/gateway',
    appId: appId: 'html5_demo2015'
});
```

生成一个简单实体 :

```javascript
var user = new SgtApi.entity.User();
user.name = 'xxx';
user.password = 'xxx';
```

再调用一个简单业务, 每个业务的最后一个参数都是一个回调函数 :

```javascript
SgtApi.UserService.register(user, function(result, data) {
    if(result) {  //表示注册成功
        console.log(data);   //得到了注册用户信息
    }
});
```

当登录/注册成功后, 可以操作该用户去执行其他业务

### 文档

* [官网](http://sgtcloud.cn)
* [API]() 
* [用户指南](http://sgtcloud.gitbooks.io/sgtcloud-html5-sdk/content/) 
* [排行榜教程](http://sgtcloud.cn/tutorials/) 

### 业务模块

* 用户 - User - UserService
* 角色 - Player - PlayerService
* 角色扩展 - PlayerExtra - PlayerExtraService
* 成就 - Achievement - AchievementService
* 公告 - Announcement - AnnouncementService
* 活动 - Campaign - CampaignService
* 签到 - CheckinBoard - CheckinBoardService
* 任务 - Task -  TaskService
* 日常任务 - DailyTask - DailyTaskService
* 好友 - Friendship - FriendshipService
* 好友扩展 - FriendshipExtra - FriendshipExtraService
* 黑名单 - Blacklist - BlackListService
* 抽奖 - GachaBox - GachaBoxService
* 排行榜 - LeaderBoard - LeaderBoardService
* 邮件 - Mail - MailService
* 通知 - Notification - NotificationService
* 充值 - Purchase - PurchaseService
* 商城 - Store - StoreService
* 计费点 - ChargePoint - ChargePointService
* Boss - Boss - BossService
* 文件存储 - FileStorage - FileStorageService\
* 礼包 - GiftCode - GiftCodeService
* 个人通道 - PrivateChannel - PrivateChannelService
* 公共通道 - PublicChannel - PublicChannelService
* 第三方 - DelegateDid - DelegateDidService
* 结构化数据 - StructuredDate - StructuredDateService
* 反馈 - Ticket - TicketService

### 贡献

如果你有好的意见或建议，欢迎给我们提 issue 或 pull request，为提升 sgtcloud-html5-sdk 贡献力量

### License
    
The MIT License(http://opensource.org/licenses/MIT) 请自由地享受和参与开源

