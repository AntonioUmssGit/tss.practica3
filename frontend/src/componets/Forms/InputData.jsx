import React from 'react';
import { Formik, Form, Field } from 'formik';

export const InputData = () => {
  return (<>
    <div className='containerForms'>
      <Formik
        initialValues={{
          nomberRecorrido: '',
          distance: '',
        }}
        validate={(valores) => {
          let errors = {};
          if(!valores.DtStatus){
            errors.DtStatus = 'el campo ESTADO DT es requerido obligatoriamente';
        }
       
        return errors;
      }}
      >
        {({values, errors, touched, handleChange}) => (
          <Form className='styleForm'>
            <section>
              <label htmlFor="sucursal">sucursal 1</label>
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner numero de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner recorrido de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
            </section>
            <section>
              <label htmlFor="sucursal">sucursal 2</label>
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner numero de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner recorrido de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
            </section>
            <section>
              <label htmlFor="sucursal">sucursal 3</label>
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner numero de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner recorrido de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
            </section>
            <section>
              <label htmlFor="sucursal">sucursal 4</label>
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner numero de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner recorrido de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
            </section>
            <section>
              <label htmlFor="sucursal">sucursal 5</label>
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner numero de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner recorrido de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
            </section>
            <section>
              <label htmlFor="sucursal">sucursal 6</label>
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner numero de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
              <Field 
                className = ''
                type = 'text'
                id = ''
                name = ''
                placeholder = 'poner recorrido de sucursal'
                value = {values.nomberRecorrido}
                onChange = {handleChange}
              />
            </section>

            
          </Form>
        )}
      </Formik>
    </div>
  </>)
};