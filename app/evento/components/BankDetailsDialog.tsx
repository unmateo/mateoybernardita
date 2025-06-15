"use client";

import { useState } from 'react';
import styles from './BankDetailsDialog.module.css';
import CopyIcon from './CopyIcon';
import CheckIcon from './CheckIcon';

interface BankDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BankDetailsDialog({ isOpen, onClose }: BankDetailsDialogProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>Datos Bancarios</h2>
        <div className={styles.content}>
          <p><b>Banco Santander, Argentina</b></p>
          <p>Bernardita De Luca</p>
          <div className={styles.copyContainer}>
            <p>CBU: 0720038088000015218490</p>
            <button 
              className={`${styles.copyButton} ${copied === 'bernardita' ? styles.copied : ''}`}
              onClick={() => handleCopy('0720038088000015218490', 'bernardita')}
            >
              {copied === 'bernardita' ? <CheckIcon className={styles.copyIcon} /> : <CopyIcon className={styles.copyIcon} />}
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <p><b>Community Federal Savings Bank, USA</b></p>
          <p>Mateo Harfuch Tosi Loza</p>
          <div className={styles.copyContainer}>
            <p>Account Number: 8311639515</p>
            <button 
              className={`${styles.copyButton} ${copied === 'mateoNumber' ? styles.copied : ''}`}
              onClick={() => handleCopy('8311639515', 'mateoNumber')}
            >
              {copied === 'mateoNumber' ? <CheckIcon className={styles.copyIcon} /> : <CopyIcon className={styles.copyIcon} />}
            </button>
          </div>
          <div className={styles.copyContainer}>
            <p>ACH Routing Number: 026073150</p>
            <button 
              className={`${styles.copyButton} ${copied === 'mateoRouting' ? styles.copied : ''}`}
              onClick={() => handleCopy('026073150', 'mateoRouting')}
            >
              {copied === 'mateoRouting' ? <CheckIcon className={styles.copyIcon} /> : <CopyIcon className={styles.copyIcon} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 