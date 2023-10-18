//1. Import Area 

import { useEffect, useState } from "react";





//2. Function Define Area 
function Main() {
  const [userData,setUserData] = useState([])
  //2.1 Hooks Area 
  useEffect(()=>{
    fetch("http://localhost:1337/api/user-details")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      setUserData(data.data)
      console.log(data.data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      console.log(`fetching Get Api done `)
    })
  },[])


  //2.2 Methods Define Area 0




  //2.3Return Area 
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">Role</th>
            <th scope="col">EmailID</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((cv,index,arr)=>{
              return <tr key={index}>
                        <td>{cv.id}</td>
                        <td>{cv.attributes.firstName}</td>
                        <td>{cv.attributes.Role}</td>
                        <td>{cv.attributes.Emailid}</td>
                        <td>
                          <button className="btn btn-success btn-sm">View</button>
                          <a href={`/edit?id=${cv.id}&&firstName=${cv.attributes.firstName}&&Role=${cv.attributes.Role}&&Emailid=${cv.attributes.Emailid}`} className="btn btn-primary btn-sm">Edit</a>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
            })
          }
        </tbody>
      </table>

    </>
  );
}

//3. Export Area 
export default Main;
