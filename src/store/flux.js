import { createBrowserHistory } from 'history';

const getState = ({ getStore, getActions, setStore }) => { 
  let history = createBrowserHistory();
  return {
		store: {
      path:'https://enigmatic-scrubland-84232.herokuapp.com/https://3000-purple-primate-ri751mg6.ws-us23.gitpod.io',
      user: null,
      userData: null,
      email: null,
      password: null,
      first_name: null,
      last_name: null,

    } , 
		actions: {
      // Use getActions to call a function within a fuction
               handleChange: e => {
                const store = getStore()  
                setStore ({ ...store, [e.target.name]: e.target.value })
                },
                handleSubmitLogin: async e => { 
                  try {
                    const store = getStore()
                    const response = await fetch("https://reqres.in/api/login", {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({email: store.email, password: store.password})
                    })
                    const data = await response.json()
                    const userLogged = await fetch('https://reqres.in/api/users/' + data.id)
                    const userLogged_info = await userLogged.json()
                    setStore({user: userLogged_info.data})
                  } catch (error) {
                    console.error(error)
                  }
              
                },
                
                register_user: async (user) => {
                  try {
                    const actions = getActions()
                    console.log(actions)
                    const store = getStore()
                    console.log(store)
                    const resp = await 
                    fetch('https://enigmatic-scrubland-84232.herokuapp.com/https://3000-purple-primate-ri751mg6.ws-us23.gitpod.io/api/v1/auth/register', {
                      method: 'POST',
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify({first_name: store.first_name, last_name: store.first_name, email: store.email, password: store.password}),
                    })
                    const data = await resp.json();
                    //console.log(data)
                    setStore({...store, currentUser: data })
                    await actions.register_user(data.access_token)
                } catch (error) {
                  console.error(error)
                }
            
              },

                sendForm: async state => {
                  try {
                      const actions = getActions()
                      const store = getStore()
                      const resp = await fetch(process.env.REACT_APP_API_URL + 'api/v1/auth/login', {
                          method: 'POST',
                          headers: { "Content-type": "application/json"},
                          body: JSON.stringify(state)
                      })
                      const data = await resp.json()
                      setStore({...store, currentUser: data })
                      await actions.getSingleUser(data.token)
                  } catch (error) {
                      console.error(error)
                  }
      
                },
                
                addRegister: async state => {
                  try {
                      
                      const store = getStore()
                      const resp = await fetch(process.env.REACT_APP_API_URL + 'https://3000-purple-primate-ri751mg6.ws-us21.gitpod.io/api/v1/auth/register/', {
                          method: 'POST',
                          headers: { "Content-type": "application/json"},
                          body: JSON.stringify(state)
                      })
                      
                      const data = await resp.json()
                      setStore({...store, currentUser: data })
                      history.push('/')
                  } catch (error) {
                      console.error(error)
                  }
      
                },
      
                addCollabForm: async state => {
                  try {
                    const actions = getActions()
                    const store = getStore()
                    const resp = await fetch( {
                      method: 'POST',
                      headers: { "Content-type": "application/json",
                      authorization: 'Bearer '+ store.user.token },
                      body: JSON.stringify(state)
                    })
                    const data = await resp.json()
                      await actions.getSingleUser(data.id)
                      setStore({ currentUser: data })
                  } catch (error) {
                      console.log(error)
                  }
                },
                
                getsingleUser: async (token) => {
                  const store = getStore()
                  try {
                      const resp = await fetch(process.env.REACT_APP_API_URL + 'api/v1/users', {
                          headers: { 
                              "Content-type": "application/json",
                              "Authorization": `Bearer ${token}`
                      }
                      })
                      const data = await resp.json()
                      setStore({ userData: data })
                  } catch (error) {
                      console.log(error) //UPS se me olvido xD!!!
                  }
              },
      
                getMushroom: async () => {
                  try {
                    const actions = getActions()
                    const store = getStore()
                    const resp = await fetch('localhost:5000/mushrooms?id=1&type=consumible', { //url de ejemplo para query params
                      method: 'GET',
                      headers: { "Content-type": "application/json",
                      authorization: 'Bearer '+ store.user.token },
                    })
                    const data = await resp.json()
                      await actions.getSingleMushroom(data.id)
                      setStore({ currentUser: data })
                  } catch (error) {
                      console.log(error)
                  }
      
                }
        }
      }
      }; 
      
      export default getState;

     /*  getUsers: () => {
        const store = getStore();
        fetch(store.path + '/api/v1/auth/register/', {
          method: 'GET',
          headers: { "Content-type": "application/json",
          "authorization": "Bearer" + store.accessToken },

        })
        .then(resp => resp.json())
        .then(data => {
          setStore({
            users: data.users
          })
        })
      },

      Register: async () => {
    
      
      login : (formData, history) => {
        try {
          const store = getStore();
          fetch(store.path + '/api/v1/auth/login',{
            method: 'POST',
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(data => {
              setStore ({
                currenUser: data,
                accessToken: data,
                email:null,
                password: null,
                error: null
              })

              //history.push("/")

            })
        } catch (error) {
          console.log(error)
          setStore({
            error:error,
            email:null,
            password:null
          })
        }
      },

      handleChange: e => {
        setStore({
          [e.target.first_name]: e.target.value
        })
      },
    }
  };
}; 
 */

