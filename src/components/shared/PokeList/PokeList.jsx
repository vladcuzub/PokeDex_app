import { useContext } from "react";
import './PokeList.css'
import PokeItem from "../PokeItem/PokeItem";
import { PokeContext } from "../../context/PokeContext";

const PokeList = () => {
 const pokeFromContext = useContext(PokeContext);
 

    return (
        <div className="box_list">
            <section className="poke_list">
                {pokeFromContext.map((poke) => (
                    <PokeItem
                        key={poke.id}
                        id={poke.id}
                        name={poke.name}
                        sprites={poke.sprites}
                        number={poke.order}
                    ></PokeItem>
                ))}
            </section>
        </div>
    );
};
export default PokeList;
