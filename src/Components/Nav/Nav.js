

import { NavLink } from "react-router-dom";


function Nav() {

    return (
        <div className="Nav">

            <NavLink className="menu gryLink" to="/gryffindor">Gryffindor</NavLink>
            <NavLink className="menu slyLink" to="/slytherin">Slytherin</NavLink>
            <NavLink className="menu hufLink" to="/hufflepuff">Hufflepuff</NavLink>
            <NavLink className="menu ravLink" to="/ravenclaw">Ravenclaw</NavLink>
            <NavLink className="menu speLink" to="/spells">Spells</NavLink>
           <div className="harry"> HARRY POTTER</div>
            <NavLink className="menu" to="/">Home</NavLink>

        </div>
    );

}
export default Nav;