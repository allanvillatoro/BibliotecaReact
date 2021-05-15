import React from 'react';
import { useFormik } from 'formik';
import ls from 'local-storage';
import axios from "axios";

function AgregarLibro(props){

    async function guardarLibro(libro) {
      //Con Web API
      //Usando Async y Await
      /*try {
        const respuesta = await axios.post(
          `https://localhost:44302/api/libros`,
          libro
        );
        if (respuesta.request.status === 201) {
          window.alert("Agregado exitosamente");
        } else {
          window.alert("Error al agregar");
        }
      } catch (e) {
        console.log(e);
        window.alert("Error al agregar");
      }*/

      //Sin Web API
      //Usando LocalStorage
      if (
        libro.id_libro >= 0 &&
        libro.titulo !== "" &&
        libro.autor !== "" &&
        libro.anio > 0 &&
        libro.multapordia >= 0
      ) {
        let listaGuardar = [];
        let lista = ls.get("misLibros");
        if (lista && lista.length > 0) listaGuardar = lista;
        listaGuardar = listaGuardar.concat(libro);
        ls.set("misLibros", listaGuardar);
      } else {
        window.alert("Favor ingresar correctamente los datos");
      }
    }

    const formik = useFormik({
        initialValues: {
            id_libro: '',
            titulo: '',
            autor: '',
            anio: '',
            multapordia: ''
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
            Guardar
          </button>
        </form>
      </div>
    );
}

export default AgregarLibro;