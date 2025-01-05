var rule = {
            title: '抖音',
            host: 'https://www.douyin.com',
            timeout:5000,
            url: '/aweme/v1/web/aweme/post/fyclass/fypage',
            searchUrl: '',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {
    				"accept": "application/json, text/plain, */*",
    				"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    				"cache-control": "no-cache",
    				"pragma": "no-cache",
    				"priority": "u=1, i",
    				"Cookie": "sid_guard=c896aab6a18af06a47d0fa493eab1794%7C1732630319%7C5183998%7CSat%2C+25-Jan-2025+14%3A11%3A57+GMT",
    				//"referer": "https://www.douyin.com/user/MS4wLjABAAAAbqFXoTgxjePo_iKOq98QS8l9LxiS6lcF5Qgd75vtz_A?from_tab_name=main&vid=7434157039963671819",
    				"sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    				"sec-ch-ua-mobile": "?0",
    				"sec-ch-ua-platform": "\"Windows\"",
    				"sec-fetch-dest": "empty",
    				"sec-fetch-mode": "cors",
    				"sec-fetch-site": "same-origin",
    				"uifid": "c3109cf8eab4507640f022360c5ce002c7035d0857c7085fdeb180d1661fca19fd3d0021c5a06a557ca9bdda1438b744106d155ccdf12b0b1fbc9b8d03e65548fdb2310df64ff50056524e9ddcc2b4db2b7a401b2edcd76d6239ec996c1a1d31e6802c0d750650b182107aa6c184f9d4509818b88c621168dd40698a220123114029a990c971b7d1dd6a4693f6bede6bc849c59999413ad61fe60fe142eed083",
    				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0"
					},//网站的请求头,完整支持所有的,常带ua和cookies
            class_url:'yuyang&baba&mama&lingsao&ygcp&tzrj&yinyue&zjj1&zjj2&zjj3',
            class_name:'宇洋妈咪&顺顺利利&平安喜乐&玲嫂&雅歌唱谱&他在人间&音乐FM&俊杰英语思维&张俊杰讲英语&俊杰老师说英语',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            play_parse: true,
            lazy: `js:
						input = {
							jx: 0,
							url: input,
							parse: 0,
							header: JSON.stringify({
								'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
								'referer': 'https://www.douyin.com/'
							}),
						}
						`,		
            limit: 6,
            推荐:'',
            double: true, // 推荐内容是否双层定位
            一级: `js:
						function formatTimestamp(timestamp) {
  							let date = new Date(timestamp * 1000);
  							let year = date.getFullYear();
  							let month = (date.getMonth() + 1).toString().length === 1? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  							let day = date.getDate().toString().length === 1? '0' + date.getDate() : date.getDate();
							//print(year,month,day);
  							return year + '-' + month + '-' + day;
  						}

						let d = [];
						let res = {
    "yuyang": {
        "user_id": "MS4wLjABAAAAGSI4CpND-imME7kFze-1GgWSdN5MtKFDwDM4J5iL_do",
        "vid": "7453459270995168571",
        "a_bogus": "E64Vhq7jDo8jPdMbuKnUSSFlMZLMrBWyDliOWy/PtPO5TwMblYNPwxtcjxLN4wV73RBziKVHXV0AYEVcQUXzZe9kKmkDuOiy74V5VW0L0Z7dbBv21HW/eyTzzwsrU5Gq-/Vvi1j6/UeHgVxAhrQY/d5ee/ue5c8BM3xjkMTcP9sg10yAE3c-PBSdOXPnUn5j"
    },
	 "baba": {
        "user_id": "MS4wLjABAAAATlEPyuajXMAS_b6u-Y9QpwQzrqWa1VzG4JluaPpTi44",
        "vid": "7414345756969371186",
        "a_bogus": "dJs5gqX7D2/ned/GmOntSG/UxunlrPuyeFidSxlPSPFBTqeTTbNPkrt-bxKn4q/XrWBkioI7XVMMbxxcQ0XwZCHkKmkvSk4fJ45nV6soMZ7dYTk2rq6xeyTFuwBNU5GqaQ5Xi1yI/Uto6jnAiqQY/B5et/KFQRuBF3xRkMzcY9Bh10yAL3nlPptpNhNc0y2y"
    },
	 "mama": {
        "user_id": "MS4wLjABAAAAha4ztm2ZY-ASoAsopMh_4ILFEEMJXkx4aoceSIHHLdVzugpQlCozHM0nIjrFEw5k",
        "vid": "7283510882154384679",
        "a_bogus": "DfsRgHUjxp/5cd/GYOc4SrFlTqD/rPuycPT2bz/THNTzGZlGNbPFwraNGoKr4QCtr8B0iF17WVMlYExcO0XwZerpumpfSp4SJ4VIVUXoZZr3YPk2rH6Oe7uzwwsnUcTq-A54iIyIZUe9gnxAkHQE/pAtS/KK5c8BFZx6kMzbY9Bg106ALpcaPBtQOhiqCD=="
    },
    "lingsao": {
        "user_id": "MS4wLjABAAAAJnbi7Ub57bQ04WXH_vMrZ73eMEdNeSkeHplACTPLO-s",
        "vid": "7441043690971303227",
        "a_bogus": "xJ0Vkt7LOxRVed/tuOcXSyVlNHVANsWy2liOSFoTCOPRb1zORmNgwcCbcoLn4Tn7dWBsw9I7XV0/YDVcBGXzZKrkKmpkukwyLUV9I8vL0HpvYBJg3rW/eSzzLwsnURGq-55viAJ68Ueo6VVAiNQu/B-et/ue5RWBF1xykMTbN9s6Z0yAD1n1PdthiXGqof=="
    },
    "ygcp": {
        "user_id": "MS4wLjABAAAAbqFXoTgxjePo_iKOq98QS8l9LxiS6lcF5Qgd75vtz_A",
        "vid": "7434157039963671819",
        "a_bogus": "Q70RgHSympWRaVMSmKnH91FlLHjMrBSy/pi/SwdTSxPgYH0c3bNDwccMbxKZBWu3pWphwFI7dnlMYEVcMGU0Zq9pFmpfSNXSw4VVIUvL/1ifYtsBgNDqCgmzKwBrU54qeQ5XiA7IMUtqgfdAkNdg/B-ty/KFQcWBPpx6k2ubE9BhZFyAg1nlPBSQO7iqlj=="
    },
    "tzrj": {
        "user_id": "MS4wLjABAAAAs2dPz-VKwB5O-s8P0nJSgHJy54KgX4xK0x88RKKE0GuQwxLJH9pGVdmcyDV1DE36",
        "vid": "7414345756969371186",
        "a_bogus": "dX0RgzUJDZW5ed/SYKcUSnxUN9dlrTWyqqiQWwQPyPOuY1zOZWNgiccPnour4YC7LbpzwCI7WV0AbddcMzXwZqHpqmkfSkwbxT55Ihfo01ifbtsBgH6zS08zqwBn05sqaQV7iIJ6gUt9gfnAwrQY/QAeS/ue5bWBM1xbkZTbN9B61zgAg3c-PQGZPXsqsD=="
    },
	 "yinyue": {
        "user_id": "MS4wLjABAAAAK6BbxtLRn_wzhBjHsvaFKZi18QIxnOqbOwes0ZcFnnQmrOiUzghHTpGP2a53Ejwz",
        "vid": "7441554923608739112",
        "a_bogus": "mvsRgw7yYdWjadMt8KcXSCpUJgflrBuymBioSbMPyxFWThlbJmPMinSJnoox4potfupsi937lV0lYDncKUUsZerkLmpkuwkRntV5V8fLZqpkT4kgrHW/e7TFwwsN0Rsq-/Vti1j62UtqgVxAirQm/p-t7/uF5RSBFpxbkZzcE9s61F6ADZnHPdGgYwJqQj=="
    },
	 "zjj1": {
        "user_id": "MS4wLjABAAAAYYuyIrU_ZkM0qoRHcj2lYu_L6NH1SUT8j2fxmAU7TnY",
        "vid": "7446398397466135834",
        "a_bogus": "EX0fhFyLE2/jedFtuCn39R-UiCfArsWyk1idbHCTtOuwb7UO8YNikaSwnoKIsVWa7mpkhe1HpnUAbDVcPzXiZFnkwmpkSNXyHs5I98vL81NDYe4BgHWhe0WzKw0x0RGqeAVUiI7IhUeqgjVAhrd8/p5eH/uF5R8BP3OfkZTbT9s610LAg1c-PQGZTXGq6E=="
    },
	 "zjj2": {
        "user_id": "MS4wLjABAAAApYU9i5tnkp_gcBdIl1-5j1HEee2mU8X4qTXWJQDgSOr9jy0uvl1R5Jy2Be5jDR7v",
        "vid": "7446311231834688794",
        "a_bogus": "mXsVg7ULOqQbPdKbmOn39IPU6UxANPWy51iKSTNPtOKOYXza1bPThaGYaooIRxE7vWpwhH37snlAbdncMzU0ZFrpwmpDSuz6r4V99g8og1wDbeGBEq6se0UFowMN0RGqaQ5ti17IhUeqgfnAwrdm/Qlt9/ueQcWBBpOfk2YbE9sXZM6AD1n1PBSkYhpC0fdG"
    },
	 "zjj3": {
        "user_id": "MS4wLjABAAAAN10sHQ2dcd5iOv4uyPfVHjZzIC2ygEJJrOuV_haVcpw",
        "vid": "7446366143671029001",
        "a_bogus": "xy0VgwSExpQnedFSYOn7S7xldMxlNTSyONiKWn2THOuRYXtce8PshabOJoursD5778pwhC17UVMAbxncMGXsZq9pwmkDuTkyHs5I90moM1wvYtTBgq6we8Rzzw0N0bTqeQVtily68Ut96jVAhNdD/pleS/uCQ58BM3xjk2ucP9B6ZzgAgpc-PBbDOhPb0VnW"
    }
}
						let param = "https://www.douyin.com/aweme/v1/web/aweme/post"
						let author = 'lingsao'
						let param_0 = '?device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id='
						let param_1 = '&locate_query=false&show_live_replay_strategy=1&need_time_list=0&time_list_query=0&whale_cut_token=&cut_version=1&count=40&publish_video_strategy_type=2&from_user_page=1&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&version_code=290100&version_name=29.1.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Win32&browser_name=Edge&browser_version=131.0.0.0&browser_online=true&engine_name=Blink&engine_version=131.0.0.0&os_name=Windows&os_version=10&cpu_core_num=6&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7414345756969371186&uifid=c3109cf8eab4507640f022360c5ce002c7035d0857c7085fdeb180d1661fca19fd3d0021c5a06a557ca9bdda1438b744106d155ccdf12b0b1fbc9b8d03e65548fdb2310df64ff50056524e9ddcc2b4db2b7a401b2edcd76d6239ec996c1a1d31e6802c0d750650b182107aa6c184f9d4509818b88c621168dd40698a220123114029a990c971b7d1dd6a4693f6bede6bc849c59999413ad61fe60fe142eed083&msToken=5TPNo4arJklXGzWCciXGRjef-ywp0V66adPKTwdZEOZyamPsAw53d04wvHJY-szCoMhCEfh6o2nUiPiSlGlk1vH9tZBIBksGgje6pwc00UMc5B_cltiOCOPxT_Xea88NWgRKyH66RFM5TqPhTWJBhpL03gzcQ369DGP3iDPNpGxP&a_bogus='
						input = param + param_0 + res[MY_CATE]["user_id"] + '&max_cursor=' + '0' + '&locate_item_id=' +  res[MY_CATE]["vid"] + param_1 + res[MY_CATE]["a_bogus"]
						fetch_params.headers.referer =  'https://www.douyin.com/user/' + res[MY_CATE]["user_id"] + '?from_tab_name=main&vid=' + res[MY_CATE]["vid"] 
						let json_data = JSON.parse(request(input));
						let max_cursor = json_data["max_cursor"]
						if(MY_PAGE > 1){
							for(let i=0;i< MY_PAGE-1;i++){
								input = param + param_0 + res[MY_CATE]["user_id"] + '&max_cursor=' + max_cursor + '&locate_item_id=' +  res[MY_CATE]["vid"] + param_1 + res[MY_CATE]["a_bogus"]
								json_data = JSON.parse(request(input));
								max_cursor = json_data["max_cursor"]
							}
						}
						let items = json_data["aweme_list"];
						//print(items)
						items.forEach(function(it){
								var pic_url = "";
								try{
									pic_url = it["video"]["animated_cover"]["url_list"][0];
								}catch(error){
									pic_url = it["video"]["cover"]["url_list"][0];
								}
								var count = it["statistics"]["digg_count"].toString();
								var desc = '❤ ' + count;
								for(var i = 0; i < 10 - count.length; i++){
									desc += " ";
								}
								d.push({
									title: it["desc"],
									desc: desc + formatTimestamp(it["create_time"]),   
									pic_url:  pic_url,
									url: MY_CATE + '--' + it["video"]["play_addr"]["url_list"][0]
								})							
						})
						setResult(d)
						`,
            二级: `js:
						let res = {
							"yuyang": {"user_id": "MS4wLjABAAAAGSI4CpND-imME7kFze-1GgWSdN5MtKFDwDM4J5iL_do","vid": "7453459270995168571", "name": "宇洋妈咪"},
							"baba": {"user_id": "MS4wLjABAAAATlEPyuajXMAS_b6u-Y9QpwQzrqWa1VzG4JluaPpTi44","vid": "7414345756969371186", "name": "顺顺利利"},
							"mama": {"user_id": "MS4wLjABAAAAha4ztm2ZY-ASoAsopMh_4ILFEEMJXkx4aoceSIHHLdVzugpQlCozHM0nIjrFEw5k","vid": "7283510882154384679", "name": "平安喜乐"},
							"lingsao": {"user_id": "MS4wLjABAAAAJnbi7Ub57bQ04WXH_vMrZ73eMEdNeSkeHplACTPLO-s","vid": "7441043690971303227", "name": "玲嫂"},
    						"ygcp": {"user_id": "MS4wLjABAAAAbqFXoTgxjePo_iKOq98QS8l9LxiS6lcF5Qgd75vtz_A","vid": "7434157039963671819", "name": "雅歌唱谱"},
    						"tzrj": {"user_id": "MS4wLjABAAAAs2dPz-VKwB5O-s8P0nJSgHJy54KgX4xK0x88RKKE0GuQwxLJH9pGVdmcyDV1DE36","vid": "7414345756969371186", "name": "他在人间"},
							"yinyue": {"user_id": "MS4wLjABAAAAK6BbxtLRn_wzhBjHsvaFKZi18QIxnOqbOwes0ZcFnnQmrOiUzghHTpGP2a53Ejwz","vid": "7441554923608739112", "name": "音乐FM"},
							 "zjj1": {"user_id": "MS4wLjABAAAAYYuyIrU_ZkM0qoRHcj2lYu_L6NH1SUT8j2fxmAU7TnY","vid": "7446398397466135834", "name": "俊杰英语思维"},
							 "zjj2": {"user_id": "MS4wLjABAAAApYU9i5tnkp_gcBdIl1-5j1HEee2mU8X4qTXWJQDgSOr9jy0uvl1R5Jy2Be5jDR7v","vid": "7446311231834688794", "name": "张俊杰讲英语"},
							 "zjj3": {"user_id": "MS4wLjABAAAAN10sHQ2dcd5iOv4uyPfVHjZzIC2ygEJJrOuV_haVcpw","vid": "7446366143671029001", "name": "俊杰老师说英语"}							
						}
						let sss = input.split('--')
						//print("11111111111111111111111111")
						fetch_params.headers = { "user-agent": PC_UA, "Cookie": "sid_guard=c896aab6a18af06a47d0fa493eab1794%7C1732630319%7C5183998%7CSat%2C+25-Jan-2025+14%3A11%3A57+GMT;s_v_web_id=verify_m3yjc5l0_eb4c03b4_b8c7_01b3_3444_9cf6a9cac542;__ac_nonce=06745d72b00dc84053f53;__ac_signature=_02B4Z6wo00f01-lgdnQAAIDD3kSyKBWGj-PpQHLAAJ0n45"}
						//let url = 'https://www.douyin.com/user/MS4wLjABAAAAJnbi7Ub57bQ04WXH_vMrZ73eMEdNeSkeHplACTPLO-s?from_tab_name=main&vid=7441411917773606201'
						let url = 'https://www.douyin.com/user/' + res[sss[0]]["user_id"] + '?from_tab_name=main&vid=' + res[sss[0]]["vid"]
						let director = ''
						let content = ''
						try{
							let html = request(url);
							let info = '{' + html.match(/\\\\"shortId\\\\(.*)customVerify/g)[1].replace(/\\\\"/g, '"').replace(',"customVerify', '').replace(/\\\\\\\\n/g, '💢') + '}';
							info = JSON.parse(info);
							director = info["realName"] + '❤抖音号: ' + info["uniqueId"];
							content = info["desc"];
						}catch(error){
							director =res[sss[0]]["name"];
						}
						
						VOD = {
							vod_id: '',
							vod_name: '',
							vod_pic: '',
							type_name: '',
							vod_year: '',
							vod_area: '大陆',
							vod_remarks: '',
							vod_actor: '',
							vod_director: director,
							vod_content: content
						};
						//print(VOD)
						VOD.vod_play_from = '抖音专线$$$';
						VOD.vod_play_url = res[sss[0]]["name"] + '$' + sss[1];
						`,
            搜索:'*'
        }
