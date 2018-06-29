import React from "react";
import ReactDOM from "react-dom";

const WelcomeUser = ({user, onLogOut})=> {
    return (
        <div className="m-2 form-group">
            <p>Hi <strong>{user.username}</strong>! Welcome to our shop!</p>
            <button onClick={onLogOut} className="btn btn-primary center">Log out</button>
        </div>
    );
};

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

          <a className="navbar-brand" href="#">Sample App</a>

          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Contact us</a>
              </li>
          </ul>
      </nav>

  )
};
class LoginPage extends React.Component {

    handleLogIn(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.onLogIn(username, password);
    }

    render() {
        return(
            <form onSubmit={this.handleLogIn.bind(this)} className="m-2">
                <div className="form-group">
                    <label>Username </label><br/>
                    <input type="text" ref="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label><br/>
                    <input type="password" ref="password" className="form-control" placeholder="Enter Password" />
                </div>
                <div className="form-group text-center">
                    <button className="btn btn-primary btn-block" type="submit">Login</button>
                </div>
            </form>
        ) }
}


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }

    logIn(username, password) {
        this.setState({
            user: {
                username,
                password,
            }
        })
    }

    logOut() {
        this.setState({user: null})
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className="container d-flex justify-content-center">
                    <div className="center bg-light rounded border mt-5 p-4">
                        <h3 className="ml-2">Login App Exercise</h3>
                        {
                            (this.state.user) ?
                                <WelcomeUser
                                    user={this.state.user}
                                    onLogOut={this.logOut.bind(this)}
                                />
                                :
                                <LoginPage
                                    onLogIn={this.logIn.bind(this)}
                                />
                        }
                    </div>
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById("index"));
