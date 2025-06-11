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
          Confirmá tu asistencia
        </Link>
      {/* <Waves/> */}
      <section className={styles.section}>
        {/* <p className={styles.sectionTitle}>¿Vas a venir?</p> */}
      </section>
      {/* <Waves/> */}

      {/* <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Dress Code</h3>
        <p className={styles.infoText}>Elegante pero chill</p>
      </section> */}
      <div>
      <Ribbon/>
      <Flower/>
      <Bottle/>
      <p><i>Dress Code:</i> Elegante pero chill</p>
      </div>
      <p>Si querés hacernos un regalo podés colaborar con nuestra luna de miel:<br/> </p>
      <Link href="/rsvp" className={styles.buttonInverted}>
          Ver datos bancarios
        </Link>
      {/* <Waves/> */}

      {/* <section className={styles.section}>
        <h3 className={styles.sectionTitle}>¿Cómo llego?</h3>
        <a 
              href="https://maps.app.goo.gl/AMEU1myUznB2GhvW7" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.buttonInverted}
            >
              ¿Cómo llegar?
            </a>
      </section>

      <Flower/> */}
{/* <br/> */}
            {/* <a 
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjdxNWwyYXVtM2sxZWo2cmJuM2ltMG9hcXIgMWFhMzVmZmNkMDlkMzM2YmE1ZDEyOGQ1MTk0MGJjYzY2MjY1ZmNjNTI5ZWM1NzhlMGI5ZjQ5MTBjZGM0OWYwMEBn&tmsrc=1aa35ffcd09d336ba5d128d51940bcc66265fcc529ec578e0b9f4910cdc49f00%40group.calendar.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.buttonInverted}
            >
              Agendá el evento
            </a> */}


      <footer className={styles.section}>
      <h2 className={styles.subtitle}>¡Te esperamos!</h2>
      </footer>
    </div>
  );
} 