import { useState} from'react';


function Square({value}){
    const [value, setvalue] = useState(null);
    
    function handleClick(){   
        setvalue('X');
    }
    return (
    <button 
      className="square"
      onClick={handleClick}
    >
        {value}
        </button>
    );
}

export default function Board() {
    return (
    <>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    </>
    );
}