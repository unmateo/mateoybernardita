import Flower from './components/flower';
import styles from './page.module.css';
import Link from 'next/link';

export default function EventoPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Mateo & Bernardita</h1>
        <h2 className={styles.subtitle}>¡NOS CASAMOS!</h2>
      </header>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.locationCard}>
            <h3 className={styles.sectionTitle}>Cuándo</h3>
            <p className={styles.infoText}>
              20 de Septiembre<br />
              11:00 hs<br />
            </p>
            <a 
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjdxNWwyYXVtM2sxZWo2cmJuM2ltMG9hcXIgMWFhMzVmZmNkMDlkMzM2YmE1ZDEyOGQ1MTk0MGJjYzY2MjY1ZmNjNTI5ZWM1NzhlMGI5ZjQ5MTBjZGM0OWYwMEBn&tmsrc=1aa35ffcd09d336ba5d128d51940bcc66265fcc529ec578e0b9f4910cdc49f00%40group.calendar.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.buttonInverted}
            >
              Agendar evento
            </a>
          </div>

          <div className={styles.locationCard}>
            <h3 className={styles.sectionTitle}>Dónde</h3>
            <p className={styles.infoText}>
              Deriva<br />
              Dardo Rocha 2290, Martinez
            </p>
            <a 
              href="https://maps.app.goo.gl/AMEU1myUznB2GhvW7" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.buttonInverted}
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </section>

      <Flower/>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>¡Queremos compartir este día con vos!</h3>
        <p className={styles.infoText}>
          Confirmá asistencia y completá algunas preguntas en el siguiente formulario.
        </p>
        <Link href="/rsvp" className={styles.button}>
          Confirmar asistencia
        </Link>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Dress Code</h3>
        <p className={styles.infoText}>Elegante pero chill</p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Quiero regalar</h3>
        <p className={styles.infoText}>Si deseas hacernos un regalo...</p>
        <div className={styles.bankInfo}>
          <p>Itaú<br />
          Mateo Rodríguez<br />
          12345678<br />
          Caja de Ahorro $</p>
        </div>
      </section>

      <footer className={styles.section}>
        <p className={styles.infoText}>¡TE ESPERAMOS!</p>
      </footer>
    </div>
  );
} 