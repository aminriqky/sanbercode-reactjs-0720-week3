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

class Lists extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      dataHargaBuah : [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ],
      inputName : "",
      inputHarga : "",
      inputBerat : ""
    }
    
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(evt){  
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      dataHargaBuah: [...this.state.dataHargaBuah, {
        nama : this.state.inputName, 
        harga : this.state.inputHarga, 
        berat : this.state.inputBerat
      }],
      inputName: "",
      inputHarga : "",
      inputBerat : ""
    })
  }

  handleDelete(event) {
    let index = event.target.value
    let newdataHargaBuah = this.state.dataHargaBuah
    newdataHargaBuah.splice(index, 1)

    this.setState({dataHargaBuah: newdataHargaBuah});
  }

  handleEdit(event) {
    let index = event.target.value;
    let buah = this.state.dataHargaBuah[index]

    this.setState({
      inputName: buah.nama,
      inputBerat: buah.harga,  
      inputHarga: buah.berat, 
      indexOfForm: index
    });
    console.log(event.target.value);
  }

  render(){
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
          { this.state.dataHargaBuah.map(tampil => {
              return (
              <center>
              <table>
              <tbody>
                  <tr>
                      <Nama nama={tampil.nama}/>
                      <Harga harga={tampil.harga}/>
                      <Berat berat={tampil.berat}/>
                      <td><button name="inputName" value={this.state.inputName} onClick={this.handleDelete}>Delete</button></td>
                      <td><button name="inputName" value={index} onClick={this.handleEdit}>Edit</button></td>
                  </tr>
              </tbody>
              </table>
              </center>
              )
          })}
          <center>
            <br></br>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Masukkan nama buah:
                </label>          
                <input type="text" name="inputName" value={this.state.inputName} onChange={this.handleChange}/>
                <br></br>
                <label>
                  Masukkan harga buah:
                </label>          
                <input type="text" name="inputHarga" value={this.state.inputHarga} onChange={this.handleChange}/>
                <br></br>
                <label>
                  Masukkan berat buah:
                </label>          
                <input type="text" name="inputBerat" value={this.state.inputBerat} onChange={this.handleChange}/>
                <br></br>
                <button>submit</button>
              </form>
          </center>
          </>
      )
  }
}

export default Lists