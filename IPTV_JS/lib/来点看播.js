var rule = {
            title: '来点看播',
            host: 'https://lkvod.me',
            // homeUrl:'/',
            url: '/show/fyclass--------fypage---.html',
            searchUrl: '/nk/-------------.html?wd=**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
            class_name:'电影&剧集&综艺&动漫',
            class_url:'1&2&3&4',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            play_parse: true,
            lazy: `js:
        			var html = JSON.parse(request(input).match(/var player_.*?=(.*?)</)[1]);
        			var url = html.url;
        			if (html.encrypt == '1') {
            			url = unescape(url)
        			} else if (html.encrypt == '2') {
            			url = unescape(base64Decode(url))
        			}
						 else if (html.encrypt == '3') {
            			url =url.replace(/\\/g, '')
					  }

        			if (/\\.m3u8|\\.mp4/.test(url)) {
            			input = {
                			jx: 0,
                			url: url,
                			parse: 0
            			}
        			} else {
            			input
        			}
    			`,
            limit: 6,
            推荐: 'body&&.fadeInUp;.diy-center&&.public-list-box;a&&title;img&&data-src;.ft2&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: 'body&&.fadeInUp .diy-center&&.public-list-box;a&&title;img&&data-src;.ft2&&Text;a&&href',
            二级: {
                "title": "h3&&Text;.slide-info:eq(0)&&Text",
                "img": ".detail-pic&&img&&data-src",
                "desc": ".slide-info:eq(1)&&Text;.module-info-item:eq(2)&&Text,.module-info-item:eq(3)&&Text,.module-info-item:eq(4)&&Text",
                "content": ".cor3&&Text",
                "tabs": ".br&&.swiper-slide",
                "lists": ".anthology-list-play.size:eq(#id) a"
            },
            搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
        }
