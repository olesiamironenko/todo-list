import { useEffect, useState } from 'react';
import styles from '../shared/Form.module.css';

function TodosViewForm({
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  queryString,
  setQueryString,
}) {
  const preventRefresh = (e) => {
    e.preventDefault();
  };
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setQueryString(localQueryString);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [localQueryString, setQueryString]);

  return (
    <form onSubmit={preventRefresh}>
      {/* Search section */}
      <div className={styles.form}>
        <label className={styles.label} htmlFor="search">
          Search todos:
        </label>
        <input
          id="search"
          type="text"
          value={localQueryString}
          onChange={(e) => setLocalQueryString(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setLocalQueryString('')}
          disabled={localQueryString.trim() === ''}
        >
          Clear
        </button>
      </div>
      <div>
        {/* Sort by */}
        <label htmlFor="sortField">Sort by</label>
        <select
          id="sortField"
          name="sortField"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </select>

        {/* Direction */}
        <label htmlFor="sortDirection">Direction</label>
        <select
          id="sortDirection"
          name="sortDirection"
          value={sortDirection}
          onChange={(e) => setSortDirection(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </form>
  );
}

export default TodosViewForm;
