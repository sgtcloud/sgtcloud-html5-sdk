//测试实体类User
test('test entity User',function(){

   var User=SgtApi.entityFactory('User');

   ok(User,'测试SgtApi.entity.User实例存在');

   deepEqual(null,User.nickName,'测试SgtApi.entity.User属性nickName初始化是null');

   deepEqual(0,User.AUTO,'测试SgtApi.entity.User静态属性AUTO初始化是0');
   deepEqual(0,User.MANUAL,'测试SgtApi.entity.User静态属性MANUAL初始化是0');
   deepEqual(0,User.PHONENUMBER,'测试SgtApi.entity.User静态属性PHONENUMBER初始化是0');

   ok(true,'ok');
});

//测试实体类Player
test('test entity Player',function(){

	var Player = SgtApi.entityFactory('Player');

	ok(Player,'测试SgtApi.entity.Player实例存在');

	deepEqual(null,Player.customId,'测试SgtApi.entity.Player属性customId初始化是null');
	deepEqual(null,Player.equip,'测试SgtApi.entity.Player属性equip初始化是null');
	deepEqual(0,Player.id,'测试SgtApi.entity.Player属性id初始化是0');

   ok(true,'ok');
});