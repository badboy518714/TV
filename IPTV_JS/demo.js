// 修正：分类改静态 (网站频繁变动分类)
import { load, _ } from "../YS_JS/lib/cat.js";
const fs = require('fs');
let key = "地方直播频道";
let HOST = 'https://v.iqilu.com/';
let siteKey = "";
let siteType = 0;
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36";

async function request(reqUrl, referer, mth, data, hd) {
    const headers = {
        "User-Agent": PC_UA,
    };
    if (referer) headers.referer = encodeURIComponent(referer);
    let res = await req(reqUrl, {
        method: mth || "get",
        headers: headers,
        data: data,
        postType: mth === "post" ? "form" : "",
    });
    return res.content;
}

async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
}

async function home(filter) {
    var classes = [{ "type_id": "", "type_name": "山东频道" }];
    const filterObj = {};
    return JSON.stringify({
        class: _.map(classes, (cls) => {
            cls.land = 1;
            cls.ratio = 1.78;
            return cls;
        }),
        filters: filterObj,
    });
}

async function homeVod() {
    return '{}'
}

async function category(tid, pg, filter, extend) {
    fs.readFile('LIVE_JSON/sdpd.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    console.log(data,typeof data)
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (err) {
    console.error('Invalid JSON:', err);
  }
});
    let videos =[]
    for(i=0; i<jsonData['data'].length;i++)
        videos.push(jsonData['data'][i])
    return JSON.stringify({
        list: videos,
    });
}

async function detail(id) {
    const vod = {
        vod_id: id,
        vod_remarks: "",
    };
    const playlist = ["观看视频" + "$" + id];
    vod.vod_play_from = "道长在线";
    vod.vod_play_url = playlist.join("#");
    return JSON.stringify({
        list: [vod],
    });
}

async function play(flag, id, flags) {
    // const link = HOST + "/skin/kuqimv/play.php";
    // const ref = HOST + "/play/" + id + ".html";
    // const pdata = { id: id };
    // const playUrl = JSON.parse(await request(link, ref, "post", pdata)).url;
    const playUrl = "https://3geau1mtagczdnqb3fa5dc.wslivehls.com/clivealone302.iqilu.com/291/caffbd9c4ae445d086cfe94302442d30/playlist.m3u8?auth=38d662c673cca2192c5dd52f6042ff5a&timestamp=1727253195568&wsSession=c6899729c97d72b005fc0ca0-172725319572989&wsIPSercert=3aa22d18ba1a130b780b3966a839dc3b&wsiphost=local&wsBindIP=1"
    const headers = {
        Referer: HOST,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0"
    };
    return JSON.stringify({
        parse: 0,
        url: playUrl,
        header: headers,
    });
}

async function search(wd, quick, pg) {
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
    };
}
