import express from 'express';
import Review from '../db/review';
import mongoose from 'mongoose';

const router = express.Router();

// 리뷰 쓰기
/*
    WRITE REVIEW: POST /api/review
    BODY SAMPLE: { contents: "sample" }
    ERROR CODES
        1: NOT LOGGED IN
        2: EMPTY CONTENS
*/
router.post('/', (req, res) => {
    // 로그인 상태 확인
    if (typeof req.session.loginInfo === 'undefined') {
        return res
            .status(403)
            .json({error: "NOT LOGGED IN", code: 1});
    }

    // 리뷰 내용 확인
    if (typeof req.body.contents !== 'string') {
        return res
            .status(400)
            .json({error: "empty contents", code: 2});
    }
    if (req.body.contents === "") {
        return res
            .status(400)
            .json({error: "empty contents", code: 2});
    }

    // 리뷰 작성
    let review = new Review(
        {writer: req.session.loginInfo.username, contents: req.body.contents}
    );

    // SAVE
    review.save(err => {
        if (err) {
            console.log("review create err : ", err);
            throw err;
        }
        return res.json({success: true});
    });
});

// 리뷰 삭제
/*
    DELETE MEMO: DELETE /api/memo/:id
    ERROR CODES
        1: INVALID ID
        2: NOT LOGGED IN
        3: NO RESOURCE
        4: PERMISSION FAILURE
*/
router.delete('/:id', (req, res) => {

    // review validity check
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res
            .status(400)
            .json({error: "Invalid ID", code: 1});
    }

    // 로그인 상태 체크
    if (typeof req.session.loginInfo === 'undefined') {
        return res
            .status(403)
            .json({error: "not loggged in", code: 2});
    }

    // 해당 리뷰 찾고 리뷰 작성자 찾기
    Review.findById(req.params.id, (err, review) => {
        if (err) {
            console.log("review findebyid err : ", err);
            throw err;
        }

        if (!review) {
            return res
                .status(404)
                .json({error: "No resource", code: 3});
        }
        // 작성자와 삭제자가 다를 경우
        if (review.writer !== req.session.loginInfo.username) {
            return res
                .status(403)
                .json({error: "permission failure", code: 4});
        }
        // 삭제하기
        Review.remove({
            _id: req.params.id
        }, err => {
            if (err) {
                console.log("review remove error : ", err);
                throw err;
            }
            res.json({success: true});
        });
    });
});

// 리뷰 삭제
/*  MODIFY REVIEW: PUT /api/review/:id
    BODY SAMPLE: { contents: "sample" }
    ERROR CODES
        1: INVALID ID,
        2: EMPTY CONTENTS
        3: NOT LOGGED IN
        4: NO RESOURCE
        5: PERMISSION FAILURE
*/
router.put('/:id', (req, res) => {

    // review id check
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res
            .status(400)
            .json({error: "INVALID ID", code: 1});
    }

    // review contents check
    if (typeof req.body.contents !== 'string') {
        return res
            .status(400)
            .json({error: "EMPTY CONTENTS(1)", code: 2});
    }

    if (req.body.contents === "") {
        return res
            .status(400)
            .json({error: "EMPTY CONTENTS(2)", code: 2});
    }

    // 로그인 상태 체크
    if (typeof req.session.loginInfo === 'undefined') {
        return res
            .status(403)
            .json({error: "NOT LOGGEND IN", code: 3});
    }

    // 리뷰 찾기
    Review.findById(req.params.id, (err, review) => {
        if (err) {
            console.log("review find error : ", err);
            throw err;
        }

        // 리뷰가 존재하지 않는 경우
        if (!review) {
            return res
                .status(404)
                .json({error: "NO RESOURCE", code: 4});
        }

        // 리뷰가 존재하고 작성자 확인
        if (review.writer != req.session.loginInfo.username) {
            return res
                .status(403)
                .json({error: "PERMISSION FAILURE", code: 5});
        }

        // MODIFY AND SAVE IN DB
        review.contents = req.body.contents;
        review.date.edited = new Date();
        review.is_edited = true;

        review.save((err, review) => {
            if (err) {
                console.log("review update error : ", err);
                throw err;
            }
            return res.json({success: true, review});
        });
    });
});

// 리뷰 리스트 보기
/*
    READ MEMO: GET /api/review
*/
router.get('/', (req, res) => {
    Review
        .find()
        .sort({"_id": -1})
        .limit(6)
        .exec((err, review) => {
            if (err) {
                throw err;
            }
            res.json(review);
        });
});

export default router;