import React from "react"
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  myInput = React.createRef()

  goToStore = event => {
    event.preventDefault()
    const storeName = this.myInput.current.value
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          require
          placeholder="Store Name"
          defaultValue={getFunName()}
        ></input>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker
