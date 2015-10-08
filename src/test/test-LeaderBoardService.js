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

test('test LeaderBoard getLeaderBoardByLeaderId', function() {
	SgtApi.LeaderBoard.getLeaderBoardByLeaderId('', function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoard getLeaderBoardScoreByExample', function() {
	SgtApi.LeaderBoard.getLeaderBoardScoreByExample('', null, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoard getLeaderBoardScoreByLeaderIdAndPlayerId', function() {
	SgtApi.LeaderBoard.getLeaderBoardScoreByLeaderIdAndPlayerId('', playerId, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoard getLeaderBoardScoresByLeaderIdAndPlayerId', function() {
	SgtApi.LeaderBoard.getLeaderBoardScoresByLeaderIdAndPlayerId('', playerId, function(reuslt, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoard getTopLeaderBoardScoreByLeaderId', function() {
	SgtApi.LeaderBoard.getTopLeaderBoardScoreByLeaderId('', 0, 0, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});

test('test LeaderBoard submitLeaderBoardScore', function() {
	SgtApi.LeaderBoard.submitLBoardScore('', playerId, 0, function(result, data) {
		if(reslt) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});