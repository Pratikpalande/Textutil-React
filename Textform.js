import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)    
       let newText = text.toUpperCase();
       setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }
    const handleLowClick = (event)=>{
        // console.log("lower text was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText) 
    }
    const handleclClick = (event)=>{
        // console.log("lower text was clicked" + text)
        let newText = '';
        setText(newText) 
    }
   
    
    const [text, setText] = useState('');
  return (
    <>
      <div style={{color:props.mode=== ' '?'white':'black'}}>
        <h2>{props.heading}</h2>
    
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'light'?'gray':'white'}} id="myBox" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-3" id='btn1' onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" id='btn2' onClick={handleLowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-3" id='btn3' onClick={handleclClick}>Clear text</button>
    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>Words:{text.split(' ').length} Characters:{text.length} </p>
        <p> Minutes to read :{0.008* text.split(' ').length}  </p>
    </div>
    </>
  )
}
