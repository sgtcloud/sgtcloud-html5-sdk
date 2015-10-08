console.log('----------------------DailyTaskService----------------------------');

module('test-DailyTaskService');

test('test DailyTaskService excuteTask', function () {
    SgtApi.DailyTaskService.excuteTask('123', playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test DailyTaskService excuteTasksByType', function () {
    SgtApi.DailyTaskService.excuteTasksByType('1', playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test DailyTaskService addexcuteTasksByType', function () {
    SgtApi.DailyTaskService.addexcuteTasksByType('1', playerId, 1, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test DailyTaskService getDailyTasks', function () {
    SgtApi.DailyTaskService.getDailyTasks(playerId, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test DailyTaskService getDailyTasksByType', function () {
    SgtApi.DailyTaskService.getDailyTasksByType(playerId, '123', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test DailyTaskService getReward', function () {
    SgtApi.DailyTaskService.getReward('123', playerId, function (result, data) {
        if (result) {
            deepEqual('string', typeof data, data);
        } else {
            if (data === '您已经领取了任务奖励，不要这么贪得无厌哦！') {
                ok(true, data);
            }
            else {
                ok(false, data);
            }
        }
    });
});

test('test DailyTaskService setTaskProgress', function () {
    SgtApi.DailyTaskService.setTaskProgress(playerId, '123', 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test DailyTaskService setTasksProgressByType', function () {
    SgtApi.DailyTaskService.setTasksProgressByType('123', playerId, 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});