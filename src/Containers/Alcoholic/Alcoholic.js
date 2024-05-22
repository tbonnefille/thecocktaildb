
import { useState, useEffect } from "react";

function Alcoholic() {


    const [alcoholic, setAlcoholic] = useState([])

    useEffect(() => {
        const fetchAlcoholic = async () => {
            const response = await fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
            );
            const responseApi = await response.json();
            setAlcoholic(responseApi);
        };

        fetchAlcoholic();
    }, []);

    console.log("alcoholic", alcoholic.drinks)


    return (

        <div className="Alcoholic">

            <h1 className="text-6xl text-purple-700 font-bolder text-center m-10">Alcoholic drinks</h1>

            <div className="flex flex-wrap m-20 justify-around">

                {!alcoholic.drinks ? (
                    <div>rien</div>
                ) : (
                    alcoholic.drinks.map((drink, i) => {
                        return <div key={i} className=" flex flex-col items-center w-64 h-64 p-2 m-1 text-white bg-purple-700 rounded-xl">
                         <div className="p-1 overflow-visible">  {drink.strDrink}</div> 
                         <div> <img src= {drink.strDrinkThumb} alt="drink" className="p-1 h-5/6" />   </div>
                            </div>;

                    })
                )}


            </div>

        </div>

    );

}
export default Alcoholic;