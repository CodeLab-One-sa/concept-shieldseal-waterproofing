import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "ShieldSeal Waterproofing: Johannesburg Specialists";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse((
    <div style={{ width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#1A1D22",padding:"80px",fontFamily:"sans-serif",position:"relative" }}>
      <div style={{ position:"absolute",top:0,left:0,right:0,height:5,backgroundColor:"#E06B1A" }} />
      <div style={{ display:"flex",alignItems:"center",gap:16,marginBottom:40 }}>
        <div style={{ width:52,height:52,borderRadius:8,backgroundColor:"rgba(224,107,26,0.15)",border:"2px solid rgba(224,107,26,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24 }}>🛡</div>
        <span style={{ color:"#E06B1A",fontSize:18,fontWeight:700,letterSpacing:"0.08em" }}>SHIELDSEAL WATERPROOFING</span>
      </div>
      <div style={{ display:"flex",color:"#ffffff",fontSize:60,fontWeight:900,lineHeight:1.05,maxWidth:660,marginBottom:20 }}>Stop the leak. Fix it properly.</div>
      <div style={{ color:"rgba(255,255,255,0.55)",fontSize:22,maxWidth:560,lineHeight:1.45,marginBottom:40 }}>Johannesburg waterproofing specialists since 2011. NHBRC registered. 10-year workmanship guarantee.</div>
      <div style={{ display:"flex",gap:32,alignItems:"center" }}>
        {[["14 yr", "In Johannesburg"],["2 400+","Jobs done"],["10 yr","Guarantee"]].map(([v,l]) => (
          <div key={l} style={{ display:"flex",flexDirection:"column" }}>
            <span style={{ color:"#E06B1A",fontSize:30,fontWeight:900,lineHeight:1 }}>{v}</span>
            <span style={{ color:"rgba(255,255,255,0.35)",fontSize:13,marginTop:3 }}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{ position:"absolute",bottom:0,left:0,right:0,height:3,backgroundColor:"rgba(224,107,26,0.4)" }} />
    </div>
  ), { ...size });
}
