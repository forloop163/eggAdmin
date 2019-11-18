const Controller = require('egg').Controller;

class UserController extends Controller {
    
  /**
   * route: /userinfo
   * mothed: get
   * 首页
   */  
  async userinfo() {
    this.ctx.body = 'userinfo';
  }
}

module.exports = UserController;