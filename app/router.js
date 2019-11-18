module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.resources('users', '/users', controller.users);
    router.get('/login', controller.auth.login.login)
};