const wiskiHeaderStyles={bar:{height:120,background:'var(--wiski-blue-86)',display:'flex',alignItems:'center',padding:'0 40px',boxSizing:'border-box',gap:32},nav:{display:'flex',gap:8,alignItems:'center',margin:'0 auto'},icons:{display:'flex',gap:8,alignItems:'center'},iconBtn:{width:40,height:40,border:'none',background:'transparent',display:'grid',placeItems:'center',cursor:'pointer',padding:0,position:'relative'},count:{position:'absolute',top:2,right:0,minWidth:16,height:16,borderRadius:9999,background:'var(--wiski-orange)',color:'var(--wiski-cream)',fontFamily:'var(--font-core)',fontWeight:700,fontSize:10,display:'grid',placeItems:'center',padding:'0 4px'}};

function SiteHeader({links,active,onSelect,cart}){
  const {NavigationPill}=window.WiskiPhotobookDesignSystem_53badd;
  return (
    <header style={wiskiHeaderStyles.bar}>
      <img src="../../assets/logo-wiski.png" alt="Wiski Photobook" style={{height:44,display:'block'}}/>
      <nav style={wiskiHeaderStyles.nav}>
        {links.map(l=>(
          <div key={l} onClick={()=>onSelect(l)} style={{cursor:'pointer'}}>
            <NavigationPill label={l} state={active===l?'active':'default'} style={active===l?{backgroundColor:'var(--wiski-white)'}:{color:'var(--wiski-white)'}}/>
          </div>
        ))}
      </nav>
      <div style={wiskiHeaderStyles.icons}>
        <button style={wiskiHeaderStyles.iconBtn} aria-label="Cuenta"><img src="../../assets/icons/user.svg" alt="" style={{height:25.592}}/></button>
        <button style={wiskiHeaderStyles.iconBtn} aria-label="Carrito">
          <img src="../../assets/icons/shopping-cart-simple.svg" alt="" style={{height:21.75}}/>
          {cart>0&&<span style={wiskiHeaderStyles.count}>{cart}</span>}
        </button>
      </div>
    </header>
  );
}
Object.assign(window,{SiteHeader});
