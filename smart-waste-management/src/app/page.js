import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Smart Waste Management</h1>
      </div>

      <div className={styles.description}>
        <p>Monitor and manage waste levels across the campus in real-time.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Bin Statuses</h2>
          <p>Check the current status of all bins on campus.</p>
        </div>

        <div className={styles.card}>
          <h2>Report Issues</h2>
          <p>Report any issues with bins directly through the app.</p>
        </div>

        <div className={styles.card}>
          <h2>Notifications</h2>
          <p>Receive notifications when bins are full.</p>
        </div>

        <div className={styles.card}>
          <h2>Optimized Routes</h2>
          <p>View and manage the most efficient collection routes.</p>
        </div>
      </div>
    </main>
  );
}
