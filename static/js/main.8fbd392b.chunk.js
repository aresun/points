(this["webpackJsonparesun-manage"]=this["webpackJsonparesun-manage"]||[]).push([[0],Array(37).concat([function(e,t,n){e.exports=n(117)},,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(22),c=n.n(i),s=(n(42),n(16)),u=n(34),l=n(5),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_tag":return[{tag:t.value,id:""+Date.now()}].concat(Object(l.a)(e));case"remove_tag":return e.filter((function(e,n,r){return e.id!==t.tag.id}));case"recieve_tag":return e.filter((function(e,n,r){return e.id===t.tag.id})).length>0?e:[{tag:t.tag.tag,id:t.tag.id}].concat(Object(l.a)(e));case"concat_tag_list":var n=e.map((function(e,t,n){return e.id})),r=t.tagList.filter((function(e,t,r){return-1===n.indexOf(e.id)}));return r.length>0?[].concat(Object(l.a)(e),Object(l.a)(r)):e;case"override_tag_list":return Object(l.a)(t.tagList);case"remove_tag_list":var a=t.tagList.map((function(e,t,n){return e.id}));return e.filter((function(e,t,n){return-1===a.indexOf(e.id)}));default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_tag_to_session":return[{tag:t.tag.tag,id:t.tag.id}].concat(Object(l.a)(e));case"remove_tag_in_session":return e.filter((function(e,n,r){return e.id!==t.tag.id}));case"clear_tag_session":return[];case"append_tag_sessiojn_list":var n=e.map((function(e,t,n){return e.id})),r=t.tagList.filter((function(e,t,r){return-1===n.indexOf(e.id)}));return r.length>0?[].concat(Object(l.a)(e),Object(l.a)(r)):e;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_point":return[{point:t.pointValue,tagList:t.tagSessionList,status:!1,id:Date.now()}].concat(Object(l.a)(e));case"recieve_point":return e.filter((function(e,n,r){return e.id===t.point.id})).length>0?e:[{point:t.point.point,tagList:t.point.tagList,status:t.point.status,id:t.point.id}].concat(Object(l.a)(e));case"remove_point":return e.filter((function(e,n,r){return e.id!==t.point.id}));case"concat_point_list":var n=t.pointSessionList.filter((function(t,n,r){for(var a=!1,o=e.length;o--;)if(e[o].id===t.id){a=!0;break}return!a}));return n.length>0?[].concat(Object(l.a)(e),Object(l.a)(t.pointSessionList)):e;case"override_point_list":return Object(l.a)(t.pointList);case"remove_point_list":var r=t.pointList.map((function(e,t,n){return e.id}));return e.filter((function(e,t,n){return-1===r.indexOf(e.id)}));default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_point_to_session":return[{point:t.point.point,tagList:t.point.tagList,status:t.point.status,id:t.point.id}].concat(Object(l.a)(e));case"remove_point_in_session":return e.filter((function(e,n,r){return e.id!==t.point.id}));case"clear_point_session":return[];case"append_point_session":var n=t.pointList.filter((function(t,n,r){for(var a=e.length,o=!1;a--;)if(e[a].id===t.id){o=!0;break}return!o}));return n.length>0?[].concat(Object(l.a)(e),Object(l.a)(n)):e;case"toggle_point_status_in_session":var r=t.point,a=t.point,o=a.id,i=a.status;return e.map((function(e,t,n){return e.id===o?Object.assign({},r,{status:!i}):e}));default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_clickable_eject_board":return{isOn:t.targetStatus};default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"override_tag_belong_list":return Object(l.a)(t.point.tagList);case"clear_tag_belong_list":return[];default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_hover_on":return t.target;case"remove_hover_on":return"";default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_switch_ui_status":return t.targetStatus;default:return e}},O=Object(s.c)({tagList:d,tagSessionList:v,pointList:f,pointSessionList:m,ejectBoard:h,tagBelongList:p,hoverOn:g,switchUIstatus:E}),b=Object(s.d)(O,Object(s.a)(u.a)),y=n(1),L=n(19),S=n(14),_=(console.log.bind(console),console.time.bind(console),console.timeEnd.bind(console),function(e,t){for(var n=e.length;n--;)t(e[n],n)}),P=function(e){if(e.trim)return e.trim();e.replace(/^\s+|\s+$/g,"")},H=[],j=function(e){r=setInterval((function(){_(H,(function(e,t){e()}))}),e)},N=function(){clearInterval(r),H=null};n(47),n(48);var C=function(e){return o.a.createElement("div",{className:"CodeInput"},e.children)},k=n(2),T=(n(49),[]),w=[2,2,2,2,2,2],I=function(e,t){T[t]=parseInt(e);var n=function(){for(var e=6;e--;)if(T[e]!==w[e])return!1;return!0}();return n&&(T.length=0),n};var x=Object(S.f)((function(e){var t=e.idx,n=e.history,r=Object(a.useState)(""),i=Object(k.a)(r,2),c=i[0],s=i[1],u=Object(a.useRef)(null);return Object(a.useEffect)((function(){c||0!==t||setTimeout((function(){u.current.focus()}),100)})),o.a.createElement("input",{className:"Code",type:"text",value:c,onChange:function(e){var r=e.target.value;if(/^\d{1}$/.test(r)){s(r),I(r,t)&&n.push("/manage");var a=u.current.nextElementSibling;a&&a.focus()}else if(!r){s(""),I(void 0,t);var o=u.current.previousElementSibling;o&&o.select()}},ref:u})}));var U=function(e){return Object(a.useEffect)((function(){return document.title="Aresun Entrance",function(){}}),[]),o.a.createElement("div",{className:"Entrance"},o.a.createElement(C,null,o.a.createElement(x,{idx:0}),o.a.createElement(x,{idx:1}),o.a.createElement(x,{idx:2}),o.a.createElement(x,{idx:3}),o.a.createElement(x,{idx:4}),o.a.createElement(x,{idx:5})))},B=(n(51),n(52),n(53),function(e){return o.a.createElement("div",{className:"Indicator"},o.a.createElement("div",{className:"right-arrow"}))}),M=(n(54),Object(y.b)((function(e,t){return{isHoverOnClearInput:"hover-on-clear-input"===e.hoverOn,isHoverOnHighlight:"hover-on-append-highlight-format"===e.hoverOn}}),(function(e,t){return{}}))((function(e){var t=e.isHoverOnClearInput,n=e.isHoverOnHighlight,r=Object(a.useCallback)((function(e){}),[]),i="Input";return t&&(i+=" ready-for-clear"),n&&(i+=" ready-to-append-highlight-format"),o.a.createElement("input",{className:i,type:"text",onKeyUp:r})}))),A=(n(55),function(e){return function(t){t(F()),t(q(e))}}),D=function(e){return{type:"recieve_tag",tag:e}},R=function(e){return{type:"remove_tag",tag:e}},q=function(e){return{type:"concat_tag_list",tagList:e}},K=function(e){return{type:"override_tag_list",tagList:e}},W=function(e){return{type:"remove_tag_list",tagList:e}},z=function(e){return{type:"add_tag_to_session",tag:e}},J=function(e){return{type:"remove_tag_in_session",tag:e}},F=function(){return{type:"clear_tag_session"}},$=function(e){return{type:"append_tag_sessiojn_list",tagList:e}},V=function(e){return{type:"remove_point",point:e}},Y=function(e){return{type:"recieve_point",point:e}},G=function(e){return{type:"concat_point_list",pointSessionList:e}},Q=function(e){return{type:"override_point_list",pointList:e}},X=function(e){return{type:"remove_point_list",pointList:e}},Z=function(e){return{type:"add_point_to_session",point:e}},ee=function(e){return{type:"remove_point_in_session",point:e}},te=function(){return{type:"clear_point_session"}},ne=function(e){return{type:"append_point_session",pointList:e}},re=function(e){return{type:"set_clickable_eject_board",targetStatus:e}},ae=function(e){return{type:"override_tag_belong_list",point:e}},oe=function(e){return{type:"set_hover_on",target:e}},ie=function(){return document.querySelector(".Input")},ce=function(e,t,n){return[function(t){e(n)},function(e){t()}]},se=Object(y.b)((function(e,t){return{}}),(function(e,t){return{setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.setHoverOnProcedure,n=e.removeHoverOnProcedure,r=Object(a.useCallback)((function(e){var t=ie();t.value="",t.focus()}),[]),i=ce(t,n,"hover-on-clear-input"),c=Object(k.a)(i,2),s=c[0],u=c[1];return o.a.createElement("div",{className:"Clear",onClick:r,onMouseEnter:s,onMouseLeave:u},o.a.createElement("div",{className:"line-0"}),o.a.createElement("div",{className:"line-1"}))})),ue=(n(56),void 0),le=function(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(n){ue.throwError("feature not supported by this method"+n.toString())}document.body.removeChild(t)},de=function(e){var t=Object(a.useCallback)((function(e){var t=ie(),n=P(t.value);le(n),t.value=n,t.select()}),[]);return o.a.createElement("div",{className:"Copy",onClick:t},o.a.createElement("div",{className:"solid"}),o.a.createElement("div",{className:"virtual"}))},ve=(n(57),n(58),function(e){var t=e.appendClass,n=e.handler,r=t?"PointIndicator "+t:"PointIndicator",a=e.pointStatus?"innerPoint finished":"innerPoint";return o.a.createElement("div",{className:r,onClick:function(e){n&&n()}},o.a.createElement("div",{className:a}))}),fe=(n(59),function(e){var t=e.appendClass,n=t?"Cross "+t:"Cross";return o.a.createElement("div",{className:n},o.a.createElement("div",{className:"vertical"}),o.a.createElement("div",{className:"horizontal"}))}),me=(n(60),function(e){var t=e.handler,n=e.mouseEnterHandler,r=e.mouseLeaveHandler;return o.a.createElement("div",{className:"CircleAdd",onMouseEnter:n,onMouseLeave:r,onClick:t},o.a.createElement("div",{className:"vertical"}),o.a.createElement("div",{className:"horizontal"}))}),he=Object(y.b)((function(e,t){return{tagSessionList:e.tagSessionList}}),(function(e,t){return{addPointProcedure:function(t,n){e(function(e,t){return{type:"add_point",pointValue:e,tagSessionList:t}}(t,n))},setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.addPointProcedure,n=e.tagSessionList,r=e.setHoverOnProcedure,a=e.removeHoverOnProcedure,i=ce(r,a,"hover-on-add"),c=Object(k.a)(i,2),s=c[0],u=c[1];return o.a.createElement("div",{className:"Add"},o.a.createElement(ve,{appendClass:"in-add"}),o.a.createElement(me,{mouseEnterHandler:s,mouseLeaveHandler:u,handler:function(e){var r=ie(),a=P(r.value);a&&(t(a,n),r.value="",r.focus())}}),o.a.createElement(fe,{appendClass:"in-add"}))})),pe=(n(61),Object(y.b)((function(e,t){return{}}),(function(e,t){return{addTagProcedure:function(t){e(function(e){return{type:"add_tag",value:e}}(t))},setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.addTagProcedure,n=e.setHoverOnProcedure,r=e.removeHoverOnProcedure,i=Object(a.useCallback)((function(e){var n=ie(),r=P(n.value);r&&(t(r),n.value="",n.focus())}),[t]),c=ce(n,r,"hover-on-add-tag"),s=Object(k.a)(c,2),u=s[0],l=s[1];return o.a.createElement("div",{className:"AddTag"},o.a.createElement(me,{mouseEnterHandler:u,mouseLeaveHandler:l,handler:i}),o.a.createElement(fe,{appendClass:"in-add"}))}))),ge=(n(62),n(63),function(e){var t=e.clickHandler,n=e.children,r=e.mouseEnterHandler,a=e.mouseLeaveHandler,i=e.isSearchUnfinished,c="CircleSearch";return e.isSearchTag?c+=" search-tag":c=i?"CircleSearch search-unfinished":"CircleSearch search-finished",o.a.createElement("div",{className:c,onClick:t,onMouseEnter:r,onMouseLeave:a},n)}),Ee=function(e,t,n,r){return function(a){var o=ie(),i=o.value.toLowerCase();o.select();var c=!1,s=!1;if(i&&(c=!0),t.length>0&&(s=!0),c||s){var u=e.filter((function(e,n,a){var o,u,l=e.status;if(c&&(o=e.point.toLowerCase().indexOf(i)>-1),s){u=!0;for(var d=t.length;d--;){for(var v=t[d].id,f=e.tagList.length,m=!1;f--;)if(e.tagList[f].id===v){m=!0;break}if(!m){u=!1;break}}}var h=!1;return c&&s?h=o&&u:c?h=o:s&&(h=u),h=r?h&&!l:h&&l}));u.length>0&&n(u)}}},Oe=Object(y.b)((function(e,t){return{pointList:e.pointList,tagSessionList:e.tagSessionList}}),(function(e,t){return{movePointListToSessionProcedure:function(t){var n;e((n=t,function(e){e(X(n)),e(ne(n))}))},setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.pointList,n=e.tagSessionList,r=e.movePointListToSessionProcedure,a=e.isSearchUnfinished,i=e.setHoverOnProcedure,c=e.removeHoverOnProcedure,s=Ee(t,n,r,a),u=ce(i,c,a?"hover-on-search-unfinished":"hover-on-search-finished"),l=Object(k.a)(u,2),d=l[0],v=l[1];return o.a.createElement("div",{className:"Search"},o.a.createElement(ge,{isSearchUnfinished:a,mouseEnterHandler:d,mouseLeaveHandler:v,clickHandler:s},o.a.createElement(ve,{appendClass:"in-search",pointStatus:!a})),o.a.createElement("div",{className:"radar"}))})),be=(n(64),function(e,t){return function(n){var r=ie(),a=r.value.toLowerCase();if(r.select(),a){var o=e.filter((function(e,t,n){return e.tag.toLowerCase().indexOf(a)>-1}));o.length>0&&t(o)}}}),ye=Object(y.b)((function(e,t){return{tagList:e.tagList}}),(function(e,t){return{processResultProcedure:function(t){var n;e((n=t,function(e){e(W(n)),e($(n))}))},setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.tagList,n=e.processResultProcedure,r=e.setHoverOnProcedure,a=e.removeHoverOnProcedure,i=be(t,n),c=ce(r,a,"hover-on-search-tag"),s=Object(k.a)(c,2),u=s[0],l=s[1];return o.a.createElement("div",{className:"SearchTag"},o.a.createElement(ge,{isSearchTag:!0,mouseEnterHandler:u,mouseLeaveHandler:l,clickHandler:i},o.a.createElement(fe,{appendClass:"in-search"})),o.a.createElement("div",{className:"radar"}))})),Le=(n(65),n(8)),Se=n.n(Le),_e=Se.a.enc.Utf8.parse("Aresun"),Pe=Se.a.enc.Utf8.parse("ABCDEF1234123412");var He=Object(y.b)((function(e,t){return{tagList:e.tagList,pointList:e.pointList}}),(function(e,t){return{setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.tagList,n=e.pointList,r=e.setHoverOnProcedure,a=e.removeHoverOnProcedure,i=ce(r,a,"hover-on-clipboard"),c=Object(k.a)(i,2),s=c[0],u=c[1];return o.a.createElement("div",{className:"Clipboard",onMouseEnter:s,onMouseLeave:u,onClick:function(e){var r,a=(r=JSON.stringify({tagList:t,pointList:n}),Se.a.AES.encrypt(r,Se.a.enc.Utf8.parse(_e),{iv:Se.a.enc.Utf8.parse(Pe),mode:Se.a.mode.CBC,padding:Se.a.pad.Pkcs7}).toString());le(a)}},o.a.createElement("div",{className:"tag-circle"}),o.a.createElement("div",{className:"point-circle"}))})),je=(n(89),Object(y.b)((function(e,t){return{}}),(function(e,t){return{appendDataToSessionProcedure:function(t,n){e(function(e,t){return function(n){n($(e)),n(ne(t))}}(t,n))},setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.appendDataToSessionProcedure,n=e.setHoverOnProcedure,r=e.removeHoverOnProcedure,a=ce(n,r,"hover-on-append"),i=Object(k.a)(a,2),c=i[0],s=i[1];return o.a.createElement("div",{className:"Append",onMouseEnter:c,onMouseLeave:s,onClick:function(e){var n,r,a=P(ie().value);if(a){var o=(r=a,Se.a.AES.decrypt(r,Se.a.enc.Utf8.parse(_e),{iv:Se.a.enc.Utf8.parse(Pe),mode:Se.a.mode.CBC,padding:Se.a.pad.Pkcs7}).toString(Se.a.enc.Utf8));try{n=JSON.parse(o)}catch(l){console.log("err",l)}}if(n){var i=n,c=i.tagList,s=i.pointList,u=Array.isArray;c&&u(c)&&s&&u(s)&&t(c,s)}}},o.a.createElement("div",{className:"data-box"}),o.a.createElement("div",{className:"append-box"}))}))),Ne=(n(90),n(91),Object(y.b)((function(e,t){return{}}),(function(e,t){return{setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.setHoverOnProcedure,n=e.removeHoverOnProcedure,r=ce(t,n,"hover-on-append-highlight-format"),a=Object(k.a)(r,2),i=a[0],c=a[1];return o.a.createElement("div",{className:"HighlightCircle",onMouseEnter:i,onMouseLeave:c,onClick:function(e){var t=ie();t.value=t.value+"{}",t.focus()}},"{ }")}))),Ce=function(e){return o.a.createElement("div",{className:"HighlightInput"},o.a.createElement(Ne,null))};var ke=Object(y.b)((function(e,t){return{isHoverOnSwitchUI:"hover-on-switch-ui"===e.hoverOn,isHidden:e.switchUIstatus}}),(function(e,t){return{}}))((function(e){var t=e.isHoverOnSwitchUI,n=e.isHidden,r="InputControls";return(t||n)&&(r+=" hidden"),o.a.createElement("div",{className:r},o.a.createElement("div",null,o.a.createElement(B,null),o.a.createElement(M,null),o.a.createElement(se,null),o.a.createElement(de,null)),o.a.createElement("div",null,o.a.createElement(pe,null),o.a.createElement(he,null),o.a.createElement(Ce,null),o.a.createElement(Oe,{isSearchUnfinished:!0}),o.a.createElement(Oe,{isSearchUnfinished:!1}),o.a.createElement(ye,null)),o.a.createElement("div",null,o.a.createElement(He,null),o.a.createElement(je,null)))})),Te=(n(92),n(93),n(94),n(95),function(e){return o.a.createElement("div",{className:"TagCross"},o.a.createElement("div",{className:"horizontal"}),o.a.createElement("div",{className:"vertical"}))}),we=function(e){var t=e.tag,n=e.handler,r=Object(a.useCallback)((function(e){n(t)}),[n,t]);return o.a.createElement("div",{className:"Tag",onClick:r},o.a.createElement(Te,null),o.a.createElement("span",null,t.tag))},Ie=(n(96),function(e){var t=e.handleClickTop,n=e.handleClickBottom;return o.a.createElement("div",{className:"PageBoard"},o.a.createElement("div",{className:"previous",onClick:t}),o.a.createElement("div",{className:"next",onClick:n}))}),xe=function(e,t){return e>0&&e<=t},Ue=function(e){var t=Object(a.useState)(1),n=Object(k.a)(t,2),r=n[0],o=n[1],i=function(e,t){var n=Math.ceil(e.length/t);return n=0===n?1:n}(e,15),c=function(e,t,n){var r=t*n,a=r-n;return e.slice(a,r)}(e,r,15);Object(a.useEffect)((function(){return r>i&&o(i),function(){}}),[r,i]);return[c,function(e){var t=r-1;xe(t,i)&&o(t)},function(e){var t=r+1;xe(t,i)&&o(t)}]},Be=Object(y.b)((function(e,t){return{tagList:e.tagList,isHoverOnAddTag:"hover-on-add-tag"===e.hoverOn,isHoverOnSearchTag:"hover-on-search-tag"===e.hoverOn,isHoverOnClipboard:"hover-on-clipboard"===e.hoverOn,isHoverOnAppend:"hover-on-append"===e.hoverOn,isHoverOnToUI:"hover-on-to-ui"===e.hoverOn,isHoverOnToStorage:"hover-on-to-storage"===e.hoverOn}}),(function(e,t){return{moveTagToSessionProcedure:function(t){e(function(e){return function(t){t(R(e)),t(z(e))}}(t))}}}))((function(e){var t=e.tagList,n=e.moveTagToSessionProcedure,r=e.isHoverOnAddTag,a=e.isHoverOnSearchTag,i=e.isHoverOnClipboard,c=e.isHoverOnAppend,s=e.isHoverOnToUI,u=e.isHoverOnToStorage,l=Ue(t),d=Object(k.a)(l,3),v=d[0],f=d[1],m=d[2],h="TagList";return a&&(h="TagList ready-to-tag-session"),i&&(h="TagList ready-to-clipboard"),c&&(h="TagList ready-to-append"),u&&(h="TagList ready-to-storage"),o.a.createElement("div",{className:h},o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("div",{className:r?"hidden-tag show":"hidden-tag"}),o.a.createElement("div",{className:s?"flush-board show":"flush-board"}),o.a.createElement("div",{className:"tag-list-holder"},o.a.createElement("div",{className:u?"hidden-storage-board show":"hidden-storage-board"}),v.map((function(e,t,r){return o.a.createElement(we,{tag:e,key:e.id,handler:n})})))),o.a.createElement(Ie,{handleClickTop:f,handleClickBottom:m}))})),Me=(n(97),n(98),n(99),function(e){var t=e.handler,n=e.handleEnter,r=e.handleLeave;return o.a.createElement("div",{className:"Return",onMouseEnter:function(e){n&&n()},onMouseLeave:function(e){r&&r()},onClick:function(e){t&&t()}})}),Ae=(n(100),function(e){var t=e.handler,n=e.handleEnter,r=e.handleLeave;return o.a.createElement("div",{className:"RemoveSession",onMouseEnter:function(e){n&&n()},onMouseLeave:function(e){r&&r()},onClick:function(e){t&&t()}})}),De=function(e){var t=e.removeHandler,n=e.returnHandler,r=e.handleEnterReturn,a=e.handleLeaveReturn,i=e.handleEnterRemoveSession,c=e.handleLeaveRemoveSession;return o.a.createElement("div",{className:"SessionControl"},o.a.createElement(Me,{handler:n,handleEnter:r,handleLeave:a}),o.a.createElement(Ae,{handleEnter:i,handleLeave:c,handler:t}))},Re=function(e,t){return function(){e(t)}},qe=function(){var e=Object(a.useState)(!1),t=Object(k.a)(e,2),n=t[0],r=t[1];return[n,function(){r(!0)},function(){r(!1)}]},Ke=function(){var e=Object(a.useState)(!1),t=Object(k.a)(e,2),n=t[0],r=t[1];return[n,function(){r(!0)},function(){r(!1)}]},We=Object(y.b)((function(e,t){return{tagSessionList:e.tagSessionList,isHoverOnClipboard:"hover-on-clipboard"===e.hoverOn,isHoverOnAppend:"hover-on-append"===e.hoverOn,isHoverOnToStorage:"hover-on-to-storage"===e.hoverOn}}),(function(e,t){return{returnThisTagProcedure:function(t){e(function(e){return function(t){t(D(e)),t(J(e))}}(t))},returnWholeSessionProcedure:function(t){e(A(t))},removeSessionProcedure:function(){e(F())}}}))((function(e){var t=e.tagSessionList,n=e.returnThisTagProcedure,r=e.returnWholeSessionProcedure,a=e.removeSessionProcedure,i=e.isHoverOnClipboard,c=e.isHoverOnAppend,s=e.isHoverOnToStorage,u=Re(r,t),l=Ue(t),d=Object(k.a)(l,3),v=d[0],f=d[1],m=d[2],h="TagSession";i&&(h="TagSession hide-for-clipboard"),c&&(h="TagSession ready-for-append"),s&&(h="TagSession ready-for-to-storage");var p=qe(),g=Object(k.a)(p,3),E=g[0],O=g[1],b=g[2],y=Ke(),L=Object(k.a)(y,3),S=L[0],_=L[1],P=L[2],H="tag-session-list-holder";return E&&(H+=" ready-to-return"),S&&(H+=" ready-to-remove-session"),o.a.createElement("div",{className:h},o.a.createElement(Ie,{handleClickTop:f,handleClickBottom:m}),o.a.createElement("div",{className:H},v.map((function(e,t,r){return o.a.createElement(we,{tag:e,key:e.id,handler:n})})),o.a.createElement("div",{className:"hidden-append-box"})),o.a.createElement(De,{returnHandler:u,handleEnterReturn:O,handleLeaveReturn:b,handleEnterRemoveSession:_,handleLeaveRemoveSession:P,removeHandler:a}))})),ze=(n(101),Object(y.b)((function(e,t){return{isHoverOnSwitchUI:"hover-on-switch-ui"===e.hoverOn,isSelfOn:e.switchUIstatus}}),(function(e,t){return{setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})},turnOffEjectBoardProcedure:function(){e(re(!1))},toggleSwitchUIstatusProcedure:function(t){e(function(e){return{type:"set_switch_ui_status",targetStatus:e}}(t))}}}))((function(e){var t=e.setHoverOnProcedure,n=e.removeHoverOnProcedure,r=e.isHoverOnSwitchUI,a=e.turnOffEjectBoardProcedure,i=e.isSelfOn,c=e.toggleSwitchUIstatusProcedure,s="SwitchUI";i&&(s+=" on"),!i&&r&&(s+=" ready-to-turn-on"),i&&r&&(s+=" ready-to-turn-off");var u=ce(t,n,"hover-on-switch-ui"),l=Object(k.a)(u,2),d=l[0],v=l[1];return o.a.createElement("div",{onMouseEnter:d,onMouseLeave:v,onClick:function(e){a(),c(!i)},className:s},o.a.createElement("div",{className:"side-box"}),o.a.createElement("div",{className:"switch-pool"}),o.a.createElement("div",{className:"side-box"}))}))),Je=(n(102),n(103),function(e){var t=e.tagString;return o.a.createElement("div",{className:"TagBelong"},t)}),Fe=Object(y.b)((function(e,t){return{tagBelongList:e.tagBelongList}}),(function(e,t){return{}}))((function(e){var t=e.tagBelongList;return o.a.createElement("div",{className:"TagBelongList"},o.a.createElement("div",null,t.map((function(e,t,n){return o.a.createElement(Je,{tagString:e.tag,key:e.id})}))))})),$e=(n(104),n(105),Object(y.b)((function(e,t){return{isHoverOnSeachUnfinished:"hover-on-search-unfinished"===e.hoverOn,isHoverOnSeachFinished:"hover-on-search-finished"===e.hoverOn}}),(function(e,t){return{}}))((function(e){var t=e.point,n=e.handler,r=e.appendClass,a=e.toggleHandler,i=e.mouseEnterHandler,c=e.mouseLeaveHandler,s=e.isHoverOnSeachUnfinished,u=e.isHoverOnSeachFinished,l=r?"Point "+r:"Point";"in-list"===r&&(s&&!1===t.status&&(l+=" ready-to-session-list"),u&&!0===t.status&&(l+=" ready-to-session-list"));var d=t.point.replace(/\{([^{}]*)\}/g,(function(e,t){return'<span class="highlight">'.concat(t,"</span>")}));return d=d.replace(/\*([^*]*)\*/g,(function(e,t){return'<span class="bold">'.concat(t,"</span>")})),o.a.createElement("div",{className:l,title:t.point,onMouseEnter:function(e){i&&i(t)},onMouseLeave:function(e){c&&c(t)}},o.a.createElement(ve,{appendClass:"in-point",handler:function(){a&&a(t)},pointStatus:t.status}),o.a.createElement("span",{onClick:function(e){n&&n(t)},dangerouslySetInnerHTML:{__html:d}}))}))),Ve=function(e,t){return[function(t){e(t)},function(e){t(e)}]},Ye=Object(y.b)((function(e,t){return{pointList:e.pointList,isHoverOnAddPoint:"hover-on-add"===e.hoverOn,isHoverOnClipboard:"hover-on-clipboard"===e.hoverOn,isHoverOnAppend:"hover-on-append"===e.hoverOn,isHoverOnToUI:"hover-on-to-ui"===e.hoverOn,isHoverOnToStorage:"hover-on-to-storage"===e.hoverOn}}),(function(e,t){return{movePointToSessionProcedure:function(t){e(function(e){return function(t){t(V(e)),t(Z(e))}}(t))},overrideTagBelongListProcedure:function(t){e(ae(t))},clearTagBelongListProcedure:function(t){e({type:"clear_tag_belong_list"})}}}))((function(e){var t=e.pointList,n=e.movePointToSessionProcedure,r=e.overrideTagBelongListProcedure,a=e.clearTagBelongListProcedure,i=e.isHoverOnAddPoint,c=e.isHoverOnClipboard,s=e.isHoverOnAppend,u=e.isHoverOnToUI,l=e.isHoverOnToStorage,d=Ue(t),v=Object(k.a)(d,3),f=v[0],m=v[1],h=v[2],p=Ve(r,a),g=Object(k.a)(p,2),E=g[0],O=g[1],b="PointList";return c&&(b="PointList ready-to-clipboard"),s&&(b="PointList ready-to-append"),l&&(b="PointList ready-to-storage"),o.a.createElement("div",{className:b},o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("div",{className:i?"hidden-point show":"hidden-point"}),o.a.createElement("div",{className:u?"flush-board show":"flush-board"}),o.a.createElement("div",{className:"point-list-holder"},o.a.createElement("div",{className:l?"hidden-storage-board show":"hidden-storage-board"}),f.map((function(e,t,r){return o.a.createElement($e,{point:e,key:e.id,appendClass:"in-list",mouseEnterHandler:E,mouseLeaveHandler:O,handler:n})})))),o.a.createElement(Ie,{handleClickTop:m,handleClickBottom:h}))})),Ge=(n(106),n(107),Object(y.b)((function(e,t){return{isDisabled:e.switchUIstatus,clickable:e.pointSessionList.length>0,isOn:e.pointSessionList.length>0&&e.ejectBoard.isOn}}),(function(e,t){return{setClickableProcedure:function(t){e(re(t))}}}))((function(e){var t=e.clickable,n=e.setClickableProcedure,r=e.isOn,a=e.isDisabled;return o.a.createElement("div",{className:"EjectBoard",style:{backgroundColor:t?r?"#430d5d":"#eeeeee":"transparent"},onClick:function(e){!a&&t&&n(!r)}})}))),Qe=function(e,t,n,r,a){return e?function(e){ie().value=e.point,n(r),a(e)}:function(e){t(e)}},Xe=Object(y.b)((function(e,t){return{pointSessionList:e.pointSessionList,ejectBoardIsOn:e.ejectBoard.isOn,tagSessionList:e.tagSessionList,isHoverOnClipboard:"hover-on-clipboard"===e.hoverOn,isHoverOnAppend:"hover-on-append"===e.hoverOn,isHoverOnStorage:"hover-on-to-storage"===e.hoverOn}}),(function(e,t){return{returnThisPointProcedure:function(t){e(function(e){return function(t){t(Y(e)),t(ee(e))}}(t))},returnWholeSessionProcedure:function(t){e(function(e){return function(t){t(te()),t(G(e))}}(t))},removeSessionProcedure:function(){e(te())},ejectThisPointProcedure:function(t){e(function(e){return function(t){t(ee(e)),t(W(e.tagList)),t($(e.tagList)),t(re(!1))}}(t))},returnTagSessionListProcedure:function(t){e(A(t))},clickPointIndicatorToTogglePointStatusProcedure:function(t){e(function(e){return{type:"toggle_point_status_in_session",point:e}}(t))},overrideTagBelongListProcedure:function(t){e(ae(t))},clearTagBelongListProcedure:function(t){e({type:"clear_tag_belong_list"})}}}))((function(e){var t=e.pointSessionList,n=e.returnThisPointProcedure,r=e.returnWholeSessionProcedure,a=e.removeSessionProcedure,i=e.ejectBoardIsOn,c=e.ejectThisPointProcedure,s=e.tagSessionList,u=e.returnTagSessionListProcedure,l=e.clickPointIndicatorToTogglePointStatusProcedure,d=e.overrideTagBelongListProcedure,v=e.clearTagBelongListProcedure,f=e.isHoverOnClipboard,m=e.isHoverOnAppend,h=e.isHoverOnStorage,p=Qe(i,n,u,s,c,d,v,h),g=Re(r,t),E=Ue(t),O=Object(k.a)(E,3),b=O[0],y=O[1],L=O[2],S=Ve(d,v),_=Object(k.a)(S,2),P=_[0],H=_[1],j="PointSession";f&&(j="PointSession hide-for-clipboard"),m&&(j="PointSession ready-for-append"),h&&(j="PointSession ready-for-to-storage");var N=qe(),C=Object(k.a)(N,3),T=C[0],w=C[1],I=C[2],x=Ke(),U=Object(k.a)(x,3),B=U[0],M=U[1],A=U[2],D="point-list-holder";return T&&(D+=" ready-to-return"),B&&(D+=" ready-to-remove-session"),o.a.createElement("div",{className:j},o.a.createElement("div",{style:{width:"52px"}},o.a.createElement(Ie,{handleClickTop:y,handleClickBottom:L}),o.a.createElement(Ge,null)),o.a.createElement("div",{style:{position:"relative",width:"360px"}},o.a.createElement("div",{className:D},b.map((function(e,t,n){return o.a.createElement($e,{point:e,key:e.id,appendClass:"in-session-list",handler:p,mouseEnterHandler:P,mouseLeaveHandler:H,toggleHandler:l})}))),o.a.createElement("div",{className:"hidden-append-box"})),o.a.createElement("div",null,o.a.createElement(De,{handleEnterReturn:w,handleLeaveReturn:I,handleEnterRemoveSession:M,handleLeaveRemoveSession:A,returnHandler:g,removeHandler:a})))}));var Ze=Object(y.b)((function(e,t){return{isHoverOnErase:"hover-on-erase"===e.hoverOn}}),(function(e,t){return{}}))((function(e){var t=e.isHoverOnErase;return o.a.createElement("div",{className:"Engine"},o.a.createElement("div",{className:t?"hidden-erase-board show":"hidden-erase-board"}),o.a.createElement("div",null,o.a.createElement(Be,null),o.a.createElement(We,null)),o.a.createElement("div",{style:{width:"100px"}},o.a.createElement(ze,null)),o.a.createElement("div",null,o.a.createElement(Fe,null)),o.a.createElement("div",null,o.a.createElement(Ye,null),o.a.createElement(Xe,null)))})),et=(n(108),n(109),Object(S.f)((function(e){var t=e.history;return o.a.createElement("div",{className:"Exit"},o.a.createElement("div",{className:"circle",onClick:function(e){t.push("/entrance")}}),o.a.createElement("div",{className:"horizontal"}),o.a.createElement("div",{className:"vertical"}))}))),tt=(n(110),n(111),function(e){return o.a.createElement("div",{className:"DataSpot"},o.a.createElement("div",{className:"ui-spot"}),o.a.createElement("div",{className:"storage-spot"}))}),nt=Object(y.b)((function(e,t){return{}}),(function(e,t){return{overrideTagListProcedure:function(t){e(K(t))},overridePointProcedure:function(t){e(Q(t))},setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.overrideTagListProcedure,n=e.overridePointProcedure,r=e.setHoverOnProcedure,a=e.removeHoverOnProcedure,i=ce(r,a,"hover-on-to-ui"),c=Object(k.a)(i,2),s=c[0],u=c[1];return o.a.createElement("div",{className:"ToUI",onMouseEnter:s,onMouseLeave:u,onClick:function(e){var r=JSON.parse(localStorage.getItem("localData"));r&&r.tagList&&t(r.tagList),r&&r.pointList&&n(r.pointList)}},o.a.createElement(tt,null),o.a.createElement("div",{className:"data-flow"}))})),rt=(n(112),Object(y.b)((function(e,t){return{tagList:e.tagList,pointList:e.pointList}}),(function(e,t){return{setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})}}}))((function(e){var t=e.tagList,n=e.pointList,r=e.setHoverOnProcedure,a=e.removeHoverOnProcedure,i=ce(r,a,"hover-on-to-storage"),c=Object(k.a)(i,2),s=c[0],u=c[1];return o.a.createElement("div",{className:"ToStorage",onMouseEnter:s,onMouseLeave:u,onClick:function(e){var r=JSON.stringify({tagList:t,pointList:n});localStorage.setItem("localData",r)}},o.a.createElement(tt,null),o.a.createElement("div",{className:"data-flow"}))}))),at=(n(113),Object(y.b)((function(e,t){return{}}),(function(e,t){return{setHoverOnProcedure:function(t){e(oe(t))},removeHoverOnProcedure:function(){e({type:"remove_hover_on"})},removeUIdataProcedure:function(){e((function(e){e(K([])),e(F()),e(Q([])),e(te())}))}}}))((function(e){var t=e.setHoverOnProcedure,n=e.removeHoverOnProcedure,r=e.removeUIdataProcedure,a=ce(t,n,"hover-on-erase"),i=Object(k.a)(a,2),c=i[0],s=i[1];return o.a.createElement("div",{onClick:function(e){r(),localStorage.removeItem("localData")},className:"Erase",onMouseEnter:c,onMouseLeave:s},o.a.createElement(tt,null),o.a.createElement("div",{className:"top-remove"},o.a.createElement("div",{className:"horizontal"}),o.a.createElement("div",{className:"vertical"})),o.a.createElement("div",{className:"bottom-remove"},o.a.createElement("div",{className:"horizontal"}),o.a.createElement("div",{className:"vertical"})))}))),ot=(n(114),function(e){var t=Object(a.useCallback)((function(e){return e===(new Date).getDay()?{visibility:"visible"}:{}}),[]),n=Object(a.useCallback)((function(e){var t=new Date,n=t.getDate(),r=t.getDay();return 0===r&&(r=7),0===e&&(e=7),n+e-r}),[]);return o.a.createElement("div",{className:"Weekday"},[1,2,3,4,5,6,0].map((function(e,r,a){return o.a.createElement("div",{className:"day-area",key:e},o.a.createElement("div",{className:"day"},o.a.createElement("div",{className:"dom-day"},n(e)),o.a.createElement("div",{className:"today",style:t(e)})))})))}),it=(n(115),function(e){var t=Object(a.useState)("00:00:00"),n=Object(k.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var e,t=(e=function(){i(function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds();return t<10&&(t="0"+t),n<10&&(n="0"+n),r<10&&(r="0"+r),t+":"+n+":"+r}())},H.push(e),H.length-1);return function(){var e;e=t,H.splice(e,1)}}),[]),o.a.createElement("div",{className:"Time"},r)}),ct=(n(116),function(e){return o.a.createElement("div",{className:"Day"},function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return t<10&&(t="0"+t),n<10&&(n="0"+n),r<10&&(r="0"+r),t+"/"+n+"/"+r}())}),st=Object(y.b)((function(e,t){return{isHoverOnSwitchUI:"hover-on-switch-ui"===e.hoverOn,isHidden:e.switchUIstatus}}),(function(e,t){return{}}))((function(e){var t=e.isHoverOnSwitchUI,n=e.isHidden,r="DataControls";return(t||n)&&(r+=" hidden"),o.a.createElement("div",{className:r},o.a.createElement("div",{style:{width:"360px"}},o.a.createElement(et,null),o.a.createElement("div",{className:"inner-flex"},o.a.createElement(nt,null),o.a.createElement(rt,null),o.a.createElement(at,null))),o.a.createElement("div",null,o.a.createElement(ot,null)),o.a.createElement("div",{style:{width:"360px"}},o.a.createElement(ct,null),o.a.createElement(it,null)))}));var ut=Object(S.f)((function(e){var t=e.history;return Object(a.useEffect)((function(){var e=function(e){e.altKey&&"i"===e.key&&ie().select(),e.altKey&&"p"===e.key&&document.querySelector(".CircleSearch.search-unfinished").click(),e.altKey&&e.shiftKey&&"P"===e.key&&document.querySelector(".CircleSearch.search-finished").click(),e.altKey&&"t"===e.key&&document.querySelector(".CircleSearch.search-tag").click(),e.altKey&&"r"===e.key&&(document.querySelector(".TagSession .Return").click(),document.querySelector(".PointSession .Return").click()),e.altKey||"Enter"!==e.key||document.querySelector(".Add .CircleAdd").click(),e.altKey&&"Enter"===e.key&&document.querySelector(".AddTag .CircleAdd").click(),e.altKey&&"k"===e.key&&(document.querySelector(".TagSession .RemoveSession").click(),document.querySelector(".PointSession .RemoveSession").click()),e.altKey&&"q"===e.key&&t.push("/entrance")};return document.addEventListener("keyup",e,!1),document.title="Aresun Manage",function(){document.removeEventListener("keyup",e,!1)}}),[t]),o.a.createElement("div",{className:"Manage"},o.a.createElement("div",null,o.a.createElement(ke,null),o.a.createElement(Ze,null),o.a.createElement(st,null)))}));var lt=function(){return Object(a.useEffect)((function(){return j(500),console.log("started interval"),function(){N()}}),[]),o.a.createElement(y.a,{store:b},o.a.createElement(L.a,null,o.a.createElement(S.a,{from:"/",to:"/entrance"}),o.a.createElement(S.b,{exact:!0,path:"/entrance",component:U}),o.a.createElement(S.b,{exact:!0,path:"/manage",component:ut})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[37,1,2]]]);
//# sourceMappingURL=main.8fbd392b.chunk.js.map