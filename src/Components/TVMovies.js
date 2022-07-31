import React, { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import Card from './Card'


function TVMovies() {
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


    const entertainment = data.map((item, index)=> {
        return <Card key={index} backgroundImage={ item.thumbnail.regular.large.slice(8) } title={ item.title } year={ item.year } category={ item.category } rating={ item.rating } />
    })

    const trending = data.map((item, index) => {
        return <Card key={index} backgroundImage={ item.thumbnail.regular.large.slice(8) } title={ item.title } year={ item.year } category={ item.category } rating={ item.rating } />
    })
    
    filteredData = data.map((item, index) => {    
        if (item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            searchCount += 1
            return <Card key={index} backgroundImage={ item.thumbnail.regular.large.slice(8) } title={ item.title } year={ item.year } category={ item.category } rating={ item.rating } />
        }
    })

    return(
        <React.Fragment>
        <div className='search-section'>
                <SearchIcon className='search-icon' />
                <input onChange={handleChange} className='input' placeholder='Search for movies or TV series' />
            </div>
            {
                searchQuery.length > 0 &&
                    <h2>Found { searchCount } results for '{ searchQuery }'</h2>
            }

        <div className='container'>
            { searchQuery.length === 0 ?
                <div>
                <div className='trending-container'>
                        <h2>Trending</h2>
                        <div className='trending-images'>
                            { trending.slice(0, 5) }
                        </div>
                    </div>
                    <div className='recommended-for-you'>
                        <h2>Recommended for you</h2>
                        <div className='card-container'>
                            { entertainment.slice(5) }
                        </div>
                    </div>
                </div>
                :
                <div className='search-results'>
                    { filteredData }
                </div>
            }
        </div>
        </React.Fragment>
    )
}

export default TVMovies