// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, updateSearchInput} = props
  const {suggestion} = eachSuggestion

  const fillSearchBar = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-style">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        onClick={fillSearchBar}
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
