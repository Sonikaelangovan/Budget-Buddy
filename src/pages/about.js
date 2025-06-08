import styles from '../pages/About.module.css';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Budget Buddy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.containe}>
        <header className={styles.header}>
          <div className={styles.logo}>Budget Buddy</div>
          <nav className={styles.navLinks}>
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/contact">Contact</a>
            <a href="#">Login</a>
          </nav>
        </header>

        <section className={styles.aboutSection}>
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Budget Buddy</strong> – your trusted companion in managing personal
            finances. We are passionate about helping individuals take control of their money, plan
            smarter budgets, and achieve financial freedom with ease.
          </p>

          <p>
            Our platform offers tools to track income and expenses, set goals, view insights
            through visual charts, and receive helpful tips to improve your saving habits.
          </p>

          <p>
            Whether you're a student, a professional, or a homemaker, Budget Buddy is designed to
            make personal finance simple, intuitive, and stress-free.
          </p>

          <div className={styles.team}>
            <h2>Meet Our Team</h2>
            <div className={styles.teamMembers}>
              <div className={styles.member}>
                <img
                  src="https://img.icons8.com/color/96/administrator-male.png"
                  alt="Ravi Kumar"
                />
                <h4>Ravi Kumar</h4>
                <p>Founder & CEO</p>
              </div>

              <div className={styles.member}>
                <img
                  src="https://img.icons8.com/color/96/administrator-female.png"
                  alt="Aisha Sharma"
                />
                <h4>Aisha Sharma</h4>
                <p>Finance Expert</p>
              </div>

              <div className={styles.member}>
                <img src="https://img.icons8.com/color/96/developer.png" alt="Raj Patel" />
                <h4>Raj Patel</h4>
                <p>Lead Developer</p>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          &copy; 2025 Budget Buddy. All rights reserved.
        </footer>
      </div>
    </>
  );
}
