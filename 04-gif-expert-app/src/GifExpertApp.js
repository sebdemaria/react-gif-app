import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = (e) => {

    //     const newCategory = 'Stranger Things';

    //     //usamos operador spread ... para traer los elementos
    //     //del array y agregar el nuevo
    //     setCategories( [...categories, newCategory] );

    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}



            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    )
                }
            </ol>

        </div>
    )
}
