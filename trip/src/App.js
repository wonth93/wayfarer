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

  const fetchData = () => {
    axios.get("/api/users").then((response) => {
      console.log(response.data);
      console.log(response.data.message);
      setMessage(response.data.message);
    });
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <Navbar />
      <TripList />
    </div>
  );
}

export default App;
