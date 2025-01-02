
var rule = {
    title:'山东齐鲁',
    host:'https://v.iqilu.com',
    homeUrl:'',
    searchUrl:'',
    searchable:0,
    quickSearch:1,
    filterable:0,
    //multi:1,
    // 分类链接fypage参数支持1个()表达式
    url:'/fyclass/',
    headers:{'User-Agent': 'PC_UA','referer': 'https://v.iqilu.com'},
    timeout:5000,
    class_name:'山东频道',
    class_url:'shandong',
    pagecount:{"shandong":1},
    limit:5,
    play_parse:true,
    //play_json:1,
    // 手动调用解析请求json的url,此lazy不方便     //'https://www.ifuyin.net/html/'
    lazy: `js:
			input = {
				jx: 1,
				url: input,
				//playUrl: input,
				parse: 0,
				header: JSON.stringify({
					'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
					'referer': 'https://v.iqilu.com'
				}),
			}
			`,
    推荐:'',
    double: true, // 推荐内容是否双层定位
    一级:`js:
			print(input)
			let d = [];
			let pdfh = jsp.pdfh;
			let pdfa = jsp.pdfa;
			let pd = jsp.pd;

			let html = request('https://v.iqilu.com/'); 
			//print(html)
			let items = pdfa(html, 'body&&ul.wrapper&&li');

			print(items)
			let pic_url;
			for(let i=0;i<items.length;i++){
				if(i%10==0){ continue; }
				let title;let pic_url;let url;
				title = pd(items[i], 'a&&title');
				//pic_url =  pd(items[i], 'img&&src')
				url = pd(items[i], 'a&&href')
				print(title)
           d.push({
               title: title,
               desc: '', 
               pic_url: '',
               url: url
           })
        };
        print(d);
        setResult(d);
    `,
    二级: '*',
    搜索:'',
    
}
