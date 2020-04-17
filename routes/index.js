//  API ROOT ROUTER 
// API 호출 -> ROOT ROUTER -> 담당 ROUTER

import express from 'express';
import account from './account';

const router = express.Router();

// 회원계정 관리 라우터
router.use('/account', account);

// 메모앱 라우터

export default router;