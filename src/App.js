import React, {useState} from 'react'
import './App.css';
import DataTable from 'react-data-table-component'
import Button from './component/Button';
function App() {

  const columns =[
    {
      name : "Name",
      selector: row=> row.name,
      sortable: true
    },
    {
      name : "Email",
      selector: row=> row.email,
      sortable:true
    },
    {
      name : "Age",
      selector: row=> row.age,
      sortable: true
    }


  ];

  const data=[
    {
      id: 1,
      name: "Joel",
      email: "joel@gmail.com",
      age: 34

    },
    {
      id: 2,
      name: "Peter",
      email: "Peter@gmail.com",
      age: 28

    },
    {
      id: 1,
      name: "Joseph",
      email: "joseph@gmail.com",
      age: 34

    }
  ]

  const[records, setRecords] = useState(data)

  
  function handleFilter(event){
    const newData = data.filter(row=>{
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })

    setRecords(newData)
  }

  const [isToggle, setToggle] = useState(false)
  return (
    <div className="container mt-5">
    <div className= "text-end">
    <input type="text"  onChange={handleFilter}/>
    </div>
    <DataTable
          columns ={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination

    >
    </DataTable>
    <button onClick={()=>setToggle(!isToggle)}>Toggle</button>
      {isToggle? <Button/>: <p></p>}
    
    </div>
  );
}

export default App;
