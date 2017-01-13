// pages/image/image.js
Page({
    data: {
        list: []
    },
    onLoad: function () {
        this.requestData();
    },

    /**
     * 请求数据
     */
    requestData: function () {
        var that = this;

        wx.request({
            url: 'http://route.showapi.com/197-1',
            // method: 'GET',
            data: {
                showapi_sign: '55fa6a86506147d0b308af1e351911e9',
                showapi_appid:'30720',
                num:20
            },
            header: {
                'content-type': 'application/json',
            },
            success: function (res) {
                console.log(res)
                that.setData({
                    // 拼接数组
                    list: res.data.showapi_res_body.newslist,
                })

            }
        })
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
})