import{e as h,_ as P,r as m,o as s,c as n,a as r,d as t,F as c,f as C,t as b,b as f,w as k}from"./index-753a1555.js";const{VITE_APP_URL:l,VITE_APP_PATH:d}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"pokebox",BASE_URL:"/vue-week-6",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={data(){return{products:[]}},components:{RouterLink:h},methods:{getProducts(){this.$http.get(`${l}/v2/api/${d}/products/all`).then(e=>{console.log(e),this.products=e.data.products})},addToCart(e){const u={product_id:e,qty:1};this.$http.post(`${l}v2/api/${d}/cart`,{data:u}).then(a=>{console.log(a)})}},mounted(){this.getProducts()}},g={class:"table"},A=["src"],E=t("td",null,null,-1),T=["onClick"];function V(e,u,a,R,i,_){const p=m("RouterLink");return s(),n(c,null,[r(" 這是產品列表頁面 "),t("table",g,[t("tbody",null,[(s(!0),n(c,null,C(i.products,o=>(s(),n("tr",{key:o.id},[t("td",null,b(o.title),1),t("td",null,[t("img",{src:o.imageUrl,width:"200",alt:""},null,8,A)]),E,f(p,{to:`/product/${o.id}`,class:"btn btn-outline-secondary"},{default:k(()=>[r("產品細節")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:x=>_.addToCart(o.id)},"加入購物車",8,T)]))),128))])])],64)}const L=P($,[["render",V]]);export{L as default};
