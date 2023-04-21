let searchBarStyle = {
    height: '35px',
    width: '250px',
    borderRadius: "5px",
    border: "2px solid black",
    paddingLeft: "15px",
    margin: "30px auto",
    fontFamily: 'Montserrat , sans-serif'
}

function SearchBar() {
    return (
        <input style={searchBarStyle} type="text" placeholder="Search for a user" />
    )
}

export default SearchBar