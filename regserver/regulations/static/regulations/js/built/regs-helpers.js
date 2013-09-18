define("regs-helpers",[],function(){return{isIterable:function(e){return typeof e=="array"||typeof e=="object"?!0:!1},fastLink:function(e,t,n){var r=document.createElement("a"),i;return i=$(r),r.href=e,r.innerHTML=t,r.className=n||"",i},interpId:function(e){return e.length===1?"Supplement I to Part "+e[0]:isNaN(e[1])?"Supplement I to Appendix "+e[1]:"Supplement I to §"+e[0]+"."+e[1]},appendixId:function(e,t){return"Appendix "+t+" to Part "+e},idToRef:function(e){var t="",n,r,i,s,o,u;n=e.split("-"),i=n.length-1,s=["§ .","","( )","( )","( )","( )"];if(i===0)return t=n[0],t;u=$.inArray("Interp",n);if(u>=0)return this.interpId(n.slice(0,u));if(isNaN(parseInt(n[1],10)))return this.appendixId(n[0],n[1]);for(r=0;r<=i;r++)r===1?t+=n[r]:(o=s[r].split(" "),t+=o[0]+n[r]+o[1]);return t},findBaseSection:function(e){if(e.indexOf("-")!==-1){var t=e.split("-");return t[0]+"-"+t[1]}return e},findURLPrefix:function(){var e,t,n,r=[];n=document.location.pathname.split("/"),t=n.length;for(e=0;e<=t;e++){if(n[e]==="regulation"||n[e]==="sxs"||n[e]==="search"||n[e]==="diff")break;n[e]!==""&&r.push(n[e])}return r.length===0?!1:r=_.compact(r).join("/")},findStartingContent:function(){var e=_.compact(window.location.pathname.split("/")),t=sessionStorage.getItem("drawerDefault");return t===null?e[0]:(sessionStorage.removeItem("drawerDefault"),t)},parseURL:function(e){var t=document.createElement("a");return t.href=e,{source:e,protocol:t.protocol.replace(":",""),host:t.hostname,port:t.port,query:t.search,params:function(){var e={},n=t.search.replace(/^\?/,"").split("&"),r=n.length,i=0,s;for(;i<r;i++){if(!n[i])continue;s=n[i].split("="),e[s[0]]=s[1]}return e}(),hash:t.hash.replace("#",""),path:t.pathname.replace(/^([^\/])/,"/$1"),segments:t.pathname.replace(/^\//,"").split("/")}}}});