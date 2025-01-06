

var rule = {
            title: '北京海淀堂',
            host: 'https://m.hdchurch.org',
				  //HOST="https://jgtq.000104gg.xyz"
            timeout:15000,
            url: '/fyclass',
            searchUrl: '/search/**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: { 'User-Agent': 'PC_UA',},//网站的请求头,完整支持所有的,常带ua和cookies
            class_url:'zhengdao&hymm&daily&basic',
    			 class_name:'主日证道&主日献诗&每日聆听&线上慕道班基本要道',
            cate_exclude: '',
            pagecount:{"zhengdao":1,"hymm":1,"daily":1, "basic":1},
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐:'',
            double: true, // 推荐内容是否双层定位
            一级:`js:
						let d  = [];
						let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						if(/zhengdao/.test(input)){
								input = 'https://m.hdchurch.org/preach/index/ct/2744719925';
						}else if(/hymm/.test(input)){
								input = 'https://m.hdchurch.org/preach/hymm';
						}else if(/daily/.test(input)){
								input = 'https://m.hdchurch.org/daily';
						}
						let html = request(input);
						if(/zhengdao|hymm/.test(MY_CATE)){
							let items =  pdfa(html,'body&&.weui-panel__bd&&a');
							items.forEach(function(it){
								d.push({
									title: pdfh(it,'h4&&Text'),
									desc:  pdfh(it,'ul&&Text'),   
									pic_url: pd(it,'img&&src'), 
									url: pd(it,'a&&href')
								})							
							})
						}else if(/daily/.test(MY_CATE)){
								var list = html.match(/list = ([^;]*);/)[1];
								let items =  JSON.parse(list);
								items.forEach(function(it){
								d.push({
									title: it["title"],
									desc:  it["date"] +  it["singer"], 
									pic_url: "https://1304370199.vod2.myqcloud.com/e8895a7fvodbj1304370199/bfd6ca278602268011538227867/jgyb4fcA3nwA.jpg",
									url: it["songUrl"]
								})							
							})
								
						}else if(/basic/.test(MY_CATE)){
								let img_host = "https://1304370199.vod2.myqcloud.com/";
								let img_infos = [["第1单元", "e8895a7fvodbj1304370199/80b5aac18602268011537804843/DKBOKCcSs4UA.jpg"],["第2单元", "e8895a7fvodbj1304370199/ac836efe8602268011548284152/aafneui7XAEA.jpg"],
												 ["第3单元", "e8895a7fvodbj1304370199/07df5ab08602268011556648896/gDjGxBNdqKwA.jpg"],["第4单元", "e8895a7fvodbj1304370199/07df5ab08602268011556648896/gDjGxBNdqKwA.jpg"],
												 ["第5单元", "bf05aca7vodcq1304370199/70b083f5387702291934942172/ARUhWN178NcA.jpg"],["第6单元", "e8895a7fvodbj1304370199/c0df1139387702291942872571/WrpubpVT6GYA.jpg"],
												 ["第7单元", "bf05aca7vodcq1304370199/10c1edb7387702291991813372/gCtwJgiayC8A.jpg"],["第8单元", "bf05aca7vodcq1304370199/a1e1a1c0387702291993485914/tdxUEA61AQsA.jpg"]];
								for(let i = 0; i < img_infos.length; i++) {
  									let it = img_infos[i];
  									d.push({
  									  title: it[0],
  									  desc:  '', 
  									  pic_url: img_host + it[1],
  									  url: input + "_" + (i + 1 ).toString()
  									});
  								}
								
						}
	
						setResult(d)
						`,
            二级: `js:
        			 let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
        			 function De(t, e) {
        				return Math.floor(Math.random() * (e - t + 1) + t);
        			 }
						function xe() {
        				var t = "", e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        				for (var i = 0; i < 32; i++) {
        					t += e[De(0, 15)]
        				}
        				return t;
        			 }
						VOD = {
							vod_id: '',
							vod_name: '',
							vod_pic: '',
							type_name: '',
							vod_year: '',
							vod_area: '大陆',
							vod_remarks: '',
							vod_actor: '',
							vod_director: '北京海淀堂',
							vod_content: ''
						};
						//print(VOD)
						print(play_url)
						VOD.vod_play_from = '北京海淀堂$$$';
						if(/basic/.test(input)){
							let playUrl = [];
							let info = input.split('_');
							let start = (parseInt(info[1]) - 1) * 4;
							let html = request(info[0]);
							let items =  pdfa(html,'body&&.weui-panel__bd&&a');
							items = items.slice(start, start+4); 
							print(items)
							for(let i = 0; i < 4; i++) {
  									let it = items[i];
  									let name = "第" + (i + 1).toString() +  "天-" + pdfh(it,'h4&&Text');
  									let url = pd(it,'a&&href');
									playUrl.push(name + "$" + url);
  							}
							VOD.vod_play_url = playUrl.join("#")
						}else{ 
							VOD.vod_play_url = '阿们' + '$' + input;
						}
						
						`,
            搜索:'*'
        }
