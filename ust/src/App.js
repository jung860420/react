import React, { Component } from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import './App.css';

class LoginId extends Component {
  render() {
    return (
      <div className="App-login-block">
        <div><input type="text" name="id" placeholder={this.id} value=""/></div>
        <div><input type="text" name="pw" placeholder={this.pw} value=""/></div>
        <div data-anchor="LoginId">{this.button}</div>
      </div>
    );
  }
}

class LoginPhone extends Component {
  render() {
    return (
      <div className="App-login-block">
        <div><input type="text" name="id" placeholder={this.phone} value=""/></div>
        <div data-anchor="LoginPhone">{this.button}</div>
      </div>
    );
  }
}

class App extends Component {

  state = {
    hidden: 0,
    languege: {
      login: ['ID 로그인', '휴대폰 로그인', '아이디(학번 또는 교번)', '비밀번호', '휴대폰번호'],
      loginButton: ['로그인' , '휴대폰 로그인 인증']

    }
  }

  LoginHiddenPhone = () => {

    this.setState(() => ({ hidden: 0 }));
  }

  LoginHiddenId = () => {

    this.setState(() => ({ hidden: 1 }));
  }

  render() {
    return (
      <div className="App">

        <Header/>

        <main className="App-intro">

          <div className="App-languege">
            <div data-anchor="button">KOREAN</div>
            <div data-anchor="button">ENGLISH</div>

          </div>

          <div className="App-login">
            <div data-anchor="button">
              <span onClick={this.LoginHiddenPhone}>{this.state.languege.login[0]}</span>
            </div>
            <div data-anchor="button">
              <span onClick={this.LoginHiddenId}>{this.state.languege.login[1]}</span>
            </div>

            {this.state.hidden === 0 ? 
              <LoginId 
                id={ this.state.languege.login[2] } 
                pw={ this.state.languege.login[3] }
                button={ this.state.languege.loginButton[0] }
              /> : 
              <LoginPhone 
                phone={ this.state.languege.login[4] }
                button={ this.state.languege.loginButton[1] }
              />
            }

          </div>

          <div className="App-button">
            <div data-anchor="FindId">아이디 찾기</div>
            <div data-anchor="FindPw">비밀번호 찾기</div>

          </div>

        </main>

        <Footer/>

      </div>
    );
  }
}

export default App;
