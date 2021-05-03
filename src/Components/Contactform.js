import React, {useState, useEffect} from "react";


const Contactform = (props) => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: '',
}
}
  var [values, setValues] = useState(initialFieldValues)

  useEffect(() => {
    if (props.currentId == '')
    setValues({
      ...initialFieldvalues
    })
    else 
    setValues({
      ...props.contactObjects[props.currentId]
  })
}, [props.currentId, props.contactObjects])

  const handleInputChange = e => {
    var [ name, value ] = e.target
    setValues({
      ...values,
      [name]: value
    })


  const handleFormSubmit = e =>{
    e.preventDefault();
    props.addOrEdit(values)

  }
 
  return ( 
    <form autoComplete="off" onSubmit={handleFormSubmit}> 
      <div className="form-group input-group">
        <div className="input-group-prepend">
         
          <div className="input-group-text">
            <i className="fas fa-user"></i> 
          </div>
          </div>
        
        <input className="form-contact" placeholder="Full Name" name="fullName" value={values.fullName}
        onChange={handleInputChange}
        />

      </div>
      

      <div className="form-row">
        <div className="form-group input-group col-md-6">
        <div className="input-group-prepend">
          
          <div className="input-group-text">
            <i className="fas fa-mobile-alt"></i> 
          </div>
          </div>
      
        <input className="form-contact" placeholder="Mobile" name="mobile" value={values.mobile}
        onChange={handleInputChange}/>
      </div>
      
      
        
        <div className="form-group input-group col-md-6">
           <div className="input-group-prepend">
           <div className="input-group-text">
           <i className="fas fa-envelope"></i> 
           </div>
           </div>
           <input className="form-contact" placeholder="Email" name="email" value={values.email}
           onChange={handleInputChange}/>
        </div>

      <div classname="form-group">
       <textarea className="form-control" placeholder="Address" name="address" value={values.assress}
       onChange={handleInputChange}/>

       <div className="form-group">
         <input type="submit" value={props.currentId==''?"save":"Update"} className="btn btn-primary btn-block" />
       </div>
       </div>
       </div>
       
      </form>
  );
}
export default Contactform;