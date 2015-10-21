var assert = require('assert');
var jsonRPC = require('./lib/jsonrpc');
var SgtApi = require('../sgtcloud-html5-sdk.2.0.2');


var user = null;
var player = null;
var mail = new SgtApi.entity.Mail();


//初始化应用标识
SgtApi.init({
    appId: 'html5_demo2015'
});


//测试UserService
describe('UserService', function() {
    describe('login', function() {
        it('should login', function(done) {
            SgtApi.UserService.login('Ak61E175', 'yoedge2014', function(result, data) {
                if (result) {
                    user = data;
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });

        });
    });
});

// 测试PlayerService
describe('PlayerService', function() {
    player = new SgtApi.entity.Player();
    player.name = 'testPlayer005';

    describe('create', function() {
        it('should create player', function(done) {
            SgtApi.PlayerService.create(player, function(result, data) {
                if (data) {
                    player = data;
                    assert.ok(true);
                    assert.strictEqual(player.name, data.name);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('downloadSave', function() {
        it('should download Save', function(done) {
            SgtApi.PlayerService.downloadSave(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getByLastLoginTime', function() {
        it('should get by last login time', function(done) {
            SgtApi.PlayerService.getByLastLoginTime(100, 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getByName', function() {
        it('should get by name', function(done) {
            SgtApi.PlayerService.getByName(player.name, 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getByUserId', function() {
        it('should get by user id', function(done) {
            SgtApi.PlayerService.getByUserId(user.userid, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getFriendsMaxNumber', function() {
        it('should get friends max number', function(done) {
            SgtApi.PlayerService.getFriendsMaxNumber(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getOneByUserId', function() {
        it('should get one by user id', function(done) {
            SgtApi.PlayerService.getOneByUserId(user.userid, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getPlayerByCustomId', function() {
        it('should get player by custom id', function(done) {
            SgtApi.PlayerService.getPlayerByCustomId(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getPlayerById', function() {
        it('should get player by id', function(done) {
            SgtApi.PlayerService.getPlayerById(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('searchPlayersByLastLogin', function() {
        it('should search players by last login', function(done) {
            SgtApi.PlayerService.searchPlayersByLastLogin(1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('searchPlayersByLastLoginCondition', function() {
        it('should search players by last login condition', function(done) {
            SgtApi.PlayerService.searchPlayersByLastLoginCondition(100, 1, [player.id], function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('setFriendsMaxNumber', function() {
        it('should set friends max number', function(done) {
            SgtApi.PlayerService.setFriendsMaxNumber(player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('update', function() {
        it('should update', function(done) {
            SgtApi.PlayerService.update(player, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('uploadSave', function() {
        it('should upload Save', function(done) {
            SgtApi.PlayerService.uploadSave(null, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('deletePlayerByPlayerId', function() {
        it('should delete player', function(done) {
            SgtApi.PlayerService.deletePlayerByPlayerId(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                    SgtApi.PlayerService.getPlayerById('8a20a23072544', function(result, data) {
                        player = data;
                    });
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

// 测试PlayerExtraService
describe('PlayerExtraService', function() {

    describe('addPlayer', function() {
        it('should add player', function(done) {
            SgtApi.PlayerExtraService.addPlayer(player, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('findAll', function() {
        it('should find add', function(done) {
            SgtApi.PlayerExtraService.findAll(1, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('findAllByCondition', function() {
        it('should find all by condition', function(done) {
            SgtApi.PlayerExtraService.findAllByCondition({}, 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getPlayerById', function() {
        it('should get player by id', function(done) {
            SgtApi.PlayerExtraService.getPlayerById(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getPlayerList', function() {
        it('should get player list', function(done) {
            SgtApi.PlayerExtraService.getPlayerList({}, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('updatePlayerMap', function() {
        it('should update player map', function(done) {
            SgtApi.PlayerExtraService.updatePlayerMap(player, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('updatePlayer', function() {
        it('should update player', function(done) {
            SgtApi.PlayerExtraService.updatePlayer(player.id, player, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('deletePlayerById', function() {
        it('should delete player by id', function(done) {
            SgtApi.PlayerExtraService.deletePlayerById(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试AchievementService
describe('AchievementService', function() {
    var achievementId = '123456789';

    describe('achieve', function() {
        it('should achieve', function(done) {
            SgtApi.AchievementService.achieve(player.id, achievementId, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('complete', function() {
        it('should complete', function(done) {
            SgtApi.AchievementService.complete(player.id, achievementId, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('excuteAchievementsByType', function() {
        it('should excute achievements by type', function(done) {
            SgtApi.AchievementService.excuteAchievementsByType('123456789', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('customAchievementsByType', function() {
        it('should custom achievement by type', function(done) {
            SgtApi.AchievementService.customAchievementsByType('123456789', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getAchievementById', function() {
        it('should get achievement by id', function(done) {
            SgtApi.AchievementService.getAchievementById(achievementId, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getAchievementsByType', function() {
        it('should get achievements by type', function(done) {
            SgtApi.AchievementService.getAchievementsByType(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getAllAchievements', function() {
        it('should all achievements', function(done) {
            SgtApi.AchievementService.getAllAchievements(function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getAvailableAchievements', function() {
        it('should get available achievements', function(done) {
            SgtApi.AchievementService.getAvailableAchievements(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getCompleteAchievements', function() {
        it('should get complete achievements', function(done) {
            SgtApi.AchievementService.getCompleteAchievements(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getDoneAchievements', function() {
        it('should get done achievements', function(done) {
            SgtApi.AchievementService.getDoneAchievements(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('setAchievementProgress', function() {
        it('should set achievement progress', function(done) {
            SgtApi.AchievementService.setAchievementProgress(player.id, achievementId, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('setAchievementsProgressByType', function() {
        it('should set achievements progress by type', function(done) {
            SgtApi.AchievementService.setAchievementsProgressByType('', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试AnnouncementServcie
describe('AnnouncementService', function() {

    describe('getAnnounceByType', function() {
        it('should get announce by type', function(done) {
            SgtApi.AnnouncementService.getAnnounceByType('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试CampaignService
describe('CampaignService', function() {

    describe('getAvailableCampaigns', function() {
        it('should get available campaigns', function(done) {
            SgtApi.CampaignService.getAvailableCampaigns(function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getByTimeZone', function() {
        it('should get by time zone', function(done) {
            SgtApi.CampaignService.getByTimeZone(100, 100, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getCampaignById', function() {
        it('should get campaign by id', function(done) {
            SgtApi.CampaignService.getCampaignById('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getCampaignDetailByCampaignId', function() {
        it('should get campaign detail by campaign id', function(done) {
            SgtApi.CampaignService.getCampaignDetailByCampaignId('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getCampaignDetailByCampaignDetailId', function() {
        it('should get campaign detail by campaign detail id', function(done) {
            SgtApi.CampaignService.getCampaignDetailByCampaignDetailId('123', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getCampaignProgress', function() {
        it('should get campaign progress', function(done) {
            SgtApi.CampaignService.getCampaignProgress('123', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('updateProgress', function() {
        it('should update progress', function(done) {
            SgtApi.CampaignService.updateProgress('2', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试CheckinBoardService
describe('CheckinBoardService', function() {

    describe('checkin', function() {
        it('should checkin', function(done) {
            SgtApi.CheckinBoardService.checkin(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('accumulateCount', function() {
        it('should accumulate count', function(done) {
            SgtApi.CheckinBoardService.accumulateCount(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('continuousCount', function() {
        it('should continuous count', function(done) {
            SgtApi.CheckinBoardService.continuousCount(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getCheckinBoardByCheckinBoardId', function() {
        it('should get checkin board by checkin board id', function(done) {
            SgtApi.CheckinBoardService.getCheckinBoardByCheckinBoardId('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    asser.ok(false);
                }
                done();
            });
        });
    });

    describe('getLastCheckinTime', function() {
        it('should get last checkin time', function(done) {
            SgtApi.CheckinBoardService.getLastCheckinTime(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getRewardByCheckinBoardId', function() {
        it('should get reward by checkin board id', function(done) {
            SgtApi.CheckinBoardService.getRewardByCheckinBoardId('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('setCheckinTimes', function() {
        it('should set checkin times', function(done) {
            SgtApi.CheckinBoardService.setCheckinTimes(player.id, 'begintoday', 2, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('validateCheckin', function() {
        it('should validate checkin', function(done) {
            SgtApi.CheckinBoardService.validateCheckin(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getAvailableCheckinBoards', function() {
        it('should get available chekcin boards', function(done) {
            SgtApi.CheckinBoardService.getAvailableCheckinBoards(function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getAvailableCheckinBoardsByTag', function() {
        it('should get available chekcin boards by tag', function(done) {
            SgtApi.CheckinBoardService.getAvailableCheckinBoardsByTag('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getAvailableCheckinBoardsByType', function() {
        it('should get available chekcin boards by type', function(done) {
            SgtApi.CheckinBoardService.getAvailableCheckinBoardsByType('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试DailyTaskService
describe('DailyTaskService', function() {

    describe('executeTask', function() {
        it('should execute task', function(done) {
            SgtApi.DailyTaskService.executeTask('123', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('executeTasksByType', function() {
        it('should execute task by type', function(done) {
            SgtApi.DailyTaskService.executeTasksByType('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('addExecuteTasksByType', function() {
        it('should add execute tasks by type', function(done) {
            SgtApi.DailyTaskService.addExecuteTasksByType('', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getDailyTasks', function() {
        it('should get daily tasks', function(done) {
            SgtApi.DailyTaskService.getDailyTasks(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getDailyTasksByType', function() {
        it('should get daily tasks by type', function(done) {
            SgtApi.DailyTaskService.getDailyTasksByType(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getReward', function() {
        it('should get reward', function(done) {
            SgtApi.DailyTaskService.getReward('123', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    if (data === '您已经领取了任务奖励，不要这么贪得无厌哦！') {
                        assert(true);
                    } else {
                        assert.ok(false);
                    }
                }
                done();
            });
        });
    });

    describe('setTaskProgress', function() {
        it('should set task progress', function(done) {
            SgtApi.DailyTaskService.setTaskProgress(player.id, '123', 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('setTasksProgressByType', function() {
        it('should set task progress by type', function(done) {
            SgtApi.DailyTaskService.setTasksProgressByType('', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试TaskService(暂时没法测,因为TaskService是个抽象的父类,DailyTaskService有实现)
// describe('TaskService', function() {

//     var playerId = player.id;
//     var actionType = '';
//     var taskId = '';
//     var addtodayTimes = 1;
//     var achievementId = '';
//     var progress = 1;
//     var dailyTaskId = '';
//     var type = '';
//     var taskType = '';


//     describe('addActionCount', function() {
//         it('should add action count', function(done) {
//             SgtApi.TaskService.addActionCount(playerId, actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('addActionCountTime', function() {
//         it('should add action count time', function(done) {
//             SgtApi.TaskService.addActionCountTime(playerId, actionType, addtodayTimes, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('complete', function() {
//         it('should complete', function(done) {
//             SgtApi.TaskService.complete(playerId, taskId, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getAchievementById', function() {
//         it('should get achievement by id', function(done) {
//             SgtApi.TaskService.getAchievementById(achievementId, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getAchievements', function() {
//         it('should get achievements', function(done) {
//             SgtApi.TaskService.getAchievements(playerId, actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getAchievementsByType', function() {
//         it('should get achievements by type', function(done) {
//             SgtApi.TaskService.getAchievementsByType(actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getActionCount', function() {
//         it('should get action count', function(done) {
//             SgtApi.TaskService.getActionCount(playerId, actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getAllAchievements', function() {
//         it('should get all achievements', function(done) {
//             SgtApi.TaskService.getAllAchievements(function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getAllDailyTasks', function() {
//         it('should get all daily tasks', function(done) {
//             SgtApi.TaskService.getAllDailyTasks(function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getAllTasks', function() {
//         it('should get all tasks', function(done) {
//             SgtApi.TaskService.getAllTasks(taskType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getCompleteAchievements', function() {
//         it('should get complete achievements', function(done) {
//             SgtApi.TaskService.getCompleteAchievements(playerId, actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getCompleteDailyTasks', function() {
//         it('should get complete daily tasks', function(done) {
//             SgtApi.TaskService.getCompleteDailyTasks(playerId, actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getCompleteTasks', function() {
//         it('should get complete tasks', function(done) {
//             SgtApi.TaskService.getCompleteTasks(taskType, playerId, actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getDailyTaskById', function() {
//         it('should get daily task by id', function(done) {
//             SgtApi.TaskService.getDailyTaskById(dailyTaskId, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getDailyTasks', function() {
//         it('should get daily tasks', function(done) {
//             SgtApi.TaskService.getDailyTasks(playerId, actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getDailyTasksByType', function() {
//         it('should get daily tasks by type', function(done) {
//             SgtApi.TaskService.getDailyTasksByType(playerId, type, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getReward', function() {
//         it('should get reward', function(done) {
//             SgtApi.TaskService.getReward(taskId, playerId, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getDailyTasks', function() {
//         it('should get daily tasks', function(done) {
//             SgtApi.TaskService.getDailyTasks(playerId, actionType, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('setTaskProgress', function() {
//         it('should set task progress', function(done) {
//             SgtApi.TaskService.setTaskProgress(playerId, taskId, progress, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('setTasksProgressByType', function() {
//         it('should set tasks progress by type', function(done) {
//             SgtApi.TaskService.setTasksProgressByType(type, playerId, progress, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });
// });

//测试FriendshipService
describe('FriendshipService', function() {

    describe('acceptInvite', function() {
        it('should accept invite', function(done) {
            SgtApi.FriendshipService.acceptInvite('', '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('acceptInviteByMail', function() {
        it('should accept invite by mail', function(done) {
            SgtApi.FriendshipService.acceptInviteByMail('', '', mail, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getDenied', function() {
        it('should get denied', function(done) {
            SgtApi.FriendshipService.getDenied(1, 1, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getFrindsCount', function() {
        it('should get friends count', function(done) {
            SgtApi.FriendshipService.getFrindsCount(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getInvite', function() {
        it('should get invite', function(done) {
            SgtApi.FriendshipService.getInvite('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getMyFriends', function() {
        it('should get my friends', function(done) {
            SgtApi.FriendshipService.getMyFriends(1, 1, player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getNotConfirm', function() {
        it('should get not confirm', function(done) {
            SgtApi.FriendshipService.getNotConfirm('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('invite', function() {
        it('should invite', function(done) {
            SgtApi.FriendshipService.invite('', '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('inviteByMails', function() {
        it('should invite by mails', function(done) {
            SgtApi.FriendshipService.inviteByMails('', '', [mail], function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('isMyfriend', function() {
        it('should is my friend', function(done) {
            SgtApi.FriendshipService.isMyfriend('', '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('refuse', function() {
        it('should refuse', function(done) {
            SgtApi.FriendshipService.refuse('', '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('unfriend', function() {
        it('should unfriend', function(done) {
            SgtApi.FriendshipService.unfriend(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试FriendshipExtraService
describe('FriendshipExtraService', function() {

    describe('getAllMyFriendsAndExt', function() {
        it('should get all my friends and ext', function(done) {
            SgtApi.FriendshipExtraService.getAllMyFriendsAndExt(player.id, '', 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getMyFriendAndExt', function() {
        it('should get my friends and ext', function(done) {
            SgtApi.FriendshipExtraService.getMyFriendAndExt(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('updateAllMyFriendExt', function() {
        it('should update all my friend ext', function(done) {
            SgtApi.FriendshipExtraService.updateAllMyFriendExt(player.id, '', '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('updateMyFriendAllExt', function() {
        it('should update my friend all ext', function(done) {
            SgtApi.FriendshipExtraService.updateMyFriendAllExt(player.id, '', '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('updateMyFriendExt', function() {
        it('should update my friend ext', function(done) {
            SgtApi.FriendshipExtraService.updateMyFriendExt(player.id, '', '', '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试BlackListService
describe('BlacklistService', function() {

    describe('addPlayerIntoBlacklist', function() {
        it('should add player into black list', function(done) {
            SgtApi.BlacklistService.addPlayerIntoBlacklist('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('isInBlacklist', function() {
        it('should is in black list', function(done) {
            SgtApi.BlacklistService.isInBlacklist('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试GachaBoxService
describe('GachaBoxService', function() {

    describe('autoBalanceDraw', function() {
        it('should auto balance draw', function(done) {
            SgtApi.GachaBoxService.autoBalanceDraw(player.id, '', 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('autoBalanceDrawQuality', function() {
        it('should auto balance draw quality', function(done) {
            SgtApi.GachaBoxService.autoBalanceDrawQuality(player.id, '', 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('autoBalanceDrawMaxQuality', function() {
        it('should auto balance max draw', function(done) {
            SgtApi.GachaBoxService.autoBalanceDrawMaxQuality(player.id, '', 1, 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('draw', function() {
        it('should draw', function(done) {
            SgtApi.GachaBoxService.draw(player.id, '', 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getAvailableGachaBox', function() {
        it('should get available gacha box', function(done) {
            SgtApi.GachaBoxService.getAvailableGachaBox(function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getGachaBoxByName', function() {
        it('should get gacha box by name', function(done) {
            SgtApi.GachaBoxService.getGachaBoxByName('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getLotteriesByGachaBoxId', function() {
        it('should get lotteries by gacha box id', function(done) {
            SgtApi.GachaBoxService.getLotteriesByGachaBoxId('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('limitDraw', function() {
        it('should limit draw', function(done) {
            SgtApi.GachaBoxService.limitDraw(player.id, '', 2, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试LeaderBoardService
describe('LeaderBoardService', function() {

    describe('addUpLeaderBoardScore', function() {
        it('should add up leader board score', function(done) {
            SgtApi.LeaderBoardService.addUpLeaderBoardScore('', player.id, 100, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getLeaderBoardByLeaderId', function() {
        it('should get leader board by leader id', function(done) {
            SgtApi.LeaderBoardService.getLeaderBoardByLeaderId('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getLeaderBoardScoreByExample', function() {
        it('should get leader board score by example', function(done) {
            SgtApi.LeaderBoardService.getLeaderBoardScoreByExample('', player, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getLeaderBoardScoreByLeaderIdAndPlayerId', function() {
        it('should get leader board score by leader id and player id', function(done) {
            SgtApi.LeaderBoardService.getLeaderBoardScoreByLeaderIdAndPlayerId('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getLeaderBoardScoresByLeaderIdAndPlayerId', function() {
        it('should get leader board scores by leader id and player id', function(done) {
            SgtApi.LeaderBoardService.getLeaderBoardScoresByLeaderIdAndPlayerId('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getTopLeaderBoardScoreByLeaderId', function() {
        it('should get top leader board score by leader id', function(done) {
            SgtApi.LeaderBoardService.getTopLeaderBoardScoreByLeaderId('', 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('submitLeaderBoardScore', function() {
        it('should submit leader board score', function(done) {
            SgtApi.LeaderBoardService.submitLeaderBoardScore('', player.id, 100, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试MailService
describe('MailService', function() {
    describe('sendMail', function() {
        it('should send mail', function(done) {
            SgtApi.MailService.sendMail(player, mail, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('receive', function() {
        it('should receive', function(done) {
            SgtApi.MailService.receive(1, 1, player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('receiveUnread', function() {
        it('should receive unread', function(done) {
            SgtApi.MailService.receiveUnread(function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('readMail', function() {
        it('should read mail', function(done) {
            SgtApi.MailService.readMail('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('readAndPickAttachment', function() {
        it('should read and pick attachment', function(done) {
            SgtApi.MailService.readAndPickAttachment('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('deleteMail', function() {
        it('should delete mail', function(done) {
            SgtApi.MailService.deleteMail('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getReadedAndUnreadedMails', function() {
        it('should get readed and unreaded mails', function(done) {
            SgtApi.MailService.getReadedAndUnreadedMails(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('pickAttachment', function() {
        it('should pich attachment', function(done) {
            SgtApi.MailService.sendMail('', function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});

//测试Notication
describe('Notification', function() {

    describe('getLatestNotification', function() {
        it('should get latest notification', function(done) {
            SgtApi.Notification.getLatestNotification(player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });

    describe('getLatestNotificationByTime', function() {
        it('should get latest notification by time', function(done) {
            SgtApi.Notification.getLatestNotificationByTime(player.id, 100, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
                done();
            });
        });
    });
});
