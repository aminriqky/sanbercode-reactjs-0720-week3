import React from 'react';
import { Switch, Link, Route } from "react-router-dom";
import "./Routes.css"
import UserInfo from "../tugas11/UserInfo";
import DuaBelas from "../tugas12/DuaBelas";
import DaftarBuah from "../tugas13/DaftarBuah";
import DaftarBuah14 from "../tugas14/DaftarBuah";
import Example from "../Example/Example";

const Routes = () => {
    return(
        <>
         <nav>
            <Link to="/"><a href="/">Tugas 11</a></Link>
            <Link to="/DuaBelas"><a href="/DuaBelas">Tugas 12</a></Link>
            <Link to="/DaftarBuah"><a href="/DaftarBuah">Tugas 13</a></Link>
            <Link to="/DaftarBuah14"><a href="/DaftarBuah14">Tugas 14</a></Link>
            <Link to="/Example"><a href="/Example">Example</a></Link>
        </nav>
        <div class="b">
        <Switch>
        <Route path="/Example">
                <Example/>
            </Route>
            <Route path="/DuaBelas">
                <DuaBelas/>
            </Route>
            <Route path="/DaftarBuah">
                <DaftarBuah/>
            </Route>
            <Route path="/DaftarBuah14">
                <DaftarBuah14/>
            </Route>
            <Route path="/">
                <UserInfo/>
            </Route>
        </Switch>
        </div>
        </>
    );
};

export default Routes;