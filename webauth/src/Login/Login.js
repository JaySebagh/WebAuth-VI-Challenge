import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: "user1",
        password: "123"
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = 'http://localhost:4000/api/auth/login';
        axios
            .post(endpoint, this.state)
            .then(res => {
                console.log('LOGIN RESPONSE', res);
            })
            .catch(error => {
                console.error('LOGIN ERROR', error);
            });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">
                        <input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            id="username"
                            name="username"
                            type="text"
                        />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                        <input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            id="password"
                            name="password"
                            type="password"
                        />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Login