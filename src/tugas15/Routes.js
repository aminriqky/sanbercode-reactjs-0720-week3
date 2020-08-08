import React from 'react';
import { Switch, Link, Route } from "react-router-dom";
import "./Routes.css"
import UserInfo from "../tugas11/UserInfo";
import DuaBelas from "../tugas12/DuaBelas";
import DaftarBuah from "../tugas13/DaftarBuah";
import DaftarBuah14 from "../tugas14/DaftarBuah";
// import DaftarBuah15 from "./DaftarBuahForm";

const Routes = () => {
    return(
        <>
         <nav>
            <Link to="/"><a>Tugas 11</a></Link>
            <Link to="/DuaBelas"><a>Tugas 12</a></Link>
            <Link to="/DaftarBuah"><a>Tugas 13</a></Link>
            <Link to="/DaftarBuah14"><a>Tugas 14</a></Link>
            {/* <Link to="/DaftarBuah15"><a>Tugas 15</a></Link> */}
        </nav>
        <div class="b">
        <Switch>
            <Route path="/DuaBelas">
                <DuaBelas/>
            </Route>
            <Route path="/DaftarBuah">
                <DaftarBuah/>
            </Route>
            <Route path="/DaftarBuah14">
                <DaftarBuah14/>
            </Route>
            {/* <Route path="/DaftarBuah15">
                <DaftarBuah15/>
            </Route> */}
            <Route path="/">
                <UserInfo/>
            </Route>
        </Switch>
        </div>
        </>
    );
};

export default Routes;