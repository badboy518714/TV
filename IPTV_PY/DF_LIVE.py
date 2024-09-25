import requests
import re
import json
import execjs
from concurrent.futures import ThreadPoolExecutor

ctx = execjs.compile(open('IPTV_PY/DF_LIVE.js', encoding='utf-8').read())
print(ctx)

host = 'https://v.iqilu.com/'
url = "https://feiying.litenews.cn/api/v1/auth/exchange"

headers = {
    "Referer": host,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
}

json_data = {}

def get_m3u8(match):
    global json_data
    # 获取 _pdCid
    content = requests.get(match[0], headers=headers).content
    html = content.decode('utf-8')
    _pdCid = re.search(r'var _pdCid = "(\d+)";', html).group(1)
    print(match, _pdCid)
    _data = {}
    try:
        _data = ctx.call('get_s', _pdCid)
    except Exception as e:
        print('ERROR:', e)
    print(_data)
    params = {
        "t": _data["t"],
        "s": _data["s"]
    }
    data = _data["data"]
    # 获取 url加密信息
    response = requests.post(url, headers=headers, params=params, data=data)
    # 解密 url
    _url = ctx.call('get_url', response.text)
    # 获取 m3u8地址
    _response = requests.get(_url, headers=headers)
    m3u8_url = re.sub('#E.*', '', _response.text).strip()
    # print(m3u8_url)
    json_data[_pdCid] = {
        "vod_url": m3u8_url,
        "vod_pic": "https://img8.iqilu.com/vmsimgs/2024/09/21/1191230_2fa3b241723040de8753a5d84b7e2be0.png",
        "vod_name": f"山东{match[1]}",
        "vod_remarks": ""
    }
    print(json_data[_pdCid])


def start():
    global json_data
    # 获取 channels
    content = requests.get(host, headers=headers).content
    html = content.decode('utf-8')
    matchs = re.findall(r'<a href="(http://v.iqilu.com.*)" title="(.*)" target="_blank">.*</a></li>', html)
    num = int(len(matchs) / 2)
    pool = ThreadPoolExecutor(9)
    for match in matchs[:9]:
        pool.submit(get_m3u8, match)
    pool.shutdown()
    json_data = dict(sorted(json_data.items(), key=lambda x: x[0]))
    # print(json_data)
    list_info = []
    for value in json_data.values():
        list_info.append(value)
    data = {
        "data": list_info
    }
    with open('IPTV_TXT/山东_地方.txt', 'w', encoding='utf-8') as f:
        json_string = json.dumps(data)
        # print(json_string)
        f.write('(' + json_string + ');')
        f.close()
        
if __name__ == '__main__':
    start()


