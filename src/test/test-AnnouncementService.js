console.log('----------------------AnnouncementService----------------------------');

module('test-AnnouncementService');

var userId = '';
SgtApi.UserService.login('llo014', 'qqqqqqqq', function (result, data) {
    if (result) {
        userId = data.userId;
    }
});

var playerId = '';

SgtApi.PlayerService.getOneByUserId(userId, function (result, data) {
    if (result) {
        playerId = data.id;
    }
});


if (SgtApi.AnnouncementService.init()) {
}

test('test AnnouncementService getAnnounceByType', function () {
    SgtApi.AnnouncementService.getAnnounceByType(0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    })
});