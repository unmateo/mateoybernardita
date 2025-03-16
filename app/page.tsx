

export default function Page() {
  return (
    <div style={{ 
      backgroundColor: "#faf6eb",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center",
      overflow: "hidden",
      margin: 0,
      padding: 0,
      position: "fixed",
      top: 0,
      left: 0
    }}>
      <p style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 100, margin: "0.5rem"}}>Mateo y</p>
      <p style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 100, margin: "0.5rem"}}>Bernardita</p>
      <img 
        src="/dancers.gif"
        alt="background"
        style={{
          margin: "1rem",
          maxWidth: "80%",
          maxHeight: "400px",
          objectFit: "contain"
        }}
      />
      <p style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, margin:"0.5rem" }}>20.09.2025</p>
      <p style={{ fontSize: "clamp(1rem, 2vw, 2rem)", fontWeight: 200, margin:"0.5rem" }}>San Isidro, Buenos Aires</p>
    </div>
  )
}