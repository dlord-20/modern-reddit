import React, {useState} from "react";

export default function CategoryFilter() {
    const [ categoryFilter, setCategoryFilter ] = useState('Trending');


    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    }

    return (
        <div>
            <label>
                <select value={categoryFilter} onChange={handleCategoryChange}>
                    <option value="Trending">Trending</option>
                    <option value="New">New</option>
                    <option value="Popular">Popular</option>
                </select>
            </label>
        </div>
    )
}


