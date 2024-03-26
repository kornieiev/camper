import{u as t,g as o,c as g,a as d,j as e,d as j,e as f,f as b,C as y,L as v}from"./index-74a5db7c.js";import{s as r}from"./sprite-923fa693.js";import{b as k,a as w,C as $}from"./CampersList-9b0982fc.js";import{F as C,a as L,b as F}from"./formik.esm-5332bfef.js";import{b as R,s as q}from"./selectors-d9aac75d.js";const I=t.div`
  display: flex;
  width: 100%;
  width: 360px;
  margin-left: 64px;
  margin-top: 50px;
  margin-right: 32px;
  flex-direction: column;
`,S=t.div`
  position: relative;

  width: 360px;
`,V=t.label`
  font-weight: 500;
  color: ${o.colorGrey};
  font-family: "Inter", "sens-serif";
`,B=t.input`
  font-family: "Inter", "sens-serif";
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
    outline: 1px solid ${o.colorRed};
  }
  &:focus {
    outline: 1px solid ${o.colorRed};
  }
`,G=t.svg`
  position: absolute;
  width: 18px;
  height: 20px;
  transform: translateY(-200%) translateX(75%);
  fill: transparent;
  stroke: ${o.colorBlack};
  background-color: ${o.colorWhiteGrey};
`;function T(){const c=g(),a=d(k),p=m=>{c(j(m.target.value))};return e.jsxs(S,{children:[e.jsx(V,{htmlFor:"location",children:"Location"}),e.jsx(B,{type:"text",id:"location",value:a,placeholder:"City, Country",onChange:p}),e.jsx(G,{children:e.jsx("use",{href:r+"#icon-location"})})]})}const z=t.h3`
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
`,n=t.label`
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
`,h=t.svg`
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

  &:checked + ${i} ${h} {
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
`;function A(){const c=g(),a=p=>{c(f(p.equipment)),c(b(p.type))};return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"Filters"}),e.jsx(L,{initialValues:{equipment:[],type:""},onSubmit:a,children:e.jsxs(F,{children:[e.jsx(x,{id:"checkbox-group-equipment",children:"Vehicle equipment"}),e.jsxs(u,{role:"group","aria-labelledby":"checkbox-group-equipment",children:[e.jsxs(n,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"airConditioner"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:r+"#icon-ac"})}),"AC"]})]}),e.jsxs(n,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"automatic"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:r+"#icon-automatic"})}),"Automatic"]})]}),e.jsxs(n,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"kitchen"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:r+"#icon-kitchen"})}),"Kitchen"]})]}),e.jsxs(n,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"TV"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:r+"#icon-tv"})}),"TV"]})]}),e.jsxs(n,{children:[e.jsx(s,{type:"checkbox",name:"equipment",value:"shower"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx("use",{href:r+"#icon-shower"})}),"Shower/WC"]})]})]}),e.jsx(x,{id:"checkbox-group-type",style:{marginTop:"30px"},children:"Vehicle type"}),e.jsxs(u,{role:"group","aria-labelledby":"checkbox-group-type",children:[e.jsxs(n,{children:[e.jsx(s,{type:"radio",name:"type",value:"panelTruck"}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:r+"#icon-van"})}),"Van"]})]}),e.jsxs(n,{children:[e.jsx(s,{type:"radio",name:"type",value:"fullyIntegrated"}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:r+"#icon-fully-integrated"})}),"Fully Integrated"]})]}),e.jsxs(n,{children:[e.jsx(s,{type:"radio",name:"type",value:"alcove"}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:r+"#icon-alcove"})}),"Alcove"]})]})]}),e.jsx(W,{type:"submit",children:"Search"})]})})]})}function E(){return e.jsxs(I,{children:[e.jsx(T,{}),e.jsx(A,{})]})}const D=t.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;function H(){const c=d(w);d(R);const a=d(q);return e.jsx(y,{children:e.jsxs(D,{children:[e.jsx(E,{}),a?e.jsx(v,{}):e.jsx($,{campers:c,pathForModal:"catalog"})]})})}export{H as default};
