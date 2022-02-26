import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {

    render() {

        return (
            <div className="course__sidebar-search mb-50">
                <form action="#">
                    <input type="text" placeholder="Search for courses..."/>
                    <button type="submit">
                        <i><FontAwesomeIcon icon={['fas', 'search']} /></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;