import{u as l,g as t,a as P,j as e,b as W}from"./index-fab56491.js";import{a as z}from"./selectors-d9aac75d.js";const S=l.div`
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
  background-color: ${t.colorWhiteGrey};
`,o=l.div`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: ease-in 1500ms;
`,U=l.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${t.colorRed};
  color: ${t.colorWhite};
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  :hover {
    color: ${t.colorWhite};
    transition: ease-in 300ms;
  }
`,q=l.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  padding: 100px 20px;
`;function D({title:L,link:v}){var i,d,s,n,g,u,p,c,m,x,y,b,h,$,f,R,j,k,I,T,w;const r=P(z),B={0:`url(${(i=r[0])==null?void 0:i.gallery[0]})`,1:`url(${(d=r[1])==null?void 0:d.gallery[0]})`,2:`url(${(s=r[2])==null?void 0:s.gallery[0]})`,3:`url(${(n=r[3])==null?void 0:n.gallery[0]})`,4:`url(${(g=r[4])==null?void 0:g.gallery[0]})`,5:`url(${(u=r[5])==null?void 0:u.gallery[0]})`,6:`url(${(p=r[6])==null?void 0:p.gallery[0]})`,7:`url(${(c=r[7])==null?void 0:c.gallery[0]})`,8:`url(${(m=r[8])==null?void 0:m.gallery[0]})`,9:`url(${(x=r[9])==null?void 0:x.gallery[0]})`,10:`url(${(y=r[10])==null?void 0:y.gallery[0]})`,11:`url(${(b=r[11])==null?void 0:b.gallery[0]})`,12:`url(${(h=r[12])==null?void 0:h.gallery[0]})`};return setInterval(()=>{const M=Math.floor(Math.random()*7),G=document.querySelector(`#i${M}`),C=Math.floor(Math.random()*11);let a=B[`${C}`];a.includes("undefined")&&(a="url(https://ftp.goit.study/img/campers-test-task/9-1.webp)"),G.style.backgroundImage=a},(()=>Math.round(Math.random()*(4e3-2e3)+2e3))()),e.jsxs(S,{children:[e.jsx(o,{id:"i0",style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${($=r[0])==null?void 0:$.gallery[0]})`}}),e.jsx(o,{id:"i1",style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${(f=r[1])==null?void 0:f.gallery[0]})`}}),e.jsx(o,{id:"i2",style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${(R=r[2])==null?void 0:R.gallery[0]})`}}),e.jsx(o,{id:"i3",style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${(j=r[3])==null?void 0:j.gallery[0]})`}}),e.jsx(U,{children:e.jsx(W,{to:v,children:e.jsx(q,{children:L})})}),e.jsx(o,{id:"i4",style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${(k=r[4])==null?void 0:k.gallery[0]})`}}),e.jsx(o,{id:"i5",style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${(I=r[5])==null?void 0:I.gallery[0]})`}}),e.jsx(o,{id:"i6",style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${(T=r[6])==null?void 0:T.gallery[0]})`}}),e.jsx(o,{id:"i7",style:{borderBottomRightRadius:"30px",borderTopLeftRadius:"30px",backgroundImage:`url(${(w=r[7])==null?void 0:w.gallery[0]})`}})]})}export{D as P};
