import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Login = () =>  {
  const context = useContext(Context)
  const { store, actions } = useContext(Context);
  const [formLogin, setFormLogin] = useState({ 
    email: "", 
    password: "" 
  });

  const [error, setError] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    context.actions.register_user()
  };
  
  const handleChange = (e) => {
    setFormLogin({ 
      ...formLogin, 
      [e.target.name]: e.target.value });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">
            Myco App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2">
            <img
              className="img-fluid img-thumbnail rounded-circle"
              width="150"
              height="150"
              src="../images/cordyceps-millitaris.jpg"
              alt="mushroom"
            />

            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 align-self-center">
            <form className="clase-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <h6 className="text-muted">Inicia sesión</h6>
                <label className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formLogin.email}
                  onChange={handleChange}                  
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-muted">
                  Nunca compartiremos tu dirección de correo con nadie más.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={formLogin.password}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <button type="submit" value='Enviar' className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
              <div>
                <hr />
                <h6 className="text-muted">¿Nuevo por acá?</h6>
                <div className="btn btn-primary">Regístrate</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
