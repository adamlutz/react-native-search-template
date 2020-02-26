import  { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'minneapolis'
        }
      });
      setErrorMessage('');
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('something went wrong');
    }
  };

  // useEffect

  // useEffect (and useState) can take a second param [] to run the arrow function
  // only when the component is first rendered
  // can also pass array w/ value, and will re-render when value changes
  // main difference btw two is that useEffect allows functional components
  // to have life-cycle methods (like componentDidMount() etc)

  // default search
  useEffect(() => {
    searchApi('pasta')
  }, []);

  return [searchApi, results, errorMessage]
}
