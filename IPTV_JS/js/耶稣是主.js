

var rule = {
            title: '耶稣是主',
            host: 'https://hg1.repentchina.org/',
            timeout:5000,
            url: '/categories/fyclass/page/fypage',
            searchUrl: '/apis/api.halo.run/v1alpha1/indices/post?keyword=**&highlightPreTag=<mark>&highlightPostTag=</mark>',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: { 'User-Agent': 'PC_UA',},//网站的请求头,完整支持所有的,常带ua和cookies
            class_url:'主日讲道&新人学习&jing-dian-zhai-xuan&早间灵粮&诗歌',
    			 class_name:'主日讲道&新人学习&经典摘选&早间灵粮&诗歌',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            filter_url: '',
            filter: {},
            filter_def:{},
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐:'',
            double: true, // 推荐内容是否双层定位
            一级:`js:
						var d = [];
        			 let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						let html = request(input);
						//print(html);
						let items = pdfa(html, "body&&.list&&li");
						items.forEach(function(it){
            			d.push({
                			title: pdfh(it, "a:eq(1)&&Text").split(/-/)[1] ||  pdfh(it, "a:eq(1)&&Text"),
                			desc: pdfh(it, "time&&Text"),
                			pic_url: pd(it, "img&&data-lazy-src"),
                			url: pd(it, "a:eq(1)&&href"),
            			})
        			});
        			//print(d)
        			setResult(d)
					  `,
            二级:`js:
						let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						let html = request(input);
						let article = pdfa(html, ".card&&article")[0];
						VOD = {
							vod_id: '',
							vod_name: pdfh(article, "p:eq(0)&&Text"),
							vod_pic: '',
							type_name: '',
							vod_year: '',
							vod_area: '神的国',
							vod_remarks: '',
							vod_actor: '',
							vod_director: '耶稣是主',
							vod_content: pdfh(article, "p:eq(2)&&Text") || pdfh(article, "p:eq(0)&&Text")
						};
						VOD['vod_play_from'] = "耶稣是主";
						VOD['vod_play_url'] = VOD["vod_name"] + "$" + pd(article, "p:eq(1)&&src")
						print(123)
						`,

            搜索:`js:
						let d = []
						let items = JSON.parse(request(input))["hits"];
						items.forEach(function(it){
							 let title = it["title"].replace(/<mark>/g,'').replace(/<\\/mark>/g,'');
            			d.push({
                			title: title,
                			desc: title.split(/-/)[0]|| '',
                			pic_url: 'https://repentchina.org/uploads/705822-2108111159-jesus.jpg',
                			url: it["permalink"],
            			})
        			 });
						setResult(d)
						`,
        }
