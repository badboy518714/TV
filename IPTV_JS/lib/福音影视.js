var rule = {
    title:'福音影视',
    host:'https://www.ifuyin.net',
    homeUrl:'',
    searchUrl:'movies/search/**/1',
    searchable:1,
    quickSearch:0,
    //filterable:1,
    multi:1,
    // 分类链接fypage参数支持1个()表达式
    url:'/content/fyclass/page/fypage/index.html',//fyfilter
    //filter_url:'{{fl.style}page/fypage',
    headers:{'User-Agent': 'MOBILE_UA'},
    timeout:5000,
    class_name:'热播排行&最新发布&最近更新&主日讲道&全部视频&福音慕道&福音证道&婚姻家庭&赞美诗歌&福音见证&福音视频&圣乐崇拜&初信造就&福音动漫&神学课程',
    class_url:'hot&publish&latest&category/id/205&all&category/id/133&category/id/22&category/id/34&category/id/24&category/id/42&category/id/21&category/id/26&category/id/25&category/id/23&category/id/290',//
	
    //filter:{},
    limit:20,
    play_parse:true,
    //play_json:1, 
    // 手动调用解析请求json的url,此lazy不方便     //https://www.ifuyin.net/api/api/tv.movie/url?movid=3854&urlid=65974&type=1&lang=zh  https://www.ifuyin.net/html/2403/35810.html
    lazy:`js:
			//let data = input.match(/html\\/(\\d+)\\/(\\d+)/);
			//input = 'https://www.ifuyin.net/api/api/tv.movie/url?movid=' + data[1] + '&urlid=' + data[2] + '&type=1&lang=zh';
		  	//let json_data = JSON.parse(request(input));
			//let m3u8_url = json_data["data"]["url"]
			input = {
				jx: 0,
				url: 'https://app-vod-hls.yisa.live/09new2025/06%E7%A6%8F%E9%9F%B3%E8%AF%81%E9%81%93/%E7%89%A7%E5%B8%88%E8%AE%B2%E9%81%93/l%E5%88%98%E5%BF%97%E9%9B%84/MP4/%E4%B8%BB%E6%97%A5%E4%BF%A1%E6%81%AF/2024/2024-09-08%E4%B9%83%E7%BC%A6%E7%9A%84%E6%95%85%E4%BA%8B%E4%BA%8C.mp4/index.m3u8?sign=d57b0b2019be2ca1f88c6087954b6e5c&t=1727969746',
				parse: 0
			 }
		  `,
    // 推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级:`js:
        var d = [];
        pdfh = jsp.pdfh;
        pdfa = jsp.pdfa;
        pd = jsp.pd;
			let html;
			let items;
			let items_1; 
			if(/category/.test(input)){
				let page = input.match(/page\\/(\\d+)/)[1];
				page = (parseInt(page) - 1).toString();;
				input = input.replace(/page\\/(\\d+)/, "page/" + page);
				html = request(input);
				items = pdfa(html, ".albums&&a");
				items.forEach(function(it){
            d.push({
                title: pdfh(it, ".c-primary&&Text"),
                desc: pdfh(it, ".c-thirdary&&Text"),
                pic_url: pd(it, ".loader&&style"),
                url: pd(it, "a&&href"),
            })
        	});
			}else{
				var move_id = input.match(/content\\/(.*?)\\/page\\/\\d+\\/index/)[1];
				input = input.replace(/page\\/\\d+\\//, '').replace(/\\/all/, "").replace(/latest/, "update");	
				//print(input);
				html = request(input);
				var __ssr_init_state__  = (html.replace(/\\n/gi, "").replace(/ /gi, "")).match(/__ssr_init_state__=(.*?)<\\/script><\\/div>/)[1];
				json_data = JSON.parse(__ssr_init_state__);
				var movie_name = "movie-" + move_id;
				//print(json_data[movie_name]["albums"]);
				items = json_data[movie_name]["albums"];
				items.forEach(function(it){
            d.push({
                title: it["title"],
                desc: it["speaker"],
                pic_url: it["image"],
                url: "/content/view/movid/" + it["movid"] + "/index.html"
            })
        	});
			}
        print(d)
        setResult(d)
    `,
    二级: `js:
			var d = [];
			print("-----------123456789------------")
        pdfh = jsp.pdfh;
        pdfa = jsp.pdfa;
        pd = jsp.pd;
			let html;
			html = request(input);
			var __ssr_init_state__  = (html.replace(/\\n/gi, "").replace(/ /gi, "")).match(/__ssr_init_state__=(.*?)<\\/script><\\/div>/)[1];
			json_data = JSON.parse(__ssr_init_state__);
			//print(json_data)
			let info = json_data["movie-album"]["detail"];
			let items = json_data["movie-album"]["detail"]["url_list"];
			let vod = {
				vod_id: info["movid"],
				vod_name: info["title"], 
				vod_pic: info["image"],
				type_name:info["category_info"][0]["name"],
				vod_year: '',
				vod_area: info["area"],
				vod_remarks: info["source"],
				vod_actor: info["speaker"],
				vod_director: info["subtitle"],
				vod_content: info["content"]
			};
			//print(VOD)
			let playFrom = [];
			let playList = [];
			items.forEach(function(it){
		  		let url = 'https://www.ifuyin.net/html/' + it["movid"] + '/' + it["urlid"] + '.html';
           playFrom.push(it["title"] + "$" + url);
				playList.push(it["title"] + "$" + url);
				d.push({
                title: it["title"],
                desc: info["speaker"],
                url: url
            })
        });
			//print(items)
			//print(playFrom)
			//print(playList)
			let playUrl = playFrom.join("#");
			// + "$$$" + playList.join("#");
			vod['vod_play_from'] = "福音影视";
			vod['vod_play_url'] = playUrl;
			VOD = vod;
        //setResult(d)
    `,
    搜索:''

}
