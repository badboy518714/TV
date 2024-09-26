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
        "User-Agent": PC_UA,
    };
    if (referer) headers.referer = encodeURIComponent(referer);
    let res = await req(reqUrl, {
        method: mth || "get",
        headers: headers,
        body: data,
        // postType: mth === "post" ? "form" : "",
    });
    // return res.content;
    return res.text()
}

async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype
    
}

async function home(filter) {
    const classes = [{ type_id: "", type_name: '看电视' },{ type_id: "radio", type_name: '听广播' },{ type_id: "3", type_name: 'ces9' }];
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
    const link = HOST + tid;
    const referer = HOST;
    const html = await request(link, referer);
    const $ = load(html);
    const items = $("div.nav > ul > li");
    // const items = [1,2,3,4,5];
    var videos = _.map(_.slice(items, 1, 10), (item) => {
        var img = '';
        var a = $(item).find('a:first')[0];
        return {
            vod_id: a.attribs.href.replace(/.*?\/live\/(.*)\//g, '$1'),
            vod_name: a.attribs["title"],
            vod_pic: img,
            vod_remarks: a.attribs.href.replace(/.*?\/live\/(.*)\//g, '$1')
        };
    });
    const video_s = [{"vod_id": "https://1gr3uomttgr31hctwgrzdgco.wslivehls.com/alivealone302.litenews.cn/419/0c23955353f3499ba268bf5c0ecdd0d2/playlist.m3u8?k=66cbda625b5f11daadc9bd03f955126a&t=1727302265&wsSession=13c10561eff4beff97f8d1fa-172730226631115&wsIPSercert=acf7f5f3045db9c364e984d612ac493a&wsiphost=local&wsBindIP=1", "vod_pic": "https://file.iqilu.com/custom/radio/images/shoutu.jpg", "vod_name": "\u5c71\u4e1c\u7efc\u5408\u5e7f\u64ad", "vod_remarks": ""}, {"vod_id": "https://1gr3uomttgr31hctwgrzdgco.wslivehls.com/alivealone302.litenews.cn/419/78140199359d40c18dafaf486e57c941/playlist.m3u8?k=e5c2a11e40b1c4399fd9ff2fc1c23ed3&t=1727302265&wsSession=13c10561eff4beff97f8d1fa-172730226632167&wsIPSercert=acf7f5f3045db9c364e984d612ac493a&wsiphost=local&wsBindIP=1", "vod_pic": "https://file.iqilu.com/custom/radio/images/shoutu.jpg", "vod_name": "\u5c71\u4e1c\u7ecf\u6d4e", "vod_remarks": ""}, {"vod_id": "https://1gr3uomttgr31hctwgrzdcqy.wslivehls.com/alivealone302.litenews.cn/419/1255f16ee5f24f998e7c26cd68cf1adf/playlist.m3u8?k=74fc4e338ea05e7102fd319bc8a1dbe4&t=1727302265&wsSession=a370e8fe9e9c9cbe30562dd1-172730226631255&wsIPSercert=acf7f5f3045db9c364e984d612ac493a&wsiphost=local&wsBindIP=1", "vod_pic": "https://file.iqilu.com/custom/radio/images/shoutu.jpg", "vod_name": "\u5c71\u4e1c\u6587\u827a", "vod_remarks": ""}, {"vod_id": "https://0gr4uqmtt8y41hcjzgyzdnqbw.wslivehls.com/audiolive302.iqilu.com/sdradioShenghuo/sdradio04/playlist.m3u8?wsSession=9a83f8f2fb31f4b9cda44f42-172730226618817&wsIPSercert=acf7f5f3045db9c364e984d612ac493a&wsiphost=local&wsBindIP=1", "vod_pic": "https://file.iqilu.com/custom/radio/images/shoutu.jpg", "vod_name": "\u5c71\u4e1c\u7ecf\u5178\u97f3\u4e50", "vod_remarks": ""}, {"vod_id": "https://0gr4uqmtt8y41hcjzgyzdnqbi.wslivehls.com/audiolive302.iqilu.com/sdradioJiaotong/sdradio05/playlist.m3u8?wsSession=f3ab78b6a16fe0b19e59ff87-172730226619193&wsIPSercert=acf7f5f3045db9c364e984d612ac493a&wsiphost=local&wsBindIP=1", "vod_pic": "https://file.iqilu.com/custom/radio/images/shoutu.jpg", "vod_name": "\u5c71\u4e1c\u4ea4\u901a", "vod_remarks": ""}, {"vod_id": "https://0gr4uqmtt8y41hcjzgyzdnqba.wslivehls.com/audiolive302.iqilu.com/sdradioXiangcun/sdradio06/playlist.m3u8?wsSession=4653a88dde207a960428535d-172730226619161&wsIPSercert=acf7f5f3045db9c364e984d612ac493a&wsiphost=local&wsBindIP=1", "vod_pic": "https://file.iqilu.com/custom/radio/images/shoutu.jpg", "vod_name": "\u5c71\u4e1c\u4e61\u6751", "vod_remarks": ""}, {"vod_id": "https://0gr4uqmtt8y41hcjzgyzdnp3z.wslivehls.com/audiolive302.iqilu.com/sdradioYinyue/sdradio07/playlist.m3u8?wsSession=f1880498f0661967719b5e28-172730226619226&wsIPSercert=acf7f5f3045db9c364e984d612ac493a&wsiphost=local&wsBindIP=1", "vod_pic": "https://file.iqilu.com/custom/radio/images/shoutu.jpg", "vod_name": "\u5c71\u4e1c\u97f3\u4e50", "vod_remarks": ""}, {"vod_id": "https://0gr4uqmtt8y41hcjzgyzdnqj3.wslivehls.com/audiolive302.iqilu.com/sdradioTiyu/sdradio08/playlist.m3u8?wsSession=704034110337ab64b1d4f9a5-172730226618955&wsIPSercert=acf7f5f3045db9c364e984d612ac493a&wsiphost=local&wsBindIP=1", "vod_pic": "https://file.iqilu.com/custom/radio/images/shoutu.jpg", "vod_name": "\u5c71\u4e1c\u4f53\u80b2\u4f11\u95f2", "vod_remarks": ""}]
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
    const link = HOST + id;
    const referer = HOST;
    const html = await request(link, referer);
    let _pdCid = html.match(/var _pdCid = "(\d+)"/)[1];
    // let _data = get_s(_pdCid);
    // let data = _data["data"];
    // let url = "https://feiying.litenews.cn/api/v1/auth/exchange?t=" +  _data["t"] + "&s=" + _data["s"];
    // const res = await request(url, referer, 'post', data);
    // let _url = get_url(res);
    // let response =  await request(_url, referer);
    // let playUrl = response.match(/(http.*)/)[1]



    
    var playUrl0 = 'https://3geau1mtagczdnqb3fa3dq.wslivehls.com/clivealone302.iqilu.com/291/cf348386147f4f5da17e4b3bc937bb63/playlist.m3u8?auth=09801fd5eb1ccd62201c212411afe0a0&timestamp=1727312506271&wsSession=5d5f7fb7473de3cce4316177-172731250654874&wsIPSercert=3aa22d18ba1a130b780b3966a839dc3b&wsiphost=local&wsBindIP=1';
    const headers = {
        Referer: "https://v.iqilu.com/",
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
