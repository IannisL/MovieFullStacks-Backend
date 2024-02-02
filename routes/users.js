import { Router } from "express";

const router = new Router();

// POST SIGN IN
router.post('/signin', async(req, res) => {
// Check if user exist
// check if password is a match
// send thr db user
const user = {_id: '1', email: 'alex@gmail.com', username: 'alex123'};
res.json(user);
});
// POST SIGN UP
router.post('/signup', async(req, res) => {
    // check email is not in db
    // create a new user in db
    // send the new user
    const user = {_id: '1', email: 'alex@gmail.com', username: 'alex123'};
res.json(user);
});


export default router;