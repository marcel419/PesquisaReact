import React, { useState } from 'react'

export const AnswersContext = React.createContext({})

export const AnswersProvider = (props) => {
    const [ answers, setAnswers ] = useState({
        name: '',
        consumedContent: '',
        mostUsedDevice: '',
        page2Question2: '',
        usedSocialNetworks: []
    }) 

    return (
        <AnswersContext.Provider value={{ answers, setAnswers }}>
            {props.children}
        </AnswersContext.Provider>
    )
}

export const useAnswers = () => React.useContext(AnswersContext)