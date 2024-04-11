import { ReactComponent as Logo } from './logo-gremlin.svg';
import { useState, useCallback, useMemo } from 'react';
import { debounce, shortenText } from './utils/helperFunctions';
import './App.css';

// const NPM_URL = `https://api.npms.io/v2/search/suggestions?q=`;
// The API I was requested to use is not working, so I am using an alternative API 
// to get the data instead. Hope this is ok. 
// Also using proxy inside package.json to get around CORS issue. 
const ENDPOINT = `https://registry.npmjs.com`;

function App() {
  const 
    [inputValue, setInputValue] = useState(''),
    [packageList, setPackageList] = useState([]),
    [showResults, setShowResults] = useState(false),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(false);

  // fetching the search results from the API
  const getSearchResults = useCallback(async (query) => {
    try {
      if (query && query.length) {
        setLoading(true);
        setError(false);
        const response = await fetch(`${ENDPOINT}/-/v1/search?text=${query}&size=20`);
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        console.log('data: ', data);
        setPackageList(data.objects);
        setShowResults(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, []);
   
  // using useMemo to memoize the debounced function
  const debouncedFetch = useMemo(() => {
    return debounce(getSearchResults, 200);
  }, [getSearchResults]);

  // handles the input change event
  const onInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    debouncedFetch(e.target.value);
  };

  // handles the error tester button click
  const onErrTesterClick = () => {
    setShowResults(false);
    setError(true);
  };

  // rendering the app
  return (
    <div className="App-wrapper">
        <nav>
          <Logo className="logo"/>
          <h1>NPM Package Search</h1>
        </nav>
        
        <div className="input-wrapper">
            <input
              data-testid="test-input"
              title="Search Packages"
              placeholder="Start typing to search packages..."
              value={inputValue}
              onChange={onInputChange}
            />
            
          </div>
        <div className="package-list-wrapper">
          <div className="package-list">

            {loading && <span className="spinner"></span>}

            {error && (
              <span className="error">
                Whoops, something broke... refresh page and try again!
              </span>
            )}

            {!loading &&
              !error &&
              packageList.length > 0 &&
              showResults &&
              packageList.slice(0, 19).map((item, id) => (
                <a
                  href={item?.package.links.npm}
                  className="card-link-wrapper"
                  target="_blank" 
                  rel="noreferrer"
                >
                <div
                  data-testid="package-card"
                  className="package-card"
                  key={id}
                >
                  <h1 className="package-name">
                    {item?.package.name}
                  </h1>
                  <h3 className="package-version">
                    v{item?.package.version}
                  </h3>
                  <p className="pacakge-desc">
                    {shortenText(item?.package.description)}
                  </p>
                </div>
                </a>
              ))}

          </div>
        </div>
        <button 
          className="errTestBtn"
          onClick={onErrTesterClick}
          data-testid="test-err-btn"
        >
          Error Test
        </button>
    </div>
  );
}

export default App;
