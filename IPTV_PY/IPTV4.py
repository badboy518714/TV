

txt_list = ["央视频道.txt", "卫视频道.txt", "山东频道.txt", "黑龙江频道.txt", "新疆频道.txt", "少儿频道.txt", "体育频道.txt",
            "影视频道.txt", "电影轮播.txt", "春晚频道.txt", "其他频道.txt"]

def add_txt():
    txt_info_s = []
    for txt in txt_list:
        with open('IPTV_TXT/' + txt, 'r', encoding='utf-8') as f:
            txt_info = f.readlines()
        txt_info_s.append(txt_info)
        f.close()
    with open('IPTV_M3U/IPTV4.m3u', 'w', encoding='utf-8') as f:
        ext = '#EXTM3U x-tvg-url=http://epg.51zmt.top:8000/cc.xml,http://epg.51zmt.top:8000/difang.xml\n\n'
        f.write(ext)
        for txt_info in txt_info_s:
            for info in txt_info:
                f.write(info)
    f.close()

if __name__ == '__main__':
    add_txt()
