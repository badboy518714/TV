

var rule = {
            title: '全集影视',
            host: 'https://www.quanji2030.com',
            timeout:5000,
            url: '/vodtype/fyclass-fypage.html',
            searchUrl: '/vodsearch/**----------fypage---.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {'User-Agent': "PC_UA"},
            class_url: '1&2&3&4&34&37&35&36&6&7&8&9&10&11&12&20&13&14&15&16&23&24&25',
    			 class_name: '电影&连续剧&综艺&动漫&动画片&短剧&邵氏电影&动漫电影&动作片&喜剧片&爱情片&科幻片&恐怖片&剧情片&战争片&纪录片&国产剧&港剧&台剧&日剧&韩剧&泰剧&欧美剧',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            filter_url: '',
            filter: {},
            filter_def:{},
            play_parse: true,
            lazy: `js:
						let html = request(input);
						let player_aaaa = html.match(/player_aaaa=([^}]*})/)[1];
						player_aaaa = 
						print(122122222)
						print(player_aaaa)
						input = {
							jx: 0,
							url: "http://121.40.215.14:5000/?url=" + input,
							parse: 0
						}
						`,
            limit: 6,
            推荐:'',
            double: true, // 推荐内容是否双层定位
            一级:`js:
						var d = [];   
        			 let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						let html = request(input);
						let items = pdfa(html, '.myui-vodlist&&li');
						print(items)
						for(let i = 0; i < items.length; i++){
            			d.push({
                			title: pd(items[i], 'a&&title'),
                			desc: pdfh(items[i], '.pic-tag&&Text') + "  " + pdfh(items[i], '.pic-text&&Text'),
                			pic_url: pd(items[i], 'a&&data-original'),
                			url: pd(items[i], 'a&&href')
            			})
        			};
        			setResult(d)
					  `,
            二级: {
						"title":"h1&&Text",
						"img": "",
						"desc":".myui-content__detail&&p:eq(3)&&Text;.myui-content__detail&&p:eq(4)&&Text;.myui-content__detail&&p:eq(5)&&Text;.myui-content__detail&&p:eq(6)&&Text;",
						"content": ".myui-content__detail&&p:eq(5)&&Text",
						"tabs":'.nav-tabs&&.active&&li',
						"lists": ".tab-content&&.myui-panel_bd&&.clearfix:eq(#id)&&ul li"
						},

            搜索: `js:
						var d = [];   
        			 let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						let html = request(input,{
							headers:{
								"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0",
								"Cookie": " cf_clearance=zdDqv7.gYjoIUeErNiepZ.cANu.zE1lV1ipbbfGnTtg-1737835069-1.2.1.1-5gkQvyB1u7QNZmOO182RqIL_d3E4ZMXl2ceYGFUcLtQLcojTW_LhQQ43wwTD8v_lnDvwbhHFNdhJxPEnESjMcA5pepOg21kqtMVj_mpZ0RhyXEueSDpps0ayESaRjMyjMAZeOy66Wnnpri2AJ7OKEcnCLy3ZKv1zaToyvV1BJbb7NxY9wMJ_a7s3it_r.jXtZ0Bv5ZYTBq8ij4yQf.fy61UloGW6znOe9l0fYxGSsUJQHMbhB7xzHgMdTq2YtqoGhZuh35MW.uawGhlhb9_luWYq78.SekstHS5Eh8_ECowRoFbhr9JoUCXnyoqkLZANBakmPFRWiaGn18iCmAnOXQ"
							}
						});
						let items = pdfa(html, '.myui-vodlist__media&&.clearfix&&li');
						print(items)
						for(let i = 0; i < items.length; i++){
            			d.push({
                			title: pd(items[i], 'a&&title'),
                			desc: pdfh(items[i], '.tags&&Text'),
                			pic_url:pd(items[i], 'a&&data-original'),
                			url: pd(items[i], 'a&&href')
            			})
        			};
        			setResult(d)
					  `
        }
