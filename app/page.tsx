export default function Page() {
  return (
    <div style={{ 
      backgroundColor: "#fffef8", 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <img src="/background.png" alt="background" style={{ 
          maxWidth: '100%', 
          maxHeight: '90%', 
          objectFit: 'contain' 
        }} />
    </div>
  )
  }  