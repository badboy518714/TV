import json

import requests, re
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime


headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
}
host = 'https://www.ifuyin.net/'

year = str(datetime.now())[:4]
fy_ys = {}

# 获取教会 id/name
def get_church():
    church_url = f"{host}api/api/tv.category/index"
    params = {
        "parentid": "226",
        "format": "1",
        "lang": "zh"
    }
    response = requests.get(church_url, headers=headers, params=params)
    json_data = response.json()["data"]["child_list"]
    # print(json_data)
    return json_data

# 获取 movie
def get_movie(church_id):
    movie_url = f"{host}api/api/tv.movie/index"
    params = {
        "paginate": "1",
        "category_id": church_id,
        "offset": "0",
        "limit": "32",
        "lang": "zh"
    }
    response = requests.get(movie_url, headers=headers, params=params).json()
    json_data = response['data']['data']
    # print(json_data)
    return json_data

def get_urlid(movie_id):
    urlid_url = f"{host}api/api/tv.movie/detail"
    params = {
        "movid": movie_id,
        "lang": "zh"
    }
    response = requests.get(urlid_url, headers=headers, params=params).json()
    json_data = response["data"]["url_list"]
    # print(json_data)
    return json_data

def get_m3u8_url(movie_id, urlid):
    url = f"{host}api/api/tv.movie/url"
    params = {
        "movid": movie_id,
        "urlid": urlid,
        "type": "1",
        "lang": "zh"
    }
    response = requests.get(url, headers=headers, params=params).json()
    if response['msg'] == 'url not find':
        params['type'] = '2'
        response = requests.get(url, headers=headers, params=params).json()
    json_data = response["data"]
    # print(json_data)
    return json_data["url"]

def get_church_all_url(church):
    global fy_ys
    church_js = {}
    church_id, church_name = church["id"], church["name"]
    movie_info = get_movie(church_id)
    for movie in movie_info:
        movie_js = {}
        movie_id, movie_title = movie['movid'], movie['title']
        urlid_info = get_urlid(movie_id)
        pool_2 = ThreadPoolExecutor(15)
        for info in urlid_info:
            urlid, title, = info["urlid"], info["title"]
            title = str(title).strip()
            result = pool_2.submit(get_m3u8_url, movie_id, urlid)
            m3u8_url = result.result()
            # print(m3u8_url)
            movie_js[title] = m3u8_url
        pool_2.shutdown()
        if year in movie_title:
            movie_js = dict(sorted(movie_js.items(), key=lambda x: x[0], reverse=True))
        # print(movie_js)
        church_js[movie_title] = movie_js
    # print(church_js)
    church_js = dict(sorted(church_js.items(), key=lambda x: x[0], reverse=True))
    print(f'{church_name}-完成')
    church_name = church["name"]
    fy_ys[church_name] = church_js

def write_data():
    with open('SJ_JSON/福音影视.json', 'w', encoding='utf-8') as f:
        f.write(f'{fy_ys}')
    for title, value in fy_ys.items():
        with open(f'IPTV_M3U/{title}.m3u', 'w', encoding='utf-8') as f:
            f.write('#EXTM3U x-tvg-url=http://epg.51zmt.top:8000/cc.xml,http://epg.51zmt.top:8000/difang.xml\n\n')
            for group, _value in value.items():
                for name, url in _value.items():
                    f.write(f'#EXTINF:-1 tvg-logo="https://badboy518714.github.io/TV/IPTV_LOGO/index.png" group-title="{group}",{name}\n')
                    f.write(f'{url}\n')
            f.close()

def fyys_zr():
    church_info = get_church()
    pool_1 = ThreadPoolExecutor(9)
    for church in church_info:
        pool_1.submit(get_church_all_url, church)
    pool_1.shutdown()
    write_data()
    print('----------结束------------')


def check_change(church):
    global fy_ys
    church_id, church_name = church["id"], church["name"]
    movie_info = get_movie(church_id)
    for movie in movie_info:
        movie_id, movie_title = movie['movid'], movie['title']
        if year in movie_title:
            change_movie = {}
            urlid_info = get_urlid(movie_id)
            demo = urlid_info[-3:][::-1]
            for info in demo:
                title = info["title"]
                if title in fy_ys[church_name][movie_title].keys():
                    break
                else:
                    urlid = info["urlid"]
                    change_movie[title] = get_m3u8_url(movie_id, urlid)
            if len(change_movie) > 0:
                print(change_movie)
                change_movie.update(fy_ys[church_name][movie_title])
                fy_ys[church_name][movie_title] = change_movie
                # print(fy_ys[church_name][movie_title])
        else:
            break


def update():
    global fy_ys
    with open('SJ_JSON/福音影视.json', 'r', encoding='utf-8') as f:
        old_js = f.read().replace("'", '"').replace('"s_', "'s_")
        fy_ys = json.loads(old_js)
        # print(fy_ys)

    church_info = get_church()
    pool = ThreadPoolExecutor(9)
    for church in church_info:
        check_change(church)
    pool.shutdown()
    write_data()



if __name__ == '__main__':
    # fyys_zr()
    update()
