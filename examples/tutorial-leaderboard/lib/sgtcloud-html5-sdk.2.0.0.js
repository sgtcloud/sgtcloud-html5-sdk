jsonRPC =new Object({
    version: '2.0',
    endPoint: null,
    namespace: null,
    setup: function(params) {
        this.endPoint = params["endPoint"];
        this.namespace = params["namespace"];
        this.cache = params["cache"] !== undefined ? params["cache"] : true;
        return this;
    },
    request: function(method, options) {
        if (options === undefined) {
            options = {"id": 1};
        }
        if (options["id"] === undefined) {
            options["id"] = 1;
        }
        if (options["cache"] === undefined) {
            options["cache"] = this.cache;
        }

        this._doRequest(JSON.stringify(this._requestDataObj(method, options["params"], options["id"])), options);
        return true;
    },
    // Creates an RPC suitable request object
    _requestDataObj: function(method, params, id) {
        var dataObj = {
            "jsonrpc": this.version,
            "method": this.namespace ? this.namespace +'.'+ method : method,
            "id": id
        }
        if(params !== undefined) {
            dataObj["params"] = params;
        }
        return dataObj;
    },

    _requestUrl: function(url, cache) {
        url = url || this.endPoint;
        if (!cache) {
            if (url.indexOf("?") < 0) {
                url += '?tm=' + new Date().getTime();
            }
            else {
                url += "&tm=" + new Date().getTime();
            }
        }
        return url;
    },
    _doRequest: function(data, options) {
        var _that = this;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState==4) {
                if (xmlhttp.status==200) {
                    _that._requestSuccess.call(_that, xmlhttp.responseText, options["success"], options["error"]);
                } else {
                    _that._requestError.call(_that, xmlhttp.responseText, options["error"]);
                }
            }
        };
        xmlhttp.open("POST",this._requestUrl((this.endPoint || options["url"]), options["cache"]), false);

        var headers=[
            {"name":"Accept","type":"application/json, text/javascript, */*;"},
            {"name":"Content-Type","type":"application/json-rpc"}
        ];
        for (var i=0;i<headers.length;i++) {
            xmlhttp.setRequestHeader( headers[i]["name"], headers[i]["type"]);
        }

        xmlhttp.send(data);
    },
    // Handles calling of error callback function
    _requestError: function(responseText, error) {
        if (error !== undefined && typeof(error) === 'function') {
            if(typeof(responseText) === 'string') {
                try {
                    error(eval ( '(' + responseText + ')' ));
                }
                catch(e) {
                    error(this._response());
                }
            }
            else {
                error(this._response());
            }
        }
    },
    _requestSuccess: function(responseText, success, error) {
        var response = this._response(responseText);

        if(response.error && typeof(error) === 'function') {
            error(response);
            return;
        }

        // Otherwise, successful request, run the success request if it exists
        if(typeof(success) === 'function') {
            success(response);
        }
    },
    _response: function(responseText) {
        if (responseText === undefined) {
            return {
                error: 'Internal server error',
                version: '2.0'
            };
        }
        else {
          try {
              if(typeof(responseText) === 'string') {
                  responseText = eval ( '(' + responseText + ')' );
              }
              return responseText;
          }
          catch (e) {
              return {
                  error: 'Internal server error: ' + e,
                  version: '2.0'
              }
          }
        }
    }
});


/**
 * Created by Administrator on 2015/9/17.
 */



/**
 * 接口列表：
 * 用户相关业务接口
 * 角色处理逻辑业务接口
 * 角色扩展业务接口
 * 成就系统业务
 * 公告业务接口
 * 活动业务接口
 * 签到业务接口
 * 日常任务接口
 * 通用任务模块业务接口
 * 好友业务接口
 * 好友关系扩展业务
 * 黑名单业务接口
 * 抽奖业务接口
 * 排行榜业务接口
 * 邮件相关业务接口
 * 通知模块业务
 * 充值业务逻辑
 * 商城业务接口
 * 计费点业务
 * BOSS业务接口
 * 文件分发存储业务
 * 礼包/兑换码业务接口
 * 个人通道业务接口
 * 公共通道业务接口
 * 第三方回调接口
 * 结构化数据业务接口
 * 反馈举报 业务接口
 */

/**
 * sgt html5 api
 * 开发者 by zhcy
 *
 *
 */

SgtApi = $S = {};


/**
 *  Entity 实体类
 *
 */
SgtApi.entity = {
    /**
     * User 对象
     * @class User
     * @constructor
     */
    User: function () {
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
        this.userId = null;
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
        this.registryType = 0;
        /**
         * 最后更新时间
         * @property updateTime
         * @type {long}
         * @default null
         */
        this.updateTime = null;

        /**
         * 系统自动匹配注册（根据IMEI，ICCID，mac）
         * @type {number}
         */
        SgtApi.entity.User.prototype.AUTO = 0;

        /**
         * 注册类型，普通注册，使用用户名和密码注册
         * @type {number}
         */
        SgtApi.entity.User.prototype.MANUAL = 0;

        /**
         * 使用手机号码注册
         * @type {number}
         */
        SgtApi.entity.User.prototype.PHONENUMBER = 0;

    },


    /**
     * 玩家角色接口
     *
     * @class Player
     * @constructor
     */
    Player: function () {
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
        this.id = 0;
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
        this.level = 1;
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
        this.vip = 0;
        /**
         * 好友最大上限数
         * @property friendsMaxNumber
         * @type {number}
         * @default 0
         */
        this.friendsMaxNumber = 0;
        /**
         * 性别 [1 男 0 女]
         * @property gender
         * @type {number}
         * @default 0
         */
        this.gender = 0;
        /**
         * 金钱
         * @property money
         * @type {number}
         * @default 0
         */
        this.money = 0;
    },

    /**
     * 存档实例
     *
     * @class save
     * @constructor
     */
    Save: function () {
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

        /**
         * 允许下载
         * @type {number}
         */
        SgtApi.entity.Save.prototype.ALLOW_DOWN = 0;

        /**
         * 不允许下载
         * @type {number}
         */
        SgtApi.entity.Save.prototype.DENY_DOWN = 0;

    },

    /**
     * mail 对象
     * @class mail
     * @constructor
     */
    Mail: function () {
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
        this.attachStatus = 0;

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
        this.status = SgtApi.config.Mail_TYPE_NOREAD;

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
        this.type = 0;

        /**
         * 删除状态 已经删除 -1
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.DELETED = 0;

        /**
         * 已读状态 值为1
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.READ = 0;

        /**
         * 附件未领取
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.STATUS_ATTACH_NO_PICK = 0;

        /**
         * 附件已经领取
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.STATUS_ATTACH_PICKED = 0;

        /**
         * 邮件类型：好友邀请邮件 职位3
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.TYPE_INVITATE_FRIENDSHIP = 0;

        /**
         * 邮件类型：普通邮件 值为 0
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.TYPE_NORMAL = 0;

        /**
         * 邮件类型：系统通知邮件 值为1
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.TYPE_SYSTEM = 0;

        /**
         * 邮件类型：系统奖励邮件 值为2
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.TYPE_SYSTEM_REWARD = 0;

        /**
         * 未读状态 值为0
         * @type {number}
         */
        SgtApi.entity.Mail.prototype.UNREAD = 0;
    },


    /**
     * Ticket 对象
     * @class Ticket
     * @constructor
     */
    Ticket: function () {
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
        this.id = 0;

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
        this.status = 1;

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
        this.type = 1;

        /**
         * 待处理
         * @type {number}
         */
        SgtApi.entity.Ticket.prototype.STATUS_OF_PENDING = 0;

        /**
         * 已处理
         * @type {number}
         */
        SgtApi.entity.Ticket.prototype.STATUS_OF_PROCESSED = 0;

        /**
         * 一般类型
         * @type {number}
         */
        SgtApi.entity.Ticket.prototype.TYPE_OF_NORMAL = 0;
    },

    /**
     * 成就
     * @constructor
     */
    Achievement: function () {
        /**
         * 当前进度
         * @type {number}
         */
        this.currentProgress = 0;

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
        this.goal = 0;

        /**
         * 主键id
         * @type {number}
         */
        this.id = 0;

        /**
         * 开启成就的等级
         * @type {number}
         */
        this.level = 0;

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
        this.showDone = 0;

        /**
         * 状态（禁用0，启用1）
         * @type {number}
         */
        this.status = 0;

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

        /**
         * 已达成
         * @type {number}
         */
        SgtApi.entity.Achievement.prototype.PROGRESS_DONE = 0;

        /**
         * 已经领取奖励
         * @type {number}
         */
        SgtApi.entity.Achievement.prototype.PROGRESS_GOT_REWARD = 0;

        /**
         * 未达成
         * @type {number}
         */
        SgtApi.entity.Achievement.prototype.PROGRESS_NOT_ACHIEVED = 0;

        /**
         * 不可用
         * @type {number}
         */
        SgtApi.entity.Achievement.prototype.STATUS_DISABLE = 0;

        /**
         * 可用，开启状态
         * @type {number}
         */
        SgtApi.entity.Achievement.prototype.STATUS_ENABLE = 0;

        /**
         * 成就不可见
         * @type {number}
         */
        SgtApi.entity.Achievement.prototype.VISIBILITY_INVISIBLE = 0;

        /**
         * 成就可见
         * @type {number}
         */
        SgtApi.entity.Achievement.prototyep.VISIBILITY_VISIBLE = 0;

    },

    /**
     * 公告
     * @constructor
     */
    Announcement: function () {
        /**
         * 公告内容
         * @type {null}
         */
        this.content = null;

        /**
         * 结束时间
         * @type {number}
         */
        this.endTime = 0;

        /**
         * 开始时间
         * @type {number}
         */
        this.startTime = 0;

        /**
         * 状态 1 启用 0 禁用 默认索引，不能为空
         * @type {number}
         */
        this.state = 0;

        /**
         * 公告标题
         * @type {null}
         */
        this.title = null;

        /**
         * 公告类型 默认索引，不能为空
         * @type {number}
         */
        this.type = 0;

        /**
         * 主键,UUID类型，由应用自动生成
         * @type {null}
         */
        this.uuid = null;

        /**
         * 公告版本 默认索引，不能为空
         * @type {number}
         */
        this.version = 0;

        /**
         * 公告类型 活动公告（1）
         * @type {number}
         */
        SgtApi.entity.Announcement.prototype.ACTIVITY = 0;

        /**
         * 公告类型 商城公告（2）
         * @type {number}
         */
        SgtApi.entity.Announcement.prototype.BULLETIN = 0;

        /**
         * 公告类型 维护公告（3）
         * @type {number}
         */
        SgtApi.entity.Announcement.prototype.MAINTAIN = 0;
    },

    /**
     * 黑名单
     * @constructor
     */
    Blacklist: function () {

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
        this.id = 0;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 类型
         * @type {number}
         */
        this.type = 0;

        /**
         * 正常
         * @type {number}
         */
        SgtApi.entity.Blacklist.prototype.TYPE_OF_NORMAL = 0;

        /**
         * 路由黑名单
         * @type {number}
         */
        SgtApi.entity.Blacklist.prototype.TYPE_OF_ROUTE = 0;
    },

    /**
     * BOSS
     * @constructor
     */
    Boss: function () {

        /**
         * 血量
         * @type {number}
         */
        this.hp = 0;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

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
        this.type = 0;

        /**
         * 私有boss，只能自己打
         * @type {number}
         */
        SgtApi.entity.Boss.prototype.PRIVATE = 0;

        /**
         * 公共 、世界boss
         * @type {number}
         */
        SgtApi.entity.Boss.prototype.PUBLIC = 0;
    },

    /**
     * 活动
     * @constructor
     */
    Campaign: function () {

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
        this.endTime = 0;

        /**
         * 图标
         * @type {null}
         */
        this.icon = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

        /**
         * 关联的排行榜
         * @type {null}
         */
        this.leaderboardIds = null;

        /**
         * 活动进度
         * @type {number}
         */
        this.progress = 0;

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
        this.startTime = 0;

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
    },

    /**
     * 活动详情
     * @constructor
     */
    CampaignDetail: function () {

        /**
         * 关联的活动
         * @type {null}
         */
        this.campaign = null;

        /**
         * 关联的活动ID
         * @type {number}
         */
        this.campaignId = 0;

        /**
         * 活动描述
         * @type {null}
         */
        this.description = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

        /**
         * 活动台本
         * @type {null}
         */
        this.script = null;
    },

    /**
     * 公共通道
     * @constructor
     */
    Channel: function () {

        /**
         * 通道ID
         * @type {null}
         */
        this.channelId = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

        /**
         * 通道名称
         * @type {null}
         */
        this.name = null;
    },

    /**
     * 充值记录
     * @constructor
     */
    ChargeLog: function () {

        /**
         * 充值金额
         * @type {number}
         */
        this.chargeCost = 0;

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
        this.chargeTime = 0;

        /**
         * 是否首冲
         * @type {number}
         */
        this.firstCharge = 0;

        /**
         * id
         * @type {number}
         */
        this.id = 0;

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
        this.result = 0;

        /**
         * 充值渠道
         * @type {null}
         */
        this.storeName = null;

        /**
         * 累计充值金额
         * @type {number}
         */
        this.totalChargeCost = 0;
    },

    /**
     * 计费点
     * @constructor
     */
    ChargePoint: function () {

        /**
         * 充值获得的物品数量
         * @type {number}
         */
        this.amount = 0;

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
        this.extraAmount = 0;

        /**
         * 首次充值获得的奖励物品数量
         * @type {number}
         */
        this.firstChargeRewardAmount = 0;

        /**
         * id
         * @type {number}
         */
        this.id = 0;

        /**
         * 充值金额（RMB：单位是分）
         * @type {number}
         */
        this.money = 0;

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
        this.purchanseTimes = 0;

        /**
         * 是否推荐
         * @type {number}
         */
        this.recommendation = 0;

        /**
         * 是否可见或启用
         * @type {number}
         */
        this.status = 0;

        /**
         * 充值次数限制，没有次数限制时可约定为-1
         * @type {number}
         */
        this.timesLimit = 0;

        /**
         * 类型，充值获取的物品类型，如元宝、道具、月卡等
         * @type {null}
         */
        this.type = null;

        /**
         * VIP积分增长值
         * @type {number}
         */
        this.vipScore = 0;
    },

    /**
     * 签到板
     * @constructor
     */
    CheckinBoard: function () {

        /**
         * 自定义签到板ID
         * @type {null}
         */
        this.checkinBoardId = null;

        /**
         * 有效结束时间
         * @type {number}
         */
        this.endTime = 0;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

        /**
         * 最大签到次数
         * @type {number}
         */
        this.maxCheckinTimes = 0;

        /**
         * 名称
         * @type {null}
         */
        this.name = null;

        /**
         * 签到状态重置时间，默认为0点整
         * @type {number}
         */
        this.resetTime = 0;

        /**
         * 奖励
         * @type {null}
         */
        this.reward = null;

        /**
         * 有效开始时间
         * @type {number}
         */
        this.startTime = 0;

        /**
         * tag
         * @type {null}
         */
        this.tag = null;

        /**
         * 类型
         * @type {number}
         */
        this.type = 0;

        /**
         * 日历签到
         * @type {number}
         */
        SgtApi.entity.CheckinBoard.prototype.CHECKIN_TYPE_CALENDAR = 0;

        /**
         * 每日签到
         * @type {number}
         */
        SgtApi.entity.CheckinBoard.prototype.CHECKIN_TYPE_DAILY = 0;

        /**
         * 月签到，每月一次
         * @type {number}
         */
        SgtApi.entity.CheckinBoard.prototype.CHECKIN_TYPE_MONTH = 0;

        /**
         * 一般签到
         * @type {number}
         */
        SgtApi.entity.CheckinBoard.prototype.CHECKIN_TYPE_NORMAL = 0;

        /**
         * 周签到，每周一次
         * @type {number}
         */
        SgtApi.entity.CheckinBoard.prototype.CHECKIN_TYPE_WEEKS = 0;

        /**
         * 同 CHECKIN_TYPE_DAILY 每日签到
         * @type {number}
         */
        SgtApi.entity.CheckinBoard.protptype.DAILY = 0;

        /**
         * 同 CHECKIN_TYPE_NORMAL 一般签到
         * @type {number}
         */
        SgtApi.entity.CheckinBoard.prototype.NOMARL = 0;
    },

    /**
     * 签到返回VO
     * @constructor
     */
    CheckinResult: function () {

        /**
         * 最大累计次数
         * @type {number}
         */
        this.accumlateCount = 0;

        /**
         * 签到板ID
         * @type {null}
         */
        this.checkinBoardId = null;

        /**
         * 连续签到次数
         * @type {number}
         */
        this.countinuousCount = 0;

        /**
         * 上一次签到时间
         * @type {number}
         */
        this.lastCheckinTime = 0;

        /**
         * 奖励
         * @type {null}
         */
        this.rewards = null;
    },

    /**
     * 日常任务
     * @constructor
     */
    DailyTask: function () {

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

        /**
         * 任务进度状态，已经完成，还未领取奖励的状态
         * @type {number}
         */
        SgtApi.entity.DailyTask.prototype.STATUS_PROGRESS_COMPLETED = 0;

        /**
         * 任务进度状态，已经完成，并且已经领取奖励的状态
         * @type {number}
         */
        SgtApi.entity.DailyTask.prototype.STATUS_PROGRESS_GOT_REWARD = 0;

        /**
         * 任务进度状态，未完成，在任务进行中的状态
         * @type {number}
         */
        SgtApi.entity.DailyTask.prototype.STATUS_PROGRESS_UNFINISHED = 0;

        /**
         * 任务状态，可用的
         * @type {number}
         */
        SgtApi.entity.DailyTask.prototype.STATUS_TASK_AVAILABLE = 0;

        /**
         * 任务状态，不可用的
         * @type {number}
         */
        SgtApi.entity.DailyTask.prototype.STATUS_TASK_UNAVAILABLE = 0;
    },

    /**
     * 第三方回调封装bean
     * @constructor
     */
    ExternalCallbackBean: function () {

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
        this.updateTime = 0;

        /**
         * 用户ID
         * @type {null}
         */
        this.userId = null;
    },

    /**
     * 文件的基本属性
     * @constructor
     */
    FileItem: function () {

        /**
         * 文件名
         * @type {null}
         */
        this.fileName = null;

        /**
         * 图片属性 帧数
         * @type {number}
         */
        this.frames = 0;

        /**
         * 图片属性 高度
         * @type {number}
         */
        this.height = 0;

        /**
         * 最后上传时间戳
         * @type {number}
         */
        this.lastUploadTime = 0;

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
        this.size = 0;

        /**
         * 文件类型，文件or文件夹
         * @type {null}
         */
        this.type = null;

        /**
         * 图片属性 宽度
         * @type {number}
         */
        this.width = 0;
    },

    /**
     * 好友
     * @constructor
     */
    Friendship: function () {

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
        this.status = 0;

        /**
         * 好友关系状态 好友(1)
         * @type {number}
         */
        SgtApi.entity.Friendship.prototype.FRIEND = 0;

        /**
         * 拒绝添加好友的状态(2)
         * @type {number}
         */
        SgtApi.entity.Friendship.prototype.REFUSE = 0;

        /**
         * STATE_DELETE
         * @type {number}
         */
        SgtApi.entity.Friendship.prototype.STATE_DELETE = 0;

        /**
         * 好友关系状态 未确认(0)
         * @type {number}
         */
        SgtApi.entity.Friendship.prototype.UN_CONFIRM = 0;
    },

    /**
     * 好友关系扩展
     * @constructor
     */
    FriendshipExtra: function () {

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
    },

    /**
     * 抽奖
     * @constructor
     */
    GachaBox: function () {

        /**
         * 连抽价格
         * @type {number}
         */
        this.continuousPrice = 0;

        /**
         * 描述
         * @type {null}
         */
        this.description = null;

        /**
         * 有效期，从yyyyMMddHHMM到yyyyMMddHHMM 精确到分钟
         * @type {number}
         */
        this.endValidTime = 0;

        /**
         * 主键 自增
         * @type {number}
         */
        this.id = 0;

        /**
         * 图片
         * @type {null}
         */
        this.img = null;

        /**
         * 初始品质，默认0
         * @type {number}
         */
        this.initQuality = 0;

        /**
         * 瞬时属性，保存该GachaBox下所有奖励
         * @type {number}
         */
        this.lotteries = null;

        /**
         * 最大限制品质，默认0不限制
         * @type {number}
         */
        this.maxQuality = 0;

        /**
         * 名称（同一服务器不能重复）
         * @type {null}
         */
        this.name = null;

        /**
         * 价格
         * @type {number}
         */
        this.price = 0;

        /**
         * 有效期，从yyyyMMddHHMM到yyyyMMddHHMM 精确到分钟
         * @type {number}
         */
        this.startValidTime = 0;

        /**
         * 时间/人限制，为每个角色SgpPlayerId创建一个时间戳，在指定的时间区间内只能抽一次奖， 否则抛出异常，并且包含timeLimitErrorMsg
         * @type {number}
         */
        this.timeLimit = 0;

        /**
         * 当用户满足时间/人限制时，抛出的异常中指定的信息
         * @type {null}
         */
        this.timeLimitErrorMsg = null;

        /**
         * 次数/人限制，为每个角色创建一个计数器，累计用户的总gacha次数，当小于该次数时不受影响， 否则抛出异常，并且包含totalLimitErrorMsg
         * @type {number}
         */
        this.totalLimit = 0;

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
    },

    /**
     *
     * @constructor
     */
    GachaBoxResult: function () {

        /**
         *
         * @type {null}
         */
        this.prizes = null;

        /**
         *
         * @type {number}
         */
        this.quality = 0;
    },

    /**
     * 礼包、兑换码
     * @constructor
     */
    Gift: function () {

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
        this.endTime = 0;

        /**
         * 限制兑换级别
         * @type {number}
         */
        this.level = 0;

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
        this.redeemLimit = 0;

        /**
         * 奖品
         * @type {null}
         */
        this.reward = null;

        /**
         * 兑换开始时间
         * @type {number}
         */
        this.startTime = 0;

        /**
         * 主键 gift ID
         * @type {null}
         */
        this.uuid = null;

        /**
         * VIP等级限制
         * @type {number}
         */
        this.vip = 0;
    },

    /**
     * 礼包/兑换码 兑换记录
     * @constructor
     */
    GiftRecord: function () {

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
        this.ticketTime = 0;

        /**
         * 主键UUID
         * @type {null}
         */
        this.uuid = null;
    },

    /**
     * 商城物品
     * @constructor
     */
    Item: function () {


        /**
         * 物品数量
         * @type {number}
         */
        this.amount = 0;

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
        this.id = 0;

        /**
         * 物品ID
         * @type {null}
         */
        this.itemId = null;

        /**
         * 购买物品冷却时间(单位：秒)，默认为0，表示可以连续购买
         * @type {number}
         */
        this.itemPurchaseCd = 0;

        /**
         * 最大购买次数
         * @type {number}
         */
        this.maxPurchanseTimes = 0;

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
        this.playerPurchaseCd = 0;

        /**
         * 价格
         * @type {number}
         */
        this.price = 0;

        /**
         * 价格单位
         * @type {null}
         */
        this.priceUnit = null;

        /**
         * 品质
         * @type {number}
         */
        this.quality = 0;

        /**
         * 状态 [禁用 0 启用 1]
         * @type {number}
         */
        this.status = 0;

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
        this.weight = 0;

        /**
         * 状态：禁用
         * @type {number}
         */
        SgtApi.entity.Item.prototype.DISABLED = 0;

        /**
         * 状态：启用
         * @type {number}
         */
        SgtApi.entity.Item.prototype.ENABLED = 0;

        /**
         * 物品类型：充值
         * @type {null}
         */
        SgtApi.entity.Item.prototype.TYPE_OF_CHARGE = null;

        /**
         * 物品类型：内容关卡
         * @type {null}
         */
        SgtApi.entity.Item.prototype.TYPE_OF_LEVEL = null;

        /**
         * 物品类型：默认货币
         * @type {null}
         */
        SgtApi.entity.Item.prototype.TYPE_OF_MONEY = null;

        /**
         * 物品类型：道具
         * @type {null}
         */
        SgtApi.entity.Item.prototype.TYPE_OF_PROPS = null;

        /**
         * 物品类型：复活
         * @type {null}
         */
        SgtApi.entity.Item.prototype.TYPE_OF_RESURRECTION = null;

        /**
         * 物品类型：VIP资格
         * @type {null}
         */
        SgtApi.entity.Item.prototype.TYPE_OF_VIP = null;

        /**
         * 价格单位：人民币
         * @type {null}
         */
        SgtApi.entity.Item.prototype.UNIT_OF_CN_YUAN = null;

        /**
         * 价格单位：钻石
         * @type {null}
         */
        SgtApi.entity.Item.prototype.UNIT_OF_DIAMOND = null;

        /**
         * 价格单位：金币
         * @type {null}
         */
        SgtApi.entity.Item.prototype.UNIT_OF_GOLDENCOIN = null;

        /**
         * 价格单位：日元
         * @type {null}
         */
        SgtApi.entity.Item.prototype.UNIT_OF_JP_YUAN = null;

        /**
         * 价格单位：默认货币
         * @type {null}
         */
        SgtApi.entity.Item.prototype.UNIT_OF_MONEY = null;

        /**
         * 价格单位：美元
         * @type {null}
         */
        SgtApi.entity.Item.prototype.UNIT_OF_US_DOLLAR = null;
    },

    /**
     * 排行榜
     * @constructor
     */
    LeaderBoard: function () {

        /**
         * 活动ID
         * @type {null}
         */
        this.activityId = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

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
    },

    /**
     * 排行榜详情
     * @constructor
     */
    LeaderBoardScore: function () {

        /**
         * 排位
         * @type {number}
         */
        this.index = 0;

        /**
         * 角色信息
         * @type {null}
         */
        this.player = null;

        /**
         * 分数
         * @type {number}
         */
        this.score = 0;
    },

    /**
     * 奖品
     * @constructor
     */
    Lottery: function () {

        /**
         * 修正值
         * @type {number}
         */
        this.balance = 0;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

        /**
         * 奖品名称
         * @type {null}
         */
        this.name = null;

        /**
         * 奖品内容
         * @type {null}
         */
        this.prize = null;

        /**
         * 品质
         * @type {number}
         */
        this.quality = 0;

        /**
         * 关联的GachaBox id
         * @type {number}
         */
        this.relatedGachaBox = 0;

        /**
         * 权值
         * @type {number}
         */
        this.weight = 0;
    },

    /**
     *
     * @constructor
     */
    MailsCollection: function () {

        /**
         * 已读邮件集合
         * @type {null}
         */
        this.readedMails = null;

        /**
         * 未读邮件集合
         * @type {null}
         */
        this.unreadMails = null;
    },

    /**
     * 邮件模板
     * @constructor
     */
    MailTemplate: function () {

        /**
         * 附件
         * @type {null}
         */
        this.attachment = null;

        /**
         * 内容
         * @type {null}
         */
        this.content = null;

        /**
         * 自定义ID，用于关联
         * @type {null}
         */
        this.customId = null;

        /**
         * 模板说明
         * @type {null}
         */
        this.description = null;

        /**
         * id
         * @type {number}
         */
        this.id = 0;

        /**
         * 标题
         * @type {null}
         */
        this.title = null;
    },

    /**
     * 公共消息
     * @constructor
     */
    Message: function () {

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
        this.createTime = 0;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

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
    },

    /**
     * 用户商城购买记录
     * @constructor
     */
    Order: function () {

        /**
         * 订单总金额
         * @type {number}
         */
        this.aggregateAmount = 0;

        /**
         * 数量，默认为1
         * @type {number}
         */
        this.amounts = 1;

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
        this.id = 0;

        /**
         * 物品ID
         * @type {number}
         */
        this.itemId = 0;

        /**
         * 角色ID
         * @type {null}
         */
        this.playerId = null;

        /**
         * 购买时间
         * @type {number}
         */
        this.purchaseTime = 0;

        /**
         * 服务器ID
         * @type {null}
         */
        this.serverId = null;

        /**
         * 结果
         * @type {number}
         */
        this.status = 0;

        /**
         * 商店ID
         * @type {null}
         */
        this.storeId = null;

        /**
         * 交易中，如调用第三方计费接口还没有返回成功提示之前的状态
         * @type {number}
         */
        SgtApi.entity.Order.prototype.STATUS_OF_DEALING = 0;

        /**
         * 购买结果：异常
         * @type {number}
         */
        SgtApi.entity.Order.prototype.STATUS_OF_EXCEPTION = 0;

        /**
         * 购买结果：失败
         * @type {number}
         */
        SgtApi.entity.Order.prototype.STATUS_OF_FAILURE = 0;

        /**
         * 购买结果：成功
         * @type {number}
         */
        SgtApi.entity.Order.prototype.STATUS_OF_SUCESS = 0;
    },

    /**
     * 角色扩展信息公共父类，所有开发者扩展的角色信息要么继承这个类，要么在自己的扩展类中添加playerId字段
     * @constructor
     */
    PlayerExtra: function () {
        /**
         * 角色ID，即sgpPlayerId
         * @type {null}
         */
        this.playerId = null;
    },

    /**
     *
     * @constructor
     */
    Reward: function () {

        /**
         * 奖励内容
         * @type {null}
         */
        this.content = null;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;
    },

    /**\
     * 服务器信息
     * @constructor
     */
    Server: function () {

        /**
         * address
         * @type {null}
         */
        this.address = null;

        /**
         * id
         * @type {null}
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
         * @type {null}
         */
        this.name = null;

        /**
         * state
         * @type {number}
         */
        this.state = 0;

        /**
         * 良好
         * @type {number}
         */
        SgtApi.entity.Server.prototype.GOOD = 0;

        /**
         * 满载
         * @type {number}
         */
        SgtApi.entity.Server.prototype.HEAVY = 0;

        /**
         * 顺畅
         * @type {number}
         */
        SgtApi.entity.Server.prototype.LIGHT = 0;

        /**
         * 维护
         * @type {number}
         */
        SgtApi.entity.Server.prototype.MAINTAIN = 0;

        /**
         * 一般
         * @type {number}
         */
        SgtApi.entity.Server.prototype.ORDINARY = 0;
    },

    /**
     * 商城
     * @constructor
     */
    Store: function () {

        /**
         * 商城描述
         * @type {null}
         */
        this.description = null;

        /**
         * 商城折扣，如8折则值为80
         * @type {number}
         */
        this.discount = 0;

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

        /**
         * items
         * @type {null}
         */
        this.items = null;

        /**
         * 状态 [禁用 0 启用 1]
         * @type {number}
         */
        this.status = 0;

        /**
         * 商城ID
         * @type {null}
         */
        this.storeId = null;

        /**
         * 更新标志 [关闭 0 打开 1]
         * @type {number}
         */
        this.updateFlag = 0;

        /**
         * 商城版本号，在商城物品变更后可变更此版本号
         * @type {number}
         */
        this.version = 0;

        /**
         * 默认折扣
         * @type {number}
         */
        SgtApi.entity.Store.prototype.DEFAULT_DISCOUNT = 0;

        /**
         * 状态：禁用
         * @type {number}
         */
        SgtApi.entity.Store.prototype.DISABLED = 0;

        /**
         * 状态：启用
         * @type {number}
         */
        SgtApi.entity.Store.prototype.ENABLED = 0;

        /**
         * 更新标志：关闭
         * @type {number}
         */
        SgtApi.entity.Store.prototype.UPDATE_FLAG_CLOSE = 0;

        /**
         * 更新标志：打开
         * @type {number}
         */
        SgtApi.entity.Store.prototype.UPDATE_FLAG_OPEN = 0;
    },

    /**
     * 自定义数据结构
     * @constructor
     */
    StructuredData: function () {

        /**
         * 主键
         * @type {number}
         */
        this.id = 0;

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

        /**
         * 表示值为list的数据结构
         * @type {null}
         */
        SgtApi.entity.StructuredData.prototype.TYPE_OF_LIST = null;

        /**
         * 表示职位map键值对的数据结构
         * @type {null}
         */
        SgtApi.entity.StructuredData.prototype.TYPE_OF_MAP = null;

        /**
         * 表示值为set的数据结构
         * @type {null}
         */
        SgtApi.entity.StructuredData.prototype.TYPE_OF_SET = null;

        /**
         * 表示值为value的数据结构
         * @type {null}
         */
        SgtApi.entity.StructuredData.prototype.TYPE_OF_VALUE = null;

        /**
         * 表示值为zset的数据结构
         * @type {null}
         */
        SgtApi.entity.StructuredData.prototype.TYPE_OF_ZSET = null;

    },

    /**
     * 通用任务
     * @constructor
     */
    Task: function () {

        /**
         * Task的actiontype类型-与计数器中的type相关联
         * @type {null}
         */
        this.actiontype = null;

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
         * 当前任务进度 当任务是成就时，返回的进度，将是相关Actiontype的总进度 其余将是当日进度
         * @type {number}
         */
        this.currentProgress = 0;

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
        this.endTime = 0;

        /**
         * 完成Task的进度数
         * @type {number}
         */
        this.goal = 0;

        /**
         * 主键 非自增，不能为空
         * @type {null}
         */
        this.id = null;

        /**
         * 开启Task的等级 同日常任务中-限制等级，最低可做该任务的等级
         * @type {number}
         */
        this.level = 0;

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
        this.startTime = 0;

        /**
         * 当前任务状态
         * @type {number}
         */
        this.status = 0;

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
        this.visibility = 0;

        /**
         * Task状态(available)：不可用，禁用状态
         * @type {number}
         */
        SgtApi.entity.Task.prototype.AVAILABLE_DISABLE = 0;

        /**
         * Task状态(available)：可用，开启状态
         * @type {number}
         */
        SgtApi.entity.Task.prototype.AVAILABLE_ENABLE = 0;

        /**
         * Task进度状态(Status):已经完成，还未领取奖励的状态
         * @type {number}
         */
        SgtApi.entity.Task.prototype.STATUS_PROGRESS_COMPLETED = 0;

        /**
         * Task进度状态(Status):已经完成，并且已经领取奖励的状态
         * @type {number}
         */
        SgtApi.entity.Task.prototype.STATUS_PROGRESS_GOT_REWARD = 0;

        /**
         * Task进度状态(Status):未完成，在任务进行中的状态
         * @type {number}
         */
        SgtApi.entity.Task.prototype.STATUS_PROGRESS_UNFINISHED = 0;

        /**
         * taskType:成就
         * @type {number}
         */
        SgtApi.entity.Task.prototype.TASKTYPE_ACHIEVEMENT = null;

        /**
         * taskType:日常任务
         * @type {null}
         */
        SgtApi.entity.Task.prototype.TASKTYPE_DAILYTASK = null;

        /**
         * Task可见性：不可见
         * @type {number}
         */
        SgtApi.entity.Task.prototype.VISIBILITY_INVISIBLE = 0;

        /**
         * Task可见性：可见
         * @type {number}
         */
        SgtApi.entity.Task.prototype.VISIBILITY_VISIBLE = 0;
    },

    /**
     * 定时器任务
     * @constructor
     */
    TimerTask: function () {

        /**
         * className
         * @type {null}
         */
        this.className = null;

        /**
         * 定时任务创建时间
         * @type {number}
         */
        this.createTime = 0;

        /**
         * 重复执行的时间间隔，repeat为不为0时生效
         * @type {number}
         */
        this.delay = 0;

        /**
         * 描述该定时任务做什么事情
         * @type {null}
         */
        this.desc = null;

        /**
         * 第一次执行定时器的时间点
         * @type {number}
         */
        this.executeTime = 0;

        /**
         * 主键，自增
         * @type {number}
         */
        this.id = 0;

        /**
         * 自定义的定时器名字
         * @type {null}
         */
        this.name = null;

        /**
         * 过期时间/为0为不失效
         * @type {number}
         */
        this.overdueTime = 0;

        /**
         * 定时器需要的参数，为json字符串，可选
         * @type {null}
         */
        this.params = null;

        /**
         * 是否重复执行，0为单次执行，1为多次执行，2为不限次数执行，默认为0
         * @type {number}
         */
        this.repeat = 0;

        /**
         * 执行的次数，repeat为1时生效
         * @type {number}
         */
        this.step = 0;

        /**
         * 关联到定时器的ID
         * @type {number}
         */
        this.timerId = 0;
    },

    /**
     * 版本详情
     * @constructor
     */
    VersionDetail: function () {

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
        this.updateType = 0;

        /**
         * 升级地址
         * @type {null}
         */
        this.updateUrl = null;

        /**
         * 具体版本号
         * @type {number}
         */
        this.version = 0;

        /**
         * 版本名称
         * @type {null}
         */
        this.versionName = null;
    }


};


/**
 *  JsonRpc 接口
 */

function $JsonRpc(obj) {
    this.data = obj;
    this.call = function (name, data, succ, error) {
        jsonRPC.setup({"endPoint": this.data.ajaxUrl, "namespace": ''});
        jsonRPC.request(name, {
            "params": data,
            "success": succ,
            "error": error
        });
    };
}


/**
 * 实体类工厂
 * @param entity_name 需要生成实体的类名
 * @param fn 创建实体对象后执行的函数,不传入则没有
 * @returns {Object} 工厂创建的实体对象
 */
SgtApi.entityFactory = function (entity_name, fn) {
    var entity = eval('new SgtApi.entity.' + entity_name + '();');
    if (fn && fn !== '') {
        fn();
    }
    return entity;
};

/**
 *
 *
 * @param name
 * @param data
 * @param url
 * @param callback
 */
SgtApi.doRPC = function (name, data, url, callback) {
    jsonRPC.setup({endPoint: url, namespace: ''});
    jsonRPC.request(name, {
        params: data,
        success: function (result) {
            return callback(true, result.result);
        },
        error: function (error) {
            console.log('There was an error.error:', error.error);
            return callback(false, error.error.message);
        }
    });
};


/**
 * Sgt  上下文
 * @type {{userData: null, playerServerData: null, playerData: null}}
 */
SgtApi.context = {
    userData: {},
    playServerData: {}, //当前角色服务器信息
    playerData: {}    //当前角色信息
};


/**
 * SGT SDK 配置文件
 */
SgtApi.config = {
    ///**
    // * 网关
    // * @property appGateway
    // * @type {string}
    // * @default http://sgp.gallme.com.cn/gateway
    // */
    appGateway: 'http://gw.sgtcloud.cn/gateway',
    ///**
    // * 应用标识
    // * @property appId
    // * @type {string}
    // * @default ""
    // */
    appId: 'html5_demo2015',
    ///**
    // * 渠道标识
    // * @property channelId
    // * @type {string}
    // * @default "zstfYB"
    // */
    channelId: '',
    ///**
    // * 用户name
    // * @property userName
    // * @type {string}
    // * @default null
    // */
    userName: null,
    ///**
    // * 用户密码
    // * @property userPassword
    // * @type {string}
    // * @default "yoedge2014"
    // */
    userPassword: '',
};

/**
 * 初始化sdk配置
 * @class init
 * @param json{json} 配置文件
 * @constructor
 */
SgtApi.init = function (json) {
    "use strict";
    if (json.appGateway !== "" && json.appGateway) {
        SgtApi.config.appGateway = json.appGateway;
    }
    if (json.appId !== "" && json.appId) {
        SgtApi.config.appId = json.appId;
    }
    if (json.channelId !== "" +
        "" && json.channelId) {
        SgtApi.config.channelId = json.channelId;
    }

};

/**
 * 用户登陆注册
 *
 * @module  AccountService
 * @type {{}|*}
 */
SgtApi.UserService = {

    /**
     * 验证手机号和验证码是否匹配
     * @param smobile{string} 用户手机号
     * @param captcha{string} 用户输入验证码
     * @param callback
     * @result string
     */
    isMatcher: function (smobile, captcha, callback) {
        var name = 'isMatcher';
        var data = [smobile, captcha];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 登陆
     * @method login
     * @param username{string} 用户名
     * @param password{string} 密码
     * @param callback{function} 此回调函数中可以有两个参数,第一个参数的值为true/false代表成功与否, 第二参数分别代表User对象和错误信息
     * @return user
     */
    login: function (username, password, callback) {
        var name = 'login';
        var data = [username, password];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, function(result,data) {
            if(result) {
                SgtApi.context.userData = data;
                SgtApi.UserService.getPlayServer(callback);
            } else {
                callback(false, data);
            }
        });
    },

    /**
     * 客户端通过提交user对象完成注册
     * @method register
     * @param user{user}
     * @param callback{function} 回调函数
     * @return user
     */
    register: function(user, callback) {
        var name = 'register';
        var data = [user];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, function(result, data){
            if(result) {
                SgtApi.context.userData = data;
                SgtApi.UserService.getPlayServer(callback);
            } else {
                SgtApi.UserService.getPlayServer(callback);
            }
        });
    },

    /**
     * 自动注册 或者自动登录
     * @method registerByPhone
     * @param imei{string} 手机IMEI号
     * @param iccid{string} 手机ICCID号
     * @param mac{string} 手机MAC地址
     * @param callback{function} 回调函数
     * @return user
     */
    registerByPhone: function(imei, iccid, mac, callback) {
        var name = 'register';
        var data = [imei, iccid, mac];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, function(result, data){
            if(result) {
                SgtApi.context.userData = data;
                callback(true,data);
            } else {
                callback(false,data);
            }
        });
    },

    /**
     * 重置密码发送邮件
     * @method resetPassword
     * @param userName{string} 用户名
     * @param callback{function} 回调函数
     * @return null
     */
    resetPassword: function (userName, callback) {
        var name = 'resetPassword';
        var data = [userName];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 保存用户留资方法
     * @method saveLeaveInfo
     * @param userName{string} 用户留资对象
     * @param callback{function} 回调函数
     * @return userLeaveInfo
     */
    saveLeaveInfo: function(userLeaveInfo, callback) {
        var name = 'saveLeaveInfo';
        var data = [userLeaveInfo];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 发送手机验证码短信
     * @method sendCaptchaMessage
     * @param smobile{string} 用户手机号
     * @param appName{string} 当前产品名称
     * @param callback{function} 回调函数
     * @return data{boolean} true发送成功 false发送失败
     * @constructor
     */
    sendCaptchaMessage: function (smobile, appName, callback) {
        var name = 'SendMessage';
        var data = [smobile, appName];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 发送手机验证码短信
     * @method sendCaptchaMessage
     * @param smobile{string} 用户手机号
     * @param appName{string} 当前产品名称
     * @param appId{string} 当前appId
     * @param callback{function} 回调函数
     * @return data{boolean} true发送成功 false发送失败
     * @constructor
     */
    sendCaptchaMessageByAppId: function (smobile, appName, appId, callback) {
        var name = 'SendMessage';
        var data = [smobile, appName, appId];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);
    },

     /**
     * 通过用户名更改密码
     * @method updatePasswordByUserName
     * @param userName{string} 用户名
     * @param password{string} 密码
     * @param callback
     * @return null
     */
    updatePasswordByUserName: function (userName, password, callback) {
        var name = 'updatePasswordByUserName';
        var data=[userName, password];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);
    },

     /**
     * 更新用户信息
     * @method updateUser
     * @param user{user} 对象
     * @param callback 
     * @return user 更新之后的User
     */
    updateUser: function (user, callback) {
        var name = 'updateUser';
        var data = [user];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 更新用户名，密码，邮箱
     * @method updateUserByUserId
     * @param userId{string} 用户ID
     * @param userName{string} 用户名
     * @param password{string} 密码
     * @param email{string} 邮箱
     * @param callback
     * @return boolean
     */
    "updateUserByUserId": function (userId, userName, password, email, callback) {
        var name = 'updateUserByUserId';
        var data = [userId, userName, password, email];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);  
    },
    
     /**
     * 更新用户名，密码
     * @method updateUserByuserId
     * @param userId{string} 用户ID
     * @param userName{string} 用户名
     * @param password{string} 密码
     * @param callback
     * @return boolean
     */
    "updateUserNameAndPassword": function (userId, userName, password, callback) {
        var name = 'updateUserNameAndPassword';
        var data = [userId, userName, password];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);  
    },

    /**
     * 检测token有效性
     * @method validationToken
     * @param userName{string}  用户名
     * @param token{string} token令牌
     * @return boolean 
     */
    validationToken: function(userName, token, callback) {
        var name = 'validationToken';
        var data = [userName, token];
        var url = SgtApi.config.appGateway + '/user';
        SgtApi.doRPC(name, data, url, callback);
    },

    
    

    /**
     * 快速注册登录
     * @method quickLogin
     * @param callback
     * @return callback
     */
    quickLogin: function (callback) {

        var username = localStorage.getItem("sgt-" + SgtApi.config.appId + "-username");
        if (username) {
            var password = localStorage.getItem("sgt-" + SgtApi.config.appId + "-password");
            SgtApi.config.userName = username;
            SgtApi.config.userPassword = password;
            this.login(username, password, callback);
        } else {
            var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var name = "";
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
            var newuser = new SgtApi.entity.User();
            newuser.userName = name;
            newuser.password = 'yoedge2014';
            localStorage.setItem("sgt-" + SgtApi.config.appId + "-username", newuser.userName);
            localStorage.setItem("sgt-" + SgtApi.config.appId + "-password", newuser.password);
            this.register(newuser, callback);
        }
    },
    
    /**
     * 获取用户服务器信息
     * @method getPlayServer
     * @param callback
     * @return callback
     */
    getPlayServer: function (callback) {
        if (SgtApi.config.channelId === null) {
            return callback(false, 'channelId未设置！');
        }
        var backClient = new $JsonRpc({ajaxUrl: SgtApi.config.appGateway + "/route"});
        backClient.call(
            'route',
            [SgtApi.config.appId, {
                'userId': SgtApi.context.userData.userid,
                'createTime': SgtApi.context.userData.createTime,
                'channelId': SgtApi.config.channelId
            }],
            function (result) {
                console.log('success ' + result.result);
                SgtApi.context.playServerData = result.result;
                return callback(true, SgtApi.context.userData);
            },
            function (error) {
                console.log('There was an error.error[route]:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
    
};


/**
 * 角色处理逻辑业务接口
 *
 * @module  PlayerService
 * @type {{}|*}
 */
SgtApi.PlayerService = {

    //url: SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do',


    /**
     * 创建一个角色
     * @method create
     * @param player{player} 角色对象
     * @param callback{function}
     * @return player
     */
    create: function (player, callback) {
        player.lastLoginTime = SgtApi.context.userData.lastLoginTime;
        player.serverId = SgtApi.context.playServerData.id;
        player.userId = SgtApi.context.userData.userid;

        var name = 'create';
        var data = [player];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过playerId删除角色及相关信息
     * @method deleteSgpPlayerByPlayerId
     * @param playerId{string} 角色id
     * @param callback{Function} 回调函数
     * @return null
     */
    deletePlayerByPlayerId: function (playerId, callback) {
        var name = 'deleteSgpPlayerByPlayerId';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 下载存档
     * @method downloadSave
     * @param playerId{string} 角色ID
     * @param callback{function} 回调函数
     * @return Save 存档
     */
    downloadSave: function (playerId, callback) {
        var name = 'downloadSave';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据最后登陆时间查找角色
     * @method getByLastLoginTime
     * @param lastLoginTime{number} 最后登陆时间
     * @param start{int} 开始页
     * @param limit{int} 每页数量
     * @param callback{Function} 回调函数
     * @return Player[] 角色列表
     */
    getByLastLoginTime: function (lastLoginTime, start, limit, callback) {
        var name = 'getByLastLoginTime';
        var data = [lastLoginTime, start, limit];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     *根据角色名查找角色
     * @method getByName
     * @param playerName{string} 角色名
     * @param start{int} 开始页
     * @param limit{int} 每页数量
     * @param callback{Function} 回调函数
     * @return Player[] 角色列表
     */
    getByName: function (playerName, start, limit, callback) {
        var name = 'getByName';
        var data = [playerName, start, limit];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    }, 

    /**
     * 根据用户ID查找角色
     * @method getByUserId
     * @param userId{String} 用户ID
     * @param callback{Function} 回调函数
     * @return Player[] 角色列表
     */
    getByUserId: function (userId, callback) {
        var name = 'getByUserId';
        var data = [userId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定角色的好友上限
     * @method getFriendsMaxNumber
     * @param playerId{string} 角色ID
     * @param callback{Function} 回调函数
     * @return number 返回好友上限，0表示无上限
     */
    getFriendsMaxNumber: function (playerId, callback) {
        var name = 'getFriendsMaxNumber';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过用户ID查找其中的一个角色
     * @method getOneByuserId
     * @param userId{string} 用户ID
     * @param callback{Function} 回调函数
     * @return Player 单一角色
     */
    getOneByUserId: function (userId, callback) {
        var name = 'getOneByUserId';
        var data = [userId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过自定义ID获取角色信息
     * @method getSgpPlayerByCustomId
     * @param customId{string} 自定义ID
     * @param callback{Function} 回调函数
     * @return Player
     */
    getPlayerByCustomId: function (customId, callback) {
        var name = 'getSgpPlayerByCustomId';
        var data = [customId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过ID获取Player
     * @method getSgpPlayerById
     * @param playerId{string} 主键ID
     * @param callback{Function} 回调函数
     * @return player
     */
    getPlayerById: function (playerId, callback) {
        var name = 'getSgpPlayerById';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 随机返回若干个最近登录的player
     * @method searchPlayersByLastLogin
     * @param limit{int} 限制数量
     * @param callback{Function} 回调函数
     * @return player[]
     */
    searchPlayersByLastLogin: function (limit, callback) {
        var name = 'searchPlayersByLastLogin';
        var data = [limit];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 设置指定角色的好友上限
     * @method setFriendsMaxNumber
     * @param sgpPlayerId{string} 角色ID
     * @param number{int} 好友上限
     * @param callback{Function} 回调函数
     * @return null
     */
    setFriendsMaxNumber: function (playerId, number, callback) {
        var name = 'setFriendsMaxNumber';
        var data = [playerId, number];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 更新角色信息
     * @method update
     * @param playerinfo{Player} 角色对象
     * @param callback{Function} 回调函数
     * @return player
     */
    update: function (player, callback) {
        var name = 'update';
        var data = [player];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },


    /**
     * 上传存档
     * @method uploadSave
     * @param saveinfo{save} 存档实例
     * @param callback{Function} 回调函数
     * @return Save 保存后的存档
     */
    uploadSave: function (save, callback) {
        var name = 'uploadSave';
        var data = [save];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/sgpplayer.do';
        SgtApi.doRPC(name, data, url, callback);
    },
};

/**
 * 角色扩展业务接口
 *
 * @module PlayerExtraService
 * @type {{}|*}
 */
SgtApi.PlayerExtraService = {

    /**
     * 添加角色扩展信息
     * @method addPlayer
     * @param player{Object} 色扩展信息
     * @param callback{Function}
     * @return null
     */
    addPlayer: function (player, callback) {
        var name = 'addPlayer';
        var data = [player];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/playerExtraService.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据角色ID删除角色扩展信息
     * @method deletePlayerById
     * @param callback{Function} 回调函数
     * @return null
     */
    deletePlayerById: function (playerId, callback) {
        var name = 'deletePlayerById';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/playerExtraService.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 分页查询所有角色扩展信息列表
     * @method findAll
     * @param pageNumber{int} 页码
     * @param pageSize{int} 每页返回的数据条数
     * @param callback{Function} 回调函数
     * @return Object
     */
    findAll: function (pageNumber, pageSize, callback) {
        var name = 'findAll';
        var data = [pageNumber, pageSize];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/playerExtraService.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据条件查询角色扩展信息列表，支持分页
     * @method findAllByCondition
     * @param condition{map} 条件列表 key 字段名称 value 字段值
     * @param pageNumber{int} 页码
     * @param pageSize{int} 每页返回的数据条数
     * @param callback{Function} 回调函数
     * @return Object
     */
    findAllByCondition: function (condition, pageNumber, pageSize, callback) {
        var name = 'findAll';
        var data = [condition, pageNumber, pageSize];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/playerExtraService.do';
        SgtApi.doRPC(name, data, url, callback);
    },
    /**
     * 根据角色ID查找角色扩展信息
     * @method getPlayerById
     * @param callback{Function} 回调函数
     * @return Object
     */
    getPlayerById: function (playerId, callback) {
        var name = 'getPlayerById';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/playerExtraService.do';
        SgtApi.doRPC(name, data, url, callback);
    },
    /**
     * 根据条件查询角色列表
     * @method getPlayerList
     * @param condition{Map<String,String>} 查询条件 key 字段名称 value 字段值
     * @param callback 回调函数
     * @return Object 角色列表
     */
    getPlayerList: function (condition, callback) {
        var name = 'getPlayerList';
        var data = [condition];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/playerExtraService.do';
        SgtApi.doRPC(name, data, url, callback);
    },


    /**
     * 修改角色扩展信息
     * @method updatePlayerMap
     * @param player{Map<String,Object>} 角色扩展信息
     * @param callback{Function} 回调函数
     * @return null
     */
    updatePlayerMap: function (player, callback) {
        var name = 'updatePlayer';
        var data = [player];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/playerExtraService.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据角色ID修改角色扩展信息
     * @method updatePlayer
     * @param player{Object} 角色扩展信息
     * @param callback{Function} 回调函数
     * @return null
     */
    updatePlayer: function (playerId, player, callback) {
        var name = 'updatePlayer';
        var data = [playerId, player];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/playerExtraService.do';
        SgtApi.doRPC(name, data, url, callback);
    }
};

/**
 * 成就系统业务
 *
 * @module AchievementService
 * @type {{}|*}
 */
SgtApi.AchievementService = {


    /**
     * 达成成就
     * @method achieve
     * @param playerId{string} 角色ID
     * @param achievmentId{string} 成就ID
     * @param callback{Function} 回调函数
     * @return null
     */
    achieve: function (playerId, achievmentId, callback) {
        var name = 'achieve';
        var data = [playerId, achievmentId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 领取成就奖励
     * @method complete
     * @param playerId{string} 角色ID
     * @param achievmentId{string} 成就ID
     * @param callback{Function} 回调函数
     * @return string 奖励
     */
    complete: function (playerId, achievmentId, callback) {
        var name = 'complete';
        var data = [playerId, achievmentId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过type提交成就 进度数自动+1
     * @method excuteAchievementsByType
     * @param type{string} 任务的type类型
     * @param playerId{string} 角色ID
     * @param callback{Function} 回调函数
     * @return achievement[] 相同类型成就集合
     */
    excuteAchievementsByType: function (type, playerId, callback) {
        var name = 'excuteAchievementsByType';
        var data = [type, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过成就type累加指定进度
     * @param type{string}
     * @param playerId{string}
     * @param progress{number}
     * @param callback{function}
     * @return achievement[]
     */
    customAchievementsByType: function (type, playerId, progress, callback) {
        var name = 'excuteAchievementsByType';
        var data = [type, playerId, progress];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据成就ID获取成就信息
     * @method getAchievementById
     * @param achievementId{string} 成就ID
     * @param callback{Function} 回调函数
     * @return object 成就详情
     */
    "getAchievementById": function (achievementId, callback) {
        var name = 'getAchievementById';
        var data = [achievementId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过类型获取指定角色可以进行的任务
     * @method getAchievementsByType
     * @param playerId{string} 角色ID
     * @param type{string} 任务的type类型
     * @param callback{Function} 回调函数
     * @return object
     */
    "getAchievementsByType": function (playerId, type, callback) {
        var name = 'getAchievementsByType';
        var data = [playerId, type];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取可用的成就
     * @method getAllAchievements
     * @param callback{Function} 回调函数
     * @return object 成就集合
     */
    "getAllAchievements": function (callback) {
        var name = 'getAllAchievements';
        var data = [];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定角色未达成的成就
     * @method getAvailableAchievements
     * @param playerId{string} 角色ID
     * @param callback{Function} 回调函数
     * @return object 未达成成就集合
     */
    "getAvailableAchievements": function (playerId, callback) {
        var name = 'getAvailableAchievements';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定角色已领取奖励的成就
     * @method getCompleteAchievements
     * @param playerId{string} 角色ID
     * @param callback{Function} 回调函数
     * @return object 已领取奖励成就集合
     */
    "getCompleteAchievements": function (playerId, callback) {
        var name = 'getCompleteAchievements';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定角色已经达成的成就
     * @method getDoneAchievements
     * @param playerId{String} 角色ID
     * @param callback{Function} 回调函数
     * @return object 已达成成就集合
     */
    "getDoneAchievements": function (playerId, callback) {
        var name = 'getDoneAchievements';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 提交指定成就进度
     * @method setAchievementProgress
     * @param PlayerId{string} 角色ID
     * @param chievementId{string} 任务ID
     * @param progress{int} 进度
     * @param callback{Function} 回调函数
     * @return object
     */
    "setAchievementProgress": function (playerId, chievementId, progress, callback) {
        var name = 'setAchievementProgress';
        var data = [playerId, chievementId, progress];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    },
    /**
     * 设置指定类型的成就进度
     * @method setAchievementsProgressByType
     * @param type{string} 任务的type类型
     * @param playerId{string} 角色ID
     * @param progress{int} 进度
     * @param callback{Function} 回调函数
     * @return object
     */
    "setAchievementsProgressByType": function (type, playerId, progress, callback) {
        var name = 'setAchievementsProgressByType';
        var data = [type, playerId, progress];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/achievement.do';
        SgtApi.doRPC(name, data, url, callback);
    }
};

/**
 * 公告业务接口
 *
 * @module  AnnouncementService
 * @type {{}|*}
 */
SgtApi.AnnouncementService = {

    /**
     * 通过公告类型获取最新公告 （获取版本号最大的）
     * @method getAnnounceByType
     * @param type{int} 公告类型
     * @param callback{Function} 回调函数
     * @return Announcement
     */
    "getAnnounceByType": function (type, callback) {
        var name = 'getAnnounceByType';
        var data = [type];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/announcement.do';
        SgtApi.doRPC(name, data, url, callback);
    }
};

/**
 * 活动业务接口
 *
 * @module  CampaignService
 * @type {{}|*}
 */
SgtApi.CampaignService = {


    /**
     * 获取当前已经激活的活动
     * @method getAvailableCampaigns
     * @param callback 回调函数
     * @return campaign[]
     */
    "getAvailableCampaigns": function (callback) {
        var name = 'getAvailableCampaigns';
        var data = [];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/campaign.do';
        SgtApi.doRPC(name, data, url, callback);
    },


    /**
     * 通过时间区间获取活动
     * @method getByTimeZone
     * @param startTime{number} 开始时间
     * @param endTime{number} 结束时间
     * @param callback 回调函数
     * @return campaign[]
     */
    "getByTimeZone": function (startTime, endTime, callback) {
        var name = 'getByTimeZone';
        var data = [startTime, endTime];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/campaign.do';
        SgtApi.doRPC(name, data, url, callback);
    },
    /**
     * 通过活动ID获取活动
     * @method getCampaignById
     * @param id{int} 活动ID
     * @param callback 回调函数
     * @return campaign
     */
    "getCampaignById": function (campaignId, callback) {
        var name = 'getCampaignById';
        var data = [campaignId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/campaign.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过活动ID获取活动详情数据
     * @method getCampaignDetaiByCId
     * @param id{int} 活动id
     * @param callback 回调函数
     * @return callback
     */
    "getCampaignDetaiByCId": function (campaignId, callback) {
        var name = 'getCampaignDetaiByCId';
        var data = [campaignId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/campaign.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过活动详情ID获取活动详情数据
     * @method getCampaignDetaiById
     * @param id{int} 活动详情ID
     * @param callback 回调函数
     * @return campaignDetail
     */
    "getCampaignDetaiById": function (campaignId, callback) {
        var name = 'getCampaignDetaiById';
        var data = [campaignId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/campaign.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取进度
     * @method getCampaignProgress
     * @param campaignId{int} 活动id
     * @param playerId{string}
     * @param callback 回调函数
     * @return number
     */
    "getCampaignProgress": function (campaignId, playerId, callback) {
        var name = 'getCampaignProgress';
        var data = [campaignId, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/campaign.do';
        SgtApi.doRPC(name, data, url, callback);
    },


    /**
     * 更新进度
     * @method updateProgress
     * @param campaignId{int} 活动id
     * @param playerId{string}
     * @param progress{int} 进度
     * @param callback 回调函数
     * @return number
     */
    "updateProgress": function (campaignId, playerId, progress, callback) {
        var nae = 'updateProgress';
        var data = [campaignId, playerId, progress];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/campaign.do';
        SgtApi.doRPC(name, data, url, callback);
    }


};

/**
 * 签到接口(已启用,请参考最新的CheckinBoardService)
 * @module  CheckinBoardService
 * @type {{}|*}
 */
SgtApi.CheckinBoardService = {
    url: null,
    playerid: null,
    /**
     * 初始化接口
     * @method init
     * @param playerid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerid === null) {
            console.error("playerid is null");
            return false;
        }
        this.playerid = playerid;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/checkinboard.do';
        return true;
    },
    /**
     * 签到
     * @method checkin
     * @param callback
     * @return callback
     */
    "checkin": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'checkin',
            [this.playerid, SgtApi.config.CheckInBoardId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取最大累计签到数
     * @method accumlateCount
     * @param callback
     * @return callback
     */
    "accumlateCount": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'accumlateCount',
            [this.playerid, SgtApi.config.CheckInBoardId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取连续签到数
     * @method countinuousCount
     * @param callback
     * @return callback
     */
    "countinuousCount": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'countinuousCount',
            [this.playerid, SgtApi.config.CheckInBoardId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 通过CheckInBoardId获取签到板实体数据
     * @method getByChekinboardId
     * @param callback
     * @return callback
     */
    "getCheckinboardByChekinboardId": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCheckinboardByChekinboardId',
            [SgtApi.config.CheckInBoardId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },

    /**
     * 获取最后签到时间
     * @method getLastCheckinTime
     * @param callback
     * @return callback
     */
    "getLastCheckinTime": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getLastCheckinTime',
            [this.playerid, SgtApi.config.CheckInBoardId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },

    /**
     * 获取奖励
     * @method getRewardByChekinboardId
     * @param callback
     * @return callback
     */
    "getRewardByChekinBoardId": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getRewardByChekinboardId',
            [SgtApi.config.CheckInBoardId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 补签
     * @method setCheckinTimes
     * @param times{int} 补签次数
     * @param callback
     */
    "setCheckinTimes": function (times, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'setCheckinTimes',
            [this.playerid, SgtApi.config.CheckInBoardId, times],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 判断是否可以签到
     * @method validateCheckin
     * @param callback
     * @return callback
     */
    "validateCheckin": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'validateCheckin',
            [this.playerid, SgtApi.config.CheckInBoardId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取当前可用（有效时间内）的签到板
     * @method getAvailableChekinboards
     * @param callback
     * @return callback
     */
    "getAvailableCheckinBoards": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableChekinboards',
            [],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 根据自定义标签获取当前可用（有效时间内）的签到板
     * @method getAvailableChekinboardsByTag
     * @param tag{string} 自定义标签
     * @param callback
     */
    "getAvailableCheckinBoardsByTag": function (tag, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableChekinboardsByTag',
            [tag],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 根据类型获取当前可用（有效时间内）的签到板
     * @method getAvailableChekinboardsByType
     * @param type
     * @param callback
     * @return callback
     */
    "getAvailableCheckinBoardsByType": function (type, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableChekinboardsByType',
            [type],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }

};

/**
 * 日常任务接口
 * @module  DailyTaskService
 * @type {{}|*}
 */
SgtApi.DailyTaskService = {

    /**
     * 提交任务进度，每提交一次，任务进度+1
     * @method excuteTask
     * @param taskId{string} 任务ID
     * @param playerId{string}
     * @param callback 回调函数
     * @return dailyTask
     */
    "excuteTask": function (taskId, playerId, callback) {
        var name = 'excuteTask';
        var data = [taskId, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/dailytask.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过type提交任务，每提交一次，任务进度+1 type只能对应1或0个任务
     * @method excuteTaskByType
     * @param type{string} 任务的type类型
     * @param playerId{String}
     * @param callback 回调函数
     * @return dailyTask[]
     */
    "excuteTasksByType": function (type, playerId, callback) {
        var name = 'excuteTasksByType';
        var data = [type, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/dailytask.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 增加指定类型的任务进度
     * @method addexcuteTasksByType
     * @param type{string} 任务类型
     * @param playerId{String}
     * @param progress{int} 任务进度
     * @param callback 回调函数
     * @return dailyTask[]
     */
    "addexcuteTasksByType": function (type, playerId, progress, callback) {
        var name = 'excuteTasksByType';
        var data = [type, playerId, progress];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/dailytask.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取每天的日常任务
     * @method getDailyTasks
     * @param playerId{string}
     * @param callback 回调函数
     * @return dailyTask[]
     */
    "getDailyTasks": function (playerId, callback) {
        var name = 'getDailyTasks';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/dailytask.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过类型获取指定角色可以进行的任务
     * @method getDailyTasksByType
     * @param type{string} 任务类型
     * @param callback 回调函数
     * @return dailyTask[]
     */
    "getDailyTasksByType": function (playerId, type, callback) {
        var name = 'getDailyTasksByType';
        var data = [playerId, type];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/dailytask.do';
        SgtApi.doRPC(name, data, url, callback);
    },


    /**
     * 根据任务ID获取奖励 获取奖励时会先校验完成任务的进度
     * @method getReward
     * @param taskId{string} 任务ID
     * @param playerId{string}
     * @param callback 回调函数
     * @return string
     */
    "getReward": function (taskId, playerId, callback) {
        var name = 'getReward';
        var data = [taskId, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/dailytask.do';
        SgtApi.doRPC(name, data, url, callback);
    },


    /**
     * 提交指定任务进度
     * @method
     * @param playerId{string}
     * @param taskId{string} 任务ID
     * @param progress{number} 进度
     * @param callback 回调函数
     * @return dailyTask
     */
    "setTaskProgress": function (playerId, taskId, progress, callback) {
        var name = 'setTaskProgress';
        var data = [playerId, taskId, progress];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/dailytask.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 设置指定类型的任务进度
     * @method setTasksProgressByType
     * @param type{string} 任务类型
     * @param playerId{string}
     * @param progress{number} 任务进度
     * @param callback 回调函数
     * @return dailyTask
     */
    "setTasksProgressByType": function (type, playerId, progress, callback) {
        var name = 'setTasksProgressByType';
        var data = [type, playerId, progress];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/dailytask.do';
        SgtApi.doRPC(name, data, url, callback);
    }


};

/**
 * 通用任务模块业务接口
 * @module  TaskService
 * @type {{}|*}
 */
SgtApi.TaskService = {

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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据任务ID完成任务 仅完成任务，并不获得奖励
     * @method complete
     * @param playerId{string}
     * @param taskId{string} 任务id
     * @param callback{function] 回调函数
     * @return null
     */
    complete: function (playerId, taskId, callback) {
        var name = 'complete';
        var data = [playerId, taskId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据成就ID获取成就信息
     * @method getAchievementById
     * @param achievementId{string} 成就ID
     * @param callback{function} 回调函数
     * @return task
     */
    getAchievementById: function (achievementId, callback) {
        var name = 'getAchievementById';
        var data = [achievementId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据playerid获取所有可用的成就 若任务设置了做完后不显示则不会被返回
     * @method getAchievements
     * @param playerId{string}
     * @param actiontype{string}
     * @param callback{function} 回调函数
     * @return task[]
     */
    getAchievements: function (playerId, actionType, callback) {
        var name = 'getAchievements';
        var data = [playerId, actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取所有可用的成就 若任务设置了做完后不显示则不会被返回
     * @method getAchievementsByType
     * @param actiontype{string}
     * @param callback{function} 回调函数
     * @return task[]
     */
    getAchievementsByType: function (actionType, callback) {
        var name = 'getAchievementsByType';
        var data = [actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据指定的playerid获取特定的actiontype的任务
     * @method getActionCount
     * @param playerId{string}
     * @param actiontype{string} 与计数器type相对应，不能为空
     * @param callback
     * @return object
     */
    "getActionCount": function (playerId, actiontype, callback) {
        var name = 'getActionCount';
        var data = [playerId, actiontype];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取所有可用的成就 若任务设置了做完后不显示则不会被返回
     * @method getAllAchievements
     * @param callback{function} 回调函数
     * @return task[]
     */
    getAllAchievements: function (callback) {
        var name = 'getAllAchievements';
        var data = [];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
     * @method getAllDailyTasks
     * @param callback{function} 回调函数
     * @return task[]
     */
    getAllDailyTasks: function (callback) {
        var name = 'getAllDailyTasks';
        var data = [];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取所有可用的task 若任务设置了做完后不显示则不会被返回
     * @method getAllTasks
     * @param taskType{int}  0-成就，1-日常任
     * @param callback{function} 回调函数
     * @return task[]
     */
    getAllTasks: function (taskType, callback) {
        var name = 'getAllTasks';
        var data = [taskType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定角色已领取奖励的成就
     * @method getCompleteAchievements
     * @param playerId{string}
     * @param actiontype{string}
     * @param task[]
     */
    getCompleteAchievements: function (playerId, actionType, callback) {
        var name = 'getCompleteAchievements';
        var data = [playerId, actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定角色已领取奖励的日常任务
     * @method getCompleteDailyTasks
     * @param playerId{string}
     * @param actiontype{string} 传入null时将不对type进行筛选
     * @param callback
     * @return callback
     */
    getCompleteDailyTasks: function (playerId, actionType, callback) {
        var name = 'getCompleteDailyTasks';
        var data = [playerId, actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定类型该角色已经完成且还未领取奖励的Task 若任务设置了做完后不显示则不会被返回
     * @method getCompleteTasks
     * @param taskType{string} 传入null时将不对tasktype进行筛选
     * @param playerId{string} 角色id
     * @param actiontype{string} 传入null时将不对actiontype进行筛选
     * @param callback{function} 回调函数
     * @return task[]
     */
    getCompleteTasks: function (taskType, playerId, actiontype, callback) {
        var name = 'getCompleteTasks';
        var data = [taskType, playerId, actiontype];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据成就ID获取成就信息
     * @method getDailyTaskById
     * @param dailyTaskId{string} 成就ID
     * @param callback{function} 回调函数
     * @return task
     */
    getDailyTaskById: function (dailyTaskId, callback) {
        var name = 'getDailyTaskById';
        var data = [dailyTaskId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据playerid获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
     * @method getDailyTasks
     * @param playerId{string} 角色id
     * @param actiontype{string}
     * @param callback{function} 回调函数
     * @return task[]
     */
    getDailyTasks: function (playerId, actionType, callback) {
        var name = 'getDailyTasks';
        var data = [playerId, actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
     * @method getDailyTasksByType
     * @param actiontype{string}
     * @param callback
     * @return task[]
     */
    getDailyTasksByType: function (actionType, callback) {
        var name = 'getDailyTasksByType';
        var data = [actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定角色已经达成的成就
     * @method getDoneAchievements
     * @param playerId{string} 角色id
     * @param actiontype{string}
     * @param callback{function} 回调函数
     * @return task[]
     */
    getDoneAchievements: function (playerId, actionType, callback) {
        var name = 'getDoneAchievements';
        var data = [playerId, actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定角色已经达成的日常任务
     * @method getDoneDailyTasks
     * @param playerId{string} 角色id
     * @param actiontype{string}
     * @param callback{function} 回调函数
     * @return task[]
     */
    getDoneDailyTasks: function (playerId, actionType, callback) {
        var name = 'getDoneDailyTasks';
        var data = [playerId, actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定类型该角色已经领取过奖励的Task
     * @method getDoneTasks
     * @param taskType{string} 传入null时将不对tasktype进行筛选
     * @param playerId{string} 角色id
     * @param actiontype{string} 传入null时将不对actiontype进行筛选
     * @param callback{function} 回调函数
     * @return task[]
     */
    getDoneTasks: function (taskType, playerId, actionType, callback) {
        var name = 'getDoneTasks';
        var data = [taskType, playerId, actionType];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据任务ID获取奖励 获取奖励时会先校验完成任务的进度
     * @method getReward
     * @param playerId{string} 角色id
     * @param taskId{string} 任务ID
     * @param callback{function} 回调函数
     * @return string
     */
    getReward: function (playerId, taskId, callback) {
        var name = 'getReward';
        var data = [playerId, taskId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 根据ID获取指定Task
     * @method getTaskById
     * @param taskId{string} 任务id
     * @param callback{function} 回调函数
     * @return task
     */
    getTaskById: function (taskId, callback) {
        var name = 'getTaskById';
        var data = [taskId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取所有可用的task 若任务设置了做完后不显示则不会被返回
     * @method getTasksByType
     * @param taskType{string} 传入null时将不对tasktype进行筛选
     * @param actiontype{string} 传入null时将不对actiontype进行筛选
     * @param callback{function} 回调函数
     * @return task[]
     */
    getTasksByType: function (taskType, actiontype, callback) {
        var name = 'getTasksByType';
        var data = [taskType, actiontype];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/task.do';
        SgtApi.doRPC(name, data, url, callback);
    }
};

/**
 * 好友业务接口
 * @module  FriendshipService
 * @type {{}|*}
 */
SgtApi.FriendshipService = {

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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 自己作为被邀请者批量确认/接受好友关系，并发送邮件
     * @param sendIds{string[]}
     * @param receiveId{string}
     * @param mail{email}
     * @return null
     */
    acceptInviteByMail: function (sendIds, receiveId, mail) {
        var name = 'acceptInvite';
        var data = [sendIds, receiveId, mail];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取拒绝自己的请求
     * @method getDenied
     * @param page{int} 页码，1表示第一页
     * @param limit{int} 每页显示数量
     * @param myId{string} 自己的角色ID
     * @param callback
     * @return player[]
     */
    getDenied: function (page, limit, myId, callback) {
        var name = 'getDenied';
        var data = [page, limit, myId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过playerId获取该角色的好友数量
     * @method getFrindsCount
     * @param playerId{string} 角色id
     * @param callback
     * @return callback
     */
    getFrindsCount: function (playerId, callback) {
        var name = 'getFrindsCount';
        var data = [playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取邀请自己的player
     * @method getInvite
     * @param receiveId{string}
     * @param callback{function} 回调函数
     * @return player[]
     */
    getInvite: function (receiveId, callback) {
        var name = 'getInvite';
        var data = [receiveId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定用户的好友(已确认)列表
     * @method getMyFriends
     * @param page{int} 页码 1为第一页
     * @param limit{int} 每页显示的数量
     * @param playerId{string} 角色id
     * @param callback{function} 回调函数
     * @return player[]
     */
    getMyFriends: function (page, limit, playerId, callback) {
        var name = 'getMyFriends';
        var data = [page, limit, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取还未确认邀请的player
     * @method getNotConfirm
     * @param sendId{string}
     * @param callback
     * @return player[]
     */
    getNotConfirm: function (sendId, callback) {
        var name = 'getNotConfirm';
        var data = [sendId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 判断对方是否是自己的好友
     * @method isMyfriend
     * @param myId{string}
     * @param otherId{string[]}
     * @param callback
     * @return boolean
     */
    isMyfriend: function (myId, otherId, callback) {
        var name = 'isMyfriend';
        var data = [myId, otherId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 拒绝好友申请
     * @method refuse
     * @param sendId{string[]} 邀请者的角色ID集合
     * @param receiveId{string} 被邀请者的ID（一般为自己的ID）
     * @param callback{function} 回调函数
     * @return boolean
     */
    refuse: function (sendId, receiveId, callback) {
        var name = 'refuse';
        var data = [myId, otherId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 批量解除好友关系
     * @method unfriend
     * @param playerId{string} 发起请求的角色ID
     * @param unfriendId{string/string[]} 要解除好友关系的角色IDs
     * @param callback{function} 回调函数
     * @return null
     */
    unfriend: function (playerId, unfriendId, callback) {
        var name = 'unfriend';
        var data = [playerId, unfriendId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendship.do';
        SgtApi.doRPC(name, data, url, callback);
    }

};

/**
 * 好友关系扩展业务
 * @module  FriendshipExtra
 * @type {{}|*}
 */
SgtApi.FriendshipExtraService = {
   
    /**
     * 枚举自己（发起者）的（已验证）好友和key对应的扩展数据,支持分页
     * @method getAllMyFriendsAndExt
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
       var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendshipextra.do';
       SgtApi.doRPC(name, data, url, callback);
    },
    /**
     * 获取自己指定好友和扩展数据
     * @method getMyFriendAndExt
     * @param myPlayerId
     * @param friendId{string} 好友id
     * @param callback
     * @return friendshipExtra
     */
    getMyFriendAndExt: function (myPlayerId, friendId, callback) {
        var name = 'getMyFriendAndExt';
        var data = [myPlayerId, friendId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendshipextra.do';
        SgtApi.doRPC(name,data,url,callback);
    },
    /**
     * 批量修改自己（发起者）所有好友关系扩展数据中key对应的value的值
     * @method updateAllMyFriendExt
     * @param myPlayerId
     * @param key{string} 扩展数据Key
     * @param value{string} 扩展数据的值
     * @param callback
     * @return null
     */
    updateAllMyFriendExt: function (myPlayerId, key, value, callback) {
        var name = 'getMyFriendAndExt';
        var data = [myPlayerId, key, value];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendshipextra.do';
        SgtApi.doRPC(name,data,url,callback);
    },
    /**
     * 批量修改指定好友关系的扩展数据,中key对应的值将会替换现有value
     * @method updateMyFriendAllExt
     * @param myPlayerId
     * @param friendId{string} 好友id
     * @param newExt｛map<String,String>｝map
     * @param callback
     * @return null
     */
    updateMyFriendAllExt: function (myPlayerId, friendId, newExt, callback) {
        var name = 'updateMyFriendAllExt';
        var data = [myPlayerId, friendId, newExt];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendshipextra.do';
        SgtApi.doRPC(name,data,url,callback);
    },
    /**
     * 修改自己（发起者）某个好友关系扩展数据中key对应的value的值
     * @method updateMyFriendExt
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
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/friendshipextra.do';
        SgtApi.doRPC(name, data, url, callback);
    }
};

/**
 * 黑名单业务接口
 * @module  BlackListService
 * @type {{}|*}
 */
SgtApi.BlackListService = {

     /**
     * 将player添加到黑名单那
     * @method addPlayerIntoBlackList
     * @param blackListId{string} 黑名单ID
     * @param playerId{string} 角色ID
     * @param callback
     * @return boolean
     */
    addPlayerIntoBlackList: function (blacklistId, playerId, callback) {
        var name = 'addPlayerIntoBlackList';
        var data = [blacklistId, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/blacklist.do';
        SgtApi.doRPC(name,data,url,callback);
    },
    /**
     * 判断是否在黑名单之中
     * @method isInBlackList
     * @param blacklistId{string} 黑名单自定义ID
     * @param playerId{string} 玩家的角色ID
     * @param callback
     * @return boolean
     */
    isInBlackList: function (blacklistId, playerId, callback) {
        var name = 'isInBlackList';
        var data = [blacklistId, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/blacklist.do';
        SgtApi.doRPC(name,data,url,callback);
    }
};

/**
 * 抽奖业务接口
 * @module  GachaBoxService
 * @type {{}|*}
 */
SgtApi.GachaBoxService = {
 
        

    /**
     * 有自动修正的连抽
     * @method autobalanceDraw
     * @param playerId
     * @param gachaBoxId{int} 抽奖ID
     * @param num{int} 抽奖次数
     * @param callback
     * @return string[]
     */
    autobalanceDraw: function (playerId, gachaBoxId, num, callback) {
        var name = 'autobalanceDraw';
        var data = [playerId, gachaBoxId, num];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/gachabox.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 指定初始品质的自动修正连抽
     * @method autobalanceDraw
     * @param playerId
     * @param gachaBoxId{int} 抽奖ID
     * @param num{int} 抽奖次数
     * @param [initQuality]{int} 初始品质
     * @param callback
     * @return gachaBoxResult
     */
    autobalanceDrawQuality: function (playerId, gachaBoxId, num, quality, callback) {
        var name = 'autobalanceDraw';
        var data = [playerId, gachaBoxId, num];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/gachabox.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 指定初始品质和最大品质的自动修正连抽
     * @method autobalanceDraw
     * @param playerId
     * @param gachaBoxId{int} 抽奖ID
     * @param num{int} 抽奖次数
     * @param [initQuality]{int} 初始品质
     * @param maxQuality{int}
     * @param callback
     * @return gachaBoxResult
     */
    autobalanceDrawMaxQuality: function (playerId, gachaBoxId, num, quality, maxQuality, callback) {
        var name = 'autobalanceDraw';
        var data = [playerId, gachaBoxId, maxQuality, num];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/gachabox.do';
        SgtApi.doRPC(name, data, url, callback);
    },


    /**
     * 连续抽奖N次，N为数组qualities的元素个数，一个qualities元素对应一次抽奖
     * @method draw
     * @param playerId
     * @param gachaBoxId{int} 抽奖ID
     * @param quality{int/Array} 品质/品质数组
     * @param callback
     * @return string[]
     */
    draw: function (playerId, gachaBoxId, quality, callback) {
        var name = 'draw';
        var data = [playerId, gachaBoxId, quality];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/gachabox.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取当前所有有效的GachaBox
     * @method getAvailableGachaBox
     * @param callback
     * @return gachaBox[]
     */
    getAvailableGachaBox: function (callback) {
        var name = 'getAvailableGachaBox';
        var data = [];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/gachabox.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 获取指定名称的GachaBox
     * @method getGachaBoxByName
     * @param gachaBoxname{String} GachaBoxName
     * @param gachaBox
     */
    getGachaBoxByName: function (gachaBoxname, callback) {
        var name = 'getGachaBoxByName';
        var data = [gachaBoxname];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/gachabox.do';
        SgtApi.doRPC(name, data, url, callback);
    },
   
    /**
     * 获取指定gachaBox的奖品
     * @method getLotteriesByGachaBoxId
     * @param gachaBoxId{string} 抽奖ID
     * @param callback
     * @return lottery[]
     */
    getLotteriesByGachaBoxId: function (gachaBoxId, callback) {
        var name = 'getLotteriesByGachaBoxId';
        var data = [gachaBoxId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/gachabox.do';
        SgtApi.doRPC(name, data, url, callback);
    },
    
    /**
     * 指定奖品品质总值的连抽
     * @method limitDraw
     * @param playerId
     * @param gachaBoxId{int} 抽奖ID
     * @param limitQuality{int} 指定奖品品质
     * @param callback
     */
    limitDraw: function (playerId, gachaBoxId, limitQuality, callback) {
        var name = 'limitDraw';
        var data = [playerId, gachaBoxId, limitQuality];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/gachabox.do';
        SgtApi.doRPC(name, data, url, callback);
    }
};

/**
 * 排行榜接口
 * @module  LeaderboardService
 * @type {{}|*}
 */
SgtApi.LeaderBoardService = {

    /**
     * 更新分数值
     * @method addUpLeaderBoardScore
     * @param leaderId{String} 排行榜ID
     * @param playerId{string/string[]}
     * @param score{number/number[]} 增加的分数值
     * @param callback
     * @return boolean/boolean[]
     */
    addUpLeaderBoardScore: function (leaderId, playerId, score, callback) {
        var name = 'addUpLeaderBoardScore';
        var data = [leaderId, playerId, score];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/leaderboard.do';
        SgtApi.doRPC(name, data, url, callback);
    },

     /**
     * 通过排行榜的leaderBoardID获取leaderBoard信息
     * @method getLeaderBoardByLeaderId
     * @param leaderId{String} 排行榜LeaderBoardId
     * @param callback
     * @return leaderBoard
     */
    getLeaderBoardByLeaderId: function (leaderId, callback) {
        var name = 'getLeaderBoardByLeaderId';
        var data = [leaderId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/leaderboard.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过排行榜ID和角色ID获取该角色的排行榜（返回集合）
     * @method getLeaderBoardScoreByExample
     * @param leaderId{string} 排行榜ID
     * @param player
     * @param callback
     * @return leaderBoardScore[]
     */
    getLeaderBoardScoreByExample: function (leaderId, player, callback) {
       var name = 'getLeaderBoardScoreByExample';
       var data = [leaderId, player];
       var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/leaderboard.do';
       SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过排行榜ID和角色ID获取该角色的排行榜
     * @method getLeaderBoardScoreByLeaderIdAndPlayerId
     * @param leaderId{string} 排行榜ID
     * @param playerId{string} 角色ID
     * @param callback
     * @return leaderBoardScore
     */
    getLeaderBoardScoreByLeaderIdAndPlayerId: function (leaderId, playerId, callback) {
        var name = 'getLeaderBoardScoreByLeaderIdAndPlayerId';
        var data = [leaderId, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/leaderboard.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 如果我是第一名则返回我和后面4位 如果不是第一名则返回我前面一位+我+后面3位 如果我是最后一名则返回我前面四位+我
     * @method getLeaderBoardScoresByLeaderIdAndPlayerId
     * @param leaderId
     * @param playerId
     * @param callback
     * return leaderBoardScore[]
     */
    getLeaderBoardScoresByLeaderIdAndPlayerId : function (leaderId, playerId, callback) {
        var name = 'getLeaderBoardScoresByLeaderIdAndPlayerId';
        var data = [leaderId, playerId];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/leaderboard.do';
        SgtApi.doRPC(name, data, url, callback);
    },

    /**
     * 通过排行榜ID和排名获取排行榜集合 start从0开始，第一名的值是0 取前两名的则 start为0，limit为2 取第二名到第五名则start为1，limit为4 即：start的值为排名减1 如果取该排行榜中所有的排名 start和limit的值分别为：0 , -1
     * @method getTopLeaderBoardScoreByLeaderId
     * @param leaderId{String} 排行榜ID
     * @param start{int} 排名的起始位置（从0开始，第一位是0）
     * @param limit{int} 排名的结束位置
     * @param callback
     * @return leaderBoardScore[]
     */
    getTopLeaderBoardScoreByLeaderId : function (leaderId, start, limit, callback) {
        var name = 'getTopLeaderBoardScoreByLeaderId';
        var data = [leaderId, start, limit];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/leaderboard.do';
        SgtApi.doRPC(name, data, url, callback);
    },
    
    /**
     * 提交排行榜数值
     * @method submitLeaderBoardScore
     * @param leaderId{String} 排行榜ID
     * @param playerId{string/string[]}
     * @param score{number/number[]} 分数值
     * @param callback
     * @return boolean/boolean[]
     */
    submitLeaderBoardScore: function (leaderId, playerId, score, callback) {
        var name = 'submitLeaderBoardScore';
        var data = [leaderId, playerId, score];
        var url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/leaderboard.do';
        SgtApi.doRPC(name, data, url, callback);
     }
   
};

/**
 * 邮件接口
 * @module  MailService
 * @type {{}|*}
 */
SgtApi.MailService = {
    url: null,
    playerData: null,
    /**
     * 初始化接口
     * @method init
     * @param playerData{string} 角色信息
     * @return {boolean}
     */
    "init": function (playerData) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerData === null || typeof (playerData) == "undefined") {
            return false;
        }
        this.playerData = playerData;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/mail.do';
        return true;
    },
    /**
     * 发送一封邮件
     * @method sendMail
     * @param mail{mail} mail对象
     * @param callback
     * @return callback
     */
    "sendMail": function (mail, callback) {
        if (mail.title === '' || mail.title === null) {
            return callback(false, '邮件标题不能为空！');
        }
        if (mail.toId === '' || mail.toId === null) {
            return callback(false, '收邮件人ID不能为空！');
        }
        if (mail.toName === '' || mail.toName === null) {
            return callback(false, '收邮件人名字不能为空！');
        }
        mail.fromId = this.playerData.id;//String 发送者ID
        mail.fromName = this.playerData.name;//String 发送者名称

        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'send',
            [mail],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 接收邮件
     * @method receive
     * @param start{int} 开始页
     * @param limit{int} 每页显示的条数
     * @param status{int} 邮件状态
     * @param callback
     * @return callback
     */
    "receive": function (start, limit, status, callback) {
        if (start < 0 || start === null) {
            start = 1;
        }
        if (limit < 0 || limit === null) {
            limit = 5;
        }

        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'receive',
            [start, limit, this.playerData.id, status],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 接收未读取的邮件
     * @method receiveUnread
     * @param callback
     * @return callback
     */
    "receiveUnread": function (callback) {
        var timestamp = 0;
        var localS = null;
        if (cc.sys) {
            localS = cc.sys.localStorage;
        } else {
            localS = window.localStorage;
        }
        var otimestamp = localS.getItem("receiveUnread");
        if (typeof(otimestamp) != "undefined" && otimestamp && otimestamp !== "") {
            timestamp = parseInt(otimestamp);
        }
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'receiveUnread',
            [timestamp, this.playerData.id],
            function (result) {
                localS.setItem('receiveUnread', Math.round(new Date().getTime() / 1000));
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 阅读邮件/批量阅读邮件
     * @method readMail
     * @param id{int} 邮件ID/邮件ID集合[int]
     * @param callback
     * @return callback
     */
    "readMail": function (id, callback) {
        if (id === null) {
            return callback(false, 'ID为空！');
        }
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'read',
            [id],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 阅读一封邮件并领取附件
     * @method readAndPickAttachment
     * @param id{int} 邮件ID
     * @param callback
     * @return callback
     */
    "readAndPickAttachment": function (id, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'readAndPickAttachment',
            [id],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 删除封邮件/批量删除邮件
     * @method deleteMail
     * @param id{int} 邮件ID/邮件ID集合[int]
     * @param callback
     * @return callback
     */
    "deleteMail": function (id, callback) {
        if (id === null) {
            return callback(false, 'ID为空！');
        }
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'delete',
            [id],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取所有未读和已读的邮件集合
     * @method getReadedAndUnreadedMails
     * @param callback
     * @return callback
     */
    "getReadedAndUnreadedMails": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getReadedAndUnreadedMails',
            [this.playerData.id],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 领取邮件附件
     * @method pickAttachment
     * @param mailId{int} 邮件ID
     * @param callback
     */
    "pickAttachment": function (mailId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'pickAttachment',
            [mailId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }

};

/**
 * 通知模块业务
 * @module  Notification
 * @type {{}|*}
 */
SgtApi.Notification = {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/notification.do';
        return true;
    },
    /**
     * 获取最新状态的通知/获取某时间之后的通知
     * @method getLatestNotification
     * @param [time]{long} 时间戳（可选）
     * @param callback
     * @return callback
     */
    "getLatestNotification": function (time, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        if (time) {
            backClient.call(
                'getLatestNotification',
                [this.playid, time],
                function (result) {
                    return callback(true, result.result);
                },
                function (error) {
                    console.log('There was an error.error:', error.error);
                    return callback(false, error.error.message);
                }
            );
        } else {
            backClient.call(
                'getLatestNotification',
                [this.playid],
                function (result) {
                    return callback(true, result.result);
                },
                function (error) {
                    console.log('There was an error.error:', error.error);
                    return callback(false, error.error.message);
                }
            );
        }
    }
};

/**
 * 充值业务逻辑
 * @module  Purchase
 * @type {{}|*}
 */
SgtApi.Purchase = {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/purchase.do';
        return true;
    },
    /**
     * 获取服务器支持的支付渠道
     * @method getSupportedStores
     * @param callback
     * @return callback
     */
    "getSupportedStores": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getSupportedStores',
            [],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取玩家当前可用的充值信息，不包括不可见或达到购买次数限制的充值信息
     * @method getAvailableChargePoints
     * @param callback
     */
    "getAvailableChargePoints": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableChargePoints',
            [this.playid],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取充值结果，该接口负责去第三方查询支付结果或获取第三方回调信息，根据支付结果，来调用游戏业务逻辑
     * 支付成功，会调用PaymentCallback.doCallback执行游戏的业务逻辑（如加元宝、积分等）
     * 同时，sgt还记录了玩家的充值记录ChargeLog，充值次数等信息
     * @method getPaymentResult
     * @param transaction
     * @param callback
     * @return callback
     */
    "getPaymentResult": function (transaction, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getPaymentResult',
            [this.playid, transaction],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取玩家的累计充值金额，若玩家未充值过，则返回0
     * @method getTotalChargeCost
     * @param callback
     * @return callback
     */
    "getTotalChargeCost": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getTotalChargeCost',
            [this.playid],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 判断玩家某个计费点是否是首冲
     * @method isFirstCharge
     * @param customChargePointId{string} 自定义的计费点ID
     * @param callback
     * @return callback
     */
    "isFirstCharge": function (customChargePointId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'isFirstCharge',
            [this.playid, customChargePointId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取玩家某个计费点的充值次数
     * @method getChargeTimes
     * @param customChargePointId{string} 自定义计费点ID
     * @param callback
     * @return callback
     */
    "getChargeTimes": function (customChargePointId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getChargeTimes',
            [this.playid, customChargePointId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
};

/**
 * 商城业务接口
 * @module  StoreService
 * @type {{}|*}
 */
SgtApi.StoreService = {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/store.do';
        return true;
    },
    /**
     * 获取默认的商城
     * @method getDefaultStore
     * @param callback
     * @return callback
     */
    "getDefaultStore": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDefaultStore',
            [this.playid],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 根据商城ID获得商城，包含了商城中的所有物品，但物品购买冷却时间未设置
     * @method getStore
     * @param storeId{String} 商城ID
     * @param callback
     * @return callback
     */
    "getStore": function (storeId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getStore',
            [storeId, this.playid],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 购买指定的商品，如果使用游戏币购买，那么在购买前需要同步服务器端的游戏币
     * @method purchase
     * @param storeId{string} 商城ID
     * @param itemId{int} 物品ID
     * @param amounts{int} 购买数量
     * @param ckret 如果为true，则需要返回一个订单id（即did），网游一般需要来操作
     * @param callback
     * @return callback
     */
    "purchase": function (storeId, itemId, amounts, ckret, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'purchase',
            [this.playid, storeId, itemId, amounts, ckret],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取角色在指定商店的购买次数
     * @method countStoreOrdersByPlayerId
     * @param storeId{string} 商城ID
     * @param callback
     * @return callback
     */
    "countStoreOrdersByPlayerId": function (storeId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'countStoreOrdersByPlayerId',
            [this.playid, storeId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取角色购买某个商品的次数
     * @method countItemOrdersByPlayerId
     * @param storeId{string} 商城ID
     * @param itemId{int} 物品ID
     * @param callback
     * @return callback
     */
    "countItemOrdersByPlayerId": function (storeId, itemId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'countItemOrdersByPlayerId',
            [this.playid, storeId, itemId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 查询购买记录
     * @method getOrderById
     * @param storeId{int} 记录ID
     * @param callback
     * @return callback
     */
    "getOrderById": function (storeId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getOrderById',
            [storeId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取角色最近购买某个商品的时间的毫秒数
     * @method getLastPurchaseTimeMillis
     * @param storeId{string} 商城ID
     * @param itemId{int} 物品ID
     * @param callback
     * @return callback
     */
    "getLastPurchaseTimeMillis": function (storeId, itemId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getLastPurchaseTimeMillis',
            [this.playid, storeId, itemId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 支付回调接口，对订单状态进行更新
     * @method updateOrderStatus
     * @param did{string} DID
     * @param success{bool} 支付是否成功 [true 成功 false 失败]
     * @param callbackMessage{string} 回调信息，可选
     * @param callback
     * @return callback
     */
    "updateOrderStatus": function (did, success, callbackMessage, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updateOrderStatus',
            [did, success, callbackMessage],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
};

/**
 * 计费点业务
 * @module  ChargePoint
 * @type {{}|*}
 */
SgtApi.ChargePoint = {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/chargepoint.do';
        return true;
    },
    /**
     * 获取所有计费点
     * @method getAllChargePoints
     * @param callback
     * @return callback
     */
    "getAllChargePoints": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAllChargePoints',
            [],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取当前可用的计费点
     * @method getAvailableChargePoints
     * @param callback
     * @return callback
     */
    "getAvailableChargePoints": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableChargePoints',
            [],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
};

/**
 * BOSS业务接口
 * @module  BossService
 * @type {{}|*}
 */
SgtApi.BossService = {
    url: null,
    playerid: null,
    /**
     * 初始化接口
     * @method init
     * @param playerid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerid === null) {
            return false;
        }
        this.playerid = playerid;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/boss.do';
        return true;
    },
    /**
     * 通过id字符串获取boss数组
     * @method getByBossIdstr
     * @param ids{string} 若干个id拼成的字符串，用逗号隔开
     * @param callback
     * @return callback
     */
    "getByBossIdstr": function (ids, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getByBossIds',
            [ids],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 批量获取boss数据
     * @method getByBossIdint
     * @param id{int}  bossId数组[int]
     * @param callback
     * @return callback
     */
    "getByBossIdint": function (id, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getByBossIds',
            [id],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 通过bossId获取Boss实体
     * @method getByBossId
     * @param id{int} BossId
     * @param callback
     * @return callback
     */
    "getByBossId": function (id, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getByBossId',
            [id],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 更新boss血量
     * @method attack
     * @param bossId{int} BossId
     * @param damage{int} 伤害量
     * @param callback
     * @return callback
     */
    "attack": function (bossId, damage, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'attack',
            [bossId, damage, this.playerid],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取boss当前血量
     * @method getCurrentHP
     * @param bossId{int} BossId
     * @param callback
     * @return callback
     */
    "getCurrentHP": function (bossId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCurrentHP',
            [bossId, this.playerid],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取最后击杀人
     * @method getLastAttackPlayer
     * @param bossId{int} BossId
     * @param callback
     * @return callback
     */
    "getLastAttackPlayer": function (bossId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getLastAttackPlayer',
            [bossId],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
};

/**
 * 文件分发存储业务
 * @module  FileStorage
 * @type {{}|*}
 */
SgtApi.FileStorage = {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/filestorage.do';
        return true;
    },
    /**
     * 判断是否在黑名单之中
     * @method getUrl
     * @param fileName{string} 文件路径/key值
     * @param callback
     * @return callback
     */
    "getUrl": function (fileName, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getUrl',
            [fileName],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 删除文件
     * @method delete
     * @param fileName{string} 文件路径/key值
     * @param callback
     * @return callback
     */
    "delete": function (fileName, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'delete',
            [fileName],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
};

/**
 * 礼包/兑换码业务接口
 * @module  GiftCode
 * @type {{}|*}
 */
SgtApi.GiftCode = {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/giftcode.do';
        return true;
    },
    /**
     * 获取有效的礼包
     * @method getGifts
     * @param callback
     * @return callback
     */
    "getGifts": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getGifts',
            [],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 兑换并返回奖品
     * @method redeem
     * @param giftId{string} 礼包ID
     * @param code{string} 兑换码
     * @param callback
     * @return callback
     */
    "redeem": function (giftId, code, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'redeem',
            [this.playid, giftId, code],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 通过兑换码获取礼包详情
     * @method getGiftByCode
     * @param code{string} 兑换码
     * @param callback
     * @return callback
     */
    "getGiftByCode": function (code, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getGiftByCode',
            [code],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     *获取兑换记录， playerId和giftId至少有一个不为空。 playerId为null则返回该礼包的所有记录 giftId为null则返回该角色所有兑换记录
     * @method getRecord
     * @param giftId{string} 礼包ID
     * @param start{int} 起始页码
     * @param limit{int} 每页显示条目数
     * @param callback
     * @return callback
     */
    "getRecord": function (giftId, start, limit, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getRecord',
            [this.playid, giftId, start, limit],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 兑换奖励，奖励通过邮件发送
     * @method redeemOverMail
     * @param giftId{string} 礼包ID
     * @param code{string} 兑换码
     * @param callback
     * @return callback
     */
    "redeemOverMail": function (code, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getRecord',
            [this.playid, code],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 兑奖并使用邮件直接发送奖励给角色
     * @method redeemOverMail
     * @param code{string} 兑换码
     * @param callback
     * @return callback
     */
    "redeemGiftByCodeOverMail": function (code, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'redeemGiftByCodeOverMail',
            [this.playid, code],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
};

/**
 * 个人通道业务接口
 * @module  PrivateChannel
 * @type {{}|*}
 */
SgtApi.PrivateChannel = {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playid) {
            this.playid = playid;
        } else {
            console.log('There was an error:playid is null');
            return false;
        }

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/privatechannel.do';
        return true;
    },
    /**
     * 压入消息，同时会更新通道的ttl，如果ttl为0，则默认为一周
     * @method pushMessage
     * @param key{string} 通道key
     * @param message{string} 压入的消息
     * @param ttl{long} 存活时间，毫秒数
     * @param callback
     * @return callback
     */
    "pushMessage": function (key, message, ttl, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'pushMessage',
            [key, this.playid, message, ttl],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 批量压入消息，同时会更新通道的ttl，如果ttl为0，则默认为一周
     * @method pushMessages
     * @param key{string} 通道key
     * @param message{Array} 压入的消息[string]
     * @param ttl{long} 存活时间，毫秒数
     * @param callback
     */
    "pushMessages": function (key, message, ttl, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'pushMessages',
            [key, this.playid, message, ttl],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取消息，默认情况下消息在获取后会被删除
     * @method popMessage
     * @param key{string} 通道key
     * @param callback
     * @return callback
     */
    "popMessage": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'popMessage',
            [key, this.playid],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取消息，可指定是否删除已获取的消息
     * @method popMessageBy
     * @param key{string} 通道key
     * @param clear{bool} 是否清空消息， 清空消息 true 清空 false
     * @param ttl{long] 存活时间，毫秒数
     * @param callback
     * @return callback
     */
    "popMessageBy": function (key, clear, ttl, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'popMessage',
            [key, this.playid, clear, ttl],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 清空指定通道内的消息
     * @method clearChannel
     * @param key{string} 通道key
     * @param callback
     * @return callback
     */
    "clearChannel": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'clearChannel',
            [key, this.playid],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    }
};

/**
 * 公共通道业务接口
 * @module  PublicChannelService
 * @type {{}|*}
 */
SgtApi.PublicChannelService = {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/publicchannel.do';
        return true;
    },
    /**
     * 创建公共通道
     * @method createChannel
     * @param channelId{string} 通道ID
     * @param name{string} 通道名称
     * @param callback
     * @return callback
     */
    "createChannel": function (channelId, name, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'createChannel',
            [channelId, name],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 压入消息
     * @method pushMessage
     * @param channelId{string} 通道ID
     * @param type{string} 消息类型
     * @param content{string} 消息内容
     * @param callback
     * @return callback
     */
    "pushMessage": function (channelId, type, content, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'pushMessage',
            [channelId, type, content],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取所有消息
     * @method popAllMessage
     * @param channelId{string} 通道ID
     * @param callback
     * @return callback
     */
    "popAllMessage": function (channelId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'popAllMessage',
            [channelId],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取从指定时间到当前时间的消息/获取从指定时间区间的消息
     * @method popMessage
     * @param channelId{string} 通道ID
     * @param createTimeStart{long} 消息创建时间
     * @param createTimeEnd{long} 消息创建截止时间(可选 null)
     * @param callback
     * @return callback
     */
    "popMessage": function (channelId, createTimeStart, createTimeEnd, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'popMessage',
            [channelId, createTime, createTimeEnd],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 返回最近创建的消息条数，如果要取的消息条数不够指定的条数，则返回实际的条数
     * @method popMessageOrnum
     * @param mssgnum{int} 要取的消息的条数
     * @param channelId{string} 通道ID
     * @param callback
     */
    "popMessageOrnum": function (mssgnum, channelId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'popMessage',
            [mssgnum, channelId],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取从指定时间区间的消息，如果要取的消息条数不够指定的条数，则返回实际的条数
     * @method popMessageOrnumtim
     * @param channelId{string} 通道ID
     * @param createTimeStart{long} 消息创建开始时间
     * @param createTimeEnd{long} 消息创建截止时间
     * @param mssgnum{int} 要取的消息的条数
     * @param callback
     * @return callback
     */
    "popMessageOrnumtim": function (channelId, createTimeStart, createTimeEnd, mssgnum, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'popMessage',
            [channelId, createTimeStart, createTimeEnd, mssgnum],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 清空指定通道内的消息
     * @method clearChannel
     * @param channelId{string} 通道ID
     * @param callback
     * @return callback
     */
    "clearChannel": function (channelId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'clearChannel',
            [channelId],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 删除指定通道内的指定消息
     * @method deleteMessage
     * @param channelId{string} 通道ID
     * @param messageIds{int} 消息ID
     * @param callback
     * @return callback
     */
    "deleteMessage": function (channelId, messageIds, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'deleteMessage',
            [channelId, messageIds],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取指定消息的内容
     * @method getMessageContent
     * @param messageIds{int} 消息ID
     * @param callback
     * @return callback
     */
    "getMessageContent": function (messageIds, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getMessageContent',
            [messageIds],
            function (result) {
                callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                callback(false, error.error.message);
            }
        );
    }
};

/**
 * 第三方回调接口
 * @module  DelegateDid
 * @type {{}|*}
 */
SgtApi.DelegateDid = {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi.context.userData === null) {
            console.log('There was an error:', '没获取用户信息！');
            return false;
        }
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/delegatedid.do';
        return true;
    },
    /**
     * 创建代理id（did）
     * @method createDid
     * @param appId{string} appId
     * @param serverId{string} 服务器ID
     * @param callback
     * @return callback
     */
    "createDid": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'createDid',
            [SgtApi.context.playServerData.id, SgtApi.context.userData.userId, this.playid],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 根据DID查询订单信息
     * @method queryByDid
     * @param did{string} 代理ID
     * @param callback
     * @return callback
     */
    "queryByDid": function (did, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'queryByDid',
            [did],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 查找角色的历史订单
     * @method queryByCondition
     * @param callback
     * @return callback
     */
    "queryByCondition": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'queryByCondition',
            [SgtApi.context.playServerData.id, this.playid],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
};

/**
 * 结构化数据业务接口
 * @module  StructuredDataService
 * @type {{}|*}
 */
SgtApi.StructuredDataService = {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/structureddata.do';
        return true;
    },
    /**
     * 获取普通的StringValue
     * @method getValue
     * @param key{string} key
     * @param callback
     * @return callback
     */
    "getValue": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getValue',
            [key],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 添加或保存StringValue
     * @method saveOrUpdateValue
     * @param key{string}
     * @param value{string}
     * @param callback
     * @return callback
     */
    "saveOrUpdateValue": function (key, value, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'saveOrUpdateValue',
            [key, value],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取ListValue，返回数组
     * @method getListValue
     * @param key{string}
     * @param callback
     * @return callback
     */
    "getListValue": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getListValue',
            [key],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 向List中添加一个值
     * @method addListValue
     * @param key{string}
     * @param value{string}
     * @param callback
     * @return callback
     */
    "addListValue": function (key, value, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'addListValue',
            [key, value],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 更新list中的一个值
     * @method updateListValue
     * @param key{string} key
     * @param newValue{string} 新值
     * @param oldValue{string} 老值
     * @param callback
     * @return callback
     */
    "updateListValue": function (key, newValue, oldValue, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updateListValue',
            [key, newValue, oldValue],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取Map
     * @method getMapValue
     * @param key{string} key
     * @param callback
     * @return callback
     */
    "getMapValue": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getHashValue',
            [key],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取Map中的Value
     * @method getMapValue
     * @param key{string} key
     * @param hashKey{string} Map中的key
     * @param callback
     * @return callback
     */
    getMapValueByHashKey: function (key, hashKey, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getHashValue',
            [key, hashKey],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 保存或修改 Map
     * @method saveOrUpdateMap
     * @param key{string} key
     * @param map{json}  Map
     * @param callback
     * @return callback
     */
    "saveOrUpdateMap": function (key, map, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'saveOrUpdateHashValue',
            [key, map],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 保存或修改 Map
     * @method setOrUpdateHashValue
     * @param key{string} redis中的key
     * @param hashKey{string} Map中的key
     * @param value{string} Map中的key
     * @param callback
     * @return callback
     */
    "setOrUpdateHashValue": function (key, hashKey, value, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'saveOrUpdateHashValue',
            [key, hashKey, value],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取set
     * @method getSetValue
     * @param key{string} key
     * @param callback
     * @return callback
     */
    "getSetValue": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getSetValue',
            [key],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 向set添加一个value
     * @method addSetValue
     * @param key{string}
     * @param value{string}
     * @param callback
     * @return callback
     */
    "addSetValue": function (key, value, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'addSetValue',
            [key, value],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 修改set中的一个值
     * @method updateSetValue
     * @param key{string} key
     * @param newValue{string} 新的值
     * @param oldValue{string} 待修改老值
     * @param callback
     * @return callback
     */
    "updateSetValue": function (key, newValue, oldValue, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updateSetValue',
            [key, newValue, oldValue],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 获取ZSet（默认正序排列）
     * @method getZSetValue
     * @param key{string} key
     * @param callback
     * @return callback
     */
    "getZSetValue": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getZSetValue',
            [key],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 添加一个值到ZSet
     * @method addZSetValue
     * @param key{string} key
     * @param value{string} 值
     * @param weight{double} 权值
     * @param callback
     * @return callback
     */
    "addZSetValue": function (key, value, weight, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'addZSetValue',
            [key, value, weight],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 更新一个ZSet的老值
     * @method updateZSetValue
     * @param key{string} key
     * @param value{string} 新值
     * @param weight{double} 权值
     * @param oldValue{string} 老值
     * @param callback
     * @return callback
     */
    "updateZSetValue": function (key, value, weight, oldValue, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updateZSetValue',
            [key, value, weight, oldValue],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 通过权值获取 Zset
     * @method getZSetRangByScore
     * @param key{string} key
     * @param min{double} 最小值
     * @param max{double} 最大值
     * @param callback
     * @return callback
     */
    "getZSetRangByScore": function (key, min, max, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getZSetRangByScore',
            [key, min, max],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 通过List索引位置获取集合，返回数组
     * @method getListByIndex
     * @param key{string} key
     * @param start{long} 开始
     * @param end{long} 结束
     * @param callback
     * @return callback
     */
    "getListByIndex": function (key, start, end, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getListByIndex',
            [key, start, end],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 从redis中删除一个key
     * @method remove
     * @param key{string} key
     * @param callback
     * @return callback
     */
    "remove": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'remove',
            [key],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 从指定key的set中删除一个value
     * @method removeFromSet
     * @param key{string} key
     * @param value{string} value
     * @param callback
     * @return callback
     */
    "removeFromSet": function (key, value, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'removeFromSet',
            [key, value],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 从hash中删除指定key的hashkey
     * @method removeFromHash
     * @param key{string} key
     * @param hashKey{string} hash的key值
     * @param callback
     * @return callback
     */
    "removeFromHash": function (key, hashKey, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'removeFromHash',
            [key, hashKey],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 判断value是否在指定key的set列表中
     * @method containtSet
     * @param key{string} hashKey
     * @param value{string} value
     * @param callback
     * @return callback
     */
    "containtSet": function (key, value, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'containtSet',
            [key, value],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 判断hashKey是否在指定key的hash散列中
     * @method containsHash
     * @param key{string} key
     * @param hashKey{string} hashKey
     * @param callback
     * @return callback
     */
    "containsHash": function (key, hashKey, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'containsHash',
            [key, hashKey],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 判断redis中是否存在指定key
     * @method containsKey
     * @param key{string} key
     * @param callback
     * @return callback
     */
    "containsKey": function (key, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'containsKey',
            [key],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }
};


/**
 * 反馈举报 业务接口
 * @module  TicketService
 * @type {{}|*}
 */
SgtApi.TicketService = {
    url: null,
    playerid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerid === null) {
            return false;
        }
        this.playerid = playerid;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/ticket.do';
        return true;
    },
    /**
     * 通过反馈者playerId获取 自己发起的反馈信息
     * @method getTicketsById
     * @param page{int} 页码
     * @param size{int} 每页显示的条目数
     * @param status{int} 状态
     * @param callback
     * @return callback
     */
    "getTicketsById": function (page, size, status, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getTicketsBySenderPlayerId',
            [this.playerid, page, size, status],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    },
    /**
     * 提交反馈
     * @method sendTicket
     * @param ticket{Ticket}
     * @param callback
     * @return callback
     */
    "sendTicket": function (ticket, callback) {
        ticket.senderPlayerId = this.playerid;//提交者ID

        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'sendTicket',
            [ticket],
            function (result) {
                return callback(true, result.result);
            },
            function (error) {
                console.log('There was an error.error:', error.error);
                return callback(false, error.error.message);
            }
        );
    }

};


/**
 *
 * @module  ErrorReportService
 * @type {{}|*}
 */
SgtApi.ErrorReportService = {
    url: null,
    playerid: null,

    /**
     * 初始化接口
     * @method init
     * @param playerid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerid) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerid === null) {
            return false;
        }
        this.playerid = playerid;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/errorreport.do';
        return true;
    },

    /**
     * 发送错误自定义事件
     * @method sendErrorReport
     * @param type{string} 错误类型
     * @param customId{string} 自定义的ID，如战报ID
     * @param content{string} 自定义数据内容
     * @return callback
     */
    "sendErrorReport": function (type, customId, content, callback) {
        var name = 'sendErrorReport';
        var data = [this.playerid, type, customId, content];
        SgtApi.doRPC(name, data, this.url, callback);
    }
};

/**
 * @module InvitationCodeService
 * @type {{}|*}
 */
SgtApi.InvitationCodeService = {
    url: null,
    playerId: null,

    /**
     * 初始化接口
     * @method init
     * @param playerid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerId) {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerId === null) {
            return false;
        }
        this.playerId = playerId;

        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/invitationcode.do';
        return true;
    },

    /**
     * 获取邀请码
     * @method getInvitationCode
     * @param playerId{string} 角色ID
     * @return callback
     */
    "getInvitationCode": function (callback) {
        var name = 'getInvitationCode';
        var data = [this.playerId];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 被邀请人领取奖励
     * @method getInviteeReward
     * @param inviteePlayerId {string} 被邀请人角色ID
     * @param invitationCode{string}  邀请码
     * @return callback
     */
    "getInviteeReward": function (inviteePlayerId, invitationCode, callback) {
        var name = 'getInviteeReward';
        var data = [inviteePlayerId, invitationCode];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 邀请人领取奖励
     * @method getInviterReward
     * @param inviterPlayerId  {string} 邀请人角色ID
     * @return callback
     */
    "getInviterReward": function (inviterPlayerId, callback) {
        var name = 'getInviterReward';
        var data = [inviterPlayerId];
        SgtApi.doRPC(name, data, this.url, callback);
    },


    /**
     * 兑换邀请码奖励
     * 该方法会给被邀请人和邀请人都发放奖励
     * @method redeemReward
     * @param invitationCode  {string} 邀请码
     * @param inviterPlayerId   {string}  邀请人角色ID
     * @param inviteePlayerId    {string} 被邀请人角色ID
     * @return callback
     */
    "redeemReward": function (invitationCode, inviterPlayerId, inviteePlayerId, callback) {
        var name = 'redeemReward';
        var data = [invitationCode, inviterPlayerId, inviteePlayerId];
        SgtApi.doRPC(name, data, this.url, callback);
    },


    /**
     * 获取指定玩家邀请数量
     * @method getInviteCount
     * @param inviterPlayerId   {string}
     * @return callback
     */
    "getInviteCount": function (inviterPlayerId, callback) {
        var name = 'getInviteCount';
        var data = [inviterPlayerId];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 给指定玩家的邀请人发放奖励
     * @method redeemInviterReward
     * @param inviteePlayerId    {string}   被邀请人角色ID
     * @return callback
     */
    "redeemInviterReward": function (inviteePlayerId, callback) {
        var name = 'redeemInviterReward';
        var data = [inviteePlayerId];
        SgtApi.doRPC(name, data, this.url, callback);
    }
};

/**
 * @module PaymentCallbackService
 * @type {{}|*}
 */
SgtApi.PaymentCallbackService = {
    url: null,

    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/paymentcallback.do';
        return true;
    },

    /**
     * 充值业务回调
     * @method doCallback
     * @param transaction
     * @param callback
     */
    "doCallback": function (transaction, callback) {
        var name = 'doCallback';
        var data = [transaction];
        SgtApi.doRPC(name, data, this.url, callback);
    }
};

/**
 * @module RouterService
 * @type {{}|*}
 */
SgtApi.RouterService = {
    url: null,

    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/router.do';
        return true;
    },
    /**
     * 获取当前服务器时间戳
     * @method getCurrentTimestamp
     * @param callback
     */
    'getCurrentTimestamp': function (callback) {
        var name = 'getCurrentTimestamp';
        var data = [];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 获取注册或登录的服务器 （随机返回）
     * @method getRegisterServer
     * @param appId
     * @param callback
     */
    'getRegisterServer': function (appId, callback) {
        var name = 'getRegisterServer';
        var data = [appId];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 批量获取服务器信息
     * @method getServerList
     * @param appId
     * @param callback
     */
    'getServerList': function (appId, callback) {
        var name = 'getServerList';
        var data = [appId];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 默认获取服务器信息方法（由策略决定）
     * @method route
     * @param appId
     * @param map
     */
    'route': function (appId, map) {
        var name = 'route';
        var data = [appId, map];
        SgtApi.doRPC(name, data, this.url, callback);
    }

};

/**
 * 时间戳业务接口
 * @module  TimestampService
 * @type {{}|*}
 */
SgtApi.TimestampService = {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/timestamp.do';
        return true;
    },

    /**
     * 获取当前节点服务器的时间戳
     * @Method getCurrentTimestamp
     * @param callback
     */
    'getCurrentTimestamp': function (callback) {
        var name = 'getCurrentTimestamp';
        var data = [];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 获取一个时间戳 返回key对应的时间戳
     * @Method getTimestamp
     * @param sgpPlayerId
     * @param key
     * @param callback
     */
    'getTimestamp': function (sgpPlayerId, key, callback) {
        var name = 'getTimestamp';
        var data = [sgpPlayerId, key];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 获取用户的所有时间戳 返回所有的时间戳
     * @Method getTimestamps
     * @param sgpPlayerId
     * @param callback
     */
    'getTimestamps': function (sgpPlayerId, callback) {
        var name = 'getTimestamps';
        var data = [sgpPlayerId];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 移除一个时间戳
     * @Method removeTimestamp
     * @param sgpPlayerId
     * @param key
     * @param callback
     */
    'removeTimestamp': function (sgpPlayerId, key, callback) {
        var name = 'removeTimestamp';
        var data = [sgpPlayerId, key];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 批量移除时间戳
     * @Method removeTimestamps
     * @param sgpPlayerId
     * @param keys
     * @param callback
     */
    'removeTimestamps': function (sgpPlayerId, keys, callback) {
        var name = 'removeTimestamps';
        var data = [sgpPlayerId, keys];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 添加时间戳
     * @Method saveTimestamp
     * @param sgpPlayerId
     * @param key
     * @param timestamp
     * @param callback
     */
    'saveTimestamp': function (sgpPlayerId, key, timestamp, callback) {
        var name = 'saveTimestamp';
        var data = [sgpPlayerId, key, timestamp];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 创建/更新一个带偏移的时间戳 创建/更新成功则返回时间戳，失败则抛出异常
     * @Method updateTimestamp
     * @param sgpPlayerId
     * @param key
     * @param offset
     * @param callback
     */
    'updateTimestamp': function (sgpPlayerId, key, offset, callback) {
        var name = 'updateTimestamp';
        var data;
        if (arguments.length == 3) {
            data = [sgpPlayerId, key];
            SgtApi.doRPC(name, data, this.url, offset);
        } else {
            data = [sgpPlayerId, key, offset];
            SgtApi.doRPC(name, data, this.url, callback);
        }
    },

    /**
     * 批量创建/更新带偏移的时间戳 创建/更新成功则返回时间戳，失败则抛出异常
     * @Method updateTimestamps
     * @param sgpPlayerId
     * @param keys
     * @param offset
     * @param callback
     */
    'updateTimestamps': function (sgpPlayerId, keys, offset, callback) {
        var name = 'updateTimestamps';
        var data;
        if (arguments.length == 3) {
            data = [sgpPlayerId, keys];
            SgtApi.doRPC(name, data, this.url, offset);
        } else {
            data = [sgpPlayerId, key, offset];
            SgtApi.doRPC(name, data, this.url, callback);
        }
    }
};

/**
 *
 * @module  VersionDetailService
 * @type {{}|*}
 */
SgtApi.VersionDetailService = {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi.context.playServerData === null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi.context.playServerData.address + '/' + SgtApi.config.appId + '/versiondetail.do';
        return true;
    },


    /**
     * 根据appId和当前版本信息获取升级信息
     * @Method checkUpdate
     * @param appId
     * @param currentVersion
     * @param callback
     */
    'checkUpdate': function (appId, currentVersion, callback) {
        var name = 'checkUpdate';
        var data = [appId, currentVersion];
        SgtApi.doRPC(name, data, this.url, callback);
    },

    /**
     * 获取某个appId所有的版本信息
     * @Method getAllVersions
     * @param appId
     * @param callback
     */
    'getAllVersions': function (appId, callback) {
        var name = 'getAllVersions';
        var data = [appId];
        SgtApi.doRPC(name, data, this.url, callback);
    }
};
