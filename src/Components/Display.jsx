
import "./Display.module.css"
export default function Display({data,handleDelete}) {

    return(
        <div className ="container">
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADDRESS</th>
                        <th>DEPARTMENT</th>
                        <th>SALARY</th>
                        <th>MARITAL STATUS</th>
                        <th>PROFILE PICTURE</th>
                        <th>REMOVE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map((item)=>{
                        return  <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>{item.department}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.maritalStatus}</td>
                                    <td><img width="30px" src={item.image} alt="" /></td>
                                    <td><button onClick={()=>handleDelete(item.id)}>X</button></td>
                                </tr>
                        })   
                    } 
                </tbody>
            </table>
        </div>
    )
}