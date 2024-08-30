import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handelSubmit = event => {
    event.preventDefault();

    const searchValue = event.currentTarget.search.value.trim();

    if (searchValue === '') {
      toast.error('Необхідно вести текст для пошуку зображення');
    } else {
      onSearch(searchValue);
    }
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies" 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;