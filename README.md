# sgtcloud-html5-sdk

## 介绍

A html5 out-of-box sdk for damn cool mbaas

致力于发展为 mbass的, 开箱即用的, 超酷的 html5 软件开发工具 

了解更多, 请访问我们的主页 **[sgtcloud](http://www.sgtcloud.cn)**

## 安装

* 直接下载最新版本的 release

* 解压该 release

* 在 $release/dist 目录中选择你需要的sdk

* 引入sdk到你的项目中

## 教程

将 sdk 引入到项目中 :

```
<script src="sgtcloud-html5-sdk.2.0.0.js"></script>
```

首次使用需要初始化 **应用标识** 和 **网关** :

```
SgtApi.init({
    appGateway: 'http://gw.sgtcloud.cn/gateway',
    appId: appId: 'html5_demo2015'
});
```

生成一个简单实体 :

```
var user = new SgtApi.entity.User();
user.name = 'xxx';
user.password = 'xxx';
```

再调用一个简单业务, 每个业务的最后一个参数都是一个回调函数 :

```
SgtApi.UserService.register(user, function(result, data) {
    if(result) {  //表示注册成功
        console.log(data);   //得到了注册用户信息
    }
});
```

当登录/注册成功后, 可以操作该用户去执行其他业务

## 文档

* [官网](http://www.sgtcloud.cn)
* [API]() 
* [用户指南](http://sgtcloud.gitbooks.io/sgtcloud-html5-sdk/content/) 
* [排行榜教程](http://www.sgtcloud.cn/tutorials/) 

## 业务模块

* 用户 - UserService
* 角色 - PlayerService
* 角色扩展 - PlayerExtraService
* 成就 - AchievementService
* 公告 - AnnouncementService
* 活动 - CampaignService
* 签到 - CheckinBoardService
* 任务 - TaskService
* 日常任务 - DailyTaskService
* 好友 - FriendshipService
* 好友扩展 - FriendshipExtraService
* 黑名单 - BlackListService
* 抽奖 - GachaBoxService
* 排行榜 - LeaderBoardService
* 邮件 - MailService
* 通知 - NotificationService
* 充值 - PurchaseService
* 商城 - StoreService
* 计费点 - ChargePointService
* Boss - BossService
* 文件存储 - FileStorageService\
* 礼包 - GiftCodeService
* 个人通道 - PrivateChannelService
* 公共通道 - PublicChannelService
* 第三方 - DelegateDid
* 结构化数据 - StructuredDateService
* 反馈 - TicketService