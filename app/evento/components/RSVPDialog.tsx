"use client";

import { useState } from 'react';
import styles from './RSVPDialog.module.css';

interface RSVPDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RSVPDialog({ isOpen, onClose }: RSVPDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    companion: '',
    attending: 'yes',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Google Forms submission URL
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScCxaNaicBs1dCh9l16EHrsXgJPZ3VSZOS-x3A8ikS7YaMidQ/formResponse';
      
      // Create form data
      const data = new FormData();
      
      // Debug: Log the form data being sent
      const formDataToSend = {
        name: formData.name,
        companion: formData.companion,
        attending: formData.attending === 'yes' ? 'Si' : 'No',
        message: formData.message
      };
      console.log('Sending form data:', formDataToSend);

      data.append('entry.473591687', formData.name); // Nombre y apellido
      data.append('entry.944436705', formData.companion); // Nombre acompañante
      const attendingValue = formData.attending === 'yes' ? 'Si' : 'No';
      data.append('entry.39838116', attendingValue); // Asistiré
      data.append('entry.448697546', formData.message); // Mensaje para los novios


      // Submit to Google Forms with error handling
      try {
        const response = await fetch(formUrl, {
          method: 'POST',
          body: data,
          mode: 'no-cors' // Required for Google Forms
        });
        console.log('Response status:', response.status);
        console.log('Response type:', response.type);
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
        throw fetchError;
      }

      setSuccess(true);
      onClose();
    } catch (err) {
      console.error('Error:', err);
      setError('Hubo un error al enviar el formulario. Por favor, intentá de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        {success ? (
          <div className={styles.success}>
            <p>¡Gracias por confirmar!</p>
            <p style={{fontSize: '1.4rem'}}>Nos vemos pronto.</p>
            <a 
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjdxNWwyYXVtM2sxZWo2cmJuM2ltMG9hcXIgMWFhMzVmZmNkMDlkMzM2YmE1ZDEyOGQ1MTk0MGJjYzY2MjY1ZmNjNTI5ZWM1NzhlMGI5ZjQ5MTBjZGM0OWYwMEBn&tmsrc=1aa35ffcd09d336ba5d128d51940bcc66265fcc529ec578e0b9f4910cdc49f00%40group.calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.calendarButton}
            >
              Agendar evento
            </a>
          </div>
        ) : (
          <>
        <h2 className={styles.title}>Confirmar asistencia</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre y apellido</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="companion">Si fuiste invitado con un acompañante, <br/>indicanos su nombre y apellido</label>
              <input
                type="text"
                id="companion"
                value={formData.companion}
                onChange={e => setFormData({...formData, companion: e.target.value})}
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label>¿Vas a asistir?</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={e => setFormData({...formData, attending: e.target.value})}
                    disabled={isSubmitting}
                  />
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={e => setFormData({...formData, attending: e.target.value})}
                    disabled={isSubmitting}
                  />
                  No
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje para los novios</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                rows={3}
                disabled={isSubmitting}
              />
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          </>
        )}
      </div>
    </div>
  );
} 