import React, { useState, Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import TripList from "./components/TripList";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "Click the button to load data!",
//     };
//   }

//   fetchData = () => {
//     axios
//       .get("/api/data") // You can simply make your requests to "/api/whatever you want"
//       .then((response) => {
//         // handle success
//         console.log(response.data); // The entire response from the Rails API

//         console.log(response.data.message); // Just the message
//         this.setState({
//           message: response.data.message,
//         });
//       });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.message}</h1>
//         <button onClick={this.fetchData}>Fetch Data</button>
//       </div>
//     );
//   }
// }

function App() {
  const [message, setMessage] = useState("Click the button to load data!");
  const [userid, setUserid] = useState(1)
  const [loggedin, setLoggedin] = useState(false);

  const fetchData = () => {
    axios.get("/api/users").then((response) => {
      console.log(response.data);
      console.log(response.data.message);
      setMessage(response.data.message);
    });
  };

  const login = () => {
    axios.get(`http://localhost:8080/api/users/login/${userid}`).then((response) => {
      console.log(response.data);
      if(response.data === "Success") {
        setLoggedin(true);
      }
    });
  }

  return (
    <div className="App">
      <Navbar />
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {!loggedin && <button onClick={login}>Login</button>}
      {loggedin && <button>Logout</button>}
      <TripList />
    </div>
  );
}

export default App;
