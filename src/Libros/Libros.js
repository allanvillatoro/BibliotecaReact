import React from 'react';
import TablaLibros from './TablaLibros';
import FormularioLibros from './FormularioLibros';
import axios from 'axios';

class Libros extends React.Component {

  constructor(props) {
    super(props);
    const listaLibros = [
      {id_libro: 101, titulo: 'Pensando en React', autor:'Facebook', anio: 2015, multapordia: 10.4},
      {id_libro: 102, titulo: 'Programación en Angular', autor:'Google', anio: 2013, multapordia: 14},
      {id_libro: 103, titulo: 'Vue.js', autor:'Internet', anio: 2016, multapordia: 8.4},
    ];
    this.state = {
      libros: listaLibros
    };
    this.guardarLibro = this.guardarLibro.bind(this);
  }

  async componentDidMount() {
    console.log("componentDidMount");
      //Usando Async y Await
      try{
        const respuesta = await axios.get('https://localhost:44302/api/libros');
        const lista = respuesta.data;
        this.setState({ libros: lista });
      }
      catch(e){
        console.log(e);
      }
  }

  async guardarLibro(libro){
      //Usando Async y Await
      try{
        const respuesta = await axios.post(`https://localhost:44302/api/libros`, libro);
        if (respuesta.request.status === 201) {
          this.setState((state, props) => ({
            libros: state.libros.concat(libro)
          }));
          window.alert('Agregado exitosamente');
        }
        else{
          window.alert('Error al agregar');
        }
      }
      catch(e){
        console.log(e);
        window.alert('Error al agregar');
      }      
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  render () {
    return (  
      <div>
        <br/>
        <FormularioLibros guardar={this.guardarLibro} />
        <TablaLibros libros={this.state.libros} />
      </div>
    );
  }
}

export default Libros;
