var rule = {
    title:'成人',
    host:'https://jgtq.gg51-lzmn391.vip',
    homeUrl:'',
    url:'/category/fyclass/fypage/',
    detailUrl:'/view/fyid',
    searchUrl:'/search/index?key=**',
    searchable:2,
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    class_url:'7&8&5&6&11&14&12&13&15&16&18&48&19&21&22&20',
    class_name:'大厂原创&重磅泄密&偷拍自拍&绿帽偷情&中文字幕&强奸迷奸&高清无码&熟女人妻&剧情大片&黑白配&美颜巨乳&欧美少妇&动漫3D&网红主播&AI换脸&女同男同',
    //class_name:'#page-viewport&&ul&&li;.text&&Text;a&&href;/(.*)',
    cate_exclude:'',
    推荐:'.videolist;.one;.title&&Text;img&&src;.duration&&Text;one&&href',
    double:true,
    limit:5,
    play_parse:true,
    lazy:'js:fetch_params.headers["user-agent"] = IOS_UA;let html=fetch(input,fetch_params);let src = jsp.pdfh(html,"body&&#videoWrap&&video-src");input=src;',
    // 一级:'json:data.items;name;image;collect_num;category_id+video_id',
    一级:'json:data.items;name;image;duration_string;video_id',
    二级:'*',
    搜索:'.list-con&&.items;.text&&Text;mip-img&&src;.time&&Text;a&&href',
}
