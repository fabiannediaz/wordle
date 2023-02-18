interface SquareProps {
  state?: 'unused' | 'enable' | 'used' | 'matched',
  usedSquares: string[],
  squareNumber: number,
  setUsedSquares: any,
}

const Square = (props: SquareProps) => {
  const {
    state = 'unused',
    squareNumber,
    usedSquares,
    setUsedSquares,
  } = props;

  let backColor = '';
  let color = '';
  const isEnabled = state === 'enable';
  if (state === 'used') {
    backColor = 'gray';
    color = 'white';
  }
  else if (state === 'matched') {
    backColor = 'orange';
    color = 'white';
  }


  const onSetInputValue = (event: any) => {
    let newUsedSquares = usedSquares.concat();
    event.target.value = event.target.value.toUpperCase();
    newUsedSquares[squareNumber] = event.target.value;
    setUsedSquares(newUsedSquares);
  }

  return (
    <div
      style={{
        width:
          '50px',
        height:
          '50px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backColor,
      }}
    >
      <input
        type='text'
        disabled={!isEnabled}
        style={{
          width: '35px',
          height: '35px',
          fontSize: '32px',
          textAlign: 'center',
          backgroundColor: backColor,
          color: color,
        }}
        maxLength={1}
        onChange={(e) => onSetInputValue(e)}
      />
    </div >
  )
}

export default Square;