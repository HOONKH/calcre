const CalNumberBtn = ({ result, setResult, number, bgColor }) => {
  const onClickNumber = () => {
    result == "0" ? setResult(number) : setResult(result + number);
  };

  return (
    <button className={`btn-style ${bgColor}`} onClick={onClickNumber}>
      {number}
    </button>
  );
};

export default CalNumberBtn;
