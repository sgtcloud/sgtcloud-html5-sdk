var assert = require('assert');
var jsonRPC = require('./lib/jsonrpc');
var SgtApi = require('../sgtcloud-html5-sdk');


var user = null;
var player = null;
var mail = new SgtApi.Mail();
mail.title = '123';
mail.id = '123';

// player.id = "8a20a23010889";

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
                    console.log(SgtApi.context.server);
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

// 测试PlayerService
describe('PlayerService', function() {
    player = new SgtApi.Player();
    player.name = 'testPlayer005';

    describe('create', function() {
        it('should create player', function(done) {
            SgtApi.PlayerService.create(player, function(result, data) {
                if (data) {
                    player = data;
                    assert.ok(true, data);
                    assert.strictEqual(player.name, data.name);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('downloadSave', function() {
        it('should download Save', function(done) {
            SgtApi.PlayerService.downloadSave(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getByLastLoginTime', function() {
        it('should get by last login time', function(done) {
            SgtApi.PlayerService.getByLastLoginTime(100, 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getByName', function() {
        it('should get by name', function(done) {
            SgtApi.PlayerService.getByName(player.name, 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getByUserId', function() {
        it('should get by user id', function(done) {
            SgtApi.PlayerService.getByUserId(user.userid, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getFriendsMaxNumber', function() {
        it('should get friends max number', function(done) {
            SgtApi.PlayerService.getFriendsMaxNumber(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getOneByUserId', function() {
        it('should get one by user id', function(done) {
            SgtApi.PlayerService.getOneByUserId(user.userid, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getPlayerByCustomId', function() {
        it('should get player by custom id', function(done) {
            SgtApi.PlayerService.getPlayerByCustomId(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getPlayerById', function() {
        it('should get player by id', function(done) {
            SgtApi.PlayerService.getPlayerById(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('searchPlayersByLastLogin', function() {
        it('should search players by last login', function(done) {
            SgtApi.PlayerService.searchPlayersByLastLogin(1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('searchPlayersByLastLoginCondition', function() {
        it('should search players by last login condition', function(done) {
            SgtApi.PlayerService.searchPlayersByLastLoginCondition(100, 1, [player.id], function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('setFriendsMaxNumber', function() {
        it('should set friends max number', function(done) {
            SgtApi.PlayerService.setFriendsMaxNumber(player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('update', function() {
        it('should update', function(done) {
            SgtApi.PlayerService.update(player, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('uploadSave', function() {
        it('should upload Save', function(done) {
            SgtApi.PlayerService.uploadSave(null, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('deletePlayerByPlayerId', function() {
        it('should delete player', function(done) {
            SgtApi.PlayerService.deletePlayerByPlayerId(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                    SgtApi.PlayerService.getPlayerById('8a20a23072544', function(result, data) {
                        player = data;
                    });
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

// 测试PlayerExtraService
describe('PlayerExtraService', function() {

    describe('addPlayerExtra', function() {
        it('should add player extra', function(done) {
            SgtApi.PlayerExtraService.addPlayerExtra({}, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('findAll', function() {
        it('should find add', function(done) {
            SgtApi.PlayerExtraService.findAll(1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('findAllByCondition', function() {
        it('should find all by condition', function(done) {
            SgtApi.PlayerExtraService.findAllByCondition({}, 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getPlayerExtraById', function() {
        it('should get player extra by id', function(done) {
            SgtApi.PlayerExtraService.getPlayerExtraById(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getPlayerExtraList', function() {
        it('should get player extra list', function(done) {
            SgtApi.PlayerExtraService.getPlayerExtraList({}, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updatePlayerExtraMap', function() {
        it('should update player extra map', function(done) {
            SgtApi.PlayerExtraService.updatePlayerExtraMap({}, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updatePlayerExtra', function() {
        it('should update player extra', function(done) {
            SgtApi.PlayerExtraService.updatePlayerExtra(player.id, player, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('deletePlayerExtraById', function() {
        it('should delete player extra by id', function(done) {
            SgtApi.PlayerExtraService.deletePlayerExtraById(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('complete', function() {
        it('should complete', function(done) {
            SgtApi.AchievementService.complete(player.id, achievementId, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('excuteAchievementsByType', function() {
        it('should excute achievements by type', function(done) {
            SgtApi.AchievementService.excuteAchievementsByType('123456789', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('customAchievementsByType', function() {
        it('should custom achievement by type', function(done) {
            SgtApi.AchievementService.customAchievementsByType('123456789', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAchievementById', function() {
        it('should get achievement by id', function(done) {
            SgtApi.AchievementService.getAchievementById(achievementId, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAchievementsByType', function() {
        it('should get achievements by type', function(done) {
            SgtApi.AchievementService.getAchievementsByType(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAllAchievements', function() {
        it('should all achievements', function(done) {
            SgtApi.AchievementService.getAllAchievements(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAvailableAchievements', function() {
        it('should get available achievements', function(done) {
            SgtApi.AchievementService.getAvailableAchievements(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCompleteAchievements', function() {
        it('should get complete achievements', function(done) {
            SgtApi.AchievementService.getCompleteAchievements(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getDoneAchievements', function() {
        it('should get done achievements', function(done) {
            SgtApi.AchievementService.getDoneAchievements(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('setAchievementProgress', function() {
        it('should set achievement progress', function(done) {
            SgtApi.AchievementService.setAchievementProgress(player.id, achievementId, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('setAchievementsProgressByType', function() {
        it('should set achievements progress by type', function(done) {
            SgtApi.AchievementService.setAchievementsProgressByType('', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getByTimeZone', function() {
        it('should get by time zone', function(done) {
            SgtApi.CampaignService.getByTimeZone(100, 100, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCampaignById', function() {
        it('should get campaign by id', function(done) {
            SgtApi.CampaignService.getCampaignById('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCampaignDetailByCampaignId', function() {
        it('should get campaign detail by campaign id', function(done) {
            SgtApi.CampaignService.getCampaignDetailByCampaignId('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCampaignDetailByCampaignDetailId', function() {
        it('should get campaign detail by campaign detail id', function(done) {
            SgtApi.CampaignService.getCampaignDetailByCampaignDetailId('123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCampaignProgress', function() {
        it('should get campaign progress', function(done) {
            SgtApi.CampaignService.getCampaignProgress('123', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updateProgress', function() {
        it('should update progress', function(done) {
            SgtApi.CampaignService.updateProgress('2', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('accumulateCount', function() {
        it('should accumulate count', function(done) {
            SgtApi.CheckinBoardService.accumulateCount(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('continuousCount', function() {
        it('should continuous count', function(done) {
            SgtApi.CheckinBoardService.continuousCount(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCheckinBoardByCheckinBoardId', function() {
        it('should get checkin board by checkin board id', function(done) {
            SgtApi.CheckinBoardService.getCheckinBoardByCheckinBoardId('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getRewardByCheckinBoardId', function() {
        it('should get reward by checkin board id', function(done) {
            SgtApi.CheckinBoardService.getRewardByCheckinBoardId('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('setCheckinTimes', function() {
        it('should set checkin times', function(done) {
            SgtApi.CheckinBoardService.setCheckinTimes(player.id, 'begintoday', 2, function(result, data) {
                if (result) {
                    assert.ok(true, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAvailableCheckinBoards', function() {
        it('should get available chekcin boards', function(done) {
            SgtApi.CheckinBoardService.getAvailableCheckinBoards(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAvailableCheckinBoardsByTag', function() {
        it('should get available chekcin boards by tag', function(done) {
            SgtApi.CheckinBoardService.getAvailableCheckinBoardsByTag('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAvailableCheckinBoardsByType', function() {
        it('should get available chekcin boards by type', function(done) {
            SgtApi.CheckinBoardService.getAvailableCheckinBoardsByType('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('executeTasksByType', function() {
        it('should execute task by type', function(done) {
            SgtApi.DailyTaskService.executeTasksByType('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('addExecuteTasksByType', function() {
        it('should add execute tasks by type', function(done) {
            SgtApi.DailyTaskService.addExecuteTasksByType('', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getDailyTasks', function() {
        it('should get daily tasks', function(done) {
            SgtApi.DailyTaskService.getDailyTasks(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getDailyTasksByType', function() {
        it('should get daily tasks by type', function(done) {
            SgtApi.DailyTaskService.getDailyTasksByType(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getReward', function() {
        it('should get reward', function(done) {
            SgtApi.DailyTaskService.getReward('123', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    if (data.match('您已经领取了任务奖励，不要这么贪得无厌哦！')) {
                        assert.ok(true, data);
                    } else {
                        assert.ok(false, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('setTasksProgressByType', function() {
        it('should set task progress by type', function(done) {
            SgtApi.DailyTaskService.setTasksProgressByType('', player.id, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试TaskService
describe('TaskService', function() {

    describe('addActionCount', function() {
        it('should add action count', function(done) {
            SgtApi.TaskService.addActionCount(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('addActionCountTime', function() {
        it('should add action count time', function(done) {
            SgtApi.TaskService.addActionCountTime(player.id, '', 100, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('complete', function() {
        it('should complete', function(done) {
            SgtApi.TaskService.complete(player.id, '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAchievementById', function() {
        it('should get achievement by id', function(done) {
            SgtApi.TaskService.getAchievementById('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAchievements', function() {
        it('should get achievements', function(done) {
            SgtApi.TaskService.getAchievements(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAchievementsByType', function() {
        it('should get achievements by type', function(done) {
            SgtApi.TaskService.getAchievementsByType('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getActionCount', function() {
        it('should get action count', function(done) {
            SgtApi.TaskService.getActionCount(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAllAchievements', function() {
        it('should get all achievements', function(done) {
            SgtApi.TaskService.getAllAchievements(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAllDailyTasks', function() {
        it('should get all daily tasks', function(done) {
            SgtApi.TaskService.getAllDailyTasks(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAllTasks', function() {
        it('should get all tasks', function(done) {
            SgtApi.TaskService.getAllTasks('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCompleteAchievements', function() {
        it('should get complete achievements', function(done) {
            SgtApi.TaskService.getCompleteAchievements(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCompleteDailyTasks', function() {
        it('should get complete daily tasks', function(done) {
            SgtApi.TaskService.getCompleteDailyTasks(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCompleteTasks', function() {
        it('should get complete tasks', function(done) {
            SgtApi.TaskService.getCompleteTasks('', player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getDailyTaskById', function() {
        it('should get daily task by id', function(done) {
            SgtApi.TaskService.getDailyTaskById('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getDailyTasks', function() {
        it('should get daily tasks', function(done) {
            SgtApi.TaskService.getDailyTasks(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getDailyTasksByType', function() {
        it('should get daily tasks by type', function(done) {
            SgtApi.TaskService.getDailyTasksByType('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getReward', function() {
        it('should get reward', function(done) {
            SgtApi.TaskService.getReward(player.id, '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getDailyTasks', function() {
        it('should get daily tasks', function(done) {
            SgtApi.TaskService.getDailyTasks(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试FriendshipService
describe('FriendshipService', function() {

    describe('acceptInvite', function() {
        it('should accept invite', function(done) {
            SgtApi.FriendshipService.acceptInvite('123', '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('acceptInviteByMail', function() {
        it('should accept invite by mail', function(done) {
            SgtApi.FriendshipService.acceptInviteByMail('123', '123', mail, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getDenied', function() {
        it('should get denied', function(done) {
            SgtApi.FriendshipService.getDenied(1, 1, '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getFrindsCount', function() {
        it('should get friends count', function(done) {
            SgtApi.FriendshipService.getFrindsCount(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getInvite', function() {
        it('should get invite', function(done) {
            SgtApi.FriendshipService.getInvite('123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getMyFriends', function() {
        it('should get my friends', function(done) {
            SgtApi.FriendshipService.getMyFriends(1, 1, player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getNotConfirm', function() {
        it('should get not confirm', function(done) {
            SgtApi.FriendshipService.getNotConfirm('123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('invite', function() {
        it('should invite', function(done) {
            SgtApi.FriendshipService.invite('123', '456', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('inviteByMails', function() {
        it('should invite by mails', function(done) {
            SgtApi.FriendshipService.inviteByMails('123', ['123'], [mail], function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('isMyfriend', function() {
        it('should is my friend', function(done) {
            SgtApi.FriendshipService.isMyfriend('123', '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('refuse', function() {
        it('should refuse', function(done) {
            SgtApi.FriendshipService.refuse('123', '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('unfriend', function() {
        it('should unfriend', function(done) {
            SgtApi.FriendshipService.unfriend(player.id, '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

// //测试FriendshipExtraService
describe('FriendshipExtraService', function() {

    describe('getAllMyFriendsAndExt', function() {
        it('should get all my friends and ext', function(done) {
            SgtApi.FriendshipExtraService.getAllMyFriendsAndExt(player.id, '', 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getMyFriendAndExt', function() {
        it('should get my friends and ext', function(done) {
            SgtApi.FriendshipExtraService.getMyFriendAndExt(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updateAllMyFriendExt', function() {
        it('should update all my friend ext', function(done) {
            SgtApi.FriendshipExtraService.updateAllMyFriendExt(player.id, '123', '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updateMyFriendAllExt', function() {
        it('should update my friend all ext', function(done) {
            SgtApi.FriendshipExtraService.updateMyFriendAllExt(player.id, '', {}, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updateMyFriendExt', function() {
        it('should update my friend ext', function(done) {
            SgtApi.FriendshipExtraService.updateMyFriendExt(player.id, '', '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
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
            SgtApi.BlacklistService.addPlayerIntoBlacklist('123', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('isInBlacklist', function() {
        it('should is in black list', function(done) {
            SgtApi.BlacklistService.isInBlacklist('123', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('autoBalanceDrawQuality', function() {
        it('should auto balance draw quality', function(done) {
            SgtApi.GachaBoxService.autoBalanceDrawQuality(player.id, '', 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('autoBalanceDrawMaxQuality', function() {
        it('should auto balance max draw', function(done) {
            SgtApi.GachaBoxService.autoBalanceDrawMaxQuality(player.id, '', 1, 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('draw', function() {
        it('should draw', function(done) {
            SgtApi.GachaBoxService.draw(player.id, '', 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAvailableGachaBox', function() {
        it('should get available gacha box', function(done) {
            SgtApi.GachaBoxService.getAvailableGachaBox(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getGachaBoxByName', function() {
        it('should get gacha box by name', function(done) {
            SgtApi.GachaBoxService.getGachaBoxByName('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getLotteriesByGachaBoxId', function() {
        it('should get lotteries by gacha box id', function(done) {
            SgtApi.GachaBoxService.getLotteriesByGachaBoxId('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('limitDraw', function() {
        it('should limit draw', function(done) {
            SgtApi.GachaBoxService.limitDraw(player.id, '', 2, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
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
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getLeaderBoardByLeaderId', function() {
        it('should get leader board by leader id', function(done) {
            SgtApi.LeaderBoardService.getLeaderBoardByLeaderId('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getLeaderBoardScoreByExample', function() {
        it('should get leader board score by example', function(done) {
            SgtApi.LeaderBoardService.getLeaderBoardScoreByExample('', player, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getLeaderBoardScoreByLeaderIdAndPlayerId', function() {
        it('should get leader board score by leader id and player id', function(done) {
            SgtApi.LeaderBoardService.getLeaderBoardScoreByLeaderIdAndPlayerId('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getLeaderBoardScoresByLeaderIdAndPlayerId', function() {
        it('should get leader board scores by leader id and player id', function(done) {
            SgtApi.LeaderBoardService.getLeaderBoardScoresByLeaderIdAndPlayerId('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getTopLeaderBoardScoreByLeaderId', function() {
        it('should get top leader board score by leader id', function(done) {
            SgtApi.LeaderBoardService.getTopLeaderBoardScoreByLeaderId('', 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('submitLeaderBoardScore', function() {
        it('should submit leader board score', function(done) {
            SgtApi.LeaderBoardService.submitLeaderBoardScore('', player.id, 100, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试MailService
describe('MailService', function() {
    describe('sendMail', function() {
        it('should send mail');
    });

    describe('receive', function() {
        it('should receive', function(done) {
            SgtApi.MailService.receive(1, 1, player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('receiveUnread', function() {
        it('should receive unread');
    });

    describe('readMail', function() {
        it('should read mail', function(done) {
            SgtApi.MailService.readMail('123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('readAndPickAttachment', function() {
        it('should read and pick attachment', function(done) {
            SgtApi.MailService.readAndPickAttachment('123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('deleteMail', function() {
        it('should delete mail', function(done) {
            SgtApi.MailService.deleteMail(['123'], function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getReadedAndUnreadedMails', function() {
        it('should get readed and unreaded mails', function(done) {
            SgtApi.MailService.getReadedAndUnreadedMails(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('pickAttachment', function() {
        it('should pich attachment', function(done) {
            SgtApi.MailService.pickAttachment('123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试NoticationService
describe('NotificationService', function() {

    describe('getLatestNotification', function() {
        it('should get latest notification', function(done) {
            SgtApi.NotificationService.getLatestNotification(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getLatestNotificationByTime', function() {
        it('should get latest notification by time', function(done) {
            SgtApi.NotificationService.getLatestNotificationByTime(player.id, 100, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试PurchaseService
describe('PurchaseService', function() {
    describe('getSupportedStores', function() {
        it('should get supported stores', function(done) {
            SgtApi.PurchaseService.getSupportedStores(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAvailableChargePoints', function() {
        it('should get available charge points', function(done) {
            SgtApi.PurchaseService.getAvailableChargePoints(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getPaymentResult', function() {
        it('should get payment result', function(done) {
            SgtApi.PurchaseService.getPaymentResult(player.id, {}, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getTotalChargeCost', function() {
        it('should get total charge cost', function(done) {
            SgtApi.PurchaseService.getTotalChargeCost(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('isFirstCharge', function() {
        it('should is first charge', function(done) {
            SgtApi.PurchaseService.isFirstCharge(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getChargeTimes', function() {
        it('should get charge times', function(done) {
            SgtApi.PurchaseService.getChargeTimes(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试StoreService
describe('StoreService', function() {
    describe('getDefaultStore', function() {
        it('should get default store', function(done) {
            SgtApi.StoreService.getDefaultStore(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getStore', function() {
        it('should ge store', function(done) {
            SgtApi.StoreService.getStore('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('purchase', function() {
        it('should purchase', function(done) {
            SgtApi.StoreService.purchase(player.id, '123', '123', 1, true, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('countStoreOrdersByPlayerId', function() {
        it('should count store orders by player id', function(done) {
            SgtApi.StoreService.countStoreOrdersByPlayerId(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('countItemOrdersByPlayerId', function() {
        it('should count item orders by player id', function(done) {
            SgtApi.StoreService.countItemOrdersByPlayerId(player.id, '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getOrderById', function() {
        it('should get oder by id', function(done) {
            SgtApi.StoreService.getOrderById('123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getLastPurchaseTimeMillis', function() {
        it('should get last purchase time mills', function(done) {
            SgtApi.StoreService.getLastPurchaseTimeMillis(player.id, '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updateOrderStatus', function() {
        it('should update order status', function(done) {
            SgtApi.StoreService.updateOrderStatus('', true, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试ChargePoint
describe('ChargePointService', function() {
    describe('getAllChargePoints', function() {
        it('should get all charge points', function(done) {
            SgtApi.ChargePointService.getAllChargePoints(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getAvailableChargePoints', function() {
        it('should get available charge points', function(done) {
            SgtApi.ChargePointService.getAvailableChargePoints(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试BossService
describe('BossService', function() {
    describe('getByBossIdstr', function() {
        it('should get by boss id str', function(done) {
            SgtApi.BossService.getByBossIdstr([''], function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getByBossIdint', function() {
        it('should get by boss id int', function(done) {
            SgtApi.BossService.getByBossIdint([0], function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getByBossId', function() {
        it('should get by boss id', function(done) {
            SgtApi.BossService.getByBossId('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('attack', function() {
        it('should attack', function(done) {
            SgtApi.BossService.attack('', 1, player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getCurrentHP', function() {
        it('should get current hp', function(done) {
            SgtApi.BossService.getCurrentHP('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getLastAttackPlayer', function() {
        it('should get last attack player', function(done) {
            SgtApi.BossService.getLastAttackPlayer('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试FileStorageService
describe('FileStorageService', function() {
    describe('getUrl', function() {
        it('should get url', function(done) {
            SgtApi.FileStorageService.getUrl('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('delete', function() {
        it('should delete', function(done) {
            SgtApi.FileStorageService.delete('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试GiftCodeService
describe('GiftCodeService', function() {
    describe('getGifts', function() {
        it('should get gifts', function(done) {
            SgtApi.GiftCodeService.getGifts(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('redeem', function() {
        it('should redeem', function(done) {
            SgtApi.GiftCodeService.redeem(player.id, '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getGiftByCode', function() {
        it('should get gifts by code', function(done) {
            SgtApi.GiftCodeService.getGiftByCode('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getRecord', function() {
        it('should get record', function(done) {
            SgtApi.GiftCodeService.getRecord(player.id, '', 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('redeemOverMail', function() {
        it('should redeem over mail', function(done) {
            SgtApi.GiftCodeService.redeemOverMail(player.id, '123', '123', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('redeemGiftByCodeOverMail', function() {
        it('should redeem gift by code over mail', function(done) {
            SgtApi.GiftCodeService.redeemGiftByCodeOverMail(player.id, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试PrivateChannelService
describe('PrivateChannelService', function() {
    describe('pushMessage', function() {
        it('should push message', function(done) {
            SgtApi.PrivateChannelService.pushMessage('', player.id, '', 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('pushMessages', function() {
        it('should push messages', function(done) {
            SgtApi.PrivateChannelService.pushMessages('', player.id, '', 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('popMessage', function() {
        it('should pop message', function(done) {
            SgtApi.PrivateChannelService.popMessage('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('popMessageBy', function() {
        it('should pop message by', function(done) {
            SgtApi.PrivateChannelService.popMessageBy('', player.id, true, 1, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('clearChannel', function() {
        it('should clear channel', function(done) {
            SgtApi.PrivateChannelService.clearChannel('', player.id, function(result, data) {
                if (result) {
                    assert.ok(true);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试PublicChannelService
describe('PublicChannelService', function() {
    describe('createChannel', function() {
        it('should create channel', function(done) {
            SgtApi.PublicChannelService.createChannel('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('pushMessage', function() {
        it('should push message', function(done) {
            SgtApi.PublicChannelService.pushMessage('', '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('popAllMessage', function() {
        it('should pop all message', function(done) {
            SgtApi.PublicChannelService.popAllMessage('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('popMessage', function() {
        it('should pop message', function(done) {
            SgtApi.PublicChannelService.popMessage('', 100, 100, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('popMessageOrnum', function() {
        it('should pop message or num', function(done) {
            SgtApi.PublicChannelService.popMessageOrnum(1, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('popMessageOrnumtim', function() {
        it('should pop message or num tim', function(done) {
            SgtApi.PublicChannelService.popMessageOrnumtim('', 100, 100, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('clearChannel', function() {
        it('should clear channel', function(done) {
            SgtApi.PublicChannelService.clearChannel('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('deleteMessage', function() {
        it('should delete message', function(done) {
            SgtApi.PublicChannelService.deleteMessage('', 123, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getMessageContent', function() {
        it('should get message content', function(done) {
            SgtApi.PublicChannelService.getMessageContent(123, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

describe('DelegateDidService', function() {
    describe('createDid', function() {
        it('should create did', function(done) {
            SgtApi.DelegateDidService.createDid(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('queryByDid', function() {
        it('should query by did', function(done) {
            SgtApi.DelegateDidService.queryByDid('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('queryByCondition', function() {
        it('should query by conditon', function(done) {
            SgtApi.DelegateDidService.queryByCondition(player.id, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

describe('StructuredDataService', function() {
    describe('getValue', function() {
        it('should get value', function(done) {
            SgtApi.StructuredDataService.getValue('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('saveOrUpdateValue', function() {
        it('should save or update value', function(done) {
            SgtApi.StructuredDataService.saveOrUpdateValue('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getListValue', function() {
        it('should get list value', function(done) {
            SgtApi.StructuredDataService.getListValue('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('addListValue', function() {
        it('should add list value', function(done) {
            SgtApi.StructuredDataService.addListValue('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updateListValue', function() {
        it('should update list value', function(done) {
            SgtApi.StructuredDataService.updateListValue('', '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getMapValue', function() {
        it('should get map value', function(done) {
            SgtApi.StructuredDataService.getMapValue('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getMapValueByHashKey', function() {
        it('should get map value by hash key', function(done) {
            SgtApi.StructuredDataService.getMapValueByHashKey('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('saveOrUpdateMap', function() {
        it('should save or update map', function(done) {
            SgtApi.StructuredDataService.saveOrUpdateMap('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('setOrUpdateHashValue', function() {
        it('should set or update hash value', function(done) {
            SgtApi.StructuredDataService.setOrUpdateHashValue('', '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getSetValue', function() {
        it('should get set value', function(done) {
            SgtApi.StructuredDataService.getSetValue('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('addSetValue', function() {
        it('should add set value', function(done) {
            SgtApi.StructuredDataService.addSetValue('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updateSetValue', function() {
        it('should update set value', function(done) {
            SgtApi.StructuredDataService.updateSetValue('', '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getZSetValue', function() {
        it('should get z set value', function(done) {
            SgtApi.StructuredDataService.getZSetValue('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('addZSetValue', function() {
        it('should add z set value', function(done) {
            SgtApi.StructuredDataService.addZSetValue('', '', 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('updateZSetValue', function() {
        it('should update z set value', function(done) {
            SgtApi.StructuredDataService.updateZSetValue('', '', 1, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getZSetRangByScore', function() {
        it('should get z set rang by score', function(done) {
            SgtApi.StructuredDataService.getZSetRangByScore('', 1, 1, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('getListByIndex', function() {
        it('should get list by index', function(done) {
            SgtApi.StructuredDataService.getListByIndex('', 1, 2, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('remove', function() {
        it('should remove', function(done) {
            SgtApi.StructuredDataService.remove('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('removeFromSet', function() {
        it('should remove from set ', function(done) {
            SgtApi.StructuredDataService.removeFromSet('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('removeFromHash', function() {
        it('should remove from hash', function(done) {
            SgtApi.StructuredDataService.removeFromHash('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('containtSet', function() {
        it('should containt set', function(done) {
            SgtApi.StructuredDataService.containtSet('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('containsHash', function() {
        it('should contains hash', function(done) {
            SgtApi.StructuredDataService.containsHash('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('containsKey', function() {
        it('should contains key', function(done) {
            SgtApi.StructuredDataService.containsKey('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试TichetService
describe('TicketService', function() {
    describe('getTicketsById', function() {
        it('should get tickets by id', function(done) {
            SgtApi.TicketService.getTicketsById(player.id, 1, 1, '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });

    describe('sendTicket', function() {
        it('should send ticket', function(done) {
            SgtApi.TicketService.sendTicket({}, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试ErrorReportService
describe('ErrorReportService', function() {
    describe('sendErrorReport', function() {
        it('should send error report', function(done) {
            SgtApi.ErrorReportService.sendErrorReport('', '', '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试InvitationCodeService
describe('InvitationCodeService', function() {
    describe('getInvitationCode', function() {
        it('should get invitation code', function(done) {
            SgtApi.InvitationCodeService.getInvitationCode(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
    describe('getInviteeReward', function() {
        it('should get invitee reward', function(done) {
            SgtApi.InvitationCodeService.getInviteeReward('', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
    describe('getInviterReward', function() {
        it('should get inviter reward', function(done) {
            SgtApi.InvitationCodeService.getInviterReward('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
    describe('redeemReward', function() {
        it('should redeem reward', function(done) {
            SgtApi.InvitationCodeService.redeemReward('', '', '', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
    describe('getInviteCount', function() {
        it('should get invite count', function(done) {
            SgtApi.InvitationCodeService.getInviteCount('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
    describe('redeemInviterReward', function() {
        it('should redeem inviter reward', function(done) {
            SgtApi.InvitationCodeService.redeemInviterReward('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
});

//测试PaymentCallbackService
describe('PaymentCallbackService', function() {
    describe('doCallback', function() {
        it('should do callback', function(done) {
            SgtApi.PaymentCallbackService.doCallback('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
});

//测试RouterService
describe('RouterService', function() {
    describe('getCurrentTimestamp', function() {
        it('should get current timestamp', function(done) {
            SgtApi.RouterService.getCurrentTimestamp(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
    describe('getRegisterServer', function() {
        it('should get register server', function(done) {
            SgtApi.RouterService.getRegisterServer('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
    describe('getServerList', function() {
        it('should get server list', function(done) {
            SgtApi.RouterService.getServerList('', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
    describe('route', function() {
        it('should route', function(done) {
            SgtApi.RouterService.route('', {}, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
            });
            done();
        });
    });
});

//测试WxCentralService
describe('WxCentralService', function() {
    describe('getAccessToken', function() {
        it('should get access token', function(done) {
            SgtApi.WxCentralService.getAccessToken('html5_demo2015', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
    describe('getJSTicket', function() {
        it('should get js ticket', function(done) {
            SgtApi.WxCentralService.getJSTicket('html5_demo2015', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
    describe('getSignature', function() {
        it('should get signature');
    });
    describe('getPayOrder', function() {
        it('should get pay order', function(done) {
            var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect';


            SgtApi.WxCentralService.getPayOrder('html5_demo2015', {body:'',total_fee:100,trade_type:'JSAPI',serverId:'',openid:'o1iIptx19vzJsWaGjaPs63BvZsOk'}, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                    console.log(data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试UserLeaveInfo
describe('UserLeaveInfoService', function() {
    describe('saveLeaveInfo', function() {
        it('should save leave info', function(done) {
            var userLeaveInfo = new SgtApi.UserLeaveInfo();
            SgtApi.UserLeaveInfoService.saveLeaveInfo(userLeaveInfo, function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});

//测试RandomNameGroupService
describe('RandomNameGroupService', function() {
    describe('defaultRandomName', function() {
        it('should default random name', function(done) {
            SgtApi.RandomNameGroupService.defaultRandomName(function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
    describe('randomNameByGroupName', function() {
        it('should ramdom name by group name', function(done) {
            SgtApi.RandomNameGroupService.randomNameByGroupName('psy', function(result, data) {
                if (result) {
                    assert.ok(true, data);
                } else {
                    assert.ok(false, data);
                }
                done();
            });
        });
    });
});
