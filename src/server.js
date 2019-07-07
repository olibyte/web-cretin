import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
    },
    'learn-node': {
        upvotes: 0,
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
    },
}

const PORT = 8000;

const app = express();

app.use(bodyParser.json());         //parses the JSON object included along with the post request, 
                                    //adding a body property to the request parameter of whatever the matching route is.
app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes++;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));