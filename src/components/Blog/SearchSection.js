import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {

    render() {

        return (
            <div className="sidebar__widget mb-60">
                <div className="sidebar__widget-content">
                    <div className="sidebar__search p-relative">
                        <form action="#">
                            <input type="text" placeholder="Search for courses..."/>
                            <button type="submit">
                            <i><FontAwesomeIcon icon={['fas', 'search']} /></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;