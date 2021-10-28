import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOn = (event)=>{
        
        setText(event.target.value);
    }
    const handleUpConv = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to UpperCase", "success");
    }
    const handleloConv = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to LowerCase", "success");
    }
    const clearText = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const removeWhite = ()=>{
        let newText = text.split(" ").join("");
        setText(newText);
        props.showAlert("WhiteSpaces Removed", "success");


    }
    
    return (
        <>
        <div  className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value = {text} onChange={handleOn}  style={{backgroundColor: props.mode==='dark'?'#13466E':'white', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpConv}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleloConv}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {clearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {removeWhite}>Remove Whitespaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes raed.</p>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview!"}</p>
        </div>
        </>
    )
}
