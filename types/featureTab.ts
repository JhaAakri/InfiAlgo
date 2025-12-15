export type FeatureTab = {
  id: string;
  title: string;
  desc1: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  mediaType: "image" | "video";
  mediaSrc: string;
};
