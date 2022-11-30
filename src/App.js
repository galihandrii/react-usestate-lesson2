import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
const [data,setData] = useState(false);
const handleData = () => {
  setData(!data);
  }

const [res,setRes] = useState([
  {
    id: 1,
    title: "teacher",
  },
  {
    id: 2,
    title: "officer",
  }
])

const [age,setAge]=useState("");
const handleAge = (x) => {
  const thisYear = new Date().getFullYear();
  const bornYear = parseInt(x);
  const check = thisYear - bornYear;
  setAge(check.toString());
}

const [name,setName] =useState("");
const handleChangeName = (e) =>{
  setName(e.target.value);
}




  return (
    <div className="App">
      <h1>Hello {!!data ? "aktif" : "tidak aktif"}</h1>
      <button onClick={handleData}>Rubah Data</button>
      
      {
        res.map(function(item){
          return (
            <div>
              <p>{item.title}</p>
            </div>
          )
        })
      }

     <Header />
     <Body />
     <Footer />

     <input placeholder="Masukan tahun lahir" onChange={handleChangeName}/>
     
     { !!age.length ? age : null }
      <button onClick={() =>handleAge(name)}>Masukan umur</button>

    </div>
  );
}

export default App;
