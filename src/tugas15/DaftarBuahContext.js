import React, { useState, createContext, useEffect } from "react";

export const DaftarBuahContext = createContext();

export const DaftarBuahProvider = props => {
  const [buah, setBuah] = useEffect([
        if (daftarBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
          })
        }, [daftarBuah]
  );

  return (
    <DaftarBuahContext.Provider value={[buah, setBuah]}>
      {props.children}
    </DaftarBuahContext.Provider>
  );
};