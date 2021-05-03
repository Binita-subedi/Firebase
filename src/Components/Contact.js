import React, { useState, useEffect } from "react";
import Contactform from "./Contactform";
import firebaseDb from "../firebase";

const Contacts = () => {

  var [contactObjects, setContactObjects] = useState({})
  var [currentId,setCurrentId] = useState('')

  useEffect(() => {
    firebaseDb.child('contacts').on('value',snapshot =>{
      if(snapshot,val()!=null)
      setContactObjects({
        ...snapshot.val()
      })
      else
      setContactObjects({
        ...snapshot.val()
      })
    })
  }, [])// similar to componentDidMount
     
  const addOrEdit = obj => {
    if (currentId == '')
    firebaseDb.child('contacts').push(
      obj,err =>  {
        if (err)
        console.log(err)
         else 
        setCurrentId('')
      }
    )
    elsefirebaseDb.child(`contacts/${currentId}`).set(
      obj, err => {
        if (err)
        console.log(err)
        else 
        setCurrentId('')
      }
    )

  }
  const onDelete = key => {
    if (window.confirm('Are you sure to delete this record')) {
      firebaseDb.child(`contcts/${key}`).remove(
         err => {
          if (err)
          console.log(err)
          elsesetCurrentId('')
        }
      )
    }
  }


  return (
    <>
    <div class="jumbotron bg-dark text-white">
      <div class="container">
        <h1 class="display-4 text-center">Contact Register</h1>
      </div>
    </div>
   
   <div className="row">
      <div className="col-md-5">
        <Contactform {...({ addOrEdit, currentId, contactObjects })}/>
      </div>
      <div className="col-md-7">
        <table className="table table-borderless table-stripped">
          <thead className="thead-light">
            <tr>
              <th>FullName</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(contactObjects).map(id=>{
                return <tr key= {id}>
                  <td>{contactObjects[id].fullName}</td>
                  <td>{contactObjects[id].mobile}</td>
                  <td>{contactObjects[id].email}</td>
                  <td>
                    <a className="btn btn-primary" onClick={() => {setCurrentId(id)}}>
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a className="btn btn-danger" onclick={()=>{onDelete(id)}}>
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              } )
            }
          </tbody>
          </table>
      </div>
    </div>  
   </>
    
  );
} 

export default Contacts;