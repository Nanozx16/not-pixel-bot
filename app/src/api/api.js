function a1_0x366f(_0x1ebf44,_0x143bb8){const _0x505b13=a1_0x505b();return a1_0x366f=function(_0x366fc7,_0x5a079){_0x366fc7=_0x366fc7-0x85;let _0x15a0b6=_0x505b13[_0x366fc7];return _0x15a0b6;},a1_0x366f(_0x1ebf44,_0x143bb8);}const a1_0x4256fd=a1_0x366f;(function(_0x2f6d6f,_0x43cb25){const _0xec8d24=a1_0x366f,_0x1771ae=_0x2f6d6f();while(!![]){try{const _0x35d4fb=-parseInt(_0xec8d24(0xa6))/0x1+-parseInt(_0xec8d24(0x93))/0x2+parseInt(_0xec8d24(0xa3))/0x3*(-parseInt(_0xec8d24(0x88))/0x4)+parseInt(_0xec8d24(0x8e))/0x5*(-parseInt(_0xec8d24(0xa9))/0x6)+parseInt(_0xec8d24(0x91))/0x7*(parseInt(_0xec8d24(0xaa))/0x8)+parseInt(_0xec8d24(0xa1))/0x9*(parseInt(_0xec8d24(0x9d))/0xa)+parseInt(_0xec8d24(0x9c))/0xb*(parseInt(_0xec8d24(0x8f))/0xc);if(_0x35d4fb===_0x43cb25)break;else _0x1771ae['push'](_0x1771ae['shift']());}catch(_0x121a7e){_0x1771ae['push'](_0x1771ae['shift']());}}}(a1_0x505b,0x79256));import{HttpsProxyAgent}from'https-proxy-agent';function a1_0x505b(){const _0x446d06=['Initdata\x20','proxy','agent','origin','same-site','\x20-\x20','application/json','22KKrlVU','6344320uTqhNm','includes','GET','body','9IdUJWg','\x20:\x20','2523165uCNNZF','fetch','Response\x20Data\x20:\x20','108563GVvoDW','query','statusText','10518VqHkvq','529992ogoeFA','referer','url','Error\x20:\x20','Response\x20:\x20','cors','empty','stringify','4NPKjYs','application/json,\x20text/plain,\x20*/*','error','info','status','Request\x20Body\x20:\x20','1535BUByxo','7116456rdcFel','en-US,en;q=0.9,id;q=0.8','84ovrDee','message','1262986opJFsH','host'];a1_0x505b=function(){return _0x446d06;};return a1_0x505b();}import{Helper}from'../utils/helper.js';import a1_0x583862 from'../utils/logger.js';export class API{constructor(_0x52092d,_0x5c71bb,_0x32e9c7,_0x271238,_0x5dd8ed,_0xc07c1d){const _0x1c4d8d=a1_0x366f;this[_0x1c4d8d(0xac)]=_0x32e9c7,this[_0x1c4d8d(0x94)]=_0x271238,this[_0x1c4d8d(0x98)]=_0x271238,this[_0x1c4d8d(0xab)]=_0x271238+'/',this['ua']=Helper['randomUserAgent'](),this[_0x1c4d8d(0xa7)]=_0x52092d,this[_0x1c4d8d(0x96)]=_0x5c71bb;}['generateHeaders'](_0x20cd4c=this[a1_0x4256fd(0xa7)]){const _0x490bca=a1_0x4256fd;var _0x510602={'Accept':_0x490bca(0x89),'Accept-Language':_0x490bca(0x90),'Content-Type':'application/json','Sec-Fetch-Dest':_0x490bca(0x86),'Sec-Fetch-Site':_0x490bca(0x99),'Sec-Fetch-Mode':_0x490bca(0x85),'User-Agent':this['ua'],'Host':this['host'],'Origin':this[_0x490bca(0x98)],'Referer':this[_0x490bca(0xab)]};return _0x20cd4c&&(_0x510602={..._0x510602,'Authorization':_0x490bca(0x95)+_0x20cd4c}),_0x510602;}async[a1_0x4256fd(0xa4)](_0x3dbd3b,_0x423ad0,_0x5789aa,_0x5e062c={},_0x19778d={}){const _0x270b14=a1_0x4256fd;try{const _0x1c2e43=''+this[_0x270b14(0xac)]+_0x3dbd3b,_0x2c1de7={..._0x19778d,...this['generateHeaders'](_0x5789aa)},_0x3e3ed5={'headers':_0x2c1de7,'method':_0x423ad0};this['proxy']&&(_0x3e3ed5[_0x270b14(0x97)]=new HttpsProxyAgent(this['proxy']));a1_0x583862['info'](_0x423ad0+_0x270b14(0xa2)+_0x1c2e43+'\x20'+(this[_0x270b14(0x96)]?this[_0x270b14(0x96)]:'')),a1_0x583862[_0x270b14(0x8b)]('Request\x20Header\x20:\x20'+JSON[_0x270b14(0x87)](_0x2c1de7));_0x423ad0!==_0x270b14(0x9f)&&(_0x3e3ed5[_0x270b14(0xa0)]=''+JSON[_0x270b14(0x87)](_0x5e062c),a1_0x583862['info'](_0x270b14(0x8d)+_0x3e3ed5[_0x270b14(0xa0)]));const _0x47a9e4=await fetch(_0x1c2e43,_0x3e3ed5);a1_0x583862[_0x270b14(0x8b)](_0x270b14(0xae)+_0x47a9e4['status']+'\x20'+_0x47a9e4[_0x270b14(0xa8)]);if(_0x47a9e4['ok']||_0x47a9e4[_0x270b14(0x8c)]==0x190||_0x47a9e4[_0x270b14(0x8c)]==0x193){const _0x4b5c16=_0x47a9e4['headers']['get']('content-type');let _0x382667;_0x4b5c16&&_0x4b5c16[_0x270b14(0x9e)](_0x270b14(0x9b))?(_0x382667=await _0x47a9e4['json'](),_0x382667[_0x270b14(0x8c)]=_0x47a9e4[_0x270b14(0x8c)]):_0x382667={'status':_0x47a9e4[_0x270b14(0x8c)],'message':await _0x47a9e4['text']()};if(_0x47a9e4['ok'])_0x382667[_0x270b14(0x8c)]=0xc8;return a1_0x583862[_0x270b14(0x8b)](_0x270b14(0xa5)+JSON[_0x270b14(0x87)](_0x382667)),_0x382667;}else throw new Error(_0x47a9e4[_0x270b14(0x8c)]+_0x270b14(0x9a)+_0x47a9e4[_0x270b14(0xa8)]);}catch(_0x490a32){a1_0x583862[_0x270b14(0x8a)](_0x270b14(0xad)+_0x490a32[_0x270b14(0x92)]);throw _0x490a32;}}}