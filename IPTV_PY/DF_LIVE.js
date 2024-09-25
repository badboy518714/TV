const CryptoJS = require('../IPTV_JS/lib/crypto-js')

// 解密
function aesDecrypt(word) {
    const bytes = CryptoJS.AES.decrypt(word, CryptoJS.enc.Utf8.parse('k5x99e1mswelc4vt'), {
      iv: CryptoJS.enc.Utf8.parse('0000000000000000'),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    return originalText
  }
// 加密
function aesEncrypt(word, key) {
    if (!word) return ''
    return CryptoJS.AES.encrypt(word, CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse('0000000000000000'),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString()
}

// 获取播放地址回调
function get_url(str) {
    let s = JSON.parse(aesDecrypt(str))
    //console.log("解密后", s)
//    console.log(s.data)
    return s.data
}
function get_s(_pdCid) {
    var domainF = 'https://feiying.litenews.cn/api/'
    var apiF = 'v1/auth/exchange';
    var t = new Date().valueOf()
    var s = CryptoJS.MD5(_pdCid + t + "1qkhcc7og9zeftsu").toString()
    var url = domainF + apiF + '?t=' + t + '&s=' + s
    var key = 'k5x99e1mswelc4vt'
    var data = aesEncrypt(JSON.stringify({ "channelMark": _pdCid }), key);
    return {
        't': t,
        's': s,
        'data': data
    }
}
