import requests
import time

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.baidu.com/link?url=K0cE9CCBYlcwFPZe7d0_LQPs905QP8fTs883pVhrqYQ-pvKX8NvplSrv2_Z1MeX54A7fo37mC1AS_sQNaJoc1_&wd=&eqid=fac39768038d1b9c0000000566dcc2c2",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "cross-site",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Microsoft Edge\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "Hm_lpvt_f69ac941c9b74460db6c266ac40a46f8": f"{int(time.time())}"
}
url = "https://www.xjtvs.com.cn/live/xjtv.shtml"
# 获取cookies
response = requests.get(url, headers=headers, cookies=cookies)
set_cookie = response.cookies
for key, value in set_cookie.items():
    cookies[key] = value

_headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.xjtvs.com.cn/live/xjtv.shtml",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Microsoft Edge\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://www.xjtvs.com.cn/bvradio_app/service/cms"
params = {
    "functionName": "getChannel",
    "stationID": "100",
    "_": f'{int(time.time()*1000)}'
}
# 获取频道数据
response = requests.get(url, headers=_headers, cookies=cookies, params=params)
json_data = response.json()
# print(json_data)
with open('IPTV_TXT/新疆频道.txt', 'w') as f:
    for data in json_data:
        # print(data)
        fullName, playUrl = data["fullName"], data["playUrl"]
        f.write(f'#EXTINF:-1 tvg-logo="https://badboy518714.github.io/TV/IPTV_LOGO/新疆频道.png" group-title="新疆频道",{fullName}\n{playUrl}\n\n')
