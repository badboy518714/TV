import requests


headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://www.xjtvs.com.cn/live/xjtv.shtml",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Microsoft Edge\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "acw_tc": "2760820517253592850463290ea4b77570430265ab4dd20c14504492090e53",
    "Hm_lvt_f69ac941c9b74460db6c266ac40a46f8": "1725359284",
    "HMACCOUNT": "D3310F42064FEB7A",
    "Hm_lpvt_f69ac941c9b74460db6c266ac40a46f8": "1725359369"
}
url = "https://www.xjtvs.com.cn/bvradio_app/service/cms"
params = {
    "functionName": "getChannel",
    "stationID": "100",
    "_": "1725359377209"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)
json_data = response.json()
# print(json_data)
with open('new/xj_tv.m3u', 'w+') as f:
    txt = '#EXTM3U x-tvg-url="https://live.fanmingming.com/e.xml","http://epg.51zmt.top:8000/e.xml","http://epg.aptvapp.com/xml","https://epg.pw/xmltv/epg_CN.xml","https://epg.pw/xmltv/epg_HK.xml","https://epg.pw/xmltv/epg_TW.xml"\n\n'
    f.write(txt)
    for data in json_data:
        # print(data)
        fullName, playUrl = data["fullName"], data["playUrl"]
        f.write(f'#EXTINF:-1 tvg-logo="https://gitee.com/badboy518/happy/raw/master/res/新疆频道.png" group-title="新疆频道",{fullName}\n{playUrl}\n')
