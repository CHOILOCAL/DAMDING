import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const Account = new Schema({
    userName: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
});

// collection name = account(.model(첫번째 인수))
// account Schema 만들기
// 스키마와 모델은 다름, 스키마는 틀이고 모델은 실제 디비 접근 클래스

// 해쉬 암호(1)
Account.method.generateHash = function(password) {
    return bcrypt.hashSync(password, 8);
};

// 해쉬 암호(2)
Account.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('account', Account);
