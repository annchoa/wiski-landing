const wiskiHeroStyles={
  wrap:{position:'relative',height:591,background:'var(--wiski-white)'},
  collage:{position:'absolute',left:0,top:0,right:0,bottom:0,pointerEvents:'none'},
  tile:{position:'absolute',borderRadius:'var(--radius-photo)',backgroundSize:'cover',backgroundPosition:'center'},
  right:{position:'absolute',left:817,top:113},
  eyebrow:{display:'inline-flex',alignItems:'center',height:26,padding:'0 12px',borderRadius:'var(--radius-round)',background:'var(--wiski-gray-warm)',fontFamily:'var(--font-eyebrow)',fontSize:'var(--size-eyebrow)',lineHeight:'100%',letterSpacing:'var(--tracking-eyebrow)',color:'var(--wiski-white)',marginLeft:25},
  h1:{margin:'22px 0 0',width:'auto',whiteSpace:'nowrap',fontFamily:'var(--font-display)',fontWeight:400,fontSize:44,lineHeight:'100%',color:'var(--wiski-black)'},
  cta:{marginTop:30,width:203,height:46,borderRadius:'var(--radius-button)',background:'var(--action-primary)',border:'none',display:'flex',alignItems:'center',paddingLeft:18,cursor:'pointer',fontFamily:'var(--font-core)',fontWeight:700,fontSize:'var(--size-cta)',lineHeight:'100%',color:'var(--text-on-cta)'},
  dots:{marginTop:58,display:'flex',gap:19},
  dot:{width:58,height:58,borderRadius:'50%'}
};
const WISKI_TILES=[
  {img:'photo-04.jpg',left:409,top:137,width:222,height:164},
  {img:'photo-02.jpg',left:216,top:211,width:247,height:254,child:{img:'photo-03.jpg',left:46,top:-42,width:172,height:138}},
  {img:'photo-05.jpg',left:453,top:273,width:218,height:169},
  {img:'photo-06.jpg',left:379,top:359,width:247,height:186}
];
const WISKI_DOTS=['var(--wiski-orange)','var(--wiski-blue)','var(--wiski-yellow)','var(--wiski-cream)','#4c4c4c'];

function HeroSection({onStart}){
  return (
    <section style={wiskiHeroStyles.wrap}>
      <div style={wiskiHeroStyles.collage}>
        {WISKI_TILES.map(t=>(
          <div key={t.img} style={{...wiskiHeroStyles.tile,left:t.left,top:t.top,width:t.width,height:t.height,backgroundImage:`url(../../assets/${t.img})`}}>
            {t.child&&<div style={{...wiskiHeroStyles.tile,left:t.child.left,top:t.child.top,width:t.child.width,height:t.child.height,backgroundImage:`url(../../assets/${t.child.img})`}}/>}
          </div>
        ))}
      </div>
      <div style={wiskiHeroStyles.right}>
        <div style={wiskiHeroStyles.eyebrow}>ÁLBUMES IMPRESOS PARA TODO EL ECUADOR</div>
        <h1 style={wiskiHeroStyles.h1}>Una bestia esa foto,<br/>imprímela</h1>
        <button style={wiskiHeroStyles.cta} onClick={onStart}>Crear mi albúm</button>
        <div style={wiskiHeroStyles.dots}>{WISKI_DOTS.map(c=><span key={c} style={{...wiskiHeroStyles.dot,background:c}}/>)}</div>
      </div>
    </section>
  );
}
Object.assign(window,{HeroSection});
