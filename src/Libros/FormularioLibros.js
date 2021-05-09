import React from 'react';
import { useFormik } from 'formik';

const FormularioLibros = (props) => {

  const formik = useFormik({
    initialValues: {
        id_libro: '',
        titulo: '',
        autor: '',
        anio: '',
        multapordia: ''
    },
    onSubmit: values => {
      props.guardar(values);
    },
  });
  
  return (
      <div>
        <div className="text-right">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Agregar
          </button>
        </div>
        <br/>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Agregar libro</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="form-inline">
                <input
                  id="id_libro"
                  name="id_libro"
                  type="number"
                  className="form-control mb-2 mr-sm-2" placeholder="Id Libro"
                  onChange={formik.handleChange}
                  value={formik.values.id_libro}
                  />
                  <input
                  id="titulo"
                  name="titulo"
                  type="text"
                  className="form-control mb-2 mr-sm-2" placeholder="Título"
                  onChange={formik.handleChange}
                  value={formik.values.titulo}
                  />
                  <input
                  id="autor"
                  name="autor"
                  type="text"
                  className="form-control mb-2 mr-sm-2" placeholder="Autor"
                  onChange={formik.handleChange}
                  value={formik.values.autor}
                  />
                  <input
                  id="anio"
                  name="anio"
                  type="number"
                  className="form-control mb-2 mr-sm-2" placeholder="Año"
                  onChange={formik.handleChange}
                  value={formik.values.anio}
                  />
                  <input
                  id="multapordia"
                  name="multapordia"
                  type="number"
                  className="form-control mb-2 mr-sm-2" placeholder="MultaXDía"
                  onChange={formik.handleChange}
                  value={formik.values.multapordia}
                  />
                </form>
              </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default FormularioLibros;