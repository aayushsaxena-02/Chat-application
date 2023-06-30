import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// const socket = io.connect("http://localhost:8000");

function Chat() {

  const [chat,setChat] = useState([]);

  const fetchChats = async () => {
    try{
      const res = await fetch('/api/chats',{
        method:"GET",
        headers:{
          Accept: "application/json",
          "Content-Type":"application/json"
        }
      });

      const data = await res.json();
      setChat(data);
    //   console.log(data[0].users[1].name);

    }
    catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchChats();
  },[]);

  return (
    <div className="">

    {chat.map((c) => (
        <div key={c._id}>{c.chatName}</div>
    ))}


      {/* <ul id="messages"></ul>
      <form id="form" method ="post">
        <input id="input" autoComplete="off" name="name"/>
        <button>Send</button>
      </form> */}
    </div>
  );
}

export default Chat;
