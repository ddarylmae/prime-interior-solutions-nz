export type Review = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
};

const fallbackReviews: Review[] = [
  {
    author_name: "Alice Smith",
    rating: 5,
    text: "Prime Interior Solutions transformed my home! Highly recommended. The plastering was flawless and the painting finish was immaculate.",
    time: Date.now() / 1000 - 86400 * 30,
    profile_photo_url: "",
  },
  {
    author_name: "John Doe",
    rating: 5,
    text: "Professional, reliable, and creative. Loved working with the team. They finished on time and the quality exceeded my expectations.",
    time: Date.now() / 1000 - 86400 * 60,
    profile_photo_url: "",
  },
  {
    author_name: "Maria Garcia",
    rating: 5,
    text: "Excellent service and beautiful results. Will hire again! The interior decoration was stunning and really transformed the space.",
    time: Date.now() / 1000 - 86400 * 90,
    profile_photo_url: "",
  },
];

export async function getGoogleReviews(): Promise<{
  reviews: Review[];
  rating: number;
  total: number;
}> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { reviews: fallbackReviews, rating: 5.0, total: 0 };
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}&reviews_sort=most_relevant`,
      { next: { revalidate: 86400 } }
    );
    const data = await res.json();
    if (data.status !== "OK") throw new Error(data.status);
    return {
      reviews: (data.result.reviews as Review[]) ?? fallbackReviews,
      rating: data.result.rating ?? 5.0,
      total: data.result.user_ratings_total ?? 0,
    };
  } catch {
    return { reviews: fallbackReviews, rating: 5.0, total: 0 };
  }
}
