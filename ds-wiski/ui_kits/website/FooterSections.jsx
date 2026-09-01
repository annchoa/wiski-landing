const wiskiFootStyles={
  reviews:{background:'var(--surface-band-reviews)',padding:'0 0 0'},
  reviewsInner:{width:1440,margin:'0 auto',padding:'0 114px',boxSizing:'border-box'},
  faq:{background:'var(--wiski-white)',padding:'60px 0'},
  faqImg:{width:753,height:493,margin:'0 auto',background:'url(../../assets/faq-panel.png) center / contain no-repeat'},
  footer:{background:'var(--wiski-white)',padding:'0 0 40px',display:'flex',flexDirection:'column',alignItems:'center',gap:24},
  pay:{width:981,height:59,background:'url(../../assets/payment-methods.png) center / contain no-repeat'},
  legal:{display:'flex',gap:24,flexWrap:'wrap',justifyContent:'center'},
  legalItem:{fontFamily:'var(--font-core)',fontWeight:400,fontSize:'var(--size-legal)',lineHeight:'100%',color:'var(--wiski-black)'}
};
const WISKI_LEGAL=['@ 2026, wisky','Política de privacidad','Política de reembolso','Términos del servicio','Política de envío','Información de contacto','Preferencias de cookies'];

function ReviewsBand(){
  const {CardGridReviews}=window.WiskiPhotobookDesignSystem_53badd;
  return (
    <section className="wiski-reviews" style={wiskiFootStyles.reviews}>
      <div style={wiskiFootStyles.reviewsInner}>
        <CardGridReviews platform="desktop" style={{background:'transparent',width:'100%',boxSizing:'border-box'}}/>
      </div>
    </section>
  );
}

function FaqSection(){
  return <section style={wiskiFootStyles.faq}><div style={wiskiFootStyles.faqImg}/></section>;
}

function SiteFooter(){
  return (
    <footer style={wiskiFootStyles.footer}>
      <img src="../../assets/logo-wiski.png" alt="Wiski Photobook" style={{height:44,display:'block'}}/>
      <div style={wiskiFootStyles.pay}/>
      <div style={wiskiFootStyles.legal}>
        {WISKI_LEGAL.map(l=><span key={l} style={wiskiFootStyles.legalItem}>{l}</span>)}
      </div>
    </footer>
  );
}
Object.assign(window,{ReviewsBand,FaqSection,SiteFooter});
