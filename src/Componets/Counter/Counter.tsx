import React, {useState} from 'react';

const Counter = () => {
    const [currentN, setCurrentN] = useState('1')
    const [state, setState] = useState(0)

    const OnPlus =() =>{
        setState(prev=>prev +1)
    }

    const OnMinus =() =>{
        setState(prev=>prev - 1)
    }
    const OnPlusSto =() =>{
        setState(prev=>prev +100)
    }
    const OnMinusSto =() =>{
        setState(prev=>prev -100)
    }
    const OnClick =(value: number) =>{
        setState(prev=>prev +value)
    }
    return (
        <div>
            <div>
                <div>
                    <input
                        type="text"
                        value={currentN}
                        onChange={(e) => setCurrentN(e.target.value)}
                    />
                </div>
            </div>
            <div>
                {state}
            </div>
            <div>
                <button onClick={()=>OnPlus()}
                >
                    Plus 1
                </button>
                <button onClick={()=>OnMinus()}>
                    Minus 1
                </button>
                <button onClick={()=>OnPlusSto()}
                >
                    Plus 100
                </button>
                <button onClick={()=>OnMinusSto()}>
                    Minus 100
                </button>
                <button onClick={() => OnClick(parseInt(currentN))}>
                    Plus N
                </button>
            </div>
        </div>
    );
};

export default Counter;