import React, {useContext, useEffect} from "react"
import {DaftarBuahContext} from "./DaftarBuahContext"

const DaftarBuahList = () =>{
  const [daftarBuah] = useContext(DaftarBuahContext)

useEffect(() => {
    if (daftarBuah === null){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
          setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
      })
  }
}, [daftarBuah])

  return(
    <>
    <center>
      <h1>Daftar Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            {daftarBuah !== null && daftarBuah.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight/1000} Kg</td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      </center>
    </>
  )

}

export default DaftarBuahList