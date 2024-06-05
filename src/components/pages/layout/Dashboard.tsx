import { Heading1 } from "../../atoms";
import MoleculesDemo from "../demo/MoleculesDemo";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start p-10 w-full bg-lightBaseOfPrimary">
      <Heading1
        children="Dashboard"
        className="tracking-wider text-percentageNeutralText"
        medium
      />
      <MoleculesDemo />
    </div>
  );
};

export default Dashboard;
