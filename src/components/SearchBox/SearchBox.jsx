const SearchBox = ({ filter, onFilter }) => {
  return (
    <label htmlFor="search">
      Find contacts by name
      <input
        id="search"
        type="text"
        name="search"
        value={filter}
        onChange={(event) => onFilter(event.target.value)}
      />
    </label>
  );
};

export default SearchBox;
