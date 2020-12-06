import React, {useState,useEffect} from "react";
import pattern from "./images/bg-pattern-card.svg";
import './css/normalize.css';
import './css/estilos.css';

const Template = () => {

    const [state,setState] = useState({});
    
    useEffect(()=>{
        const getData = async()=>{
            const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${getInt()}`) 
            const data = await info.json();
    
            const pokemon = {
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                imgJuego: data.sprites.front_default,
                imgCvg: data.sprites.other.dream_world.front_default,
                nombre: data.name,
                experiencia: data.base_experience,
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                especial: data.stats[3].base_stat,
              };
            setState(pokemon);
        }
        getData();
    },[])

    const getInt = ()=>{
        const min = 1;
        const max = 151;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return(
        <main className="flex">
        <article className="card">
            <img src={pattern} alt="" className="card-header" />
            <div className="card-body">
                <img src={state.imgJuego} alt="" className="card-body-img" />
                <h1 className="card-body-title">
                    {state.nombre} 
                    <span> Hp{state.hp}</span>
                </h1>
                <p className="card-body-text">{state.experiencia}Exp</p>
            </div>
            <div className="card-footer">
                <div className="card-footer-social">
                    <h3>{state.ataque}K</h3>
                    <p>Ataque</p>
                </div>
                <div className="card-footer-social">
                    <h3>{state.especial}K</h3>
                    <p>Ataque especial</p>
                </div>
                <div className="card-footer-social">
                    <h3>{state.defensa}K</h3>
                    <p>Defensa</p>
                </div>
            </div>
        </article>
    </main>
    )
}
export default Template;
