const Controller = require('egg').Controller;

class HomeController extends Controller {
    
  /**
   * route: /
   * 首页
   */  
  async index() {
    this.ctx.body = 'Hello Janden';
  }
}

module.exports = HomeController;