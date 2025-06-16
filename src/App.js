import React from 'react';
import recipies from './recipies.json';
import Recipe from './components/Recipe';


function App() {
    return (
        <div>
            {recipies.map((item, index) => (
                <Recipe recipe={item} key={ index} />
            ))}
        </div>
    )
}

export default App;