import Image from "next/image";
import styles from "./page.module.css";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.headerBar}>
        <button className={styles.sidebarBtn} aria-label="Open sidebar">
          <span />
          <span />
          <span />
        </button>
        <div className={styles.logoAndTitle}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={90}
            className={styles.logo}
          />
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>Prime Interior Solutions</h1>
            <div className={styles.tagline}>
              <span>Residential Building, Plastering, Painting & Decorating</span>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <TestimonialCarousel />

        <ul className={styles.socialsList}>
          <li>
            <a href="https://facebook.com/primeinteriorsolutionsnz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} /> primeinteriorsolutionsnz
            </a>
          </li>
          <li>
            <a href="https://instagram.com/prime.interior" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} /> prime.interior
            </a>
          </li>
          <li>
            <a href="https://builderscrack.co.nz/tradies/1yfg6pr0/prime-interior-solutions" target="_blank" rel="noopener noreferrer" aria-label="Website 1">
              <Image src="/builderscrack.png" alt="Builderscrack" width={24} height={24} /> Builderscrack Business Profile
            </a>
          </li>
          <li>
            <a href="https://www.nocowboys.co.nz/businesses/prime-interior-solutions-ltd" target="_blank" rel="noopener noreferrer" aria-label="Website 2">
              <Image src="/nocowboys.png" alt="NoCowboys" width={24} height={24} /> NoCowboys Business Profile
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}