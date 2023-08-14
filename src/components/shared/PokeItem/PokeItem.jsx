import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './PokeItem.css'


const PokeItem = (props) => {

    return (
        <article className="poke-item">
            <Link to={`/pokerdetails/${props.id}`} className="poke_link">
                <div className="card">
                    <div className="card_img">
                        <img
                            className="poke_img"
                            src={props.sprites.other.home.front_default}
                            alt={props.name}
                        />
                    </div>
                    <div className="content">
                        <p>#{props.number}</p>
                        <h2 className="poke_name">{props.name} </h2>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default PokeItem;
