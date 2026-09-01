const wiskiMidStyles={
  adv:{position:'relative',height:560,background:'var(--wiski-white)'},
  advImg:{position:'absolute',left:313,top:59,width:848,height:417,background:'url(../../assets/hero-photobook-collage.png) center / contain no-repeat'},
  advHead:{position:'absolute',left:802,top:145,width:311,fontFamily:'var(--font-core)',fontWeight:700,fontSize:'var(--size-section)',lineHeight:'100%',color:'var(--wiski-black)',background:'var(--wiski-white)',paddingBottom:6},
  steps:{position:'relative',height:520,background:'var(--wiski-white)'},
  strip:{position:'absolute',left:121,top:0,width:989,height:184,background:'url(../../assets/steps-strip.png) center / cover no-repeat'},
  row:{position:'absolute',left:121,top:212,width:989,display:'flex',gap:48},
  step:{flex:1},
  stepTitle:{fontFamily:'var(--font-core)',fontWeight:600,fontSize:'var(--size-badge)',lineHeight:'100%',color:'var(--wiski-black)'},
  stepBody:{marginTop:10,fontFamily:'var(--font-core)',fontWeight:400,fontSize:11,lineHeight:1.5,color:'var(--wiski-black)',maxWidth:190},
  sparkles:{position:'absolute',left:1150,top:8,width:140,height:120},
  fourth:{position:'absolute',left:1150,top:220,fontFamily:'var(--font-core)',fontWeight:600,fontSize:'var(--size-badge)',lineHeight:'100%',color:'var(--wiski-black)'}
};
const WISKI_STEPS=[
  ['1.  Elige tu plantilla','Escoge el estilo que más se parezca a tu viaje. Todo se personaliza después en el editor.'],
  ['2.  Sube tus fotos','Las organizamos automáticamente para ti, o arma el orden tú mismo si prefieres el control total.'],
  ['3.  Personaliza tu álbum','Cambia textos, colores y portada hasta que se sienta realmente tuyo.']
];

function AdvantagesSection(){
  return (
    <section style={wiskiMidStyles.adv}>
      <div style={wiskiMidStyles.advImg}/>
      <div style={wiskiMidStyles.advHead}>Descubre las ventajas de usar Wiski</div>
    </section>
  );
}

function StepsSection(){
  return (
    <section style={wiskiMidStyles.steps}>
      <div style={wiskiMidStyles.strip}/>
      <div style={wiskiMidStyles.row}>
        {WISKI_STEPS.map(([t,b])=>(
          <div key={t} style={wiskiMidStyles.step}>
            <div style={wiskiMidStyles.stepTitle}>{t}</div>
            <div style={wiskiMidStyles.stepBody}>{b}</div>
          </div>
        ))}
      </div>
      <div style={wiskiMidStyles.sparkles}>
        <img src="../../assets/icons/star-four-md.svg" alt="" style={{position:'absolute',left:0,top:34,width:65}}/>
        <img src="../../assets/icons/star-four-lg.svg" alt="" style={{position:'absolute',left:88,top:43,width:44.598}}/>
        <img src="../../assets/icons/star-four-sm.svg" alt="" style={{position:'absolute',left:89,top:92,width:23.611}}/>
      </div>
      <div style={wiskiMidStyles.fourth}>4.  Esperalo en casa</div>
    </section>
  );
}
Object.assign(window,{AdvantagesSection,StepsSection});
