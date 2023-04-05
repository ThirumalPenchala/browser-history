import './index.css'

const HistoryItems = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handleDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="listItems">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="image" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <div>
        <button
          className="button"
          testId="delete"
          type="button"
          onClick={handleDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
