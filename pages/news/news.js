// pages/zhihu/zhihu.js
var detail = '../news_detail/news_detail'
Page({
    data: {
        list: [],

        imgUrls: [
            {
                // link:'/pages/index/index',
                url:'http://oims9p4rv.bkt.clouddn.com/wallpaper_5221902.jpg'
            },{
                // link:'/pages/logs/logs',
                url:'http://oims9p4rv.bkt.clouddn.com/helloword.jpg'
            },{
                // link:'/pages/image/image',
                url:'http://oims9p4rv.bkt.clouddn.com/githubhe.png'
            }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,

    },
    onLoad: function () {
        this.requestData();
    },

    onPullDownRefresh: function() {
        // Do something when pull down.
        console.log('刷新');
    },

    onReachBottom: function() {
        // Do something when page reach bottom.
        console.log('circle 下一页');
    },

    /**
     * 请求数据
     */
    requestData: function () {
        var that = this;

        wx.request({
            url: 'http://route.showapi.com/109-34',
            // method: 'GET',
            data: {
                showapi_sign: '55fa6a86506147d0b308af1e351911e9',
                showapi_appid: '30720',
            },
            header: {
                'content-type': 'application/json',
            },
            success: function (res) {
                console.log(res)
                that.setData({
                    // 拼接数组
                    list: res.data.showapi_res_body.channelList,
                })

            }
        })
    },

    toDetail: function (event) {
        console.log(event.currentTarget.dataset.channelid);
        var channelId = event.currentTarget.dataset.channelid;

        // 传参方式向GET请求
        wx.navigateTo({
            url: detail + '?' + 'channelId=' + channelId,
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