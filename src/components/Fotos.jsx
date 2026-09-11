import { useEffect, useState } from 'react'

import foto1 from '../assets/fotos/1-alfonso-lopez/1.jpeg'
import foto2 from '../assets/fotos/1-alfonso-lopez/2.jpeg'
import foto3 from '../assets/fotos/1-alfonso-lopez/3.jpeg'
import foto4 from '../assets/fotos/1-alfonso-lopez/4.jpeg'
import foto5 from '../assets/fotos/1-alfonso-lopez/5.jpeg'
import foto6 from '../assets/fotos/1-alfonso-lopez/6.jpeg'

import foto7 from '../assets/fotos/2-comuna-2/1.jpeg'
import foto8 from '../assets/fotos/2-comuna-2/2.jpeg'
import foto9 from '../assets/fotos/2-comuna-2/3.jpeg'
import foto10 from '../assets/fotos/2-comuna-2/4.jpeg'
import foto11 from '../assets/fotos/2-comuna-2/5.jpeg'
import foto12 from '../assets/fotos/2-comuna-2/6.jpeg'
import foto13 from '../assets/fotos/2-comuna-2/7.jpeg'
import foto14 from '../assets/fotos/2-comuna-2/8.jpeg'
import foto15 from '../assets/fotos/2-comuna-2/9.jpeg'

import foto16 from '../assets/fotos/3-rafael-j-mejia/1.jpeg'
import foto17 from '../assets/fotos/3-rafael-j-mejia/2.jpeg'
import foto18 from '../assets/fotos/3-rafael-j-mejia/3.jpeg'
import foto19 from '../assets/fotos/3-rafael-j-mejia/4.jpeg'

import foto20 from '../assets/fotos/4-macarena-meta/1.jpeg'
import foto21 from '../assets/fotos/4-macarena-meta/2.jpeg'
import foto22 from '../assets/fotos/4-macarena-meta/3.jpeg'
import foto23 from '../assets/fotos/4-macarena-meta/4.jpeg'

import foto24 from '../assets/fotos/5-rafael-j-mejia/1.jpeg'
import foto25 from '../assets/fotos/5-rafael-j-mejia/2.jpeg'
import foto26 from '../assets/fotos/5-rafael-j-mejia/3.jpeg'
import foto27 from '../assets/fotos/5-rafael-j-mejia/4.jpeg'
import foto28 from '../assets/fotos/5-rafael-j-mejia/5.jpeg'
import foto29 from '../assets/fotos/5-rafael-j-mejia/6.jpeg'
import foto30 from '../assets/fotos/5-rafael-j-mejia/7.jpeg'

import foto31 from '../assets/fotos/6-san-jose/1.jpeg'
import foto32 from '../assets/fotos/6-san-jose/2.jpeg'
import foto33 from '../assets/fotos/6-san-jose/3.jpeg'

import foto34 from '../assets/fotos/7-robledo-margaritas/1.jpeg'
import foto35 from '../assets/fotos/7-robledo-margaritas/2.jpeg'
import foto36 from '../assets/fotos/7-robledo-margaritas/3.jpeg'
import foto37 from '../assets/fotos/7-robledo-margaritas/4.jpeg'
import foto38 from '../assets/fotos/7-robledo-margaritas/5.jpeg'
import foto39 from '../assets/fotos/7-robledo-margaritas/6.jpeg'

import foto40 from '../assets/fotos/8-niquitao/1.jpeg'
import foto41 from '../assets/fotos/8-niquitao/2.jpeg'
import foto42 from '../assets/fotos/8-niquitao/3.jpeg'
import foto43 from '../assets/fotos/8-niquitao/4.jpeg'
import foto44 from '../assets/fotos/8-niquitao/5.jpeg'
import foto45 from '../assets/fotos/8-niquitao/6.jpeg'
import foto46 from '../assets/fotos/8-niquitao/7.jpeg'

import foto47 from '../assets/fotos/9-barrio-paraiso/1.jpeg'
import foto48 from '../assets/fotos/9-barrio-paraiso/2.jpeg'
import foto49 from '../assets/fotos/9-barrio-paraiso/3.jpeg'
import foto50 from '../assets/fotos/9-barrio-paraiso/4.jpeg'
import foto51 from '../assets/fotos/9-barrio-paraiso/5.jpeg'
import foto52 from '../assets/fotos/9-barrio-paraiso/6.jpeg'
import foto53 from '../assets/fotos/9-barrio-paraiso/7.jpeg'
import foto54 from '../assets/fotos/9-barrio-paraiso/8.jpeg'
import foto55 from '../assets/fotos/9-barrio-paraiso/9.jpeg'
import foto56 from '../assets/fotos/9-barrio-paraiso/10.jpeg'

import foto57 from '../assets/fotos/10-robledo-diamante/1.jpeg'
import foto58 from '../assets/fotos/10-robledo-diamante/2.jpeg'
import foto59 from '../assets/fotos/10-robledo-diamante/3.jpeg'
import foto60 from '../assets/fotos/10-robledo-diamante/4.jpeg'
import foto61 from '../assets/fotos/10-robledo-diamante/5.jpeg'
import foto62 from '../assets/fotos/10-robledo-diamante/6.jpeg'
import foto63 from '../assets/fotos/10-robledo-diamante/7.jpeg'

const fotos = [
  {
    album: 'Barrio Alfonso López',
    date: '27 abril 2024',
    pics: [foto1, foto2, foto3, foto4, foto5, foto6],
  },
  {
    album: 'Alimentos comunitarios en la Comuna 2',
    date: 'Medellín',
    pics: [foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15],
  },
  {
    album: 'Institución Educativa Rafael J. Mejía',
    date: '4 junio 2024',
    pics: [foto16, foto17, foto18, foto19],
  },
  {
    album: 'Macarena, Meta',
    date: 'Junio 2024',
    pics: [foto20, foto21, foto22, foto23],
  },
  {
    album: 'Institución Educativa Rafael J. Mejía',
    date: 'Marzo 2024',
    pics: [foto24, foto25, foto26, foto27, foto28, foto29, foto30],
  },
  {
    album: 'Hogar San José de la Montaña',
    date: 'Noviembre 2023',
    pics: [foto31, foto32, foto33],
  },
  {
    album: 'Robledo Las Margaritas',
    date: '5 octubre 2023',
    pics: [foto34, foto35, foto36, foto37, foto38, foto39],
  },
  {
    album: 'Niquitao, Comuna 10',
    date: '27 octubre 2023',
    pics: [foto40, foto41, foto42, foto43, foto44, foto45, foto46],
  },
  {
    album: 'Barrio Paraíso',
    date: '9 y 10 septiembre 2023',
    pics: [
      foto47,
      foto48,
      foto49,
      foto50,
      foto51,
      foto52,
      foto53,
      foto54,
      foto55,
      foto56,
    ],
  },
  {
    album: 'Robledo El Diamante',
    date: '26 septiembre 2023',
    pics: [foto57, foto58, foto59, foto60, foto61, foto62, foto63],
  },
]

export default function Fotos() {
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
        <h2 className="font-display text-4xl font-medium text-brand-navy md:text-5xl">
          Lo que tejemos en comunidad
        </h2>
        <p className="mt-4 text-lg text-brand-muted">
          Entregas, aulas y abrazos en barrios de Medellín y en el Meta.
        </p>
      </div>

      <a
        href="https://www.instagram.com/CORTEJIENDOSUENOS/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-12 flex min-h-[220px] overflow-hidden rounded-4xl shadow-card"
      >
        <img
          src={foto17.src}
          alt="Jornada de Cortejiendo Sueños en un aula"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/70"></div>
        <div className="relative z-10 flex w-full flex-col items-start justify-end p-8 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Instagram</p>
          <p className="mt-2 font-display text-3xl md:text-4xl">@cortejiendosuenos</p>
          <p className="mt-2 max-w-lg text-sm text-white/80">
            Mira las entregas más recientes y comparte una sonrisa.
          </p>
          <span className="btn-primary mt-6">Seguir en Instagram</span>
        </div>
      </a>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fotos.map((album) => (
          <button
            key={`${album.album}-${album.date}`}
            type="button"
            className="group overflow-hidden rounded-4xl bg-white text-left shadow-soft transition hover:-translate-y-1"
            onClick={() => openModal(album)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={album.pics[0].src}
                alt={`Álbum ${album.album}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-navy">
                {album.pics.length} fotos
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-heart">
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
              key={index}
              src={pic.src}
              alt={`${album.album}, foto ${index + 1}`}
              className="h-56 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
