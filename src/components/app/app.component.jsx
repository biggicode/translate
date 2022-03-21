import React from "react"
import UserCreate from "../user-create"
import { LanguageStore } from "../../contexts/LanguageContext"
import ColorContext from "../../contexts/ColorContext"
import LanguageSelector from "../language-selector"

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App
