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
        width: '50%',
        marginBottom: 0,
    },
    card: {
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})
class SignUp extends React.Component {
    render() {
        //TODO: change icons
        return (
            <div style={styles.divWrapper}>
                <Card title="CCMN" style={styles.card}>
                    <p>Get your access</p>
                    <Form style={styles.form}>
                    <Input style={styles.input} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
                    <Input style={styles.input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
                    <Input style={styles.input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Company Website URL" />
                    <Input style={styles.input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    </Form>
                    <Button style={styles.buttons} type="primary">Get My Access Link</Button>
                </Card>
            </div>
        )
    }
}

export default SignUp