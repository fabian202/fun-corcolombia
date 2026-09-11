export default function handler(req, res) {
	const clientId = process.env.GITHUB_CLIENT_ID
	if (!clientId) {
		res.status(500).json({ error: 'Missing GITHUB_CLIENT_ID' })
		return
	}

	const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`
	const redirectUri = `${siteUrl}/api/callback`
	const params = new URLSearchParams({
		client_id: clientId,
		redirect_uri: redirectUri,
		scope: 'repo',
	})

	res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params}` })
	res.end()
}
