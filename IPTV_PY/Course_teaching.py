import requests
import json
import re


def get_learn_json():
    ALL_urls = {"student": [], "prepare": []}

    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache",
        "origin": "https://basic.smartedu.cn",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://basic.smartedu.cn/",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0"
    }
    url_su = {"student": "https://s-file-1.ykt.cbern.com.cn/zxx/ndrs/tags/national_lesson_tag.json",
              "prepare": "https://s-file-2.ykt.cbern.com.cn/zxx/ndrs/tags/k12.json"}
    url_host = {"student": "https://basic.smartedu.cn/syncClassroom?defaultTag=",
                "prepare": "https://basic.smartedu.cn/syncClassroom/prepare?defaultTag="}
    for cate, url in url_su.items():
        json_data = requests.get(url, headers=headers).json()
        json_data_1 = json_data["hierarchies"][0]["children"]
        for data_1 in json_data_1:  # 学段
            url_1 = url_host[cate] + data_1["tag_id"]
            json_data_2 = data_1["hierarchies"][0]["children"]
            for data_2 in json_data_2:  # 年级
                url_2 = url_1 + "/" + data_2["tag_id"]
                json_data_3 = data_2["hierarchies"][0]["children"]
                for data_3 in json_data_3:  # 学科
                    url_3 = url_2 + "/" + data_3["tag_id"]
                    # print(url_3)
                    json_data_4 = data_3["hierarchies"][0]["children"]
                    for data_4 in json_data_4:  # 版本
                        url_4 = url_3 + "/" + data_4["tag_id"]
                        try:
                            json_data_5 = data_4["hierarchies"][0]["children"]
                            for data_5 in json_data_5:  # 册数
                                url_5 = url_4 + "/" + data_5["tag_id"]
                                try:
                                    json_data_6 = data_5["hierarchies"][0]["children"]
                                    for data_6 in json_data_6:  # 新旧教材
                                        url_6 = url_5 + "/" + data_6["tag_id"]
                                        ALL_urls[cate].append(url_6)
                                except:
                                    ALL_urls[cate].append(url_5)
                        except:
                            ALL_urls[cate].append(url_4)

    return ALL_urls


def get_my_json():
    with open('LEARN_JSON/Course_teaching.json', 'r', encoding='utf-8') as f:
        my_json = json.loads(f.read())
        f.close()
        return my_json


def update_json():
    learn_json = get_learn_json()
    my_json = get_my_json()
    if learn_json == my_json:
        pass
    else:
        json_data = json.dumps(learn_json, indent=4)
        with open('LEARN_JSON/Course_teaching.json', 'w', encoding='utf-8') as f:
            f.write(json_data)
            f.close()
        print(json_data)


if __name__ == '__main__':
    update_json()

