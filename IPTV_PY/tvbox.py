import requests
import json
import re


def get_fan_json():
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://lige.chat",
        "Pragma": "no-cache",
        "Referer": "https://lige.chat/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
        "sec-ch-ua": "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    url = "https://api.lige.chat/ua"
    data = {
        "url": "http://www.饭太硬.com/tv"
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, data=data).text
    text = re.sub('//{.*', '', response)

    # fan_json = json.dumps(json.loads(text), indent=4)
    fan_json = json.loads(text)
    return fan_json


def get_my_json():
    with open('IPTV_JS/my_channel.json', 'r', encoding='utf-8') as f:
        my_json = json.loads(f.read())
        f.close()
        return my_json


def update_json():
    fan_json = get_fan_json()
    my_json = get_my_json()
    fan_json["logo"] = my_json["logo"]
    fan_json["lives"] = my_json["lives"] + fan_json["lives"]
    fan_json["sites"] = my_json["sites"] + fan_json["sites"]
    fan_json = json.dumps(fan_json, indent=4)
    print(fan_json)
    with open('IPTV_JS/my_tvbox.json', 'w', encoding='utf-8') as f:
        f.write(fan_json)
        f.close()


if __name__ == '__main__':
    update_json()
