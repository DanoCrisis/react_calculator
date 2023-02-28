const NumberBtn = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    return (
      <div>
        {numbers.map((number) => (
          <button key={number} className="number-btn" onClick={() => {}}>
            {number}
          </button>
        ))}
      </div>
    );
  };
  
  export default NumberBtn;