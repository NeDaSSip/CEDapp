import React, { Component } from 'react';
import { onLogIn } from '../App.js';

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback"
const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


class Login extends Component {

  render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<div className="login-panel panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">Please Sign In</h3>
							</div>
							<div className="panel-body">000
								<form>
									<fieldset>
										{/* <!-- Change this to a button or input when using this as a form --> */}
										<a href={KAKAO_AUTH_URI} className="btn btn-lg btn-success btn-block" onClick={(onLogIn)}>카카오 로그인</a>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;