var rule = {
    title:'福音影视',
    host:'https://www.ifuyin.net',
    homeUrl:'',
    searchUrl:'movies/search/**/1',
    searchable:2,
    quickSearch:0,
    filterable:1,
    multi:1,
    // 分类链接fypage参数支持1个()表达式
    url:'/content/fyclass/page/fypage/index.html',//fyfilter
    //filter_url:'{{fl.style}page/fypage',
    headers:{'User-Agent':'PC_UA'},
    timeout:5000,
    class_name:'热播排行&最新发布&最近更新&主日讲道&全部视频&福音慕道&福音证道&婚姻家庭&赞美诗歌&福音见证&福音视频&圣乐崇拜&初信造就&福音动漫&神学课程',
    class_url:'hot&publish&latest&category/id/205&all&category/id/133&category/id/22&category/id/34&category/id/24&category/id/42&category/id/21&category/id/26&category/id/25&category/id/23&category/id/290',//
	
    //filter:{},
    limit:20,
    play_parse:false,
    //play_json:1,
    // 手动调用解析请求json的url,此lazy不方便
    lazy:'',
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
        
        setResult(d)
    `,
    二级: `js:
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
			VOD = {
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
				let url = 'https://www.ifuyin.net/html/' + it["movid"] + '/' + it["urlid"] + '.html'
           playFrom.push(it["title"]);
				playList.push(url);
        });
			//print(items)
			print(playFrom)
			print(playList)
			VOD.vod_play_from = playFrom.join('$$$');
			VOD.vod_play_url = playList.join('$$$');
        
    `,
    搜索:''

}
