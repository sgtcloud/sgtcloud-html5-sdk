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
 * 开发者 by rasen
 *@module SgtApi
 */
 bug
(function () {
    var MyQuery = (function () {
        var MyQuery = function () {
            return MyQuery.fn.init();
        };

        MyQuery.fn = MyQuery.prototype = {
            init: function () {
                return this;
            }
        };

        MyQuery.extend = MyQuery.fn.extend = function () {
            var options, name, src, copy,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length;
            if (length === i) {
                target = this;
                --i;
            }

            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];

                        if (src === copy) {
                            continue;
                        }
                        if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        };
        return MyQuery;
    })();
    window["SgtApi"] = window["$s"] = $s = MyQuery();
})();
/**
 *  JsonRpc 接口
 */
function $JsonRpc(obj) {
    this.data = obj;
    this.call = function (name, data, succ, error) {
        jsonRPC["setup"]({"endPoint": this.data.ajaxUrl, "namespace": ''});
        jsonRPC["request"](name, {
            "params": data,
            "success": succ,
            "error": error
        });
    }
};
/**
 * SGT SDK 配置文件
 */
SgtApi["config"] = {
    ///**
    // * 网关
    // * @property Appgateway
    // * @type {string}
    // * @default http://sgp.gallme.com.cn/gateway
    // */
    "Appgateway": 'http://gw.sgtcloud.cn/gateway',
    ///**
    // * 应用标识
    // * @property AppId
    // * @type {string}
    // * @default ""
    // */
    "AppId": "",
    ///**
    // * 渠道标识
    // * @property ChannelId
    // * @type {string}
    // * @default "zstfYB"
    // */
    "ChannelId": "",
    ///**
    // * 用户name
    // * @property UserName
    // * @type {string}
    // * @default null
    // */
    "UserName": null,
    ///**
    // * 用户密码
    // * @property UserPassword
    // * @type {string}
    // * @default "yoedge2014"
    // */
    "UserPassword": "",
    ///**
    // * 签到板ID
    // * @property CheckInBoardId
    // * @type {string}
    // * @default "checkin"
    // */
    "CheckInBoardId": "",
    ///**
    // * 已读邮件
    // * @property Mail_TYPE_NOREAD
    // * @type {int}
    // * @default 0
    // */
    "Mail_TYPE_NOREAD": 0,
    ///**
    // * 已读邮件
    // * @property Appgateway
    // * @type {int}
    // * @default 1
    // */
    "Mail_TYPE_READ": 1,
    ///**
    // * 活动公告
    // * @property Announce_TYPE_ACT
    // * @type {int}
    // * @default 1
    // */
    "Announce_TYPE_ACT": 1,
    ///**
    // * 商城公告
    // * @property Announce_TYPE_MAL
    // * @type {int}
    // * @default 2
    // */
    "Announce_TYPE_MAL": 2
};

/**
 * 初始化sdk配置
 * @class init
 * @param json{json} 配置文件
 * @constructor
 */
SgtApi["init"] = function (json) {
    "use strict";
    if (json["Appgateway"] != "" && json["Appgateway"]) {
        SgtApi["config"]["Appgateway"] = json["Appgateway"];
    }
    if (json["AppId"] != "" && json["AppId"]) {
        SgtApi["config"]["AppId"] = json["AppId"];
    }
    if (json["ChannelId"] != "" && json["ChannelId"]) {
        SgtApi["config"]["ChannelId"] = json["ChannelId"];
    }
    if (json["CheckInBoardId"] != "" && json["CheckInBoardId"]) {
        SgtApi["config"]["CheckInBoardId"] = json["CheckInBoardId"];
    }
};
/**
 * User 对象
 * @class User
 * @constructor
 */
SgtApi["User"] = function () {
    /**
     * 昵称
     * @property nickName
     * @type {string}
     * @default null
     */
    this["nickName"] = null;
    /**
     * 密码
     * @property password
     * @type {string}
     * @default null
     */
    this["password"] = null;
    /**
     * 用户ID
     * @property userid
     * @type {string}
     * @default null
     */
    this["userid"] = null;
    /**
     * 用户名
     * @property userName
     * @type {string}
     * @default null
     */
    this["userName"] = null;
    /**
     * 邮件
     * @property email
     * @type {string}
     * @default null
     */
    this["email"] = null;
    /**
     * 创建时间
     * @property createTime
     * @type {long}
     * @default null
     */
    this["createTime"] = null;
    /**
     * 手机ICCID
     * @property iccid
     * @type {string}
     * @default null
     */
    this["iccid"] = null;
    /**
     * 手机IMEI号
     * @property imei
     * @type {string}
     * @default null
     */
    this["imei"] = null;
    /**
     * 最后登陆时间
     * @property lastLoginTime
     * @type {long}
     * @default null
     */
    this["lastLoginTime"] = null;
    /**
     * 手机mac地址
     * @property mac
     * @type {string}
     * @default null
     */
    this["mac"] = null;
    /**
     * 电话号码
     * @property phoneNumber
     * @type {string}
     * @default null
     */
    this["phoneNumber"] = null;
    /**
     * 注册类型
     * @property registryType
     * @type {int}
     * @default null
     */
    this["registryType"] = null;
    /**
     * 最后更新时间
     * @property updateTime
     * @type {long}
     * @default null
     */
    this["updateTime"] = null;
};

/**
 * 用户登陆注册
 *
 * @class AccountService
 * @constructor
 * @type {{}|*}
 */
SgtApi["AccountService"] = SgtApi["AccountService"] || {};
SgtApi.extend(SgtApi["AccountService"], {
    userData: null,
    playServerData: null,
    /**
     * 快速注册登录
     * @method quickLogin
     * @param callback
     * @return callback
     */
    "quickLogin": function (callback) {
        var username = localStorage.getItem("sgt-"+SgtApi.config.AppId+"-username");
        if (username) {
            var password = localStorage.getItem("sgt-"+SgtApi.config.AppId+"-password");
            SgtApi.config.UserName = username;
            SgtApi.config.UserPassword = password;
            this.login(callback);
        } else {
            var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var name = "";
            for (var i = 0; i < 8; i++) {
                if (i > 5) {
                    var id = Math.ceil(Math.random() * 9);
                    name += num[id];
                } else {
                    var id = Math.ceil(Math.random() * 61);
                    name += chars[id];
                }
            }
            var newuser = new SgtApi["User"]();
            newuser["userName"] = name;
            newuser["password"] = 'yoedge2014';
            localStorage.setItem("sgt-"+SgtApi.config.AppId+"-username",newuser["userName"]);
            localStorage.setItem("sgt-"+SgtApi.config.AppId+"-password",newuser["password"]);
            this.register(newuser, callback);
        }
    },
    /**
     * 登陆
     * @method login
     * @param callback
     * @return callback
     */
    "login": function (callback) {
        console.log(this);
        console.log(SgtApi.AccountService);
        console.log(SgtApi.AccountService == this);
        console.log(SgtApi.AccountService === this);
        var that = this;
        var backClient = new $JsonRpc({ajaxUrl: SgtApi["config"]["Appgateway"] + '/user'});// this.appRouteData.address+'/'+sgt.AppId+
        backClient.call(
            'login',
            [SgtApi["config"]["UserName"], SgtApi["config"]["UserPassword"]],
            function (result) {
                that.userData = result["result"];
                that.getPlayServer(callback);
            },
            function (error) {
                console.log('There was an error[AccountService.login]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
    ,
    /**
     * 通过提交user对象完成注册
     * @method register
     * @param user{User} 对象
     * @param callback
     * @return callback
     */
    "register": function (user, callback) {
        SgtApi["config"]["UserName"] = user["userName"];
        SgtApi["config"]["UserPassword"] = user["password"];
        var that = this;
        var backClient = new $JsonRpc({ajaxUrl: SgtApi["config"]["Appgateway"] + '/user'});
        backClient.call(
            'register',
            [user],
            function (result) {
                that.userData = result["result"];
                that.getPlayServer(callback);
            },
            function (error) {
                console.log('There was an error[register]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
    ,
    /**
     * 重置密码发送邮件
     * @method resetPassword
     * @param userName{string} 用户名
     * @param callback
     * @return callback
     */
    "resetPassword": function (userName, callback) {
        var backClient = new $JsonRpc({ajaxUrl: SgtApi["config"]["Appgateway"] + '/user'});
        backClient.call(
            'resetPassword',
            [userName],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error[register]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
    ,
    /**
     * 通过用户名更改密码
     * @method updatePasswordByUserName
     * @param username{string} 用户名
     * @param password{string} 密码
     * @param callback
     * @return callback
     */
    "updatePasswordByUserName": function (username, password, callback) {
        var backClient = new $JsonRpc({ajaxUrl: SgtApi["config"]["Appgateway"] + '/user'});
        backClient.call(
            'updatePasswordByUserName',
            [username, password],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error[register]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
    ,
    /**
     *更新用户信息
     * @method updateUser
     * @param user{User} 对象
     * @param callback
     * @return callback
     */
    "updateUser": function (user, callback) {
        var backClient = new $JsonRpc({ajaxUrl: SgtApi["config"]["Appgateway"] + '/user'});
        backClient.call(
            'updateUser',
            [user],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error[register]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
    ,
    /**
     * 更新用户名，密码，邮箱
     * @method updateUserByUserId
     * @param userId{string} 用户ID
     * @param userName{string} 用户名
     * @param password{string} 密码
     * @param email{string} 邮箱
     * @param callback
     * @return callback
     */
    "updateUserByUserId": function (userId, userName, password, email, callback) {
        var backClient = new $JsonRpc({ajaxUrl: SgtApi["config"]["Appgateway"] + '/user'});
        backClient.call(
            'updateUserByUserId',
            [userId, userName, password, email],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error[register]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
    ,
    /**
     * 更新用户名，密码
     * @method updateUserByUserId
     * @param userId{string} 用户ID
     * @param userName{string} 用户名
     * @param password{string} 密码
     * @param callback
     * @return callback
     */
    "updateUserNameAndPassword": function (userId, userName, password, callback) {
        var backClient = new $JsonRpc({ajaxUrl: SgtApi["config"]["Appgateway"] + '/user'});
        backClient.call(
            'updateUserNameAndPassword',
            [userId, userName, password],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error[register]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
    ,
    /**
     * 获取用户服务器信息
     * @method getPlayServer
     * @param callback
     * @return callback
     */
    "getPlayServer": function (callback) {
        if (SgtApi["config"]["ChannelId"] == null) {
            return callback(false, 'channelId未设置！');
        }
        var that = this;
        var backClient = new $JsonRpc({ajaxUrl: SgtApi["config"]["Appgateway"] + "/route"});
        backClient.call(
            'route',
            [SgtApi["config"]["AppId"], {
                'userId': this.userData["userid"],
                'createTime': this.userData["createTime"],
                'channelId': SgtApi["config"]["ChannelId"]
            }],
            function (result) {
                that.playServerData = result["result"];
                return callback(true, that.userData);
            },
            function (error) {
                console.log('There was an error["error"][route]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
})
;

/**
 * 玩家角色接口
 *
 * @class Player
 * @constructor
 */
SgtApi["Player"] = function () {
    /**
     * 自定义ID
     * @property customId
     * @type {String}
     * @default null
     */
    this["customId"] = null;
    /**
     * 装备
     * @property equip
     * @type {String}
     * @default null
     */
    this["equip"] = null;
    /**
     * 主键id
     * @property id
     * @type {String}
     * @default 0
     */
    this["id"] = 0;
    /**
     * 最后登录时间
     * @property lastLoginTime
     * @type {Long}
     * @default null
     */
    this["lastLoginTime"] = null;
    /**
     * 等级
     * @property level
     * @type {int}
     * @default 1
     */
    this["level"] = 1;
    /**
     * 名字
     * @property name
     * @type {String}
     * @default null
     */
    this["name"] = null;
    /**
     * 服务器
     * @property serverId
     * @type {String}
     * @default null
     */
    this["serverId"] = null;
    /**
     * 类型
     * @property type
     * @type {String}
     * @default null
     */
    this["type"] = null;
    /**
     * 用户ID
     * @property userId
     * @type {String}
     * @default null
     */
    this["userId"] = null;
    /**
     * VIP 等级
     * @property vip
     * @type {int}
     * @default 0
     */
    this["vip"] = 0;
    /**
     * 好友最大上限数
     * @property friendsMaxNumber
     * @type {number}
     * @default 0
     */
    this["friendsMaxNumber"] = 0;
    /**
     * 性别 [1 男 0 女]
     * @property gender
     * @type {number}
     * @default 0
     */
    this["gender"] = 0;
    /**
     * 金钱
     * @property money
     * @type {number}
     * @default 0
     */
    this["money"] = 0;
};

/**
 * 存档实例
 *
 * @class save
 * @constructor
 */
SgtApi["Save"] = function () {
    /**
     * 存档内容
     * @property content
     * @type {String}
     * @default null
     */
    this["content"] = null;
    /**
     * 是否可下载存档标识
     * @property downFlag
     * @type {int}
     * @default null
     */
    this["downFlag"] = null;
    /**
     * 主键
     * @property id
     * @type {int}
     * @default null
     */
    this["id"] = null;
    /**
     * 最后上传时间
     * @property lastUploadTime
     * @type {long}
     * @default null
     */
    this["lastUploadTime"] = null;
    /**
     * 角色ID
     * @property playerId
     * @type {string}
     * @default null
     */
    this["playerId"] = null;
};
/**
 * 角色处理逻辑业务接口
 *
 * @class PlayerService
 * @constructor
 * @type {{}|*}
 */
SgtApi["PlayerService"] = SgtApi["PlayerService"] || {};
SgtApi.extend(SgtApi["PlayerService"], {
    url: null,
    userData: null,
    playServerData: null,//当前角色服务器信息
    playerData: null,//当前角色信息
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].userData == null) {
            console.log('There was an error:', '没有取得用户数据！');
            return false;
        }
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.userData = SgtApi["AccountService"].userData;
        this.playServerData = SgtApi["AccountService"].playServerData;
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/sgpplayer.do';
        return true;
    },
    /**
     * 创建一个角色
     * @method create
     * @param playerinfo{Player} 角色对象
     * @param callback
     * @return callback
     */
    "create": function (playerinfo, callback) {
        playerinfo["lastLoginTime"] = this.userData["lastLoginTime"];
        playerinfo["serverId"] = this.playServerData["id"];
        playerinfo["userId"] = this.userData["userid"];

        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'create',
            [playerinfo],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 更新角色信息
     * @method update
     * @param playerinfo{Player} 角色对象
     * @param callback
     * @return callback
     */
    "update": function (playerinfo, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'update',
            [playerinfo],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据用户ID查找角色
     * @method getByUserId
     * @param userId{String} 用户ID
     * @param callback
     * @return callback
     */
    "getByUserId": function (userId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getByUserId',
            [userId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过用户ID查找其中的一个角色
     * @method getOneByUserId
     * @param userId{string} 用户ID
     * @param callback
     * @return callback
     */
    "getOneByUserId": function (userId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getOneByUserId',
            [userId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 上传存档
     * @method uploadSave
     * @param saveinfo{save} 存档实例
     * @param callback
     * @return callback
     */
    "uploadSave": function (saveinfo, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'uploadSave',
            [saveinfo],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 下载存档
     * @method downloadSave
     * @param playerId{string} 角色ID
     * @param callback
     * @return callback
     */
    "downloadSave": function (playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'downloadSave',
            [playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     *根据角色名查找角色
     * @method getByName
     * @param name{string} 角色名
     * @param start{int} 开始页
     * @param limit{int} 每页数量
     * @param callback
     * @return callback
     */
    "getByName": function (name, start, limit, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getByName',
            [name, start, limit],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据最后登陆时间查找角色
     * @method getByLastLoginTime
     * @param lastLoginTime{long} 最后登陆时间
     * @param start{int} 开始页
     * @param limit{int} 每页数量
     * @param callback
     * @return callback
     */
    "getByLastLoginTime": function (lastLoginTime, start, limit, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getByLastLoginTime',
            [lastLoginTime, start, limit],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过自定义ID获取角色信息
     * @method getSgpPlayerByCustomId
     * @param customId{string} 自定义ID
     * @param callback
     * @return callback
     */
    "getSgpPlayerByCustomId": function (customId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getSgpPlayerByCustomId',
            [customId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过playerId删除角色及相关信息
     * @method deleteSgpPlayerByPlayerId
     * @param playerId{string} 角色id
     * @param callback
     * @return callback
     */
    "deleteSgpPlayerByPlayerId": function (playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'deleteSgpPlayerByPlayerId',
            [playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     *通过ID获取SgpPlayer
     * @method getSgpPlayerById
     * @param playerId{string} 主键ID
     * @param callback
     * @return callback
     */
    "getSgpPlayerById": function (playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getSgpPlayerById',
            [playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 随机返回若干个最近登录的sgpplayer
     * @method searchPlayersByLastLogin
     * @param limit{int} 限制数量
     * @param callback
     * @return callback
     */
    "searchPlayersByLastLogin": function (limit, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'searchPlayersByLastLogin',
            [limit],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 设置指定角色的好友上限
     * @method setFriendsMaxNumber
     * @param sgpPlayerId{string} 角色ID
     * @param number{int} 好友上限
     * @param callback
     * @return callback
     */
    "setFriendsMaxNumber": function (sgpPlayerId, number, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'setFriendsMaxNumber',
            [sgpPlayerId, number],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定角色的好友上限
     * @method getFriendsMaxNumber
     * @param sgpPlayerId{string} 角色ID
     * @param callback
     * @return callback
     */
    "getFriendsMaxNumber": function (sgpPlayerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getFriendsMaxNumber',
            [sgpPlayerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据条件过滤并随机查询若干个最近登录的sgpplayer
     * @method searchPlayersByLastLogin
     * @param lastLoginTime{long} 最近登录时间
     * @param limit{int} 数量
     * @param excludePlayerIds{Array} 玩家角色id数组 String[]
     * @param callback
     * @return callback
     */
    "searchPlayersByLastLogin": function (lastLoginTime, limit, excludePlayerIds, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'searchPlayersByLastLogin',
            [lastLoginTime, limit, excludePlayerIds],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 角色扩展业务接口
 *
 * @class PlayerExtraService
 * @constructor
 * @type {{}|*}
 */
SgtApi["PlayerExtraService"] = SgtApi["PlayerExtraService"] || {};
SgtApi.extend(SgtApi["PlayerExtraService"], {
    url: null,
    playerId: null,
    /**
     * 初始化接口
     * @method init
     * @param playerId{string} 角色id
     * @return {boolean}
     */
    init: function (playerId) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerId == null) {
            console.log('There was an error:playerId is null');
            return false;
        }
        this.playerId = playerId;

        this.userData = SgtApi["AccountService"]["userData"];
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/playerExtraService.do';
        return true;
    },
    /**
     * 根据角色ID查找角色扩展信息
     * @method getPlayerById
     * @param callback
     * @return callback
     */
    "getPlayerById": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getPlayerById',
            [this.playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据条件查询角色列表
     * @method getPlayerList
     * @param condition{map} 查询条件 key 字段名称 value 字段值
     * @param callback
     * @return callback
     */
    "getPlayerList": function (condition, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getPlayerList',
            [condition],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 分页查询所有角色扩展信息列表
     * @method findAll
     * @param pageNumber{int} 页码
     * @param pageSize{int} 每页返回的数据条数
     * @param callback
     * @return callback
     */
    "findAll": function (pageNumber, pageSize, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'findAll',
            [pageNumber, pageSize],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据条件查询角色扩展信息列表，支持分页
     * @method findAllBycon
     * @param condition{map} 条件列表 key 字段名称 value 字段值
     * @param pageNumber{int} 页码
     * @param pageSize{int} 每页返回的数据条数
     * @param callback
     * @return callback
     */
    "findAllBycon": function (condition, pageNumber, pageSize, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'findAll',
            [condition, pageNumber, pageSize],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 添加角色扩展信息
     * @method addPlayer
     * @param player{map} 色扩展信息
     * @param callback
     * @return callback
     */
    "addPlayer": function (player, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'addPlayer',
            [player],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据角色ID修改角色扩展信息
     * @method updatePlayer
     * @param player{map} 角色扩展信息
     * @param callback
     * @return callback
     */
    "updatePlayer": function (player, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updatePlayer',
            [this.playerId, player],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 修改角色扩展信息
     * @method updatePlayerMap
     * @param player{map} 角色扩展信息
     * @param callback
     * @return callback
     */
    "updatePlayerMap": function (player, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updatePlayer',
            [player],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据角色ID删除角色扩展信息
     * @method deletePlayerById
     * @param callback
     * @return callback
     */
    "deletePlayerById": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'deletePlayerById',
            [this.playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 成就系统业务
 *
 * @class Achievement
 * @constructor
 * @type {{}|*}
 */
SgtApi["Achievement"] = SgtApi["Achievement"] || {};
SgtApi.extend(SgtApi["Achievement"], {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/achievement.do';
        return true;
    },
    /**
     * 获取可用的成就
     * @method getAllAchievements
     * @param callback
     * @return callback
     */
    "getAllAchievements": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAllAchievements',
            [],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据成就ID获取成就信息
     * @method getAchievementById
     * @param achievementId{string} 成就ID
     * @param callback
     * @return callback
     */
    "getAchievementById": function (achievementId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAchievementById',
            [achievementId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定角色未达成的成就
     * @method getAvailableAchievements
     * @param playerId{string} 角色ID
     * @param callback
     * @return callback
     */
    "getAvailableAchievements": function (playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableAchievements',
            [playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定角色已经达成的成就
     * @method getDoneAchievements
     * @param playerId 角色ID
     * @param callback
     * @return callback
     */
    "getDoneAchievements": function (playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDoneAchievements',
            [playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定角色已领取奖励的成就
     * @method getCompleteAchievements
     * @param playerId{string} 角色ID
     * @param callback
     * @return callback
     */
    "getCompleteAchievements": function (playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCompleteAchievements',
            [playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 领取成就奖励
     * @method complete
     * @param playerId{string} 角色ID
     * @param achievmentId{string} 成就ID
     * @param callback
     * @return callback
     */
    "complete": function (playerId, achievmentId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'complete',
            [playerId, achievmentId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 达成成就
     * @method achieve
     * @param playerId{string} 角色ID
     * @param achievmentId{string} 成就ID
     * @param callback
     * @return callback
     */
    "achieve": function (playerId, achievmentId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'achieve',
            [playerId, achievmentId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过type提交成就 进度数自动+1
     * @method excuteAchievementsByType
     * @param type{string} 任务的type类型
     * @param playerId{string} 角色ID
     * @param callback
     * @return callback
     */
    "excuteAchievementsByType": function (type, playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'excuteAchievementsByType',
            [type, playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过成就type累加指定进度
     * @method customAchievementsByType
     * @param type{string} 任务的type类型
     * @param playerId{string} 角色ID
     * @param progress{int} 进度
     * @param callback
     * @return callback
     */
    "customAchievementsByType": function (type, playerId, progress, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'excuteAchievementsByType',
            [type, playerId, progress],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过类型获取指定角色可以进行的任务
     * @method getAchievementsByType
     * @param playerId{string} 角色ID
     * @param type{string} 任务的type类型
     * @param callback
     * @return callback
     */
    "getAchievementsByType": function (playerId, type, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAchievementsByType',
            [playerId, type],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 提交指定成就进度
     * @method setAchievementProgress
     * @param PlayerId{string} 角色ID
     * @param chievementId{string} 任务ID
     * @param progress{int} 进度
     * @param callback
     * @return callback
     */
    "setAchievementProgress": function (PlayerId, chievementId, progress, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'setAchievementProgress',
            [PlayerId, chievementId, progress],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 设置指定类型的成就进度
     * @method setAchievementsProgressByType
     * @param type{string} 任务的type类型
     * @param playerId{string} 角色ID
     * @param progress{int} 进度
     * @param callback
     */
    "setAchievementsProgressByType": function (type, playerId, progress, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'setAchievementsProgressByType',
            [type, playerId, progress],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 公告业务接口
 *
 * @class AnnouncementService
 * @constructor
 * @type {{}|*}
 */
SgtApi["AnnouncementService"] = SgtApi["AnnouncementService"] || {};
SgtApi.extend(SgtApi["AnnouncementService"], {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.userData = SgtApi["AccountService"].userData;
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/announcement.do';
        return true;
    },
    /**
     * 通过公告类型获取最新公告 （获取版本号最大的）
     * @method getAnnounceByType
     * @param type{int} 公告类型
     * @param callback
     * @return callback
     */
    "getAnnounceByType": function (type, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAnnounceByType',
            [type],
            function (result) {
                //待过滤
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 活动业务接口
 *
 * @class CampaignService
 * @constructor
 * @type {{}|*}
 */
SgtApi["CampaignService"] = SgtApi["CampaignService"] || {};
SgtApi.extend(SgtApi["CampaignService"], {
    url: null,
    playerData: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/campaign.do';
        return true;
    },
    /**
     * 通过时间区间获取活动
     * @method getByTimeZone
     * @param startTime{long} 开始时间
     * @param endTime{long} 结束时间
     * @param callback
     * @return callback
     */
    "getByTimeZone": function (startTime, endTime, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getByTimeZone',
            [startTime, endTime],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过活动ID获取活动
     * @method getCampaignById
     * @param id{int} 活动ID
     * @param callback
     * @return callback
     */
    "getCampaignById": function (id, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCampaignById',
            [id],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过活动详情ID获取活动详情数据
     * @method getCampaignDetaiById
     * @param id{int} 活动详情ID
     * @param callback
     * @return callback
     */
    "getCampaignDetaiById": function (id, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCampaignDetaiById',
            [id],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过活动ID获取活动详情数据
     * @method getCampaignDetaiByCId
     * @param id{int} 活动id
     * @param callback
     * @return callback
     */
    "getCampaignDetaiByCId": function (id, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCampaignDetaiByCId',
            [id],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 更新进度
     * @method updateProgress
     * @param campaignId{int} 活动id
     * @param progress{int} 进度
     * @param callback
     * @return callback
     */
    "updateProgress": function (campaignId, progress, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updateProgress',
            [campaignId, this.playerid, progress],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取进度
     * @method getCampaignProgress
     * @param campaignId{int} 活动id
     * @param callback
     * @return callback
     */
    "getCampaignProgress": function (campaignId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCampaignProgress',
            [campaignId, this.playerid],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     *获取当前已经激活的活动
     * @method getAvailableCampaigns
     * @param callback
     * @return callback
     */
    "getAvailableCampaigns": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableCampaigns',
            [],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 签到接口
 * @class CheckinService
 * @constructor
 * @type {{}|*}
 */
SgtApi["CheckinService"] = SgtApi["CheckinService"] || {};
SgtApi.extend(SgtApi["CheckinService"], {
    url: null,
    playerid: null,
    /**
     * 初始化接口
     * @method init
     * @param playerid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerid == null) {
            console.error("playerid is null");
            return false;
        }
        this.playerid = playerid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"].AppId + '/checkinboard.do';
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
            [this.playerid, SgtApi["config"]["CheckInBoardId"]],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
            [this.playerid, SgtApi["config"]["CheckInBoardId"]],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
            [this.playerid, SgtApi["config"]["CheckInBoardId"]],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过CheckInBoardId获取签到板实体数据
     * @method getByChekinboardId
     * @param callback
     * @return callback
     */
    "getByChekinboardId": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCheckinboardByChekinboardId',
            [SgtApi["config"]["CheckInBoardId"]],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
            [this.playerid, SgtApi["config"]["CheckInBoardId"]],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取奖励
     * @method getRewardByChekinboardId
     * @param callback
     * @return callback
     */
    "getRewardByChekinboardId": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getRewardByChekinboardId',
            [SgtApi["config"]["CheckInBoardId"]],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
            [this.playerid, SgtApi["config"]["CheckInBoardId"], times],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
            [this.playerid, SgtApi["config"]["CheckInBoardId"]],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取当前可用（有效时间内）的签到板
     * @method getAvailableChekinboards
     * @param callback
     * @return callback
     */
    "getAvailableChekinboards": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableChekinboards',
            [],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据自定义标签获取当前可用（有效时间内）的签到板
     * @method getAvailableChekinboardsByTag
     * @param tag{string} 自定义标签
     * @param callback
     */
    "getAvailableChekinboardsByTag": function (tag, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableChekinboardsByTag',
            [tag],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
    "getAvailableChekinboardsByType": function (type, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableChekinboardsByType',
            [type],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }

});

/**
 * 日常任务接口
 * @class DailyTaskService
 * @constructor
 * @type {{}|*}
 */
SgtApi["DailyTaskService"] = SgtApi["DailyTaskService"] || {};
SgtApi.extend(SgtApi["DailyTaskService"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playid) {
            this.playid = playid;
        } else {
            console.log('There was an error:playid is null');
            return false;
        }
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/dailytask.do';
        return true;
    },
    /**
     * 获取每天的日常任务
     * @method getDailyTasks
     * @param callback
     * @return callback
     */
    "getDailyTasks": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDailyTasks',
            [this.playid],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 提交任务进度，每提交一次，任务进度+1
     * @method excuteTask
     * @param taskId{string} 任务ID
     * @param callback
     * @return callback
     */
    "excuteTask": function (taskId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'excuteTask',
            [taskId, this.playid],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过type提交任务，每提交一次，任务进度+1 type只能对应1或0个任务
     * @method excuteTaskByType
     * @param type{string} 任务的type类型
     * @param callback
     * @return callback
     */
    "excuteTasksByType": function (type, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'excuteTasksByType',
            [type, this.playid],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据任务ID获取奖励 获取奖励时会先校验完成任务的进度
     * @method getReward
     * @param taskId{string} 任务ID
     * @param callback
     * @return callback
     */
    "getReward": function (taskId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getReward',
            [taskId, this.playid],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 提交指定任务进度
     * @method setTaskProgress
     * @param taskId{string} 任务ID
     * @param progress{int} 进度
     * @param callback
     * @return callback
     */
    "setTaskProgress": function (taskId, progress, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'setTaskProgress',
            [this.playid, taskId, progress],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 设置指定类型的任务进度
     * @method setTasksProgressByType
     * @param type{string} 任务类型
     * @param progress{int} 任务进度
     * @param callback
     * @return callback
     */
    "setTasksProgressByType": function (type, progress, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'setTasksProgressByType',
            [type, this.playid, progress],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 增加指定类型的任务进度
     * @method addexcuteTasksByType
     * @param type{string} 任务类型
     * @param progress{int} 任务进度
     * @param callback
     * @return callback
     */
    "addexcuteTasksByType": function (type, progress, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'excuteTasksByType',
            [type, this.playid, progress],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过类型获取指定角色可以进行的任务
     * @method getDailyTasksByType
     * @param type{string} 任务类型
     * @param callback
     * @return callback
     */
    "getDailyTasksByType": function (type, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDailyTasksByType',
            [this.playid, type],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 通用任务模块业务接口
 * @class Task
 * @constructor
 * @type {{}|*}
 */
SgtApi["Task"] = SgtApi["Task"] || {};
SgtApi.extend(SgtApi["Task"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (typeof(playid) == "undefined" || !playid) {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/task.do';
        return true;
    },
    /**
     * 根据指定的playerid获取特定的actiontype的任务
     * @method getActionCount
     * @param actiontype{string} 与计数器type相对应，不能为空
     * @param callback
     * @return callback
     */
    "getActionCount": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getActionCount',
            [this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 对playerId的actiontype的计数器做增加固定值
     * @method addActionCount
     * @param actiontype{string} 与计数器type相对应，不能为空
     * @param [addtodayTimes=1]{int} 需要增加的值,可不填，默认为1
     * @param callback
     * @return callback
     */
    "addActionCount": function (actiontype, addtodayTimes, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        if (typeof(addtodayTimes) == "undefined" || !addtodayTimes) {
            backClient.call(
                'addActionCount',
                [this.playid, actiontype],
                function (result) {
                    return callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    return callback(false, error["error"]["message"]);
                }
            );
        } else {
            backClient.call(
                'addActionCount',
                [this.playid, actiontype, addtodayTimes],
                function (result) {
                    return callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    return callback(false, error["error"]["message"]);
                }
            );
        }
    },
    /**
     * 根据ID获取指定Task
     * @method getTaskById
     * @param taskId{string} 任务id
     * @param callback
     * @return callback
     */
    "getTaskById": function (taskId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getTaskById',
            [taskId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取所有可用的task 若任务设置了做完后不显示则不会被返回
     * @method getAllTasks
     * @param taskType{int}  0-成就，1-日常任
     * @param callback
     * @return callback
     */
    "getAllTasks": function (taskType, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAllTasks',
            [taskType],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取所有可用的task 若任务设置了做完后不显示则不会被返回
     * @method getTasksByType
     * @param taskType{string} 传入null时将不对tasktype进行筛选
     * @param actiontype{string} 传入null时将不对actiontype进行筛选
     * @param callback
     * @return callback
     */
    "getTasksByType": function (taskType, actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getTasksByType',
            [taskType, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据参数获取可用task 若任务设置了做完后不显示则不会被返回
     * @method getTasks
     * @param taskType{string} 传入null时将不对tasktype进行筛选,0-成就，1-日常任务
     * @param actiontype{string} 传入null时将不对actiontype进行筛选
     * @param [status]{int}
     * @param callback
     * @return callback
     */
    "getTasks": function (taskType, actiontype, status, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        if (typeof (status) == "undefined" || !status) {
            backClient.call(
                'getTasks',
                [taskType, this.playid, actiontype],
                function (result) {
                    return callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    return callback(false, error["error"]["message"]);
                }
            );
        } else {
            backClient.call(
                'getTasks',
                [taskType, this.playid, actiontype, status],
                function (result) {
                    return callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    return callback(false, error["error"]["message"]);
                }
            );
        }
    },
    /**
     * 获取指定类型该角色已经完成且还未领取奖励的Task 若任务设置了做完后不显示则不会被返回
     * @method getCompleteTasks
     * @param taskType{string} 传入null时将不对tasktype进行筛选
     * @param actiontype{string} 传入null时将不对actiontype进行筛选
     * @param callback
     * @return callback
     */
    "getCompleteTasks": function (taskType, actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getTasksByType',
            [taskType, this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定类型该角色已经领取过奖励的Task
     * @method getDoneTasks
     * @param taskType{string} 传入null时将不对tasktype进行筛选
     * @param actiontype{string} 传入null时将不对actiontype进行筛选
     * @param callback
     * @return callback
     */
    "getDoneTasks": function (taskType, actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDoneTasks',
            [taskType, this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据任务ID完成任务 仅完成任务，并不获得奖励
     * @method complete
     * @param taskId{string} 任务id
     * @param callback
     * @return callback
     */
    "complete": function (taskId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'complete',
            [this.playid, taskId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据任务ID获取奖励 获取奖励时会先校验完成任务的进度
     * @method getReward
     * @param taskId{string} 任务ID
     * @param callback
     * @return callback
     */
    "getReward": function (taskId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getReward',
            [this.playid, taskId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据成就ID获取成就信息
     * @method getAchievementById
     * @param achievementId{string} 成就ID
     * @param callback
     * @return callback
     */
    "getAchievementById": function (achievementId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAchievementById',
            [achievementId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取所有可用的成就 若任务设置了做完后不显示则不会被返回
     * @method getAllAchievements
     * @param callback
     * @return callback
     */
    "getAllAchievements": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAllAchievements',
            [],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取所有可用的成就 若任务设置了做完后不显示则不会被返回
     * @method getAchievementsByType
     * @param actiontype{string}
     * @param callback
     */
    "getAchievementsByType": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAchievementsByType',
            [actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据playerid获取所有可用的成就 若任务设置了做完后不显示则不会被返回
     * @method getAchievements
     * @param actiontype{string}
     * @param callback
     * @return callback
     */
    "getAchievements": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAchievements',
            [this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定角色已领取奖励的成就
     * @method getCompleteAchievements
     * @param actiontype{string}
     * @param callback
     */
    "getCompleteAchievements": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCompleteAchievements',
            [this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定角色已经达成的成就
     * @method getDoneAchievements
     * @param actiontype{string}
     * @param callback
     */
    "getDoneAchievements": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDoneAchievements',
            [this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据成就ID获取成就信息
     * @method getDailyTaskById
     * @param dailyTaskId{string} 成就ID
     * @param callback
     * @return callback
     */
    "getDailyTaskById": function (dailyTaskId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDailyTaskById',
            [dailyTaskId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
     * @method getAllDailyTasks
     * @param callback
     * @return callback
     */
    "getAllDailyTasks": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAllDailyTasks',
            [],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
     * @method getDailyTasksByType
     * @param actiontype{string}
     * @param callback
     * @return callback
     */
    "getDailyTasksByType": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDailyTasksByType',
            [actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据playerid获取所有可用的日常任务 若任务设置了做完后不显示则不会被返回
     * @method getDailyTasks
     * @param actiontype{string}
     * @param callback
     * @return callback
     */
    "getDailyTasks": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDailyTasks',
            [this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定角色已领取奖励的日常任务
     * @method getCompleteDailyTasks
     * @param actiontype{string} 传入null时将不对type进行筛选
     * @param callback
     * @return callback
     */
    "getCompleteDailyTasks": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getCompleteDailyTasks',
            [this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定角色已经达成的日常任务
     * @method getDoneDailyTasks
     * @param actiontype{string}
     * @param callback
     */
    "getDoneDailyTasks": function (actiontype, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDoneDailyTasks',
            [this.playid, actiontype],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 好友业务接口
 * @class FriendshipService
 * @constructor
 * @type {{}|*}
 */
SgtApi["FriendshipService"] = SgtApi["FriendshipService"] || {};
SgtApi.extend(SgtApi["FriendshipService"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playid == null || typeof (playid) == "undefined") {
            return false;
        }
        this.playid = playid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/friendship.do';
        return true;
    },
    /**
     * 邀请加好友（状态为未确认）
     * @method invite
     * @param receiveId{string} 被邀请人ID
     * @param [mail=null]{mail} 通知邮件(可选参数)
     * @param callback
     * @return callback
     */
    "invite": function (receiveId, mail, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        if (!mail) {
            backClient.call(
                'invite',
                [this.playid, receiveId],
                function (result) {
                    callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    callback(false, error["error"]["message"]);
                }
            );
        } else {
            backClient.call(
                'invite',
                [this.playid, receiveId, mail],
                function (result) {
                    callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    callback(false, error["error"]["message"]);
                }
            );
        }
    },
    /**
     * 批量邀请加好友（状态为未确认）
     * @method bulkinvite
     * @param receiveIds{string[]} 被邀请人ID string[]
     * @param [mails=null]{mail[]} 通知邮件 可选参数 mail[]
     * @param callback
     * @return callback
     */
    "bulkinvite": function (receiveIds, mails, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        if (!mails) {
            backClient.call(
                'invite',
                [this.playid, receiveIds],
                function (result) {
                    callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    callback(false, error["error"]["message"]);
                }
            );
        } else {
            backClient.call(
                'invite',
                [this.playid, receiveIds, mails],
                function (result) {
                    callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    callback(false, error["error"]["message"]);
                }
            );
        }
    },
    /**
     * 获取邀请自己的player
     * @method getInvite
     * @param callback
     * @return callback
     */
    "getInvite": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getInvite',
            [this.playid],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取还未确认邀请的player
     * @method getNotConfirm
     * @param callback
     * @return callback
     */
    "getNotConfirm": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getNotConfirm',
            [this.playid],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 确认邀请并加对方为好友（状态为确认）
     * @method acceptInvite
     * @param receiveId{string} 被邀请人ID
     * @param [mail]{mail} 发送给对方的邮件 （可选参数）
     * @param callback
     * @return callback
     */
    "acceptInvite": function (receiveId, mail, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        if (!mail) {
            backClient.call(
                'acceptInvite',
                [this.playid, receiveId],
                function (result) {
                    callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    callback(false, error["error"]["message"]);
                }
            );
        } else {
            backClient.call(
                'acceptInvite',
                [this.playid, receiveId, mail],
                function (result) {
                    callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    callback(false, error["error"]["message"]);
                }
            );
        }
    },
    /**
     * 自己作为被邀请者接受好友邀请
     * @method acceptotherInvite
     * @param sendIds{string[]} 邀请者playerId数组
     * @param [mail]{mail} 发送给对方的邮件 （可选参数）
     * @param callback
     * @return callback
     */
    "acceptotherInvite": function (sendIds, mail, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        if (!mail) {
            backClient.call(
                'acceptInvite',
                [sendIds, this.playid],
                function (result) {
                    callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    callback(false, error["error"]["message"]);
                }
            );
        } else {
            backClient.call(
                'acceptInvite',
                [sendIds, this.playid, mail],
                function (result) {
                    callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    callback(false, error["error"]["message"]);
                }
            );
        }
    },
    /**
     * 获取指定用户的好友(已确认)列表
     * @method getMyFriends
     * @param page{int} 页码 1为第一页
     * @param limit{int} 每页显示的数量
     * @param callback
     * @return callback
     */
    "getMyFriends": function (page, limit, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getMyFriends',
            [page, limit, this.playid],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 解除好友关系
     * @method unfriend
     * @param unfriendId{string/string[]} 要解除好友关系的角色ID / [string]要解除好友关系的角色IDs
     * @param callback
     * @return callback
     */
    "unfriend": function (unfriendId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'unfriend',
            [this.playid, unfriendId],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过playerId获取该角色的好友数量
     * @method getFrindsCount
     * @param callback
     * @return callback
     */
    "getFrindsCount": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getFrindsCount',
            [this.playid],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 拒绝好友申请
     * @method refuse
     * @param sendId{string} 申请者/sendId[]
     * @param callback
     * @return callback
     */
    "refuse": function (sendId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'refuse',
            [sendId, this.playid],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 判断对方是否是自己的好友
     * @method isMyfriend
     * @param otherId{string} 别人的id/otherId[string]
     * @param callback
     * @return callback
     */
    "isMyfriend": function (otherId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'isMyfriend',
            [this.playid, otherId],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取拒绝自己的请求
     * @method getDenied
     * @param page{int} 页码，1表示第一页
     * @param limit{int} 每页显示数量
     * @param callback
     * @return callback
     */
    "getDenied": function (page, limit, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getDenied',
            [page, limit, this.playid],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 好友关系扩展业务
 * @class FriendshipExtra
 * @constructor
 * @type {{}|*}
 */
SgtApi["FriendshipExtra"] = SgtApi["FriendshipExtra"] || {};
SgtApi.extend(SgtApi["FriendshipExtra"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playid == null || typeof (playid) == "undefined") {
            return false;
        }
        this.playid = playid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/friendshipextra.do';
        return true;
    },
    /**
     * 枚举自己（发起者）的（已验证）好友和key对应的扩展数据,支持分页
     * @method getAllMyFriendsAndExt
     * @param key{string} 扩展数据中的Key
     * @param start{int}
     * @param limit{int}
     * @param callback
     * @return callback
     */
    "getAllMyFriendsAndExt": function (key, start, limit, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAllMyFriendsAndExt',
            [this.playid, key, start, limit],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取自己指定好友和扩展数据
     * @method getMyFriendAndExt
     * @param friendId{string} 好友id
     * @param callback
     * @return callback
     */
    "getMyFriendAndExt": function (friendId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getMyFriendAndExt',
            [this.playid, friendId],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 修改自己（发起者）某个好友关系扩展数据中key对应的value的值
     * @method updateMyFriendExt
     * @param friendId{string} 好友id
     * @param key{string} 扩展数据Key
     * @param value{string} 扩展数据的值
     * @param callback
     * @return callback
     */
    "updateMyFriendExt": function (friendId, key, value, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updateMyFriendExt',
            [this.playid, friendId, key, value],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 批量修改指定好友关系的扩展数据,中key对应的值将会替换现有value
     * @method updateMyFriendAllExt
     * @param friendId{string} 好友id
     * @param newExt｛map<String,String>｝map
     * @param callback
     * @return callback
     */
    "updateMyFriendAllExt": function (friendId, newExt, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updateMyFriendAllExt',
            [this.playid, friendId, newExt],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 批量修改自己（发起者）所有好友关系扩展数据中key对应的value的值
     * @method updateAllMyFriendExt
     * @param key{string} 扩展数据Key
     * @param value{string} 扩展数据的值
     * @param callback
     * @return callback
     */
    "updateAllMyFriendExt": function (key, value, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'updateAllMyFriendExt',
            [this.playid, key, value],
            function (result) {
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 黑名单业务接口
 * @class FriendshipService
 * @constructor
 * @type {{}|*}
 */
SgtApi["BlackListService"] = SgtApi["BlackListService"] || {};
SgtApi.extend(SgtApi["BlackListService"], {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/blacklist.do';
        return true;
    },
    /**
     * 判断是否在黑名单之中
     * @method isInBlackList
     * @param blacklistId{string} 黑名单自定义ID
     * @param playerId{string} 玩家的角色ID
     * @param callback
     * @return callback
     */
    "isInBlackList": function (blacklistId, playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'isInBlacklist',
            [blacklistId, playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 将player添加到黑名单那
     * @method addPlayerIntoBlackList
     * @param blackListId{string} 黑名单ID
     * @param playerId{string} 角色ID
     * @param callback
     * @return callback
     */
    "addPlayerIntoBlackList": function (blackListId, playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'addPlayerIntoBlacklist',
            [blackListId, playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 抽奖业务接口
 * @class GachaBoxService
 * @constructor
 * @type {{}|*}
 */
SgtApi["GachaBoxService"] = SgtApi["GachaBoxService"] || {};
SgtApi.extend(SgtApi["GachaBoxService"], {
    url: null,
    playerid: null,
    /**
     * 初始化接口
     * @method init
     * @param playerid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerid == null || typeof (playerid) == "undefined") {
            return false;
        }
        this.playerid = playerid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/gachabox.do';
        return true;
    },
    /**
     * 获取指定名称的GachaBox
     * @method getGachaBoxByName
     * @param gachaBoxname{String} GachaBoxName
     * @param callback
     */
    "getGachaBoxByName": function (gachaBoxname, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getGachaBoxByName',
            [gachaBoxname],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取当前所有有效的GachaBox
     * @method getAvailableGachaBox
     * @param callback
     * @return callback
     */
    "getAvailableGachaBox": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getAvailableGachaBox',
            [],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 获取指定gachaBox的奖品
     * @method getLotteriesByGachaBoxId
     * @param gachaBoxId{string} 抽奖ID
     * @param callback
     * @return callback
     */
    "getLotteriesByGachaBoxId": function (gachaBoxId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getLotteriesByGachaBoxId',
            [gachaBoxId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 根据gachaBox的名称和品质获得奖品/连续抽奖N次,N为数组qualities的元素个数,一个qualities元素对应一次抽奖
     * @method draw
     * @param gachaBoxId{int} 抽奖ID
     * @param quality{int/Array} 品质/品质数组
     * @param callback
     * @return callback
     */
    "draw": function (gachaBoxId, quality, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'draw',
            [this.playerid, gachaBoxId, quality],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 有自动修正的连抽
     * @method autobalanceDraw
     * @param gachaBoxId{int} 抽奖ID
     * @param num{int} 抽奖次数
     * @param [initQuality]{int} 初始品质（可选参数）
     * @param callback
     * @return callback
     */
    "autobalanceDraw": function (gachaBoxId, num, initQuality, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        if (typeof(initQuality) == "number") {
            backClient.call(
                'autobalanceDraw',
                [this.playerid, gachaBoxId, num, initQuality],
                function (result) {
                    return callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    return callback(false, error["error"]["message"]);
                }
            );
        } else {
            backClient.call(
                'autobalanceDraw',
                [this.playerid, gachaBoxId, num],
                function (result) {
                    return callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    return callback(false, error["error"]["message"]);
                }
            );
        }
    },
    /**
     * 指定初始品质和最大品质的自动修正连抽
     * @method customAutobalanceDraw
     * @param gachaBoxId{int} 抽奖ID
     * @param num{int} 连抽次数
     * @param initQuality{int} 初始品质
     * @param maxQuality{int} 品质上限，必须大于0
     * @param callback
     * @return callback
     */
    "customAutobalanceDraw": function (gachaBoxId, num, initQuality, maxQuality, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'autobalanceDraw',
            [this.playerid, gachaBoxId, num, initQuality, maxQuality],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 指定奖品品质总值的连抽
     * @method limitDraw
     * @param gachaBoxId{int} 抽奖ID
     * @param limitQuality{int} 指定奖品品质
     * @param callback
     */
    "limitDraw": function (gachaBoxId, limitQuality, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'limitDraw',
            [this.playerid, gachaBoxId, limitQuality],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 排行榜接口
 * @class LeaderboardService
 * @constructor
 * @type {{}|*}
 */
SgtApi["LeaderboardService"] = SgtApi["LeaderboardService"] || {};
SgtApi.extend(SgtApi["LeaderboardService"], {
    url: null,
    playerData: null,
    /**
     * 初始化接口
     * @method init
     * @param playerData{json} 角色信息
     * @return {boolean}
     */
    "init": function (playerData) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerData == null || typeof (playerData) == "undefined") {
            return false;
        }
        this.playerData = playerData;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/leaderboard.do';
        return true;
    },
    /**
     * 通过排行榜ID和角色ID获取该角色的排行榜
     * @method getByLeaderId
     * @param leaderId{string} 排行榜ID
     * @param playerId{string} 角色ID
     * @param callback
     * @return callback
     */
    "getByLeaderId": function (leaderId, playerId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getLeaderBoardScoreByLeaderIdAndPlayerId',
            [leaderId, playerId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过排行榜ID和排名获取排行榜集合 start从0开始，第一名的值是0 取前两名的则 start为0，limit为2 取第二名到第五名则start为1，limit为4 即：start的值为排名减1 如果取该排行榜中所有的排名 start和limit的值分别为：0 , -1
     * @method getListByLeaderId
     * @param leaderId{String} 排行榜ID
     * @param start{int} 排名的起始位置（从0开始，第一位是0）
     * @param limit{int} 排名的结束位置
     * @param callback
     * @return callback
     */
    "getListByLeaderId": function (leaderId, start, limit, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getTopLeaderBoardScoreByLeaderId',
            [leaderId, start, limit],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过排行榜ID和角色ID获取该角色的排行榜（返回集合）
     * @method getListByIdPlayer
     * @param leaderId{string} 排行榜ID
     * @param callback
     * @return callback
     */
    "getListByIdPlayer": function (leaderId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getLeaderBoardScoreByExample',
            [leaderId, this.playerData],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 提交排行榜数值
     * @method submitLeaderBoardScore
     * @param leaderId{String} 排行榜ID
     * @param score{int} 分数值
     * @param callback
     * @return callback
     */
    "submitLeaderBoardScore": function (leaderId, score, callback) {
        if (leaderId == '' || leaderId == null) {
            return callback(false, '排行榜id为空！');
        }
        if (score < 0 || score == null) {
            return callback(false, 'score值错误！');
        }
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'submitLeaderBoardScore',
            [leaderId, this.playerData["id"], score],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 提交排行榜数值
     * @method submitLeaderBoardScores
     * @param leaderId{String} 排行榜ID
     * @param score{int} 分数值
     * @param callback
     * @return callback
     */
    "submitLeaderBoardScores": function (leaderId, playerId, score, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'submitLeaderBoardScore',
            [leaderId, playerId, score],
            function (result) {
                return callback(true, result);
            },
            function (error) {
                console.log('There was an error:', error);
                return callback(false, error["message"]);
            }
        );
    },
    /**
     * 更新分数值
     * @method addUpLeaderBoardScore
     * @param leaderId{String} 排行榜ID
     * @param score{int} 增加的分数值
     * @param callback
     * @return callback
     */
    "addUpLeaderBoardScore": function (leaderId, score, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'addUpLeaderBoardScore',
            [leaderId, this.playerData["id"], score],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    },
    /**
     * 通过排行榜的LeaderBoardID获取LeaderBoard信息
     * @method getInfoByLeaderId
     * @param leaderId{String} 排行榜LeaderBoardId
     * @param callback
     * @return callback
     */
    "getInfoByLeaderId": function (leaderId, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getLeaderBoardByLeaderId',
            [leaderId],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * mail 对象
 * @class mail
 * @constructor
 */
SgtApi["Mail"] = function () {
    /**
     * 附件
     * @property attachment
     * @type {string}
     * @default null
     */
    this["attachment"] = null,
    /**
     * 内容
     * @property content
     * @type {string}
     * @default null
     */
        this["content"] = null,
    /**
     * 发送者ID
     * @property fromId
     * @type {string}
     * @default null
     */
        this["fromId"] = null,
    /**
     * 发送者名称
     * @property fromName
     * @type {string}
     * @default null
     */
        this["fromName"] = null,
    /**
     * 主键
     * @property id
     * @type {string}
     * @default null
     */
        this["id"] = null,
    /**
     * 发送时间
     * @property sendTime
     * @type {string}
     * @default null
     */
        this["sendTime"] = (new Date()).getTime(),
    /**
     * 状态
     * @property status
     * @type {string}
     * @default null
     */
        this["status"] = SgtApi["config"]["Mail_TYPE_NOREAD"],
    /**
     * 标题
     * @property title
     * @type {string}
     * @default null
     */
        this["title"] = null,
    /**
     * 接收者ID
     * @property toId
     * @type {string}
     * @default null
     */
        this["toId"] = null,
    /**
     * 接收者名称
     * @property toName
     * @type {string}
     * @default null
     */
        this["toName"] = null,
    /**
     * 类型
     * @property type
     * @type {string}
     * @default null
     */
        this["type"] = 0;
};
/**
 * 邮件接口
 * @class MailService
 * @constructor
 * @type {{}|*}
 */
SgtApi["MailService"] = SgtApi["MailService"] || {};
SgtApi.extend(SgtApi["MailService"], {
    url: null,
    playerData: null,
    /**
     * 初始化接口
     * @method init
     * @param playerData{string} 角色信息
     * @return {boolean}
     */
    "init": function (playerData) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerData == null || typeof (playerData) == "undefined") {
            return false;
        }
        this.playerData = playerData;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/mail.do';
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
        if (mail["title"] == '' || mail["title"] == null) {
            return callback(false, '邮件标题不能为空！');
        }
        if (mail["toId"] == '' || mail["toId"] == null) {
            return callback(false, '收邮件人ID不能为空！');
        }
        if (mail["toName"] == '' || mail["toName"] == null) {
            return callback(false, '收邮件人名字不能为空！');
        }
        mail["fromId"] = this.playerData["id"];//String 发送者ID
        mail["fromName"] = this.playerData["name"];//String 发送者名称

        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'send',
            [mail],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
        if (start < 0 || start == null) {
            start = 1;
        }
        if (limit < 0 || limit == null) {
            limit = 5;
        }

        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'receive',
            [start, limit, this.playerData["id"], status],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
        if (typeof(otimestamp) != "undefined" && otimestamp && otimestamp != "") {
            timestamp = parseInt(otimestamp);
        }
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'receiveUnread',
            [timestamp, this.playerData["id"]],
            function (result) {
                localS.setItem('receiveUnread', Math.round(new Date().getTime() / 1000));
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
        if (id == null) {
            return callback(false, 'ID为空！');
        }
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'read',
            [id],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
        if (id == null) {
            return callback(false, 'ID为空！');
        }
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'delete',
            [id],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
            [this.playerData["id"]],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }

});

/**
 * 通知模块业务
 * @class Notification
 * @constructor
 * @type {{}|*}
 */
SgtApi["Notification"] = SgtApi["Notification"] || {};
SgtApi.extend(SgtApi["Notification"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/notification.do';
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
                    return callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    return callback(false, error["error"]["message"]);
                }
            );
        } else {
            backClient.call(
                'getLatestNotification',
                [this.playid],
                function (result) {
                    return callback(true, result["result"]);
                },
                function (error) {
                    console.log('There was an error["error"]:', error["error"]);
                    return callback(false, error["error"]["message"]);
                }
            );
        }
    }
});

/**
 * 充值业务逻辑
 * @class Purchase
 * @constructor
 * @type {{}|*}
 */
SgtApi["Purchase"] = SgtApi["Purchase"] || {};
SgtApi.extend(SgtApi["Purchase"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/purchase.do';
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 商城业务接口
 * @class StoreService
 * @constructor
 * @type {{}|*}
 */
SgtApi["StoreService"] = SgtApi["StoreService"] || {};
SgtApi.extend(SgtApi["StoreService"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/store.do';
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 计费点业务
 * @class ChargePoint
 * @constructor
 * @type {{}|*}
 */
SgtApi["ChargePoint"] = SgtApi["ChargePoint"] || {};
SgtApi.extend(SgtApi["ChargePoint"], {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/chargepoint.do';
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }

});

/**
 * BOSS业务接口
 * @class BossService
 * @constructor
 * @type {{}|*}
 */
SgtApi["BossService"] = SgtApi["BossService"] || {};
SgtApi.extend(SgtApi["BossService"], {
    url: null,
    playerData: null,
    /**
     * 初始化接口
     * @method init
     * @param playerid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerData == null) {
            return false;
        }
        this.playerid = playerid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/boss.do';
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 文件分发存储业务
 * @class FileStorage
 * @constructor
 * @type {{}|*}
 */
SgtApi["FileStorage"] = SgtApi["FileStorage"] || {};
SgtApi.extend(SgtApi["FileStorage"], {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/filestorage.do';
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 礼包/兑换码业务接口
 * @class GiftCode
 * @constructor
 * @type {{}|*}
 */
SgtApi["GiftCode"] = SgtApi["GiftCode"] || {};
SgtApi.extend(SgtApi["GiftCode"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/giftcode.do';
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 个人通道业务接口
 * @class PrivateChannel
 * @constructor
 * @type {{}|*}
 */
SgtApi["PrivateChannel"] = SgtApi["PrivateChannel"] || {};
SgtApi.extend(SgtApi["PrivateChannel"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playid) {
            this.playid = playid;
        } else {
            console.log('There was an error:playid is null');
            return false;
        }

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/privatechannel.do';
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 公共通道业务接口
 * @class PublicChannelService
 * @constructor
 * @type {{}|*}
 */
SgtApi["PublicChannelService"] = SgtApi["PublicChannelService"] || {};
SgtApi.extend(SgtApi["PublicChannelService"], {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/publicchannel.do';
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
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
                callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 第三方回调接口
 * @class DelegateDid
 * @constructor
 * @type {{}|*}
 */
SgtApi["DelegateDid"] = SgtApi["DelegateDid"] || {};
SgtApi.extend(SgtApi["DelegateDid"], {
    url: null,
    playid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playid) {
        if (SgtApi["AccountService"].userData == null) {
            console.log('There was an error:', '没获取用户信息！');
            return false;
        }
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (!playid || typeof (playid) == "undefined") {
            console.log('There was an error:playid is null');
            return false;
        }
        this.playid = playid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/delegatedid.do';
        return true;
    },
    /**
     * 创建代理id（did）
     * @method createDid
     * @param appId{string} APPID
     * @param serverId{string} 服务器ID
     * @param callback
     * @return callback
     */
    "createDid": function (callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'createDid',
            [SgtApi["AccountService"].playServerData["id"], SgtApi.userData["userid"], this.playid],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
            [SgtApi["AccountService"].playServerData["id"], this.playid],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * 结构化数据业务接口
 * @class StructuredDataService
 * @constructor
 * @type {{}|*}
 */
SgtApi["StructuredDataService"] = SgtApi["StructuredDataService"] || {};
SgtApi.extend(SgtApi["StructuredDataService"], {
    url: null,
    /**
     * 初始化接口
     * @method init
     * @return {boolean}
     */
    "init": function () {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/structureddata.do';
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
    "getMapValue": function (key, hashKey, callback) {
        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'getHashValue',
            [key, hashKey],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }
});

/**
 * Ticket 对象
 * @class Ticket
 * @constructor
 */
SgtApi["Ticket"] = function () {
    /**
     * 反馈给后台的内容
     * @property content
     * @type {string}
     * @default null
     */
    this["content"] = null,//
    /**
     * 提交时间
     * @property createTime
     * @type {long}
     * @default null
     */
        this["createTime"] = (new Date()).getTime(),
    /**
     * 处理完返回给提交者的信息
     * @property feedbackInfo
     * @type {string}
     * @default null
     */
        this["feedbackInfo"] = null,
    /**
     * 主键
     * @property id
     * @type {int}
     * @default null
     */
        this["id"] = 0,
    /**
     * 提交者ID
     * @property senderPlayerId
     * @type {string}
     * @default null
     */
        this["senderPlayerId"] = null,
    /**
     * 状态
     * @property status
     * @type {int}
     * @default null
     */
        this["status"] = 1,
    /**
     * 目标角色ID
     * @property targetPlayerId
     * @type {string}
     * @default null
     */
        this["targetPlayerId"] = null,
    /**
     * 标题
     * @property title
     * @type {string}
     * @default null
     */
        this["title"] = null,
    /**
     * 类型
     * @property type
     * @type {int}
     * @default null
     */
        this["type"] = 1;
};

/**
 * 反馈举报 业务接口
 * @class TicketService
 * @constructor
 * @type {{}|*}
 */
SgtApi["TicketService"] = SgtApi["TicketService"] || {};
SgtApi.extend(SgtApi["TicketService"], {
    url: null,
    playerid: null,
    /**
     * 初始化接口
     * @method init
     * @param playid{string} 角色id
     * @return {boolean}
     */
    "init": function (playerid) {
        if (SgtApi["AccountService"].playServerData == null) {
            console.log('There was an error:', '没获取角色服务器信息！');
            return false;
        }
        if (playerid == null) {
            return false;
        }
        this.playerid = playerid;

        this.url = SgtApi["AccountService"].playServerData["address"] + '/' + SgtApi["config"]["AppId"] + '/ticket.do';
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
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
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
        ticket["senderPlayerId"] = this.playerid;//提交者ID

        var backClient = new $JsonRpc({ajaxUrl: this.url});
        backClient.call(
            'sendTicket',
            [ticket],
            function (result) {
                return callback(true, result["result"]);
            },
            function (error) {
                console.log('There was an error["error"]:', error["error"]);
                return callback(false, error["error"]["message"]);
            }
        );
    }

});




