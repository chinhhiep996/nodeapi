module.exports = {
    createUserValidator: (req, res, next) => {
        req.check('title', 'Trường title không được để  trống.').notEmpty();
        req.check('title', 'Title bao gồm từ 2 đến 120 ký tự.').isLength({
            min: 2,
            max: 120
        });

        req.check('body', 'Body is required!').notEmpty();
        req.check('body', 'Body must be between 4 to 2000 characters!').isLength({
            min: 4,
            max: 2000
        });

        const errors = req.validationErrors();

        if(errors) {
            const firstError = errors.map(error => error.msg)[0];
            return res.json({ error:  firstError});
        }

        next();
    }
}