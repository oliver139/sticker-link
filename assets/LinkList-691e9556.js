import{_,c as l,o,a as n,b as s,F as d,r as p,u,t as f}from"./index-c4eb5c51.js";const h={class:"list-content"},m={class:"link-list"},g=["href"],b=["src","alt"],k={class:"link-text"},x={__name:"LinkList",props:{data:{type:Object,default:()=>({name:"name",title:"title",logo:"logo",color:"#fff",background:"background",bgPos:"center",links:new Set([])})}},setup(c){const r=c,i=l(()=>{const a=new Set;return r.data.links.forEach(t=>{a.add({id:t.id,icon:`/sticker-link/img/${r.data.name}/${t.id}.webp`,text:t.text,href:t.href})}),a});return(a,t)=>(o(),n("div",h,[s("ul",m,[(o(!0),n(d,null,p(u(i),e=>(o(),n("li",{key:e.href},[s("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},[s("img",{class:"link-icon",src:e.icon,alt:e.text},null,8,b),s("span",k,f(e.text),1)],8,g)]))),128))])]))}},y=_(x,[["__scopeId","data-v-b6c54781"]]);export{y as default};