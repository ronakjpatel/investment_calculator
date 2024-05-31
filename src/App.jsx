import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prev_userInput) => {
      return {
        ...prev_userInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput input={userInput} onChangeInput={handleChange} />
      {!isInputValid && (
        <p className="center">Please Enter the Positive Duration Value</p>
      )}
      {isInputValid && <Results input={userInput} />}
    </>
  );
}

export default App;
