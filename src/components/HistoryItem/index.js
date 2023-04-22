import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  render() {
    const {eachItem, deleteRow} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

    const deleteItem = () => {
      deleteRow(id)
    }

    return (
      <li className="items">
        <p className="time">{timeAccessed}</p>
        <img className="logoImg" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainurl">{domainUrl}</p>
        <button
          className="btn"
          type="button"
          data-testid="delete"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}
export default HistoryItem
