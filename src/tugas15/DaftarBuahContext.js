import React, { useState, createContext} from "react";

export const DaftarBuahContext = createContext();

export const DaftarBuahProvider = props => {
    const [dataHargaBuah, setdataHargaBuah]  =  useState(
        {name: "", price: "", weight: 0}
    )


  return (
    <DaftarBuahContext.Provider value={[dataHargaBuah, setdataHargaBuah]}>
      {props.children}
    </DaftarBuahContext.Provider>
  );
};