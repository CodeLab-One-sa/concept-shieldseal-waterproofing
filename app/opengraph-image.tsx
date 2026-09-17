import { ImageResponse } from "next/og";
export const runtime="edge";
export const alt="ShieldSeal Waterproofing: NHBRC-registered specialists, Johannesburg";
export const size={ width:1200, height:630 };
export const contentType="image/png";
export default function Image() {
  return new ImageResponse((
    <div style={{ width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#0A0A0A",padding:"80px",fontFamily:"sans-serif",position:"relative" }}>
      <div style={{ position:"absolute",top:0,left:0,right:0,height:2,backgroundColor:"#00B4C6" }} />
      <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:40 }}>
        <div style={{ width:52,height:52,border:"1.5px solid #00B4C6",display:"flex",alignItems:"center",justifyContent:"center",color:"#00B4C6",fontSize:22 }}>🛡</div>
        <div>
          <div style={{ display:"flex",gap:2 }}>
            <span style={{ color:"white",fontSize:22,fontWeight:900,letterSpacing:"-0.01em" }}>SHIELD</span>
            <span style={{ color:"#00B4C6",fontSize:22,fontWeight:900,letterSpacing:"-0.01em" }}>SEAL</span>
          </div>
          <span style={{ color:"#5A6478",fontSize:11,fontFamily:"monospace",letterSpacing:"0.2em" }}>WATERPROOFING</span>
        </div>
      </div>
      <div style={{ color:"white",fontSize:56,fontWeight:900,lineHeight:1.0,marginBottom:16 }}>Water stopped.<br />Guaranteed.</div>
      <div style={{ color:"rgba(255,255,255,0.45)",fontSize:20,marginBottom:48,fontFamily:"monospace" }}>NHBRC-registered specialists since 2011. Johannesburg and Gauteng.</div>
      <div style={{ display:"flex",gap:0,border:"1px solid rgba(0,180,198,0.3)" }}>
        {[["14 yr","Experience"],["2 400+","Jobs done"],["10 yr","Guarantee"]].map(([v,l],i) => (
          <div key={l} style={{ padding:"16px 28px",borderRight:i<2?"1px solid rgba(0,180,198,0.3)":undefined }}>
            <div style={{ color:"#00B4C6",fontSize:26,fontWeight:900,fontFamily:"monospace" }}>{v}</div>
            <div style={{ color:"rgba(255,255,255,0.3)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ position:"absolute",bottom:0,left:0,right:0,height:2,backgroundColor:"rgba(0,180,198,0.3)" }} />
    </div>
  ), { ...size });
}
