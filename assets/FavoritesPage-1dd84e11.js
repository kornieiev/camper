import{u as o,g as m,a as t,j as s,L as c}from"./index-c34bee65.js";import{s as p,a as d,C as f}from"./CampersList-281e3cc8.js";import{s as x}from"./selectors-d9aac75d.js";import{P as g}from"./Plug-7a2cd9ee.js";import"./sprite-923fa693.js";const u=o.div`
  width: 1440px;
  padding: 0 64px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;o.h2`
  margin-bottom: 40px;
  color: ${m.colorRed};
  font-weight: 500;
  font-size: 22px;
`;const L=()=>{const r=t(p),a=t(d),i=t(x),e=a.filter(l=>r.includes(l._id)),n="Add camper to favorite!";return s.jsxs(u,{children:[e.length<1&&s.jsx(s.Fragment,{children:s.jsx(g,{title:n})}),i?s.jsx(c,{}):s.jsx(f,{campers:e,pathForModal:"favorites"})]})};export{L as default};
