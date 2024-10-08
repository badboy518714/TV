import { load, _ } from '../lib/cat.js';
// import { get_url, get_s } from './demo.js';
let key = '🐰山东';
let HOST = 'https://v.iqilu.com/';
let siteKey = '';
let siteType = 0;
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36";
const Agent = [IOS_UA, IOS_UA, PC_UA, PC_UA]
const referer_s = ['https://v.iqilu.com/','https://www.ijntv.cn/','http://www.qtv.com.cn/', '']
const ID_JN = ["新闻频道", "都市频道", "文旅体育频道", "生活频道", "少儿频道", "鲁中频道", "城市电视频道", "地铁电视频道", "移动电视频道", "新闻频率", "经济频率", "交通频率", "音乐频率", "936私家车频率", "都市频率", "生活频率"]
const PIC_JN = ["https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/388B9096297F45A399F2AA6B9690C30F/B8CB223825D84DBAAC4A20FF87D3AC55.jpg","https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/388B9096297F45A399F2AA6B9690C30F/8D3DDDD03A764180A80BC06EC5F359D0.jpg","https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/0683FD92CC394CB0A45EFC96E3573714/8C4F3D94819445969F7AEA4183046B94.png","https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/1AB422BDF3F14167B3FFBBD3FCE7B83F/308CB37FA01E4ACF91F46DCA51C3C01F.jpg","https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/1AB422BDF3F14167B3FFBBD3FCE7B83F/92374E7275A94CB28CC9D847AAA9E953.jpg","https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/0683FD92CC394CB0A45EFC96E3573714/C7A16701895348BD90C932DC35EE6445.jpg","https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/0683FD92CC394CB0A45EFC96E3573714/F62353C7A24E4A928E36375FDF0199AD.png","https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/0683FD92CC394CB0A45EFC96E3573714/FEBCA467466B45FA854714AF823C2546.png","https://quehuaobs.ijntv.cn/58CE1F28EF5E42F6/FABU_YUNSHI/1AB422BDF3F14167B3FFBBD3FCE7B83F/A1E137EFDE7C4147A8D5D783BBD36432.jpg","https://mp-b77cdf68-e470-49bf-98e7-01d12ec29f28.cdn.bspapp.com/staic-img/tv-redio-back.jpg"]; 
const ID_QD = ['QTV-1', 'QTV-2', 'QTV-3', 'QTV-4', 'QTV-5', 'QTV-6', '新闻综合广播', '经济广播', '文艺广播', '交通广播', '音体广播', '故事广播']
const PIC_QD = [ "https://pic.rmb.bdstatic.com/bjh/240725/news/518b9f4f30e5ab4d84ee825c087d475d657.jpeg","https://photo.tuchong.com/17981284/f/744227682.jpg","https://qiniu-cdn0.jinxidao.com/group1/M00/09/9B/ooYBAFmyS4OAdU-MAALMB5guu1E493.jpg","https://travel.qingdaonews.com/gb/images/2020-02/13/ad403c27-097c-47bf-a1f4-de166fe3f083.jpg","https://p3.itc.cn/q_70/images03/20230304/5952c1795c4944e492ac67b413f4b97c.jpeg","https://bkimg.cdn.bcebos.com/pic/8b82b9014a90f603738df077aa5da41bb051f81947f9","https://mp-b77cdf68-e470-49bf-98e7-01d12ec29f28.cdn.bspapp.com/staic-img/tv-redio-back.jpg"]
const ID_WH = ["新闻综合", "都市生活", "海洋频道", "新闻广播", "交通广播", "音乐广播"]
const PIC_WH = [ "https://se-feed-bucket.bj.bcebos.com/map_x_day_sup/110ef30f33f46568ce7f2346878e92dd-s4.jpg", "https://www.weihai.gov.cn/picture/0/1903071456299066058.jpg", "https://q9.itc.cn/images01/20240409/0e64040d222641d992a8ff6b4dd9800c.jpeg", "http://lv.weihai.tv/files/images/2018-11/06103256681.jpg"]
let json_data;
let jn_infos = {};
let qd_infos = {};
let wh_infos = {};

async function request(reqUrl, referer, mth, data, hd) {
    const headers = {
        "User-Agent": IOS_UA,
        'Referer': referer
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
    const classes = [
        { type_id: "qilu", type_name: '齐鲁' },
        { type_id: "jinan", type_name: '济南' },
        { type_id: "qingdao", type_name: '青岛' },
        { type_id: "weihai", type_name: '威海' },
        { type_id: "142", type_name: '92' },
        { type_id: "152", type_name: '92' },
        { type_id: "162", type_name: '92' },
    ];
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
        const html = await request(HOST, HOST);
        const $ = load(html);
        const items = $("div.dianshi_tv > dl");
        vedio_1 = _.map(_.slice(items, 0, 9), (item) => {
            var img = $(item).find("img:first")[0];
            var a = $(item).find('a:first')[0];
            let b = a.attribs["title"];
            let name;
            if (b.includes("山东")) { name = b;  }
            else { name = "山东" + b; }
            return {
                vod_id: a.attribs.href.replace(/.*?\/live\/(.*)\//g, '$1') + '0',
                vod_name: name,
                vod_pic: img.attribs["src"],
                vod_remarks: ''
            };
        });
        console.log(vedio_1)
        vedio_2 = _.map(_.slice(items, 9, items.length), (item) => {
            var img = $(item).find("img:first")[0];
            var a = $(item).find('a:first')[0];
            let b = a.attribs["title"];
            let name;
            if (b.includes("广播")) { name = b;  }
            else { name = b + "广播"; }
            return {
                vod_id: a.attribs.href.replace(/.*?\/radio_live\/(.*)\//g, '$1') + '0',
                vod_name: name,
                vod_pic: img.attribs["src"],
                vod_remarks: ''
            };
        }); 
        console.log(vedio_2)
        return vedio_1.concat(vedio_2) 
    }
    else if (tid === "jinan"){
        const vedios = _.map(jn_infos, (_value, _key) => {
            console.log("Key:", _key, "Value:", _value);
            return {
                vod_id: _key + '1',
                vod_name: _key,
                vod_pic: _value,
                vod_remarks: ''
                };     
            });
        return vedios
    }
    else if (tid === "qingdao"){
        const vedios = _.map(qd_infos, (_value, _key) => {
            console.log("Key:", _key, "Value:", _value);
            return {
                vod_id: _key + '2',
                vod_name: _key,
                vod_pic: _value,
                vod_remarks: ''
                };     
            });
        return vedios
    }
    else if (tid === "weihai"){
        const vedios = _.map(wh_infos, (_value, _key) => {
            console.log("Key:", _key, "Value:", _value);
            return {
                vod_id: _key + '3',
                vod_name: _key,
                vod_pic: _value,
                vod_remarks: ''
                };     
            });
        return vedios
    }
}


async function category(tid, pg, filter, extend) {  
    const url = 'https://badboy518714.github.io/TV/SD_JSON/山东齐鲁.json'
    const link = await request(url);
    json_data = JSON.parse(link);
    console.log(json_data);

    for (var i=0; i<ID_JN.length; i++){
        let _id = ID_JN[i];
        let _pic;
        if (i<9) { _pic = PIC_JN[i]; }
        else { _pic = PIC_JN[9]; }
        jn_infos[_id] = _pic;
    }
    for (var i=0; i<ID_QD.length; i++){
        let _id = ID_QD[i];
        let _pic;
        if (i<6) { _pic = PIC_QD[i]; }
        else { _pic = PIC_QD[6]; }
        qd_infos[_id] = _pic;
    }
     for (var i=0; i<ID_WH.length; i++){
        let _id = ID_WH[i];
        let _pic;
        if (i<3) { _pic = PIC_WH[i]; }
        else { _pic = PIC_WH[3]; }
        wh_infos[_id] = _pic;
    }

    let videos = await get_info(tid)    
    console.log(videos)
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
    let index_0 = id.substr(0, id.length-1);
    let index_1 = parseInt(id[id.length-1]);
    let playUrl = json_data[index_0];
    // let playUrl ='https://clivealone302.iqilu.com/291/cf348386147f4f5da17e4b3bc937bb63/playlist.m3u8?auth=06c0006852a7672f311c7535980a5194&timestamp=1727438974992'   
    const headers = {
        Referer: referer_s[index_1],
        "User-Agent": Agent[index_1],
        "Connection": "keep-alive"
    };
    // if (index_1 === 2) { headers[ "range"] = "bytes=0-190"; headers[ "Range"] = "bytes=0-137";}
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
// category("jinan")
