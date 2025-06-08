import Link from 'next/link';
import Head from 'next/head';
import styles from '../pages/Dashboard.module.css';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Budget Buddy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Budget Buddy</div>
        <nav>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/login" className={styles.navLink}>Login</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section
          className={`${styles.card} ${styles.spendingOverview}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h2>Spending Overview</h2>
          <div className={styles.spendingItems}>
            <img src="https://img.icons8.com/color/96/000000/shopping-cart--v1.png" alt="Groceries" />
            <span>Groceries</span>
            <span className={styles.amount}>₹4,500</span>
          </div>
          <div className={styles.spendingItems}>
            <img src="https://img.icons8.com/color/96/000000/restaurant.png" alt="Dining" />
            <span>Dining</span>
            <span className={styles.amount}>₹2,200</span>
          </div>
          <div className={styles.spendingItems}>
            <img src="https://img.icons8.com/color/96/000000/car--v1.png" alt="Transport" />
            <span>Transport</span>
            <span className={styles.amount}>₹1,500</span>
          </div>
          <div className={styles.spendingItems}>
            <img src="https://img.icons8.com/color/96/000000/ticket.png" alt="Entertainment" />
            <span>Entertainment</span>
            <span className={styles.amount}>₹1,100</span>
          </div>
        </section>

        <section
          className={`${styles.card} ${styles.upcomingBills}`}
          style={{ animationDelay: '0.3s' }}
        >
          <h2>Upcoming Bills</h2>
          <ul>
            <li>
              <div className={styles.billDetails}>
                Electricity Bill
                <small>Due: 15 June 2025</small>
              </div>
              <div className={styles.billAmount}>₹3,200</div>
            </li>
            <li>
              <div className={styles.billDetails}>
                Internet Bill
                <small>Due: 18 June 2025</small>
              </div>
              <div className={styles.billAmount}>₹850</div>
            </li>
            <li>
              <div className={styles.billDetails}>
                Credit Card Payment
                <small>Due: 22 June 2025</small>
              </div>
              <div className={styles.billAmount}>₹5,000</div>
            </li>
            <li>
              <div className={styles.billDetails}>
                Water Bill
                <small>Due: 25 June 2025</small>
              </div>
              <div className={styles.billAmount}>₹600</div>
            </li>
          </ul>
        </section>

        <section
          className={`${styles.card} ${styles.incomeExpense}`}
          style={{ animationDelay: '0.5s' }}
        >
          <h2>Income & Expense Summary</h2>
          <p>Total Income: <strong>₹50,000</strong></p>
          <p>Total Expenses: <strong>₹20,000</strong></p>
          <p>Balance: <strong>₹30,000</strong></p>
        </section>
      </main>
    </>
  );
}

