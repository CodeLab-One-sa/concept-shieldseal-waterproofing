import { ImageResponse } from "next/og";
export const runtime     = "edge";
export const alt         = "ShieldSeal Waterproofing: Johannesburg Specialists";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse((
    <div style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center", backgroundColor:"#090A0A", padding:"80px", fontFamily:"sans-serif", position:"relative" }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px", backgroundColor:"#00AAC2" }} />
      <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"44px" }}>
        <div style={{ width:"52px", height:"52px", border:"2px solid #00AAC2", display:"flex", alignItems:"center", justifyContent:"center", color:"#00AAC2", fontSize:"22px" }}>💧</div>
        <div>
          <div style={{ display:"flex", gap:"0" }}>
            <span style={{ color:"white", fontSize:"26px", fontWeight:900, letterSpacing:"-0.02em" }}>SHIELD</span>
            <span style={{ color:"#00AAC2", fontSize:"26px", fontWeight:900, letterSpacing:"-0.02em" }}>SEAL</span>
          </div>
          <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"11px", fontFamily:"monospace", letterSpacing:"0.22em", textTransform:"uppercase", margin:0 }}>Waterproofing</p>
        </div>
      </div>
      <p style={{ color:"white", fontSize:"60px", fontWeight:900, lineHeight:1.0, margin:"0 0 18px", letterSpacing:"-0.02em" }}>Water stopped.<br />Guaranteed.</p>
      <p style={{ color:"rgba(255,255,255,0.45)", fontSize:"20px", margin:"0 0 48px", fontFamily:"monospace" }}>NHBRC-registered specialists since 2011 · Johannesburg and Gauteng</p>
      <div style={{ display:"flex", gap:"0", border:"1px solid rgba(0,170,194,0.32)" }}>
        {[["14 yr","In Johannesburg"],["2 400+","Jobs done"],["10 yr","Guarantee"]].map(([v,l], i) => (
          <div key={l} style={{ padding:"16px 28px", borderRight: i < 2 ? "1px solid rgba(0,170,194,0.32)" : undefined }}>
            <p style={{ color:"#00AAC2", fontSize:"28px", fontWeight:900, fontFamily:"monospace", margin:0, lineHeight:1 }}>{v}</p>
            <p style={{ color:"rgba(255,255,255,0.30)", fontSize:"11px", fontFamily:"monospace", letterSpacing:"0.15em", textTransform:"uppercase", margin:"4px 0 0" }}>{l}</p>
          </div>
        ))}
      </div>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"3px", backgroundColor:"rgba(0,170,194,0.35)" }} />
    </div>
  ), { ...size });
}
