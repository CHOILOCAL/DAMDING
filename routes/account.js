import express from 'express';
import Account from '../db/account'; // DB account model

const router = express.Router();

// API 담당 accout Router
// 1. 객체 생성
// 2. save() 값 저장

/* 회원가입 */
/* ACCOUNT SIGNUP : POST /api/account/signup
   BODY SAMPLE: { "usename: "test", "password" : "test" }
   ERROR CODES:
        1. BAD USERNAME
        2. BAD PASSWORD
        3. USERNAME EXISTS
*/
router.post('/signup', (req, res) => {

    // username validation check
    let usernameRegex = /^[a-z0-9]+$/;

    if (!usernameRegex.test(req.body.username)) {
        return res
            .status(400)
            .json({error: "BAD USERNAME", code: 1});
    }

    // password length check
    if (req.body.password.length < 4 || typeof req.body.password !== "string") {
        return res
            .status(400)
            .json({error: "BAD PASSWORD", code: 2});
    }

    // user existance check
    Account.findOne({
        username: req.body.username
    }, (err, exists) => {
        if (err) {
            console.log("user existance check error : ", err);
            throw err;
        }
        if (exists) {
            return res
                .status(409)
                .json({error: "username EXISTS !!!!!", code: 3});
        }

        // create account
        let account = new Account(
            {username: req.body.username, password: req.body.password}
        );

        account.password = account.generateHash(account.password);

        // SAVE
        account.save(err => {
            if (err) {
                console.log("SAVE error : ", err);
                throw err;
            }
            return res.json({success: true});
        });
    });
});

/* 로그인 */
/* ACCOUNT SIGNIN: POST /api/account/signin
   BODY SAMPLE: { "username": "test", "password": "test" }
   ERROR CODES:
        1: LOGIN FAILD
*/
router.post('/signin', (req, res) => {

    if (typeof req.body.password !== "string") {
        return res
            .status(401)
            .json({error: "LOGIN FAILED", code: 1});
    }

    // 아이디 찾기
    Account.findOne({
        username: req.body.username
    }, (err, account) => {
        if (err) {
            throw err;
        }
        if (!account) {
            return res
                .status(401)
                .json({error: "LOGIN FAILED", code: 1});
        }
        // alter session
        let session = req.session;
        session.loginInfo = {
            _id: account._id,
            username: account.username
        };

        // return success
        return res.json({success: true});
    });
});

/* 현재 세션 확인 */
/*
    GET CURRENT USER INFO GET /api/account/getInfo
*/
router.get('/getInfo', (req, res) => {

    if (typeof req.session.loginInfo === "undefined") {
        return res
            .status(401)
            .json({error: 1});
    }
    res.json({info: req.success.loginInfo});
});

/* 로그아웃 */
/*
    LOGOUT: POST /api/account/logout
*/
router.post('/logout', (req, res) => {
    req
        .session
        .destroy(err => {
            if (err) {
                console.log("logout err : ", err);
                throw err;
            }
        });
    return res.json({sucess: true});
});

export default router;