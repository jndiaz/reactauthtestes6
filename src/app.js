import AppRouter from 'src/router';
import LoginActions from 'src/actions/login-action';

var appRouter = new AppRouter();

var token = localStorage.getItem('token');
if (token){
  LoginActions.loginUser(token);
}

appRouter.run(document.getElementById('app'));
