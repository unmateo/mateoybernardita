'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false
})

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    confirmacion: '',
    nombreInvitado: ''
  })
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const isFormValid = formData.nombre.trim() !== '' && formData.confirmacion !== ''

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid || isSubmitting || isSubmitted) return

    setIsSubmitting(true)
    const formUrl = 'something';
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        setShowConfetti(true)
        setTimeout(() => {
          setShowConfetti(false)
        }, 5000) // Hide confetti after 5 seconds
        setIsSubmitted(true)
      } else {
        console.error('Error')
      }
    } catch (error) {
      console.error('Error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getButtonText = () => {
    if (isSubmitting) return 'Confirmando...'
    if (isSubmitted) return `¡Gracias ${formData.nombre}!`
    return 'Confirmar'
  }

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
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      
      <h1 style={{ 
        fontSize: "clamp(2rem, 4vw, 3rem)", 
        fontWeight: 100, 
        margin: "2rem",
        fontFamily: "'Courier Prime', monospace"
      }}>
        Confirmar Asistencia
      </h1>

      <form 
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "90%",
          maxWidth: "400px",
          padding: "2rem",
        }}
      >
        <input 
          required
          name="nombre" 
          placeholder="Nombre y Apellido" 
          value={formData.nombre}
          onChange={handleInputChange}
          disabled={isSubmitted}
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontFamily: "'Courier Prime', monospace",
            opacity: isSubmitted ? 0.7 : 1,
            cursor: isSubmitted ? 'not-allowed' : 'text'
          }}
        />

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        }}>
          <label style={{
            fontSize: "1rem",
            color: "#4a4a4a",
            fontFamily: "'Courier Prime', monospace"
          }}>
            ¿Podrás acompañarnos?
          </label>
          
          <div style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "0.5rem"
          }}>
            <label style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: isSubmitted ? 'not-allowed' : 'pointer',
              fontSize: "1rem",
              fontFamily: "'Courier Prime', monospace",
              opacity: isSubmitted ? 0.7 : 1
            }}>
              <input 
                type="radio" 
                name="confirmacion" 
                value="si"
                required
                checked={formData.confirmacion === 'si'}
                onChange={handleInputChange}
                disabled={isSubmitted}
                style={{
                  cursor: isSubmitted ? 'not-allowed' : 'pointer'
                }}
              />
              Sí, allí estaré
            </label>

            <label style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: isSubmitted ? 'not-allowed' : 'pointer',
              fontSize: "1rem",
              fontFamily: "'Courier Prime', monospace",
              opacity: isSubmitted ? 0.7 : 1
            }}>
              <input 
                type="radio" 
                name="confirmacion" 
                value="no"
                checked={formData.confirmacion === 'no'}
                onChange={handleInputChange}
                disabled={isSubmitted}
                style={{
                  cursor: isSubmitted ? 'not-allowed' : 'pointer'
                }}
              />
              No podré asistir
            </label>
          </div>
        </div>

        <label style={{
            fontSize: "1rem",
            color: "#4a4a4a",
            fontFamily: "'Courier Prime', monospace"
          }}>
            Si fuiste invitado con acompañante, indica su nombre y apellido
          </label>
        <input 
          required
          name="nombreInvitado" 
          placeholder="Nombre y Apellido del acompañante" 
          value={formData.nombreInvitado}
          onChange={handleInputChange}
          disabled={isSubmitted}
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontFamily: "'Courier Prime', monospace",
            opacity: isSubmitted ? 0.7 : 1,
            cursor: isSubmitted ? 'not-allowed' : 'text'
          }}
        />
        <button 
          type="submit"
          disabled={!isFormValid || isSubmitting || isSubmitted}
          style={{
            padding: "1rem",
            fontSize: "1rem",
            backgroundColor: isSubmitted ? "#4CAF50" : (isFormValid && !isSubmitting ? "#4a4a4a" : "#cccccc"),
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: (!isFormValid || isSubmitting || isSubmitted) ? "not-allowed" : "pointer",
            fontFamily: "'Courier Prime', monospace",
            transition: "all 0.2s ease"
          }}
        >
          {getButtonText()}
        </button>
      </form>
    </div>
  )
}
