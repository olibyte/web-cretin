import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());         //parses the JSON object included along with the post request, 
                                    //adding a body property to the request parameter of whatever the matching route is.
app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));

app.listen(8000, () => console.log('Listening on port 8000'));