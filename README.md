MIT Licensed.

### What is express-jsonq?

express-jsonq is a light-weight Expressjs Middleware plugin that parses the query string as JSON and exposes it to your router.

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
