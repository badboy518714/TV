


var rule = {
            title: '中小学智慧教育平台_课程教学',
            host: 'https://basic.smartedu.cn',
				  //HOST="https://jgtq.000104gg.xyz"
            timeout:5000,
            url: '/syncClassroom/fyclass?defaultTag=fyfilter',
            searchUrl: '/search/**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 1,//是否启用分类筛选,
            headers: {
    				"Cookie": "_abfpc=dab37987e2bdeee6fd0b050003bad2a5868f8395_2.0; cna=35e595d40554eae967ee33e660aad66d; sdp-fp=7dbc2dcdea9ae42b34863203414d0540; speakVolume=100; readStatus=pointRead; batchReadIsOn=false; guidesStatus=off; highContrastMode=defaltMode; cursorStatus=off; magnifierIsOn=false; readZoom=1; percentStatus=100; PointReadIsOn=false; fontZoom=1; speakFunctionIsOn=true; textModeStatus=off; speakSpeed=0; readScreen=false; esdElderlyStatus=off; wzaIsOn=false; UC_SSO_TGC-e5649925-441d-4a53-b525-51a2f1c4e0a8-product=58d0af37-6506-4e8c-b471-41d5e1886cc9; lf=1736427715524; UC_TOKEN-e5649925-441d-4a53-b525-51a2f1c4e0a8-ncet-xedu=eyJzb3VyY2VfdG9rZW5fYWNjb3VudF90eXBlIjoicGVyc29uIiwic2VydmVyX3RpbWUiOiIyMDI1LTAxLTA5VDIxOjAyOjAwLjg1NCswODAwIiwiYWNjb3VudF90eXBlIjoib3JnIiwibWFjX2tleSI6IkY1azgzSlRQS0ciLCJtYWNfYWxnb3JpdGhtIjoiaG1hYy1zaGEtMjU2IiwiYWNjZXNzX3Rva2VuIjoiN0Y5MzhCMjA1Rjg3NkZDM0M3NTUwMDgxRjExNEExQTQ0NEI4RDY2RDEzQUY0NjU2MTg3RDRFQjdGOTQ5MThGRTdFNjUzQkM3NkU0Rjc1OEVFNUFEOTM2QTI4NkQ0OTkwRTkzQjlCNUMzOUFCRUFBNiIsInJlZnJlc2hfdG9rZW4iOiI3RjkzOEIyMDVGODc2RkMzQzc1NTAwODFGMTE0QTFBNDQ0QjhENjZEMTNBRjQ2NTY2OTlEQUM5MEQ2OEQ0MzJEMzQzNzMwQTY4NkUxQjZBRDMxMjFCOUM1QThCRDQ3QjkyRkEwOUQyRTYxNEEwNTc3OEZFRjgwNThGQ0VDRkJDRjlDOTZDMjMxMTQ3RDBBQkJERjY4NDgzQzkxMzczOTBEQUZBRjEwOEU0QkIxMDYxNTM4OTlEQjJBREMwMUUzMTY0OTkwMERBNTc3RUJBNzZEOUVENjc4Q0FGNzRBNDk3RDgzM0YzOTk0QTMyQ0ZBQkRDQTcxQzZFQjY0NDk1N0I5NjE3ODlCRTQ3NUI2NEU3RTdEOTRGMkEzMkJDNjFFMENDOUJEODk1MUU2QzkzNzMyRTJGNDI2QzhGMzkzMzBENzkzMjM5ODQ0REIwODdGOUEiLCJhY2NvdW50X2lkIjoiMCIsImV4cGlyZXNfYXQiOiIyMDI1LTAxLTE2VDIxOjAxOjU0LjI0NSswODAwIiwidXNlcl9pZCI6IjQ1MjgwMDMzMTE3NCIsImZpcnN0X2NyZWF0ZV90aW1lIjoxNzM2NDI3NzE0MjQ1LCJhdXRoX3ZlcmlmeV90eXBlcyI6WyJQQVNTV09SRCJdLCJyZWdpb24iOiJ3eCIsImRpZmYiOjUwN30=; X-EDU-WEB-ROLE=452800331174:GUARDIAN",
    				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0"
					},//网站的请求头,完整支持所有的,常带ua和cookies
            class_url:'student&prepare',
    			class_name:'学生自主学习&教师备课授课',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            filter_url: '{{fl.Semester_Term}}/{{fl.Grade}}/{{fl.Discipline}}/{{fl.Version}}/{{fl.Number_of_Volumes}}/{{fl.Old_New}}',// 学段—年级-学科-版本-册数-新旧
            filter: {"student": [
    {"key": "Semester_Term", "name": "学段",
     "value": [{'n': '全部', 'v': ''}, {'n': '小学', 'v': 'e7bbb2de-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '初中', 'v': 'e7bbce2c-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '小学（五•四学制）',
                'v': '44beb9aa-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '初中（五•四学制）',
                'v': '44beb932-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '高中', 'v': 'e7bbcefe-0590-11ed-9c79-92fc3b3249d5'}]},
    {"key": "Grade", "name": "年级",
     "value": [{'n': '全部', 'v': ''}, {'n': '一年级', 'v': 'e7bbd296-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '二年级', 'v': 'e7bbd304-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '三年级', 'v': 'e7bbd372-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '四年级', 'v': 'e7bbd3ea-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '五年级', 'v': 'e7bbebc8-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '六年级', 'v': 'e7bbecae-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '一至二年级', 'v': '44bebf40-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '三至四年级', 'v': '44bec026-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '五至六年级', 'v': '44bec602-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '七年级', 'v': '44bebf7c-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '八年级', 'v': '44bec67a-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '九年级', 'v': '44bec0c6-54e6-11ed-9c34-850ba61fa9f4'}]},
    {"key": "Discipline", "name": "学科",
     "value": [{'n': '全部', 'v': ''}, {'n': '语文', 'v': '6a749654-0772-11ed-ac74-092ab92074e6'},
               {'n': '数学', 'v': 'e7bbcf80-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '英语', 'v': '6a7495dc-0772-11ed-ac74-092ab92074e6'},
               {'n': '物理', 'v': 'e7bbcfee-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '化学', 'v': 'e7bbd05c-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '生物学', 'v': '44bebcde-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '历史', 'v': '6a7481aa-0772-11ed-ac74-092ab92074e6'},
               {'n': '地理', 'v': '6a748448-0772-11ed-ac74-092ab92074e6'},
               {'n': '道德与法治',
                'v': '6a74973a-0772-11ed-ac74-092ab92074e6'},
               {'n': '思想政治', 'v': '6a748f2e-0772-11ed-ac74-092ab92074e6'},
               {'n': '语文·书法练习指导',
                'v': '44bebe1e-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '科学', 'v': '6a749230-0772-11ed-ac74-092ab92074e6'},
               {'n': '艺术·音乐', 'v': '6a7497b2-0772-11ed-ac74-092ab92074e6'},
               {'n': '艺术·美术', 'v': '6a749398-0772-11ed-ac74-092ab92074e6'},
               {'n': '艺术·舞蹈/影视/戏剧',
                'v': '6a74947e-0772-11ed-ac74-092ab92074e6'},
               {'n': '信息技术', 'v': '6a747f2a-0772-11ed-ac74-092ab92074e6'},
               {'n': '通用技术',
                'v': '6a7496c2-0772-11ed-ac74-092ab92074e6'},
               {'n': '体育与健康',
                'v': '6a747e26-0772-11ed-ac74-092ab92074e6'},
               {'n': '劳动与技术', 'v': '5036342961'}
               ]},
    {"key": "Version", "name": "版本",
     "value": [{'n': '全部', 'v': ''}, {'n': '统编版', 'v': '44bee8bc-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '人教版', 'v': 'ff8080814371757b01437c363a187b0a'},
               {'n': '冀教版', 'v': '362880034941a3a1014955bdd8d22d4a'},
               {'n': '北京版', 'v': 'ff808081439f924c0143a40bfce722d4'},
               {'n': '北师大版', 'v': 'e7bbd21e-0590-11ed-9c79-92fc3b3249d5'},
               {'n': '苏教版', 'v': '3628801954e758f0015509b2a8660c83'}, {'n': '西南大学版', 'v': '502036371480'},
               {'n': '青岛版', 'v': '8ae7e58c5cab1e02015cafac360702c4'},
               {'n': '人教版（一年级起点）（主编：吴欣）', 'v': '44bece04-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '人教鄂教版', 'v': '44bed098-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '冀人版', 'v': '362880034941a3a1014955e02fcd2fbc'},
               {'n': '教科版', 'v': '36288019491df525014935b7c67e15e2'},
               {'n': '湘科版', 'v': '362880034a131b98014a14358cc6025e'},
               {'n': '粤教科技版', 'v': '44bee830-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '大象社版', 'v': '44bedd4a-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '人音版（主编：敬谱）', 'v': '44bed3a4-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '人音版（主编：吴斌）', 'v': '5036344078'},
               {'n': '苏少版', 'v': '3628801954e758f0015509afdb500c7f'},
               {'n': '西南师大版', 'v': '362880034a50be84014a51c02d7d005c'},
               {'n': '辽海版', 'v': '36288019491df52501492b9704f5044a'},
               {'n': '湘文艺版', 'v': '44bee4f2-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '粤教花城版', 'v': '44bee876-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '沪教版', 'v': '362880194a9ec684014a9f0dfa190056'},
               {'n': '人美版（主编：杨力）', 'v': '44bed2aa-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '冀美版', 'v': '44bed78c-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '赣美版', 'v': '44beeb14-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '湘美版', 'v': '44bee56a-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '科学社版', 'v': '44bee5e2-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '苏科版', 'v': '362880034bfbfa20014c0b98acd70152'},
               {'n': '人教版（PEP）（主编：吴欣）', 'v': '44becd82-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '冀教版（三年级起点）', 'v': '44bed70a-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '外研社版（主编：陈琳）', 'v': '44bedcfa-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '川教版', 'v': '3628800349568d6801495ab43f3f125e'},
               {'n': '教科版（EEC学院）', 'v': '44bedeb2-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '科普版', 'v': '44bee664-54e6-11ed-9c34-850ba61fa9f4'}, {'n': '鲁教湘教版', 'v': '5036343066'},
               {'n': '湘少版', 'v': '44bee484-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '译林版三年级起点', 'v': '502036371564'},
               {'n': '陕旅版', 'v': '44beec72-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '人教版（精通）（主编：苗兴伟）', 'v': '12dc75c0-2724-47a9-b556-209d442aafe1'},
               {'n': '闽教版', 'v': '362880184a1b671a014a3d90218b1156'},
               {'n': '粤教粤人版', 'v': '44bee7f4-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '人教大同版', 'v': 'fa195512-988f-45c7-b707-d6b6f8e530e2'},
               {'n': '外研社版（主编：孙有中）', 'v': '8423c2ea-d9eb-4b8e-ad39-1bf23b3c2cf7'},
               {'n': '粤教版', 'v': '362880194cf07665014cfed020e403d9'},
               {'n': '湘教版', 'v': '362880034937650a0149410b4ca626f9'},
               {'n': '沪科技版', 'v': '44bee222-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '华东师大版', 'v': '362880194a9ec684014a9f1d2af50073'},
               {'n': '外研社版', 'v': '44bedbe2-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '译林版', 'v': '44beead8-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '沪外教版', 'v': '44bee0ec-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '冀少版', 'v': '44bed598-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '济南版', 'v': '44bee38a-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '中图版（主编：王民）', 'v': '44bec8dc-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '晋教版', 'v': '44bedfb6-54e6-11ed-9c34-850ba61fa9f4'}, {'n': '地质社版', 'v': '502036371476'},
               {'n': '北师大版（主编：郭玉英）', 'v': '44bed9b2-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '北师大版（主编：闫金铎）', 'v': '44beda34-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '沪科技粤教版', 'v': '44bee2d6-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '科学粤教版', 'v': '44bee628-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '沪少版', 'v': '44bee128-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '牛津上海版', 'v': '362880194a9ec684014a9f2adb6f008d'},
               {'n': '鲁科版', 'v': '362880194964b314014964bf4ae60085'}, {'n': '人教A版', 'v': '5036342963'},
               {'n': '新世纪版', 'v': '36288019573ca3980157417c5872020a'}, {'n': '浙科版', 'v': '502036371558'},
               {'n': '人音版', 'v': '5036342964'}, {'n': '人美版', 'v': '44bed1a6-54e6-11ed-9c34-850ba61fa9f4'},
               {'n': '鲁美版', 'v': '502036371559'}, {'n': '人教中图版', 'v': '5036342965'},
               {'n': '豫科版', 'v': '502036371600'}]},
    {"key": "Number_of_Volumes", "name": "册数",
     "value": [{'n': '全部', 'v': ''}, {'n': '上册', 'v': 'ff8080814371757b014390f883db0453'},
               {'n': '下册', 'v': 'ff8080814371757b014390fcdce504bd'},
               {'n': '全一册', 'v': '8ae7e58b77b3bac901783dd80dee0c44'},
               {'n': '水平一', 'v': '502036372038'},
               {'n': '水平二', 'v': '502036372039'},
               {'n': '水平三', 'v': '502036372040'},
               {'n': '全一册（下）', 'v': '5036342970'},
               {'n': '全一册（上）', 'v': '5036342969'}, {'n': '舞蹈上册',
                                                        'v': '84f17d23-3a87-478f-b823-e122a9e5be70'},
               {'n': '戏剧上册',
                'v': 'b81b4afe-7690-4d22-a1be-c2253bead10b'},
               {'n': '影视上册',
                'v': 'ef0ef714-adc6-447e-b84b-fd4d048d5079'},
               {'n': '必修 上册',
                'v': 'eae5dc6a-147b-11ed-ab76-54d6327ace99'},
               {'n': '必修 下册',
                'v': '8ae7e58b74dd6f1a01750b71fb3900a3'},
               {'n': '选择性必修 上册',
                'v': 'eae5f7b8-147b-11ed-ab76-54d6327ace99'},
               {'n': '选择性必修 中册',
                'v': 'eae5f88a-147b-11ed-ab76-54d6327ace99'},
               {'n': '选择性必修 下册',
                'v': '8ae7e58b77b3bac901781548699901fb'},
               {'n': '必修 第一册', 'v': '5036342972'},
               {'n': '必修 第二册', 'v': '5036342973'},
               {'n': '选择性必修 第一册', 'v': '5036342974'},
               {'n': '选择性必修 第二册', 'v': '5036342982'},
               {'n': '选择性必修 第三册', 'v': '5036344062'},
               {'n': '必修 第三册', 'v': '5036342977'},
               {'n': '选择性必修 第四册',
                'v': 'ff8080817b0a8395017b0adfdf920002'},
               {'n': '高二上册',
                'v': 'E8F3D102-B498-65AA-3262-9D29F0A100A4'},
               {'n': '高二下册',
                'v': 'E157C221-104D-C2FA-C5CD-0A44EDD54B30'},
               {'n': '必修一', 'v': 'ff8080814371757b014381869b9b2a81'},
               {'n': '必修二', 'v': 'ff8080814371757b014385028d3636e3'},
               {'n': '必修三', 'v': 'ff8080814371757b0143818f749b2b31'},
               {'n': '高三下', 'v': '5036342971'},
               {'n': '必修1 中国特色社会主义', 'v': '5036342986'},
               {'n': '必修2 经济与社会', 'v': '5036342987'},
               {'n': '必修3 政治与法治', 'v': '5036342988'},
               {'n': '必修4 哲学与文化', 'v': '5036342989'},
               {'n': '选择性必修1 当代国际政治与经济',
                'v': '502036371485'},
               {'n': '选择性必修2 法律与生活', 'v': '502036371486'},
               {'n': '选择性必修3 逻辑与思维', 'v': '502036371487'},
               {'n': '高三上', 'v': '5036342980'},
               {'n': '选择性必修1 化学反应原理', 'v': '5036343004'},
               {'n': '选择性必修2 物质结构与性质', 'v': '5036343005'},
               {'n': '选择性必修3 有机化学基础', 'v': '5036343006'},
               {'n': '必修1 分子与细胞', 'v': '5036342995'},
               {'n': '必修2 遗传与进化', 'v': '5036342996'},
               {'n': '选择性必修1 稳态与调节', 'v': '5036342997'},
               {'n': '选择性必修2 生物与环境', 'v': '5036342998'},
               {'n': '选择性必修3 生物技术与工程',
                'v': '8ae7e58b77b3bac90178159e630a0423'},
               {'n': '必修 中外历史纲要（上）', 'v': '5036342990'},
               {'n': '必修 中外历史纲要（下）', 'v': '5036342991'},
               {'n': '选择性必修1 国家制度与社会治理',
                'v': '5036342992'},
               {'n': '选择性必修2 经济与社会生活', 'v': '502036371481'},
               {'n': '选择性必修3 文化交流与传播', 'v': '502036371482'},
               {'n': '选择性必修1 自然地理基础', 'v': '5036342993'},
               {'n': '选择性必修2 区域发展',
                'v': 'eae5f182-147b-11ed-ab76-54d6327ace99'},
               {'n': '选择性必修3 资源、环境与国家安全',
                'v': '8ae7e58b77b3bac9017815b1a1870483'},
               {'n': '必修1 音乐鉴赏', 'v': '5036343009'},
               {'n': '必修2 歌唱', 'v': '5036343010'},
               {'n': '必修4 音乐编创', 'v': '5036343452'},
               {'n': '必修3 演奏', 'v': '5036344059'},
               {'n': '必修5 音乐与舞蹈', 'v': '5036344058'},
               {'n': '必修6 音乐与戏剧', 'v': '5036344060'},
               {'n': '选择性必修1 合唱', 'v': '502036371460'},
               {'n': '选择性必修2 合奏', 'v': '502036371462'},
               {'n': '选择性必修3 舞蹈表演', 'v': '502036371461'},
               {'n': '选择性必修4 戏剧表演', 'v': '502036371454'},
               {'n': '选择性必修5 音乐基础理论', 'v': '502036371448'},
               {'n': '选择性必修6 视唱练耳', 'v': '502036371459'},
               {'n': '必修 美术鉴赏', 'v': '5036342999'},
               {'n': '选择性必修1 绘画', 'v': '5036343001'},
               {'n': '选择性必修2 中国书画', 'v': '5036343000'},
               {'n': '选择性必修5 工艺', 'v': '5036343002'},
               {'n': '选择性必修6 现代媒体艺术', 'v': '5036343003'},
               {'n': '选择性必修3 雕塑', 'v': '5036344037'},
               {'n': '选择性必修4 设计', 'v': '5036344038'},
               {'n': '必修 全一册', 'v': '502036371447'},
               {'n': '必修1 数据与计算', 'v': '5036343011'},
               {'n': '必修2 信息系统与社会',
                'v': '8ae7e58b6e16b80f016f64e2e89e0846'},
               {'n': '选择性必修1 数据与数据结构', 'v': '5036344035'},
               {'n': '选择性必修4 人工智能初步', 'v': '5036344033'},
               {'n': '必修 技术与设计1', 'v': '5036343012'},
               {'n': '选择性必修5 服装及其设计', 'v': '5036344055'},
               {'n': '必修 技术与设计2',
                'v': 'ff8080814371757b014385f4bb5a3ef3'},
               {'n': '选择性必修1 电子控制技术',
                'v': '362880184a1b671a014a1f9486b701cf'},
               {'n': '选择性必修2 机器人设计与制作', 'v': '5036344053'},
               {'n': '选择性必修3 工程设计基础', 'v': '5036344050'},
               {'n': '选择性必修4 现代家政技术', 'v': '5036344046'},
               {'n': '选择性必修6 智能家居应用设计', 'v': '5036344051'},
               {'n': '选择性必修7 职业技术基础', 'v': '5036344056'},
               {'n': '选择性必修8 技术与职业探索', 'v': '5036344054'},
               {'n': '选择性必修9 创造力开发与技术发明',
                'v': '5036344052'},
               {'n': '选择性必修10 科技人文融合创新专题',
                'v': '5036344048'},
               {'n': '选择性必修11 产品三维设计与制造',
                'v': '5036344075'},
               {'n': '必修1 艺术与生活', 'v': '502036371455'}]},
    {"key": "Old_New", "name": "新旧教材",
     "value": [{'n': '全部', 'v': ''}, {'n': '新教材', 'v': '5136342961'}, {'n': '旧教材', 'v': '5136342960'}]}],
    "prepare": [
        {"key": "Semester_Term", "name": "学段",
         "value": [{'n': '全部', 'v': ''}, {'n': '小学', 'v': 'e7bbb2de-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '初中', 'v': 'e7bbce2c-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '小学（五•四学制）',
                    'v': '44beb9aa-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '初中（五•四学制）',
                    'v': '44beb932-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '高中',
                    'v': 'e7bbcefe-0590-11ed-9c79-92fc3b3249d5'}]},
        {"key": "Grade", "name": "年级",
         "value": [{'n': '全部', 'v': ''}, {'n': '一年级', 'v': 'e7bbd296-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '二年级', 'v': 'e7bbd304-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '三年级', 'v': 'e7bbd372-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '四年级', 'v': 'e7bbd3ea-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '五年级', 'v': 'e7bbebc8-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '六年级', 'v': 'e7bbecae-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '七年级', 'v': '44bebf7c-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '八年级', 'v': '44bec67a-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '九年级', 'v': '44bec0c6-54e6-11ed-9c34-850ba61fa9f4'}]},
        {"key": "Discipline", "name": "学科",
         "value": [{'n': '全部', 'v': ''}, {'n': '语文', 'v': '6a749654-0772-11ed-ac74-092ab92074e6'},
                   {'n': '数学', 'v': 'e7bbcf80-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '英语', 'v': '6a7495dc-0772-11ed-ac74-092ab92074e6'},
                   {'n': '物理', 'v': 'e7bbcfee-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '化学', 'v': 'e7bbd05c-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '生物学', 'v': '44bebcde-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '历史', 'v': '6a7481aa-0772-11ed-ac74-092ab92074e6'},
                   {'n': '地理', 'v': '6a748448-0772-11ed-ac74-092ab92074e6'},
                   {'n': '道德与法治',
                    'v': '6a74973a-0772-11ed-ac74-092ab92074e6'},
                   {'n': '思想政治', 'v': '6a748f2e-0772-11ed-ac74-092ab92074e6'},
                   {'n': '语文·书法练习指导',
                    'v': '44bebe1e-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '科学', 'v': '6a749230-0772-11ed-ac74-092ab92074e6'},
                   {'n': '艺术·音乐',
                    'v': '6a7497b2-0772-11ed-ac74-092ab92074e6'},
                   {'n': '艺术·美术',
                    'v': '6a749398-0772-11ed-ac74-092ab92074e6'},
                   {'n': '艺术·舞蹈/影视/戏剧',
                    'v': '6a74947e-0772-11ed-ac74-092ab92074e6'},
                   {'n': '信息技术', 'v': '6a747f2a-0772-11ed-ac74-092ab92074e6'},
                   {'n': '通用技术',
                    'v': '6a7496c2-0772-11ed-ac74-092ab92074e6'},
                   {'n': '体育与健康',
                    'v': '6a747e26-0772-11ed-ac74-092ab92074e6'},
                   {'n': '劳动与技术', 'v': '5036342961'}
                   ]},
        {"key": "Version", "name": "版本",
         "value": [{'n': '全部', 'v': ''}, {'n': '统编版', 'v': '44bee8bc-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '人教版', 'v': 'ff8080814371757b01437c363a187b0a'},
                   {'n': '冀教版', 'v': '362880034941a3a1014955bdd8d22d4a'},
                   {'n': '北京版', 'v': 'ff808081439f924c0143a40bfce722d4'},
                   {'n': '北师大版', 'v': 'e7bbd21e-0590-11ed-9c79-92fc3b3249d5'},
                   {'n': '苏教版', 'v': '3628801954e758f0015509b2a8660c83'}, {'n': '西南大学版', 'v': '502036371480'},
                   {'n': '青岛版', 'v': '8ae7e58c5cab1e02015cafac360702c4'},
                   {'n': '人教版（PEP）（主编：吴欣）', 'v': '44becd82-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '人教版（一年级起点）（主编：吴欣）', 'v': '44bece04-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '人教版（精通）（主编：郝建平）', 'v': '502036371562'},
                   {'n': '冀教版（一年级起点）', 'v': '44bed688-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '冀教版（三年级起点）', 'v': '44bed70a-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '外研社版（一年级起点）（主编：陈琳）', 'v': '44bedc1e-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '外研社版（主编：刘兆义）', 'v': '44bedc64-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '外研社版（主编：桂诗春）', 'v': '44bedcaa-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '外研社版（主编：陈琳）', 'v': '44bedcfa-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '教科版（EEC学院）', 'v': '44bedeb2-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '人教版（精通）（主编：苗兴伟）', 'v': '12dc75c0-2724-47a9-b556-209d442aafe1'},
                   {'n': '川教版', 'v': '3628800349568d6801495ab43f3f125e'},
                   {'n': '人教大同版', 'v': 'fa195512-988f-45c7-b707-d6b6f8e530e2'},
                   {'n': '教科版（主编：龚亚夫&鲁宗干）', 'v': '44bedeee-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '沪教版', 'v': '362880194a9ec684014a9f0dfa190056'},
                   {'n': '清华大学版', 'v': '36288018491df55b01492cc5a4d923c0'},
                   {'n': '湘少版', 'v': '44bee484-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '科普版', 'v': '44bee664-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '粤教粤人版', 'v': '44bee7f4-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '译林版三年级起点', 'v': '502036371564'}, {'n': '辽宁师大版', 'v': '502036371478'},
                   {'n': '鄂教版三年级起点', 'v': '502036371635'},
                   {'n': '重庆大学版', 'v': '3628801849178da701491b93aeef01d1'},
                   {'n': '闽教版', 'v': '362880184a1b671a014a3d90218b1156'},
                   {'n': '陕旅版', 'v': '44beec72-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '鲁教湘教版', 'v': '5036343066'},
                   {'n': '接力版', 'v': '502036371633'},
                   {'n': '外研社版（主编：孙有中）', 'v': '8423c2ea-d9eb-4b8e-ad39-1bf23b3c2cf7'},
                   {'n': '人教鄂教版', 'v': '44bed098-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '冀人版', 'v': '362880034941a3a1014955e02fcd2fbc'},
                   {'n': '大象社版', 'v': '44bedd4a-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '教科版', 'v': '36288019491df525014935b7c67e15e2'},
                   {'n': '湘科版', 'v': '362880034a131b98014a14358cc6025e'},
                   {'n': '粤教科技版', 'v': '44bee830-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '人音版（主编：敬谱）', 'v': '44bed3a4-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '人音版（主编：吴斌）', 'v': '5036344078'},
                   {'n': '冀少版', 'v': '44bed598-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '接力社版', 'v': '44bede30-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '湘文艺版', 'v': '44bee4f2-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '粤教花城版', 'v': '44bee876-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '苏少版', 'v': '3628801954e758f0015509afdb500c7f'},
                   {'n': '西南师大版', 'v': '362880034a50be84014a51c02d7d005c'},
                   {'n': '辽海版', 'v': '36288019491df52501492b9704f5044a'},
                   {'n': '人美版（主编：常锐伦&欧京海）', 'v': '44bed228-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '人美版（主编：杨力）', 'v': '44bed2aa-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '冀美版', 'v': '44bed78c-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '岭南美版', 'v': '44bedd90-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '桂美版', 'v': '44bee038-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '浙人美版', 'v': '44bee3c6-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '湘美版', 'v': '44bee56a-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '赣美版', 'v': '44beeb14-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '科学社版', 'v': '44bee5e2-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '鄂教版', 'v': '3628801849614b94014963fbed910bf7'},
                   {'n': '人美版', 'v': '44bed1a6-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '华文社版', 'v': '44bedaf2-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '晋人版', 'v': '44bedf70-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '沪科教版', 'v': '362880194a9ec684014a9ee2aa91000c'},
                   {'n': '粤教版', 'v': '362880194cf07665014cfed020e403d9'},
                   {'n': '西泠印社版', 'v': '44beea60-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '苏科版', 'v': '362880034bfbfa20014c0b98acd70152'},
                   {'n': '华东师大版', 'v': '362880194a9ec684014a9f1d2af50073'},
                   {'n': '沪科技版', 'v': '44bee222-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '浙教版', 'v': '362880034937650a014940b6762624c4'},
                   {'n': '湘教版', 'v': '362880034937650a0149410b4ca626f9'},
                   {'n': '外研社版', 'v': '44bedbe2-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '沪外教版', 'v': '44bee0ec-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '译林版', 'v': '44beead8-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '北师大版（主编：郭玉英）', 'v': '44bed9b2-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '北师大版（主编：闫金铎）', 'v': '44beda34-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '沪科技粤教版', 'v': '44bee2d6-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '科学粤教版', 'v': '44bee628-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '鲁教版', 'v': '362880184964ce7d0149735861bb1738'},
                   {'n': '济南版', 'v': '44bee38a-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '中图版（主编：王民）', 'v': '44bec8dc-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '中图版（主编：钟作慈）', 'v': '44bec9ae-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '商务星球版', 'v': '44bedb2e-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '晋教版', 'v': '44bedfb6-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '桂教版', 'v': '36288018493765ca01494137025316c0'},
                   {'n': '华中师大版', 'v': 'ff808081567e0fb301569c28a860011d'},
                   {'n': '地质社版', 'v': '502036371476'},
                   {'n': '沪少版', 'v': '44bee128-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '新世纪版', 'v': '36288019573ca3980157417c5872020a'},
                   {'n': '牛津上海版', 'v': '362880194a9ec684014a9f2adb6f008d'},
                   {'n': '鲁科版', 'v': '362880194964b314014964bf4ae60085'},
                   {'n': '沪音版', 'v': '44bee34e-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '沪书画版', 'v': '44bee0b0-54e6-11ed-9c34-850ba61fa9f4'}, {'n': '人教A版', 'v': '5036342963'},
                   {'n': '人教版（B版）（主编：高存明）', 'v': '502036371557'}, {'n': '浙科版', 'v': '502036371558'},
                   {'n': '中图版', 'v': '362880184987c4ac014988df9bf303c1'}, {'n': '人音版', 'v': '5036342964'},
                   {'n': '鲁美版', 'v': '502036371559'}, {'n': '人教中图版', 'v': '5036342965'},
                   {'n': '豫科版', 'v': '502036371600'},
                   {'n': '沪音乐版', 'v': '44bee312-54e6-11ed-9c34-850ba61fa9f4'}]},
        {"key": "Number_of_Volumes", "name": "册数",
         "value": [{'n': '全部', 'v': ''}, {'n': '学生读本', 'v': '502036372000'},
                   {'n': '上册', 'v': 'ff8080814371757b014390f883db0453'},
                   {'n': '中国历史', 'v': '44bec094-54e6-11ed-9c34-850ba61fa9f4'},
                   {'n': '必修 上册', 'v': 'eae5dc6a-147b-11ed-ab76-54d6327ace99'},
                   {'n': '必修 下册', 'v': '8ae7e58b74dd6f1a01750b71fb3900a3'},
                   {'n': '选择性必修 上册', 'v': 'eae5f7b8-147b-11ed-ab76-54d6327ace99'},
                   {'n': '选择性必修 中册', 'v': 'eae5f88a-147b-11ed-ab76-54d6327ace99'},
                   {'n': '选择性必修 下册', 'v': '8ae7e58b77b3bac901781548699901fb'},
                   {'n': '必修 第一册', 'v': '5036342972'}, {'n': '必修 第二册', 'v': '5036342973'},
                   {'n': '选择性必修 第一册', 'v': '5036342974'}, {'n': '选择性必修 第二册', 'v': '5036342982'},
                   {'n': '选择性必修 第三册', 'v': '5036344062'}, {'n': '必修 第三册', 'v': '5036342977'},
                   {'n': '必修 第四册', 'v': 'eae5e17e-147b-11ed-ab76-54d6327ace99'},
                   {'n': '选择性必修 第四册', 'v': 'ff8080817b0a8395017b0adfdf920002'},
                   {'n': '高一上册', 'v': '4C0327E1-6E71-2D07-DAC0-7E12803FD38E'},
                   {'n': '高一下册', 'v': '97CCC500-3D2C-AD80-4F2F-E210D597A7ED'},
                   {'n': '高二上册', 'v': 'E8F3D102-B498-65AA-3262-9D29F0A100A4'},
                   {'n': '高二下册', 'v': 'E157C221-104D-C2FA-C5CD-0A44EDD54B30'},
                   {'n': '高三上册', 'v': 'FD4CA56B-0174-17F5-30D7-BB7CD4F09939'},
                   {'n': '高三下册', 'v': '65CAF61F-8BF0-B528-E2F5-DEF075FEE33D'},
                   {'n': '必修一', 'v': 'ff8080814371757b014381869b9b2a81'},
                   {'n': '必修二', 'v': 'ff8080814371757b014385028d3636e3'},
                   {'n': '必修三', 'v': 'ff8080814371757b0143818f749b2b31'}, {'n': '高三下', 'v': '5036342971'},
                   {'n': '必修1 中国特色社会主义', 'v': '5036342986'}, {'n': '必修2 经济与社会', 'v': '5036342987'},
                   {'n': '必修3 政治与法治', 'v': '5036342988'}, {'n': '必修4 哲学与文化', 'v': '5036342989'},
                   {'n': '选择性必修1 当代国际政治与经济', 'v': '502036371485'},
                   {'n': '选择性必修2 法律与生活', 'v': '502036371486'},
                   {'n': '选择性必修3 逻辑与思维', 'v': '502036371487'}, {'n': '高三上', 'v': '5036342980'},
                   {'n': '选择性必修1 化学反应原理', 'v': '5036343004'},
                   {'n': '选择性必修2 物质结构与性质', 'v': '5036343005'},
                   {'n': '选择性必修3 有机化学基础', 'v': '5036343006'}, {'n': '必修1 分子与细胞', 'v': '5036342995'},
                   {'n': '必修2 遗传与进化', 'v': '5036342996'}, {'n': '选择性必修1 稳态与调节', 'v': '5036342997'},
                   {'n': '选择性必修2 生物与环境', 'v': '5036342998'},
                   {'n': '选择性必修3 生物技术与工程', 'v': '8ae7e58b77b3bac90178159e630a0423'},
                   {'n': '必修 中外历史纲要（上）', 'v': '5036342990'},
                   {'n': '必修 中外历史纲要（下）', 'v': '5036342991'},
                   {'n': '选择性必修1 国家制度与社会治理', 'v': '5036342992'},
                   {'n': '选择性必修2 经济与社会生活', 'v': '502036371481'},
                   {'n': '选择性必修3 文化交流与传播', 'v': '502036371482'},
                   {'n': '选择性必修1 自然地理基础', 'v': '5036342993'},
                   {'n': '选择性必修2 区域发展', 'v': 'eae5f182-147b-11ed-ab76-54d6327ace99'},
                   {'n': '选择性必修3 资源、环境与国家安全', 'v': '8ae7e58b77b3bac9017815b1a1870483'},
                   {'n': '必修1 音乐鉴赏', 'v': '5036343009'}, {'n': '必修2 歌唱', 'v': '5036343010'},
                   {'n': '必修3 演奏', 'v': '5036344059'}, {'n': '必修4 音乐编创', 'v': '5036343452'},
                   {'n': '必修5 音乐与舞蹈', 'v': '5036344058'}, {'n': '必修6 音乐与戏剧', 'v': '5036344060'},
                   {'n': '选择性必修1 合唱', 'v': '502036371460'}, {'n': '选择性必修3 舞蹈表演', 'v': '502036371461'},
                   {'n': '选择性必修4 戏剧表演', 'v': '502036371454'}, {'n': '选择性必修2 合奏', 'v': '502036371462'},
                   {'n': '选择性必修5 音乐基础理论', 'v': '502036371448'},
                   {'n': '选择性必修6 视唱练耳', 'v': '502036371459'}, {'n': '必修 美术鉴赏', 'v': '5036342999'},
                   {'n': '选择性必修1 绘画', 'v': '5036343001'}, {'n': '选择性必修4 设计', 'v': '5036344038'},
                   {'n': '选择性必修5 工艺', 'v': '5036343002'}, {'n': '选择性必修2 中国书画', 'v': '5036343000'},
                   {'n': '选择性必修6 现代媒体艺术', 'v': '5036343003'}, {'n': '选择性必修3 雕塑', 'v': '5036344037'},
                   {'n': '必修 全一册', 'v': '502036371447'}, {'n': '必修1 数据与计算', 'v': '5036343011'},
                   {'n': '必修2 信息系统与社会', 'v': '8ae7e58b6e16b80f016f64e2e89e0846'},
                   {'n': '选择性必修1 数据与数据结构', 'v': '5036344035'},
                   {'n': '选择性必修2 网络基础', 'v': '5036344034'},
                   {'n': '选择性必修3 数据管理与分析', 'v': '5036344036'},
                   {'n': '选择性必修4 人工智能初步', 'v': '5036344033'},
                   {'n': '选择性必修5 三维设计与创意', 'v': '5036344032'},
                   {'n': '必修 技术与设计1', 'v': '5036343012'},
                   {'n': '必修 技术与设计2', 'v': 'ff8080814371757b014385f4bb5a3ef3'},
                   {'n': '选择性必修5 服装及其设计', 'v': '5036344055'},
                   {'n': '选择性必修1 电子控制技术', 'v': '362880184a1b671a014a1f9486b701cf'},
                   {'n': '选择性必修3 工程设计基础', 'v': '5036344050'},
                   {'n': '选择性必修2 机器人设计与制作', 'v': '5036344053'},
                   {'n': '选择性必修4 现代家政技术', 'v': '5036344046'},
                   {'n': '选择性必修6 智能家居应用设计', 'v': '5036344051'},
                   {'n': '选择性必修7 职业技术基础', 'v': '5036344056'},
                   {'n': '选择性必修8 技术与职业探索', 'v': '5036344054'},
                   {'n': '选择性必修9 创造力开发与技术发明', 'v': '5036344052'},
                   {'n': '选择性必修10 科技人文融合创新专题', 'v': '5036344048'},
                   {'n': '选择性必修11 产品三维设计与制造', 'v': '5036344075'},
                   {'n': '必修1 艺术与生活', 'v': '502036371455'}]},
        {"key": "Old_New", "name": "新旧教材",
         "value": [{'n': '全部', 'v': ''}, {'n': '新教材', 'v': '5136342961'}, {'n': '旧教材', 'v': '5136342960'}]}
    ]},
				 //filter_def:{ "6a749654-0772-11ed-ac74-092ab92074e6":{cateId:'sermons'}},
            play_parse: true,
            lazy: `js:
						input = {
							jx: 0,
							url: "http://121.40.215.14:5000/?url=" + input,
							parse: 0
						}
						`,	
            limit: 6,
            推荐:'',
            double: true, // 推荐内容是否双层定位
            一级:`js:
						function get_Authorization(study_url){
							eval(getCryptoJS());
							let index = study_url.indexOf('.cn');
							let part1 = study_url.slice(8, index + 3);
							let part2 = study_url.slice(index + 3);
							let id = "7F938B205F876FC3C7550081F114A1A444B8D66D13AF4656187D4EB7F94918FE7E653BC76E4F758EE5AD936A286D4990E93B9B5C39ABEAA6";
							let nonce = (new Date).getTime() + parseInt(600, 10) + ":" + "YKLKHKIV"
							let data = nonce + '\\nGET\\n' + part2 + '\\n' + part1 + '\\n'
							print(data)
							let mac = CryptoJS.HmacSHA256(data, "F5k83JTPKG").toString(CryptoJS.enc.Base64)
							let Authorization  = 'MAC id="'.concat(id, '",nonce="').concat(nonce, '",mac="').concat(mac, '"')
							return Authorization
						}
						function send_request(study_url){
							let Authorization = get_Authorization(study_url); 
							html = request(study_url, { 
								headers: {
									'User-Agent': PC_UA,
									'sdp-app-id': 'e5649925-441d-4a53-b525-51a2f1c4e0a8',
									'Authorization': Authorization
								}
							})
							return html
						}

						//let tag_name = ["学段","年级","学科","版本","册数","新旧教材"];
						let d = [];
						let min = (MY_PAGE - 1 ) * 20;
						let max = -1;
						let keys = [];
						let input_list = [];
						let json_url = "https://badboy518714.github.io/TV/LEARN_JSON/book_info.json";
						//let obj_url = "https://badboy518714.github.io/TV/LEARN_JSON/obj_id.json";
						//id_info = JSON.parse(request(obj_url));
						let items = JSON.parse(request(json_url));
						keys = Object.keys(items);
						let item_s = items;


						let input_info = input.match(/=(.*)/)[1].split('/');
		
						input_info[5] = "";
						if(input_info[0] === "e7bbcefe-0590-11ed-9c79-92fc3b3249d5"){ input_list = input_info.slice(0,5); input_list[1] = "";}else{ input_list = input_info;}
							
						input_list = input_list.filter(function(item) { return item != ''; });
						
						
						let count = input_list.filter(function(item) { return item == ''; }).length;


						if(count == 6){	

						}else if(/prepare/.test(input)){
							
						}else{
							item_s = {}
							for(let i = 0; i < keys.length; i++){
								let flag = 1;
								for(let j = 0;j < input_list.length; j++){
									if(!keys[i].includes(input_list[j])){ 
										flag = 0;
										break;
									}
								}
								if(flag == 1){ item_s[keys[i]] = items[keys[i]];}
							}
							keys = Object.keys(item_s);
				
						}				
						max = Math.min(MY_PAGE * 20, keys.length)
  						let batch = keys.slice(min, max);						
						batch.forEach(function(it){	
							d.push(item_s[it])							
						})
						setResult(d)
						`,
            二级:`js:
						let version_id = input.match(/version_id=(.*)/)[1];
						
						input = "https://s-file-1.ykt.cbern.com.cn/zxx/ndrs/national_lesson/teachingmaterials/" + version_id + "/resources/part_100.json";
						let obj = JSON.parse(request(input));

						let title_url = "https://s-file-2.ykt.cbern.com.cn/zxx/ndrs/national_lesson/teachingmaterials/details/" + version_id + ".json";
						let info = JSON.parse(request(title_url));

						let content_url = "https://s-file-2.ykt.cbern.com.cn/zxx/ndrv2/national_lesson/trees/" + version_id + ".json";
						let trees = JSON.parse(request(content_url));

						let content = "";
						trees.forEach(function(it){
							try{
								content = content.concat(it["title"] + "\\n")
								try{
									it["child_nodes"].forEach(function(it){
										content = content.concat("\t\t" + it["title"] + "\\n")
									})
								}catch(e){ }
						
							}catch(e){ }							
						})
						let playFrom = ['线路1','线路2','线路3','线路4','线路5','线路6','线路7','线路8','线路9','线路10','线路11','线路12','线路13','线路14','线路15'];
						VOD = {
							vod_id: '',
							vod_name: info["title"],
							vod_pic: '',
							type_name: info["resource_type_code_name"],
							vod_year: '',
							vod_area: '国家中小学',
							vod_remarks: '',
							vod_actor: '',
							vod_director: '',
							vod_content: content
						};
						VOD['vod_play_from'] = playFrom.join("$$$");
						
						let play_Lists = [];
						//print(obj)
						
						obj.forEach(function(it){
							let url = "https://s-file-2.ykt.cbern.com.cn/zxx/ndrv2/national_lesson/resources/details/" + it["version_id"] + ".json";
							try{
								let data = JSON.parse(request(url))["relations"]["national_course_resource"];
								data.forEach(function(it){
									let play_list = [];
									let global_title = it["global_title"]["zh-CN"];
									if(/assets_video/.test(it["resource_type_code"])){
										let ti_items = it["ti_items"];
										ti_items.forEach(function(it){
											if(/m3u8/.test(it["ti_format"])){
												it["ti_storages"].forEach(function(it){
													play_list.push(global_title + "$" + it)
												})
											}
										})
										play_Lists.push(play_list);
									}
							 	})
							}catch(e){}
						})
						//print(play_Lists.length)
						//print(play_Lists)
						let ALL_lines = [];
						for(let i = 0; i < 15; i++){
							ALL_lines.push([])
							for(let j = 0; j< play_Lists.length; j++){
								ALL_lines[i].push(play_Lists[j][i]);
							}
							ALL_lines[i] = ALL_lines[i].join("#");
						}
						//print(ALL_lines)


						

						VOD['vod_play_url'] = ALL_lines.join("$$$")
						
						`,
            搜索:'*'
        }
