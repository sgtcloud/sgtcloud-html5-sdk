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
    SgtApi.AchievementService.getAvailableAchievements(playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService getDoneAchievements', function () {
    SgtApi.AchievementService.getDoneAchievements(playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService getCompleteAchievements', function () {
    SgtApi.AchievementService.getCompleteAchievements(playerId, function (result, data) {
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
    SgtApi.AchievementService.excuteAchievementsByType('a', playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService customAchievementsByType', function () {
    SgtApi.AchievementService.customAchievementsByType('a', playerId, 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService getAchievementsByType', function () {
    SgtApi.AchievementService.getAchievementsByType(playerId, 'a', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService setAchievementProgress', function () {
    SgtApi.AchievementService.setAchievementProgress(playerId, '123456789', 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test AchievementService setAchievementsProgressByType', function () {
    SgtApi.AchievementService.setAchievementsProgressByType('a', playerId, 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});