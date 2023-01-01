import jwt from 'jsonwebtoken'

const secret = 'test';
const auth = async (req, res, next) => {
    try {
        console.log('calling split');
        const token = req.headers.authoriztion.split(" ")[1];

        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.sub;
        }

        next();
    } catch(error) {
        console.log(error);
    }
}

export default auth;