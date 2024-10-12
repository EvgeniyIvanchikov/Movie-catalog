import { reactive } from 'vue';

export const globalState = reactive({
  searchInputValue: '',
  isSearchButtonDisabled: false,
  isScrollLocked: false,
  isMenuOpen: false,
  userName: 'Guest',
  listOfMovies: [],
  searchErrorMessage: '',
  validationErrorMessage: '',
  isMobile: false, // window width is less than 992px
  movies:{
    requestName: '',
    totalResults: 0,
    page: 1,
    list: [],
  },
  user: {
    name: 'Guest',
    photo: '',
  }
});

