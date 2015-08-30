MIT Licensed.


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
