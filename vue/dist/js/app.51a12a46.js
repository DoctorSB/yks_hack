(function(){"use strict";var e={2250:function(e,n,t){var o=t(9242),r=t(3396),i=t(7139);const u={class:"input-container"},a=["disabled"],s=["disabled"],l={key:0},c={key:1},d=["disabled"];function f(e,n,t,f,p,v){return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["chat-container",{moved:f.messageSent}])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.chatHistory,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.text,class:(0,i.C_)(["message",{"user-message":e.isUser,"user-message-right":e.isUser}])},(0,i.zw)(e.text),3)))),128)),(0,r._)("div",u,[(0,r.wy)((0,r._)("textarea",{ref:"textInput",class:"question-input","onUpdate:modelValue":n[0]||(n[0]=e=>f.question=e),disabled:f.loading,placeholder:"Введите ваш вопрос здесь",onKeydown:n[1]||(n[1]=(0,o.D2)((0,o.iM)(((...e)=>f.handleEnter&&f.handleEnter(...e)),["prevent"]),["enter"]))},null,40,a),[[o.nr,f.question]]),(0,r._)("button",{class:"send-button",onClick:n[2]||(n[2]=(...e)=>f.submitForm&&f.submitForm(...e)),disabled:f.loading},[f.loading?((0,r.wg)(),(0,r.iD)("span",l,"⌛")):((0,r.wg)(),(0,r.iD)("span",c,"✉"))],8,s),(0,r._)("button",{class:"copy-button",onClick:n[3]||(n[3]=(...e)=>f.copyResponse&&f.copyResponse(...e)),disabled:!f.response}," 📃 ",8,d)])],2)}t(560);var p=t(4870),v=t(1076),b={setup(){const e=(0,p.iH)(""),n=(0,p.iH)(null),t=(0,p.iH)(!1),o=(0,p.iH)(!1),i=(0,p.iH)([]),u=(0,p.iH)(null),a=async()=>{if(""!==e.value.trim()){t.value=!0,o.value=!0;try{const t=await v.Z.post("http://localhost:5000/generate",{text:e.value});n.value=t.data.response,i.value.push({text:e.value,isUser:!0}),i.value.push({text:n.value,isUser:!1})}catch(a){console.error("Ошибка при запросе:",a),n.value="Произошла ошибка при обработке запроса."}finally{e.value="",t.value=!1,await(0,r.Y3)(),u.value.focus()}}},s=n=>{n.shiftKey?e.value+="\n":(n.preventDefault(),a())},l=()=>{if(n.value){const e=document.createElement("textarea");e.value=n.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}};return{question:e,response:n,loading:t,messageSent:o,chatHistory:i,submitForm:a,handleEnter:s,copyResponse:l,textInput:u}}},y=t(89);const h=(0,y.Z)(b,[["render",f]]);var m=h;(0,o.ri)(m).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,u=o[0],a=o[1],s=o[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(s)var c=s(t)}for(n&&n(o);l<u.length;l++)i=u[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkvue"]=self["webpackChunkvue"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2250)}));o=t.O(o)})();
//# sourceMappingURL=app.51a12a46.js.map