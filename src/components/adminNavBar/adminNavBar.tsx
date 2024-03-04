import { FC } from 'react';
import Link from 'next/link';
import styles from './adminNavBar.module.css'

const AdminNavBar: FC = () => {
  return (
    <div>
      <h1 className={styles.title}>Flower Home</h1>
      <nav>
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/products'>Products</Link>
      </nav>
    </div>
  );
}



export default AdminNavBar