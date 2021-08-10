const router = require('express').Router();
const authControllers = require ('../controllers/auth.controllers');
const userControllers =  require ('../controllers/user.controllers');

//authentification
router.post("/register", authControllers.signUp);
router.post('/login', authControllers.signIn);
router.get('/logout', authControllers.logout);
//user database
router.get('/',userControllers.getAllUsers);
router.get('/:id', userControllers.userInfo);

router.put('/:id',userControllers.updateUser);

router.delete('/:id', userControllers.deleteUser);

router.patch('/follow/:id', userControllers.follow);
router.patch('/unfollow/:id', userControllers.unfollow);



module.exports = router;

