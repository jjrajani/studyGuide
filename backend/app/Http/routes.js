'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('/').render('welcome')
// get all users
Route.get('/users', 'UserController.index')
// create
Route.post('/register', 'UserController.store')
// update a user
Route.post('/user/:id', 'UserController.update').middleware('auth');
// Login User
Route.post('/login', 'UserController.login');
// find a user
Route.get('/user/:id', 'UserController.show')
// delte a user
Route.delete('/user/:id', 'UserController.destroy')



// .prefix('/api/v1')
// .format('json', true)
