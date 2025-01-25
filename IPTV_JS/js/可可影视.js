

var rule = {
            title: '可可影视',
            host: 'https://www.kkys02.com',
            timeout:5000,
            url: '/show/fyclass-----3-fypage.html',
            searchUrl: '/search?k=**&page=fypage',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {'User-Agent': "PC_UA"},
            class_url: '1&2&3&4&6',
    			 class_name: '电影&连续剧&动漫&综艺纪录&短剧',
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
						print(input)
						let html = request(input);
						let items = pdfa(html, 'body&&.module-box-inner&&.module-item');
						print(items)
						for(let i = 0; i < items.length; i++){
            			d.push({
                			title: pd(items[i], 'img&&title'),
                			desc: pdfh(items[i], '.v-item-bottom&&Text'),
                			pic_url: 'https://vres.ozuab.cn' +  pd(items[i], 'img&&data-original').split("com")[1],
                			url: pd(items[i], 'a&&href')
            			})
        			};
        			setResult(d)
					  `,
            二级: {
						"title":".detail-title&&strong:eq(1)&&Text",
						"img": "",
						"desc":";;.detail-info-row-main:eq(2)&&Text;.detail-info-row-main:eq(1)&&Text;.detail-info-row-main:eq(0)&&Text;",
						"content": ".detail-desc&&Text",
						"tabs":'body&&.source-item-label',
						"lists": "body&&.episode-list:eq(#id) a"
						},

            搜索: `js:
						var d = [];   
        			 let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						let html = request(input);
						let items = pdfa(html, 'body&&.search-result-list&&a');
						print(items)
						for(let i = 0; i < items.length; i++){
            			d.push({
                			title: pdfh(items[i], '.title:eq(1)&&Text'),
                			desc: pdfh(items[i], '.tags&&Text'),
                			pic_url: 'https://vres.ozuab.cn' +  pd(items[i], 'img:eq(1)&&data-original').split("com")[1],
                			url: pd(items[i], 'a&&href')
            			})
        			};
        			setResult(d)
					  `
        }
