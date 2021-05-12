import React from 'react';
import { useFormik } from 'formik';
import ls from 'local-storage';

function EditarLibro(props){
    let libro = props.location.state; //recupera en props lo enviado con this.props.history.push('/EditarLibro',this.state.libros[indice]);
    if (!libro)
      props.history.goBack();

      function guardarLibro(libro) {
        if (libro.id_libro >= 0 && libro.titulo !== '' && libro.autor !== '' && libro.anio > 0 && libro.multapordia >= 0) {
          let lista = ls.get('misLibros');
          let indice = lista.findIndex(book => book.id_libro === libro.id_libro );
          lista[indice] = libro;
          ls.set("misLibros", lista);
          props.history.goBack(); //Regresa al main
        }
        else{
          window.alert("Favor ingresar los datos")
        }
      }

    const formik = useFormik({
        initialValues: {
            id_libro: libro.id_libro,
            titulo: libro.titulo,
            autor: libro.autor,
            anio: libro.anio,
            multapordia: libro.multapordia
        },
        onSubmit: values => {
          console.log("Llamar aquí al Web API o guardar en LocalStorage");
          console.log(values);
          guardarLibro(values);
        },
      });

    return (
      <div className="col-sm-12 col-lg-6 offset-lg-3">
        <br/>
        <br/>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="id_libro">Id Libro</label>
            <input
              type="number"
              className="form-control"
              id="id_libro"
              onChange={formik.handleChange}
              value={formik.values.id_libro}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              onChange={formik.handleChange}
              value={formik.values.titulo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="autor">Autor</label>
            <input
              type="text"
              className="form-control"
              id="autor"
              onChange={formik.handleChange}
              value={formik.values.autor}
            />
          </div>
          <div className="form-group">
            <label htmlFor="anio">Año</label>
            <input
              type="number"
              className="form-control"
              id="anio"
              onChange={formik.handleChange}
              value={formik.values.anio}
            />
          </div>
          <div className="form-group">
            <label htmlFor="multapordia">Multa por día</label>
            <input
              type="number"
              className="form-control"
              id="multapordia"
              onChange={formik.handleChange}
              value={formik.values.multapordia}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
}

export default EditarLibro;