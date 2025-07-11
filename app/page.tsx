"use client";

import Bottle from './evento/components/bottle';
import Ribbon from './evento/components/ribbon';
import BankDetailsDialog from './evento/components/BankDetailsDialog';
import RSVPDialog from './evento/components/RSVPDialog';
import styles from './evento/page.module.css';
import { useState } from 'react';

export default function Page() {
  const [isBankDialogOpen, setIsBankDialogOpen] = useState(false);
  const [isRSVPDialogOpen, setIsRSVPDialogOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Mateo & Bernardita</h1>
        <h2 className={styles.subtitle}>¡NOS CASAMOS!</h2>
      </header>

      <p className={styles.infoText}>
              20 de Septiembre · 11:15 hs<br />
            <a 
              href="https://maps.app.goo.gl/ukFK7i1yncSZMHTn9" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#165054', textDecoration: 'underline', textDecorationColor: '#165054', textDecorationThickness: 'from-font', textDecorationStyle: 'dotted', textUnderlineOffset: '4px' }}
            >
              Dardo Rocha 2290, Martinez
            </a>
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