"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

const testimonials = [
  {
    name: "Alice Smith",
    text: "Prime Interior Solutions transformed my home! Highly recommended.",
  },
  {
    name: "John Doe",
    text: "Professional, reliable, and creative. Loved working with the team.",
  },
  {
    name: "Maria Garcia",
    text: "Excellent service and beautiful results. Will hire again!",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image
            src="/logo.png"
            alt="Prime Interior Solutions NZ Logo"
            width={150}
            height={150}
            className={styles.logo}
          />
        </div>
        <h1 className={styles.title}>Prime Interior Solutions NZ</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.carousel}>
          <button onClick={prevTestimonial} aria-label="Previous testimonial" className={styles.carouselBtn}>
            &#8592;
          </button>
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>"{testimonials[current].text}"</p>
            <span className={styles.testimonialName}>- {testimonials[current].name}</span>
          </div>
          <button onClick={nextTestimonial} aria-label="Next testimonial" className={styles.carouselBtn}>
            &#8594;
          </button>
        </section>

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
              <Image src="/link.svg" alt="Builders Crack" width={24} height={24} /> Builders Crack Profile
            </a>
          </li>
          <li>
            <a href="https://builderscrack.co.nz/tradies/1yfg6pr0/prime-interior-solutions" target="_blank" rel="noopener noreferrer" aria-label="Website 2">
              <Image src="/link.svg" alt="No Cowboys" width={24} height={24} /> No Cowboys Profile
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}