console.log('----------------------AnnouncementService----------------------------');

module('test-AnnouncementService');

test('test AnnouncementService getAnnounceByType', function () {
    SgtApi.AnnouncementService.getAnnounceByType(0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    })
});