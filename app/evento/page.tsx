import styles from './page.module.css';
import Link from 'next/link';
import InteractiveButton from './components/InteractiveButton';

export default function EventoPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Mateo & Bernardita</h1>
        <h2 className={styles.subtitle}>¡NOS CASAMOS!</h2>
      </header>

      <section className={styles.section}>
        <div className={styles.locationCard}>
          <h3 className={styles.sectionTitle}>Ceremonia</h3>
          <p className={styles.infoText}>
            20 de Septiembre<br />
            11:00 hs<br />
            Deriva<br />
            Dardo Rocha 2290, Martinez
          </p>
          <a 
            href="https://maps.app.goo.gl/AMEU1myUznB2GhvW7" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.button}
          >
            Ver ubicación
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>¡Queremos compartir este día contigo!</h3>
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
        <div className={styles.bankInfo}>
          <p>Santander<br />
          Bernardita Suárez<br />
          12345678<br />
          Caja de Ahorro U$S</p>
        </div>
      </section>

      <footer className={styles.section}>
        <p className={styles.infoText}>¡TE ESPERAMOS!</p>
      </footer>
    </div>
  );
} 