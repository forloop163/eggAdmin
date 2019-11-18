const Controller = require('egg').Controller;

class AuthController extends Controller {
    
  /**
   * route: /login
   * mothed: post
   * 首页
   */  
  async login() {
    this.ctx.body = 'Hello Janden';
  }
}

module.exports = AuthController;