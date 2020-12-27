import React from "react";
import "./App.css";
import {Routes,Route} from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contacts,
  Whoops404,
  Location,
  CompanyHistory,
  Services
} from "./pages";


function App(){
  return (
    <div>
      <Routes>
          < Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
            <Route path="services" element={<Services />}/>
            <Route path="history" element={<CompanyHistory />}/>
            <Route path="location" element={<Location />}/>
          </Route>
          <Route path="/events" element={<Events />}>
          </Route>
          <Route path="/contacts" element={<Contacts />}>
          </Route>
          <Route path="*" element={<Whoops404 />}>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
