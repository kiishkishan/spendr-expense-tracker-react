import {
  costIcon,
  incomeIcon,
  savingsIcon,
  walletIcon,
} from "../../../assets/images";
import { TopIndicatorCard } from "../../molecules";

export default function MoleculesDemo() {
  return (
    <div className="flex flex-col md:flex-row md:flex-grow md:flex-wrap justify-evenly mx-auto w-full lg:w-2/3 gap-4">
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
