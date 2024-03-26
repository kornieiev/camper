import{u as r,g as o,a,j as e}from"./index-dcc4e537.js";import{c as p}from"./selectors-d9aac75d.js";import{s as t}from"./sprite-923fa693.js";import{B as x}from"./BookForm-119902a3.js";import"./formik.esm-daf4a07f.js";const d=r.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,h=r.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 60px;
  column-gap: 16px;
  row-gap: 4px;
  width: 172px;
  justify-content: center;
  margin-bottom: 16px;
`,m=r.li`
  margin-bottom: 24px;
`,f=r.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background-color: ${o.colorWhiteGrey};
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${o.colorRed};
  display: flex;
  align-items: center;
  justify-content: center;
`,g=r.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
`,j=r.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
`,n=r.svg`
  width: 16px;
  height: 16px;
`,w=r.p`
  color: ${o.colorGrey};
`,I=()=>{const c=a(p),{reviews:l}=c;return e.jsxs(d,{children:[e.jsx("div",{children:e.jsx("ul",{children:l.map(i=>e.jsxs(m,{children:[e.jsxs(h,{children:[e.jsx(f,{children:i.reviewer_name.charAt(0)}),e.jsx(g,{children:i.reviewer_name}),e.jsx(j,{children:[...Array(5)].map((u,s)=>e.jsx("li",{children:s<i.reviewer_rating?e.jsx(n,{children:e.jsx("use",{href:t+"#icon-star",fill:"#FFC531"})}):e.jsx(n,{children:e.jsx("use",{href:t+"#icon-star",fill:"#F2F4F7"})})},s))})]}),e.jsx(w,{children:i.comment})]},i.reviewer_name))})}),e.jsx(x,{})]})};export{I as default};
