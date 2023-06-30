import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import {Route,Routes} from "react-router-dom";
import Home from "./Home";
// import { io } from "socket.io-client";
// const socket = io.connect("http://localhost:8000");

function App() {
  return (
    <div>
      <Routes>
        <Route path="/chats" element={ <Chat/> } />
        <Route path="/Home" element={ <Home/> } />
      </Routes>
    </div>
  )
}

export default App;
