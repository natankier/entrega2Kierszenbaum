import React from 'react'

const FormCheckOut = ({dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div>
        <form  onSubmit={handleSubmitForm}>
        <label > Nombre Completo </label>
        <input type="text" name="fullname" value={dataForm.fullname}  onChange={handleChangeInput}/>

        <label > Telefono </label>
        <input type="text" name="phone" value={dataForm.phone}  onChange={handleChangeInput}/>
    
        <label > Correo electronico </label>
        <input type="text" name="email" value={dataForm.email}  onChange={handleChangeInput}/>

        <button type="submit">Enviar orden</button>
        </form>  
    </div>
  )
}

export default FormCheckOut