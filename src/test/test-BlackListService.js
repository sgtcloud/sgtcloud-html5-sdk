console.log('----------------------BlackListService----------------------------');

module('test-BlackListService');

test('test BlackListService addPlayerIntoBlackList', function() {
	SgtApi.BlackListService.addPlayerIntoBlackList('', playerId, function(result, data) {
		if(result) {
			deepEqual('boolean', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test BlackListService isInBlackList', function() {
	SgtApi.BlackListService.isInBlackList('', playerId, function(result, data) {
		if(result) {
			deepEqual('boolean', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});