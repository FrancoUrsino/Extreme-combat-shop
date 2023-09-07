const FormDetail = ({ createOrder, handleOnChange, userDate }) => {
  return (
    <>
      <main className="section_form">
      <form onSubmit={createOrder} className="">
          <label htmlFor="name">Nombre y Apellido</label>
          <input  name="name"  required=""  placeholder="Nombre y Apellido"  type="text"  id="name"  onChange={handleOnChange}  value={userDate.name}/>
          <label htmlFor="number">telefono</label>
          <input  name="number"  required=""  placeholder="telefono"  type="text"  id="number"  onChange={handleOnChange}  value={userDate.number}/>
          <label htmlFor="email" className="m-10">Email</label>
          <input  name="email"  required=""  placeholder="Email"  type="email"  id="email"  onChange={handleOnChange}  value={userDate.email}/>
          <label htmlFor="repeatEmail">Repetir Email</label>
          <input  name="repeatEmail"  required=""  placeholder="Repite email"  type="email"  id="repeatEmail"  onChange={handleOnChange}  value={userDate.repeatEmail}/>
          <label htmlFor="direction">domicilio</label>
          <input  name="direction"  required=""  placeholder="domicilio"  type="text"  id="direction"  onChange={handleOnChange}  value={userDate.direction}/>
          <button className="">Crear Orden</button>
        </form>
      </main>
    </>
  );
};

export default FormDetail;