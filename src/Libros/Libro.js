import React from 'react';

function Libro(props){
    const book = props.valor;
    const retorno = (
      <tr>
        <th scope="row">{props.indice}</th>
        <td>{book.id_libro}</td>
        <td>{book.titulo}</td>
        <td>{book.autor}</td>
        <td>{book.anio}</td>
        <td>{book.multapordia}</td>
        <td><button type="button" className="btn btn-primary" onClick={(e)=>props.abrirEditarLibro(book.id_libro)}><i className="fa fa-book"></i></button></td>
      </tr>
    );
    return retorno;
}

export default Libro;