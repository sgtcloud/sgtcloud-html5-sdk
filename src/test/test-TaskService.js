console.log('----------------------TaskService----------------------------');

module('test-TaskService');


test('test TaskService addActionCount', function () {
    SgtApi.TaskService.addActionCount(playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService addActionCountTime', function () {
    SgtApi.TaskService.addActionCountTime(playerId, 'bbc', 1, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService complete', function () {
    SgtApi.TaskService.complete(playerId, '234', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            if (data === '任务不存在！') {
                ok(true, data);
            } else {
                ok(false, data);
            }
        }
    });
});

test('test TaskService getAchievementById', function () {
    SgtApi.TaskService.getAchievementById('bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getAchievements', function () {
    SgtApi.TaskService.getAchievements(playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getAchievementsByType', function () {
    SgtApi.TaskService.getAchievementsByType('bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getActionCount', function () {
    SgtApi.TaskService.getActionCount(playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getAllAchievements', function () {
    SgtApi.TaskService.getAllAchievements(function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getAllDailyTasks', function () {
    SgtApi.TaskService.getAllDailyTasks(function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getAllTasks', function () {
    SgtApi.TaskService.getAllTasks('bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getCompleteAchievements', function () {
    SgtApi.TaskService.getCompleteAchievements(playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getCompleteDailyTasks', function () {
    SgtApi.TaskService.getCompleteDailyTasks(playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getCompleteTasks', function () {
    SgtApi.TaskService.getCompleteTasks('bbc', playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getDailyTaskById', function () {
    SgtApi.TaskService.getDailyTaskById('bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getDailyTasks', function () {
    SgtApi.TaskService.getDailyTasks(playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getDailyTasksByType', function () {
    SgtApi.TaskService.getDailyTasksByType('bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getDoneAchievements', function () {
    SgtApi.TaskService.getDoneAchievements(playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getDoneDailyTasks', function () {
    SgtApi.TaskService.getDoneDailyTasks(playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getDoneTasks', function () {
    SgtApi.TaskService.getDoneTasks('bbc', playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getReward', function () {
    SgtApi.TaskService.getReward(playerId, '234', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            if (data === '任务不存在！') {
                ok(true, data);
            } else {
                ok(false, data);
            }
        }
    });
});

test('test TaskService getTaskById', function () {
    SgtApi.TaskService.getTaskById('bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getTasks', function () {
    SgtApi.TaskService.getTasks('bbc', playerId, 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getTasksStatus', function () {
    SgtApi.TaskService.getTasksStatus('bbc', playerId, 'bbc', [1, 2], function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test TaskService getTasksByType', function () {
    SgtApi.TaskService.getTasksByType('bbc', 'bbc', function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

