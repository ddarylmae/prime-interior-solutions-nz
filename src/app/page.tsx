import Image from 'next/image';
import styles from './styles.module.css';

const PHONE = '021 XXX XXXX'; // TODO: Replace with actual phone number
const PHONE_HREF = 'tel:+640210000000'; // TODO: Replace with actual number

export default function Home() {
  return (
    <div className={styles.wrapper}>

      {/* ===== HEADER ===== */}
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <Image
            src="/logo-img.png"
            alt="Prime Interior Solutions Logo"
            width={46}
            height={46}
            className={styles.headerLogoImg}
          />
          <div className={styles.headerBrand}>
            <span className={styles.brandMain}>Prime Interior</span>
            <span className={styles.brandSub}>Solutions</span>
          </div>
        </div>
        <div className={styles.headerActions}>
          <a href={PHONE_HREF} className={styles.phoneBtn}>
            <PhoneIcon />
            <span className={styles.phoneBtnLabel}>{PHONE}</span>
          </a>
          <a href="#contact" className={styles.quoteBtn}>Get a Quote</a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        {/* Shown only on desktop */}
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Your Trusted New Zealand</p>
          <h1 className={styles.heroHeading}>
            Interior &amp; Plastering<br />Specialists
          </h1>
          <p className={styles.heroDesc}>
            Professional plastering, painting, and interior solutions.
            Quality workmanship you can count on.
          </p>
          <div className={styles.heroCtas}>
            <a href="#contact" className={styles.heroPrimary}>Get a Quote</a>
            <a href={PHONE_HREF} className={styles.heroOutline}>
              <PhoneIcon />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ===== INTRO — mobile only, appears below hero ===== */}
      <section className={styles.intro}>
        <div className={styles.introLogoWrap}>
          <Image
            src="/logo-img.png"
            alt="Prime Interior Solutions"
            width={80}
            height={80}
          />
        </div>
        <p className={styles.introEyebrow}>PROFESSIONAL</p>
        <h2 className={styles.introTitle}>
          Interior &amp; Plastering<br />Solutions<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.introDesc}>
          At Prime Interior Solutions we provide professional plastering,
          painting and interior decorating services across New Zealand.
          We pride ourselves on quality results for every project, big or small.
        </p>
        <div className={styles.introCtas}>
          <a href="#contact" className={styles.ctaPrimary}>Get a Quote</a>
          <a href={PHONE_HREF} className={styles.ctaPhone}>
            <PhoneIcon />
            {PHONE}
          </a>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrap}><StarIcon /></div>
            <h3 className={styles.featureTitle}>Quality Guaranteed</h3>
            <p className={styles.featureDesc}>
              We stand behind every job we complete. Our team takes pride
              in delivering top-quality results that meet and exceed your expectations.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrap}><BrushIcon /></div>
            <h3 className={styles.featureTitle}>Expert Plastering &amp; Painting</h3>
            <p className={styles.featureDesc}>
              Specialists in interior plastering, painting, and decorating.
              From minor repairs to full renovations — done to a high standard.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrap}><ChatIcon /></div>
            <h3 className={styles.featureTitle}>Communication &amp; Accessibility</h3>
            <p className={styles.featureDesc}>
              We keep you informed every step of the way. Easy to reach and
              quick to respond — your project is always our priority.
            </p>
          </div>

        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <span className={styles.eyebrow}>WHAT WE DO</span>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>

            <div className={styles.serviceCard}>
              <span className={styles.serviceNum}>01</span>
              <h3 className={styles.serviceTitle}>Plastering</h3>
              <p className={styles.serviceDesc}>
                Interior and exterior plastering, stopping, and solid plaster
                for new builds and renovations.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <span className={styles.serviceNum}>02</span>
              <h3 className={styles.serviceTitle}>Painting &amp; Decorating</h3>
              <p className={styles.serviceDesc}>
                Full interior and exterior painting including feature walls,
                trims, and ceiling work.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <span className={styles.serviceNum}>03</span>
              <h3 className={styles.serviceTitle}>Interior Solutions</h3>
              <p className={styles.serviceDesc}>
                Wallpaper hanging, texture coating, colour consultation,
                and finishing touches for your space.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <span className={styles.serviceNum}>04</span>
              <h3 className={styles.serviceTitle}>Residential &amp; Commercial</h3>
              <p className={styles.serviceDesc}>
                Serving homeowners, property managers, and builders
                across New Zealand with reliable results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CONTACT / CTA ===== */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactContent}>
          <span className={styles.eyebrowLight}>GET STARTED</span>
          <h2 className={styles.contactTitle}>Get a Free Quote Today</h2>
          <p className={styles.contactDesc}>
            Contact us and we&apos;ll get back to you promptly to discuss your project.
          </p>
          <div className={styles.contactActions}>
            <a href={PHONE_HREF} className={styles.contactPhoneBtn}>
              <PhoneIcon />
              {PHONE}
            </a>
          </div>
          <div className={styles.socialRow}>
            <a href="https://facebook.com/primeinteriorsolutionsnz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={28} height={28} />
            </a>
            <a href="https://instagram.com/prime.interior" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={28} height={28} />
            </a>
            <a href="https://builderscrack.co.nz/tradies/1yfg6pr0/prime-interior-solutions" target="_blank" rel="noopener noreferrer" aria-label="Builderscrack">
              <Image src="/builderscrack.png" alt="Builderscrack" width={28} height={28} />
            </a>
            <a href="https://www.nocowboys.co.nz/businesses/prime-interior-solutions-ltd" target="_blank" rel="noopener noreferrer" aria-label="NoCowboys">
              <Image src="/nocowboys.png" alt="NoCowboys" width={28} height={28} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Image src="/logo-img.png" alt="Prime Interior Solutions" width={36} height={36} />
            <div className={styles.footerBrandText}>
              <span className={styles.footerBrandMain}>Prime Interior</span>
              <span className={styles.footerBrandSub}>Solutions</span>
            </div>
          </div>
          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} Prime Interior Solutions Ltd. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.63a16 16 0 0 0 5.45 5.45l.97-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 3a3 3 0 0 0-3 3l-7 7 4 4 7-7a3 3 0 0 0-1-7z" />
      <path d="M6.5 21C4 21 2 19 2 16.5c0-1.5 1.5-3 3-3s3 .5 3 2-.5 5.5-1.5 6z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
