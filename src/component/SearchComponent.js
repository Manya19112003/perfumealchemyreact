import React from 'react';
 
function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>SPECIAL PERFUMES</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Perfumes..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default SearchComponent; 