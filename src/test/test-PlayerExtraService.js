console.log('----------------------PlayerExtraService----------------------------');

module('test-PlayerExtraService');


test('test PlayerExtraService getPlayerById', function () {
    SgtApi.PlayerExtraService.getPlayerById(customPlayerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerExtraService getPlayerList', function () {
    SgtApi.PlayerExtraService.getPlayerList({}, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerExtraService findAll', function () {
    SgtApi.PlayerExtraService.findAll(0, 5, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerExtraService findAllByCondition', function () {
    SgtApi.PlayerExtraService.findAllByCondition({}, 0, 5, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerExtraService addPlayer', function () {
    SgtApi.PlayerExtraService.addPlayer({}, function (result, data) {
        if (result) {
            deepEqual(null, data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerExtraService updatePlayer', function () {
    SgtApi.PlayerExtraService.updatePlayer(customPlayerId, {}, function (result, data) {
        if (result) {
            deepEqual(null, data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerExtraService updatePlayerMap', function () {
    SgtApi.PlayerExtraService.updatePlayerMap({}, function (result, data) {
        if (result) {
            deepEqual(null, data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test PlayerExtraService deletePlayerById', function () {
    SgtApi.PlayerExtraService.deletePlayerById(customPlayerId, function (result, data) {
        if (result) {
            deepEqual(null, data, data);
        } else {
            ok(false, data);
        }
    })
});