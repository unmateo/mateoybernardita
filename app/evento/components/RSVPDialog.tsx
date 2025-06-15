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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
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
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="companion">Si fuiste invitado con un acompañante, <br/>indicanos su nombre y apellido</label>
            <input
              type="text"
              id="companion"
              value={formData.companion}
              onChange={e => setFormData({...formData, companion: e.target.value})}
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
                />
                Sí, asistiré
              </label>
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === 'no'}
                  onChange={e => setFormData({...formData, attending: e.target.value})}
                />
                No podré asistir
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
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
} 