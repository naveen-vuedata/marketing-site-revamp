import Image from "next/image";

import { Feature } from "@/types";

import { Typography } from "./ui/typography";

const FeatureCardIcon = ({ src }: { src: Feature["icon"] }) => {
  return (
    <div className="from-primary-200 to-primary-400 rounded-3xl bg-linear-to-r p-[3px]">
      <div className="from-primary to-primary-dark rounded-[23px] bg-linear-to-br p-4">
        <Image width={40} height={40} src={src} alt={src} />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: Feature) => {
  return (
    <div className="flex w-[286px] flex-col items-center gap-4">
      <FeatureCardIcon src={icon} />
      <div className="text-center">
        <Typography
          variant="h5Secondary"
          className="font-gotham-medium font-medium"
        >
          {title}
        </Typography>
        <Typography variant="p1Primary">{description}</Typography>
      </div>
    </div>
  );
};

export default FeatureCard;
