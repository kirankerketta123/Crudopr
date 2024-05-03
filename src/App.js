// import React, { useRef } from 'react';
// import './App.css';
 
 
// function App(){
 
// const num1=useRef();
// const num2=useRef();
// const oper=useRef();
// const output=useRef();
 
// function submithandler(e){
//  const number1=num1.current.value
//   const number2= num2.current.value
//  const operator= oper.current.value
//     let res;
//     if (operator==='+'){
//       res=Number(number1)+Number( number2)
//     } else if(operator==='-'){
//       res=Number(number1)-Number(number2)
//     } else if (operator==='*'){
//       res=Number(number1)*Number(number2)
//     } else if (operator==='/')
//     res=Number(number1 )/ Number(number2)
//     output.current.value=res;
// }
 
//     return(
//         <div >
       
//        FirstNumber:  <input  type="text" ref={num1}  /><br/><br/>
//        SecondNumber:  <input  type="text"   ref={num2} /> <br/><br/>
//       <select ref={oper}   style={{marginRight:"5px"}} >
//        <option>select</option>
//         <option value="+">+</option>
//         <option value="-">-</option>
//         <option value="/">/</option>
//         <option value="*">*</option>
//      </select>
//      Output: <input type="text" style={{marginLeft:"10px"}} ref={output}/> <br /><br/>
//     <button onClick={submithandler}>click</button>
   
//        </div>
//     )
// }
 
 
// export default App;
//==============================
// import React, { useRef } from 'react';
// function App(){
 
//      const refheight=useRef();
//      const refmass=useRef();
//      const refbmi=useRef(); 
    
//    function submithandler(e){
  
//     e.preventDefault();
//     const heightval=refheight.current.value;
//     const massval=refmass.current.value;
   
//     if(heightval<=0 || massval<=0){
//       alert("enter the positive number")
     
//     }else{
//      const bmi=massval/(heightval*heightval)
//      refbmi.current.value=bmi
//     }jhbuj
//    }
 
//     return(
//         <div >
//         <h1>Bmi calculator</h1>
        
//           Enter your height: <input value={refheight}/><br/><br/>
//           Enter your weight : <input value={refmass}/><br/><br/>
//           <button onClick={submithandler}>Calculate Bmi</button>
//           {refbmi.current.value> 0 && <h1>Your Bmi {refbmi.current.value}</h1>}

        
//        </div>
//     )
// }
 
 
// export default App;
 

//------------------------
//----------------------
import React from 'react';
import Crud from './Crud'; 

function App() {
    return (
        <>
            <Crud /> 
        </>
    );
}

export default App;
