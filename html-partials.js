var fs = require('fs');

var HtmlPartials = function() {
    this.insert = function(masterPage, viewFolder) {
        var masterContent = fs.readFileSync(masterPage, 'utf8');

        var hooks = masterContent.match(/\{\{> \w+\}\}/g);
        if (hooks) {
            if (viewFolder[viewFolder.length - 1] === '/') {
                viewFolder = viewFolder.substr(0, viewFolder.length - 1);
            }

            for (var i = 0; i < hooks.length; i++) {
                var hook = hooks[i].substr(4, hooks[i].length - 6);
                console.log(`Found hook ${hook}, looking for partial...`);

                try {
                    var viewContent = fs.readFileSync(`${viewFolder}/${hook}.html`, 'utf8');
                    console.log('HTML partial found');

                    masterContent = masterContent.replace(hooks[i], viewContent);
                } catch (e) {
                    console.log('No partial found');
                }
            }
        }

        var target = masterPage.replace('.master', '.html');
        fs.writeFileSync(target, masterContent, 'utf8');

        console.log(`${target} created.`);
    };
};

module.exports = new HtmlPartials();