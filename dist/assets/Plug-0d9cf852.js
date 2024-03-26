import{u as s,g as a,a as I,r as p,j as e,R as b,b as j}from"./index-dcc4e537.js";import{a as v}from"./selectors-d9aac75d.js";const w=s.div`
  width: 1440px;
  padding: 0 64px;
  /* margin: 0 64px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: calc(100vh - 120px);
  gap: 15px;
  background-color: ${a.colorWhiteGrey};
`,y=s.div`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: ease-in 1500ms;
`,R=s.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${a.colorRed};
  color: ${a.colorWhite};
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  :hover {
    color: ${a.colorWhite};
    transition: ease-in 300ms;
  }
`,k=s.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  padding: 100px 20px;
`;function E({title:i,link:d}){console.log("title",i),console.log("link",d);const t=I(v),[g,c]=p.useState([]);p.useEffect(()=>{const o=[],n=Array.from({length:t.length},(r,h)=>{const u=Math.floor(Math.random()*t.length);return o.push(setInterval(()=>{const x=Math.floor(Math.random()*t.length);c(f=>{const l=[...f];return l[h]=x,l})},m())),u});return c(n),()=>{o.forEach(r=>clearInterval(r))}},[]);const m=()=>Math.round(Math.random()*(8e3-3e3)+3e3);return e.jsx(w,{children:g.map((o,n)=>{var r;return e.jsxs(b.Fragment,{children:[e.jsx(y,{style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${(r=t[o])==null?void 0:r.gallery[0]})`}}),n===3&&e.jsx(R,{children:e.jsx(j,{to:d,children:e.jsx(k,{children:i})})})]},n)})})}export{E as P};
