import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';





const DogCardWrapper = styled.div`
    flex-basis: 27%;
    margin: 10px;
    border: 1px solid brown;
    padding: 5px;
    `;

const ButtonStyle = styled.div `
    background: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    width: fit-content;
    cursor:  pointer;
    color: white;        
`

const DogCard = (props) => {

    const {id, name, breed, status, age, gender, size, image, description, favorite_toy, human, username, password, followers, followees, getSelectedDog} = props

    let selected_dog = {id, name, breed, status, age, gender, size, image, description, favorite_toy, human, username, password, followers, followees}

// if being weird take out the div around the image

    return(

        <>

        <ul className="cards">
            <li className="cards__item">
                <div className="card">
                <div className="card__image">
                    <img src={image} alt="dog gif"></img>
                </div>
                <div className="card__content">
                    <div className="card__title">{name} has {selected_dog.followers.length} Followers</div>
                    <p className="card__text">Status: {status} </p>
                    <p className="card__text">Breed: {breed} </p>
                    <p className="card__text">Size: {size} </p>
                    <p className="card__text">Gender: {gender} </p>
                    <p className="card__text"> Fav Toy: {favorite_toy}  </p>
                    <p className="card__text"> Human: {human}  </p>
                    <center><ButtonStyle onClick={() => {
                        getSelectedDog(selected_dog) 
                        props.history.push(`/dogs/${id}`)}}
                        >Visit {name}!
                    </ButtonStyle>{' '}</center>
                </div>
                </div>
            </li>
        </ul>
        
        </>
    )
}


export default DogCard

