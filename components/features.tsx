import { features } from "@/constants";

import FeatureCard from "./feature-card";

export const Features = () => {
  return (
    <div className="bg-primary-light container flex h-fit flex-wrap justify-center justify-items-center gap-8">
      {features.map((feature) => (
        <FeatureCard {...feature} key={`${feature.title}`} />
      ))}
    </div>
  );
};
