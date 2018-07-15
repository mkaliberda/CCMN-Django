import React from 'react'
import 'antd/dist/antd.css'
import input from 'antd/lib/input';
import { Card, Input, Button, Form, Icon } from 'antd'

const styles = ({
    divWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        marginBottom: 10,
    },
    card: {
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttons: {
        marginTop: 10,
        marginBottom: 10
    },
})
class SignUp extends React.Component {
    render() {
        //TODO: change icons
        return (
            <div style={styles.divWrapper}>
                <Card title="CCMN" style={styles.card}>
                    <Form style={styles.form}>
                    <p>Get your access</p>
                    <Input style={styles.input} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
                    <Input style={styles.input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
                    <Input style={styles.input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Company Website URL" />
                    <Input style={styles.input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    <Button style={styles.buttons} type="primary">Get My Access Link</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default SignUp