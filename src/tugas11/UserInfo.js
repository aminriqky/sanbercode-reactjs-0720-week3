import React from "react";

class Nama extends React.Component {
    render(){
        return <td>{this.props.nama}</td>
    }
}

class Harga extends React.Component {
    render(){
        return <td>{this.props.harga}</td>
    }
}

class Berat extends React.Component {
    render(){
        return <td>{this.props.berat*0.001} kg</td>
    }
}

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class UserInfo extends React.Component {
    render(){
        return (
            <>
            <center>
            <h1>Tabel Harga Buah</h1>
            <table>
            <tr>
                <th id='warna'>Nama</th>
                <th id='warna'>Harga</th>
                <th id='warna'>Berat</th>
            </tr>
            </table>
            </center>
            { dataHargaBuah.map(tampil => {
                return (
                <center>
                <table>
                    <tr>
                        <Nama nama={tampil.nama}/>
                        <Harga harga={tampil.harga}/>
                        <Berat berat={tampil.berat}/>
                    </tr>
                </table>
                </center>
                )
            })}
            </>
        )
    }
}

export default UserInfo