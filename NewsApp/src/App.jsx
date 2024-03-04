import NavBar from "./components/NavBar"
import News from "./components/News"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const pageSize = 8;
  console.log(import.meta.env.VITE_NEWS_API)
  const apiKey = import.meta.env.VITE_NEWS_API
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exect path="/" element={<News category="general" pageSize={pageSize} apiKey={apiKey}/>}></Route>
          <Route exect path="/business" element={<News category="business" pageSize={pageSize} apiKey={apiKey}/>}></Route>
          <Route exect path="/entertainment" element={<News category="entertainment" pageSize={pageSize} apiKey={apiKey}/>}></Route>
          <Route exect path="/health" element={<News category="health" pageSize={pageSize} apiKey={apiKey}/>}></Route>
          <Route exect path="/sports" element={<News category="sports" pageSize={pageSize} apiKey={apiKey}/>}></Route>
          <Route exect path="/technology" element={<News category="technology"pageSize={pageSize} apiKey={apiKey}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
