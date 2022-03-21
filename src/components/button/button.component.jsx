import React from "react"
import LanguageContext from "../../contexts/LanguageContext"

//How to access data with consumers
class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen"
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button
