import{_ as d,c as f,o,a as c,b as e,t as l,F as i,r as u}from"./index-bef03cee.js";const p={class:"list-title"},h={class:"list-content"},m={class:"link-list"},g=["href"],x=["src","alt"],b={class:"link-text"},k={__name:"LinkList",props:{data:{type:Object,default:()=>({name:"name",title:"title",logo:"logo",color:"#fff",background:"background",bgPos:"center",links:new Set([])})}},setup(r){const s=r,_=f(()=>{let a=0;const n=new Set;return s.data.links.forEach(t=>{a++,n.add({icon:`/img/${s.data.name}/${s.data.name}${a}.webp`,text:t.text,href:t.href})}),n});return(a,n)=>(o(),c(i,null,[e("h1",p,l(r.data.title),1),e("div",h,[e("ul",m,[(o(!0),c(i,null,u(_.value,t=>(o(),c("li",{key:t.href},[e("a",{href:t.href,target:"_blank",rel:"noopener noreferrer"},[e("img",{class:"link-icon",src:t.icon,alt:t.text},null,8,x),e("span",b,l(t.text),1)],8,g)]))),128))])])],64))}},v=d(k,[["__scopeId","data-v-f393b232"]]);export{v as default};
