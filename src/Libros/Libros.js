import React from "react";
import TablaLibros from "./TablaLibros";
import axios from "axios";
import ls from 'local-storage';

class Libros extends React.Component {
  constructor(props) {
    super(props);
    const listaLibros = [
      {
        id_libro: 101,
        titulo: "Pensando en React",
        autor: "Facebook",
        anio: 2015,
        multapordia: 10.4,
      },
      {
        id_libro: 102,
        titulo: "Programación en Angular",
        autor: "Google",
        anio: 2013,
        multapordia: 14,
      },
      {
        id_libro: 103,
        titulo: "Vue.js",
        autor: "Internet",
        anio: 2016,
        multapordia: 8.4,
      },
    ];
    this.state = {
      libros: listaLibros,
    };
    this.abrirAgregarLibro = this.abrirAgregarLibro.bind(this);
    this.abrirEditarLibro = this.abrirEditarLibro.bind(this);
  }

 async componentDidMount() {
    console.log("componentDidMount");

    //Con Web API
    //Usando Async y Await
    /*try{
        const respuesta = await axios.get('https://localhost:44302/api/libros');
        const lista = respuesta.data;
        this.setState({ libros: lista });
      }
      catch(e){
        console.log(e);
      }*/

    //Sin Web API
    console.log("Recuperando de LocalStorage");
    const lista = ls.get('misLibros');
    if (lista && lista.length > 0) {
      //console.log(lista)
      this.setState ({libros: lista})
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  abrirAgregarLibro(){
    console.log("abrirAgregarLibro");
    this.props.history.push('/AgregarLibro');
  }

  //El id lo recibe cuando se le da al boton del libro en la tabla
  abrirEditarLibro(id){
    console.log("editar libro con id = " + id);
    let indice = this.state.libros.findIndex(libro => libro.id_libro === id );
    //Carga otra página con ruta /EditarLibro
    this.props.history.push('/EditarLibro',this.state.libros[indice]);
  }

  render() {
    return (
      <div>
        <br />
        <div className="text-right">
          <button type="button" className="btn btn-primary" onClick={this.abrirAgregarLibro}>
            Agregar
          </button>
        </div>
        <TablaLibros libros={this.state.libros} abrirEditarLibro={this.abrirEditarLibro} />
      </div>
    );
  }
}

export default Libros;