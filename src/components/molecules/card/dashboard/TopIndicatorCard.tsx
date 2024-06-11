import React from "react";
import { threeDotsIcon } from "../../../../assets/images";
import { Paragraph } from "../../../atoms";

type TopIndicatorCardProps = {
  icon: string; // Path to the icon image
  title: string; // Title text
  value: string; // Value text
  percentage: string; // Percentage text
  percentageType: string; // Positive / Negative / Neutral
  className?: string; // if any additional classes
};

const TopIndicatorCard: React.FC<TopIndicatorCardProps> = ({
  icon,
  title,
  value,
  percentage,
  percentageType,
  className,
}) => {
  return (
    <div
      className={`bg-white p-4 rounded-none shadow-sm flex flex-col w-56 h-fit ${className} `}
    >
      <div className="flex justify-between items-start">
        <div className="bg-lightBaseOfPrimary rounded-xl p-2 flex items-center justify-center h-14 w-14">
          <img src={icon} alt="Icon" className="h-8 w-8" />
        </div>
        <img src={threeDotsIcon} alt="Options" className="h-6 w-6 opacity-40" />
      </div>
      <div className="mt-4">
        <Paragraph medium className="text-lg text-primary text-left">
          {title}
        </Paragraph>
        <div className="flex justify-between items-center mt-2">
          <Paragraph bold className="text-xl text-primary">
            {value}
          </Paragraph>
          <div
            className={`${
              percentageType === "positive"
                ? "bg-percentagePositiveBox"
                : percentageType === "negative"
                ? "bg-percentageNegativeBox"
                : "bg-lightBaseOfPrimary"
            } w-16 px-2 py-1 flex justify-center items-center ml-2`}
          >
            <Paragraph
              medium
              className={`text-xs ${
                percentageType === "positive"
                  ? "text-percentagePositiveText"
                  : percentageType === "negative"
                  ? "text-percentageNegativeText"
                  : "text-percentageNeutralText"
              }`}
            >
              {percentage}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopIndicatorCard;
