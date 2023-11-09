const CalInput = ({ result, setResult }) => {
  const onChangeResult = (e) => {
    setResult(e.target.value);
  };
  return (
    <input
      className="px-4 py-2 text-xl text-right text-black w-full rounded-md focus:outline-purple-300 shadow-2xl"
      type="text"
      value={result}
      onChange={onChangeResult}
    />
  );
};
export default CalInput;
