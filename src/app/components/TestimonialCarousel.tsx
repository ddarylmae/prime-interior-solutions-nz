"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./TestimonialCarousel.module.css";
import type { Review } from "../lib/googleReviews";

const VISIBLE = 3;

function formatDate(unixSeconds: number): string {
  const d = new Date(unixSeconds * 1000);
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

function CardStars({ rating }: { rating: number }) {
  return (
    <div className={styles.cardStarRow}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= rating ? styles.cardStarFilled : styles.cardStarEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const MAX = 130;
  const truncated = !expanded && review.text.length > MAX;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {review.profile_photo_url ? (
          <Image
            src={review.profile_photo_url}
            alt={review.author_name}
            width={48}
            height={48}
            className={styles.avatarImg}
          />
        ) : (
          <span className={styles.avatarInitial}>{review.author_name[0]}</span>
        )}
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{review.author_name}</p>
          <p className={styles.reviewDate}>{formatDate(review.time)}</p>
        </div>
        <GoogleG />
      </div>

      <div className={styles.cardStars}>
        <CardStars rating={review.rating} />
        <span className={styles.verifiedBadge} title="Verified Google review">
          ✓
        </span>
      </div>

      <p className={styles.reviewText}>
        {truncated ? review.text.slice(0, MAX) + "…" : review.text}
      </p>
      {review.text.length > MAX && (
        <button
          className={styles.readMore}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function TestimonialCarousel({
  reviews,
}: {
  reviews: Review[];
  rating: number;
  total: number;
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === reviews.length - 1 ? 0 : i + 1));

  const visible = Array.from(
    { length: Math.min(VISIBLE, reviews.length) },
    (_, i) => reviews[(current + i) % reviews.length],
  );

  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>What our Clients say</h3>
      <div className={styles.body}>
        <div className={styles.carouselWrapper}>
          <button
            className={styles.navBtn}
            onClick={prev}
            aria-label="Previous review"
          >
            &#8249;
          </button>
          <div className={styles.cards}>
            {visible.map((review, idx) => (
              <ReviewCard
                key={(current + idx) % reviews.length}
                review={review}
              />
            ))}
          </div>
          <button
            className={styles.navBtn}
            onClick={next}
            aria-label="Next review"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
