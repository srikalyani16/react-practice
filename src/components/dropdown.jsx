import React from "react";

const countries = [
    {
      name: "India",
      value:"IN",
      cities: ["Mumbai", "Chennai", "Guntur", "Hyderabad"]
    },
    {
      name: "Nepal",
      value:"NE",
      cities: ["Kathmandu", "Bihar", "Assam", "Tibet"]
    },
    {
      name: "Pakistan",
      value:"PK",
      cities: ["Karachi", "Lahore", "pak"]
    }
]

const Dropdown = () => {
const [position,setPosition]=React.useState(0)
  return (
    <div>
        <select onChange={(e)=>{
            console.log(e.target.value);
            setPosition(e.target.value)
        }}>
        {countries.map((item,index)=>{
            return(<option value={index}>{item.name}</option>)
            })}
        </select>
        <select>
            {countries[position].cities.map((item,index)=>{
                return <option value={index}>{item}</option>
            })}
        </select>
     
    </div>
  )
}

export default Dropdown
