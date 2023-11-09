import { useState } from "react";
import CalInput from "./components/CalInput";
import CalNumberBtn from "./components/CalNumberBtn";
import CalDelBtn from "./components/CalDelBtn";
import CalOperatorBtn from "./components/CalOperatorBtn";
import CalEnterBtn from "./components/CalEnterBtn";

const App = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState();
  const [operator, setOperator] = useState();
  return (
    <main className="bg-purple-300 min-h-screen flex justify-center items-center rounded-md">
      <div className="bg-purple-500 px-8 py-20 rounded-md shadow-2xl">
        <div className="flex justify-center items-center mb-10">
          <h1 className="text-white font-black text-3xl">너 진짜 어려워</h1>
        </div>
        <CalInput result={result} setResult={setResult} />
        <div className="grid grid-cols-4 mt-8 gap-3">
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="1"
            bgColor="bg-purple-400 shadow-2xl"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="2"
            bgColor="bg-purple-600 shadow-2xl"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="3"
            bgColor="bg-purple-400 shadow-2xl"
          />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setOperator={setOperator}
            setTemp={setTemp}
            inputOperator="+"
            bgColor="bg-purple-700 active:bg-purple-900 shadow-2xl"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="4"
            bgColor="bg-purple-600 shadow-2xl"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="5"
            bgColor="bg-purple-400 shadow-2xl"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="6"
            bgColor="bg-purple-600 shadow-2xl"
          />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setOperator={setOperator}
            setTemp={setTemp}
            inputOperator="-"
            bgColor="bg-pink-300 active:bg-pink-500 shadow-2xl"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="7"
            bgColor="bg-purple-400 shadow-2xl"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="8"
            bgColor="bg-purple-600 shadow-2xl"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="9"
            bgColor="bg-purple-400 shadow-2xl"
          />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setOperator={setOperator}
            setTemp={setTemp}
            inputOperator="*"
            bgColor="bg-purple-700 active:bg-purple-900 shadow-2xl"
          />
          <CalEnterBtn
            result={result}
            setResult={setResult}
            operator={operator}
            setOperator={setOperator}
            temp={temp}
            setTemp={setTemp}
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="0"
            bgColor="bg-pink-300 shadow-2xl"
          />
          <CalDelBtn result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setOperator={setOperator}
            setTemp={setTemp}
            inputOperator="/"
            bgColor="bg-pink-300 active:bg-pink-500 shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
