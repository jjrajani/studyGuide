'use strict'

const User = use('App/Model/User'),
      Hash = use('Hash'),
      _ = require('lodash');

class UserController {

  * store (request, response) {
    const user = request.all();
    // const user = request.only('email', 'password');
    user.password = yield Hash.make(user.password);
    const newUser = yield User.create(user);
    return response.json(newUser.toJSON());
  }

  * login (request, response) {
    const input = request.only('email', 'password');
    try {
      const user = yield User.findBy('email', input.email);
      const verify = yield Hash.verify(input.password, user.password);
      if (!verify) { throw new Error('No matchy')};
      user.access_token = yield request.auth.generate(user);
      return response.json(user.toJSON());
    } catch (e) {
      return response.status(401).json({ error: e.message });
    }
  }

  * show (request, response) {
    return response.json(request.authUser);
  }

  * update (request, response) {
    let user = yield User.findBy('id', request.authUser.id)
    const input = request.all();
    user = _.merge(user, input);
    yield user.save()
    return response.json(user.toJSON())
  }

}

module.exports = UserController
