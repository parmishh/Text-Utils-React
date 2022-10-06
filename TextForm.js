import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
let newtext= text.toUpperCase();
setText(newtext)
    }

    const handleoClick=()=>{
        let newtext= text.toLowerCase();
        setText(newtext)
            }



           const handleclsClick=()=>{
                let newtext= "";
                setText(newtext)
                    }


                   
                   {/* const logic=(a)=>{
                       let text1=text.trim();
                        let p=0;
                        let g1=0;
                        for(let b=g1;b<text1.length;b++){
                        if(text1.charAt(b)==" " ){
                            for(let g=b+1;g<text1.length;g++)
                            {
                                if(text1.charAt(g)==" " ){
                                p++;
                                g1=g;


                                }
                                else break;

                            }
                            }
                            a=a-p;
                            p=0;
                           
                        }
                        if(text.charAt(0)=="")
                        a=a-1;
                       
                        return a;
                    }*/}


                            







    const handleonChange=(event)=>{
setText(event.target.value);
    }
    const [text,setText]=useState('Enter text here')
  return (
      <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
     
    
<div className="mb-3">
  <label for="myBox" className="form-label">Text trail</label>
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="3"></textarea>
</div>
<button  className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
<button  className="btn btn-primary mx-2" onClick={handleoClick}>Convert to Lowercase</button>

<button  className="btn btn-primary mx-2" onClick={handleclsClick}>clear text</button>


</div>
<div
    className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{(text.trim().split(" ").length)} words and {text.length} characters</p>
        <p>{(text.trim().split(" ").length)*0.008} Minutes read</p>
</div>

</>
  )
}
