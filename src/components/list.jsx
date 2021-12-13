/*const Li = ({ children, estado, alucinógeno, zonaGeográfica }) => {
    console.log(alucinógeno, zonaGeográfica)
    return (
        <li>{children} es {estado}</li>
    )
}
  
const X = () => {
  <ul>
    <Li estado={"comestible"} alucinógeno={false} zonaGeográfica={7}>
      Hongo 1
    </Li>
    <Li estado={"comestible"}>Hongo 2</Li>
    <Li estado={"comestible"}>Hongo 3</Li>
  </ul>;
};*/


/* 


import { useContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Context } from '../store/appContext';
import './App.css';


const App = () => {
  const {store, actions} = useContext(Context)//importante
  

  return (
    <div className="container">
      <div className="row pt-5">
        {
          store.user === null ?
            <div className="col-md-6 offset-3">
              <form onSubmit={e => actions.handleSubmit(e)}>
                <div className="mb-3">
                  <label
                    className="form-label">
                    Email address
                  </label>
                  <input
                    onChange={e => actions.handleChange(e)}
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label
                    className="form-label">
                    Password
                  </label>
                  <input
                    onChange={e => handleChange(e)}
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            :
            <div className="col-md-6 offset-3 text-center">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={user.avatar} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                      <p className="card-text">{user.email}</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
 */