/* eslint-disable eqeqeq */
import React from "react"
import { Card, FormControl, Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { useAnswers } from '../providers/answers'

function FirstPage() {
    const history = useHistory()
    const { answers, setAnswers } = useAnswers()

    function secondPage() {
        if (answers.name == "" || answers.consumedContent == "") {
            return alert("Você deve responder às duas perguntas para ir à próxima página!")
        }
        history.push("/secondPage")
    }

    return (
        <Card border="primary" style={{ width: '50rem', height: '40rem' }}>
            <Card.Body>
                <Card.Title>Pesquisa sobre produtos</Card.Title>
                <Form.Group className="mb-3">
                    <Form.Label>Digite seu nome</Form.Label>
                    <FormControl type="text" placeholder="ex: Fulano da Silva" value={answers.name} onChange={(e) => setAnswers(prevState => ({ ...prevState, name: e.target.value }))} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Que tipo de conteúdo você usa para pesquisar o protudo?</Form.Label>
                    <Form.Control as="textarea" rows={3} value={answers.consumedContent} onChange={(e) => setAnswers(prevState => ({ ...prevState, consumedContent: e.target.value }))} />
                </Form.Group>
                <Button variant="primary" className="mt-3" onClick={(e) => secondPage(e)}>Próxima</Button>
            </Card.Body>
        </Card>
    )
}

export default FirstPage
