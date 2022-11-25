import React from 'react';
import { useState } from 'react'
import "./Test.css"
import ReactDOM from 'react-dom/client'

const Display = ({ counter }) => <div className="counter-display">{counter}</div>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;


const Test = (props) => {

    return (
        <div className="test-container">
            <Notes notes={notes} />
        </div>
    );
}

const Notes = (props) => {
    const { notes } = props

    return (
        <div>
            <ul>
                {
                notes.map((note, i) => 
                <li key={i}>{note.content}</li>
                ) 
            }
            </ul>
        </div>
    );
}

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);
    console.log(counter);
    return (
        <div className="counter-container">
            <div className="counter-grid">
                <div className="one">
                    <Display counter={counter} />
                </div>
                <div className="two">
                    <Button onClick={increaseByOne} text='plus' />
                </div>
                <div className="three">
                    <Button onClick={setToZero} text='zero' />
                </div>
                <div className="four">
                    <Button onClick={decreaseByOne} text='minus' />
                </div>
            </div>
        </div>
    )
}

const ComplexStates = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState(['S'])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div className="states-Container">
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
        </div>
    );

}
export default Test;