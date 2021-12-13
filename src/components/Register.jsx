import { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Register = () => {
  const store = useContext(Context)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ''
  });

  const [error, setError] = useState(null);

  const validatePassword= (password)  => {
    console.log(password, typeof password, password.length);
    if (password.length <= 6) {
      setError("Tu contraseña debe tener mas de 7 caracteres");
    } else {
      setError(null);
    }
    return;
  }

  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!email.match(regex)) {
      setError("Tu email debe tener un formato válido");
    } 
    return email.toLowerCase();
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    validatePassword(formData.password);
    const parseEmail = validateEmail(formData.email);
    store.actions.register_user(formData);
  };
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
        <label> {error && error}</label> 
      <form noValidate onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal"> Registro</h1> 
        <div className="form-group">
          <label htmlFor="first_name">Primer nombre</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder="nombre"
            value={formData.first_name}
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Apellidos</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Apellidos"
            value={formData.last_name}
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="nombre"
            value={formData.email}
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange} 
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success btn-block"
        >
          Registrate

        </button>
      </form>

      </div>

    </div>



    </div>
  );
};

export default Register;

/* function Form() {
  return (
    <div>
      <div className="container px-5 my-5">
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="nombre"
              type="text"
              placeholder="Nombre"
              data-sb-validations="required"
            />
            <label ">Nombre</label>
            <div
              className="invalid-feedback"
              data-sb-feedback="nombre:required"
            >
              Nombre is required.
            </div>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="apellido"
              type="text"
              placeholder="Apellido"
              style="height: 10rem;"
              data-sb-validations="required"
            ></textarea>
            <label">Apellido</label>
            <div
              className="invalid-feedback"
              data-sb-feedback="apellido:required"
            >
              Apellido is required.
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="email"
              type="text"
              placeholder="Email"
              data-sb-validations="required"
            />
            <label>Email</label>
            <div className="invalid-feedback" data-sb-feedback="email:required">
              Email is required.
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="password"
              type="text"
              placeholder="Password"
              data-sb-validations="required"
            />
            <label>Password</label>
            <div
              className="invalid-feedback"
              data-sb-feedback="password:required"
            >
              Password is required.
            </div>
          </div>
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">
              <div className="fw-bolder">Form submission successful!</div>
              <p>To activate this form, sign up at</p>
              <a href="https://startbootstrap.com/solution/contact-forms">
                https://startbootstrap.com/solution/contact-forms
              </a>
            </div>
          </div>
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg disabled"
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>)
    </div>
  );
}

export default Form;
 */
