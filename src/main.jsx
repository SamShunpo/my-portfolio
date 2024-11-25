import "../src/styles/_variable.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import '../src/styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../src/redux/store";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
