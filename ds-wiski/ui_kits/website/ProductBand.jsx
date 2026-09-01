const wiskiBandStyles={
  band:{background:'var(--wiski-blue-86)',padding:'48px 0 90px',position:'relative'},
  inner:{width:1440,margin:'0 auto',padding:'0 169px',boxSizing:'border-box'},
  kicker:{fontFamily:'var(--font-core)',fontWeight:600,fontSize:'var(--size-badge)',lineHeight:'100%',color:'var(--wiski-white)'},
  sub:{marginTop:8,fontFamily:'var(--font-core)',fontWeight:600,fontSize:'var(--size-badge)',lineHeight:'100%',color:'var(--wiski-white)'},
  grid:{marginTop:24,display:'flex',gap:48},
  slot:{position:'relative',flex:1},
  badge:{position:'absolute',zIndex:2,height:20,borderRadius:'var(--radius-badge)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-core)',fontWeight:600,fontSize:'var(--size-badge)',lineHeight:'100%',color:'var(--wiski-white)',whiteSpace:'nowrap',padding:'0 8px'},
  ghost:{position:'absolute',right:22,bottom:22,width:203,height:46,borderRadius:'var(--radius-button)',background:'rgba(182,176,175,0)',border:'none',boxShadow:'var(--ring-secondary)',cursor:'pointer',fontFamily:'var(--font-core)',fontWeight:700,fontSize:'var(--size-cta)',lineHeight:'100%',color:'var(--action-secondary)'}
};
const WISKI_PRODUCTS=[
  {title:'Wiski Ruta',price:'$39',body:'Tapa dura 21x30 cm — de la maleta al librero.',image:'../../assets/photo-02.jpg',badge:{label:'Más vendido',color:'var(--wiski-blue)',left:411,top:30}},
  {title:'Wiski Momento',price:'$29',body:'Formato mini de bolsillo 15x15 cm.',image:'../../assets/photo-06.jpg',badge:{label:'Envíalo como regalo',color:'var(--wiski-yellow)',left:384,top:33}}
];

function ProductBand({onAdd,chosen}){
  const {ProductInfoCard}=window.WiskiPhotobookDesignSystem_53badd;
  return (
    <section style={wiskiBandStyles.band}>
      <div style={wiskiBandStyles.inner}>
        <div style={wiskiBandStyles.kicker}>Elige tu momento</div>
        <div style={wiskiBandStyles.sub}>Formatos pensados para lo que quieras recordar o regalar</div>
        <div style={wiskiBandStyles.grid}>
          {WISKI_PRODUCTS.map(p=>(
            <div key={p.title} style={wiskiBandStyles.slot}>
              <span style={{...wiskiBandStyles.badge,background:p.badge.color,left:p.badge.left,top:p.badge.top}}>{p.badge.label}</span>
              <ProductInfoCard title={p.title} price={p.price} body={p.body} image={p.image} style={{width:'100%',height:461,boxSizing:'border-box'}}/>
              <button style={wiskiBandStyles.ghost} onClick={()=>onAdd(p.title)}>{chosen===p.title?'Añadido ✓':'Empecemos'}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window,{ProductBand});
