import { publicRouter } from "./routers"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts"

function App() {
  return (
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
  )
}
export default App
