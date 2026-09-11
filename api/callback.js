export default async function handler(req, res) {
	const code = req.query?.code
	if (!code) {
		res.status(400).send('Missing authorization code')
		return
	}

	const clientId = process.env.GITHUB_CLIENT_ID
	const clientSecret = process.env.GITHUB_CLIENT_SECRET
	if (!clientId || !clientSecret) {
		res.status(500).send('Missing GitHub OAuth credentials')
		return
	}

	const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`
	const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			client_id: clientId,
			client_secret: clientSecret,
			code,
			redirect_uri: `${siteUrl}/api/callback`,
		}),
	})

	const data = await tokenResponse.json()
	if (data.error || !data.access_token) {
		res.status(401).send(data.error_description || data.error || 'OAuth failed')
		return
	}

	const token = JSON.stringify(data.access_token)
	const body = `<!doctype html>
<html lang="es">
<body>
<script>
(function () {
	function receiveMessage(event) {
		window.opener.postMessage(
			'authorization:github:success:' + JSON.stringify({
				token: ${token},
				provider: 'github',
			}),
			event.origin
		)
		window.removeEventListener('message', receiveMessage, false)
	}
	window.addEventListener('message', receiveMessage, false)
	window.opener.postMessage('authorizing:github', '*')
})()
</script>
</body>
</html>`

	res.setHeader('Content-Type', 'text/html; charset=utf-8')
	res.status(200).send(body)
}
