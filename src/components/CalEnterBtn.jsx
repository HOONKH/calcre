const CalEnterBtn = ({
  operator,
  temp,
  result,
  setOperator,
  setTemp,
  setResult,
}) => {
  const onClickEnter = () => {
    switch (operator) {
      case "+":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "-":
        setResult(String(Number(temp) - Number(result)));
        break;
      case "*":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "/":
        setResult(String(parseInt(Number(temp) / Number(result), 10)));
        break;
    }
    setTemp("");
    setOperator("");
  };
  return (
    <button className="btn-style bg-green-600" onClick={onClickEnter}>
      Enter
    </button>
  );
};
export default CalEnterBtn;
