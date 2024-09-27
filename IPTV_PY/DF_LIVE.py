import requests
import re
import json
import execjs
from concurrent.futures import ThreadPoolExecutor

ctx = execjs.compile(open('IPTV_PY/DF_LIVE.js', encoding='utf-8').read())

host = 'https://v.iqilu.com/'
url = "https://feiying.litenews.cn/api/v1/auth/exchange"

headers = {
    "Referer": host,
    "User-Agent": 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
}

json_data = {}


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
    print(response.text)

    if "errmsg" in response.text:
        _url = f'https://audiolive302.iqilu.com/{radio[int(_pdCid)]}/sdradio0{int(_pdCid)}/playlist.m3u8'
    else:
        # 解密 url
        _url = ctx.call('get_url', response.text)
    name = re.search(r'.*live/(.*)/', match).group(1)
    # print(name, _url)
    json_data[name] = _url


def start():
    global json_data
    # 获取 channels
    content = requests.get(host, headers=headers).content
    html = content.decode('utf-8')
    # print(html)
    matchs = re.findall(r'<dd><a href="(http://[v|m].iqilu.com/.*?live/.*/)" title', html)
    # print(matchs)
    pool = ThreadPoolExecutor(1)
    for match in matchs:
        pool.submit(get_m3u8, match)
    pool.shutdown()
    # json_data = dict(sorted(json_data.items(), key=lambda x: x[0]))
    print(json_data)
    with open('SD_JSON/山东齐鲁.json', 'w', encoding='utf-8') as f:
        json_string = json.dumps(json_data)
        f.write(json_string)
        f.close()


if __name__ == '__main__':
    start()
