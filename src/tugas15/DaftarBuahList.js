import React, {useContext} from "react"
import {DaftarBuahContext} from "./DaftarBuahContext"

const DaftarBuahList = () =>{
  const [buah] = useContext(DaftarBuahContext)

  return(
    <ul>
      {buah.map(el=>{
        return <li>name: {name: el.name} price: {price: el.price} weight:{weight: el.weight}</li>
      })}
    </ul>
  )

}

export default DaftarBuahList