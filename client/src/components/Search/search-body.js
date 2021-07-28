import React from "react";
import { Grid, Container } from "semantic-ui-react";

const SearchBody = ()=> {
    return (
        <div>
            <Container>
                <div className='home-header'>
                     <h1>Search</h1>
                </div>
                <div class="ui input focus">
                    <input type="text" placeholder="Search..."/>
                </div>
                
            </Container>
        </div>
    )
}

export default SearchBody;