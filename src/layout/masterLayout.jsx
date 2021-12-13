import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Context } from "../store/appContext";
const Master = ({ children }) => {
  return <div>{children}</div>;
};
const MasterRoute = ({ component: Component, ...others }) => {
  const { store, actions } = useContext(Context);
    console.log(others)
  if (store.user === null) {
    const user = localStorage.getItem("auth");
    if (user !== null) {
      actions.revalidate(JSON.parse(user));
    } else {
      return <Redirect to="/" />;
    }
  }
  return (
    <Route
      {...others}
      render={(props) => (
        <Master>
          <Component {...props} />
        </Master>
      )}
    />
  );
};
export default MasterRoute;