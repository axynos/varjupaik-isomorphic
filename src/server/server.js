import app from './app';

// Certificate
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');
//
// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };

app.use((req, res) => {
	res.send('Hello there !');
});

const ports = {
  development: 3000,
  http: 80,
  https: 443
}

// Starting both http & https servers
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

if (process.env.NODE_ENV == 'development') {
	httpServer.listen(3000, () => {
		console.log('DEVELOPMENT: HTTP Server running on port ');
	})
}

httpServer.listen(80, () => {
  console.log('HTTP Server running on port ' + ports.http);
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port ' + ports.https);
});
