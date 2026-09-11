export interface GalleryAlbum {
	album: string
	date: string
	order?: number
	pics: string[]
}

type GalleryAlbumRaw = Omit<GalleryAlbum, 'pics'> & {
	pics: Array<string | { pic?: string; image?: string }>
}

const albumModules = import.meta.glob('../content/gallery/*.json', {
	eager: true,
	import: 'default',
}) as Record<string, GalleryAlbumRaw>

function normalizePics(pics: GalleryAlbumRaw['pics']): string[] {
	return pics
		.map((pic) => {
			if (typeof pic === 'string') return pic
			return pic.pic ?? pic.image ?? ''
		})
		.filter(Boolean)
}

export function getGalleryAlbums(): GalleryAlbum[] {
	return Object.values(albumModules)
		.map((album) => ({
			album: album.album,
			date: album.date,
			order: album.order,
			pics: normalizePics(album.pics),
		}))
		.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}
