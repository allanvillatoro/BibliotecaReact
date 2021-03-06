import React from 'react';
import Libro from './Libro';

function TablaLibros (props) {
    const libros = props.libros;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Título</th>
            <th scope="col">Autor</th>
            <th scope="col">Anio</th>
            <th scope="col">MultaXDía</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {libros.map(
          (libro,index)=><Libro key={libro.id_libro.toString()} indice={index+1} valor={libro} abrirEditarLibro={props.abrirEditarLibro}/>)}
        </tbody>
      </table>
    );
}

export default TablaLibros;