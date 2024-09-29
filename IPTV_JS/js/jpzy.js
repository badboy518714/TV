import { load, _ } from '../lib/cat.js';
// import { get_url, get_s } from './demo.js';
let key = '🐰山东';
let HOST = 'https://www.jingpinx.com/';
let siteKey = '';
let siteType = 0;
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36";


async function request(reqUrl, referer, mth, data, hd) {
    const headers = {
        "User-Agent": PC_UA,
        'Referer': referer
    };
    let res = await fetch(reqUrl, {
        method: mth || "get",
        headers: headers,
        data: data,
        postType: mth === "post" ? "form" : "",
    });
    // return res.content;
    return res.text()
}
async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype
    
}

async function home(filter) {
    // const classes =[ { type_id: "8", type_name:"偷拍自拍" }, { type_id: "9", type_name:"国产大制作" }, { type_id: "10", type_name:"乱伦毁三观" }, { type_id: "11", type_name:"嫖妓全过程" }, { type_id: "12", type_name:"淫乱学生妹" },
    //   { type_id: "13", type_name:"黑料不打烊" },  { type_id: "14", type_name:"监控摄像头" }, { type_id: "15", type_name:"主播网红" }, { type_id: "16", type_name:"高清无码" }, { type_id: "17", type_name:"中文字幕" },
    //   { type_id: "18", type_name:"东南亚" }, { type_id: "19", type_name:"成人综艺" }, { type_id: "20", type_name:"媚黑母狗" }, { type_id: "21", type_name:"为国争光" }, { type_id: "22", type_name:"人兽典藏" },
    //   { type_id: "23", type_name:"中文剧情" }, { type_id: "24", type_name:"燃烧荷尔蒙" }, { type_id: "25", type_name:"女同口交" }, { type_id: "26", type_name:"重口味" }, { type_id: "27", type_name:"3D动漫" },
    //   { type_id: "28", type_name:"剧情故事" }, { type_id: "29", type_name:"同人动漫" }, { type_id: "30", type_name:"激情中字" } ];
    const classes =[ { type_id: "8", type_name:"偷拍自拍" } ]
    const filterObj = {};
    return JSON.stringify({
        class: _.map(classes, (cls) => {
            cls.land = 1;
            cls.ratio = 1.78;
            return cls;
        }),
        filters: filterObj,
    })
}

async function homeVod() {
    return '{}'
}


async function category(tid, pg, filter, extend) {  
    if (pg <= 0 || typeof(pg) == 'undefined') pg = 1;
    let link = HOST + '/index.php/vod/type/id/' + tid + '/page/' + pg + '.html'
    let html = await request(link);
    // console.log(html)
    let $ = load(html);
    let items = $('ul.videoContent > li');
    // console.log(items.length) 
    let videos = [];
    for (let item of items) {
        let a = $(item).find('a:first')[0];
        let href = a.attribs.href;
        // console.log( HOST + href) 
        let html_ = await request( HOST + href, link );
        // console.log(html_)
        let $_ = load(html_);
        let img = $_('div.people > div.left > img');  // 筛选出 class 为 left 的 div
        videos.push({
            vod_id: href.replace(/.*?id\/(\d+).html/g, '$1'),
            vod_name: $(item).find('.videoName').text().trim(),
            vod_pic: HOST + img.attr('src') || '',
            vod_remarks: $(item).find('.time').text().trim() || ''
        });
    }
     
    console.log(videos)
    let text = $('.pages').text();
    let match = text.match(/(\d+)页/);
    let pgCount;
    if (match) { pgCount =  match[1]; }
    else { pgCount =  pg; }
    // console.log('pgCount--------------', pgCount)
    return JSON.stringify({
        page: parseInt(pg),
        pagecount: 1,
        limit: 20,
        total: 20 * pgCount,
        list: videos
    })
}

async function detail(id) {
    const vod = {
        vod_id: id,
        vod_remarks: '',
    };
    const playlist = ['点击播放' + '$' + id];
    vod.vod_play_from = "道长在线";
    vod.vod_play_url = playlist.join('#');
    return JSON.stringify({
        list: [vod],
    });
}

async function play(flag, id, flags) {
    let link = 'https://www.jingpinx.com/index.php/vod/detail/id/' + id + '.html'
    console.log(link)
    let html = await request(link);
    let $ = load(html);
    let item = $('div.wbox > ul > li > a.copy_text');
    let text = item.text().trim()
    console.log(text)
    let playUrl = text.match(/.*?$(.*.m3u8)/g)[1]
    console.log(playUrl)
    // let playUrl ='https://clivealone302.iqilu.com/291/cf348386147f4f5da17e4b3bc937bb63/playlist.m3u8?auth=06c0006852a7672f311c7535980a5194&timestamp=1727438974992'   
    const headers = {
        Referer: '',
        "User-Agent": PC_UA,
        "Connection": "keep-alive"
    };
    return JSON.stringify({
        parse: 0,
        url: playUrl,
        header: headers,
    });
}

async function search(wd, quick) {
    return '{}'
}

export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
    }
}







let flag = ''
// let flags = ''
play(flag, '38081')
// category("8", "2")
