import requests, re , time
from concurrent.futures import ThreadPoolExecutor
# import sys
# import io

# sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
# sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')


headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://site.bjfengtaichurch.cn/portal/portal/index?mer_id=28455&pid=230&mer_user_id=1832",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Microsoft Edge\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
_headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Origin": "https://mp.weixin.qq.com",
    "Pragma": "no-cache",
    "Range": "bytes=0-150",
    "Referer": "https://mp.weixin.qq.com/",
    "Sec-Fetch-Dest": "video",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Microsoft Edge\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
list_xyys = {}

def get_all_data():
    url = "https://site.bjfengtaichurch.cn/portal/portalpc/get-listv2"
    params = {
        "pid": "230",
        "cid": "1011",
        "page": "1",
        "size": "50"
    }
    response = requests.get(url, headers=headers, params=params).json()
    json_data = response["data"]["data"]
    return json_data
def get_m3u8(data):
    global list_xyys
    title = data["title"]
    content_url = data["content_url"]
    res = requests.get(content_url, headers=headers).text
    try:
        _url = re.search(r'<a href="([^"]*)" target="_self"', res).group(1)
        resp = requests.get(_url, headers=headers).text.replace(' ', '')
        try:
            video_id = re.search(r"(wxv_\d+)", resp).group(1)
            # print(f"{title}--{video_id}")
            match_s = re.findall(r"url:\('([^)]*)'\).replace", resp)
            if len(match_s) < 1:
                print(title, f'ERROR--链接失效')
                return
            m3u8_urls = []
            for index, match in enumerate(match_s):
                _url = match.replace('\\x26amp;', '&').replace('http', 'https')
                m3u8_url = f'{_url}&vid={video_id}&format_id=10002&support_redirect=0&mmversion=false'
                res = requests.get(m3u8_url, headers=_headers)
                print(res,m3u8_url)
                m3u8_urls.append(m3u8_url)
                if "Chosen" in title and index % 4 == 3:
                    list_xyys[f"{title}-{int(index / 4) + 1}"] = m3u8_urls
                    m3u8_urls = []
                elif "回望第一集" in title and index % 2 == 1:
                    list_xyys[f"{title}-{int(index / 2) + 1}"] = m3u8_urls
                    m3u8_urls = []
            if len(m3u8_urls) > 0:
                list_xyys[title] = m3u8_urls
            # print(f'{title}--over')
        except Exception as e:
            print(title, f'ERROR--链接失效')
    except:
        match = re.search(r'src="([^"]*)"> <source type="video/(mp4)?(ogg)?(x-m4a)?"', res)
        # print(title,match.group(1))
        list_xyys[title] = [match.group(1)]
        # print(f'{title}--over')

def write_xyys(list_xyys):
    new_xyys = dict(sorted(list_xyys.items(), key=lambda x: x[0]))
    with open('SJ_JSON/FT_xyys.json', 'w', encoding='utf-8') as f:
        f.write(f'{new_xyys}')
        f.close()
    # print(new_xyys)

def get_first_url(json_data):
    pool = ThreadPoolExecutor(10)
    for data in json_data:
        pool.submit(get_m3u8, data)
    pool.shutdown()

    write_xyys(list_xyys)


def xy_ys():
    json_data = get_all_data()
    get_first_url(json_data)

if __name__ == '__main__':
    xy_ys()



