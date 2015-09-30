console.log('----------------------PlayerService----------------------------');

module('test-PlayerService');

var userId = '';
var playerId = '8a20a23010889';
var test_playerId = '';
SgtApi.UserService.login('ppoo001', 'ppoo001', function (result, data) {
    if (result) {
        userId = data.userid;
    }
});


test('test PlayerService create', function () {
    SgtApi.PlayerService.create({}, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
            test_playerId = data.id;
        } else {
            ok(false, data);
        }
    });
});


test('test PlayerService update', function () {
    SgtApi.PlayerService.update({id: playerId}, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});


test('test PlayerService getByUserId', function () {
    SgtApi.PlayerService.getByUserId(playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});


test('test PlayerService getOneByUserId', function () {
    SgtApi.PlayerService.getOneByUserId(playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});


test('test PlayerService uploadSave', function () {
    SgtApi.PlayerService.uploadSave({}, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService downloadSave', function () {
    SgtApi.PlayerService.downloadSave('', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService getByName', function () {
    SgtApi.PlayerService.getByName('', 0, 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService getByLastLoginTime', function () {
    SgtApi.PlayerService.getByLastLoginTime(0, 0, 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService getPlayerByCustomId', function () {
    SgtApi.PlayerService.getPlayerByCustomId('', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService getPlayerById', function () {
    SgtApi.PlayerService.getPlayerById('', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService searchPlayersByLastLogin', function () {
    SgtApi.PlayerService.searchPlayersByLastLogin(0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService setFriendsMaxNumber', function () {
    SgtApi.PlayerService.setFriendsMaxNumber('', 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService getFriendsMaxNumber', function () {
    SgtApi.PlayerService.getFriendsMaxNumber(playerId, function (result, data) {
        if (result) {
            deepEqual('number', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerService deletePlayerByPlayerId', function () {
    SgtApi.PlayerService.deletePlayerByPlayerId(test_playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});
