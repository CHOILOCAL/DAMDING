import React from 'react';

import "../../css/Authentication.css";
import {Link} from 'react-router-dom';

import '../../css/Authentication.css';


import {auth, provider} from '../../Firebase';

// import Header from '../../components/Common/Header/Header';
import '../../css/Auth.css';

// 로그인 스타일 import
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from '../../actions';

// 로그인 Material UI
import { withStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

// 로그인 스타일
const styles = () => ({
    "@global": {
      body: {
        backgroundColor: "#fff"
      }
    },
    paper: {
      marginTop: 100,
      display: "flex",
      padding: 20,
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#f50057"
    },
    form: {
      marginTop: 1
    },
    errorText: {
      color: "#f50057",
      marginBottom: 5,
      textAlign: "center"
    }
  });

class Authentication extends React.Component {

    constructor(props) {
        super(props);

        // console.log('this.props.mode $', this.props.mode); // false

        this.state = {
            username: '',
            password: '',
            user: null, // 처음 로그인시에는 로그인되어있지 않은 상태
            mode: '',
        };

        // console.log('this.props.username', this.props.username);
        // console.log('this.props.password', this.props.password);
        // console.log('this.props.user', this.props.user);
        // console.log('this.props.mode', this.props.mode); // false
    }

    componentDidMount() {
        // 재로그인 없이
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
                console.log('Authentication componentDidMount() auth.onAuth user :', user); // -> redirect
            }
        });
    }

    // 로그아웃
    logout(e) {
        // Google Logout
        auth
            .signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    // google 로그인
    googleLogin = (e) => {

        // Google API
        auth
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({user});
            });

            // console.log("auth ::: ", auth);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        // this.setState({     [e.target.name]: e.target.value });
    }

    // email 로그인
    state = { email: "", password: "" };

    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value });
      };
    
      handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value });
      };
    
      handleSubmit = () => {
        const { dispatch } = this.props;
        const { email, password } = this.state;
    
        dispatch(loginUser(email, password));
      };
    
    render() {

        const { classes, loginError, isAuthenticated } = this.props;

        if (isAuthenticated) {
            console.log('로그인 상태입니다');
            return <Redirect to="/main" />; // login시 main페이지로 리다이렉트
        } else {
            return (
                <Container component="main" maxWidth="xs">
                <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
              로그인
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            />
{loginError && (
              <Typography component="p" className={classes.errorText}>
                이메일 혹은 비밀번호를 확인해주세요.
              </Typography>
            )}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              로그인
            </Button>

            {/* 로 로그인 */}
            {/* <div className="google-loginbutton"> */}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color=""
              className={classes.submit}
              onClick={this.googleLogin}
            >
              구글 로그인
            </Button>
            {/* </div> */}

            {/* 회원가입 안내 */}
            <div className="damding-signupbutton"><Link to="/signup">회원가입하러가기</Link>
            </div>

                </Paper>
                </Container>
            )
        }
    }
}

    

// Login
function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }

// default setting
Authentication.defaultProps = {
  mode: true,
  onLogin: (id, pw) => {
    console.log("login function not defined");
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Authentication));