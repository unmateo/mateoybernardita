
export default function Page() {
  return (
    <div style={{ 
      backgroundColor: "#fffef8", 
      height: '100vh',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      margin: 'auto',
      width: '100%',
      overflow: 'hidden',
    }}>
      <img src="/background.gif" alt="background" style={{ 
          maxWidth: '80%', 
          maxHeight: '80%', 
          objectFit: 'cover', 
          margin: '0px'
        }} />
    </div>
  )
  }  