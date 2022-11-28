import Header from "../component/Header"
import Register from "./Register"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Home() {
  const {
    host, hostname, href, origin, pathname, port, protocol, search
  } = window.location
    return (
        <div>
           <h1>This is Home</h1>
           <h1>hostname</h1>
        </div>
    )
  }