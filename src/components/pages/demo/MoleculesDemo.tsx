import {
  costIcon,
  incomeIcon,
  savingsIcon,
  walletIcon,
} from "../../../assets/images";
import { TopIndicatorCard } from "../../molecules";

export default function MoleculesDemo() {
  return (
    <div
      className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row
      md:flex-wrap xl:flex-nowrap 
      justify-evenly mx-auto my-10 w-full
     lg:gap-2 xs:gap-4 2xl:gap-0"
    >
      <TopIndicatorCard
        icon={walletIcon}
        title="Balance"
        value="Rs 75,000.00"
        percentage="+ 20 %"
        percentageType="positive"
      />
      <TopIndicatorCard
        icon={incomeIcon}
        title="Income"
        value="Rs 250K"
        percentage="= 0 %"
        percentageType="neutral"
      />
      <TopIndicatorCard
        icon={savingsIcon}
        title="Savings"
        value="Rs 2 Million"
        percentage="+ 2.5 %"
        percentageType="positive"
      />
      <TopIndicatorCard
        icon={costIcon}
        title="Expenses"
        value="Rs 125K"
        percentage="- 10.5 %"
        percentageType="negative"
      />
    </div>
  );
}
