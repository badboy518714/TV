// 修正：分类改静态 (网站频繁变动分类)
import { load, _ } from "./lib/cat.js";
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
    
    let videos =
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
    const link = HOST + "/skin/kuqimv/play.php";
    const ref = HOST + "/play/" + id + ".html";
    const pdata = { id: id };
    const playUrl = JSON.parse(await request(link, ref, "post", pdata)).url;
    const headers = {
        Referer: HOST,
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
