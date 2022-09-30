const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

const notes = [];
let nextId = 1;

const router = new Router();


router.get('/notes', async (ctx, next) => {
    ctx.response.body = notes;
		console.log(notes, 'notes1')
});

router.post('/notes', async(ctx, next) => {
	console.log(ctx.request.body, ' body')
    notes.push({...ctx.request.body, id: nextId++});
    ctx.response.status = 204;
		console.log(notes, 'notes1')
});

router.delete('/notes/:id', async(ctx, next) => {
    const noteId = Number(ctx.params.id);
    const index = notes.findIndex(o => o.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
    }
    ctx.response.status = 204;
});

console.log(notes, 'notes2')

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));