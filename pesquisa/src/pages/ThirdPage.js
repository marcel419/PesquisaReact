/* eslint-disable eqeqeq */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'
import { useAnswers } from '../providers/answers'

function ThirdPage() {
    let history = useHistory()
    const { answers, setAnswers } = useAnswers()

    function backToSecondPage() {
        history.push("/secondPage")
    }

    function resultPage() {
        history.push("/resultPage")
    }

    function addOrRemoveSocialNetwork(isChecked, value) {
        if (isChecked) {
            setAnswers(prevState => ({ ...prevState, usedSocialNetworks: [ ...prevState.usedSocialNetworks, value ]}))
        } else {
            for (let i = 0; i < answers.usedSocialNetworks.length; i++) {
                if (answers.usedSocialNetworks[i] == value) {
                    answers.usedSocialNetworks.splice(i, 1)
                }
            }
        }
    }

    function checkCheckBox(value) {
        for (let i = 0; i < answers.usedSocialNetworks.length; i++) {
            if (answers.usedSocialNetworks[i] == value) {
                return true
            }
        }
        return false
    }

    return (
        <Card border="primary" style={{ width: '50rem', height: '40rem' }}>
            <Card.Body>
                <Card.Title>
                    Marque os App que você utiliza:
                </Card.Title>
                <Form>
                    <Form.Check type="checkbox" name="socialNetworks" label="Americanas" value="Americanas" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("Facebook")} />
                    <Form.Check type="checkbox" name="socialNetworks" label="Mercado Livre" value="Mercado Livre" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("Instagram")} />
                    <Form.Check type="checkbox" name="socialNetworks" label="Shopee" value="Shopee" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("LinkedIn")} />
                    <Form.Check type="checkbox" name="socialNetworks" label="OLX" value="OLX" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("WhatsApp")} />
                    <Form.Check type="checkbox" name="socialNetworks" label="Amazon" value="Amazon" onChange={e => addOrRemoveSocialNetwork(e.target.checked, e.target.value)} defaultChecked={checkCheckBox("YouTube")} />
                </Form>
                <Button variant="secondary" className="mr-5" onClick={(e) => backToSecondPage(e)}>Anterior</Button>
                <Button variant="primary" className="ml-5" onClick={(e) => resultPage(e)}>Enviar</Button>
            </Card.Body>
        </Card>
    )
}

export default ThirdPage