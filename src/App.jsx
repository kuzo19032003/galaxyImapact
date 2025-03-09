import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { publicRouter,privateRouter } from "./routers"
import { DefaultLayout } from "./layouts"
import { AuthProvider } from "./context/authcontext/authcontext"

import AdminLayout from "./layouts/adminlayout/adminlayout"
function App() {
  return (
        <AuthProvider>
          <Router>
            <Routes>
              {
                publicRouter.map((route, index) => {
                  
                  let Layout =  DefaultLayout 

                  // if(route.layout){
                  //   Layout = route.layout 
                  // }else if(route.layout === null){
                  //   Layout = React.Fragment
                  // }
                  
                  if(route.layout !== undefined)
                  {
                      Layout = route.layout || React.Fragment
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
              {
                privateRouter.map((route,index) => (

                    <Route 
                        key={index}
                        path={route.path}
                        element={
                          <AdminLayout>
                              {route.element}
                          </AdminLayout>
                        }
                    />
 
                ))

              }
            </Routes>
          </Router> 
        </AuthProvider>
  )
}
export default App
