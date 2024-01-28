import express, { json } from 'express';
import { json as _json, urlencoded } from 'body-parser';
import { connectionKaro } from './database';

const app = express();

app.use(json());
app.use(_json());
app.use(urlencoded({
    extended: true,
}));

connectionKaro();

app.listen(3000, ()=>{
    console.log('YES I AM Running ohhh yeah');
})
