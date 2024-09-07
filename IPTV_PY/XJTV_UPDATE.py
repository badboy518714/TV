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
    "Hm_lvt_f69ac941c9b74460db6c266ac40a46f8": "1725359284",
    "HMACCOUNT": "D3310F42064FEB7A",
    "acw_tc": "2760820617257437301198148e145870873d80b91faf6cfdbfce53ea2c89e6",
    "Hm_lpvt_f69ac941c9b74460db6c266ac40a46f8": "1725743864"
}
url = "https://www.xjtvs.com.cn/bvradio_app/service/cms"
params = {
    "functionName": "getChannel",
    "stationID": "100",
    "_": "1725743935637"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)
json_data = response.json()
# print(json_data)
with open('IPTV_TXT/新疆频道.txt', 'w') as f:
    for data in json_data:
        # print(data)
        fullName, playUrl = data["fullName"], data["playUrl"]
        f.write(f'#EXTINF:-1 tvg-logo="https://badboy518714.github.io/TV/IPTV_LOGO/新疆频道.png" group-title="新疆频道",{fullName}\n{playUrl}\n\n')
