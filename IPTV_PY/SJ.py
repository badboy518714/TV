import requests, re
import json, time
from concurrent.futures import ThreadPoolExecutor

info_list = []
haiwai_list = {}

headers_hw = {
    "Origin": "https://live.vhall.com",
    "Referer": "https://live.vhall.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "gray-id": "18789693",
    "platform": "17",
    "request-id": "531afc40-6d0b-11ef-a4aa-19f985a1bbd0",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjU3MDgwNTQsImV4cCI6MTcyODMwMDA1NCwidXNlcl9pZCI6IjE4MDY2NjE3NSIsInBsYXRmb3JtIjoiMTciLCJjaCI6ImIiLCJidXNpbmVzc19hY2NvdW50X2lkIjoiMzA3OTQxNzc2In0.RDWWepdxtjZ32cMi-BMGYM8wI_PJngibnrLQeTTPjdI",
    "zone": "Asia/Shanghai"
}
host_hw = "https://saas-api.vhall.com/v3/webinars/webinar/get-list"

headers_ft = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://site.bjfengtaichurch.cn/portal/portal/index?mer_id=28455&pid=230&mer_user_id=1832",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Microsoft Edge\";v=\"127\", \"Chromium\";v=\"127\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
host_ft = "https://site.bjfengtaichurch.cn/portal/portalpc/get-listv2"
cid_list = {"951": "丰台主日证道", "956": "丰台查经聚会",  "959": "丰台基要神学"}


def get_webinar_id(pos):
    global info_list
    data = {
        "pos": str(pos),
        "home_user_id": "18789693",
        "limit": "12",
        "title": "主日",
        "order_type": "1",
        "is_private": "0",
        "need_flash": "1"
    }
    json_data = requests.post(host_hw, headers=headers_hw, data=data).json()
    _list = json_data["data"]["list"]
    if len(_list) > 0:
        for res in _list:
            if res["pv"] != 0:
                flag = res["subject"][:8]
                if flag.isdigit():
                    subject = res["subject"]
                else:
                    subject = res["actual_start_time"].replace('-', '') + res["subject"]
                info = {
                    'subject': subject,
                    'webinar_id': res["webinar_id"]
                }
                info_list.append(info)
        return True
    else:
        return False

def check_v3(webinar_id):
    url = f'https://live.vhall.com/{webinar_id}'
    response = requests.get(url, headers=headers_hw)
    flashvars = re.search(r'flashvars = ({[^;]*})', response.text)
    if flashvars:
        data = flashvars.group(1).replace("'", '"')
        flashvars = json.loads(data)
        # print(flashvars)
    return flashvars

def get_m3u8(info):
    global haiwai_list
    flashvars = check_v3(info["webinar_id"])
    url_m3u8 = []
    if flashvars:
        streamname = flashvars["streamname"]
        against_token = flashvars["against_token"]
        m3u8 = f'https:{streamname}?token={against_token}'
        # print(m3u8)
        url_m3u8.append(m3u8)
        haiwai_list[info["subject"]] = url_m3u8
        return

    data = {
        "webinar_id": f'{info["webinar_id"]}',
        "clientType": "standard",
        "live_type": "0",
        "stealth": "0",
        "visitor_id": "v1829154925096001536"
    }
    url = "https://live.vhall.com/v3/webinars/watch/init"
    _headers = {
        "Origin": "https://live.vhall.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjU3MDgwNzMsImV4cCI6MTcyODMwMDA3MywidXNlcl9pZCI6IjE4MDY2NjE3OSIsInBsYXRmb3JtIjoiNyIsImNoIjoiYyIsImJ1c2luZXNzX2FjY291bnRfaWQiOiIifQ.5m_WeAcU007BGtue21EIEQpy2xdbmb8n9nmpU_-EZBM",
    }
    response = requests.post(url, headers=_headers, data=data)
    json_data = response.json()["data"]

    # print(json_data)
    third_party_user_id = json_data["join_info"]["third_party_user_id"]
    if "temp" in third_party_user_id:
        return
    data = {
        "client": "pc_browser",
        "app_id": json_data["interact"]["paas_app_id"],
        "third_party_user_id": third_party_user_id,
        "access_token": json_data["interact"]["paas_access_token"],
        "package_check": "peter",
        "record_id": json_data["record"]["paas_record_id"]
    }
    url = "https://api.vhallyun.com/sdk/v2/demand/get-record-watch-info"
    json_hls = requests.post(url, headers=headers_hw, data=data).json()["data"]["default_server"]
    hls_s = json_hls["hls_domainnames"]
    token = json_hls["token"]
    for hls in hls_s:
        m3u8 = f'{hls["hls_domainname"]}?token={token}'
        url_m3u8.append(m3u8)
    haiwai_list[info["subject"]] = url_m3u8

def HW_write_m3u(haiwai_list):
    list_obj = dict(sorted(haiwai_list.items(), key=lambda x: x[0], reverse=True))
    # 写入js文件
    with open('SJ_JSON/SJ_HW.json', 'w', encoding='utf-8') as f:
        f.write(f'{list_obj}')
        f.close()
    # 写入m3u文件
    with open('IPTV_M3U/SJ_HW.m3u', 'w', encoding='utf-8') as f:
        f.write('#EXTM3U x-tvg-url=http://epg.51zmt.top:8000/cc.xml,http://epg.51zmt.top:8000/difang.xml\n\n')
        index = 1
        for key, value in list_obj.items():
            f.write(
                f'#EXTINF:-1 tvg-logo="https://badboy518714.github.io/TV/IPTV_LOGO/index.png" group-title="海外主日-{int(index / 51) + 1}",{key}\n')
            for url in value:
                f.write(url + '\n')
            index += 1
        f.close()
    print('海外写入完成')

def haiwai_m3u():
    pool = ThreadPoolExecutor(30)
    pos = 0
    # 获取 subject/webinar_id
    while True:
        res = pool.submit(get_webinar_id, pos)
        if not res.result():
            break
        pos += 300
    pool.shutdown()
    # print(info_list)

    pool = ThreadPoolExecutor(30)
    # 获取m3u8_url
    for info in info_list:
        pool.submit(get_m3u8, info)
    pool.shutdown()
    print(haiwai_list)
    # list_obj = dict(sorted(haiwai_list.items(), key=lambda x: x[0], reverse=True))
    # print(list_obj)
    # 写入
    HW_write_m3u(haiwai_list)

def updata_hw():
    # 读取历史数据
    with open('SJ_JSON/SJ_HW.json', 'r', encoding='utf-8') as f:
        old_info = f.read()
        old_info = old_info.replace('\\xa0','').replace('"','“').replace("'", '"')
        f.close()
    new_info = json.loads(old_info)

    # 获取最新数据
    get_webinar_id(0)
    for info in info_list:
        get_m3u8(info)

    # 更新js
    for key, value in haiwai_list.items():
        if key not in new_info.keys():
            new_info[key] = value
    # print(new_info)
    HW_write_m3u(new_info)



def FT_write_m3u(sj_list):
    # 写入js文件
    with open('SJ_JSON/SJ_FT.json', 'w', encoding='utf-8') as f:
        js_ft = {
            "sj_list": sj_list
        }
        f.write(f'{js_ft}')
        f.close()
     # 读取信仰影视json
    with open('SJ_JSON/FT_xyys.json', 'r', encoding='utf-8') as f:
        info = f.read()
    new_info = json.loads(info.replace("'",'"'))
    
    # 写入m3u文件
    with open("IPTV_M3U/SJ_FT.m3u", 'w', encoding='utf-8') as f:
        f.write('#EXTM3U x-tvg-url=http://epg.51zmt.top:8000/cc.xml,http://epg.51zmt.top:8000/difang.xml\n\n')
        for title, _list in zip(cid_list.values(), sj_list):
            for group in _list:
                f.write(
                    f'#EXTINF:-1 tvg-logo="{group[1]}" group-title="{title}",{group[0]}\n')
                f.write(f'{group[2]}\n')
        for key, value in new_info.items():
            f.write(f'#EXTINF:-1 tvg-logo="https://badboy518714.github.io/TV/IPTV_LOGO/index.png" group-title="信仰影视",{key}\n')
            for url in value:
                f.write(f'{url}\n')
        f.close()
    print('丰台写入完成')

def fengtai_m3u():
    sj_list = []
    for cid in cid_list.keys():
        page = 1
        _list = []
        while True:
            params = {
                "pid": "230",
                "cid": cid,
                "page": page,
                "size": "10"
            }
            response = requests.get(host_ft, headers=headers_ft, params=params).json()
            data_list = response["data"]["data"]
            if not data_list:
                break
            for data in data_list:
                if data:
                    title = data["title"]
                    content_url = data["content_url"]
                    res = requests.get(content_url).text
                    mp3_url = re.search(r'"(https://oss.arksaas.cn/[^"]*.mp[34])"', res)
                    pic_url = re.search(r'class="n_picture_adm" src="([^"]*.png)" />', res)
                    if mp3_url and pic_url:
                        _list.append([title, pic_url.group(1), mp3_url.group(1)])
            page += 1
        if cid == '959':
            _list.reverse()
        sj_list.append(_list)
    FT_write_m3u(sj_list)

    # print('---------结束---------')

def updata_ft():
    # 读取历史数据
    with open('SJ_JSON/SJ_FT.json', 'r', encoding='utf-8') as f:
        old_info = f.read()
    new_info = json.loads(old_info.replace("'",'"'))
    sj_list = new_info["sj_list"]

    # 获取最新数据
    sj_list_1 = []
    for cid in cid_list.keys():
        _list = []
        params = {
            "pid": "230",
            "cid": cid,
            "page": 1,
            "size": "3"
        }
        response = requests.get(host_ft, headers=headers_ft, params=params).json()
        data_list = response["data"]["data"]
        for data in data_list:
            if data:
                title = data["title"]
                content_url = data["content_url"]
                res = requests.get(content_url).text
                mp3_url = re.search(r'"(https://oss.arksaas.cn/[^"]*.mp[34])"', res)
                pic_url = re.search(r'class="n_picture_adm" src="([^"]*.png)" />', res)
                if mp3_url and pic_url:
                    _list.append([title, pic_url.group(1), mp3_url.group(1)])
        if cid == '959':
            _list.reverse()
        sj_list_1.append(_list)
    for index, res in enumerate(sj_list_1):
        demo = []
        for info in res:
            if info[0] == sj_list[index][0][0]:
                break
            else:
                demo.append(info)
        if len(demo) > 0:
            sj_list[index] = demo + sj_list[index]

    FT_write_m3u(sj_list)




    # 更新js



def main():
    # fengtai_m3u()
    # haiwai_m3u()
    updata_hw()
    updata_ft()

if __name__ == '__main__':
    main()

