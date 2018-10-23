import React from 'react';

const Card = ({ name, email, id }) => {

    return (
        <div className='tc bg-light-blue dib br2 pa2 ma2 grow bw2 shadow-5'>
            <img alt='kitties' src={`https://robohash.org/set_set4/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;