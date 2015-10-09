console.log('----------------------LeaderBoardService----------------------------');

module('test-LeaderBoardService');

test('test LeaderBoardService addUpLeaderBoardScore', function() {
	SgtApi.LeaderBoardService.addUpLeaderBoardScore('', playerId, 0, function(result, data) {
		if(result) {
			deepEqual('boolean', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoardService getLeaderBoardByLeaderId', function() {
	SgtApi.LeaderBoardService.getLeaderBoardByLeaderId('', function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoardService getLeaderBoardScoreByExample', function() {
	SgtApi.LeaderBoardService.getLeaderBoardScoreByExample('', null, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoardService getLeaderBoardScoreByLeaderIdAndPlayerId', function() {
	SgtApi.LeaderBoardService.getLeaderBoardScoreByLeaderIdAndPlayerId('', playerId, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoardService getLeaderBoardScoresByLeaderIdAndPlayerId', function() {
	SgtApi.LeaderBoardService.getLeaderBoardScoresByLeaderIdAndPlayerId('', playerId, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoardService getTopLeaderBoardScoreByLeaderId', function() {
	SgtApi.LeaderBoardService.getTopLeaderBoardScoreByLeaderId('', 0, 0, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoardService submitLeaderBoardScore', function() {
	SgtApi.LeaderBoardService.submitLeaderBoardScore('', playerId, 0, function(result, data) {
		if(result) {
			deepEqual('boolean', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});