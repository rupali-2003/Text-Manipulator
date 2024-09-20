import React, { useState } from 'react';

const InputOutput = () => {
    let [cnt, setCnt] = useState(0);
    let [text, setText] = useState('');
    let [prevText, setPrevText] = useState(''); 
    let [bold, setBold] = useState(false);
    let [italic, setItalic] = useState(false);

    const countBtnClicked = () => {
        console.log("CounterBtn Clicked");
        setCnt(cnt + 1);
    };
    const UpperCAseBtnClicked = () => {
        console.log("UpperCaseBtn Clicked");
        setText(text.toUpperCase());
    };
    const LowerBtnClicked = () => {
        console.log("LowerCaseBtn Clicked");
        setText(text.toLowerCase());
    };
    const ClearBtnClicked = () => {
        console.log("ClearBtn Clicked");
        setPrevText(text); 
        setText('');
    };
    const RecoverBtnClicked = () => {
        console.log("RecoverBtn Clicked");
        setText(prevText); 
    };
    const BoldBtnClicked = () => {
        setBold(true);
    };
    const ItalicBtnClicked = () => {
        setItalic(true);
    };
    const CopyToClickboardClicked = () => {
        navigator.clipboard.writeText(text);
    };
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    
    const countWords = () => {
        return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).filter(word => word.length > 0).length;
    };

    
    const countCharacters = () => {
        return text.length;
    };

    
    const countLines = () => {
        return text.split('\n').length;
    };

    
    const estimateReadingTime = () => {
        const words = countWords();
        return (words / 200).toFixed(2); 
    };
    
    return (
        <>
            <div>
                <textarea
                    rows='8' 
                    cols='90' 
                    placeholder='Enter your Text' 
                    style={{ fontSize: '20px', fontWeight: bold ? 'bold' : 'normal', fontStyle: italic ? 'italic' : 'normal' }} 
                    value={text} 
                    onChange={handleTextChange} 
                />
            </div>
            <div style={{ textAlign: 'center' }}>
                <button onClick={UpperCAseBtnClicked} className='btn btn-success my-3 mx-3'>UpperCase</button>
                <button onClick={LowerBtnClicked} className='btn btn-danger my-3 mx-3'>LowerCase</button>
                <button onClick={ClearBtnClicked} className='btn btn-primary my-3 mx-3'>Clear</button>
                <button onClick={RecoverBtnClicked} className='btn btn-secondary my-3 mx-3'>Recover Text</button>
                <button onClick={BoldBtnClicked} className='btn btn-info my-3 mx-3'>Bold</button>
                <button onClick={ItalicBtnClicked} className='btn btn-warning my-3 mx-3'>Italic</button>
                <button onClick={countBtnClicked} className='btn btn-dark my-3 mx-3'>Count</button>
                
                <button onClick={CopyToClickboardClicked} className='btn btn-light my-3 mx-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                </svg>
                </button>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2>Text Summary</h2>
                <h3>Counter: <span style={{ color: cnt > 10 ? 'red' : 'black' }}>{cnt}</span></h3>
                <p>Number of words: {countWords()}</p>
                <p>Number of characters: {countCharacters()}</p>
                <p>Number of lines: {countLines()}</p>
                <p>Estimated reading time: {estimateReadingTime()} minutes</p>
            </div>
        </>
    );
};

export default InputOutput;
