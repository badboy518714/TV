

var rule = {
            title: '杭州基督教会崇一堂',
            host: 'https://www.chongyitang.org',
            timeout:5000,
            url: '/category/c/fyclass?p=fypage',
            searchUrl: '',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {
						'User-Agent': "PC_UA",
						'Cookie': 'JSESSIONID=3CFB4D5B117591F7F2C30FE61BC1C881;m_read_a=|7659|7623|4144|7631|2701|2459|2453|1035|1019|1027|1030|1028|7658|7606|4082|4044|4081|3035|3025|7646|7256|2452|4105|4104' },//网站的请求头,完整支持所有的,常带ua和cookies
            class_url: '50&49&44',
    			 class_name: '聚会影音&每周敬拜歌曲&神学装备',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            filter_url: '',
            filter: {},
            filter_def:{},
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐:'',
            double: true, // 推荐内容是否双层定位
            一级:`js:
						var d = [];   
        			 let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						let items;
						let html; 
						if(MY_CATE == "44"){ input = input.replace("category/c", "category/s"); html = request(input);	items = pdfa(html, ".cy-article-list&&li");}
						else{ html = request(input);items = pdfa(html, "body&&.cy-articles&&article"); }
						print(items)
						for(let i = 0; i < items.length; i++){
							 let title_all = pd(items[i], "a&&title");
							 let title;
							 let info;
							 let desc;
							 if(MY_CATE == "50"){ info = title_all.split(" | ")[1].split("——");desc = info.length > 1 ? info.slice(0,info.length-1) : info; title = desc.join(""); desc = info[info.length - 1];}
						 	 else if(MY_CATE == "49"){ title = title_all.split("崇一堂")[0]; desc = "崇一堂主日崇拜";}
							 else if(MY_CATE == "44"){ title = pd(items[i], "a&&title"); desc = pdfh(items[i], ".cy-article-date&&Text").split("丨")[0];}
							 let index = ((MY_PAGE - 1)*20 + i + parseInt(MY_CATE)*14) % 25 + 1;
            			d.push({
                			title: title,
                			desc: desc,
                			pic_url: 'https://badboy518714.github.io/TV/IMGAGE/杭州教会/' + index +'.jpg',
                			url: pd(items[i], "a&&href"),
            			})
        			};
        			print(d)
        			setResult(d)
					  `,
            二级:`js:
						let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						let vod_title;
						let html = request(input);
						let article = pdfa(html, ".cy-article")[0];
						let vod_name;
						try{
							let info = pdfh(article, "h2&&Text").split(" | ")[1].split("——");
							let desc = info.length > 1 ? info.slice(0,info.length-1) : info;
							vod_name = desc.join(""); vod_title = info[info.length - 1];
						}catch(e){
							vod_title = pdfh(article, "h2&&Text");
							print(vod_title)
							vod_name = vod_title;
						}						
						VOD = {
							vod_id: '',
							vod_name: vod_name,
							vod_pic: '',
							type_name :pdfh(article, ".cy-article-info&&span:eq(0)&&Text").split(":")[1],
							vod_year: pdfh(article, ".cy-article-info&&span:eq(1)&&Text").split(":")[1],
							vod_area: '杭州基督教会崇一堂',
							vod_remarks: '',
							vod_actor: '',
							vod_director: pdfh(article, ".cy-article-info&&span:eq(2)&&Text").split(":")[1],
							vod_content: pdfh(article, "section&&Text")
						};
						let play_url = [];
						let vod_play_from = ["哈利路亚"];
						let len;
						let mp4_name;
						let mp4_lists =  pdfa(html, "video");
						let mp3_lists =  pdfa(html, "button");
						if(mp4_lists.length >= 3){
							try{ let mp4_names = html.match(/《([^》]*)》/gi); len = mp4_names.length; mp4_name = mp4_names.slice(len-3,len); print(len, mp4_name); 
								for(let i=0;i<mp4_name.length;i++){ mp4_name[i] = mp4_name[i].replace("《","").replace("》","");  }
								if(mp4_lists.length >= 2){ vod_play_from = vod_play_from.concat(mp4_name)}
							}catch(e){}
						}
						for(let i = 0; i < mp4_lists.length; i++){
							let name = "NO-" + (i+1).toString() + "^" + vod_title;
							let url =  pd(mp4_lists[i], "source&&src");  
							play_url.push(name + "$" + url)
						}
						for(let i = 0; i < mp3_lists.length; i++){
							let name = pdfh(mp3_lists[i], ".cy-file-name&&Text")
							let title =  name.split(".")[0];
							let id = pd(mp3_lists[i], "button&&data-src").match(/article\\/(\\d+)/)[1];  
							let url = "https://www.chongyitang.org/media/get/audio?id=" + id + "&name=" + name;
							play_url.push(name + "$" + url)
						}
						//print(len, vod_play_from)
						VOD['vod_play_from'] = vod_play_from.join("$$$");
						VOD['vod_play_url'] = mp4_lists.length < 2 ? play_url.join("#"): (play_url.join("#") + "$$$" + play_url.join("#")+ "$$$" + play_url.join("#")+  "$$$" + play_url.join("#"));
						//print(VOD)
						`,

            搜索:'*'
        }
