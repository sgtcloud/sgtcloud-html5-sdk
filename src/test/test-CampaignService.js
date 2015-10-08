console.log('----------------------CampaignService----------------------------');

module('test-CampaignService');

test('test CampaignService getAvailableCampaigns', function () {
    SgtApi.CampaignService.getAvailableCampaigns(function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});


test('test CampaignService getByTimeZone', function () {
    SgtApi.CampaignService.getByTimeZone(0, 0, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});


test('test CampaignService getCampaignById', function () {
    SgtApi.CampaignService.getCampaignById(2, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});


test('test CampaignService getCampaignDetaiByCId', function () {
    SgtApi.CampaignService.getCampaignDetaiByCId(2, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});


test('test CampaignService getCampaignDetaiById', function () {
    SgtApi.CampaignService.getCampaignDetaiById(2, function (result, data) {
        if (result) {
            deepEqual('object', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});


test('test CampaignService getCampaignProgress', function () {
    SgtApi.CampaignService.getCampaignProgress(2, playerId, function (result, data) {
        if (result) {
            deepEqual('number', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});

test('test CampaignService updateProgress', function () {
    SgtApi.CampaignService.updateProgress(2, playerId, 1, function (result, data) {
        if (result) {
            deepEqual('number', typeof data, data);
        } else {
            ok(false, data);
        }
    });
});
