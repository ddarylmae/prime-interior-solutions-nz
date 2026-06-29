export type Review = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
};

const fallbackReviews: Review[] = [
  {
    author_name: "Roderick S.",
    rating: 5,
    text: "Jerome is a model tradesman. Friendly, prompt and efficient, an excellent communicator, and with high quality workmanship. In response to my request for a quote, he made himself available, at short notice, for a site visit. His quote was very reasonable, and he always turned up on time over his four visits to complete the job. Jerome was very happy to offer his professional advice on any aspect of drywall preparation and decorating. I can thoroughly recommend Jerome to future clients.",
    time: Date.now() / 1000 - 86400 * 14,
    profile_photo_url: "",
  },
  {
    author_name: "Sheralee A.",
    rating: 5,
    text: "Jerome was a pleasure to deal with. Great communication and very punctual. Jerome’s quality of work was to a very high standard. I wouldn’t hesitate to recommend him or use his services again in the future if needed.",
    time: Date.now() / 1000 - 86400 * 35,
    profile_photo_url: "",
  },
  {
    author_name: "Kevin P.",
    rating: 5,
    text: "Gerome was very helpful and gave us suggestions on paint colours and finishes to suit the area. The final outcome has been more than satisfactory and would definitely use his services again. I highly recommend him for any paint or plaster job big or small that needs to be done.",
    time: Date.now() / 1000 - 86400 * 60,
    profile_photo_url: "",
  },
  {
    author_name: "Tina S.",
    rating: 5,
    text: "Jerome was an absolute pleasure to deal with. Turned up when he said he would, completed work to a high standard, tidy and totally trustworthy. We will be calling in his services later in the year for further work to our house",
    time: Date.now() / 1000 - 86400 * 90,
    profile_photo_url: "",
  },
  {
    author_name: "Roihario M.",
    rating: 5,
    text: "Highly recommended! Easy to communicate with, efficient, tidy, and respectful of the owner’s working hours. A pleasure to deal with.",
    time: Date.now() / 1000 - 86400 * 90,
    profile_photo_url: "",
  },
];

export async function getFallbackReviews(): Promise<{
  reviews: Review[];
  rating: number;
  total: number;
}> {
  return { reviews: fallbackReviews, rating: 5.0, total: 0 };
}
