import React from 'react';

class Login extends React.Component {
    state = {
        username: "jay",
        password: "pass"
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    }

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