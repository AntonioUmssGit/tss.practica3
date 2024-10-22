import React from "react";
import { Formik, Form, Field } from "formik";
import "./InputNumSuc.css";

export const InputNumSuc = ({ onCreateTable }) => {
  return (
    <div className="stylesContetdForm">
      <Formik
        initialValues={{
          numSuc: "",
          disSuc: "",
        }}
        validate={(valores) => {
          let errors = {};

          if (!valores.numSuc) {
            errors.numSuc = "El campo número de sucursales es obligatorio";
          } else if (!/^[1-9\s]{1,1}$/.test(valores.numSuc)) {
            errors.numSuc = "El campo solo puede ser numérico entre 1 y 9";
          }

          if (!valores.disSuc) {
            errors.disSuc = "El campo distancia entre sucursales es obligatorio";
          } else if (!/^[0-9\s]{1,9}$/.test(valores.disSuc)) {
            errors.disSuc = "El campo solo puede ser numérico";
          }

          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          onCreateTable(parseInt(valores.numSuc), parseInt(valores.disSuc));
          resetForm();
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit} className="stylesContetdForm">
            <label htmlFor="numSuc">Número de Sucursales</label>
            <div>
              <Field
                className="imputFieldStyle"
                type="number"
                id="numSuc"
                name="numSuc"
                value={values.numSuc}
                placeholder="Escribe el número de sucursales"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.numSuc && errors.numSuc && <div className="styleErrores">{errors.numSuc}</div>}
            </div>
            <label htmlFor="disSuc">Distancia entre Sucursales</label>
            <div>
              <Field
                className=""
                type="number"
                id="disSuc"
                name="disSuc"
                value={values.disSuc}
                placeholder="Escribe la distancia entre sucursales"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.disSuc && errors.disSuc && <div className="styleErrores">{errors.disSuc}</div>}
            </div>
            <button type="submit" className="styleButton">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
