console.log('----------------------AchievementService----------------------------');

module('test-AchievementService');

test('test AchievementService getAllAchievements', function () {
    SgtApi.AchievementService.getAllAchievements(function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService getAchievementById', function () {
    SgtApi.AchievementService.getAchievementById('123456789', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService getAvailableAchievements', function () {
    SgtApi.AchievementService.getAvailableAchievements(customPlayerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService getDoneAchievements', function () {
    SgtApi.AchievementService.getDoneAchievements(customPlayerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService getCompleteAchievements', function () {
    SgtApi.AchievementService.getCompleteAchievements(customPlayerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService complete', function () {
    SgtApi.AchievementService.complete(playerId, '123456789', function (result, data) {
        if (result) {
            deepEqual('string', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService achieve', function () {
    SgtApi.AchievementService.achieve(playerId, '123456789', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService excuteAchievementsByType', function () {
    SgtApi.AchievementService.excuteAchievementsByType('', customPlayerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService customAchievementsByType', function () {
    SgtApi.AchievementService.customAchievementsByType('', customPlayerId, 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService getAchievementsByType', function () {
    SgtApi.AchievementService.getAchievementsByType(customPlayerId, '', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService setAchievementProgress', function () {
    SgtApi.AchievementService.setAchievementProgress(customPlayerId, '123456789', 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService setAchievementsProgressByType', function () {
    SgtApi.AchievementService.setAchievementsProgressByType('', customPlayerId, 0, function (result, data) {
        console.log(playerId);
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});