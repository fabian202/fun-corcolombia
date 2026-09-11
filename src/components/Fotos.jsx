import { useEffect, useState } from 'react'

const INSTAGRAM_COVER = '/gallery/3-rafael-j-mejia/2.jpeg'

export default function Fotos({ albums = [] }) {
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  const openModal = (album) => {
    setSelectedAlbum(album)
  }

  const closeModal = () => {
    setSelectedAlbum(null)
  }

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-kicker">Galería</p>
        <h2 className="font-display text-4xl font-medium tracking-tight text-brand-navy md:text-5xl">
          Historias que se tejen
        </h2>
        <p className="mt-4 text-lg text-brand-muted">
          Entregas, aulas y abrazos en barrios de Medellín y en el Meta.
        </p>
      </div>

      <a
        href="https://www.instagram.com/CORTEJIENDOSUENOS/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-12 flex min-h-[220px] overflow-hidden rounded-4xl border border-brand-navy/5 shadow-card"
      >
        <img
          src={INSTAGRAM_COVER}
          alt="Jornada de Cortejiendo Sueños en un aula"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/70"></div>
        <div className="relative z-10 flex w-full flex-col items-start justify-end p-8 text-white md:p-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-gold">Instagram</p>
          <p className="mt-2 font-display text-3xl md:text-4xl">@cortejiendosuenos</p>
          <p className="mt-2 max-w-lg text-sm text-white/80">
            Mira las entregas más recientes y comparte una sonrisa.
          </p>
          <span className="btn-primary mt-6">Seguir en Instagram</span>
        </div>
      </a>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {albums.map((album) => (
          <button
            key={`${album.album}-${album.date}`}
            type="button"
            className="group overflow-hidden rounded-4xl border border-brand-navy/5 bg-white text-left shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            onClick={() => openModal(album)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={album.pics[0]}
                alt={`Álbum ${album.album}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-navy">
                {album.pics.length} fotos
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold tracking-[0.12em] text-brand-heart">
                {album.date}
              </p>
              <h3 className="mt-1 font-display text-2xl text-brand-navy">{album.album}</h3>
            </div>
          </button>
        ))}
      </div>

      {selectedAlbum && <Modal album={selectedAlbum} onClose={closeModal} />}
    </section>
  )
}

function Modal({ album, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-navy/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="album-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-4xl bg-white p-5 shadow-card md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white"
        >
          Cerrar
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-heart">
          {album.date}
        </p>
        <h2 id="album-title" className="mt-2 max-w-3xl font-display text-3xl text-brand-navy">
          {album.album}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {album.pics.map((pic, index) => (
            <img
              key={pic}
              src={pic}
              alt={`${album.album}, foto ${index + 1}`}
              className="h-56 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
