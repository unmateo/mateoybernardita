"use client";

import { useState } from 'react';
import styles from './BankDetailsDialog.module.css';

interface BankDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BankDetailsDialog({ isOpen, onClose }: BankDetailsDialogProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>Datos Bancarios</h2>
        <div className={styles.content}>
          <p>Banco: Santander</p>
          <p>Titular: Bernardita De Luca</p>
          <p>CBU: 0720038088000015218490</p>
        </div>
        <div className={styles.content}>
          <p>Banco: Santander</p>
          <p>Titular: Mateo Harfuch Tosi Loza</p>
          <p>CBU: 0720038088000015218490</p>
        </div>
      </div>
    </div>
  );
} 