"use client";
import { useState } from "react";
import styles from "../page.module.css";

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

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const { name, text } = testimonials[current];

  return (
    <div className={styles.carousel}>
      <button className={styles.carouselBtn} onClick={prev} aria-label="Previous testimonial">&#8249;</button>
      <div className={styles.testimonialTile}>
        <p className={styles.testimonialText}>"{text}"</p>
        <span className={styles.testimonialName}>- {name}</span>
      </div>
      <button className={styles.carouselBtn} onClick={next} aria-label="Next testimonial">&#8250;</button>
    </div>
  );
}
