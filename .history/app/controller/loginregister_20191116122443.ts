import { Controller } from 'egg';

export default class LoginRegisterController extends Controller {

    public async login() { 
        const { ctx } = this;
        const info = await ctx.service.loginrigister.login();
        this.ctx.body = {
            code: 200,
            data:info
        }
    }

    public async register() {
        const { ctx } = this;
        const info = await ctx.service.loginergister.rigist();
        this.ctx.body = {
            code: 200,
            data: info
        }
    }
}
