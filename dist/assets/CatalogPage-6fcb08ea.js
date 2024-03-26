import{u as t,g as o,b as g,a as h,j as e,c as j,d as f,e as b,C as y,L as v}from"./index-c34bee65.js";import{s as n}from"./sprite-923fa693.js";import{b as k,a as w,C as $}from"./CampersList-281e3cc8.js";import{F as C,a as L,b as F}from"./formik.esm-5723b17a.js";import{b as q,s as I}from"./selectors-d9aac75d.js";const R=t.div`
  display: flex;
  width: 100%;
  width: 360px;
  margin-left: 64px;
  margin-top: 50px;
  margin-right: 32px;
  flex-direction: column;
`,S=t.div`
  width: 360px;
`,V=t.label`
  position: relative;
  font-weight: 500;
  color: ${o.colorGrey};
  font-family: "Inter", "sens-serif";
`,B=t.input`
  font-family: "Inter", "sens-serif";
  position: relative;
  border-radius: 10px;
  width: 320px;
  height: 56px;
  background-color: ${o.colorWhiteGrey};
  padding-left: 38px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${o.colorBlack};
  margin-top: 8px;
  border: none;
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`,G=t.svg`
  position: absolute;
  width: 18px;
  height: 20px;
  top: 230px;
  left: 140px;
  transform: translateY(-50%);
  fill: transparent;
  stroke: ${o.colorBlack};
  background-color: ${o.colorWhiteGrey};
`;function T(){const c=g(),a=h(k),p=m=>{c(j(m.target.value))};return e.jsxs(S,{children:[e.jsx(V,{htmlFor:"location",children:"Location"}),e.jsx(B,{type:"text",id:"location",value:a,placeholder:"City, Country",onChange:p}),e.jsx(G,{children:e.jsx("use",{href:n+"#icon-location"})})]})}const z=t.h3`
  font-weight: 500;
  color: ${o.colorGrey};
  margin-bottom: 15px;
  margin-top: 30px;
`,x=t.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.1);
  }
`,u=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 360px;
`,r=t.label`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 12px;
  width: 112px;
  height: 95px;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${o.colorRed};
  }
`,l=t.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;

  fill: transparent;
  stroke: ${o.colorBlack};
`,i=t.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,d=t.svg`
  width: 40px;
  height: 28px;
  margin-bottom: 8px;
`,s=t(C)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:checked + ${i} ${l} {
    outline-color: ${o.colorRed};
    border-color: ${o.colorRed};
    stroke: ${o.colorRed};
  }

  &:checked + ${i} ${d} {
    outline-color: ${o.colorRed};
    border-color: ${o.colorRed};
    stroke: ${o.colorRed};
  }
`,W=t.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  background-color: ${o.colorRed};
  border-radius: 200px;
  border: none;
  padding: 16px 60px;
  height: 56px;
  margin-top: 64px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:hover {
    background-color: ${o.colorRed};
  }
`;function A(){const c=g(),a=p=>{c(f(p.equipment)),c(b(p.type))};return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"Filters"}),e.jsx(L,{initialValues:{equipment:[],type:""},onSubmit:a,children:e.jsxs(F,{children:[e.jsx(x,{id:"checkbox-group-equipment",children:"Vehicle equipment"}),e.jsxs(u,{role:"group","aria-labelledby":"checkbox-group-equipment",children:[e.jsxs(r,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"airConditioner"}),e.jsxs(i,{children:[e.jsx(l,{style:{fill:"#101828",stroke:"transparent"},children:e.jsx("use",{href:n+"#icon-ac"})}),"AC"]})]}),e.jsxs(r,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"automatic"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:n+"#icon-automatic"})}),"Automatic"]})]}),e.jsxs(r,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"kitchen"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:n+"#icon-kitchen"})}),"Kitchen"]})]}),e.jsxs(r,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"TV"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:n+"#icon-tv"})}),"TV"]})]}),e.jsxs(r,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"shower"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:n+"#icon-shower"})}),"Shower/WC"]})]})]}),e.jsx(x,{id:"checkbox-group-type",style:{marginTop:"30px"},children:"Vehicle type"}),e.jsxs(u,{role:"group","aria-labelledby":"checkbox-group-type",children:[e.jsxs(r,{children:[e.jsx(s,{type:"radio",name:"type",value:"panelTruck"}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsx("use",{href:n+"#icon-van"})}),"Van"]})]}),e.jsxs(r,{children:[e.jsx(s,{type:"radio",name:"type",value:"fullyIntegrated"}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsx("use",{href:n+"#icon-fully-integrated"})}),"Fully Integrated"]})]}),e.jsxs(r,{children:[e.jsx(s,{type:"radio",name:"type",value:"alcove"}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsx("use",{href:n+"#icon-alcove"})}),"Alcove"]})]})]}),e.jsx(W,{type:"submit",children:"Search"})]})})]})}function E(){return e.jsxs(R,{children:[e.jsx(T,{}),e.jsx(A,{})]})}const D=t.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;function J(){const c=h(w);h(q);const a=h(I);return e.jsx(y,{children:e.jsxs(D,{children:[e.jsx(E,{}),a?e.jsx(v,{}):e.jsx($,{campers:c,pathForModal:"catalog"})]})})}export{J as default};
