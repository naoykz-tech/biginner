'use client';

export default function Home() {
  return (
    <main>
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Biginner</h1>
          <nav style={styles.nav}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.container}>
          <h2 style={styles.heroTitle}>企業の可能性を広げる</h2>
          <p style={styles.heroSubtitle}>最高のデジタルソリューションを提供します</p>
          <button style={styles.button}>詳しく知る</button>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p style={styles.sectionText}>
            私たちは、企業のデジタル変革を支援するテクノロジーパートナーです。
            最新の技術と専門知識を活かして、ビジネスの成長を加速させます。
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>&copy; 2026 Biginner. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 0',
    borderBottom: '1px solid #ddd',
  } as React.CSSProperties,
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  } as React.CSSProperties,
  nav: {
    display: 'flex',
    gap: '2rem',
  } as React.CSSProperties,
  hero: {
    backgroundColor: '#0066cc',
    color: '#fff',
    textAlign: 'center',
    padding: '4rem 1rem',
  } as React.CSSProperties,
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  } as React.CSSProperties,
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  } as React.CSSProperties,
  button: {
    backgroundColor: '#fff',
    color: '#0066cc',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    fontWeight: 'bold',
  } as React.CSSProperties,
  section: {
    padding: '4rem 1rem',
    backgroundColor: '#fff',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  } as React.CSSProperties,
  sectionText: {
    fontSize: '1rem',
    lineHeight: '1.6',
  } as React.CSSProperties,
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '2rem 1rem',
  } as React.CSSProperties,
};
