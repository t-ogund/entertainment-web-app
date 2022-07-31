import React, { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import Card from './Card'


function TV() {
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

    const tvData = data.filter(item => item.category === 'TV Series').map((item, index) => {
        return <Card key={index} backgroundImage={ item.thumbnail.regular.large.slice(8) } title={ item.title } year={ item.year } category={ item.category } rating={ item.rating } />
    })

    if (tvData) {
        filteredData = tvData.map((item, index) => {
            if (item.props.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                searchCount += 1
                return <Card key={index} backgroundImage={ item.props.backgroundImage } title={ item.props.title } year={ item.props.year } category={ item.props.category } rating={ item.props.rating } />
            }
        })
    }
    
    return(
        <React.Fragment>
        <div className='search-section'>
                <SearchIcon className='search-icon' />
                <input onChange={handleChange} className='input' placeholder='Search for tv shows' />
            </div>
            {
                searchQuery.length > 0 &&
                <h2>Found { searchCount } results for '{ searchQuery }'</h2>
            }

        <div className='container'>
            { searchQuery.length === 0 ?
                <div>
                <div className='movie-container'>
                        <h2>TV Shows</h2>
                        <div className='movie-images'>
                            {tvData}
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

export default TV