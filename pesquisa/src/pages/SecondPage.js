/* eslint-disable eqeqeq */
import React from "react"
import { useHistory } from "react-router-dom"
import { Button, Card, Form } from 'react-bootstrap'
import { useAnswers } from '../providers/answers'

function SecondPage() {
    const { answers, setAnswers } = useAnswers()

    let history = useHistory()

    function backToFirstPage() {
        history.push("/")
    }

    function thirdPage() {
        if (answers.mostUsedDevice == "" || answers.page2Question2 =="") {
            return alert("Você deve responder às duas perguntas para ir à próxima página!")
        }

        history.push("/thirdPage")
    }

    function SecondQuestion() {
        if (answers.mostUsedDevice == "Celular/Tablet") {
            return (
                <div style={{ height: '11rem' }}>
                    <Card.Title>
                        Qual o sistema operacional do seu dispositivo?
                    </Card.Title>
                    <Form onChange={(e) => setAnswers(prevState => ({ ...prevState, page2Question2: e.target.value }))}>
                        <Form.Check type="radio" name="os" label="Android" value="Android" defaultChecked={checkRadioButton(2, "Android")} />
                        <Form.Check type="radio" name="os" label="iOS" value="iOS" defaultChecked={checkRadioButton(2, "iOS")} />
                    </Form>
                </div>
            )
        } else if (answers.mostUsedDevice == "Computador/Notebook") {
            return (
                <div style={{ height: '11rem' }}>
                    <Card.Title>
                        Como você costuma acessá-las?
                    </Card.Title>
                    <Form onChange={(e) => setAnswers(prevState => ({ ...prevState, page2Question2: e.target.value }))}>
                        <Form.Check type="radio" name="appOrBrowser" label="Aplicativo Desktop" value="Aplicativo Desktop" defaultChecked={checkRadioButton(2, "Aplicativo Desktop")} />
                        <Form.Check type="radio" name="appOrBrowser" label="Navegador de internet" value="Navegador de internet" defaultChecked={checkRadioButton(2, "Navegador de internet")} />
                    </Form>
                </div>
            )
        }
        return <div style={{ height: '11rem' }} />
    }

    function checkRadioButton(question, value) {
        if (question == 1) return value == answers.mostUsedDevice ? true : false

        if (question == 2) return value == answers.page2Question2 ? true : false
    }

    return (
        <Card border="primary" style={{ width: '50rem', height: '40rem' }}>
            <Card.Body>
                <Card.Title>
                    Qual dispositivo você mais utiliza para fazer pesquisa de produto?
                </Card.Title>
                <Form onChange={(e) => setAnswers(prevState => ({ ...prevState, mostUsedDevice: e.target.value, page2Question2: "" }))}>
                    <Form.Check type="radio" name="device" label="Celular/Tablet" value="Celular/Tablet" defaultChecked={checkRadioButton(1, "Celular/Tablet")} />
                    <Form.Check type="radio" name="device" label="Computador/Notebook" value="Computador/Notebook" defaultChecked={checkRadioButton(1, "Computador/Notebook")} />
                </Form>
                <SecondQuestion />
                <Button variant="secondary" className="mr-5" onClick={(e) => backToFirstPage(e)}>Anterior</Button>
                <Button variant="primary" className="ml-5" onClick={(e) => thirdPage(e)}>Próxima</Button>
            </Card.Body>
        </Card>
    )
}

export default SecondPage