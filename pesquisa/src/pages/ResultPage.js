/* eslint-disable eqeqeq */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useAnswers } from '../providers/answers'

function ResultPage() {
    let history = useHistory()
    const { answers, setAnswers } = useAnswers()

    function Page2Question2() {
        if (answers.mostUsedDevice == "Celular/Tablet") {
            return (
                <p>Sistema operacional: {answers.page2Question2}</p>
            )
        } else if (answers.mostUsedDevice == "Computador/Notebook") {
            return (
                <p>Por onde acessa: {answers.page2Question2}</p>
            )
        }
    }

    function newSurvey() {
        setAnswers({
            name: '',
            consumedContent: '',
            mostUsedDevice: '',
            page2Question2: '',
            usedSocialNetworks: []
        })
        history.push("/")
    }

    return (
        <Card border="primary" style={{ width: '50rem', height: '40rem' }}>
            <Card.Body>
                <Card.Title>
                    Pesquisa finalizada! Suas respostas: 
                </Card.Title>
                <br/>
                <p>Nome: {answers.name}</p>
                <p>Conteúdo da pesquisa: {answers.consumedContent}</p>
                <p>Dispositivo mais utilizado: {answers.mostUsedDevice}</p>
                <Page2Question2 />
                <p>App mais utilizados: {answers.usedSocialNetworks.join(", ")}</p> <br /> <br/>
                <Button variant="primary" className="mt-5" onClick={e => newSurvey(e)}>Nova pesquisa</Button>
            </Card.Body>
        </Card>
    )
}

export default ResultPage