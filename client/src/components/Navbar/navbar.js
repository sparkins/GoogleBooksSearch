import React from 'react';
import { Container, Image, Menu, Button, Header } from 'semantic-ui-react';
import './navbar.css';

// Create a sticky navbar that show the title of the game, a dynamic message and the scoreboard
class Navbar extends React.Component {

    render() {
        return (
                    <Container className="navbar">
                        <Header className="header" as='a' active>NYT Google Book Search</Header>
                        <Button className="savedBooks" as='a'>Saved Books</Button>
                        <Button className="searchBooks" as='a'>Search Books</Button>
                    </Container>
        );
    }
}

export default Navbar;