/**
 * 
 */
sgt.init({
    appId: 'html5_demo2015'
});
sgt.WxCentralService.getSignature(function(result, data) {
    if (result) {
    	doWxApi(data);
    } else {
        console.log('getSignature has faild');
    }
});
function doWxApi(data) {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.result.wxAppId, // 必填，公众号的唯一标识,首次使用需要<a href="http://console.sgtcloud.cn/" target="_blank">在sgtcloud开发者平台</a>进行绑定
        timestamp: data.result.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.result.noncestr, // 必填，生成签名的随机串
        signature: data.result.signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
    });

    wx.ready(function() {
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        wx.onMenuShareAppMessage({
            title: 'sgtcloud-html5-sdk', // 分享标题
            desc: 'A html5 out-of-box sdk for damn cool mbaas.', // 分享描述
            link: 'https://github.com/sgtcloud/sgtcloud-html5-sdk', // 分享链接
            imgUrl: 'http://sgtcloud.cn/resource/cloud-icon.png', // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });

        wx.checkJsApi({
            jsApiList: ['onMenuShareAppMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function(res) {
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            }
        });

        wx.error(function(res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
    });
}