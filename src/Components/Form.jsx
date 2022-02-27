import React, { useState,useRef } from 'react'

export default function Form({onTaskCreate}) {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        maritalStatus: false,
        image: null
    });

    const imageRef = useRef(null)
    const handleImageChange = (e) => {
        const file = imageRef.current.files[0];
        let src = null;
        if (file) {
            src = URL.createObjectURL(file);
        }
        setFormData({
            ...formData,
            image: src
          });
        return () => {
            URL.revokeObjectURL(src);
        };
    }

    const handleChange = (e) => {
        let {name, value, checked, type} = e.target;
        const val = type=== "checkbox" ? checked : value;

        setFormData({
            ...formData,
            [name]: val
        })
    } 

    const handleSubmit=(e)=>{
        e.preventDefault();
       onTaskCreate &&  onTaskCreate(formData);
       setFormData("");
   }


  return (
    <div >
        <div className="inputBox">
        <label className="form-label">Name:</label>
            <input type="text" className="form-control" placeholder="Name" name="name"
                        value={formData.name}
                        onChange={handleChange}/>
        </div>
        <div class="inputBox">
            <label className="form-label">Age:</label>
            <input type="number" class="form-control" placeholder="Age" name="age"
                        value={formData.name}
                        onChange={handleChange}/>
        </div>  
        <div class="inputBox">
            <label className="form-label">Address:</label>
            <input type="text" class="form-control" placeholder="Address" name="address"
                        value={formData.name}
                        onChange={handleChange}/>
        </div>  
        <div class="inputBox">
            <label className="form-label">Department:</label>
            <select className='form-control' name="department"
                        value={formData.name}
                        onChange={handleChange}>
                <option>Default</option>
                <option>HR</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Planning</option>
            </select>
        </div>  
        <div class="inputBox">
            <label className="form-label">Salary:</label>
            <input type="number" className="form-control" placeholder="Salary" name="salary"
                        value={formData.name}
                        onChange={handleChange}/>
        </div>  
        <div class="inputBox">
            <label className="form-label">Are you married?:</label>
            <input type="checkbox" checked={formData.maritalStatus}
                        onChange={handleChange}
                        name="maritalStatus" />
        </div>  
        <div class="inputBox">
            <label className="form-label">Profile Photo:</label>
            <input type="file" className="form-control" multiple
                        onChange={handleImageChange}
                        ref={imageRef}/>
        </div>  
        <div>
            <input type="submit" value="SUBMIT" onClick={handleSubmit}/>
        </div>
    </div>
  )
}
