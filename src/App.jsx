import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { publicRouter } from "./routers"
import { DefaultLayout } from "./layouts"
import { AuthProvider } from "./context/authcontext/authcontext"

function App() {
  return (
        <AuthProvider>
          <Router>
            <Routes>
              {
                publicRouter.map((route, index) => {
                  
                  let Layout =  DefaultLayout
                  if(route.layout){
                    Layout = route.layout 
                  }else if(route.layout === null){
                    Layout = React.Fragment
                  }
                  return (
                    <Route  
                        key={index} 
                        path={route.path} 
                        element={ 
                          <Layout>
                            {route.element}
                          </Layout>
                        }
                    />
                  )
                })
              }
            </Routes>
          </Router> 
        </AuthProvider>
  )
}
export default App
