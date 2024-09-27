const CryptoJS = require('crypto-js')
// import "https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/libs/crypto-js.js";
// import CryptoJS from 'crypto-js'
// import { Crypto } from '../lib/cat.js';

// const CryptoJS = Crypto;
// 解密
export function aesDecrypt(word) {
    const bytes = CryptoJS.AES.decrypt(word, CryptoJS.enc.Utf8.parse('k5x99e1mswelc4vt'), {
      iv: CryptoJS.enc.Utf8.parse('0000000000000000'),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    return originalText
  }
// 加密
export function aesEncrypt(word, key) {
    if (!word) return ''
    return CryptoJS.AES.encrypt(word, CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse('0000000000000000'),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString()
}

// 获取播放地址回调
export function get_url(str) {
    let s = JSON.parse(aesDecrypt(str))
    //console.log("解密后", s)
//    console.log(s.data)
    return s.data
}
export function get_s(_pdCid) {
    // console.log("-------------node_js测试-------------")
    // var domainF = 'https://feiying.litenews.cn/api/'
    // var apiF = 'v1/auth/exchange';
    var t = new Date().valueOf()
    var s = CryptoJS.MD5(_pdCid + t + "1qkhcc7og9zeftsu").toString()
    // var url = domainF + apiF + '?t=' + t + '&s=' + s
    var key = 'k5x99e1mswelc4vt'
    var data = aesEncrypt(JSON.stringify({ "channelMark": _pdCid }), key);
    return {
        'data': data,
        't': t,
        's': s
    }
}

export function get_tk(){
    var t = Math.round(new Date().getTime() / 1e3)
    var r = '24cf03ec5ba91ad4954b6b69d8cba3f5'
    var tk = CryptoJS.MD5(r+t).toString()
    data = "?tk=" + tk + "&t=" + t
    console.log(data)
    return data
}

