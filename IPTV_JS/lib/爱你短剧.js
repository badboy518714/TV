var rule = {
    title: '爱你短剧',
    host: 'https://www.ainidj.com',
    url: '/vodshwo/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 1,//是否启用快速搜索,
    filterable: 0,//是否启用分类筛选,
    headers: { 'User-Agent': 'MOBILE_UA'},//网站的请求头,完整支持所有的,常带ua和cookies	
	 //编码:'gb2312',
	 //搜索编码:'gb2312',
    class_url:'fenle&fenlei2&fenlei3&fenlei4&guda&shenyi&gudai&xuanhuan&yanqing',
    class_name:'穿越&战神&重生&爱情&萌娃&神医&古代&玄幻&言情',
	//class_parse: '.wrap&&ul&&li;a&&Text;a&&href;/(.*?)',//'.l_top_5&&ul&&li;a&&Text;a&&href;.*/mlist/(.*?).html',//a&&href  a&&Text .wap-show0&&ul&&li0
    cate_exclude: '',
    play_parse: true,
    limit: 10,
    推荐: '.module;.module-items&&.module-item;a&&title;img&&data-src;.module-item-caption&&Text;a&&href',
    double: true, // 推荐内容是否双层定位   
    一级: '.module&&.module-items&&.module-item;a&&title;img&&data-src;.module-item-caption&&Text;a&&href',
    二级: {
         "title": "h1&&Text",
         "img": "",
         "desc": ".video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text;.video-info-items:eq(4)&&Text;.video-info-items:eq(5)&&Text;.video-info-items:eq(6)&&Text",
         "content": ".video-info-share&&data-clipboard-text",
         "tabs": ".module-tab-items&&.tab-item",
         "lists": ".module-blocklist&&.sort-item:eq(#id) a"
         },
    搜索:'.module&&.module-items&&.module-search-item;.video-info-header&&a&&title;img&&data-src;.video-info-aux&&Text;a&&href',
    lazy:'*'
}
