import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Card, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const styles = {

}

class Login extends React.Component {

    goToSignupPage = () => {
        this.props.push({ pathname: '/sign-up' })
    }

    render() {
        return (
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '15%'}}>
            <Card title="CCMN" style={{ width: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p>Cisco is the worldwide leader in IT and networking. 
            Cisco helps companies of all sizes and people to connect, communicate, and collaborate. 
            Many companies have provided public APIs as a means for others to access their infrastructure. 
            During the realization of this project, you can practice with API and make your own app or program. 
            You must develop solutions that will use real-time intelligence gathered from the UNIT Factory Wi-Fi 
            network to enable people and their devices to interact more effectively through real-time contextual 
            information related to such parameters as locations, availability of users, or mobile device assets.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Input style={{ width: '50%' }} placeholder='login'/>
                <Input style={{ width: '50%' }} placeholder='password'/>
                <Button style={{ marginTop: 10, marginBottom: 10 }} type="primary">Login</Button> 
                Or
                <Button onClick={this.goToSignupPage} style={{ marginTop: 10, marginBottom: 10 }} type="secondary">Get Your Access</Button>
            </div>
            </Card>
          </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    push: path => dispatch(push(path)),
})

export default connect(null, mapDispatchToProps)(Login)