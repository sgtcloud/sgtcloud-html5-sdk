console.log('----------------------GachaBoxService----------------------------');

module('test-GachaBoxService');

test('test GachaBoxService autobalanceDraw', function() {
	SgtApi.GachaBoxService.autobalanceDraw(playerId, 0, 0, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			console.log(111111);
			console.log(typeof data);
			ok(false, data);
		}
	});
});

test('test GachaBoxService autobalanceDrawQuality', function() {
	SgtApi.GachaBoxService.autobalanceDrawQuality(playerId, 0, 0, 0, function(result, data){
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test GachaBoxService autobalanceDrawMaxQuality', function() {
	SgtApi.GachaBoxService.autobalanceDrawMaxQuality(playerId, 0, 0, 0, 0, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test("test GachaBoxService draw", function() {
	SgtApi.GachaBoxService.draw(playerId, 0, 0, function(result,data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test GachaBoxService getAvailableGachaBox', function() {
	SgtApi.GachaBoxService.getAvailableGachaBox(function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test GachaBoxService getGachaBoxByName', function() {
	SgtApi.GachaBoxService.getGachaBoxByName('', function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test GachaBoxService getLotteriesByGachaBoxId', function() {
	SgtApi.GachaBoxService.getLotteriesByGachaBoxId('', function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		}else {
			ok(false, data);
		}
	});
});

test('test GachaBoxService limitDraw', function() {
	SgtApi.GachaBoxService.limitDraw(playerId, 0, 0, function(result, data) {
		if(result) {
			deepEqual('object', typeof data, data);
		} else {
			ok(false, data);
		}
	});
});