// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchValue: ''}

  updateSearchInput = value => {
    this.setState({searchValue: value})
  }

  filteredSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue} = this.state
    const {suggestionsList} = this.props
    {
      const searchedInput = suggestionsList.filter(eachItem =>
        eachItem.suggestion.toLowerCase().includes(searchValue.toLowerCase()),
      )
      return (
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
            alt="google logo"
          />
          <div className="search-container">
            <div className="searchbar-alignment">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="search google"
                value={searchValue}
                className="searchbar"
                onChange={this.filteredSearchValue}
              />
            </div>

            <ul className="list-padding">
              {searchedInput.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  eachSuggestion={eachItem}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default GoogleSuggestions
