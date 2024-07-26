import{u as o,g as m,a as t,j as s,L as p}from"./index-ff839f59.js";import{s as d,a as f,C as g}from"./CampersList-e92d9075.js";import{s as x}from"./selectors-d9aac75d.js";import{P as u}from"./Plug-ed2d4a6c.js";import"./sprite-923fa693.js";const j=o.div`
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
`;const L=()=>{const a=t(d),r=t(f),i=t(x),e=r.filter(c=>a.includes(c._id)),n="Add any camper from catalog to your favorites!",l="/catalog";return s.jsxs(j,{children:[e.length<1&&s.jsx(s.Fragment,{children:s.jsx(u,{title:n,link:l})}),i?s.jsx(p,{}):s.jsx(g,{campers:e,pathForModal:"favorites"})]})};export{L as default};
