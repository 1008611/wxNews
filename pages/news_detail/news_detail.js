// pages/zhihu/zhihu.js
var detail = '../news_details/news_details'
Page({
    data: {
        list: [],
        img_list: []
    },
    onLoad: function (options) {
        console.log("1,", options)

        this.requestData(options.channelId);
    },

    /**
     * 请求数据
     */
    requestData: function (e) {
        var that = this;

        wx.request({
            url: 'http://route.showapi.com/109-35',
            // method: 'GET',
            data: {
                showapi_sign: '55fa6a86506147d0b308af1e351911e9',
                showapi_appid: '30720',
                channelId: e

            },
            header: {
                'content-type': 'application/json',
            },
            success: function (res) {
                console.log('---',res.data.showapi_res_body.pagebean.contentlist);
                // if (res.data.showapi_res_body.pagebean.contentlist.imageurls.length > 3) {
                //     console.log(111111111);
                // }
                that.setData({
                    // 拼接数组
                    list: res.data.showapi_res_body.pagebean.contentlist
                })

            }
        })
    },

    toDetails: function (event) {

        var desc = event.currentTarget.dataset.desc;
        var link = event.currentTarget.dataset.link;

        // 传参方式向GET请求
        wx.navigateTo({
            url: detail + '?' + 'desc=' + desc + '&link=' + link,
            success: function (res) {
                console.log(res)
            },
            fail: function (err) {
                console.log(err)
            },
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