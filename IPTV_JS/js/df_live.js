import { load, _ } from '../lib/cat.js';
import { get_url, get_s } from './demo.js';
let key = '🐰山东';
let HOST = 'https://v.iqilu.com/';
let siteKey = '';
let siteType = 0;
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36";

async function request(reqUrl, referer, mth, data, hd) {
    const headers = {
        "User-Agent": IOS_UA,
        'Referer': HOST
    };
    if (mth) headers["User-Agent"] = PC_UA;
    let res = await req(reqUrl, {
        method: mth || "get",
        headers: headers,
        body: JSON.stringify(data),
        postType: mth === "post" ? "form" : "",
    });
    // console.log(headers)
    return res.content;
    // return res.text()
}

async function request_1(reqUrl, data) {
    const headers = {
        "User-Agent": PC_UA,
        'Referer': HOST
    };
    let res = await fetch(reqUrl, {
        method: "post",
        headers: headers,
        body: data,
        postType: "form"
    });
    // console.log(headers)
    // return res.content;
    return res.text()
}

async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype
    
}

async function home(filter) {
    const classes = [{ type_id: "", type_name: '看电视' },{ type_id: "radio", type_name: '听广播' },{ type_id: "3", type_name: '380' }];
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
    let videos;
    if (tid === '' || tid === 'radio'){
        const link = HOST + 'live/' + 'sdtv' + '/';
        const html1 = await request(link);
        let _pdCid = html1.match(/var _pdCid = "(\d+)"/)[1];
        let _data = get_s(_pdCid);
        let data = _data["data"];
        let url = "https://feiying.litenews.cn/api/v1/auth/exchange?t=" +  _data["t"] + "&s=" + _data["s"];
        const res = await request_1(url, data);



        
        const html = await request(HOST);
        const $ = load(html);
        const items = $("div.dianshi_tv > dl");
        if (tid === ''){
             videos = _.map(_.slice(items, 0, 9), (item) => {
                var img = $(item).find("img:first")[0];
                var a = $(item).find('a:first')[0];
                return {
                    vod_id: a.attribs.href.replace(/.*?\/live\/(.*)\//g, '$1'),
                    vod_name: a.attribs["title"],
                    vod_pic: img.attribs["src"],
                    vod_remarks: res || "125"
                };
            });
        }
        else { 
             videos = _.map(_.slice(items, 9, items.length), (item) => {
                var img = $(item).find("img:first")[0];
                var a = $(item).find('a:first')[0];
                return {
                    vod_id: a.attribs.href.replace(/.*?\/live\/(.*)\//g, '$1'),
                    vod_name: a.attribs["title"],
                    vod_pic: img.attribs["src"],
                    vod_remarks: _data["s"]
                };
            });
        }
    }
    else {
        videos = [];
    }
    
    return JSON.stringify({
        page: 1,
        pagecount: 1,
        limit: 20,
        total: 20 * 1,
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
    const link = HOST + 'live/' + id + '/';
    const html = await request(link);
    let _pdCid = html.match(/var _pdCid = "(\d+)"/)[1];
    // console.log(_pdCid)
    let _data = get_s(_pdCid);
    // console.log(_data)
    let data = _data["data"];
    let url = "https://feiying.litenews.cn/api/v1/auth/exchange?t=" +  _data["t"] + "&s=" + _data["s"];
    const res = await request(url, '', 'post', data);
    // console.log(res)
    // let _url = get_url(res);
    // console.log(_url)
    // let response =  await request(_url);
    // let playUrl = response.match(/(http.*=1)/)[1]
    // console.log(response)
    // console.log(playUrl)
    // let playUrl = ''
    // let playUrl = _url


    
    var playUrl0 = 'https://3geau1mtagczdnqb3fa3dq.wslivehls.com/clivealone302.iqilu.com/291/cf348386147f4f5da17e4b3bc937bb63/playlist.m3u8?auth=09801fd5eb1ccd62201c212411afe0a0&timestamp=1727312506271&wsSession=5d5f7fb7473de3cce4316177-172731250654874&wsIPSercert=3aa22d18ba1a130b780b3966a839dc3b&wsiphost=local&wsBindIP=1';
    const headers = {
        Referer: HOST,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0"
    };
    return JSON.stringify({
        parse: 0,
        url: playUrl0,
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
