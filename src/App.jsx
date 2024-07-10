import "./App.css";
import { Card } from "./components/Card";
import iconSupervisor from "./images/icon-supervisor.svg";
import iconTeamBuilder from "./images/icon-team-builder.svg";
import iconKarma from "./images/icon-karma.svg";
import iconCalculator from "./images/icon-calculator.svg";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="font-poppins text-center py-24 px-6 xl:w-[1400px]">
        <h1 className="text-4xl font-extralight text-very-dark-blue-blue mb-2">
          Reliable, efficient delivery
        </h1>
        <h1 className="text-4xl font-semibold text-very-dark-blue mb-4">
          Powered by Technology
        </h1>
        <p className="text-xl mx-auto max-w-2xl font-light text-grayish-blue mb-20">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div className="flex flex-col items-center justify-center xl:flex-row space-y-10 xl:space-y-0 xl:space-x-10">
          <Card
            title="Supervisor"
            content="Monitors activity to identify project roadblocks"
            icon={iconSupervisor}
            borderColor="border-cyan"
          />
          <div className="flex flex-col justify-center items-center space-y-10">
            <Card
              title="Team Builder"
              content="Scans our talent network to create the optimal team for your project"
              icon={iconTeamBuilder}
              borderColor="border-red"
            />
            <Card
              title="Karma"
              content="Regularly evaluates our talent to ensure quality"
              icon={iconKarma}
              borderColor="border-orange"
            />
          </div>
          <Card
            title="Calculator"
            content="Uses data from past projects to provide better delivery estimates"
            icon={iconCalculator}
            borderColor="border-blue"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
