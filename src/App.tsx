import React, {useState} from 'react'
import './App.css'
import {Display} from "./component/display/Display"
import {Button} from "./component/button/Button"

function App() {

    const [counter, setCounter] = useState<number>(0)


    const resetCount = () => {
        setCounter(0)
    }

    const incrCounter = () => {
        counter < 5 && setCounter(counter + 1)
    }

    return (
        <div className="appWrapper">

            <Display count={counter}/>

            <div className='buttonBlockWrapper'>
                <Button onClick={incrCounter} disabled={counter === 5} className={'button'}>inc</Button>
                <Button onClick={resetCount} disabled={counter === 0} className={'button'}>reset</Button>
            </div>
        </div>
    );
}

export default App;
