
import { Link } from "react-router-dom";





function Header() {


    return (

        <div className="Header flex flex-row bg-purple-700 justify-between items-center text-white p-5">

            <div class="text-6xl">

               Thecocktaildb

            </div>

            <div className="homeBtt" class="bg-white m-5 p-2 text-purple-700 text-center font-bold w-24 rounded-md">

                <Link to="/"><div className="homeBtt">Home</div></Link>





            </div>


        </div>

    );

}
export default Header;