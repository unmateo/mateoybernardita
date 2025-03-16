

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
      <p style={{ fontSize: "2.5rem", fontWeight: 200, margin: "0.5rem"}}>Mateo y Bernardita</p>
      <img 
        src="/dancers.gif"
        alt="background"
        style={{
          margin: "0.5rem",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain"
        }}
      />
      <p style={{ fontSize: "2.5rem", fontWeight: 300, margin:"0.5rem" }}>20.09.2025</p>
      <p style={{ fontSize: "1.5rem", fontWeight: 200, margin:"0.5rem" }}>San Isidro, Buenos Aires</p>
      <p style={{ fontSize: "2.5rem", fontWeight: 300, margin:"0.5rem" }}>SAVE THE DATE!</p>
    </div>
  )
}