
export default function Page() {
  return (
    <div style={{ 
      backgroundColor: "#fffef8", 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      overflow: 'hidden'
    }}>
      <img src="/background.gif" alt="background" style={{ 
          maxWidth: '100%', 
          maxHeight: '100%', 
          objectFit: 'contain', 
          margin: '20px 0px !important'
        }} />
    </div>
  )
  }  