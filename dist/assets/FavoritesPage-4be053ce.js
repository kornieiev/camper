import{u as o,g as m,a as t,j as s,L as p}from"./index-dcc4e537.js";import{s as d,a as f,C as x}from"./CampersList-220e90b7.js";import{s as g}from"./selectors-d9aac75d.js";import{P as u}from"./Plug-0d9cf852.js";import"./sprite-923fa693.js";const j=o.div`
  /* width: 1440px; */
  /* margin: 0 32px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;o.h2`
  margin-bottom: 40px;
  color: ${m.colorRed};
  font-weight: 500;
  font-size: 22px;
`;const b=()=>{const r=t(d),a=t(f),i=t(g),e=a.filter(c=>r.includes(c._id)),n="Add camper to favorite!",l="/catalog";return s.jsxs(j,{children:[e.length<1&&s.jsx(s.Fragment,{children:s.jsx(u,{title:n,link:l})}),i?s.jsx(p,{}):s.jsx(x,{campers:e,pathForModal:"favorites"})]})};export{b as default};
