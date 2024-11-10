import React from 'react';

const FormCheckOut = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmitForm}>
        <label>Nombre Completo</label>
        <input
          type="text"
          name="fullname"
          value={dataForm.fullname}
          onChange={handleChangeInput}
        />

        <label>Teléfono</label>
        <input
          type="text"
          name="phone"
          value={dataForm.phone}
          onChange={handleChangeInput}
        />

        <label>Correo Electrónico</label>
        <input
          type="text"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />

        <label>Repetir Correo Electrónico</label>
        <input
          type="text"
          name="repeatEmail"
          value={dataForm.repeatEmail}
          onChange={handleChangeInput}
        />

        <button type="submit">Enviar Orden</button>
      </form>
    </div>
  );
};

export default FormCheckOut;
