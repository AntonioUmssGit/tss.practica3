import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';

export const inputData = () => {
  return (
    <Formik
      initialValues={{
        sucursales: [
          { numeroRecorridos: 50, distanciaRecorrida: 30, recorridoMejorado: '' },
          { numeroRecorridos: 2, distanciaRecorrida: 30, recorridoMejorado: '' },
          { numeroRecorridos: 8, distanciaRecorrida: 20, recorridoMejorado: '' },
          { numeroRecorridos: 72, distanciaRecorrida: 20, recorridoMejorado: '' },
          { numeroRecorridos: 12, distanciaRecorrida: 10, recorridoMejorado: '' },
          { numeroRecorridos: 20, distanciaRecorrida: 10, recorridoMejorado: '' },
        ],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Datos enviados:', values);
      }}
    >
      {({ values }) => (
        <Form>
          <h1>Formulario de Sucursales</h1>
          <FieldArray name="sucursales">
            {({ push, remove }) => (
              <div>
                {values.sucursales.map((_, index) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                    <h4>Sucursal {index + 1}</h4>
                    <div>
                      <label>Número de Recorridos:</label>
                      <Field name={`sucursales.${index}.numeroRecorridos`} />
                      <ErrorMessage name={`sucursales.${index}.numeroRecorridos`} component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                      <label>Distancia Recorrida (Km):</label>
                      <Field name={`sucursales.${index}.distanciaRecorrida`} />
                      <ErrorMessage name={`sucursales.${index}.distanciaRecorrida`} component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                      <label>Recorrido Mejorado:</label>
                      <Field name={`sucursales.${index}.recorridoMejorado`} />
                      <ErrorMessage name={`sucursales.${index}.recorridoMejorado`} component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="button" onClick={() => remove(index)}>Eliminar Sucursal</button>
                  </div>
                ))}
                <button type="button" onClick={() => push({ numeroRecorridos: '', distanciaRecorrida: '', recorridoMejorado: '' })}>
                  Agregar Sucursal
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};