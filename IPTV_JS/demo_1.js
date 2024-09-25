import { load, _ } from './lib/cat.js';
let key = '🐰兔小贝';
let HOST = 'https://www.tuxiaobei.com';
let siteKey = '';
let siteType = 0;
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

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
    const classes = [{ type_id: '', type_name: '🐰全部' }, { type_id: 2, type_name: '🐰儿歌' }, { type_id: 3, type_name: '🐰故事' }, { type_id: 27, type_name: '🐰公益' }, { type_id: 9, type_name: '🐰十万个为什么' }, { type_id: 28, type_name: '🐰安全教育' }, { type_id: 29, type_name: '🐰动物奇缘' }, { type_id: 7, type_name: '🐰弟子规' }, { type_id: 5, type_name: '🐰古诗' }, { type_id: 6, type_name: '🐰三字经' }, { type_id: 8, type_name: '🐰千字文' }, { type_id: 11, type_name: '🐰数学' }, { type_id: 25, type_name: '🐰英语' }, { type_id: 24, type_name: '🐰折纸' }];
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
    
    // const data = JSON.parse(html).data;
    const jsonData = {
   "data": [ 
       {
        "vod_id": "https://3geau1mtagczdnqb3fa5dc.wslivehls.com/clivealone302.iqilu.com/291/caffbd9c4ae445d086cfe94302442d30/playlist.m3u8?auth=b3a290291a48f02ef02657b01926c028&timestamp=1727250416283&wsSession=c6899729c97d72b005fc0ca0-172725041648567&wsIPSercert=3aa22d18ba1a130b780b3966a839dc3b&wsiphost=local&wsBindIP=1",
        "vod_pic": "https://img8.iqilu.com/vmsimgs/2024/09/21/1191230_2fa3b241723040de8753a5d84b7e2be0.png",
        "vod_name": "山东卫视_1",
        "vod_remarks": ""
        },
       {
        "vod_id": "https://3geau1mtagczdnqb3fa5dc.wslivehls.com/clivealone302.iqilu.com/291/caffbd9c4ae445d086cfe94302442d30/playlist.m3u8?auth=b3a290291a48f02ef02657b01926c028&timestamp=1727250416283&wsSession=c6899729c97d72b005fc0ca0-172725041648567&wsIPSercert=3aa22d18ba1a130b780b3966a839dc3b&wsiphost=local&wsBindIP=1",
        "vod_pic": "https://badboy518714.github.io/TV/IPTV_LOGO/CCTV1.png",
        "vod_name": "山东卫视_2",
        "vod_remarks": ""
        },
       {
        "vod_id": "https://3geau1mtagczdnqb3fa5dc.wslivehls.com/clivealone302.iqilu.com/291/caffbd9c4ae445d086cfe94302442d30/playlist.m3u8?auth=b3a290291a48f02ef02657b01926c028&timestamp=1727250416283&wsSession=c6899729c97d72b005fc0ca0-172725041648567&wsIPSercert=3aa22d18ba1a130b780b3966a839dc3b&wsiphost=local&wsBindIP=1",
        "vod_pic": "https://badboy518714.github.io/TV/IPTV_LOGO/CCTV2.png",
        "vod_name": "山东卫视_3",
        "vod_remarks": ""
        },
   ]
}
    let videos = jsonData['data']
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
    const playlist = ['点击播放' + '$' + id];
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
