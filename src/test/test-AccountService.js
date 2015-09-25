
/*
//测试UserService注册器普通注册的功能
test('test UserService register',function(){


	//创建一个User实体
	var User=SgtApi.entityFactory('User');

	//设置的用户名与用户密码,没有这个两个字段会抛异常
	User.userName='llo011';
	User.password='123456';

	//开启注册器普通注册方法,需要传入一个实体User,和一个回调函数
	//回调函数中有两个参数,result指返回结果(true/false),data指返回数据
	SgtApi.UserService.register(User,function(result,data){
		if(result){
			
			deepEqual('object',typeof data,'测试注册成功后返回一个data对象');

		}else{
			deepEqual('用户名已经存在',data,'测试用户名已经存在');
		}
	});

	ok(true,'ok');
});
*/


/*
//测试发送手机验证码短信
test('test UserService sendMessage',function(){

	SgtApi.UserService.sendMessage('18523975118','wodog-app',function(result,data){
		if(result){

			deepEqual(true,data,'测试发送短信成功');
		}else{

			deepEqual(false,data,'测试发送短信失败');
		}
	});

	ok(true,'ok');
});
*/



//测试UserService注册器手机注册功能
test('test UserService register by phone',function(){

	//创建一个User实体
	var User=SgtApi.entityFactory('User');

	//设置的用户名与用户密码,没有这个两个字段会抛异常
	User.userName='18523975118';
	User.phoneNumber='18523975118';
	User.password='123456';
	User.registryType=1;

	SgtApi.UserService.register(User,'544190',function(result,data){
		if(result){
			console.log('成功'+data);
		}else{
			console.log('失败'+data);	
		}
	})

	//SgtApi.User
	ok(true,'ok');
});



/*
//测试UserService登录的功能
test('test UserService login',function(){

	//此处的llo008和123456分别对应上处的用户名和密码
	//此处的callback与上处作用相同
	SgtApi.UserService.login('llo011','123456',function(result,data){
		if(result){
			
			//以后SgtApi.context统称SgtApi上下文
			deepEqual('object',typeof SgtApi.context.userData,'测试登录后在SgtApi.context上下文中保存了用户数据userData');

			deepEqual(data,SgtApi.context.userData,'测试返回的data是与SgtApi上下文中的用户数据相同');
		}else{

			deepEqual(null,SgtApi.context.userData,'登录失败则SgtApi上下文中没有用户数据');
		}
	});

	ok(true,'ok');
})
*/