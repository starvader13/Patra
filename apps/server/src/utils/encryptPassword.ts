import bcrypt from 'bcrypt';

const saltRounds = 10;

const encryptPassword = (password: string): string => {
    const salt: string = bcrypt.genSaltSync(saltRounds);
    const encryptedPassword : string= bcrypt.hashSync(password, salt);
    return encryptedPassword;
}

export default encryptPassword;