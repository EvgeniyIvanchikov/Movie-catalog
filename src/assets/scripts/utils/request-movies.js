import { globalState, API } from '@/assets/scripts';

export const requestMovies = (getParameters) => {
  let defaultErrorMessage = 'Server error. Try requesting the data again';

  const searchURL = new URL(API.ROOT);

  searchURL.searchParams.append('apikey', API.KEY);
  Object.entries(getParameters).forEach(([key, value]) => {
    searchURL.searchParams.append(key, value);
  })

  globalState.isSearchButtonDisabled = true;
  fetch(searchURL.href)
    .then((response) => {
      if (!response.ok) {
        const errorMessage = response.statusText || defaultErrorMessage;
        globalState.searchErrorMessage = errorMessage;
        throw new Error(errorMessage);
      }
      return response.json()
    })
    .then((data) => {
      console.log(data);
      if (data.Response === 'False') {
        const errorMessage = data.Error || defaultErrorMessage;
        globalState.searchErrorMessage = errorMessage;        
        throw new Error(errorMessage);
      } else {
        globalState.isSearchButtonDisabled = false;
        if (data.totalResults){
          globalState.movies.totalResults = data.totalResults;
        }
        if (data.Search){
          globalState.movies.list = data.Search;
        }
      }
    })
    .catch((error) => {
      console.log('error', error);
      globalState.movies.list = [];
      globalState.movies.totalResults = 0;
      globalState.isSearchButtonDisabled = false;
    });

}
