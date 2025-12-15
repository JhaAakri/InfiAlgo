import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "James Mitchell",
    designation: "Forex Trader, London",
    image: image1,
    content:
      "After three years of inconsistent manual trading, switching to InfiAlgo transformed my approach entirely. The discipline of following algorithmic signals eliminated my emotional decision-making. My account has grown steadily, and I finally understand what consistent trading means.",
  },
  {
    id: 2,
    name: "Patricia Chen",
    designation: "Commodities Investor, Singapore",
    image: image2,
    content:
      "As someone who spent years analyzing charts every evening, the time freedom InfiAlgo provides is remarkable. The Comex signals have been particularly impressive, capturing moves I would have likely missed due to timezone differences.",
  },
  {
    id: 3,
    name: "Robert Hammond",
    designation: "Private Investor, New York",
    image: image1,
    content:
      "The Stream service delivers institutional-quality analysis at a fraction of what I paid my previous advisory firm. The accuracy rate and profit targets have exceeded my expectations, quarter after quarter.",
  },
];
