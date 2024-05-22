
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";






function Home() {

    //browse by category
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            );
            const responseApi = await response.json();
            setCategory(responseApi);
        };

        fetchCategory();
    }, []);

    //console.log("categories",category.drinks)


    //browse by glass type
    const [glass, setGlass] = useState([])

    useEffect(() => {
        const fetchGlass = async () => {
            const response = await fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
            );
            const responseApi = await response.json();
            setGlass(responseApi);
        };

        fetchGlass();
    }, []);

    // console.log("glass", glass.drinks)






    return (

        <div className="Home flex flex-col justify-center items-center">

            <section className="flex flex-col items-center w-2/3 text-center">

                <h1 className="text-5xl text-purple-700 m-10">BIENVENUE</h1>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, </p>

            </section>

            <section className="w-2/3 m-5">

                <h2 className="p-5 text-3xl text-purple-700 text-center">Sélections</h2>

                <div className="flex justify-around">

                    <Link to="Alcoholic" className=" flex justify-center bg-purple-700 h-80 w-1/3 text-white p-2 rounded-xl">
                        <div>
                            <h3 className="text-xl">boissons alcoholisées</h3>
                        </div>
                    </Link>


                    <Link to="NonAlcoholic" className=" flex justify-center bg-purple-700 h-80 w-1/3 text-white p-2 rounded-xl">
                        <div>
                            <h3 className="text-xl">boissons non-alcoholisées</h3>
                        </div>
                    </Link>




                </div>



            </section>


            <section className="m-20 w-2/3">

                <h2 className="text-2xl text-purple-700 text-center m-5" >choix par categorie</h2>

                <div className="flex flex-wrap justify-around items-center">

                    {!category.drinks ? (
                        <div>rien</div>
                    ) : (
                        category.drinks.map((drink, i) => {
                            return <div key={i} className="p-2 m-1 border-solid border-2 border-purple-700 rounded-md">{drink.strCategory}</div>;

                        })
                    )}

                </div>










            </section>

            <section>

















            </section>






















            <section className="m-20 w-2/3">

                <h2 className="text-2xl text-purple-700 text-center m-5" >choix par type de verre</h2>

                <div className="flex flex-wrap justify-around items-center">


                    {!glass.drinks ? (
                        <div>rien</div>
                    ) : (
                        glass.drinks.map((drink, i) => {
                            return <div key={i} className="p-2 m-1 border-solid border-2 border-purple-700 rounded-md">{drink.strGlass}</div>;

                        })
                    )}

                </div>


            </section>























        </div>
    );

}
export default Home;