
var qunit=require('qunit');

qunit.run({
	code:'sgtcloud-html5-sdk.2.0.0.js',
	tests:['test-entityfactory.js','test-AccountService.js']
},function(){
	console.log('Testing is Over');
})