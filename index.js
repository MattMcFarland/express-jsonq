var url = require('url');

/**
 * @module express-jsonq
 * @summary Converts request query from JSON text to an Object.
 * @desc
 * <p>If the request query string is legal JSON, it will be parsed as such, otherwise it simply ignores it.</p>
 * <p>The JSON will be expoed in the <code>req</code> object as <code>req.jsonq</code>
 * @see {@link http://expressjs.com/api.html#req Express Docs: Request}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse MDN: JSON.parse()}
 */
exports = module.exports = function (){
    return function jsonquery(req, res, next) {
        var query;

        if (req.jsonq) {
            return next();
        }


        try {
            query = url.parse(req.url).query;

            if (query) {
                console.log(query);
                req.jsonq = JSON.parse(decodeURIComponent(query));
            }
        } catch (e) {
            return next();
        }



        return next();
    };
};
