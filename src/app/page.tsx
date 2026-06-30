import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { getFallbackReviews } from "./lib/googleReviews";

const PHONE = "0210 716 861";
const PHONE_HREF = "tel:+64210716861";

export default async function Home() {
  const { reviews, rating, total } = await getFallbackReviews();

  return (
    <div className={styles.wrapper}>
      {/* ===== HEADER ===== */}
      <header className={styles.header}>
        <Link href="/" className={styles.headerLogo}>
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
        </Link>
        <div className={styles.headerActions}>
          <a href={PHONE_HREF} className={styles.phoneBtn}>
            <PhoneIcon />
            <span className={styles.phoneBtnLabel}>{PHONE}</span>
          </a>
          <a href="#contact" className={styles.quoteBtn}>
            Get a Quote
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        {/* Shown only on desktop */}
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Trusted by Auckland Homeowners</p>
          <h1 className={styles.heroHeading}>
            Quality Plastering &amp; Painting
          </h1>
          <p className={styles.heroDesc}>
            Level 5 plastering, top-quality painting, and meticulous workmanship
            for Auckland homes. Built to last.
          </p>
          <div className={styles.heroCtas}>
            <a href="#contact" className={styles.heroPrimary}>
              Get a Quote
            </a>
            <a href={PHONE_HREF} className={styles.heroOutline}>
              <PhoneIcon />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrap}>
              <StarIcon />
            </div>
            <h3 className={styles.featureTitle}>Quality Workmanship</h3>
            <p className={styles.featureDesc}>
              Years of hands-on experience delivering high-quality plastering
              and painting. We take pride in clean workmanship, attention to
              detail, and leaving every home tidy.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrap}>
              <BrushIcon />
            </div>
            <h3 className={styles.featureTitle}>
              Interior Plastering &amp; Painting
            </h3>
            <p className={styles.featureDesc}>
              From small repairs to full interior projects, we provide
              professional plastering and painting tailored to your home and
              budget.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrap}>
              <ChatIcon />
            </div>
            <h3 className={styles.featureTitle}>Reliable Communication</h3>
            <p className={styles.featureDesc}>
              From your first quote to the final walkthrough, we keep you
              informed with clear communication, reliable scheduling, and prompt
              responses.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR + TESTIMONIALS ===== */}
      <section className={styles.trustBar}>
        <div className={styles.trustBarInner}>
          <span className={styles.trustNum}>9+</span>
          <div className={styles.trustText}>
            <span className={styles.trustLabel}>Years in Business</span>
            <span className={styles.trustSub}>
              Trusted by homeowners across Auckland.
            </span>
          </div>
        </div>
        <TestimonialCarousel reviews={reviews} rating={rating} total={total} />
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
                Professional interior plastering, Level 4 & Level 5 finishes,
                GIB stopping, crack repairs, and ceiling & wall repairs.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <span className={styles.serviceNum}>02</span>
              <h3 className={styles.serviceTitle}>Painting</h3>
              <p className={styles.serviceDesc}>
                Interior and exterior painting, including walls, ceilings,
                trims, doors, and full home repaints with premium finishes.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <span className={styles.serviceNum}>03</span>
              <h3 className={styles.serviceTitle}>Surface Preparation</h3>
              <p className={styles.serviceDesc}>
                Wallpaper removal, pigment sealing, water damage repairs,
                surface preparation, and paint-ready finishes.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <span className={styles.serviceNum}>04</span>
              <h3 className={styles.serviceTitle}>Residential Services</h3>
              <p className={styles.serviceDesc}>
                Providing reliable plastering and painting services for
                homeowners, landlords, and property managers across Auckland.
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
            Contact us and we&apos;ll get back to you promptly to discuss your
            project.
          </p>
          <div className={styles.contactActions}>
            <a href={PHONE_HREF} className={styles.contactPhoneBtn}>
              <PhoneIcon />
              {PHONE}
            </a>
            <a
              href="mailto:prime.interiornz@outlook.com"
              className={styles.contactEmailBtn}
            >
              <MailIcon />
              Email us
            </a>
          </div>
          <br />
          <div className={styles.socialGrid}>
            <a
              href="https://builderscrack.co.nz/tradies/1yfg6pr0/prime-interior-solutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Builderscrack"
            >
              <span className={styles.socialIconCircle}>
                <SocialBuilderscrackIcon />
              </span>
              <span className={styles.socialName}>Builderscrack</span>
            </a>
            <a
              href="https://facebook.com/primeinteriorsolutionsnz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <span className={styles.socialIconCircle}>
                <SocialFacebookIcon />
              </span>
              <span className={styles.socialName}>Facebook</span>
            </a>
            <a
              href="https://www.nocowboys.co.nz/businesses/prime-interior-solutions-ltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NoCowboys"
            >
              <span className={styles.socialIconCircle}>
                <SocialNoCowboysIcon />
              </span>
              <span className={styles.socialName}>NoCowboys</span>
            </a>
            <a
              href="https://instagram.com/prime.interior"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className={styles.socialIconCircle}>
                <SocialInstagramIcon />
              </span>
              <span className={styles.socialName}>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <p className={styles.footerCopy}>
          &copy; {new Date().getFullYear()} Prime Interior Solutions Ltd. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 3a3 3 0 0 0-3 3l-7 7 4 4 7-7a3 3 0 0 0-1-7z" />
      <path d="M6.5 21C4 21 2 19 2 16.5c0-1.5 1.5-3 3-3s3 .5 3 2-.5 5.5-1.5 6z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function SocialFacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function SocialInstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SocialBuilderscrackIcon() {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 28 18"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Checkmark */}
      <polygon points="0,9 3,5.5 9,13 15,4 18,4 9,17 0,12.5" />
      {/* Triangle wedge */}
      <polygon points="15,4 28,1 28,17 21,17" />
    </svg>
  );
}

function SocialNoCowboysIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}
