import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "InfiX Prime",
    desc1:
      "Perfect for traders beginning their automated trading journey or those seeking reliable Forex signal services. InfiX Prime delivers consistent, well-researched trading opportunities with clearly defined risk parameters.",
    metrics: [
      { label: "Monthly Signals", value: "13–15" },
      { label: "Accuracy Rate", value: "70–75%" },
      { label: "Risk–Reward", value: "1:1" },
    ],
    mediaType: "video",
    mediaSrc: "/video/3.mp4",
  },
  {
    id: "tabTwo",
    title: "InfiX Wave",
    desc1:
      "Designed for active traders ready to engage multiple markets simultaneously across Forex, Comex, and US markets.",
    metrics: [
      { label: "Daily Signals", value: "1–2 per market" },
      { label: "Accuracy Rate", value: "75–80%" },
      { label: "Risk–Reward", value: "1:2" },
    ],
    mediaType: "video",
    mediaSrc: "/video/1.mp4",
  },
  {
    id: "tabThree",
    title: "InfiX Stream",
    desc1:
      "Institutional-grade trading for high net worth individuals with analyst-backed high-conviction trades.",
    metrics: [
      { label: "Daily Signals", value: "2–3 per market" },
      { label: "Accuracy Rate", value: "80–85%" },
      { label: "Risk–Reward", value: "1:3" },
    ],
    mediaType: "video",
    mediaSrc: "/video/2.mp4",
  },
];

export default featuresTabData;
