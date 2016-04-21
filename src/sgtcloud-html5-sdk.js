/**
 * @description sgt html5 api
 * @index
 * @auth SGTCloudTeam
 */
(function () {
    /**
     * @namespace
     * @alias SgtApi
     */
    var SgtApi = {};
    /**
     * User 对象
     * @class User
     * @constructor
     */
    SgtApi.User = function () {
        /**
         * 昵称
         * @property nickName
         * @type {string}
         * @default null
         */
        this.nickName = null;
        /**
         * 密码
         * @property password
         * @type {string}
         * @default null
         */
        this.password = null;
        /**
         * 用户ID
         * @property userid
         * @type {string}
         * @default null
         */
        this.userid = null;
        /**
         * 用户名
         * @property userName
         * @type {string}
         * @default null
         */
        this.userName = null;
        /**
         * 邮件
         * @property email
         * @type {string}
         * @defaunilt null
         */
        this.email = null;
        /**
         * 创建时间
         * @property createTime
         * @type {long}
         * @default null
         */
        this.createTime = null;
        /**
         * 手机ICCID
         * @property iccid
         * @type {string}
         * @default null
         */
        this.iccid = null;
        /**
         * 手机IMEI号
         * @property imei
         * @type {string}
         * @default null
         */
        this.imei = null;
        /**
         * 最后登陆时间
         * @property lastLoginTime
         * @type {long}
         * @default null
         */
        this.lastLoginTime = null;
        /**
         * 手机mac地址
         * @property mac
         * @type {string}
         * @default null
         */
        this.mac = null;
        /**
         * 电话号码
         * @property phoneNumber
         * @type {string}
         * @default null
         */
        this.phoneNumber = null;
        /**
         * 注册类型
         * @property registryType
         * @type {int}
         * @default null
         */
        this.registryType = null;
        /**
         * 最后更新时间
         * @property updateTime
         * @type {long}
         * @default null
         */
        this.updateTime = null;

    };


    /**
     * 系统自动匹配注册（根据IMEI，ICCID，mac）
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.User
     */
    SgtApi.User.AUTO = 2;

    /**
     * 注册类型，普通注册，使用用户名和密码注册
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.User
     */
    SgtApi.User.MANUAL = 0;

    /**
     * 使用手机号码注册
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.User
     */
    SgtApi.User.PHONENUMBER = 1;

    /**
     * 通过微信公众平台注册
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.User
     */
    SgtApi.User.WECHAT_MP = 4;
    /**
     * 玩家角色接口
     *
     * @class Player
     * @constructor
     */
    SgtApi.Player = function () {
        /**
         * 自定义ID
         * @property customId
         * @type {String}
         * @default null
         */
        this.customId = null;
        /**
         * 装备
         * @property equip
         * @type {String}
         * @default null
         */
        this.equip = null;
        /**
         * 主键id
         * @property id
         * @type {String}
         * @default 0
         */
        this.id = null;
        /**
         * 最后登录时间
         * @property lastLoginTime
         * @type {Long}
         * @default null
         */
        this.lastLoginTime = null;
        /**
         * 等级
         * @property level
         * @type {int}
         * @default 1
         */
        this.level = null;
        /**
         * 名字
         * @property name
         * @type {String}
         * @default null
         */
        this.name = null;
        /**
         * 服务器
         * @property serverId
         * @type {String}
         * @default null
         */
        this.serverId = null;
        /**
         * 类型
         * @property type
         * @type {String}
         * @default null
         */
        this.type = null;
        /**
         * 用户ID
         * @property userId
         * @type {String}
         * @default null
         */
        this.userId = null;
        /**
         * VIP 等级
         * @property vip
         * @type {int}
         * @default 0
         */
        this.vip = null;
        /**
         * 好友最大上限数
         * @property friendsMaxNumber
         * @type {number}
         * @default 0
         */
        this.friendsMaxNumber = null;
        /**
         * 性别 [1 男 0 女]
         * @property gender
         * @type {number}
         * @default 0
         */
        this.gender = null;
        /**
         * 金钱
         * @property money
         * @type {number}
         * @default 0
         */
        this.money = null;

        /**
         * 头像地址
         * @type {string}
         */
        this.avatarUrl = null;
    };
    /**
     * 存档实例
     *
     * @class save
     * @constructor
     */
    SgtApi.Save = function () {
        /**
         * 存档内容
         * @property content
         * @type {String}
         * @default null
         */
        this.content = null;
        /**
         * 是否可下载存档标识
         * @property downFlag
         * @type {int}
         * @default null
         */
        this.downFlag = null;
        /**
         * 主键
         * @property id
         * @type {int}
         * @default null
         */
        this.id = null;
        /**
         * 最后上传时间
         * @property lastUploadTime
         * @type {long}
         * @default null
         */
        this.lastUploadTime = null;
        /**
         * 角色ID
         * @property playerId
         * @type {string}
         * @default null
         */
        this.playerId = null;

    };

    /**
     * 允许下载
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Save
     */
    SgtApi.Save.ALLOW_DOWN = 1;

    /**
     * 不允许下载
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Save
     */
    SgtApi.Save.DENY_DOWN = 0;
    /**
     * mail 对象
     * @class mail
     * @constructor
     */
    SgtApi.Mail = function () {
        /**
         * 附件
         * @property attachment
         * @type {string}
         * @default null
         */
        this.attachment = null;
        /**
         * 附件状态 0为未领取，1为领取，默认为0
         * @type {number}
         */
        this.attachStatus = null;
        /**
         * 内容
         * @property content
         * @type {string}
         * @default null
         */
        this.content = null;
        /**
         * 发送者ID
         * @property fromId
         * @type {string}
         * @default null
         */
        this.fromId = null;
        /**
         * 发送者名称
         * @property fromName
         * @type {string}
         * @default null
         */
        this.fromName = null;

        /**
         * 主键
         * @property id
         * @type {string}
         * @default null
         */
        this.id = null;

        /**
         * 发送时间
         * @property sendTime
         * @type {string}
         * @default null
         */
        this.sendTime = (new Date()).getTime();

        /**
         * 状态
         * @property status
         * @type {string}
         * @default null
         */
        this.status = null;

        /**
         * 标题
         * @property title
         * @type {string}
         * @default null
         */
        this.title = null;

        /**
         * 接收者ID
         * @property toId
         * @type {string}
         * @default null
         */
        this.toId = null;

        /**
         * 接收者名称
         * @property toName
         * @type {string}
         * @default null
         */
        this.toName = null;

        /**
         * 类型
         * @property type
         * @type {string}
         * @default null
         */
        this.type = null;


    };
    /**
     * 删除状态 已经删除 -1
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.DELETED = -1;

    /**
     * 已读状态 值为1
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.READ = 1;

    /**
     * 附件未领取
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.STATUS_ATTACH_NO_PICK = 0;

    /**
     * 附件已经领取
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.STATUS_ATTACH_PICKED = 1;

    /**
     * 邮件类型：好友邀请邮件 值为3
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.TYPE_INVITATE_FRIENDSHIP = 3;

    /**
     * 邮件类型：普通邮件 值为 0
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.TYPE_NORMAL = 0;

    /**
     * 邮件类型：系统通知邮件 值为1
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.TYPE_SYSTEM = 1;

    /**
     * 邮件类型：系统奖励邮件 值为2
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.TYPE_SYSTEM_REWARD = 2;

    /**
     * 未读状态 值为0
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Mail
     */
    SgtApi.Mail.UNREAD = 0;

    /**
     * Ticket 对象
     * @class Ticket
     * @constructor
     */
    SgtApi.Ticket = function () {
        /**
         * 反馈给后台的内容
         * @property content
         * @type {string}
         * @default null
         */
        this.content = null;

        /**
         * 提交时间
         * @property createTime
         * @type {long}
         * @default null
         */
        this.createTime = (new Date()).getTime();

        /**
         * 处理完返回给提交者的信息
         * @property feedbackInfo
         * @type {string}
         * @default null
         */
        this.feedbackInfo = null;

        /**
         * 主键
         * @property id
         * @type {int}
         * @default null
         */
        this.id = null;

        /**
         * 提交者ID
         * @property senderPlayerId
         * @type {string}
         * @default null
         */
        this.senderPlayerId = null;

        /**
         * 状态
         * @property status
         * @type {int}
         * @default null
         */
        this.status = null;

        /**
         * 目标角色ID
         * @property targetPlayerId
         * @type {string}
         * @default null
         */
        this.targetPlayerId = null;

        /**
         * 标题
         * @property title
         * @type {string}
         * @default null
         */
        this.title = null;

        /**
         * 类型
         * @property type
         * @type {int}
         * @default null
         */
        this.type = null;


    };

    /**
     * 待处理
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Ticket
     */
    SgtApi.Ticket.STATUS_OF_PENDING = 1;

    /**
     * 已处理
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Ticket
     */
    SgtApi.Ticket.STATUS_OF_PROCESSED = 2;

    /**
     * 一般类型
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Ticket
     */
    SgtApi.Ticket.TYPE_OF_NORMAL = 1;

    /**
     * 成就
     * @constructor
     */
    SgtApi.Achievement = function () {
        /**
         * 当前进度
         * @type {number}
         */
        this.currentProgress = null;

        /**
         * 自定义条件，客户端使用
         * @type {null}
         */
        this.customCondition = null;

        /**
         * 成就描述
         * @type {null}
         */
        this.description = null;

        /**
         * 完成成就的进度数
         * @type {number}
         */
        this.goal = null;

        /**
         * 主键id
         * @type {number}
         */
        this.id = null;

        /**
         * 开启成就的等级
         * @type {number}
         */
        this.level = null;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 是否允许当前进度超越最大进度，默认不允许
         * @type {boolean}
         */
        this.overMaxProgress = false;

        /**
         * 前置成就ID
         * @type {null}
         */
        this.preAchievementId = null;

        /**
         * 奖励
         * @type {null}
         */
        this.reward = null;

        /**
         * 是否允许成就完成后仍然显示在列表,默认显示，0为不显示，1为显示
         * @type {number}
         */
        this.showDone = null;

        /**
         * 状态（禁用0，启用1）
         * @type {number}
         */
        this.status = null;

        /**
         * 成就类型
         * @type {null}
         */
        this.type = null;

        /**
         * 是否在前置成就没完成之前同时更新后置任务，默认不允许
         * @type {boolean}
         */
        this.updateUnfinished = false;

        /**
         * 成就的可见性 [0 不可见，1 可见]
         * @type {number}
         */
        this.visibility = 0;


    };


    /**
     * 已达成
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Achievement
     */
    SgtApi.Achievement.PROGRESS_DONE = 2;

    /**
     * 已经领取奖励
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Achievement
     */
    SgtApi.Achievement.PROGRESS_GOT_REWARD = 3;

    /**
     * 未达成
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Achievement
     */
    SgtApi.Achievement.PROGRESS_NOT_ACHIEVED = 1;

    /**
     * 不可用
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Achievement
     */
    SgtApi.Achievement.STATUS_DISABLE = 0;

    /**
     * 可用，开启状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Achievement
     */
    SgtApi.Achievement.STATUS_ENABLE = 1;

    /**
     * 成就不可见
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Achievement
     */
    SgtApi.Achievement.VISIBILITY_INVISIBLE = 0;

    /**
     * 成就可见
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Achievement
     */
    SgtApi.Achievement.VISIBILITY_VISIBLE = 1;
    /**
     * 公告
     * @constructor
     */
    SgtApi.Announcement = function () {
        /**
         * 公告内容
         * @type {null}
         */
        this.content = null;

        /**
         * 结束时间
         * @type {number}
         */
        this.endTime = null;

        /**
         * 开始时间
         * @type {number}
         */
        this.startTime = null;

        /**
         * 状态 1 启用 0 禁用 默认索引，不能为空
         * @type {number}
         */
        this.state = null;

        /**
         * 公告标题
         * @type {null}
         */
        this.title = null;

        /**
         * 公告类型 默认索引，不能为空
         * @type {number}
         */
        this.type = null;

        /**
         * 主键,UUID类型，由应用自动生成
         * @type {null}
         */
        this.uuid = null;

        /**
         * 公告版本 默认索引，不能为空
         * @type {number}
         */
        this.version = null;


    };

    /**
     * 公告类型 活动公告（1）
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Announcement
     */
    SgtApi.Announcement.ACTIVITY = 1;

    /**
     * 公告类型 商城公告（2）
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Announcement
     */
    SgtApi.Announcement.BULLETIN = 2;

    /**
     * 公告类型 维护公告（3）
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Announcement
     */
    SgtApi.Announcement.MAINTAIN = 3;

    /**
     * 公告服务器类型 全服
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Announcement
     */
    SgtApi.Announcement.ALLSERVER = 1;
    /**
     * 公告服务器类型 当前服务器
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Announcement
     */
    SgtApi.Announcement.SINGLESERVER = 2;
    /**
     * 黑名单
     * @constructor
     */
    SgtApi.Blacklist = function () {

        /**
         * 自定义黑名单ID
         * @type {null}
         */
        this.blacklistId = null;

        /**
         * 渠道ID
         * @type {null}
         */
        this.channelId = null;

        /**
         * 描述
         * @type {null}
         */
        this.description = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 类型
         * @type {number}
         */
        this.type = null;


    };
    /**
     * 正常
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Blacklist
     */
    SgtApi.Blacklist.TYPE_OF_NORMAL = 1;

    /**
     * 路由黑名单
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Blacklist
     */
    SgtApi.Blacklist.TYPE_OF_ROUTE = 2;

    /**
     * BOSS
     * @constructor
     */
    SgtApi.Boss = function () {

        /**
         * 血量
         * @type {number}
         */
        this.hp = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 强度
         * @type {null}
         */
        this.intensity = null;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 奖励
         * @type {null}
         */
        this.rewards = null;

        /**
         * 类型
         * @type {number}
         */
        this.type = null;


    };
    /**
     * 私有boss，只能自己打
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Boss
     */
    SgtApi.Boss.PRIVATE = 0;

    /**
     * 公共 、世界boss
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Boss
     */
    SgtApi.Boss.PUBLIC = 0;

    /**
     * 活动
     * @constructor
     */
    SgtApi.Campaign = function () {

        /**
         * 关联的boss
         * @type {null}
         */
        this.bossIds = null;

        /**
         * 活动简介
         * @type {null}
         */
        this.brief = null;

        /**
         * 结束时间
         * @type {number}
         */
        this.endTime = null;

        /**
         * 图标
         * @type {null}
         */
        this.icon = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 关联的排行榜
         * @type {null}
         */
        this.leaderboardIds = null;

        /**
         * 活动进度
         * @type {number}
         */
        this.progress = null;

        /**
         * 奖励内容数组
         * @type {null}
         */
        this.rewardContent = null;

        /**
         * 关联的奖励主键，多个使用逗号分开
         * @type {null}
         */
        this.rewards = null;

        /**
         * 开始时间
         * @type {number}
         */
        this.startTime = null;

        /**
         * 标题
         * @type {null}
         */
        this.title = null;

        /**
         * 活动类型
         * @type {null}
         */
        this.type = null;
    };

    /**
     * 活动详情
     * @constructor
     */
    SgtApi.CampaignDetail = function () {

        /**
         * 关联的活动
         * @type {null}
         */
        this.campaign = null;

        /**
         * 关联的活动ID
         * @type {number}
         */
        this.campaignId = null;

        /**
         * 活动描述
         * @type {null}
         */
        this.description = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 活动台本
         * @type {null}
         */
        this.script = null;
    };

    /**
     * 公共通道
     * @constructor
     */
    SgtApi.Channel = function () {

        /**
         * 通道ID
         * @type {null}
         */
        this.channelId = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 通道名称
         * @type {null}
         */
        this.name = null;
    };

    /**
     * 充值记录
     * @constructor
     */
    SgtApi.ChargeLog = function () {

        /**
         * 充值金额
         * @type {number}
         */
        this.chargeCost = null;

        /**
         * 充值计费点ID
         * @type {null}
         */
        this.chargePointId = null;

        /**
         * 充值说明
         * @type {null}
         */
        this.chargeText = null;

        /**
         * 充值时间
         * @type {number}
         */
        this.chargeTime = null;

        /**
         * 是否首冲
         * @type {number}
         */
        this.firstCharge = null;

        /**
         * id
         * @type {number}
         */
        this.id = null;

        /**
         * 备注信息
         * @type {null}
         */
        this.notes = null;

        /**
         * 充值订单ID
         * @type {null}
         */
        this.orderId = null;

        /**
         * 角色ID
         * @type {null}
         */
        this.playerId = null;

        /**
         * 购买请求token，google play验证充值时需要使用到
         * @type {null}
         */
        this.purchaseToken = null;

        /**
         * 充值结果
         * @type {number}
         */
        this.result = null;

        /**
         * 充值渠道
         * @type {null}
         */
        this.storeName = null;

        /**
         * 累计充值金额
         * @type {number}
         */
        this.totalChargeCost = null;
    };

    /**
     * 计费点
     * @constructor
     */
    SgtApi.ChargePoint = function () {

        /**
         * 充值获得的物品数量
         * @type {number}
         */
        this.amount = null;

        /**
         * 计费代码
         * @type {null}
         */
        this.billingCode = null;

        /**
         * 自定义ID
         * @type {null}
         */
        this.customId = null;

        /**
         * 描述
         * @type {null}
         */
        this.description = null;

        /**
         * 充值额外获得的奖励物品数量
         * @type {number}
         */
        this.extraAmount = null;

        /**
         * 首次充值获得的奖励物品数量
         * @type {number}
         */
        this.firstChargeRewardAmount = null;

        /**
         * id
         * @type {number}
         */
        this.id = null;

        /**
         * 充值金额（RMB：单位是分）
         * @type {number}
         */
        this.money = null;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 其他自定义参数
         * @type {null}
         */
        this.other = null;

        /**
         * 当前用户已经购买此计费点的次数，仅用于VO，不需要持久化到mysql
         * @type {number}
         */
        this.purchanseTimes = null;

        /**
         * 是否推荐
         * @type {number}
         */
        this.recommendation = null;

        /**
         * 是否可见或启用
         * @type {number}
         */
        this.status = null;

        /**
         * 充值次数限制，没有次数限制时可约定为-1
         * @type {number}
         */
        this.timesLimit = null;

        /**
         * 类型，充值获取的物品类型，如元宝、道具、月卡等
         * @type {null}
         */
        this.type = null;

        /**
         * VIP积分增长值
         * @type {number}
         */
        this.vipScore = null;
    };

    /**
     * 签到板
     * @constructor
     */
    SgtApi.CheckinBoard = function () {

        /**
         * 自定义签到板ID
         * @type {null}
         */
        this.checkinBoardId = null;

        /**
         * 有效结束时间
         * @type {number}
         */
        this.endTime = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 最大签到次数
         * @type {number}
         */
        this.maxCheckinTimes = null;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 签到状态重置时间，默认为0点整
         * @type {number}
         */
        this.resetTime = null;

        /**
         * 奖励
         * @type {null}
         */
        this.reward = null;

        /**
         * 有效开始时间
         * @type {number}
         */
        this.startTime = null;

        /**
         * tag
         * @type {null}
         */
        this.tag = null;

        /**
         * 类型
         * @type {number}
         */
        this.type = null;


    };


    /**
     * 日历签到
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.CheckinBoard
     */
    SgtApi.CheckinBoard.CHECKIN_TYPE_CALENDAR = 5;

    /**
     * 每日签到
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.CheckinBoard
     */
    SgtApi.CheckinBoard.CHECKIN_TYPE_DAILY = 2;

    /**
     * 月签到，每月一次
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.CheckinBoard
     */
    SgtApi.CheckinBoard.CHECKIN_TYPE_MONTH = 4;

    /**
     * 一般签到
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.CheckinBoard
     */
    SgtApi.CheckinBoard.CHECKIN_TYPE_NORMAL = 1;

    /**
     * 周签到，每周一次
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.CheckinBoard
     */
    SgtApi.CheckinBoard.CHECKIN_TYPE_WEEKS = 3;


    /**
     * 签到返回VO
     * @constructor
     */
    SgtApi.CheckinResult = function () {

        /**
         * 最大累计次数
         * @type {number}
         */
        this.accumlateCount = null;

        /**
         * 签到板ID
         * @type {null}
         */
        this.checkinBoardId = null;

        /**
         * 连续签到次数
         * @type {number}
         */
        this.countinuousCount = null;

        /**
         * 上一次签到时间
         * @type {number}
         */
        this.lastCheckinTime = null;

        /**
         * 奖励
         * @type {null}
         */
        this.rewards = null;
    };

    /**
     * 日常任务
     * @constructor
     */
    SgtApi.DailyTask = function () {

        /**
         * 任务可用状态，1为可用，0为不可用，默认为1
         * @type {number}
         */
        this.available = 1;

        /**
         * 关联活动ID（预留）
         * @type {number}
         */
        this.campaignId = 0;

        /**
         * 当前任务进度
         * @type {number}
         */
        this.currentProgress = 0;

        /**
         * 任务描述
         * @type {null}
         */
        this.description = null;

        /**
         * 任务结束时间
         * @type {number}
         */
        this.endTime = 0;

        /**
         * 任务总进度
         * @type {number}
         */
        this.goal = 0;

        /**
         * id
         * @type {null}
         */
        this.id = null;

        /**
         * 限制等级，最低可做该任务的等级
         * @type {number}
         */
        this.minLevel = 0;

        /**
         * 任务名称
         * @type {null}
         */
        this.name = null;

        /**
         * 后置任务ID
         * @type {null}
         */
        this.nextTaskId = null;

        /**
         * 是否允许当前进度超越最大进度，默认不允许
         * @type {boolean}
         */
        this.overMaxProgress = false;

        /**
         * 前置任务ID
         * @type {null}
         */
        this.preTaskId = null;

        /**
         * 任务奖励
         * @type {null}
         */
        this.reward = null;

        /**
         * 是否允许任务完成后仍然显示在列表,默认显示，false为不显示，true为显示
         * @type {boolean}
         */
        this.showDone = true;

        /**
         * 任务开始时间
         * @type {number}
         */
        this.startTime = 0;

        /**
         * 当前任务状态
         * @type {number}
         */
        this.status = 0;

        /**
         * 任务类型
         * @type {null}
         */
        this.type = null;

        /**
         * 是否在前置任务没完成之前同时更新后置任务，默认不允许
         * @type {boolean}
         */
        this.updateUnfinished = false;


    };

    /**
     * 任务进度状态，已经完成，还未领取奖励的状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.DailyTask
     */
    SgtApi.DailyTask.STATUS_PROGRESS_COMPLETED = 1;

    /**
     * 任务进度状态，已经完成，并且已经领取奖励的状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.DailyTask
     */
    SgtApi.DailyTask.STATUS_PROGRESS_GOT_REWARD = 2;

    /**
     * 任务进度状态，未完成，在任务进行中的状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.DailyTask
     */
    SgtApi.DailyTask.STATUS_PROGRESS_UNFINISHED = 0;

    /**
     * 任务状态，可用的
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.DailyTask
     */
    SgtApi.DailyTask.STATUS_TASK_AVAILABLE = 1;

    /**
     * 任务状态，不可用的
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.DailyTask
     */
    SgtApi.DailyTask.STATUS_TASK_UNAVAILABLE = 0;

    /**
     * 第三方回调封装bean
     * @constructor
     */
    SgtApi.ExternalCallbackBean = function () {

        /**
         * appId
         * @type {null}
         */
        this.appId = null;

        /**
         * 订单内容
         * @type {null}
         */
        this.content = null;

        /**
         * 创建时间
         * @type {number}
         */
        this.createTime = 0;

        /**
         * did
         * @type {null}
         */
        this.did = null;

        /**
         * 第三方请求的header
         * @type {null}
         */
        this.header = null;

        /**
         * 第三方请求的http状态
         * @type {number}
         */
        this.httpCode = 0;

        /**
         * id
         * @type {number}
         */
        this.id = 0;

        /**
         * 角色ID
         * @type {null}
         */
        this.playerId = null;

        /**
         * 服务器ID
         * @type {null}
         */
        this.serverId = null;

        /**
         * 物品类型
         * @type {null}
         */
        this.type = null;

        /**
         * 订单更新时间
         * @type {number}
         */
        this.updateTime = null;

        /**
         * 用户ID
         * @type {null}
         */
        this.userId = null;
    };

    /**
     * 文件的基本属性
     * @constructor
     */
    SgtApi.FileItem = function () {

        /**
         * 文件名
         * @type {null}
         */
        this.fileName = null;

        /**
         * 图片属性 帧数
         * @type {number}
         */
        this.frames = null;

        /**
         * 图片属性 高度
         * @type {number}
         */
        this.height = null;

        /**
         * 最后上传时间戳
         * @type {number}
         */
        this.lastUploadTime = null;

        /**
         * 相对于根路径的path
         * @type {null}
         */
        this.path = null;

        /**
         * 图片属性 图片类型（JPG/PNG/JPEG/GIF）
         * @type {null}
         */
        this.picType = null;

        /**
         * 文件大小
         * @type {number}
         */
        this.size = null;

        /**
         * 文件类型，文件or文件夹
         * @type {null}
         */
        this.type = null;

        /**
         * 图片属性 宽度
         * @type {number}
         */
        this.width = null;
    };

    /**
     * 好友
     * @constructor
     */
    SgtApi.Friendship = function () {

        /**
         * 主键
         * @type {null}
         */
        this.id = null;

        /**
         * 好友接受方ID
         * @type {null}
         */
        this.receiveId = null;

        /**
         * 好友申请方ID
         * @type {null}
         */
        this.sendId = null;

        /**
         * 好友关系状态
         * @type {number}
         */
        this.status = null;


    };
    /**
     * 好友关系状态 好友(1)
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Friendship
     */
    SgtApi.Friendship.FRIEND = 1;

    /**
     * 拒绝添加好友的状态(2)
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Friendship
     */
    SgtApi.Friendship.REFUSE = 2;

    /**
     * STATE_DELETE
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Friendship
     */
    SgtApi.Friendship.STATE_DELETE = -1;

    /**
     * 好友关系状态 未确认(0)
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Friendship
     */
    SgtApi.Friendship.UN_CONFIRM = 0;

    /**
     * 好友关系扩展
     * @constructor
     */
    SgtApi.FriendshipExtra = function () {

        /**
         * 扩展数据
         * @type {null}
         */
        this.extra = null;

        /**
         * 好友关系
         * @type {null}
         */
        this.friendship = null;

        /**
         * 角色信息
         * @type {null}
         */
        this.sgpPlayer = null;
    };

    /**
     * 抽奖
     * @constructor
     */
    SgtApi.GachaBox = function () {

        /**
         * 连抽价格
         * @type {number}
         */
        this.continuousPrice = null;

        /**
         * 描述
         * @type {null}
         */
        this.description = null;

        /**
         * 有效期，从yyyyMMddHHMM到yyyyMMddHHMM 精确到分钟
         * @type {number}
         */
        this.endValidTime = null;

        /**
         * 主键 自增
         * @type {number}
         */
        this.id = null;

        /**
         * 图片
         * @type {null}
         */
        this.img = null;

        /**
         * 初始品质，默认null
         * @type {number}
         */
        this.initQuality = null;

        /**
         * 瞬时属性，保存该GachaBox下所有奖励
         * @type {number}
         */
        this.lotteries = null;

        /**
         * 最大限制品质，默认0不限制
         * @type {number}
         */
        this.maxQuality = null;

        /**
         * 名称（同一服务器不能重复）
         * @type {null}
         */
        this.name = null;

        /**
         * 价格
         * @type {number}
         */
        this.price = null;

        /**
         * 有效期，从yyyyMMddHHMM到yyyyMMddHHMM 精确到分钟
         * @type {number}
         */
        this.startValidTime = null;

        /**
         * 时间/人限制，为每个角色SgpPlayerId创建一个时间戳，在指定的时间区间内只能抽一次奖， 否则抛出异常，并且包含timeLimitErrorMsg
         * @type {number}
         */
        this.timeLimit = null;

        /**
         * 当用户满足时间/人限制时，抛出的异常中指定的信息
         * @type {null}
         */
        this.timeLimitErrorMsg = null;

        /**
         * 次数/人限制，为每个角色创建一个计数器，累计用户的总gacha次数，当小于该次数时不受影响， 否则抛出异常，并且包含totalLimitErrorMsg
         * @type {number}
         */
        this.totalLimit = null;

        /**
         * 当用户满足次数/人限制时，抛出的异常中指定的信息
         * @type {null}
         */
        this.totalLimitErrorMsg = null;

        /**
         * 类型
         * @type {null}
         */
        this.type = null;
    };

    /**
     *
     * @constructor
     */
    SgtApi.GachaBoxResult = function () {

        /**
         *
         * @type {null}
         */
        this.prizes = null;

        /**
         *
         * @type {number}
         */
        this.quality = null;
    };

    /**
     * 礼包、兑换码
     * @constructor
     */
    SgtApi.Gift = function () {

        /**
         * 兑换码集合key，可以是redis中的key
         * @type {null}
         */
        this.codeId = null;

        /**
         * 生成的兑换码的前缀
         * @type {null}
         */
        this.codePrefix = null;

        /**
         * 礼包描述
         * @type {null}
         */
        this.description = null;

        /**
         * 兑换结束时间
         * @type {number}
         */
        this.endTime = null;

        /**
         * 限制兑换级别
         * @type {number}
         */
        this.level = null;

        /**
         * 邮件模板自定义ID
         * @type {null}
         */
        this.mailTemplateCustomId = null;

        /**
         * 礼包名称
         * @type {null}
         */
        this.name = null;

        /**
         * 人均兑奖次数限制
         * @type {number}
         */
        this.redeemLimit = null;

        /**
         * 奖品
         * @type {null}
         */
        this.reward = null;

        /**
         * 兑换开始时间
         * @type {number}
         */
        this.startTime = null;

        /**
         * 主键 gift ID
         * @type {null}
         */
        this.uuid = null;

        /**
         * VIP等级限制
         * @type {number}
         */
        this.vip = null;
    };

    /**
     * 礼包/兑换码 兑换记录
     * @constructor
     */
    SgtApi.GiftRecord = function () {

        /**
         * 兑换码
         * @type {null}
         */
        this.code = null;

        /**
         * 礼包ID
         * @type {null}
         */
        this.giftId = null;

        /**
         * 角色ID
         * @type {null}
         */
        this.playerId = null;

        /**
         * 兑奖时间
         * @type {number}
         */
        this.ticketTime = null;

        /**
         * 主键UUID
         * @type {null}
         */
        this.uuid = null;
    };

    /**
     * 商城物品
     * @constructor
     */
    SgtApi.Item = function () {


        /**
         * 物品数量
         * @type {number}
         */
        this.amount = null;

        /**
         * 自定义物品ID
         * @type {null}
         */
        this.customId = null;

        /**
         * 物品描述
         * @type {null}
         */
        this.description = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 物品ID
         * @type {null}
         */
        this.itemId = null;

        /**
         * 购买物品冷却时间(单位：秒)，默认为null，表示可以连续购买
         * @type {number}
         */
        this.itemPurchaseCd = null;

        /**
         * 最大购买次数
         * @type {number}
         */
        this.maxPurchanseTimes = null;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 其他，可以放一个json字符串
         * @type {null}
         */
        this.other = null;

        /**
         * 角色购买冷却时间(单位：秒)
         * @type {number}
         */
        this.playerPurchaseCd = null;

        /**
         * 价格
         * @type {number}
         */
        this.price = null;

        /**
         * 价格单位
         * @type {null}
         */
        this.priceUnit = null;

        /**
         * 品质
         * @type {number}
         */
        this.quality = null;

        /**
         * 状态 [禁用 0 启用 1]
         * @type {number}
         */
        this.status = null;

        /**
         * 商城ID，即商城的storeId字段值
         * @type {null}
         */
        this.storeId = null;

        /**
         * 物品类型
         */
        this.type = nul;

        /**
         * 权重
         * @type {number}
         */
        this.weight = null;

    };

    /**
     * 状态：禁用
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.DISABLED = 0;

    /**
     * 状态：启用
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.ENABLED = 1;

    /**
     * 物品类型：充值
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.TYPE_OF_CHARGE = "TYPE_CHARGE";

    /**
     * 物品类型：内容关卡
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.TYPE_OF_LEVEL = "TYPE_LEVEL";

    /**
     * 物品类型：默认货币
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.TYPE_OF_MONEY = "TYPE_MONEY";

    /**
     * 物品类型：道具
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.TYPE_OF_PROPS = "TYPE_PROPS";

    /**
     * 物品类型：复活
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.TYPE_OF_RESURRECTION = "TYPE_RESURRECTION";

    /**
     * 物品类型：VIP资格
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.TYPE_OF_VIP = "TYPE_VIP";

    /**
     * 价格单位：人民币
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.UNIT_OF_CN_YUAN = "UNIT_CN_YUAN";

    /**
     * 价格单位：钻石
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.UNIT_OF_DIAMOND = "UNIT_DIAMOND";

    /**
     * 价格单位：金币
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.UNIT_OF_GOLDENCOIN = "UNIT_GOLDENCOIN";

    /**
     * 价格单位：日元
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.UNIT_OF_JP_YUAN = "UNIT_JP_YUAN";

    /**
     * 价格单位：默认货币
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.UNIT_OF_MONEY = "UNIT_MONEY";

    /**
     * 价格单位：美元
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.Item
     */
    SgtApi.Item.UNIT_OF_US_DOLLAR = "UNIT_US_DOLLAR";

    /**
     * 排行榜
     * @constructor
     */
    SgtApi.LeaderBoard = function () {

        /**
         * 活动ID
         * @type {null}
         */
        this.activityId = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 自定义排行榜ID
         * @type {null}
         */
        this.leaderId = null;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;
    };

    /**
     * 排行榜详情
     * @constructor
     */
    SgtApi.LeaderBoardScore = function () {

        /**
         * 排位
         * @type {number}
         */
        this.index = null;

        /**
         * 角色信息
         * @type {null}
         */
        this.player = null;

        /**
         * 分数
         * @type {number}
         */
        this.score = null;
    };

    /**
     * 奖品
     * @constructor
     */
    SgtApi.Lottery = function () {

        /**
         * 修正值
         * @type {number}
         */
        this.balance = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 奖品名称
         * @type {String}
         */
        this.name = null;

        /**
         * 奖品内容
         * @type {String}
         */
        this.prize = null;

        /**
         * 品质
         * @type {number}
         */
        this.quality = null;

        /**
         * 关联的GachaBox id
         * @type {number}
         */
        this.relatedGachaBox = null;

        /**
         * 权值
         * @type {number}
         */
        this.weight = null;
    };

    /**
     *
     * @constructor
     */
    SgtApi.MailsCollection = function () {

        /**
         * 已读邮件集合
         * @type {mail[]}
         */
        this.readedMails = null;

        /**
         * 未读邮件集合
         * @type {mail[]}
         */
        this.unreadMails = null;
    };

    /**
     * 邮件模板
     * @constructor
     */
    SgtApi.MailTemplate = function () {

        /**
         * 附件
         * @type {String}
         */
        this.attachment = null;

        /**
         * 内容
         * @type {String}
         */
        this.content = null;

        /**
         * 自定义ID，用于关联
         * @type {String}
         */
        this.customId = null;

        /**
         * 模板说明
         * @type {String}
         */
        this.description = null;

        /**
         * id
         * @type {number}
         */
        this.id = null;

        /**
         * 标题
         * @type {String}
         */
        this.title = null;
    };

    /**
     * 公共消息
     * @constructor
     */
    SgtApi.Message = function () {

        /**
         * 所属通道ID
         * @type {null}
         */
        this.channelId = null;

        /**
         * 消息内容
         * @type {null}
         */
        this.content = null;

        /**
         * 消息创建时间
         * @type {number}
         */
        this.createTime = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 消息标题
         * @type {null}
         */
        this.title = null;

        /**
         * 消息类型
         * @type {null}
         */
        this.type = null;
    };

    /**
     * 用户商城购买记录
     * @constructor
     */
    SgtApi.Order = function () {

        /**
         * 订单总金额
         * @type {number}
         */
        this.aggregateAmount = null;

        /**
         * 数量，默认为1
         * @type {number}
         */
        this.amounts = null;

        /**
         * 应用ID
         * @type {null}
         */
        this.appId = null;

        /**
         * 订单回调信息
         * @type {null}
         */
        this.callbackMessage = null;

        /**
         * customItemId
         * @type {null}
         */
        this.customItemId = null;

        /**
         * 回调ID
         * @type {null}
         */
        this.did = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * 物品ID
         * @type {number}
         */
        this.itemId = null;

        /**
         * 角色ID
         * @type {null}
         */
        this.playerId = null;

        /**
         * 购买时间
         * @type {number}
         */
        this.purchaseTime = null;

        /**
         * 服务器ID
         * @type {null}
         */
        this.serverId = null;

        /**
         * 结果
         * @type {number}
         */
        this.status = null;

        /**
         * 商店ID
         * @type {null}
         */
        this.storeId = null;


    };

    /**
     * 交易中，如调用第三方计费接口还没有返回成功提示之前的状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Order
     */
    SgtApi.Order.STATUS_OF_DEALING = 0;

    /**
     * 购买结果：异常
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Order
     */
    SgtApi.Order.STATUS_OF_EXCEPTION = 0;

    /**
     * 购买结果：失败
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Order
     */
    SgtApi.Order.STATUS_OF_FAILURE = 0;

    /**
     * 购买结果：成功
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Order
     */
    SgtApi.Order.STATUS_OF_SUCESS = 0;
    /**
     * 微信支付统一下单参数对象模型
     * @class WxPayOrderModel
     * @constructor
     */
    SgtApi.WxPayOrderModel = function () {
        /**
         总金额
         */
        this.total_fee = null;
        /**
         * 交易类型
         */
        this.trade_type = 'JSAPI';
        /**
         * 用户标识
         */
        this.openid = null;
        /**
         * 服务器ID
         */
        this.serverId = null;
        /**
         * 角色ID
         */
        this.playerId = null;
        /**
         * 用户ID
         */
        this.userId = null;
    };

    /**
     * 角色扩展信息公共父类，所有开发者扩展的角色信息要么继承这个类，要么在自己的扩展类中添加playerId字段
     * @constructor
     */
    SgtApi.PlayerExtra = function () {
        /**
         * 角色ID，即sgpPlayerId
         * @type {null}
         */
        this.playerId = null;
    };

    /**
     *
     * @constructor
     */
    SgtApi.Reward = function () {

        /**
         * 奖励内容
         * @type {String}
         */
        this.content = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;
    };

    /**\
     * 服务器信息
     * @constructor
     */
    SgtApi.Server = function () {

        /**
         * address
         * @type {String}
         */
        this.address = null;

        /**
         * id
         * @type {String}
         */
        this.id = null;

        /**
         * isNew
         * @type {boolean}
         */
        this.isNew = false;

        /**
         * isRecommend
         * @type {boolean}
         */
        this.isRecommend = false;

        /**
         * name
         * @type {String}
         */
        this.name = null;

        /**
         * state
         * @type {number}
         */
        this.state = null;


    };

    /**
     * 良好
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Server
     */
    SgtApi.Server.GOOD = 0;

    /**
     * 满载
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Server
     */
    SgtApi.Server.HEAVY = 0;

    /**
     * 顺畅
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Server
     */
    SgtApi.Server.LIGHT = 0;

    /**
     * 维护
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Server
     */
    SgtApi.Server.MAINTAIN = 0;

    /**
     * 一般
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Server
     */
    SgtApi.Server.ORDINARY = 0;

    /**
     * 商城
     * @constructor
     */
    SgtApi.Store = function () {

        /**
         * 商城描述
         * @type {null}
         */
        this.description = null;

        /**
         * 商城折扣，如8折则值为80
         * @type {number}
         */
        this.discount = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**
         * items
         * @type {null}
         */
        this.items = null;

        /**
         * 状态 [禁用 0 启用 1]
         * @type {number}
         */
        this.status = null;

        /**
         * 商城ID
         * @type {null}
         */
        this.storeId = null;

        /**
         * 更新标志 [关闭 0 打开 1]
         * @type {number}
         */
        this.updateFlag = null;

        /**
         * 商城版本号，在商城物品变更后可变更此版本号
         * @type {number}
         */
        this.version = null;


    };
    /**
     * 默认折扣
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Store
     */
    SgtApi.Store.DEFAULT_DISCOUNT = 100;

    /**
     * 状态：禁用
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Store
     */
    SgtApi.Store.DISABLED = 0;

    /**
     * 状态：启用
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Store
     */
    SgtApi.Store.ENABLED = 1;

    /**
     * 更新标志：关闭
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Store
     */
    SgtApi.Store.UPDATE_FLAG_CLOSE = 0;

    /**
     * 更新标志：打开
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Store
     */
    SgtApi.Store.UPDATE_FLAG_OPEN = 1;

    /**
     * 自定义数据结构
     * @constructor
     */
    SgtApi.StructuredData = function () {

        /**
         * 主键
         * @type {number}
         */
        this.id = null;

        /**\
         * redis的key值
         * @type {null}
         */
        this.key = null;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 类型
         * @type {null}
         */
        this.type = null;


    };
    /**
     * 表示值为list的数据结构
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.StructuredData
     */
    SgtApi.StructuredData.TYPE_OF_LIST = "list";

    /**
     * 表示职位map键值对的数据结构
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.StructuredData
     */
    SgtApi.StructuredData.TYPE_OF_MAP = "map";

    /**
     * 表示值为set的数据结构
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.StructuredData
     */
    SgtApi.StructuredData.TYPE_OF_SET = "set";

    /**
     * 表示值为value的数据结构
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.StructuredData
     */
    SgtApi.StructuredData.TYPE_OF_VALUE = "value";

    /**
     * 表示值为zset的数据结构
     * @type {String}
     * @static
     * @constant
     * @memberof SgtApi.StructuredData
     */
    SgtApi.StructuredData.TYPE_OF_ZSET = "zset";


    /**
     * 通用任务(预留)
     * @constructor
     */
    SgtApi.Task = function () {

        /**
         * Task的actiontype类型-与计数器中的type相关联
         * @type {null}
         */
        this.actiontype = null;

        /**
         * 任务可用状态，1为可用，0为不可用，默认为1
         * @type {number}
         */
        this.available = null;

        /**
         * 关联活动ID（预留）
         * @type {number}
         */
        this.campaignId = null;

        /**
         * 当前任务进度 当任务是成就时，返回的进度，将是相关Actiontype的总进度 其余将是当日进度
         * @type {number}
         */
        this.currentProgress = null;

        /**
         * 自定义条件，客户端使用
         * @type {null}
         */
        this.customCondition = null;

        /**
         * Task描述
         * @type {null}
         */
        this.description = null;

        /**
         * 任务结束时间
         * @type {number}
         */
        this.endTime = null;

        /**
         * 完成Task的进度数
         * @type {number}
         */
        this.goal = null;

        /**
         * 主键 非自增，不能为空
         * @type {null}
         */
        this.id = null;

        /**
         * 开启Task的等级 同日常任务中-限制等级，最低可做该任务的等级
         * @type {number}
         */
        this.level = null;

        /**
         * Task名称
         * @type {null}
         */
        this.name = null;

        /**
         * 后置task-ID 等同于任务旧模型字段
         * @type {null}
         */
        this.nextTaskId = null;

        /**
         * 是否允许当前进度超越最大进度，默认不允许
         * @type {boolean}
         */
        this.overMaxProgress = false;

        /**
         * 前置task-ID
         * @type {null}
         */
        this.preTaskId = null;

        /**
         * 奖励
         * @type {null}
         */
        this.reward = null;

        /**
         * 是否允许任务完成后仍然显示在列表,默认显示，false为不显示，true为显示
         * @type {boolean}
         */
        this.showDone = true;

        /**
         * 任务开始时间
         * @type {number}
         */
        this.startTime = null;

        /**
         * 当前任务状态
         * @type {number}
         */
        this.status = null;

        /**
         * Task的类型[achievement-成就,dailytask-日常任务]
         * @type {null}
         */
        this.taskType = null;

        /**
         * 是否在前置任务没完成之前同时更新后置任务，默认不允许
         * @type {boolean}
         */
        this.updateUnfinished = false;

        /**
         * Task可见性 [0 不可见，1 可见]
         * @type {number}
         */
        this.visibility = null;
    };
    /**
     * Task状态(available)：不可用，禁用状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.AVAILABLE_DISABLE = 0;

    /**
     * Task状态(available)：可用，开启状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.AVAILABLE_ENABLE = 0;

    /**
     * Task进度状态(Status):已经完成，还未领取奖励的状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.STATUS_PROGRESS_COMPLETED = 0;

    /**
     * Task进度状态(Status):已经完成，并且已经领取奖励的状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.STATUS_PROGRESS_GOT_REWARD = 0;

    /**
     * Task进度状态(Status):未完成，在任务进行中的状态
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.STATUS_PROGRESS_UNFINISHED = 0;

    /**
     * taskType:成就
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.TASKTYPE_ACHIEVEMENT = null;

    /**
     * taskType:日常任务
     * @type {null}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.TASKTYPE_DAILYTASK = null;

    /**
     * Task可见性：不可见
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.VISIBILITY_INVISIBLE = 0;

    /**
     * Task可见性：可见
     * @type {number}
     * @static
     * @constant
     * @memberof SgtApi.Task
     */
    SgtApi.Task.VISIBILITY_VISIBLE = 0;

    /**
     * 定时器任务
     * @constructor
     */
    SgtApi.TimerTask = function () {

        /**
         * className
         * @type {null}
         */
        this.className = null;

        /**
         * 定时任务创建时间
         * @type {number}
         */
        this.createTime = null;

        /**
         * 重复执行的时间间隔，repeat为不为0时生效
         * @type {number}
         */
        this.delay = null;

        /**
         * 描述该定时任务做什么事情
         * @type {null}
         */
        this.desc = null;

        /**
         * 第一次执行定时器的时间点
         * @type {number}
         */
        this.executeTime = null;

        /**
         * 主键，自增
         * @type {number}
         */
        this.id = null;

        /**
         * 自定义的定时器名字
         * @type {null}
         */
        this.name = null;

        /**
         * 过期时间/为0为不失效
         * @type {number}
         */
        this.overdueTime = null;

        /**
         * 定时器需要的参数，为json字符串，可选
         * @type {null}
         */
        this.params = null;

        /**
         * 是否重复执行，0为单次执行，1为多次执行，2为不限次数执行，默认为0
         * @type {number}
         */
        this.repeat = null;

        /**
         * 执行的次数，repeat为1时生效
         * @type {number}
         */
        this.step = null;

        /**
         * 关联到定时器的ID
         * @type {number}
         */
        this.timerId = null;
    };

    /**
     * 版本详情
     * @constructor
     */
    SgtApi.VersionDetail = function () {

        /**
         * 应用标识
         * @type {null}
         */
        this.appId = null;

        /**
         * 渠道
         * @type {null}
         */
        this.channel = null;

        /**
         * 版本描述
         * @type {null}
         */
        this.description = null;

        /**
         * 是否强制升级，true强制，false不强制
         * @type {boolean}
         */
        this.forceUpdate = false;

        /**
         * 主键
         * @type {null}
         */
        this.id = null;

        /**
         * 应用名称
         * @type {null}
         */
        this.name = null;

        /**
         * 应用类型，目前分为：android,ios,html5三种
         * @type {null}
         */
        this.type = null;

        /**
         * 升级类型，1 完整升级 ，2部分升级
         * @type {number}
         */
        this.updateType = null;

        /**
         * 升级地址
         * @type {null}
         */
        this.updateUrl = null;

        /**
         * 具体版本号
         * @type {number}
         */
        this.version = null;

        /**
         * 版本名称
         * @type {null}
         */
        this.versionName = null;
    };
    /**
     * 用户留存信息类
     * @constructor
     */
    SgtApi.UserLeaveInfo = function () {
        /**
         * 主键id
         */
        this.id = null;
        /**
         * 用户名
         */
        this.userName = null;
        /**
         * 联系电话
         */
        this.phone = null;
        /**
         * 联系地址
         */
        this.address = null;
        /**
         * 备注
         */
        this.content = null;
        /**
         * 创建时间
         */
        this.createTime = null;
        /**
         * 更新时间
         */
        this.updateTime = null;
        /**
         * 所属appid
         */
        this.appId = null;
    };

    SgtApi.doRPC = function (name, data, url, callback) {
        jsonRPC.setup({
            endPoint: url,
            namespace: ''
        });
        jsonRPC.request(name, {
            params: data,
            success: function (data) {
                if (callback) {
                    return callback(true, data.result);
                }
            },
            error: function (data) {
                if (callback) {
                    return callback(false, SgtApi.errorMessage(data) + '.\nat: ' + name + '()');
                }
            }
        });
    };

    //错误信息
    SgtApi.errorMessage = function (data) {

        if (data.error.data) {
            //开发者自定义
            var defException = SgtApi.customException();
            for (var i in defException) {
                if (i === data.error.data.exceptionTypeName) {
                    return defException[i];
                }
            }
            //服务器默认
            var _message = data.error.data.message;
            return _message;
        }
        return data.error.message || '发生了错误,但服务器未返回错误信息';
    };

    //自定义异常
    SgtApi.customException = function (exceptionConfig) {
        var custome = {};
        for (var i in exceptionConfig) {
            custome.i = exceptionConfig[i];
        }
        return custome;
    };

    /**
     * Sgt  上下文
     * @type {{user: null, server: null, playerData: null}}
     * @global
     * @memberof SgtApi
     * @static
     */
    SgtApi.context = {
        /**
         * 当前用户数据信息
         * @memberof SgtApi.context
         * @static
         */
        user: null,
        /**
         * 当前使用服务器信息
         * @memberof SgtApi.context
         * @static
         */
        server: null,

        /**
         * 应用唯一标识
         * @property appId
         * @type {string}
         * @memberof SgtApi.context
         * @static
         */
        appId: null,

        /**
         * 网关地址
         * @property appGateway
         * @type {string}
         * @default http://sgp.gallme.com.cn/gateway
         * @memberof SgtApi.context
         * @static
         */
        appGateway: 'http://gw.sgtcloud.cn/gateway',

        /**
         * 渠道标识
         * @property channelId
         * @type {string}
         * @memberof SgtApi.context
         * @static
         */
        channelId: '',
        openid: null,
        access_token: null
    };

    //识别 MicroMessenger 这个关键字来确定是否微信内置的浏览器
    function is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }

    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r !== null) return unescape(r[2]);
        // SgtApi.UserService.prototype = null; //返回参数值
    }

    /**
     * 初始化sdk配置
     * @class init
     * @param {json|String} json 配置文件{appId:""[,appGateway:"",channelId:""]},若为String则直接配置为appId
     * @constructor
     */
    SgtApi.init = function (config) {
        if (typeof config == "string") {
            SgtApi.context.appId = config;
        } else {
            if (config.appId) {
                SgtApi.context.appId = config.appId;
            }
            if (config.appGateway) {
                SgtApi.context.appGateway = config.appGateway;
            }
            if (config.channelId) {
                SgtApi.context.channelId = config.channelId;
            }
            if (typeof  config["async"] != 'undefined') {
                jsonRPC.async = config["async"];
            }
        }
        SgtApi.UserService = SgtApi.UserService();
        SgtApi.RouterService = SgtApi.RouterService();
        SgtApi.UserLeaveInfoService = SgtApi.UserLeaveInfoService();
        SgtApi.AnnouncementService = SgtApi.AnnouncementService();
        //初始化微信中控服务
        if (typeof wx != "undefined") {
            if (is_weixin()) {
                SgtApi.WxCentralService = SgtApi.WxCentralService();
                if (localStorage.getItem('sgt-' + SgtApi.context.appId + '-openid')) {
                    SgtApi.context.openid = localStorage.getItem('sgt-' + SgtApi.context.appId + '-openid');
                }
                if (localStorage.getItem('sgt-' + SgtApi.context.appId + '-access_token')) {
                    SgtApi.context.access_token = localStorage.getItem('sgt-' + SgtApi.context.appId + '-access_token');
                }
                /*if (getUrlParam('code')) {
                    SgtApi.WxCentralService.getUserAccessToken(getUrlParam('code'), function (result, data) {
                        SgtApi.context.openid = data.openid;
                        SgtApi.context.access_token = data.access_token;
                        localStorage.setItem('sgt-' + SgtApi.context.appId + '-access_token', SgtApi.context.access_token);
                        localStorage.setItem('sgt-' + SgtApi.context.appId + '-openid', SgtApi.context.openid);
                    });
                }*/
            } else
                console.warn('%c您当前未在微信环境的客户端, 所以没有为您初始化微信中控服务','color:red');
        } else {
            console.warn('%c您未导入wx-js-sdk, 所以没有为您初始化微信中控服务\r\n若您想了解更多详情, 可以访问微信公众平台开发者文档http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html','color:red');
        }
    };
    /**
     * 创建Service 实例
     */
    SgtApi.CreateServices = function(){

        if (!SgtApi._doneInit) {
            SgtApi.PlayerService = SgtApi.PlayerService();
            SgtApi.PlayerExtraService = SgtApi.PlayerExtraService();
            SgtApi.AchievementService = SgtApi.AchievementService();
            //SgtApi.AnnouncementService = SgtApi.AnnouncementService();
            SgtApi.CampaignService = SgtApi.CampaignService();
            SgtApi.CheckinBoardService = SgtApi.CheckinBoardService();
            SgtApi.DailyTaskService = SgtApi.DailyTaskService();
            SgtApi.TaskService = SgtApi.TaskService();
            SgtApi.FriendshipService = SgtApi.FriendshipService();
            SgtApi.FriendshipExtraService = SgtApi.FriendshipExtraService();
            SgtApi.BlacklistService = SgtApi.BlacklistService();
            SgtApi.GachaBoxService = SgtApi.GachaBoxService();
            SgtApi.LeaderBoardService = SgtApi.LeaderBoardService();
            SgtApi.MailService = SgtApi.MailService();
            SgtApi.NotificationService = SgtApi.NotificationService();
            SgtApi.PurchaseService = SgtApi.PurchaseService();
            SgtApi.StoreService = SgtApi.StoreService();
            SgtApi.ChargePointService = SgtApi.ChargePointService();
            SgtApi.BossService = SgtApi.BossService();
            SgtApi.FileStorageService = SgtApi.FileStorageService();
            SgtApi.GiftCodeService = SgtApi.GiftCodeService();
            SgtApi.PrivateChannelService = SgtApi.PrivateChannelService();
            SgtApi.PublicChannelService = SgtApi.PublicChannelService();
            SgtApi.DelegateDidService = SgtApi.DelegateDidService();
            SgtApi.StructuredDataService = SgtApi.StructuredDataService();
            SgtApi.TicketService = SgtApi.TicketService();
            SgtApi.ErrorReportService = SgtApi.ErrorReportService();
            SgtApi.InvitationCodeService = SgtApi.InvitationCodeService();
            SgtApi.PaymentCallbackService = SgtApi.PaymentCallbackService();
            SgtApi.TimestampService = SgtApi.TimestampService();
            SgtApi.VersionDetailService = SgtApi.VersionDetailService();
            SgtApi.RandomNameGroupService = SgtApi.RandomNameGroupService();
            SgtApi.LobbyService = SgtApi.LobbyService();
            SgtApi._doneInit = true;
        }
    };
    /**
     * 用户相关业务接口
     * @module UserService
     */
    SgtApi.UserService = function () {
        var _appGateway = SgtApi.context.appGateway;
        var _appId = SgtApi.context.appId;
        var _url = _appGateway + '/user';

        /**
         * 获取服务器信息并解锁其他服务
         */
        var _getPlayServer = function (callback) {
            SgtApi.RouterService.route({
                'userId': SgtApi.context.user.userid,
                'createTime': SgtApi.context.user.createTime,
                'channelId': SgtApi.context.channelId
            }, function (result, data) {
                if (result) {
                    SgtApi.context.server = data;
                    SgtApi.CreateServices();
                    callback(true, SgtApi.context.user);
                } else {
                    callback(false, data);
                }
            });
        };
        return {
            /**
             * 验证手机号和验证码是否匹配
             * @param  {string}   smobile  用户手机号
             * @param  {string}   captcha  用户输入验证码
             * @param  {Function} callback 回调函数
             * @return {string}            是否验证成功结果
             */
            isMatch: function (smobile, captcha, callback) {
                var name = 'isMatcher';
                var data = [smobile, captcha];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 第三方登录（自动选服）
             * @param  {string} type 登陆类型
             * @param  {Function} callback 回调函数
             * @return {User}              登录后的user对象
             */
            login3rd: function (type, callback) {
                var name = 'login3rd';
                var data = [SgtApi.context.openid, type];
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        SgtApi.context.user = data;
                        _getPlayServer(callback);
                    } else {
                        callback(false, data);
                    }
                });
            },
            /**
             * 手动登录（自动选服）
             * @param  {string}   username 用户名
             * @param  {string}   password 密码
             * @param  {Function} callback 回调函数
             * @return {User}              登录后的user对象
             */
            login: function (userName, password, callback) {
                var name = 'login';
                var data = [userName, password];
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        SgtApi.context.user = data;
                        _getPlayServer(callback);
                    } else {
                        callback(false, data);
                    }
                });
            },

            /**
             * 客户端通过提交user对象完成注册（自动选服）
             * @param  {User}       user     user对象
             * @param  {Function}   callback 回调函数
             * @return {User}       注册后的user对象
             */
            regist: function (user, callback) {
                var name = 'register';
                var data = [user];
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        SgtApi.context.user = data;
                        _getPlayServer(callback);
                    } else {
                        callback(false, data);
                    }
                });
            },
            /**
             * 第三方登录（手动选服）
             * @param  {string} type 登陆类型
             * @param  {Function} callback 回调函数
             * @return {User}              登录后的user对象
             */
            login3rd_manual: function (type, callback) {
                var name = 'login3rd';
                var data = [SgtApi.context.openid, type];
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        SgtApi.context.user = data;
                        callback(true, data);
                    } else {
                        callback(false, data);
                    }
                });
            },
            /**
             * 手动登录（手动选服）
             * @param  {string}   username 用户名
             * @param  {string}   password 密码
             * @param  {Function} callback 回调函数
             * @return {User}              登录后的user对象
             */
            login_manual: function (userName, password, callback) {
                var name = 'login';
                var data = [userName, password];
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        SgtApi.context.user = data;
                        callback(true, data);
                    } else {
                        callback(false, data);
                    }
                });
            },

            /**
             * 客户端通过提交user对象完成注册（手动选服）
             * @param  {User}       user     user对象
             * @param  {Function}   callback 回调函数
             * @return {User}       注册后的user对象
             */
            regist_manual: function (user, callback) {
                var name = 'register';
                var data = [user];
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        //SgtApi.context.user = data;
                        callback(true, data);
                    } else {
                        callback(false, data);
                    }
                });
            },

            /**
             * 重置密码发送邮件
             * @param  {string}   userName 用户名
             * @param  {Function} callback 回调函数
             * @return {null}
             */
            resetPassword: function (userName, callback) {
                var name = 'resetPassword';
                var data = [userName];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 发送手机验证码短信
             * @param  {string}   smobile  用户手机号
             * @param  {string}   appName  当前产品名称
             * @param  {Function} callback 回调函数
             * @return {boolean}            true发送成功, false发送失败
             */
            sendCaptchaMessage: function (smobile, appName, callback) {
                var name = 'SendMessage';
                var data = [smobile, appName];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过用户名更改密码
             * @param  {string}   userName 用户名
             * @param  {string}   password 密码
             * @param  {Function} callback 回调函数
             * @return {null}
             */
            updatePasswordByUserName: function (userName, password, callback) {
                var name = 'updatePasswordByUserName';
                var data = [userName, password];
                var that = this;
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        that.saveLocalStorage(userName, password);
                        callback(true, data);
                    } else {
                        callback(false, data);
                    }
                });
            },

            /**
             * 更新用户信息
             * @param  {User}   user     User数据对象
             * @param  {Function} callback 回调函数
             * @return {User}            更新之后的User
             */
            updateUser: function (user, callback) {
                var name = 'updateUser';
                var data = [user];
                var that = this;
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        that.saveLocalStorage(user.userName, user.password);
                        callback(true, data);
                    } else {
                        callback(false, data);
                    }
                });
            },

            /**
             * 更新用户名，密码，邮箱
             * @param  {string}   userId   用户ID
             * @param  {string}   userName 用户名
             * @param  {string}   password 密码
             * @param  {string}   email    邮箱
             * @param  {Function} callback 回调函数
             * @return {boolean}            true更新成功 false更新失败
             */
            updateUserByUserId: function (userId, userName, password, email, callback) {
                var name = 'updateUserByUserId';
                var data = [userId, userName, password, email];
                var that = this;
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        that.saveLocalStorage(userName, password);
                        callback(true, data);
                    } else {
                        callback(false, data);
                    }
                });
            },

            /**
             * 更新用户名，密码
             * @param  {string}   userId   用户ID
             * @param  {string}   userName 用户名
             * @param  {string}   password 密码
             * @param  {Function} callback "回调函数"
             * @return {boolean}            true更新成功 false更新失败
             */
            updateUserNameAndPassword: function (userId, userName, password, callback) {
                var name = 'updateUserNameAndPassword';
                var data = [userId, userName, password];
                var that = this;
                SgtApi.doRPC(name, data, _url, function (result, data) {
                    if (result) {
                        that.saveLocalStorage(userName, password);
                        callback(true, data);
                    } else {
                        callback(false, data);
                    }
                });
            },

            /**
             * 检测token有效性
             * @param  {string}   userName 用户名
             * @param  {string}   token    token令牌
             * @param  {Function} callback 回调函数
             * @return {boolean}            true合法，false不合法
             */
            validationToken: function (userName, token, callback) {
                var name = 'validationToken';
                var data = [userName, token];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 快速登录 （自动选服）
             * @param  {Function} callback 回调函数
             * @return {User}            登录后的User对象
             */
            quickLogin: function (callback) {
                var username = localStorage.getItem("sgt-" + _appId + "-username");
                var password = localStorage.getItem("sgt-" + _appId + "-password");
                if (username && password) {
                    this.login(username, password, callback);
                } else {
                    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
                    ];
                    var name = '';
                    for (var i = 0; i < 8; i++) {
                        var id = 0;
                        if (i > 5) {
                            id = Math.ceil(Math.random() * 9);
                            name += num[id];
                        } else {
                            id = Math.ceil(Math.random() * 61);
                            name += chars[id];
                        }
                    }
                    var user = new SgtApi.User();
                    user.userName = name;
                    user.password = 'yoedge2014';
                    this.regist(user, function (result, data) {
                        if (result) {
                            localStorage.setItem('sgt-' + _appId + '-username', user.userName);
                            localStorage.setItem('sgt-' + _appId + '-password', user.password);
                            callback(true, data);
                        } else {
                            callback(false, data);
                        }
                    });
                }
            },
            /**
             * 快速登录（手动选服）
             * @param  {Function} callback 回调函数
             * @return {User}            登录后的User对象
             */
            quickLogin_manual: function (callback) {
                var username = localStorage.getItem("sgt-" + _appId + "-username");
                var password = localStorage.getItem("sgt-" + _appId + "-password");
                if (username && password) {
                    this.login_manual(username, password, callback);
                } else {
                    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
                    ];
                    var name = '';
                    for (var i = 0; i < 8; i++) {
                        var id = 0;
                        if (i > 5) {
                            id = Math.ceil(Math.random() * 9);
                            name += num[id];
                        } else {
                            id = Math.ceil(Math.random() * 61);
                            name += chars[id];
                        }
                    }
                    var user = new SgtApi.User();
                    user.userName = name;
                    user.password = 'yoedge2014';
                    this.regist_manual(user, function (result, data) {
                        if (result) {
                            localStorage.setItem('sgt-' + _appId + '-username', user.userName);
                            localStorage.setItem('sgt-' + _appId + '-password', user.password);
                            callback(true, data);
                        } else {
                            callback(false, data);
                        }
                    });
                }
            },
            /**
             * 存储或修改当前应用标识的用户名和密码到localStorage中,便于快速登录
             * @param  {string} userName 用户名
             * @param  {string} password 密码
             */
            saveLocalStorage: function (userName, password) {
                localStorage.setItem('sgt-' + _appId + '-username', userName);
                localStorage.setItem('sgt-' + _appId + '-password', password);
            },

            /**
             * 删除localStorage中的当前应用标识的用户名和密码
             * @return {[type]} [description]
             */
            removeLocalStorage: function () {
                localStorage.removeItem('sgt-' + _appId + '-username');
                localStorage.removeItem('sgt-' + _appId + '-password');
            }
        };
    };
    /**
     * 角色处理逻辑业务接口
     *
     * @module  PlayerService
     * @type {{}|*}
     */
    SgtApi.PlayerService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/sgpplayer.do';
        return {
            /**
             * 创建一个角色
             * @param player{player} 角色对象
             * @param callback{function}
             * @return player
             */
            create: function (player, callback) {
                player.lastLoginTime = SgtApi.context.user.lastLoginTime;
                player.serverId = SgtApi.context.server.id;
                player.userId = SgtApi.context.user.userid;
                var name = 'create';
                var data = [player];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过playerId删除角色及相关信息
             * @param playerId{string} 角色id
             * @param callback{Function} 回调函数
             * @return null
             */
            deletePlayerByPlayerId: function (playerId, callback) {
                var name = 'deleteSgpPlayerByPlayerId';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 下载存档
             * @param playerId{string} 角色ID
             * @param callback{function} 回调函数
             * @return Save 存档
             */
            downloadSave: function (playerId, callback) {
                var name = 'downloadSave';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据最后登陆时间查找角色
             * @param lastLoginTime{number} 最后登陆时间
             * @param start{int} 开始页
             * @param limit{int} 每页数量
             * @param callback{Function} 回调函数
             * @return Player[] 角色列表
             */
            getByLastLoginTime: function (lastLoginTime, start, limit, callback) {
                var name = 'getByLastLoginTime';
                var data = [lastLoginTime, start, limit];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             *根据角色名查找角色
             * @param playerName{string} 角色名
             * @param start{int} 开始页
             * @param limit{int} 每页数量
             * @param callback{Function} 回调函数
             * @return Player[] 角色列表
             */
            getByName: function (playerName, start, limit, callback) {
                var name = 'getByName';
                var data = [playerName, start, limit];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据用户ID查找角色
             * @param userId{String} 用户ID
             * @param callback{Function} 回调函数
             * @return Player[] 角色列表
             */
            getByUserId: function (userId, callback) {
                var name = 'getByUserId';
                var data = [userId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定角色的好友上限
             * @param playerId{string} 角色ID
             * @param callback{Function} 回调函数
             * @return number 返回好友上限，0表示无上限
             */
            getFriendsMaxNumber: function (playerId, callback) {
                var name = 'getFriendsMaxNumber';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过用户ID查找其中的一个角色
             * @param userId{string} 用户ID
             * @param callback{Function} 回调函数
             * @return Player 单一角色
             */
            getOneByUserId: function (userId, callback) {
                var name = 'getOneByUserId';
                var data = [userId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过自定义ID获取角色信息
             * @param customId{string} 自定义ID
             * @param callback{Function} 回调函数
             * @return Player
             */
            getPlayerByCustomId: function (customId, callback) {
                var name = 'getSgpPlayerByCustomId';
                var data = [customId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过角色id获取角色信息
             * @param playerId{string} 主键ID
             * @param callback{Function} 回调函数
             * @return player
             */
            getPlayerById: function (playerId, callback) {
                var name = 'getSgpPlayerById';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 随机返回若干个最近登录的player
             * @param limit{int} 限制数量
             * @param callback{Function} 回调函数
             * @return player[]
             */
            searchPlayersByLastLogin: function (limit, callback) {
                var name = 'searchPlayersByLastLogin';
                var data = [limit];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             *根据条件过滤并随机查询若干个最近登录的player
             * @param lastLoginTime{number}
             * @param limit{number}
             * @param excludePlayerIds{string[]}
             * @param player[]
             */
            searchPlayersByLastLoginCondition: function (lastLoginTime, limit, excludePlayerIds, callback) {
                var name = 'searchPlayersByLastLogin';
                var data = [lastLoginTime, limit, excludePlayerIds];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 设置指定角色的好友上限
             * @param sgpPlayerId{string} 角色ID
             * @param number{int} 好友上限
             * @param callback{Function} 回调函数
             * @return null
             */
            setFriendsMaxNumber: function (playerId, number, callback) {
                var name = 'setFriendsMaxNumber';
                var data = [playerId, number];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 更新角色信息
             * @param playerinfo{Player} 角色对象
             * @param callback{Function} 回调函数
             * @return player
             */
            update: function (player, callback) {
                var name = 'update';
                var data = [player];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 上传存档
             * @param saveinfo{save} 存档实例
             * @param callback{Function} 回调函数
             * @return Save 保存后的存档
             */
            uploadSave: function (save, callback) {
                var name = 'uploadSave';
                var data = [save];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 角色扩展业务接口
     *
     * @module PlayerExtraService
     * @type {{}|*}
     */
    SgtApi.PlayerExtraService = function () {

        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/playerExtraService.do';

        return {

            /**
             * 添加角色扩展信息
             * @param {PlayerExtra}   playerExtra 角色扩展对象
             * @param {Function} callback    回调函数
             * @return null
             */
            addPlayerExtra: function (playerExtra, callback) {
                var name = 'addPlayer';
                var data = [playerExtra];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据角色ID删除角色扩展信息
             * @param  {String}   playerId 扩展角色id
             * @param  {Function} callback 回调函数
             * @return null
             */
            deletePlayerExtraById: function (playerId, callback) {
                var name = 'deletePlayerById';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 分页查询所有角色扩展信息列表
             * @param pageNumber{int} 页码
             * @param pageSize{int} 每页返回的数据条数
             * @param callback{Function} 回调函数
             * @return Object
             */
            findAll: function (pageNumber, pageSize, callback) {
                var name = 'findAll';
                var data = [pageNumber, pageSize];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据条件查询角色扩展信息列表，支持分页
             * @param condition{map} 条件列表 key 字段名称 value 字段值
             * @param pageNumber{int} 页码
             * @param pageSize{int} 每页返回的数据条数
             * @param callback{Function} 回调函数
             * @return Object
             */
            findAllByCondition: function (condition, pageNumber, pageSize, callback) {
                var name = 'findAll';
                var data = [condition, pageNumber, pageSize];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据角色ID查找角色扩展信息
             * @param {Function} callback 回调函数
             * @return Object
             */
            getPlayerExtraById: function (playerId, callback) {
                var name = 'getPlayerById';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据条件查询角色列表
             * @param {Map<String,String>|JSON} condition 查询条件 key 字段名称 value 字段值
             * @param {Function} callback 回调函数
             * @return {Json[]}Object 角色列表
             */
            getPlayerExtraList: function (condition, callback) {
                var name = 'getPlayerList';
                var data = [condition];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 修改角色扩展信息
             * @param {Map<String,Object>|JSON} player  角色扩展信息
             * @param {Function} callback 回调函数
             * @return null
             */
            updatePlayerExtraMap: function (playerExtra, callback) {
                var name = 'updatePlayer';
                var data = [playerExtra];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据角色ID修改角色扩展信息
             * @param {Object} player 角色扩展信息
             * @param {Function}callback  回调函数
             * @return null
             */
            updatePlayerExtra: function (playerId, playerExtra, callback) {
                var name = 'updatePlayer';
                var data = [playerId, playerExtra];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 成就系统业务
     *
     * @module AchievementService
     * @type {{}|*}
     */
    SgtApi.AchievementService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/achievement.do';
        return {

            /**
             * 达成成就
             *
             * @param {string}playerId 角色ID
             * @param {string}achievmentId  成就ID
             * @param {Function} callback 回调函数
             */
            achieve: function (playerId, achievmentId, callback) {
                var name = 'achieve';
                var data = [playerId, achievmentId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 领取成就奖励
             *
             * @param {string}playerId 角色ID
             * @param {string}achievmentId 成就ID
             * @param {Function}callback 回调函数
             * @return string 奖励
             */
            complete: function (playerId, achievmentId, callback) {
                var name = 'complete';
                var data = [playerId, achievmentId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过type提交成就 进度数自动+1
             * @param {string} type  任务的type类型
             * @param {string} playerId  角色ID
             * @param {Function} callback  回调函数
             * @return achievement[]  相同类型成就集合
             */
            excuteAchievementsByType: function (type, playerId, callback) {
                var name = 'excuteAchievementsByType';
                var data = [type, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过成就type累加指定进度
             * @param {string} type 自定义成就类型
             * @param {string} playerId 角色ID
             * @param {number} progress 进度
             * @param {function} callback 回调函数
             * @return achievement[]
             */
            customAchievementsByType: function (type, playerId, progress, callback) {
                var name = 'excuteAchievementsByType';
                var data = [type, playerId, progress];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据成就ID获取成就信息
             * @param {string} achievementId 成就ID
             * @param {Function} callback 回调函数
             * @return object 成就详情
             */
            getAchievementById: function (achievementId, callback) {
                var name = 'getAchievementById';
                var data = [achievementId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过类型获取指定角色可以进行的任务
             * @param {string} playerId 角色ID
             * @param {string}type  任务的type类型
             * @param {Function}callback 回调函数
             * @return object
             */
            getAchievementsByType: function (playerId, type, callback) {
                var name = 'getAchievementsByType';
                var data = [playerId, type];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取可用的成就
             * @param {Function}callback 回调函数
             * @return object 成就集合
             */
            getAllAchievements: function (callback) {
                var name = 'getAllAchievements';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定角色未达成的成就
             * @param {string}playerId 角色ID
             * @param {Function}callback 回调函数
             * @return object 未达成成就集合
             */
            getAvailableAchievements: function (playerId, callback) {
                var name = 'getAvailableAchievements';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定角色已领取奖励的成就
             * @param {string}playerId 角色ID
             * @param {Function}callback 回调函数
             * @return object 已领取奖励成就集合
             */
            getCompleteAchievements: function (playerId, callback) {
                var name = 'getCompleteAchievements';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定角色已经达成的成就
             * @param {String}playerId 角色ID
             * @param {Function}callback 回调函数
             * @return object 已达成成就集合
             */
            getDoneAchievements: function (playerId, callback) {
                var name = 'getDoneAchievements';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 提交指定成就进度
             * @param {string}PlayerId 角色ID
             * @param {string}achievementId 任务ID
             * @param {int} progress 进度
             * @param {Function}callback  回调函数
             * @return object
             */
            setAchievementProgress: function (playerId, achievementId, progress, callback) {
                var name = 'setAchievementProgress';
                var data = [playerId, achievementId, progress];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 设置指定类型的成就进度
             * @param {string}type 任务的type类型
             * @param {string}playerId 角色ID
             * @param {int}progress 进度
             * @param {Function}callback 回调函数
             * @return object
             */
            setAchievementsProgressByType: function (type, playerId, progress, callback) {
                var name = 'setAchievementsProgressByType';
                var data = [type, playerId, progress];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 公告业务接口
     *
     * @module  AnnouncementService
     * @type {{}|*}
     */
    SgtApi.AnnouncementService = function () {
        var _url;
        return {
            /**
             * 通过serverType 判断是获取全服公告还是当前服务器公告
             * @param {int} serverType 1.全服2.当前服务器
             * @returns {string}
             */
            getRequestUrlByServerType: function(serverType){

                if(typeof(serverType) != 'undefined' && serverType === SgtApi.Announcement.ALLSERVER){
                    _url = SgtApi.context.appGateway  + '/announcement';
                }else{
                    _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/announcement.do';
                }
                return _url;
            },
            /**
             * 通过公告类型获取最新全服公告 （获取版本号最大的）
             * @param {int}type 公告类型
             * @param {Function}callback 回调函数
             * @return Announcement
             */
            getAllServerAnnounceByType: function (type, callback) {
                var name = 'getAnnounceByType';
                var data = [type , SgtApi.context.appId];
                _url = this.getRequestUrlByServerType(SgtApi.Announcement.ALLSERVER);
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 通过公告类型获取当前服务器最新公告 （获取版本号最大的）
             * @param {int}type 公告类型
             * @param {Function}callback 回调函数
             * @return Announcement
             */
            getAnnounceByType: function (type, callback) {
                var name = 'getAnnounceByType';
                var data = [type];
                _url = this.getRequestUrlByServerType(SgtApi.Announcement.SINGLESERVER);
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 活动业务接口
     *
     * @module  CampaignService
     * @type {{}|*}
     */
    SgtApi.CampaignService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/campaign.do';
        return {

            /**
             * 获取当前已经激活的活动
             * @param callback 回调函数
             * @return campaign[]
             */
            getAvailableCampaigns: function (callback) {
                var name = 'getAvailableCampaigns';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 通过时间区间获取活动
             * @param startTime{number} 开始时间
             * @param endTime{number} 结束时间
             * @param callback 回调函数
             * @return campaign[]
             */
            getByTimeZone: function (startTime, endTime, callback) {
                var name = 'getByTimeZone';
                var data = [startTime, endTime];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 通过活动ID获取活动
             * @param id{int} 活动ID
             * @param callback 回调函数
             * @return campaign
             */
            getCampaignById: function (campaignId, callback) {
                var name = 'getCampaignById';
                var data = [campaignId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过活动ID获取活动详情数据
             * @param id{int} 活动id
             * @param callback 回调函数
             * @return callback
             */
            getCampaignDetailByCampaignId: function (campaignId, callback) {
                var name = 'getCampaignDetaiByCId';
                var data = [campaignId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过活动详情ID获取活动详情数据
             * @param id{int} 活动详情ID
             * @param callback 回调函数
             * @return campaignDetail
             */
            getCampaignDetailByCampaignDetailId: function (campaignDetailId, callback) {
                var name = 'getCampaignDetaiById';
                var data = [campaignDetailId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取进度
             * @param campaignId{int} 活动id
             * @param playerId{string}
             * @param callback 回调函数
             * @return number
             */
            getCampaignProgress: function (campaignId, playerId, callback) {
                var name = 'getCampaignProgress';
                var data = [campaignId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 更新进度
             * @param campaignId{int} 活动id
             * @param playerId{string}
             * @param progress{int} 进度
             * @param callback 回调函数
             * @return number
             */
            updateProgress: function (campaignId, playerId, progress, callback) {
                var name = 'updateProgress';
                var data = [campaignId, playerId, progress];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 签到接口(已启用,请参考最新的CheckinBoardService)
     * @module  CheckinBoardService
     * @type {{}|*}
     */
    SgtApi.CheckinBoardService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/checkinboard.do';
        return {
            /**
             * 签到
             *
             * @param callback
             * @return callback
             */
            checkin: function (playerId, checkinBoardId, callback) {
                var name = 'checkin';
                var data = [playerId, checkinBoardId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取最大累计签到数
             *
             * @param callback
             * @return callback
             */
            accumulateCount: function (playerId, checkinBoardId, callback) {
                var name = 'accumlateCount';
                var data = [playerId, checkinBoardId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取连续签到数
             *
             * @param callback
             * @return callback
             */
            continuousCount: function (playerId, checkinBoardId, callback) {
                var name = 'countinuousCount';
                var data = [playerId, checkinBoardId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 通过CheckInBoardId获取签到板实体数据
             *
             * @param callback
             * @return callback
             */
            getCheckinBoardByCheckinBoardId: function (checkinBoardId, callback) {
                var name = 'getCheckinboardByChekinboardId';
                var data = [checkinBoardId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取最后签到时间
             * @param callback
             * @return callback
             */
            getLastCheckinTime: function (playerId, checkinBoardId, callback) {
                var name = 'getLastCheckinTime';
                var data = [playerId, checkinBoardId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取奖励
             * @param callback
             * @return callback
             */
            getRewardByCheckinBoardId: function (checkinBoardId, callback) {
                var name = 'getRewardByChekinboardId';
                var data = [checkinBoardId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 补签
             * @param times{int} 补签次数
             * @param callback
             */
            setCheckinTimes: function (playerId, checkinBoardId, times, callback) {
                var name = 'setCheckinTimes';
                var data = [playerId, checkinBoardId, times];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 判断是否可以签到
             * @param callback
             * @return callback
             */
            validateCheckin: function (playerId, checkinBoardId, callback) {
                var name = 'validateCheckin';
                var data = [playerId, checkinBoardId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取当前可用（有效时间内）的签到板
             * @param callback
             * @return callback
             */
            getAvailableCheckinBoards: function (callback) {
                var name = 'getAvailableChekinboards';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据自定义标签获取当前可用（有效时间内）的签到板
             * @param tag{string} 自定义标签
             * @param callback
             */
            getAvailableCheckinBoardsByTag: function (tag, callback) {
                var name = 'getAvailableChekinboardsByTag';
                var data = [tag];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据类型获取当前可用（有效时间内）的签到板
             * @param type
             * @param callback
             * @return callback
             */
            getAvailableCheckinBoardsByType: function (type, callback) {
                var name = 'getAvailableChekinboardsByType';
                var data = [type];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 日常任务接口
     * @module  DailyTaskService
     * @type {{}|*}
     */
    SgtApi.DailyTaskService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/dailytask.do';
        return {
            /**
             * 提交任务进度，每提交一次，任务进度+1
             * @param taskId{string} 任务ID
             * @param playerId{string}
             * @param callback 回调函数
             * @return dailyTask
             */
            executeTask: function (taskId, playerId, callback) {
                var name = 'excuteTask';
                var data = [taskId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过type提交任务，每提交一次，任务进度+1 type只能对应1或0个任务
             * @param type{string} 任务的type类型
             * @param playerId{String}
             * @param callback 回调函数
             * @return dailyTask[]
             */
            executeTasksByType: function (type, playerId, callback) {
                var name = 'excuteTasksByType';
                var data = [type, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 增加指定类型的任务进度
             * @param type{string} 任务类型
             * @param playerId{String}
             * @param progress{int} 任务进度
             * @param callback 回调函数
             * @return dailyTask[]
             */
            addExecuteTasksByType: function (type, playerId, progress, callback) {
                var name = 'excuteTasksByType';
                var data = [type, playerId, progress];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取每天的日常任务
             * @param playerId{string}
             * @param callback 回调函数
             * @return dailyTask[]
             */
            getDailyTasks: function (playerId, callback) {
                var name = 'getDailyTasks';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过类型获取指定角色可以进行的任务
             * @param type{string} 任务类型
             * @param callback 回调函数
             * @return dailyTask[]
             */
            getDailyTasksByType: function (playerId, type, callback) {
                var name = 'getDailyTasksByType';
                var data = [playerId, type];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 根据任务ID获取奖励 获取奖励时会先校验完成任务的进度
             * @param taskId{string} 任务ID
             * @param playerId{string}
             * @param callback 回调函数
             * @return string
             */
            getReward: function (taskId, playerId, callback) {
                var name = 'getReward';
                var data = [taskId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 提交指定任务进度
             * @param playerId{string}
             * @param taskId{string} 任务ID
             * @param progress{number} 进度
             * @param callback 回调函数
             * @return dailyTask
             */
            setTaskProgress: function (playerId, taskId, progress, callback) {
                var name = 'setTaskProgress';
                var data = [playerId, taskId, progress];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 设置指定类型的任务进度
             * @param type{string} 任务类型
             * @param playerId{string}
             * @param progress{number} 任务进度
             * @param callback 回调函数
             * @return dailyTask
             */
            setTasksProgressByType: function (type, playerId, progress, callback) {
                var name = 'setTasksProgressByType';
                var data = [type, playerId, progress];
                SgtApi.doRPC(name, data, _url, callback);
            }

        };
    };

    /**
     * 通用任务模块业务接口（预留）
     * @module  TaskService
     * @type {{}|*}
     */
    SgtApi.TaskService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/task.do';
        return {
            /**
             * 对playerId的actionType的计数器做增加1
             * @param playerId{string}
             * @param actionType{string} 与计数器type相对应，不能为空
             * @param callback{function} 回调函数
             * @return object
             */
            addActionCount: function (playerId, actionType, callback) {
                var name = 'addActionCount';
                var data = [playerId, actionType];

                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             *对playerId的actiontype的计数器做增加固定值
             * @param playerId{string}
             * @param actiontype{string}
             * @param addtodayTimes{number}
             * @param object
             */
            addActionCountTime: function (playerId, actionType, addtodayTimes, callback) {
                var name = 'addActionCount';
                var data = [playerId, actionType, addtodayTimes];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据任务ID完成任务 仅完成任务，并不获得奖励
             * @param playerId{string}
             * @param taskId{string} 任务id
             * @param callback{function] 回调函数
             * @return null
             */
            complete: function (playerId, taskId, callback) {
                var name = 'complete';
                var data = [playerId, taskId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据成就ID获取成就信息
             * @param achievementId{string} 成就ID
             * @param callback{function} 回调函数
             * @return task
             */
            getAchievementById: function (achievementId, callback) {
                var name = 'getAchievementById';
                var data = [achievementId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据playerid获取所有可用的成就 若任务设置了做完后不显示则不会被返回
             * @param playerId{string}
             * @param actiontype{string}
             * @param callback{function} 回调函数
             * @return task[]
             */
            getAchievements: function (playerId, actionType, callback) {
                var name = 'getAchievements';
                var data = [playerId, actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取所有可用的成就 若任务设置了做完后不显示则不会被返回
             * @param actiontype{string}
             * @param callback{function} 回调函数
             * @return task[]
             */
            getAchievementsByType: function (actionType, callback) {
                var name = 'getAchievementsByType';
                var data = [actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据指定的playerid获取特定的actiontype的任务
             * @param playerId{string}
             * @param actiontype{string} 与计数器type相对应，不能为空
             * @param callback
             * @return object
             */
            getActionCount: function (playerId, actiontype, callback) {
                var name = 'getActionCount';
                var data = [playerId, actiontype];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取所有可用的成就 若任务设置了做完后不显示则不会被返回
             * @param callback{function} 回调函数
             * @return task[]
             */
            getAllAchievements: function (callback) {
                var name = 'getAllAchievements';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
             * @param callback{function} 回调函数
             * @return task[]
             */
            getAllDailyTasks: function (callback) {
                var name = 'getAllDailyTasks';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取所有可用的task 若任务设置了做完后不显示则不会被返回
             * @param taskType{int}  0-成就，1-日常任
             * @param callback{function} 回调函数
             * @return task[]
             */
            getAllTasks: function (taskType, callback) {
                var name = 'getAllTasks';
                var data = [taskType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定角色已领取奖励的成就
             * @param playerId{string}
             * @param actiontype{string}
             * @param task[]
             */
            getCompleteAchievements: function (playerId, actionType, callback) {
                var name = 'getCompleteAchievements';
                var data = [playerId, actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定角色已领取奖励的日常任务
             * @param playerId{string}
             * @param actiontype{string} 传入null时将不对type进行筛选
             * @param callback
             * @return callback
             */
            getCompleteDailyTasks: function (playerId, actionType, callback) {
                var name = 'getCompleteDailyTasks';
                var data = [playerId, actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定类型该角色已经完成且还未领取奖励的Task 若任务设置了做完后不显示则不会被返回
             * @param taskType{string} 传入null时将不对tasktype进行筛选
             * @param playerId{string} 角色id
             * @param actiontype{string} 传入null时将不对actiontype进行筛选
             * @param callback{function} 回调函数
             * @return task[]
             */
            getCompleteTasks: function (taskType, playerId, actionType, callback) {
                var name = 'getCompleteTasks';
                var data = [taskType, playerId, actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据成就ID获取成就信息
             * @param dailyTaskId{string} 成就ID
             * @param callback{function} 回调函数
             * @return task
             */
            getDailyTaskById: function (dailyTaskId, callback) {
                var name = 'getDailyTaskById';
                var data = [dailyTaskId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据playerid获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
             * @param playerId{string} 角色id
             * @param actiontype{string}
             * @param callback{function} 回调函数
             * @return task[]
             */
            getDailyTasks: function (playerId, actionType, callback) {
                var name = 'getDailyTasks';
                var data = [playerId, actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
             * @param actiontype{string}
             * @param callback
             * @return task[]
             */
            getDailyTasksByType: function (actionType, callback) {
                var name = 'getDailyTasksByType';
                var data = [actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定角色已经达成的成就
             * @param playerId{string} 角色id
             * @param actiontype{string}
             * @param callback{function} 回调函数
             * @return task[]
             */
            getDoneAchievements: function (playerId, actionType, callback) {
                var name = 'getDoneAchievements';
                var data = [playerId, actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定角色已经达成的日常任务
             * @param playerId{string} 角色id
             * @param actiontype{string}
             * @param callback{function} 回调函数
             * @return task[]
             */
            getDoneDailyTasks: function (playerId, actionType, callback) {
                var name = 'getDoneDailyTasks';
                var data = [playerId, actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定类型该角色已经领取过奖励的Task
             * @param taskType{string} 传入null时将不对tasktype进行筛选
             * @param playerId{string} 角色id
             * @param actiontype{string} 传入null时将不对actiontype进行筛选
             * @param callback{function} 回调函数
             * @return task[]
             */
            getDoneTasks: function (taskType, playerId, actionType, callback) {
                var name = 'getDoneTasks';
                var data = [taskType, playerId, actionType];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据任务ID获取奖励 获取奖励时会先校验完成任务的进度
             * @param playerId{string} 角色id
             * @param taskId{string} 任务ID
             * @param callback{function} 回调函数
             * @return string
             */
            getReward: function (playerId, taskId, callback) {
                var name = 'getReward';
                var data = [playerId, taskId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据ID获取指定Task
             * @param taskId{string} 任务id
             * @param callback{function} 回调函数
             * @return task
             */
            getTaskById: function (taskId, callback) {
                var name = 'getTaskById';
                var data = [taskId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据playerid获取所有可用的task 若任务设置了做完后不显示则不会被返回
             * @param taskType{string}
             * @param playerId{string}
             * @param actiontype{string}
             * @return task[]
             */
            getTasks: function (taskType, playerId, actiontype, callback) {
                var name = 'getTasks';
                var data = [taskType, playerId, actiontype];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 根据参数获取可用task 若任务设置了做完后不显示则不会被返回
             * @param taskType{string} 传入null时将不对tasktype进行筛选
             * @param playerId{string} 角色id
             * @param actiontype{string} 传入null时将不对actiontype进行筛选
             * @param status{number[]}
             * @param callback{function} 回调函数
             * @return task[]
             */
            getTasksStatus: function (taskType, playerId, actiontype, status, callback) {
                var name = 'getTasks';
                var data = [taskType, playerId, actiontype, status];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取所有可用的task 若任务设置了做完后不显示则不会被返回
             * @param taskType{string} 传入null时将不对tasktype进行筛选
             * @param actiontype{string} 传入null时将不对actiontype进行筛选
             * @param callback{function} 回调函数
             * @return task[]
             */
            getTasksByType: function (taskType, actiontype, callback) {
                var name = 'getTasksByType';
                var data = [taskType, actiontype];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 好友业务接口
     * @module  FriendshipService
     * @type {{}|*}
     */
    SgtApi.FriendshipService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/friendship.do';
        return {
            /**
             * 自己作为被邀请者接受好友邀请
             * @param sendIds{string[]}
             * @param receiveId{string}
             * @param callback{function} 回调函数
             * @return null
             */
            acceptInvite: function (sendIds, receiveId, callback) {
                var name = 'acceptInvite';
                var data = [sendIds, receiveId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 自己作为被邀请者批量确认/接受好友关系，并发送邮件
             * @param sendIds{string[]}
             * @param receiveId{string}
             * @param mail{email}
             * @return null
             */
            acceptInviteByMail: function (sendIds, receiveId, mail, callback) {
                var name = 'acceptInvite';
                var data = [sendIds, receiveId, mail];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取拒绝自己的请求
             * @param page{int} 页码，1表示第一页
             * @param limit{int} 每页显示数量
             * @param myId{string} 自己的角色ID
             * @param callback
             * @return player[]
             */
            getDenied: function (page, limit, myId, callback) {
                var name = 'getDenied';
                var data = [page, limit, myId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过playerId获取该角色的好友数量
             * @param playerId{string} 角色id
             * @param callback
             * @return callback
             */
            getFrindsCount: function (playerId, callback) {
                var name = 'getFrindsCount';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取邀请自己的player
             * @param receiveId{string}
             * @param callback{function} 回调函数
             * @return player[]
             */
            getInvite: function (receiveId, callback) {
                var name = 'getInvite';
                var data = [receiveId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定用户的好友(已确认)列表
             * @param page{int} 页码 1为第一页
             * @param limit{int} 每页显示的数量
             * @param playerId{string} 角色id
             * @param callback{function} 回调函数
             * @return player[]
             */
            getMyFriends: function (page, limit, playerId, callback) {
                var name = 'getMyFriends';
                var data = [page, limit, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取还未确认邀请的player
             * @param sendId{string}
             * @param callback
             * @return player[]
             */
            getNotConfirm: function (sendId, callback) {
                var name = 'getNotConfirm';
                var data = [sendId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 批量邀请加好友（状态为未确认
             * @param sendId{string}
             * @param receiveId{string[]}
             * @param callback
             * @return null
             */
            invite: function (sendId, receiveId, callback) {
                var name = 'invite';
                var data = [sendId, receiveId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 批量邀请加好友，并发送邮件通知
             * @param sendId{string}
             * @param receiveId{string[]}
             * @param mails{mail[]}
             * @param callback
             */
            inviteByMails: function (sendId, receiveId, mails, callback) {
                var name = 'invite';
                var data = [sendId, receiveId, mails];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 判断对方是否是自己的好友
             * @param myId{string}
             * @param otherId{string[]}
             * @param callback
             * @return boolean
             */
            isMyfriend: function (myId, otherId, callback) {
                var name = 'isMyfriend';
                var data = [myId, otherId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 拒绝好友申请
             * @param sendId{string[]} 邀请者的角色ID集合
             * @param receiveId{string} 被邀请者的ID（一般为自己的ID）
             * @param callback{function} 回调函数
             * @return boolean
             */
            refuse: function (sendId, receiveId, callback) {
                var name = 'refuse';
                var data = [sendId, receiveId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 批量解除好友关系
             * @param playerId{string} 发起请求的角色ID
             * @param unfriendId{string/string[]} 要解除好友关系的角色IDs
             * @param callback{function} 回调函数
             * @return null
             */
            unfriend: function (playerId, unfriendId, callback) {
                var name = 'unfriend';
                var data = [playerId, unfriendId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 好友关系扩展业务
     * @module  FriendshipExtraService
     * @type {{}|*}
     */
    SgtApi.FriendshipExtraService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/friendshipextra.do';
        return {

            /**
             * 枚举自己（发起者）的（已验证）好友和key对应的扩展数据,支持分页
             * @param myPlayerId{string}
             * @param key{string} 扩展数据中的Key
             * @param start{int}
             * @param limit{int}
             * @param callback
             * @return friendshipExtra[]
             */
            getAllMyFriendsAndExt: function (myPlayerId, key, start, limit, callback) {
                var name = 'getAllMyFriendsAndExt';
                var data = [myPlayerId, key, start, limit];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取自己指定好友和扩展数据
             * @param myPlayerId
             * @param friendId{string} 好友id
             * @param callback
             * @return friendshipExtra
             */
            getMyFriendAndExt: function (myPlayerId, friendId, callback) {
                var name = 'getMyFriendAndExt';
                var data = [myPlayerId, friendId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 批量修改自己（发起者）所有好友关系扩展数据中key对应的value的值
             * @param myPlayerId
             * @param key{string} 扩展数据Key
             * @param value{string} 扩展数据的值
             * @param callback
             * @return null
             */
            updateAllMyFriendExt: function (myPlayerId, key, value, callback) {
                var name = 'updateAllMyFriendExt';
                var data = [myPlayerId, key, value];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 批量修改指定好友关系的扩展数据,中key对应的值将会替换现有value
             * @param myPlayerId
             * @param friendId{string} 好友id
             * @param newExt｛map<String,String>｝map
             * @param callback
             * @return null
             */
            updateMyFriendAllExt: function (myPlayerId, friendId, newExt, callback) {
                var name = 'updateMyFriendAllExt';
                var data = [myPlayerId, friendId, newExt];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 修改自己（发起者）某个好友关系扩展数据中key对应的value的值
             * @param myPlayerId
             * @param friendId{string} 好友id
             * @param key{string} 扩展数据Key
             * @param value{string} 扩展数据的值
             * @param callback
             * @return null
             */
            updateMyFriendExt: function (myPlayerId, friendId, key, value, callback) {
                var name = 'updateMyFriendExt';
                var data = [myPlayerId, friendId, key, value];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 黑名单业务接口
     * @module  BlackListService
     * @type {{}|*}
     */
    SgtApi.BlacklistService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/blacklist.do';
        return {
            /**
             * 将player添加到黑名单那
             * @param blackListId{string} 黑名单ID
             * @param playerId{string} 角色ID
             * @param callback
             * @return boolean
             */
            addPlayerIntoBlacklist: function (blacklistId, playerId, callback) {
                var name = 'addPlayerIntoBlacklist';
                var data = [blacklistId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 判断是否在黑名单之中
             * @param blacklistId{string} 黑名单自定义ID
             * @param playerId{string} 玩家的角色ID
             * @param callback
             * @return boolean
             */
            isInBlacklist: function (blacklistId, playerId, callback) {
                var name = 'isInBlacklist';
                var data = [blacklistId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 抽奖业务接口
     * @module  GachaBoxService
     * @type {{}|*}
     */
    SgtApi.GachaBoxService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/gachabox.do';
        return {


            /**
             * 有自动修正的连抽
             * @param playerId
             * @param gachaBoxId{int} 抽奖ID
             * @param num{int} 抽奖次数
             * @param callback
             * @return string[]
             */
            autoBalanceDraw: function (playerId, gachaBoxId, num, callback) {
                var name = 'autobalanceDraw';
                var data = [playerId, gachaBoxId, num];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 指定初始品质的自动修正连抽
             * @param playerId
             * @param gachaBoxId{int} 抽奖ID
             * @param num{int} 抽奖次数
             * @param [initQuality]{int} 初始品质
             * @param callback
             * @return gachaBoxResult
             */
            autoBalanceDrawQuality: function (playerId, gachaBoxId, num, quality, callback) {
                var name = 'autobalanceDraw';
                var data = [playerId, gachaBoxId, num, quality];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 指定初始品质和最大品质的自动修正连抽
             * @param playerId
             * @param gachaBoxId{int} 抽奖ID
             * @param num{int} 抽奖次数
             * @param [initQuality]{int} 初始品质
             * @param maxQuality{int}
             * @param callback
             * @return gachaBoxResult
             */
            autoBalanceDrawMaxQuality: function (playerId, gachaBoxId, num, quality, maxQuality, callback) {
                var name = 'autobalanceDraw';
                var data = [playerId, gachaBoxId, num, quality, maxQuality];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 连续抽奖N次，N为数组qualities的元素个数，一个qualities元素对应一次抽奖
             * @param playerId
             * @param gachaBoxId{int} 抽奖ID
             * @param quality{int/Array} 品质/品质数组
             * @param callback
             * @return string[]
             */
            draw: function (playerId, gachaBoxId, quality, callback) {
                var name = 'draw';
                var data = [playerId, gachaBoxId, quality];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取当前所有有效的GachaBox
             * @param callback
             * @return gachaBox[]
             */
            getAvailableGachaBox: function (callback) {
                var name = 'getAvailableGachaBox';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定名称的GachaBox
             * @param gachaBoxname{String} GachaBoxName
             * @param gachaBox
             */
            getGachaBoxByName: function (gachaBoxName, callback) {
                var name = 'getGachaBoxByName';
                var data = [gachaBoxName];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取指定gachaBox的奖品
             * @param gachaBoxId{string} 抽奖ID
             * @param callback
             * @return lottery[]
             */
            getLotteriesByGachaBoxId: function (gachaBoxId, callback) {
                var name = 'getLotteriesByGachaBoxId';
                var data = [gachaBoxId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 指定奖品品质总值的连抽
             * @param playerId
             * @param gachaBoxId{int} 抽奖ID
             * @param limitQuality{int} 指定奖品品质
             * @param callback
             */
            limitDraw: function (playerId, gachaBoxId, limitQuality, callback) {
                var name = 'limitDraw';
                var data = [playerId, gachaBoxId, limitQuality];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };
    /**
     * 排行榜接口
     * @module  LeaderboardService
     * @type {{}|*}
     */
    SgtApi.LeaderBoardService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/leaderboard.do';
        return {
            /**
             * 增加分数值
             * @param leaderId{String} 排行榜ID
             * @param playerId{string/string[]}
             * @param score{number/number[]} 增加的分数值
             * @param callback
             * @return boolean/boolean[]
             */
            addUpLeaderBoardScore: function (leaderId, playerId, score, callback) {
                var name = 'addUpLeaderBoardScore';
                var data = [leaderId, playerId, score];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过排行榜的leaderBoardID获取leaderBoard信息
             * @param leaderId{String} 排行榜LeaderBoardId
             * @param callback
             * @return leaderBoard
             */
            getLeaderBoardByLeaderId: function (leaderId, callback) {
                var name = 'getLeaderBoardByLeaderId';
                var data = [leaderId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过排行榜ID和角色ID获取该角色的排行榜（返回集合）
             * @param leaderId{string} 排行榜ID
             * @param player
             * @param callback
             * @return leaderBoardScore[]
             */
            getLeaderBoardScoreByExample: function (leaderId, player, callback) {
                var name = 'getLeaderBoardScoreByExample';
                var data = [leaderId, player];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过排行榜ID和角色ID获取该角色的排行榜
             * @param leaderId{string} 排行榜ID
             * @param playerId{string} 角色ID
             * @param callback
             * @return leaderBoardScore
             */
            getLeaderBoardScoreByLeaderIdAndPlayerId: function (leaderId, playerId, callback) {
                var name = 'getLeaderBoardScoreByLeaderIdAndPlayerId';
                var data = [leaderId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 如果我是第一名则返回我和后面4位 如果不是第一名则返回我前面一位+我+后面3位 如果我是最后一名则返回我前面四位+我
             * @param leaderId
             * @param playerId
             * @param callback
             * return leaderBoardScore[]
             */
            getLeaderBoardScoresByLeaderIdAndPlayerId: function (leaderId, playerId, callback) {
                var name = 'getLeaderBoardScoresByLeaderIdAndPlayerId';
                var data = [leaderId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过排行榜ID和排名获取排行榜集合 start从0开始，第一名的值是0 取前两名的则 start为0，limit为2 取第二名到第五名则start为1，limit为4 即：start的值为排名减1 如果取该排行榜中所有的排名 start和limit的值分别为：0 , -1
             * @param leaderId{String} 排行榜ID
             * @param start{int} 排名的起始位置（从0开始，第一位是0）
             * @param limit{int} 排名的结束位置
             * @param callback
             * @return leaderBoardScore[]
             */
            getTopLeaderBoardScoreByLeaderId: function (leaderId, start, limit, callback) {
                var name = 'getTopLeaderBoardScoreByLeaderId';
                var data = [leaderId, start, limit];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 更新排行榜数值
             * @param leaderId{String} 排行榜ID
             * @param playerId{string/string[]}
             * @param score{number/number[]} 分数值
             * @param callback
             * @return boolean/boolean[]
             */
            submitLeaderBoardScore: function (leaderId, playerId, score, callback) {
                var name = 'submitLeaderBoardScore';
                var data = [leaderId, playerId, score];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 邮件接口
     * @module  MailService
     * @type {{}|*}
     */
    SgtApi.MailService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/mail.do';
        return {


            /**
             * 发送一封邮件
             * @param mail{mail} mail对象
             * @param callback
             * @return callback
             */
            sendMail: function (mail, callback) {
                if (mail.title === '' || mail.title === null) {
                    return callback(false, '邮件标题不能为空！');
                }
                if (mail.toId === '' || mail.toId === null) {
                    return callback(false, '收邮件人ID不能为空！');
                }
                if (mail.toName === '' || mail.toName === null) {
                    return callback(false, '收邮件人名字不能为空！');
                }
                if (mail.fromId === '' || mail.fromId === null) {
                    return callback(false, '发件人ID不能为空！');
                }
                if (mail.type != SgtApi.Mail.TYPE_SYSTEM && (mail.fromName === '' || mail.fromName === null)) {
                    return callback(false, '发件人名字不能为空！');
                }
                var name = 'send';
                var data = [mail];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 接收邮件
             * @param start{int} 开始页
             * @param limit{int} 每页显示的条数
             * @param status{int} 邮件状态
             * @param callback
             * @return callback
             */
            receive: function (start, limit, playerId, status, callback) {
                if (start < 0 || start === null) {
                    start = 1;
                }
                if (limit < 0 || limit === null) {
                    limit = 5;
                }

                var name = 'receive';
                var data = [start, limit, playerId, status];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 接收未读取的邮件
             * @param callback
             * @return callback
             */
            receiveUnread: function (timestamp, playerId, callback) {
                var name = 'receiveUnread';
                var data = [timestamp, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 阅读邮件/批量阅读邮件
             * @param id{int} 邮件ID/邮件ID集合[int]
             * @param callback
             * @return callback
             */
            readMail: function (mailId, callback) {
                if (mailId === null) {
                    return callback(false, 'ID为空！');
                }
                var name = 'read';
                var data = [mailId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 阅读一封邮件并领取附件
             * @param mailId{int} 邮件ID
             * @param callback
             * @return callback
             */
            readAndPickAttachment: function (mailId, callback) {
                var name = 'readAndPickAttachment';
                var data = [mailId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 删除封邮件/批量删除邮件
             * @param mailId{int} 邮件ID/邮件ID集合[int]
             * @param callback
             * @return callback
             */
            deleteMail: function (mailId, callback) {
                if (mailId === null) {
                    return callback(false, 'ID为空！');
                }
                var name = 'delete';
                var data = [mailId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取所有未读和已读的邮件集合
             * @param callback
             * @return callback
             */
            getReadedAndUnreadedMails: function (playerId, callback) {
                var name = 'getReadedAndUnreadedMails';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 领取邮件附件
             * @param mailId{int} 邮件ID
             * @param callback
             */
            pickAttachment: function (mailId, callback) {
                var name = 'pickAttachment';
                var data = [mailId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 通知模块业务
     * @module  NotificationService
     * @type {{}|*}
     */
    SgtApi.NotificationService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/notification.do';
        return {
            getLatestNotification: function (playerId, callback) {
                var name = 'getLatestNotification';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取最新状态的通知/获取某时间之后的通知
             * @param [time]{long} 时间戳（可选）
             * @param callback
             * @return callback
             */
            getLatestNotificationByTime: function (playerId, time, callback) {
                var name = 'getLatestNotification';
                var data = [playerId, time];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 充值业务逻辑
     * @module  PurchaseService
     * @type {{}|*}
     */
    SgtApi.PurchaseService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/purchase.do';
        return {
            /**
             * 获取服务器支持的支付渠道
             * @param callback
             * @return callback
             */
            getSupportedStores: function (callback) {
                var name = 'getSupportedStores';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取玩家当前可用的充值信息，不包括不可见或达到购买次数限制的充值信息
             * @param callback
             */
            getAvailableChargePoints: function (playerId, callback) {
                var name = 'getAvailableChargePoints';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取充值结果，该接口负责去第三方查询支付结果或获取第三方回调信息，根据支付结果，来调用游戏业务逻辑
             * 支付成功，会调用PaymentCallback.doCallback执行游戏的业务逻辑（如加元宝、积分等）
             * 同时，sgt还记录了玩家的充值记录ChargeLog，充值次数等信息
             * @param transaction
             * @param callback
             * @return callback
             */
            getPaymentResult: function (playerId, transaction, callback) {
                var name = 'getPaymentResult';
                var data = [playerId, transaction];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取玩家的累计充值金额，若玩家未充值过，则返回0
             * @param callback
             * @return callback
             */
            getTotalChargeCost: function (playerId, callback) {
                var name = 'getTotalChargeCost';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 判断玩家某个计费点是否是首冲
             * @param customChargePointId{string} 自定义的计费点ID
             * @param callback
             * @return callback
             */
            isFirstCharge: function (playerId, customChargePointId, callback) {
                var name = 'isFirstCharge';
                var data = [playerId, customChargePointId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取玩家某个计费点的充值次数
             * @param customChargePointId{string} 自定义计费点ID
             * @param callback
             * @return callback
             */
            getChargeTimes: function (playerId, customChargePointId, callback) {
                var name = 'getChargeTimes';
                var data = [playerId, customChargePointId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 商城业务接口
     * @module  StoreService
     * @type {{}|*}
     */
    SgtApi.StoreService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/store.do';
        return {
            /**
             * 获取默认的商城
             * @param callback
             * @return callback
             */
            getDefaultStore: function (playerId, callback) {
                var name = 'getDefaultStore';
                var data = [playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据商城ID获得商城，包含了商城中的所有物品，但物品购买冷却时间未设置
             * @param storeId{String} 商城ID
             * @param callback
             * @return callback
             */
            getStore: function (storeId, playerId, callback) {
                var name = 'getStore';
                var data = [storeId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 购买指定的商品，如果使用游戏币购买，那么在购买前需要同步服务器端的游戏币
             * @param {string} palyerId 角色信息
             * @param storeId{string} 商城ID
             * @param itemId{int} 物品ID
             * @param amounts{number} 购买数量
             * @param ckret 如果为true，则需要返回一个订单id（即did），网游一般需要来操作
             * @param callback
             * @return callback
             */
            purchase: function (playerId, storeId, itemId, amounts, ckret, callback) {
                var name = 'purchase';
                var data = [playerId, storeId, itemId, amounts, ckret];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取角色在指定商店的购买次数
             * @param storeId{string} 商城ID
             * @param callback
             * @return callback
             */
            countStoreOrdersByPlayerId: function (playerId, storeId, callback) {
                var name = 'countStoreOrdersByPlayerId';
                var data = [playerId, storeId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取角色购买某个商品的次数
             * @param storeId{string} 商城ID
             * @param itemId{int} 物品ID
             * @param callback
             * @return callback
             */
            countItemOrdersByPlayerId: function (playerId, storeId, itemId, callback) {
                var name = 'countItemOrdersByPlayerId';
                var data = [playerId, storeId, itemId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 查询购买记录
             * @param storeId{int} 记录ID
             * @param callback
             * @return callback
             */
            getOrderById: function (storeId, callback) {
                var name = 'getOrderById';
                var data = [storeId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取角色最近购买某个商品的时间的毫秒数
             * @param storeId{string} 商城ID
             * @param itemId{int} 物品ID
             * @param callback
             * @return callback
             */
            getLastPurchaseTimeMillis: function (playerId, storeId, itemId, callback) {
                var name = 'getLastPurchaseTimeMillis';
                var data = [playerId, storeId, itemId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 支付回调接口，对订单状态进行更新
             * @param did{string} DID
             * @param success{bool} 支付是否成功 [true 成功 false 失败]
             * @param callbackMessage{string} 回调信息，可选
             * @param callback
             * @return callback
             */
            updateOrderStatus: function (did, success, callbackMessage, callback) {
                var name = 'updateOrderStatus';
                var data = [did, success, callbackMessage];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 计费点业务
     * @module  ChargePointService
     * @type {{}|*}
     */
    SgtApi.ChargePointService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/chargepoint.do';
        return {
            /**
             * 获取所有计费点
             * @param  {Function} callback 回调函数
             * @return {ChargePoint[]}
             */
            getAllChargePoints: function (callback) {
                var name = 'getAllChargePoints';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取当前可用的计费点
             * @param  {Function} callback 回调函数
             * @return {ChargePoint[]}
             */
            getAvailableChargePoints: function (callback) {
                var name = 'getAvailableChargePoints';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * BOSS业务接口
     * @module  BossService
     * @type {{}|*}
     */
    SgtApi.BossService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/boss.do';
        return {
            /**
             * 通过id字符串获取boss数组
             * @param ids{string} 若干个id拼成的字符串，用逗号隔开
             * @param callback
             * @return callback
             */
            getByBossIdstr: function (ids, callback) {
                var name = 'getByBossIds';
                var data = [ids];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 批量获取boss数据
             * @param id{int}  bossId数组[int]
             * @param callback
             * @return callback
             */
            getByBossIdint: function (id, callback) {
                var name = 'getByBossIds';
                var data = [id];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 通过bossId获取Boss实体
             * @param id{int} BossId
             * @param callback
             * @return callback
             */
            getByBossId: function (id, callback) {
                var name = 'getByBossId';
                var data = [id];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 更新boss血量
             * @param bossId{int} BossId
             * @param damage{int} 伤害量
             * @param callback
             * @return callback
             */
            attack: function (bossId, damage, playerId, callback) {
                var name = 'attack';
                var data = [bossId, damage, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取boss当前血量
             * @param bossId{int} BossId
             * @param callback
             * @return callback
             */
            getCurrentHP: function (bossId, playerId, callback) {
                var name = 'getCurrentHP';
                var data = [bossId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取最后击杀人
             * @param bossId{int} BossId
             * @param callback
             * @return callback
             */
            getLastAttackPlayer: function (bossId, callback) {
                var name = 'getLastAttackPlayer';
                var data = [bossId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 文件分发存储业务 此业务不提供创建/上传文件接口， 如有需要请在客户端中访问客户端sdk提供的接口
     * @module  FileStorageService
     * @type {{}|*}
     */
    SgtApi.FileStorageService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/filestorage.do';
        return {
            /**
             * 获取指定文件路径可访问的url
             * @param  {string}   fileName 文件路径/key值
             * @param  {Function} callback 回调函数
             * @return {string}
             */
            getUrl: function (fileName, callback) {
                var name = 'getUrl';
                var data = [fileName];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 删除文件
             * @param  {string}   fileName 文件路径/key值
             * @param  {Function} callback 回调函数
             * @return {boolean}            删除成功true,否则返回false
             */
            delete: function (fileName, callback) {
                var name = 'delete';
                var data = [fileName];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 礼包/兑换码业务接口
     * @module  GiftCodeService
     * @type {{}|*}
     */
    SgtApi.GiftCodeService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/giftcode.do';
        return {
            /**
             * 通过兑换码获取礼包详情
             * @param  {string}   code     兑换码
             * @param  {Function} callback 回调函数
             * @return {Gift}            礼包详情
             */
            getGiftByCode: function (code, callback) {
                var name = 'getGiftByCode';
                var data = [code];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取有效的礼包
             * @param  {Function} callback 回调函数
             * @return {Gift[]}            有效的礼包集合
             */
            getGifts: function (callback) {
                var name = 'getGifts';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取兑换记录， playerId和giftId至少有一个不为空。 playerId为null则返回该礼包的所有记录 giftId为null则返回该角色所有兑换记录
             * @param  {string}   playerId 角色ID
             * @param  {string}   giftId   礼包ID
             * @param  {number}   start    起始页码
             * @param  {number}   limit    每页显示条目数
             * @param  {Function} callback 回调函数
             * @return {GiftRecord[]}            GiftRecord 集合
             */
            getRecord: function (playerId, giftId, start, limit, callback) {
                var name = 'getRecord';
                var data = [playerId, giftId, start, limit];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 兑换并返回奖品
             * @param  {string}   playerId 角色ID
             * @param  {string}   code     兑换码
             * @param  {Function} callback 回调函数
             * @return {string}            奖品
             */
            redeem: function (playerId,  code, callback) {
                var name = 'redeem';
                var data = [playerId,  code];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 兑换并返回奖品
             * @param  {string}   playerId 角色ID
             * @param  {String}   giftId   礼包ID
             * @param  {string}   code     兑换码
             * @param  {Function} callback 回调函数
             * @return {string}            奖品
             */
            redeemByGiftId: function (playerId, giftId, code, callback) {
                var name = 'redeem';
                var data = [playerId, giftId,code];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 兑奖并使用邮件直接发送奖励给角色
             * @param  {string}   playerId 角色ID
             * @param  {string}   code     兑奖码
             * @param  {Function} callback 回调函数
             * @return {Gift}            成功返回gift，失败返回null
             */
            redeemGiftByCodeOverMail: function (playerId, code, callback) {
                var name = 'redeemGiftByCodeOverMail';
                var data = [playerId, code];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 兑换奖励，奖励通过邮件发送
             * @param  {string}   playerId 角色ID
             * @param  {string}   giftId   礼包ID
             * @param  {string}   code     兑换码
             * @param  {Function} callback 回调函数
             * @return {null}
             */
            redeemOverMail: function (playerId, giftId, code, callback) {
                var name = 'redeemOverMail';
                var data = [playerId, giftId, code];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };
    /**
     * 个人通道业务接口
     * @module  PrivateChannelService
     * @type {{}|*}
     */
    SgtApi.PrivateChannelService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/privatechannel.do';
        return {
            /**
             * 压入消息，同时会更新通道的ttl，如果ttl为0，则默认为一周
             * @param key{string} 通道key
             * @param message{string} 压入的消息
             * @param ttl{long} 存活时间，毫秒数
             * @param callback
             * @return callback
             */
            pushMessage: function (key, playerId, message, ttl, callback) {
                var name = 'pushMessage';
                var data = [key, playerId, message, ttl];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 批量压入消息，同时会更新通道的ttl，如果ttl为0，则默认为一周
             * @param key{string} 通道key
             * @param message{Array} 压入的消息[string]
             * @param ttl{long} 存活时间，毫秒数
             * @param callback
             */
            pushMessages: function (key, playerId, message, ttl, callback) {
                var name = 'pushMessages';
                var data = [key, playerId, message, ttl];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取消息，默认情况下消息在获取后会被删除
             * @param key{string} 通道key
             * @param callback
             * @return callback
             */
            popMessage: function (key, playerId, callback) {
                var name = 'popMessage';
                var data = [key, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取消息，可指定是否删除已获取的消息
             * @param key{string} 通道key
             * @param clear{bool} 是否清空消息， 清空消息 true 清空 false
             * @param ttl{long] 存活时间，毫秒数
             * @param callback
             * @return callback
             */
            popMessageBy: function (key, playerId, clear, ttl, callback) {
                var name = 'popMessage';
                var data = [key, playerId, clear, ttl];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 清空指定通道内的消息
             * @param key{string} 通道key
             * @param callback
             * @return callback
             */
            clearChannel: function (key, playerId, callback) {
                var name = 'clearChannel';
                var data = [key, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 公共通道业务接口
     * @module  PublicChannelService
     * @type {{}|*}
     */
    SgtApi.PublicChannelService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/publicchannel.do';
        return {
            /**
             * 创建公共通道
             * @param channelId{string} 通道ID
             * @param name{string} 通道名称
             * @param callback
             * @return callback
             */
            createChannel: function (channelId, channelName, callback) {
                var name = 'createChannel';
                var data = [channelId, channelName];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 压入消息
             * @param channelId{string} 通道ID
             * @param type{string} 消息类型
             * @param content{string} 消息内容
             * @param callback
             * @return callback
             */
            pushMessage: function (channelId, type, content, callback) {
                var name = 'pushMessage';
                var data = [channelId, type, content];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取所有消息
             * @param channelId{string} 通道ID
             * @param callback
             * @return callback
             */
            popAllMessage: function (channelId, callback) {
                var name = 'popAllMessage';
                var data = [channelId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取从指定时间到当前时间的消息/获取从指定时间区间的消息
             * @param channelId{string} 通道ID
             * @param createTimeStart{long} 消息创建时间
             * @param createTimeEnd{long} 消息创建截止时间(可选 null)
             * @param callback
             * @return callback
             */
            popMessage: function (channelId, createTimeStart, createTimeEnd, callback) {
                var name = 'popMessage';
                var data = [channelId, createTimeStart, createTimeEnd];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 返回最近创建的消息条数，如果要取的消息条数不够指定的条数，则返回实际的条数
             * @param mssgnum{int} 要取的消息的条数
             * @param channelId{string} 通道ID
             * @param callback
             */
            popMessageOrnum: function (mssgnum, channelId, callback) {
                var name = 'popMessage';
                var data = [mssgnum, channelId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取从指定时间区间的消息，如果要取的消息条数不够指定的条数，则返回实际的条数
             * @param channelId{string} 通道ID
             * @param createTimeStart{long} 消息创建开始时间
             * @param createTimeEnd{long} 消息创建截止时间
             * @param mssgnum{int} 要取的消息的条数
             * @param callback
             * @return callback
             */
            popMessageOrnumtim: function (channelId, createTimeStart, createTimeEnd, mssgnum, callback) {
                var name = 'popMessage';
                var data = [channelId, createTimeStart, createTimeEnd, mssgnum];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 清空指定通道内的消息
             * @param channelId{string} 通道ID
             * @param callback
             * @return callback
             */
            clearChannel: function (channelId, callback) {
                var name = 'clearChannel';
                var data = [channelId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 删除指定通道内的指定消息
             * @param channelId{string} 通道ID
             * @param messageIds{int} 消息ID
             * @param callback
             * @return callback
             */
            deleteMessage: function (channelId, messageIds, callback) {
                var name = 'deleteMessage';
                var data = [channelId, messageIds];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取指定消息的内容
             * @param messageIds{int} 消息ID
             * @param callback
             * @return callback
             */
            getMessageContent: function (messageIds, callback) {
                var name = 'getMessageContent';
                var data = [messageIds];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };
    /**
     * 第三方回调接口
     * @module  DelegateDidService
     * @type {{}|*}
     */
    SgtApi.DelegateDidService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/delegatedid.do';
        return {
            /**
             * 创建代理id（did）
             * @param appId{string} appId
             * @param serverId{string} 服务器ID
             * @param callback
             * @return callback
             */
            createDid: function (playerId, callback) {
                var name = 'createDid';
                var data = [SgtApi.context.server.id, SgtApi.context.user.userId, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据DID查询订单信息
             * @param did{string} 代理ID
             * @param callback
             * @return callback
             */
            queryByDid: function (did, callback) {
                var name = 'queryByDid';
                var data = [did];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 查找角色的历史订单
             * @param callback
             * @return callback
             */
            queryByCondition: function (playerId, callback) {
                var name = 'queryByCondition';
                var data = [SgtApi.context.server.id, playerId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 结构化数据业务接口
     * @module  StructuredDataService
     * @type {{}|*}
     */
    SgtApi.StructuredDataService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/structureddata.do';
        return {
            /**
             * 获取普通的StringValue
             * @param key{string} key
             * @param callback
             * @return callback
             */
            getValue: function (key, callback) {
                var name = 'getValue';
                var data = [key];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 添加或保存StringValue
             * @param key{string}
             * @param value{string}
             * @param callback
             * @return callback
             */
            saveOrUpdateValue: function (key, value, callback) {
                var name = 'saveOrUpdateValue';
                var data = [key, value];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取ListValue，返回数组
             * @param key{string}
             * @param callback
             * @return callback
             */
            getListValue: function (key, callback) {
                var name = 'getListValue';
                var data = [key];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 向List中添加一个值
             * @param key{string}
             * @param value{string}
             * @param callback
             * @return callback
             */
            addListValue: function (key, value, callback) {
                var name = 'addListValue';
                var data = [key, value];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 更新list中的一个值
             * @param key{string} key
             * @param newValue{string} 新值
             * @param oldValue{string} 老值
             * @param callback
             * @return callback
             */
            updateListValue: function (key, newValue, oldValue, callback) {
                var name = 'updateListValue';
                var data = [key, newValue, oldValue];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取Map
             * @param key{string} key
             * @param callback
             * @return callback
             */
            getMapValue: function (key, callback) {
                var name = 'getHashValue';
                var data = [key];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取Map中的Value
             * @param key{string} key
             * @param hashKey{string} Map中的key
             * @param callback
             * @return callback
             */
            getMapValueByHashKey: function (key, hashKey, callback) {
                var name = 'getHashValue';
                var data = [key, hashKey];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 保存或修改 Map
             * @param key{string} key
             * @param map{json}  Map
             * @param callback
             * @return callback
             */
            saveOrUpdateMap: function (key, map, callback) {
                var name = 'saveOrUpdateHashValue';
                var data = [key, map];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 保存或修改 Map
             * @param key{string} redis中的key
             * @param hashKey{string} Map中的key
             * @param value{string} Map中的key
             * @param callback
             * @return callback
             */
            setOrUpdateHashValue: function (key, hashKey, value, callback) {
                var name = 'saveOrUpdateHashValue';
                var data = [key, hashKey, value];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取set
             * @param key{string} key
             * @param callback
             * @return callback
             */
            getSetValue: function (key, callback) {
                var name = 'getSetValue';
                var data = [key];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 向set添加一个value
             * @param key{string}
             * @param value{string}
             * @param callback
             * @return callback
             */
            addSetValue: function (key, value, callback) {
                var name = 'addSetValue';
                var data = [key, value];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 修改set中的一个值
             * @param key{string} key
             * @param newValue{string} 新的值
             * @param oldValue{string} 待修改老值
             * @param callback
             * @return callback
             */
            updateSetValue: function (key, newValue, oldValue, callback) {
                var name = 'updateSetValue';
                var data = [key, newValue, oldValue];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取ZSet（默认正序排列）
             * @param key{string} key
             * @param callback
             * @return callback
             */
            getZSetValue: function (key, callback) {
                var name = 'getZSetValue';
                var data = [key];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 添加一个值到ZSet
             * @param key{string} key
             * @param value{string} 值
             * @param weight{double} 权值
             * @param callback
             * @return callback
             */
            addZSetValue: function (key, value, weight, callback) {
                var name = 'addZSetValue';
                var data = [key, value, weight];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 更新一个ZSet的老值
             * @param key{string} key
             * @param value{string} 新值
             * @param weight{double} 权值
             * @param oldValue{string} 老值
             * @param callback
             * @return callback
             */
            updateZSetValue: function (key, value, weight, oldValue, callback) {
                var name = 'updateZSetValue';
                var data = [key, value, weight, oldValue];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 通过权值获取 Zset
             * @param key{string} key
             * @param min{double} 最小值
             * @param max{double} 最大值
             * @param callback
             * @return callback
             */
            getZSetRangByScore: function (key, min, max, callback) {
                var name = 'getZSetRangByScore';
                var data = [key, min, max];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 通过List索引位置获取集合，返回数组
             * @param key{string} key
             * @param start{long} 开始
             * @param end{long} 结束
             * @param callback
             * @return callback
             */
            getListByIndex: function (key, start, end, callback) {
                var name = 'getListByIndex';
                var data = [key, start, end];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 从redis中删除一个key
             * @param key{string} key
             * @param callback
             * @return callback
             */
            remove: function (key, callback) {
                var name = 'remove';
                var data = [key];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 从指定key的set中删除一个value
             * @param key{string} key
             * @param value{string} value
             * @param callback
             * @return callback
             */
            removeFromSet: function (key, value, callback) {
                var name = 'removeFromSet';
                var data = [key, value];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 从hash中删除指定key的hashkey
             * @param key{string} key
             * @param hashKey{string} hash的key值
             * @param callback
             * @return callback
             */
            removeFromHash: function (key, hashKey, callback) {
                var name = 'removeFromHash';
                var data = [key, hashKey];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 判断value是否在指定key的set列表中
             * @param key{string} hashKey
             * @param value{string} value
             * @param callback
             * @return callback
             */
            containtSet: function (key, value, callback) {
                var name = 'containtSet';
                var data = [key, value];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 判断hashKey是否在指定key的hash散列中
             * @param key{string} key
             * @param hashKey{string} hashKey
             * @param callback
             * @return callback
             */
            containsHash: function (key, hashKey, callback) {
                var name = 'containsHash';
                var data = [key, hashKey];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 判断redis中是否存在指定key
             * @param key{string} key
             * @param callback
             * @return callback
             */
            containsKey: function (key, callback) {
                var name = 'containsKey';
                var data = [key];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };


    /**
     * 反馈举报 业务接口
     * @module  TicketService
     * @type {{}|*}
     */
    SgtApi.TicketService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/ticket.do';
        return {
            /**
             * 通过反馈者playerId获取 自己发起的反馈信息
             * @param page{int} 页码
             * @param size{int} 每页显示的条目数
             * @param status{int} 状态
             * @param callback
             * @return callback
             */
            getTicketsById: function (playerId, page, size, status, callback) {
                var name = 'getTicketsBySenderPlayerId';
                var data = [playerId, page, size, status];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 提交反馈
             * @param ticket{Ticket}
             * @param callback
             * @return callback
             */
            sendTicket: function (ticket, callback) {
                var name = 'sendTicket';
                var data = [ticket];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };


    /**
     *
     * @module  ErrorReportService
     * @type {{}|*}
     */
    SgtApi.ErrorReportService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/errorreport.do';
        return {
            /**
             * 发送错误自定义事件
             * @param type{string} 错误类型
             * @param customId{string} 自定义的ID，如战报ID
             * @param content{string} 自定义数据内容
             * @return callback
             */
            sendErrorReport: function (playerId, type, customId, content, callback) {
                var name = 'sendErrorReport';
                var data = [playerId, type, customId, content];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };
    /**
     * @module InvitationCodeService
     * @type {{}|*}
     */
    SgtApi.InvitationCodeService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/invitationcode.do';
        return {
            /**
             * 获取邀请码
             * @param playerId{string} 角色ID
             * @return callback
             */
            getInvitationCode: function (callback) {
                var name = 'getInvitationCode';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 被邀请人领取奖励
             * @param inviteePlayerId {string} 被邀请人角色ID
             * @param invitationCode{string}  邀请码
             * @return callback
             */
            getInviteeReward: function (inviteePlayerId, invitationCode, callback) {
                var name = 'getInviteeReward';
                var data = [inviteePlayerId, invitationCode];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 邀请人领取奖励
             * @param inviterPlayerId  {string} 邀请人角色ID
             * @return callback
             */
            getInviterReward: function (inviterPlayerId, callback) {
                var name = 'getInviterReward';
                var data = [inviterPlayerId];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 兑换邀请码奖励
             * 该方法会给被邀请人和邀请人都发放奖励
             * @param invitationCode  {string} 邀请码
             * @param inviterPlayerId   {string}  邀请人角色ID
             * @param inviteePlayerId    {string} 被邀请人角色ID
             * @return callback
             */
            redeemReward: function (invitationCode, inviterPlayerId, inviteePlayerId, callback) {
                var name = 'redeemReward';
                var data = [invitationCode, inviterPlayerId, inviteePlayerId];
                SgtApi.doRPC(name, data, _url, callback);
            },


            /**
             * 获取指定玩家邀请数量
             * @param inviterPlayerId   {string}
             * @return callback
             */
            getInviteCount: function (inviterPlayerId, callback) {
                var name = 'getInviteCount';
                var data = [inviterPlayerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 给指定玩家的邀请人发放奖励
             * @param inviteePlayerId    {string}   被邀请人角色ID
             * @return callback
             */
            redeemInviterReward: function (inviteePlayerId, callback) {
                var name = 'redeemInviterReward';
                var data = [inviteePlayerId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * @module PaymentCallbackService
     * @type {{}|*}
     */
    SgtApi.PaymentCallbackService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/paymentcallback.do';
        return {
            /**
             * 充值业务回调
             * @param transaction
             * @param callback
             */
            doCallback: function (transaction, callback) {
                var name = 'doCallback';
                var data = [transaction];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * @module RouterService
     * @type {{}|*}
     */
    SgtApi.RouterService = function () {
        var _url = SgtApi.context.appGateway + "/route";
        return {

            /**
             * 获取当前服务器时间戳
             * @param callback
             */
            getCurrentTimestamp: function (callback) {
                var name = 'getCurrentTimestamp';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取注册或登录的服务器 （随机返回）
             * @method getRegisterServer
             * @param callback
             */
            getRegisterServer: function (callback) {
                var name = 'getRegisterServer';
                var data = [SgtApi.context.appId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 批量获取服务器信息
             * @method getServerList
             * @param callback
             */
            getServerList: function (callback) {
                var name = 'getServerList';
                var data = [SgtApi.context.appId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 默认获取服务器信息方法（由策略决定）
             * @method route
             * @param map
             */
            route: function (map, callback) {
                var name = 'route';
                var data = [SgtApi.context.appId, map];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 时间戳业务接口
     * @module  TimestampService
     * @type {{}|*}
     */
    SgtApi.TimestampService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/timestamp.do';
        return {
            /**
             * 获取当前节点服务器的时间戳
             * @param callback
             */
            getCurrentTimestamp: function (callback) {
                var name = 'getCurrentTimestamp';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取一个时间戳 返回key对应的时间戳
             * @param sgpPlayerId
             * @param key
             * @param callback
             */
            getTimestamp: function (sgpPlayerId, key, callback) {
                var name = 'getTimestamp';
                var data = [sgpPlayerId, key];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 获取用户的所有时间戳 返回所有的时间戳
             * @param sgpPlayerId
             * @param callback
             */
            getTimestamps: function (sgpPlayerId, callback) {
                var name = 'getTimestamps';
                var data = [sgpPlayerId];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 移除一个时间戳
             * @param sgpPlayerId
             * @param key
             * @param callback
             */
            removeTimestamp: function (sgpPlayerId, key, callback) {
                var name = 'removeTimestamp';
                var data = [sgpPlayerId, key];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 批量移除时间戳
             * @param sgpPlayerId
             * @param keys
             * @param callback
             */
            removeTimestamps: function (sgpPlayerId, keys, callback) {
                var name = 'removeTimestamps';
                var data = [sgpPlayerId, keys];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 添加时间戳
             * @param sgpPlayerId
             * @param key
             * @param timestamp
             * @param callback
             */
            saveTimestamp: function (sgpPlayerId, key, timestamp, callback) {
                var name = 'saveTimestamp';
                var data = [sgpPlayerId, key, timestamp];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 创建/更新一个带偏移的时间戳 创建/更新成功则返回时间戳，失败则抛出异常
             * @param sgpPlayerId
             * @param key
             * @param offset
             * @param callback
             */
            updateTimestamp: function (sgpPlayerId, key, offset, callback) {
                var name = 'updateTimestamp';
                var data;
                if (arguments.length == 3) {
                    data = [sgpPlayerId, key];
                    SgtApi.doRPC(name, data, _url, offset);
                } else {
                    data = [sgpPlayerId, key, offset];
                    SgtApi.doRPC(name, data, _url, callback);
                }
            },

            /**
             * 批量创建/更新带偏移的时间戳 创建/更新成功则返回时间戳，失败则抛出异常
             * @param sgpPlayerId
             * @param keys
             * @param offset
             * @param callback
             */
            updateTimestamps: function (sgpPlayerId, keys, offset, callback) {
                var name = 'updateTimestamps';
                var data;
                if (arguments.length == 3) {
                    data = [sgpPlayerId, keys];
                    SgtApi.doRPC(name, data, _url, offset);
                } else {
                    data = [sgpPlayerId, key, offset];
                    SgtApi.doRPC(name, data, _url, callback);
                }
            }
        };
    };

    /**
     *
     * @module  VersionDetailService
     * @type {{}|*}
     */
    SgtApi.VersionDetailService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/versiondetail.do';
        return {
            /**
             * 根据appId和当前版本信息获取升级信息
             * @param appId
             * @param currentVersion
             * @param callback
             */
            checkUpdate: function (currentVersion, callback) {
                var name = 'checkUpdate';
                var data = [SgtApi.context.appId, currentVersion];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取某个appId所有的版本信息
             * @param appId
             * @param callback
             */
            getAllVersions: function (callback) {
                var name = 'getAllVersions';
                var data = [SgtApi.context.appId];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 微信中控服务
     * @type {Object}
     * @module WxCentralService
     */
    SgtApi.WxCentralService = function () {
        var _url = SgtApi.context.appGateway + '/wxcentral';
        return {
            /**
             * 获取微信的accessToken，每一小时刷新一次
             * @return {WxResult } 含有accessToken的WxResult
             */
            getAccessToken: function (callback) {
                var name = 'getAccessToken';
                var data = [SgtApi.context.appId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取微信的jsapi_ticket
             * @param  {Function} callback 回调函数
             * @return {WxResult}            含有jsapi_ticket的WxResult
             */
            getJSTicket: function (callback) {
                var name = 'getJSTicket';
                var data = [SgtApi.context.appId];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 获取jsapi 签名，签名用的noncestr和timestamp必须与wx.config中的nonceStr和timestamp相同。
             * @param  {Function} callback  回调函数
             * @return {WxResult }  WxResult:{ result: 处理正常result有值{"signature":"签名","timestamp":"计算时用到的时间戳，单位秒","noncestr":"计算签名的随机字符串","wxAppId":"微信appid","appSecret":"微信的凭证密钥"}
        ,error:"计算失败时返回的错误信息"
             */
            getSignature: function (callback) {
                var name = 'getSignature';
                var data = [SgtApi.context.appId, window.location.href.split('#')[0]];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * web端采用微信支付
             * @param {String} body 商品描述
             * @param {String} total_fee 商品价格
             * @param {String} playerId 角色id
             * @param {Function} callback   回调函数
             * @return {Object}
             */
            getPayOrder: function (body, total_fee, playerId, callback) {
                var name = 'getPayOrder';
                var data = [SgtApi.context.appId, {
                    body: body,
                    total_fee: total_fee,
                    trade_type: 'JSAPI',
                    serverId: SgtApi.context.server.address,
                    openid: SgtApi.context.openid,
                    playerId: playerId,
                    userId: SgtApi.context.user.userid
                }];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 通过code换取网页授权access_token
             * 还有openid
             * @param  {String}   code     auth验证返回的code
             * @param  {Function} callback 回调函数
             * @return {Object}            {
                                               "access_token":"ACCESS_TOKEN",
                                               "expires_in":7200,
                                               "refresh_token":"REFRESH_TOKEN",
                                               "openid":"OPENID",
                                               "scope":"SCOPE",
                                               "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
                                            }
             */
            getUserAccessToken: function (code, callback) {
                var name = 'getUserAccessToken';
                var data = [SgtApi.context.appId, code];
                SgtApi.doRPC(name, data, _url, callback);
            },

            /**
             * 微信授权方法
             * @param  {String} appid        微信的appid
             * @param  {String} scope        可选
             * @return {null}
             */
            auth: function (appid, scope) {
                var sVal = null;
                if (scope) {
                    sVal = scope;
                } else {
                    sVal = 'snsapi_base';
                }
                window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + encodeURIComponent(location.href.split('?')[0]) + '&response_type=code&scope=' + sVal + '&state=' + SgtApi.context.appId + '#wechat_redirect';
            },

            /**
             * 登录获取微信用户信息
             * 需要在auth带snsapi_userinfo 授权之后才能使用此方法
             * @param  {Function} callback [description]
             * @return {[type]}            [description]
             */
            getUserInfo: function (callback) {
                var name = 'getUserInfo';
                var data = [SgtApi.context.access_token, SgtApi.context.openid];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 留资模块:提供用户留存资料接口
     * @module UserLeaveInfoService
     */
    SgtApi.UserLeaveInfoService = function () {
        var _url = SgtApi.context.appGateway + '/userleaveinfo';
        return {
            /**
             * 保存用户留资方法
             * @param  {UserLeaveInfo}   userLeaveInfo 用户留资对象
             * @param  {Function} callback      回调函数
             * @return {UserLeaveInfo}                 用户留资对象
             */
            saveLeaveInfo: function (userLeaveInfo, callback) {
                var name = 'saveLeaveInfo';
                var data = [userLeaveInfo];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 随机角色名生成模块
     * 提供了生成随机角色名接口，可以使用默认的姓和名文本库生成角色名，还可以通过开发者管理后台自定义上传姓和名文本库生成角色名。
     * @module RandomNameGroupService
     */
    SgtApi.RandomNameGroupService = function () {
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/randomnamegroup.do';
        return {
            /**
             * 从默认的文本内容 生成随机名字
             * @param {Function} callback  回调函数
             * @return {string} 角色名
             */
            defaultRandomName: function (callback) {
                var name = 'defaultRandomName';
                var data = [];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据groupName 指定的库文本内容  生成随机名字
             * @param {string} groupName 库名（需通过开发者管理后台--数据管理--随机名称页面新增一条自定义文本库信息）
             * @param {Function} callback - 回调函数
             * @return {string} 角色名
             */
            randomNameByGroupName: function (groupName, callback) {
                var name = 'randomNameByGroupName';
                var data = [groupName];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };
    };

    /**
     * 大厅服务, 需要主动在页面引入socketio包(https://cdn.socket.io/socket.io-1.3.7.js),
     * 再通过socketio的api进行交互
     * @module LobbyService
     */
    SgtApi.LobbyService = function () {
        var socketUrl = null;
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/lobby.do';
        var result= {
            /**
             * 获取所有可用大厅
             *
             * @param callback
             */
            getAvaliableLobbies: function (callback) {
                var name = 'getAvaliableLobbies';
                var data = [1, 1000];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据大厅ID分页获取游戏房间列表
             * @param {int}lobbyId 大厅ID
             * @param {int}page 页码，第一页为1
             * @param {int}size 每页显示多少房间
             * @param callback 回调函数
             */
            getGameRoomsByLobbyId: function (lobbyId, page, size, callback) {
                var name = 'getGameRoomsByLobbyId';
                var data = [lobbyId, page, size];
                SgtApi.doRPC(name, data, _url, callback);
            },
            /**
             * 根据大厅ID分页获取未开始游戏房间列表
             * @param {int}lobbyId 大厅ID
             * @param {int}page 页码，第一页为1
             * @param {int}size 每页显示多少房间
             * @param callback 回调函数
             */
            getGameRoomsNotStarted: function (lobbyId, page, size, callback) {
                var name = 'getGameRoomsNotStarted';
                var data = [lobbyId, page, size];
                SgtApi.doRPC(name, data, _url, callback);
            }
        };


        if (SgtApi.context.server.socketUrl) {
            if (SgtApi.context.server.socketUrl.lastIndexOf('/') == SgtApi.context.server.socketUrl.length - 1) {//微信浏览器中居然没有endsWith方法
                socketUrl = SgtApi.context.server.socketUrl;
            } else {
                socketUrl = SgtApi.context.server.socketUrl + '/';
            }
            socketUrl = socketUrl + SgtApi.context.appId;
            /**
             * 获取指定大厅的socketio实例
             * @param {String}nameSpace 命名空间，大厅路径Lobby#path,不传则会连接默认大厅
             * @returns {socketio} socketio实例
             */
            result.getSocket= function (nameSpace) {
                if (nameSpace) {
                    if (!nameSpace.indexOf('/') == 0) {
                        nameSpace = '/' + nameSpace;
                    }
                }
                return io(socketUrl + (nameSpace ? nameSpace : ''));
            }
        } else {
            console.warn("%csocketUrl未设置！无法建立socket通讯", "color:red");
        }
        return result;
    };
    /**
     * 获取自定义业务实例
     * @static getService
     * @param {string}service 自定义业务类名(不是全名称)
     * @param {array}methods 方法名集合
     * @returns {object} 返回业务实例。{method:function([param1,param2,]callback){}}
     */
    SgtApi.getService = function (service,methods) {
        if (!service)throw  '第一个参数service不能为空';
        var serviceName;
        var suffix=service.lastIndexOf('Service')>-1?'Service':service.lastIndexOf('Manager')>-1?'Manager':'';
        if(suffix.length>0){
            serviceName=service.substring(0,service.lastIndexOf(suffix));
        }else serviceName=service;
        serviceName=serviceName.toLowerCase();
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/' + serviceName + '.do';
        return _processCustomService(_url,methods);
    };
    /**
     * 获取自定义业务实例
     * @static getService
     * @param {string}serviceName 自定义的业务名
     * @param {array}methods 方法名集合
     * @returns {object} 返回业务实例。{method:function([param1,param2,]callback){}}
     */
    SgtApi.getCustomService = function (serviceName, methods) {
        if (!serviceName)throw  '第一个参数serviceName不能为空';
        var _url = SgtApi.context.server.address + '/' + SgtApi.context.appId + '/' + serviceName + '.do';
        return _processCustomService(_url,methods);
    };
    function _processCustomService(_url,methods){
        var methodFunc = {};
        if (methods) {
            var _method = [];
            if (methods instanceof Array) {
                Array.prototype.push.apply(_method, methods);
            } else {
                _method.push(methods);
            }
            for (var i in _method) {
                (function (methodName) {
                    methodFunc[methodName] = function () {
                        var params=Array.prototype.slice.call(arguments,0);
                        var len=params.length,_cb,data=params.slice(0,-1);
                        if(len>1){
                            _cb= params[len-1];
                        }else if(len===1&&typeof params[0] === 'function') {
                            _cb= params[0];
                        }
                        SgtApi.doRPC(methodName, data, _url, _cb);
                    }
                })(_method[i])
            }
        }
        return methodFunc;
    }

    // browser
    if (typeof navigator !== 'undefined') {
        window.SgtApi = SgtApi;
        window.sgt = SgtApi;
    }
    // nodejs
    if (typeof module !== 'undefined') {
        module.exports = SgtApi;
    }
})();
if(typeof Promise === 'undefined'){(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);}