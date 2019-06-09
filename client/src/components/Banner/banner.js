import React from 'react';
import { Container, Button } from 'semantic-ui-react'
import './banner.css';

// Create a banner to display the object of the game
class Banner extends React.Component {

    render() {

        return (
            <Container className="banner">
                <div className="bannerText">
                    <h1 className='bannerHeader'> Google Book Search </h1>
                    <h3 className="intro">Search for Books and Save Books of Interest</h3>
                    <Button positive className="searchBtn">Search Books</Button>
                    <Button className="savedBtn">Saved Books</Button>
                </div>
         
            </Container>
        )
    }
}

export default Banner