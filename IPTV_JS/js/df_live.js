import { load, _ } from '../lib/cat.js';
// import { get_url, get_s } from './demo.js';
let key = '🐰山东';
let HOST = 'https://v.iqilu.com/';
let siteKey = '';
let siteType = 0;
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
// const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36";
let json_data;

async function request(reqUrl, referer, mth, data, hd) {
    const headers = {
        "User-Agent": IOS_UA,
        'Referer': HOST
    };
    // if (mth === 'post') headers["User-Agent"] = PC_UA; 
    const ss = 'r92+auLPIZZLbYQxhFq52A3bKeqbzL6b4aREFW4l7G0='
    let res = await req(reqUrl, {
        method: mth || "get",
        headers: headers,
        data: data,
        postType: mth === "post" ? "form" : "",
    });
    return res.content;
    // return res.text()
}
async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype
    
}

async function home(filter) {
    const classes = [{ type_id: "qilu", type_name: '齐鲁' },{ type_id: "jinan", type_name: '济南' },{ type_id: "3", type_name: '5' }];
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

async function get_info(tid){
    let vedio_1;
    let vedio_2;
    if (tid === "qilu"){
        const html = await request(HOST);
        const $ = load(html);
        const items = $("div.dianshi_tv > dl");
        vedio_1 = _.map(_.slice(items, 0, 9), (item) => {
            var img = $(item).find("img:first")[0];
            var a = $(item).find('a:first')[0];
            let b = a.attribs["title"];
            let name;
            if (b.includes("山东") !== -1) { name = b;  }
            else { name = "山东" + b; }
            return {
                vod_id: a.attribs.href.replace(/.*?\/live\/(.*)\//g, '$1'),
                vod_name: name,
                vod_pic: img.attribs["src"],
                vod_remarks: ''
            };
        });
        vedio_2 = _.map(_.slice(items, 9, items.length), (item) => {
            var img = $(item).find("img:first")[0];
            var a = $(item).find('a:first')[0];
            let b = a.attribs["title"];
            let name;
            if (b.includes("广播") !== -1) { name = b;  }
            else { name = b + "广播"; }
            return {
                vod_id: a.attribs.href.replace(/.*?\/radio_live\/(.*)\//g, '$1'),
                vod_name: name,
                vod_pic: img.attribs["src"],
                vod_remarks: ''
            };
        }); 
        return vedio_1.concat(vedio_2) 
    }
    else if (tid === ""jinan){
         return []
    }
    else {
         return []
    }
}


async function category(tid, pg, filter, extend) {  
    const url = 'https://badboy518714.github.io/TV/SD_JSON/山东齐鲁.json'
    const link = await request(url);
    json_data = JSON.parse(link);
    console.log(json_data)

    let videos = await get_info(tid)    
    return JSON.stringify({
        page: 1,
        pagecount: 1,
        limit: 20,
        total: 20,
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

    let playUrl = json_data[id]
    // let playUrl ='https://clivealone302.iqilu.com/291/cf348386147f4f5da17e4b3bc937bb63/playlist.m3u8?auth=06c0006852a7672f311c7535980a5194&timestamp=1727438974992'   
    const headers = {
        Referer: HOST,
        "User-Agent": IOS_UA
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







// let flag = ''
// let flags = ''
// play(flag, 'sdtv')
// category("")
