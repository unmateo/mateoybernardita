
export default function Page() {
  return (
    <div style={{ 
      backgroundColor: "#fffef8", 
      height: '100vh',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      margin: 'auto'
    }}>
      <img src="/background.gif" alt="background" style={{ 
          maxWidth: '70%', 
          maxHeight: '70%', 
          objectFit: 'cover', 
          margin: '0px'
        }} />
    </div>
  )
  }  