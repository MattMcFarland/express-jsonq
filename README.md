MIT Licensed.
```bash
npm install express-jsonq
```
### What is express-jsonq?

express-jsonq is a light-weight Expressjs Middleware plugin that parses the query string as JSON and exposes it to your router.

Suppose you want have a WebAPI handles the query param string as JSON, how to achieve this?

Let's look at what a route might look like:

```
/api/users/?{id: 001}
```

Without express-jsonq, you have to do some additional logic to get that id.  You might try this:

```javascript

var router = require('express').Router(),
    url = require('url');

router.get('/users', function (req, res) {
   var query, queryJSON;
   // since ANYTHING could be sent, let's catch an exception if it occurs.
    try {
        query = url.parse(req.url).query;
        // only bother if there is a query string at all
        if (query) {            
           queryJSON = JSON.parse(decodeURIComponent(query));
           res.send('your id is', queryJSON.id);
        }
        // We've failed to parse the query string!
        // Instead of kicking an exception, just call next, so the next middleware can handle it.
        // the next middleware could try to look for a different query, or something..
    } catch (e) {
        next();
    }
});
```

But what if you want to that in a lot of different places?  Instead of duplicating code you can use a middleware.

### Installation

```bash
npm install express-jsonq
```

### Basic Usage

```javascript
var express = require('express'),
    jsonq  = require('jsonq'), 
    app = express();
 
app.use(jsonq());

app.get('/', function (req, res) {
    // Your json query params:
    console.log(req.jsonq);
});
 
app.listen(3000);
```

### Explicit Usage

```javascript

router.get('/users', jsonq(), function (req, res, next) {
   // do stuff
});
```