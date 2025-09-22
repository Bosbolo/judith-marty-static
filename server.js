const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from the root directory
app.use(express.static(__dirname, {
    // Disable caching for development
    setHeaders: (res, path) => {
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
    }
}));

// Handle root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle routes without .html extension
app.get('/:page', (req, res, next) => {
    const page = req.params.page;
    
    // If the request doesn't have an extension, try adding .html
    if (!path.extname(page)) {
        const htmlPath = path.join(__dirname, page + '.html');
        return res.sendFile(htmlPath, (err) => {
            if (err) {
                next();
            }
        });
    }
    
    next();
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});