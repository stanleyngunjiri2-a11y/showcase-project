function SearchBar({ searchTerm, onSearch }) {

    return (
        <label className="search-box">
            <span> Search Projects</span>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search by project title..."
            />
        </label>
    )
}

export default SearchBar;