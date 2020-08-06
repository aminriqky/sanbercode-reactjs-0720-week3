import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Hooks = () => {

    const [dataHargaBuah, setdataHargaBuah] = useState(null)
    const [inputName, setInputName]  =  useState({
        nama : "", 
    })
    const [inputHarga, setInputHarga]  =  useState({
        harga : "", 
    })
    const [inputBerat, setInputBerat]  =  useState({
        berat : "" 
    })

    useEffect( () => {
        if (dataHargaBuah === null) {
            Axios.get('http://backendexample.sanbercloud.com/api/fruits')
                .then(res =>{
                    setdataHargaBuah(res.data.map(el=>{return {id:el.id, nama:el.nama, harga:el.harga, berat:el.berat }}))
                })
        }
    },[dataHargaBuah])

  const handleChange = (event) =>{
    setInputName(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    setState({
      dataHargaBuah: [...dataHargaBuah, {
        nama : inputName, 
        harga : inputHarga, 
        berat : inputBerat
      }],
      inputName: "",
      inputHarga : "",
      inputBerat : ""
    })
  }

  const handleDelete = (event) => {
    let index = event.target.value
    let newdataHargaBuah = dataHargaBuah
    newdataHargaBuah.splice(index, 1)

    setState({dataHargaBuah: newdataHargaBuah});
  }

  const handleEdit = (event) => {
    let index = event.target.value;
    let buah = dataHargaBuah[index]

    setState({inputName: buah, indexOfForm: index});
    console.log(event.target.value);
  }
}

return (
    <>
    <center>
    <h1>Tabel Harga Buah</h1>
    <table>
    <tbody>
    <tr>
        <th id='warna'>Nama</th>
        <th id='warna'>Harga</th>
        <th id='warna'>Berat</th>
        <th id='warna'>Tombol</th>
    </tr>
    </tbody>
    </table>
    </center>
    { dataHargaBuah.map(tampil => {
        return (
        <center>
        <table>
        <tbody>
            <tr key={index}>
                <Nama nama={tampil.nama}/>
                <Harga harga={tampil.harga}/>
                <Berat berat={tampil.berat}/>
                <td><button name="inputName" value={inputName} onClick={handleDelete}>Delete</button></td>
                <td><button name="inputName" value={inputName} onClick={handleEdit}>Edit</button></td>
            </tr>
        </tbody>
        </table>
        </center>
        )
    })}
    <center>
      <br></br>
        <form onSubmit={handleSubmit}>
          <label>
            Masukkan nama buah:
          </label>          
          <input type="text" name="inputName" value={inputName} onChange={handleChange}/>
          <br></br>
          <label>
            Masukkan harga buah:
          </label>          
          <input type="text" name="inputHarga" value={inputHarga} onChange={handleChange}/>
          <br></br>
          <label>
            Masukkan berat buah:
          </label>          
          <input type="text" name="inputBerat" value={inputBerat} onChange={handleChange}/>
          <br></br>
          <button>submit</button>
        </form>
    </center>
    </>
)

export default Hooks