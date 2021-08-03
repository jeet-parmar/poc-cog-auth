import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import amplify from 'aws-amplify';

amplify.configure({
        "aws_cognito_region": "us-east-2",
        "aws_user_pools_id": "us-east-2_GuF627kdd",
        "identity_pool_region": "us-east-2",
        "aws_user_pools_web_client_id": "6rddrck63vafpuv133lmnb1o08",
        "oauth": {
            "domain": "login-dev-donor360-com.auth.us-east-2.amazoncognito.com",
            "redirectSignIn": "http://localhost:3000/callback",
            "redirectSignOut": "http://localhost:3000/signout",
            "responseType": "token"
        },
        // "federationTarget": "COGNITO_USER_POOLS"
    }
)

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
