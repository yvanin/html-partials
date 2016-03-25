## html-partials

Trivial master-partial templating for HTML files.

Master page should contain hooks for partials, view folder should contain partials themselves with corresponding names, e.g. for a hook `{{> shoppingcart}}` there should be a partial `shoppingcart.html`

Content of a partial is inserted as is (no templating).

### Usage

```javascript
var htmlPartials = require('partials');
htmlPartials.insert('index.master', 'views');
```