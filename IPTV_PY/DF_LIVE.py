import requests
import re
import json
import execjs
from concurrent.futures import ThreadPoolExecutor

ctx = execjs.compile(open('IPTV_PY/DF_LIVE.js', encoding='utf-8').read())

IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0"

host = 'https://v.iqilu.com/'
url = "https://feiying.litenews.cn/api/v1/auth/exchange"
radio = { 1: 'sdradioXinwen',2: 'sdradioJingji',3: 'sdradioWenyi',4: 'sdradioShenghuo',5: 'sdradioJiaotong',6: 'sdradioXiangcun',7: 'sdradioYinyue',8: 'sdradioTiyu',9: 'sdradioJingjifm96'}
headers = { "Referer": host, "User-Agent": IOS_UA }

json_data = {"sdtv": "", "qlpd": "", "typd": "", "shpd": "", "zypd": "", "yspd": "", "ggpd": "", "nkpd": "", "sepd": "", "xinwen": "", "jingji": "", "nvzhubo": "", "shenghuo": "", "jiaotong": "", "xiangcun": "", "yinyue": "", "tiyu": ""}


def get_m3u8(match):
    global json_data
    # 获取 _pdCid
    content = requests.get(match, headers=headers).content
    html = content.decode('utf-8')
    # print(html)
    try:
        _pdCid = re.search(r'var _pdCid = "(\d+)";', html).group(1)
    except:
        _pdCid = re.search(r"var channelid  = (\d);", html).group(1)
    _data = ctx.call('get_s', _pdCid)
    # print(_data)

    params = {
        "t": _data["t"],
        "s": _data["s"]
    }
    data = _data["data"]
    # 获取 url加密信息
    response = requests.post(url, headers=headers, params=params, data=data)
    # print(response.text)

    if "errmsg" in response.text:
        _url = f'https://audiolive302.iqilu.com/{radio[int(_pdCid)]}/sdradio0{int(_pdCid)}/playlist.m3u8'
    else:
        # 解密 url
        _url = ctx.call('get_url', response.text)
    name = re.search(r'.*live/(.*)/', match).group(1)
    # print(name, _url)
    json_data[name] = _url


def get_jinan():
    global json_data
    channels = ["新闻频道", "都市频道", "文旅体育频道", "生活频道", "少儿频道", "鲁中频道", "城市电视频道", "地铁电视频道", "移动电视频道",
                "新闻频率", "经济频率", "交通频率", "音乐频率", "936私家车频率", "都市频率", "生活频率"]
    headers_ = {
        "User-Agent": PC_UA,
        "Referer": "https://www.ijntv.cn/"
    }
    url_jinan = "https://www.ijntv.cn/live/"
    content = requests.get(url_jinan, headers=headers_).content
    html = content.decode('utf-8')
    urls = re.findall(r'(http[^"]*.m3u8)', html)
    # print(urls)
    data = ctx.call('get_tk')
    for channel, url_ in zip(channels, urls):
        json_data[channel] = url_ + data
        # print(url_ + data)
        # res = requests.get(url_ + data, headers=headers)
        # print(res, res.text)
    # print(json_data)

def get_qingdao():
    channel_radios = {
        "新闻综合广播": "http://www.qtv.com.cn/live/radio/",
        "经济广播": "http://www.qtv.com.cn/live/radio/rd_economy.shtml",
        "文艺广播": "http://www.qtv.com.cn/live/radio/rd_car.shtml",
        "交通广播": "http://www.qtv.com.cn/live/radio/rd_traffic.shtml",
        "音体广播": "http://www.qtv.com.cn/live/radio/rd_music.shtml",
        "故事广播": "http://www.qtv.com.cn/live/radio/rd_story.shtml"
    }
    global json_data
    headers_ = {
        "Referer": "http://www.qtv.com.cn/live/radio/",
        "User-Agent": PC_UA
    }
    url_live = "http://www.qtv.com.cn/live/tv/index.shtml"
    response = requests.get(url_live, headers=headers_)
    for i in range(6):
        channel = f'QTV-{i+1}'
        json_data[channel] = f'http://video10.qtv.com.cn/drm/qtv{i+1}at/manifest.m3u8'
        headers_["Referer"] = 'http://www.qtv.com.cn/'
        # res = requests.get(f'http://video10.qtv.com.cn/drm/qtv{i+1}at/manifest.m3u8', headers=headers_)
        # print(res.text)

    cc = 'http://hlspull.qtv.com.cn/gwepn2sr/channel/4979ca520e89c36e8d6aa0d0a043e185/1.m3u8'
    for channel, radio_url in channel_radios.items():
        headers_["Referer"] = 'http://www.qtv.com.cn/live/radio/'
        res = requests.get(radio_url, headers=headers_, verify=False)
        print(res.text)
        channelName = re.search(r"channelName: '([^']*)',", res.text).group(1)
        # print(channelName)
        json_data[channel] = f'http://hlspull.qtv.com.cn/gwepn2sr/channel/{channelName}/1.m3u8'

    # print(json_data)



def start():
    global json_data
    # 获取 channels
    content = requests.get(host, headers=headers).content
    html = content.decode('utf-8')
    # print(html)
    matchs = re.findall(r'<dd><a href="(http://[v|m].iqilu.com/.*?live/.*/)" title', html)
    # print(matchs)
    pool = ThreadPoolExecutor(17)
    # 获取山东齐鲁频道info
    for match in matchs:
        pool.submit(get_m3u8, match)
    pool.shutdown()
    # json_data = dict(sorted(json_data.items(), key=lambda x: x[0]))
    # print(json_data)
    # 获取山东济南频道
    get_jinan()
    # 获取山东青岛频道
    get_qingdao()
    with open('SD_JSON/山东齐鲁.json', 'w', encoding='utf-8') as f:
        json_string = json.dumps(json_data)
        f.write(json_string)
        f.close()


if __name__ == '__main__':
    start()
