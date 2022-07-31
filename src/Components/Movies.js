import React, { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import Card from './Card'


function Movies() {
    const [ data, setData ] = useState([]);
    let [ searchQuery, setSearchQuery ] = useState('');
    let [ filteredData ] = useState([]);
    let [ searchCount ] = useState(0)

    function getData() {
        fetch('data.json').then(res => res.json()).then(jsonData => setData(jsonData))
    }
    useEffect(() => {
        getData()
    }, [])
    
    function handleChange(e) {
        setSearchQuery(searchQuery = e.target.value)
    }

    const movieData = data.filter(item => item.category === 'Movie').map((item, index) => {
        return <Card key={index} backgroundImage={ item.thumbnail.regular.small.slice(8) } title={ item.title } year={ item.year } category={ item.category } rating={ item.rating } />
    })

    if (movieData) {
        filteredData = movieData.map(item => {
            if (item.props.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                searchCount += 1
                return <Card backgroundImage={ item.props.backgroundImage } title={ item.props.title } year={ item.props.year } category={ item.props.category } rating={ item.props.rating } />
            }
        })
    }

    return(
        <React.Fragment>
        <div className='search-section'>
                <SearchIcon className='search-icon' />
                <input onChange={handleChange} className='input' placeholder='Search for movies' />
            </div>
            {
                searchQuery.length > 0 &&
                <div className='search-result-text'>
                            <h2>Found { searchCount } results for '{ searchQuery }'</h2>
                        </div>
            }
            
        <div className='container'>
            { searchQuery.length === 0 ?
                <div>
                <div className='movie-container'>
                        <h2>Movies</h2>
                        <div className='movie-images'>
                            {movieData}
                        </div>
                    </div>
                </div>
                :
                <React.Fragment>
                <div className='results'>
                    
                        <div className='search-result-images'>
                            { filteredData }
                        </div>
                </div>
                    
                </React.Fragment>
            }
        </div>
        </React.Fragment>
    )
}

export default Movies