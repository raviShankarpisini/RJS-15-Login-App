// Write your code here

// Write your code here
import './index.css'

const Logout = props => {
  const {onClick} = props
  return (
    <button type="button" className="button" onClick={onClick}>
      Logout
    </button>
  )
}

export default Logout
