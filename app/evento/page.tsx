import Bottle from './components/bottle';
import Flower from './components/flower';
import Ribbon from './components/ribbon';
import Waves from './components/waves';
import styles from './page.module.css';
import Link from 'next/link';

export default function EventoPage() {
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
      <br/>
        <Link href="/rsvp" className={styles.buttonInverted}>
          Confirmar asistencia
        </Link>
      <section className={styles.section}>
      </section>
      <Ribbon/>
      <p style={{marginTop:0}}>Dress Code: <i>Elegante pero chill</i></p>
      <Bottle/>
      <p style={{marginTop:0}}>Si querés hacernos un regalo:<br/> </p>
      <Link href="/rsvp" className={styles.buttonInverted}>
          Ver datos bancarios
        </Link>
      <footer className={styles.section}>
      <h2 className={styles.subtitle} style={{marginBottom: '1rem'}}>¡Te esperamos!</h2>
      </footer>
    </div>
  );
} 