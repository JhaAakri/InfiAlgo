import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "Do you offer refunds?",
    ans: "We provide a satisfaction review period for new subscribers. If you're not convinced of the service value within your first month, contact us to discuss available options.",
  },
  {
    id: 2,
    quest: "Can I upgrade or downgrade tiers?",
    ans: "Absolutely. As your trading needs evolve, you can move between tiers at any time. Simply contact our team to discuss timing and any applicable adjustments.",
  },
  {
    id: 3,
    quest: "Are there any additional costs?",
    ans: "No. Your subscription covers complete access to all features at your selected tier. The only additional costs are the trading capital you allocate and any fees charged by your broker.",
  },
  {
    id: 4,
    quest: "What happens if I pause my subscription?",
    ans: "You can pause or cancel your subscription at any time. Your access will continue until the end of your current billing period. If you decide to return later, you can resume without any penalty.",
  },
];

export default faqData;
