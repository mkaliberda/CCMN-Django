import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Card, Input, Button, Form, Icon } from 'antd'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const FormItem = Form.Item

const styles = ({
    divWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%',
    },
    input: {
        width: '50%',
        marginBottom: 0,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttons: {
        marginTop: 10,
        marginBottom: 10
    },
    card: {
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
})

class Login extends React.Component {

    goToSignupPage = () => {
        this.props.push({ pathname: '/sign-up' })
    }

    render() {
        return (
          <div style={styles.divWrapper}>
            <Card title="CCMN" style={styles.card}>
                <p>Cisco is the worldwide leader in IT and networking. 
                Cisco helps companies of all sizes and people to connect, communicate, and collaborate. 
                Many companies have provided public APIs as a means for others to access their infrastructure. 
                During the realization of this project, you can practice with API and make your own app or program. 
                You must develop solutions that will use real-time intelligence gathered from the UNIT Factory Wi-Fi 
                network to enable people and their devices to interact more effectively through real-time contextual 
                information related to such parameters as locations, availability of users, or mobile device assets.</p>
                <Form style={styles.form}>
                    <Input style={styles.input} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />    
                    <Input style={styles.input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    <Button style={styles.buttons} type="primary">Login</Button>
                        Or
                    <Button onClick={this.goToSignupPage} style={styles.buttons} type="secondary">Get Your Access</Button>
                </Form>
            </Card>
          </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    push: path => dispatch(push(path)),
})

export default connect(null, mapDispatchToProps)(Login)