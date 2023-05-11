const React = require('react')
const Def = require('./layouts/deafult')

function edit ({books}){
    return (
        <Def>
            <h2>Edit Book Page</h2>
            <form action={`/books/${books._id}?_method=PUT`} method='POST'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" id="quantity"/>
                <br />
                <input type="submit" />
            </form>
            
        </Def>
    )
}

module.exports = edit