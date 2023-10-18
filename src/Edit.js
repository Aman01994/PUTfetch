//1. Import Area 
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'



//2. Function Define Area 
export const Edit = () => {
    // 2.1 Hooks area
    const [updatedFirstName,setUpdatedFristName] = useState()
    const [updatedRole,setUpdatedRole] = useState()
    const [updatedEmailid,setUpdatedEmailid] = useState()
    const [searchParams, setSearchParams] = useSearchParams();

    // 2.2 Method Area 
    // useEffect(()=>{
    //     console.log(searchParams.get('id'))
    //     console.log(searchParams.get('firstName'))
    //     console.log(searchParams.get('Role'))
    //     console.log(searchParams.get('Emailid'))
    // })
    function updateUserDetails(){
       
        fetch(`http://localhost:1337/api/user-details/${searchParams.get('id')}`,{
            method:"PUT",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data": {
                  "firstName": updatedFirstName,
                  "Role": updatedRole,
                  "Emailid": updatedEmailid
                }
              })
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            alert(`You data Updated Successfully`)
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            console.log(`Update Done Successfully`)
        })
    }


    // 2.3 Return area
  return (
    <>
        <form className='container'>
            <h1>Update Form</h1>
            <div className="mb-3">
                <input type='hidden' name='id' value={searchParams.get('id')} />
                <label htmlFor="exampleFristName" className="form-label">First Name</label>
                <input type="email" className="form-control" id="exampleFirstName" value={searchParams.get('firstName')} onChange={(e)=>setUpdatedFristName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleRole" className="form-label">Role</label>
                <input type="text" className="form-control" id="exampleRole" value={searchParams.get('Role')} onChange={(e)=>setUpdatedRole(e.target.value)}  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleEmail" value={searchParams.get('Emailid')} onChange={(e)=>setUpdatedEmailid(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary"onClick={()=>{updateUserDetails()}} >Submit</button>
                <br/>
                <hr/>
            <Link to="/" className='btn btn-success '>Home</Link>
        </form>

        
    </>
  )
}


//3. Export Area 
// But in this case we have named export so this area will not be in use 