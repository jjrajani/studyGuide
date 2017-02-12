'use strict'


class RegisterController {

  * doRegister(request, resposne) {
      const user = new User()
      user.username = request.input('username')
      user.email = request.input('email')
      user.password = yield Hash.make(request.input('password'))

      yield user.save()

      var registerMessage = {
        success: 'Registration Successful! Now go ahead and login'
      }

      yield response.json(registerMessage)
  }

}

module.exports = RegisterController
