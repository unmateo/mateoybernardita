"use client";

import Bottle from './components/bottle';
import Ribbon from './components/ribbon';
import BankDetailsDialog from './components/BankDetailsDialog';
import RSVPDialog from './components/RSVPDialog';
import styles from './page.module.css';
import { useState } from 'react';

export default function EventoPage() {
  const [isBankDialogOpen, setIsBankDialogOpen] = useState(false);
  const [isRSVPDialogOpen, setIsRSVPDialogOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Mateo & Bernardita</h1>
        <h2 className={styles.subtitle}>¡NOS CASAMOS!</h2>
      </header>

      <p className={styles.infoText}>
              20 de Septiembre · 11:00 hs<br />
            Dardo Rocha 2290, Martinez
            </p>
        <button onClick={() => setIsRSVPDialogOpen(true)} className={styles.buttonInverted}>
          Confirmar asistencia
        </button>
      <div style={{marginTop: '1rem'}}>
        <Ribbon/>
      <p style={{marginTop:0}}>Dress Code: <i>Elegante pero chill</i></p>
      </div>
      <Bottle/>
      <p style={{marginTop:0}}>Si querés hacernos un regalo,<br/>
      podés colaborar con nuestra luna de miel:<br/>
       </p>
      <button onClick={() => setIsBankDialogOpen(true)} className={styles.buttonInverted}>
          Ver datos bancarios
      </button>
      <BankDetailsDialog 
        isOpen={isBankDialogOpen}
        onClose={() => setIsBankDialogOpen(false)}
      />
      <RSVPDialog
        isOpen={isRSVPDialogOpen}
        onClose={() => setIsRSVPDialogOpen(false)}
      />
      <footer style={{margin: '2rem'}}>
        <img src="/auto.png" style={{width: '80px'}} />
      <h2 className={styles.subtitle} style={{marginTop:0}} >¡Te esperamos!</h2>
      </footer>
    </div>
  );
} 