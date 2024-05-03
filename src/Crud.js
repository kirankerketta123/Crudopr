import React, { useState } from "react";
import axios from "axios";
 
function App(){
    const data={id:"",fname:"",lastname:""};
 
    const [inputdata,setinputdata]=useState(data)
    const[tabledata,settable]=useState([])
    const[notification,setnotify]=useState('')
    function handledata(e){
        setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
 

//get method with id
 
    function getByID(e) {
      e.preventDefault();
      axios.get(`https://retoolapi.dev/4HOuJN/kiran/${inputdata.id}`,inputdata)
      .then((response) => {
        if (response.data.length === 0) {
          alert("Data is empty!");
          
        } else if(inputdata.id===''){
          console.log("Please enter id")
          setnotify("please enter id")
        }else {
          settable([response.data]);
        }
      })
        .catch((error) => {
          console.error(error);
          settable([]);
        });
    }
 // kiran kerre
    //get method to display all users name  (directly clicking get Button)
    function getAll(e) {
      e.preventDefault();
      axios
        .get("https://retoolapi.dev/4HOuJN/kiran/")
        .then((response) => {
            if (response.data.length === 0) {
              alert("Data is empty!");
            } else {
              settable(response.data);
            }
          })
        .catch((error) => {
          console.error("Not Fetching Data:", error);
          settable([]);
        });
    }
 
    function handlepost(e){
           e.preventDefault();
           axios.post("https://retoolapi.dev/4HOuJN/kiran/",inputdata)
           .then((response)=>{
              console.log(response)
              settable([...tabledata ,inputdata])
              setinputdata(data);
             
           })
    }
    
function handleUpdate(e) {
  e.preventDefault();
  axios.put(`https://retoolapi.dev/4HOuJN/kiran/${inputdata.id}`, inputdata)
    .then((response) => {
      console.log(response);
      const updatedTableData = tabledata.map(item => {
        if (item.id === inputdata.id) {
          return inputdata;
        }else{
        return item;
        }
      });
      settable(updatedTableData);
      setinputdata(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

    function handleDelete() {
      axios.delete(`https://retoolapi.dev/4HOuJN/kiran/${inputdata.id}`)
        .then((response) => {
          console.log(response);
         
          const updatedTableData = tabledata.filter(item => item.id !== inputdata.id);
          settable(updatedTableData);
         
        })
        .catch((error) => {
          console.error(error);
         // kiran 
        });
    }
 
    return (
      <div style={{textAlign:"center" ,backgroundColor: "lightgreen", minHeight: "100vh"}}>
        <h1>Crud operation</h1>
 
        <label style={{marginLeft:"40px"}}>ID: </label>
        <input type="text" name="id" value={inputdata.id} onChange={handledata}/>
        <div>
        <span style={{color:"red",marginLeft:'5px'}}>{notification}</span> <br /><br />
        </div>
        <label>First Name: </label>
        <input type="text" name="fname" value={inputdata.fname} onChange={handledata} /><br /><br/>
 
        <label>Last Name: </label>
        <input type="text" name="lastname" value={inputdata.lastname} onChange={handledata} /><br/><br/>
 
 
        <button onClick={handlepost} style={{margin:"10px"}}>POST DATA</button>
        <button onClick={getByID} style={{margin:"10px"}}>GET BY ID</button>
         
        <button onClick={getAll} style={{margin:"10px"}}>GET ALL DATA</button>
        <button onClick={handleDelete} style={{margin:"10px"}}>DELETE</button>
        <button onClick={handleUpdate} style={{margin:"10px"}}>Update</button>
       
  <br/>
  <br/>
  <div  >
        <table  style={{ margin: "auto" }}>
          <thead >
            <tr >
              <th style={{ paddingRight: '20px'}}>ID</th>
              <th style={{ paddingRight: '20px'}}>First Name</th>
              <th style={{ paddingRight: '20px' }}>Last Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map((item, index) => (
              <tr key={index + 1}>
                <td>{item.id}</td>
                <td>{item.fname}</td>
                <td>{item.lastname}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

    );
}
export default App;
