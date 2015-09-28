//测试UserService

var userId;
SgtApi.UserService.login('llo014', 'qqqqqqqq', function (result, data) {
    if (result) {
        console.log('登录成功');
        userId = data.userId;
    }
});

SgtApi.PlayerService.init();


//测试创建角色
function test_create() {

    var player = SgtApi.entityFactory('Player');
    player.name = 'xiaosi';

    SgtApi.PlayerService.create(player, function (result, data) {
        if (result) {
            console.log(data);
        }
    })
}


//测试更新角色信息
function test_update() {


    var player = SgtApi.entityFactory('Player');
    player.id = '00000051223';
    player.customId = 'asdasdasdad';
    player.userId = '8a2111a85003f54d015012a1becb0034';
    player.name = 'wwwwwwwwwwwww';

    SgtApi.PlayerService.update(player, function (result, data) {
        if (result) {
            console.log(data);
        }
    })
}

//测试根据用户ID查找角色
function test_getByUserId() {

    SgtApi.PlayerService.getByUserId(userId, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//测试通过用户ID查找其中的一个角色
function test_getOneByUserId() {

    SgtApi.PlayerService.getOneByUserId(userId, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}


//测试上传存档
function test_uploadSave() {

    var save = SgtApi.entityFactory('Save');
    save.playerId = '00000051237';
    save.content = 'asdadadad';
    console.log(save);

    SgtApi.PlayerService.uploadSave(save, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}


//测试下载存档
function test_downloadSave() {

    SgtApi.PlayerService.downloadSave('00000051237', function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//测试根据角色名查找角色
function test_getByName() {

    SgtApi.PlayerService.getByName('zhangsan', 1, 2, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//测试根据最后登陆时间查找角色
function test_getByLastLoginTime() {

    SgtApi.PlayerService.getByLastLoginTime(1000000, 0, 3, function (result, data) {
        console.log(data);
    });
}

//测试通过自定义ID获取角色信息
function test_getPlayerByCustomId() {

    SgtApi.PlayerService.getPlayerByCustomId('asdasdasdad', function (result, data) {
        console.log(data);
    });
}

//测试通过playerId删除角色及相关信息
function test_deletePlayerByPlayerId() {

    SgtApi.PlayerService.deletePlayerByPlayerId('00000051231', function (result, data) {
        if (result) {
            console.log(data);
        }
    })
}

//测试通过ID获取Player
function test_getPlayerById() {

    SgtApi.PlayerService.getPlayerById('00000051237', function (result, data) {
        if (result) {
            console.log(data);
        }
    });

}

//测试随机返回若干个最近登录的sgpplayer
function test_searchPlayersByLastLogin() {

    SgtApi.PlayerService.searchPlayersByLastLogin(4, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//测试设置指定角色的好友上限
function test_setFriendsMaxNumber() {

    SgtApi.PlayerService.setFriendsMaxNumber('00000051241', 5, function (result, data) {
        if (result) {
            console.log(data);
        }
    });
}

//测试获取指定角色的好友上限
function test_getFriendsMaxNumber() {

    SgtApi.PlayerService.getFriendsMaxNumber('00000051241', function (result, data) {
        if (result) {
            console.log(data);
        }
    })
}

