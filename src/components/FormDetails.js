const FormDetail = ({ createOrder, handleOnChange, userDate }) => {
  return (
    <>
      <main className="section_form">
        <form onSubmit={createOrder} className="feed-form">
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input
            name="nombre"
            required=""
            placeholder="Nombre y Apellido"
            type="text"
            id="nombre"
            onChange={handleOnChange}
            value={userDate.name}
          />
          <label htmlFor="telefono">Telefono</label>
          <input
            name="telefono"
            required=""
            placeholder="Telefono"
            type="text"
            id="telefono"
            onChange={handleOnChange}
            value={userDate.number}
          />
          <label htmlFor="correo">Correo Electronico</label>
          <input
            name="correo"
            required=""
            placeholder="Correo Electronico"
            type="email"
            id="correo"
            onChange={handleOnChange}
            value={userDate.email}
          />
          <label htmlFor="verifyCorreo">Repetir Correo Electronico</label>
          <input
            name="verifyCorreo"
            required=""
            placeholder="Repite Correo Electronico"
            type="email"
            id="verifyCorreo"
            onChange={handleOnChange}
            value={userDate.repeatEmail}
          />
          <button className="button_submit">Crear Orden</button>
        </form>
      </main>
    </>
  );
};

export default FormDetail;