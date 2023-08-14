import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokerDetails.css'

const PokerDetails = () => {
    const [loading, setLoading] = useState(true);
    const [alldetails, setAlldetails] = useState({});
    const pokeId = useParams().id;

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setAlldetails(data);
            });
    }, [pokeId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="details_box">
            <div key={alldetails.id}>
                <img className='img_details' src={alldetails.sprites.other.home.front_default} alt="pokemon" />
                <div className="about_poke">
                    <p className="nr_details">#00{alldetails.order}</p>
                    <h1 className="poke_name">{alldetails.name}</h1>
                </div>

                <ul>
                    {alldetails.types.map((type) => (
                        <p className="power" key={type.slot}>
                           Type: {type.type.name}
                        </p>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PokerDetails;
