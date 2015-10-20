var assert = require('assert');
var jsonRPC = require('./lib/jsonrpc');
var SgtApi = require('./lib/sgtcloud-html5-sdk.2.0.2');


var user = null;
var player = null;
var achievementId = '123456789';

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
                    console.log(data.userid);
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


// //测试PlayerExtraService
// describe('PlayerExtraService', function() {

//     describe('addPlayer', function() {
//         it('should add player', function(done) {
//             SgtApi.PlayerExtraService.addPlayer(player, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('findAll', function() {
//         it('should find add', function(done) {
//             SgtApi.PlayerExtraService.findAll(1, 1, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('findAllByCondition', function() {
//         it('should find all by condition', function(done) {
//             SgtApi.PlayerExtraService.findAllByCondition({}, 1, 1, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getPlayerById', function() {
//         it('should get player by id', function(done) {
//             SgtApi.PlayerExtraService.getPlayerById(player.id, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('getPlayerList', function() {
//         it('should get player list', function(done) {
//             SgtApi.PlayerExtraService.getPlayerList({}, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('updatePlayerMap', function() {
//         it('should update player map', function(done) {
//             SgtApi.PlayerExtraService.updatePlayerMap(player, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('updatePlayer', function() {
//         it('should update player', function(done) {
//             SgtApi.PlayerExtraService.updatePlayer(player.id, player, function(result, data) {
//                 if (result) {
//                     assert.ok(true);
//                 } else {
//                     assert.ok(false);
//                 }
//                 done();
//             });
//         });
//     });

//     describe('deletePlayerById', function() {
//         it('should delete player by id', function(done) {
//             SgtApi.PlayerExtraService.deletePlayerById(player.id, function(result, data) {
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

// 测试AchievementService
describe('AchievementService', function() {

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
