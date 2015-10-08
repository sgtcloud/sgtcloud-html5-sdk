console.log('----------------------FriendShipExtraService----------------------------');

module('test-FriendShipExtraService');

test('test FriendshipExtraService getAllMyFriendsAndExt', function() {
	SgtApi.FriendshipExtraService.getAllMyFriendsAndExt(playerId,'',0,0,function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test FriendshipExtraService getMyFriendAndExt', function() {
	SgtApi.FriendshipExtraService.getMyFriendAndExt(playerId, '', function(result,data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test FriendshipExtraService updateAllMyFriendExt', function() {
	SgtApi.FriendshipExtraService.updateAllMyFriendExt(playerId, '', '', function(result,data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test FriedshipExtraService updateMyFriendExt', function() {
	SgtApi.FriendShipExtraService.updateMyFriendExt(playerId, '', null, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test FriendshipExtraService updateMyFriendExt', function() {
	SgtApi.FriendshipExtraService.updateMyFriendExt(playerId, '', '', '', function(result,data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});