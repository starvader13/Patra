import bcrypt from 'bcrypt';

const saltRounds = 10;

const encryptPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
}

export default encryptPassword;