import { load, _ } from './lib/cat.js';
let key = '🐰兔小贝';
let HOST = 'https://www.tuxiaobei.com';
let siteKey = '';
let siteType = 0;
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const url_data = 'https://badboy518714.github.io/TV/LIVE_JSON/sdpd.txt'
const link = await request(url_data);
const html_data = link.match(/\((.*?)\);/)[1];
const _data = JSON.parse(html_data).data;

async function request(reqUrl, agentSp) {
    let res = await req(reqUrl, {
        method: 'get',
        headers: {
            'User-Agent': agentSp || IOS_UA,
        },
    });
    return res.content
}

async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype
}

async function home(filter) {
    const classes = [{ type_id: '', type_name: '🐰全部' },{ type_id: '1', type_name: '🐰01' }];
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
    let videos = _.map(_data, (it) => {
        return {
            vod_id: it.vod_id,
            vod_name: it.vod_pic,
            vod_pic: it.vod_name,
            vod_remarks: it.vod_remarks,
        }
    });
    return JSON.stringify({
        page: 1,
        pagecount: 1,
        limit: 10,
        total: 10 * 2,
        list: videos,
    })
    // return '{}'
}

async function detail(id) {
    const vod = {
        vod_id: id,
        vod_remarks: '',
    };
    const playlist = ['点击播放' + '$' + _data[id]["vod_url"]];
    vod.vod_play_from = "道长在线";
    vod.vod_play_url = playlist.join('#');
    return JSON.stringify({
        list: [vod],
    });
}

async function play(flag, id, flags) {
    var playUrl = id;
    const headers = {
        Referer: "https://v.iqilu.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0"
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
