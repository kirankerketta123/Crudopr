// import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react'
// const AxiosUSe = () => {
//   const [userdata,setdata]=useState([]);
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((Response)=>{
           
//            setdata(Response.data)
//         })
//        },[])
//   return (
//     <div className="container">
//      {userdata.map((value,id)=>{
//         return(
//           <div key={id} >{value.name}</div>
//         )
//       })}
//     </div>
// )
// }
// export default AxiosUSe;

//---------------------------------


// import React, { useState } from "react";
// import axios from "axios";

// function Postapp(){
//     const data={fname:"",lastname:""};
//     const [inputdata,setinputdata]=useState(data)
//     function handledata(e){
//         setinputdata({...inputdata,[e.target.name]:e.target.value})
//     }
//     function submithandle(e){
//            e.preventDefault();
//            axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
//            .then((response)=>{
//               console.log(response)
//            })
//     } 
//     function handleupdate(e){
//         e.preventDefault();
//         axios.put("https://jsonplaceholder.typicode.com/users/1",inputdata)
//         .then((response)=>{
//            console.log(response)
//         })
//     }
//     function deletehandle(e){
//         e.preventDefault();
//         axios.delete("https://jsonplaceholder.typicode.com/users/1")
//         .then((res)=>{
//            console.log(res)
//         })
//     }
//     return(
//       <>
//         <h1>axios post</h1>
//         <form>
//             <label>First name: </label>
//             <input type="text" name="fname" value={inputdata.fname} onChange={handledata}/><br/><br/>

//             <label>Last name: </label>
//             <input type="text" name="lastname" value={inputdata.lastname} onChange={handledata}/>
//             <button onClick={submithandle}>submit</button>
//             <button onClick={handleupdate}>update</button>
//             <button onClick={deletehandle}>delete</button>
//         </form>
//         </>
//     )
// }
// export default Postapp;