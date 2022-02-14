import React, { useState, useRef } from 'react';
import Loading from '../../../../components/Loading/Loading';
import "./SearchForm.css";

const DELAY = 50;

const SearchForm = function ({ onSearch, isLoading, onEscKeyPress }) {
    const [searchText, setSearchText] = useState("");
    const timeout = useRef();

    const onKeyDown = (e) => {
        if (e.keyCode === 27) {
            onEscKeyPress && onEscKeyPress()
        }
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        timeout.current = setTimeout((() => {
            onSearch(e.target.value);
        }), DELAY)
    }

    const handleFocus = () => {
        if (searchText) {
            onSearch(searchText);
        }
    }

    return (
        <>
            <div className="SearchForm">
                <div className="loading">
                    <Loading visible={isLoading} />
                </div>
                <input 
                    onKeyDown={onKeyDown} 
                    onFocus={handleFocus}
                    onChange={handleChange}
                    placeholder="Search for planets here"
                    type="text"
                    value={searchText}
                />
            </div>
        </>
    )
}

export default SearchForm;