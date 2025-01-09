import React, { useState, useEffect } from "react";

//album is the folder inside ../assets/fotos
import foto1 from "../assets/FOTOS/ABRIL 27 2024- BARRIO ALFONSO LOPEZ/1.jpeg";
import foto2 from "../assets/FOTOS/ABRIL 27 2024- BARRIO ALFONSO LOPEZ/2.jpeg";
import foto3 from "../assets/FOTOS/ABRIL 27 2024- BARRIO ALFONSO LOPEZ/3.jpeg";
import foto4 from "../assets/FOTOS/ABRIL 27 2024- BARRIO ALFONSO LOPEZ/4.jpeg";
import foto5 from "../assets/FOTOS/ABRIL 27 2024- BARRIO ALFONSO LOPEZ/5.jpeg";
import foto6 from "../assets/FOTOS/ABRIL 27 2024- BARRIO ALFONSO LOPEZ/6.jpeg";

import foto7 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/1.jpeg";
import foto8 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/2.jpeg";
import foto9 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/3.jpeg";
import foto10 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/4.jpeg";
import foto11 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/5.jpeg";
import foto12 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/6.jpeg";
import foto13 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/7.jpeg";
import foto14 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/8.jpeg";
import foto15 from "../assets/FOTOS/ALIMENTOS COMUNITARIOS EN LA COMUNA 2/9.jpeg";

import foto16 from "../assets/FOTOS/JUNIO 4 2024 - INSTITUCION EDUCATIVA RAFAEL J MEJIA/1.jpeg";
import foto17 from "../assets/FOTOS/JUNIO 4 2024 - INSTITUCION EDUCATIVA RAFAEL J MEJIA/2.jpeg";
import foto18 from "../assets/FOTOS/JUNIO 4 2024 - INSTITUCION EDUCATIVA RAFAEL J MEJIA/3.jpeg";
import foto19 from "../assets/FOTOS/JUNIO 4 2024 - INSTITUCION EDUCATIVA RAFAEL J MEJIA/4.jpeg";

import foto20 from "../assets/FOTOS/JUNIO 2024-MACARENA META/1.jpeg";
import foto21 from "../assets/FOTOS/JUNIO 2024-MACARENA META/2.jpeg";
import foto22 from "../assets/FOTOS/JUNIO 2024-MACARENA META/3.jpeg";
import foto23 from "../assets/FOTOS/JUNIO 2024-MACARENA META/4.jpeg";

import foto24 from "../assets/FOTOS/MARZO 2024-INSTITUCION EDUCATIVA RAFAEL J MEJIA/1.jpeg";
import foto25 from "../assets/FOTOS/MARZO 2024-INSTITUCION EDUCATIVA RAFAEL J MEJIA/2.jpeg";
import foto26 from "../assets/FOTOS/MARZO 2024-INSTITUCION EDUCATIVA RAFAEL J MEJIA/3.jpeg";
import foto27 from "../assets/FOTOS/MARZO 2024-INSTITUCION EDUCATIVA RAFAEL J MEJIA/4.jpeg";
import foto28 from "../assets/FOTOS/MARZO 2024-INSTITUCION EDUCATIVA RAFAEL J MEJIA/5.jpeg";
import foto29 from "../assets/FOTOS/MARZO 2024-INSTITUCION EDUCATIVA RAFAEL J MEJIA/6.jpeg";
import foto30 from "../assets/FOTOS/MARZO 2024-INSTITUCION EDUCATIVA RAFAEL J MEJIA/7.jpeg";

import foto31 from "../assets/FOTOS/NOVIEMBRE 2023-HOGAR SAN JOSE DE LA MONTANA/1.jpeg";
import foto32 from "../assets/FOTOS/NOVIEMBRE 2023-HOGAR SAN JOSE DE LA MONTANA/2.jpeg";
import foto33 from "../assets/FOTOS/NOVIEMBRE 2023-HOGAR SAN JOSE DE LA MONTANA/3.jpeg";

import foto34 from "../assets/FOTOS/OCTUBRE 5 2023-ROBLEDO LAS MARGARITAS/1.jpeg";
import foto35 from "../assets/FOTOS/OCTUBRE 5 2023-ROBLEDO LAS MARGARITAS/2.jpeg";
import foto36 from "../assets/FOTOS/OCTUBRE 5 2023-ROBLEDO LAS MARGARITAS/3.jpeg";
import foto37 from "../assets/FOTOS/OCTUBRE 5 2023-ROBLEDO LAS MARGARITAS/4.jpeg";
import foto38 from "../assets/FOTOS/OCTUBRE 5 2023-ROBLEDO LAS MARGARITAS/5.jpeg";
import foto39 from "../assets/FOTOS/OCTUBRE 5 2023-ROBLEDO LAS MARGARITAS/6.jpeg";

import foto40 from "../assets/FOTOS/OCTUBRE 27 2023 - NIQUITAO COMUNA 10/1.jpeg";
import foto41 from "../assets/FOTOS/OCTUBRE 27 2023 - NIQUITAO COMUNA 10/2.jpeg";
import foto42 from "../assets/FOTOS/OCTUBRE 27 2023 - NIQUITAO COMUNA 10/3.jpeg";
import foto43 from "../assets/FOTOS/OCTUBRE 27 2023 - NIQUITAO COMUNA 10/4.jpeg";
import foto44 from "../assets/FOTOS/OCTUBRE 27 2023 - NIQUITAO COMUNA 10/5.jpeg";
import foto45 from "../assets/FOTOS/OCTUBRE 27 2023 - NIQUITAO COMUNA 10/6.jpeg";
import foto46 from "../assets/FOTOS/OCTUBRE 27 2023 - NIQUITAO COMUNA 10/7.jpeg";

import foto47 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/1.jpeg";
import foto48 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/2.jpeg";
import foto49 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/3.jpeg";
import foto50 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/4.jpeg";
import foto51 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/5.jpeg";
import foto52 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/6.jpeg";
import foto53 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/7.jpeg";
import foto54 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/8.jpeg";
import foto55 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/9.jpeg";
import foto56 from "../assets/FOTOS/SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO/10.jpeg";

import foto57 from "../assets/FOTOS/SEPTIEMBRE 26 2023-COMUNA 7 ROBLEDO EL DIAMANTE/1.jpeg";
import foto58 from "../assets/FOTOS/SEPTIEMBRE 26 2023-COMUNA 7 ROBLEDO EL DIAMANTE/2.jpeg";
import foto59 from "../assets/FOTOS/SEPTIEMBRE 26 2023-COMUNA 7 ROBLEDO EL DIAMANTE/3.jpeg";
import foto60 from "../assets/FOTOS/SEPTIEMBRE 26 2023-COMUNA 7 ROBLEDO EL DIAMANTE/4.jpeg";
import foto61 from "../assets/FOTOS/SEPTIEMBRE 26 2023-COMUNA 7 ROBLEDO EL DIAMANTE/5.jpeg";
import foto62 from "../assets/FOTOS/SEPTIEMBRE 26 2023-COMUNA 7 ROBLEDO EL DIAMANTE/6.jpeg";
import foto63 from "../assets/FOTOS/SEPTIEMBRE 26 2023-COMUNA 7 ROBLEDO EL DIAMANTE/7.jpeg";

const fotos = [
  { album: 'ABRIL 27 2024- BARRIO ALFONSO LOPEZ', total: 6, pics: [foto1, foto2, foto3, foto4, foto5, foto6] },
  { album: 'ALIMENTOS COMUNITARIOS EN LA COMUNA 2', total: 9, pics: [foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15] },
  { album: 'JUNIO 4 2024 - INSTITUCION EDUCATIVA RAFAEL J MEJIA', total: 4, pics: [foto16, foto17, foto18, foto19] },
  { album: 'JUNIO 2024-MACARENA META', total: 4, pics: [foto20, foto21, foto22, foto23] },
  { album: 'MARZO 2024-INSTITUCION EDUCATIVA RAFAEL J MEJIA', total: 7, pics: [foto24, foto25, foto26, foto27, foto28, foto29, foto30] },
  { album: 'NOVIEMBRE 2023-HOGAR SAN JOSE DE LA MONTANA', total: 3, pics: [foto31, foto32, foto33] },
  { album: 'OCTUBRE 5 2023-ROBLEDO LAS MARGARITAS', total: 6, pics: [foto34, foto35, foto36, foto37, foto38, foto39] },
  { album: 'OCTUBRE 27 2023 - NIQUITAO COMUNA 10', total: 7, pics: [foto40, foto41, foto42, foto43, foto44, foto45, foto46] },
  { album: 'SEPTIEMBRE 9 Y 10 DEL 2023- BARRIO PARAISO', total: 10, pics: [foto47, foto48, foto49, foto50, foto51, foto52, foto53, foto54, foto55, foto56] },
  { album: 'SEPTIEMBRE 26 2023-COMUNA 7 ROBLEDO EL DIAMANTE', total: 7, pics: [foto57, foto58, foto59, foto60, foto61, foto62, foto63] }
]

export default function Fotos() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const openModal = (album) => {
    setSelectedAlbum(album);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
  };

  return (
    <>
          <p class="text-center text-5xl text-[#2867A7] p-6 font-bold">
            Galería de fotos
          </p>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {fotos.map((album, index) => (
        <div key={index} className="album-card text-center">
          <h2 className="text-2xl font-bold mb-4">{album.album}</h2>
          <img
            src={album.pics[0].src}
            alt={`Album ${album.album}`}
            className="w-64 h-64 object-cover rounded-lg shadow-md cursor-pointer mx-auto"
            onClick={() => openModal(album)}
          />
        </div>
      ))}
      {selectedAlbum && (
        <Modal album={selectedAlbum} onClose={closeModal} />
      )}
    </div>
    </>
  );
}

function Modal({ album, onClose }) {
  return (
    <div 
      className="modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="modal-content bg-white p-4 rounded-lg space-y-4 text-center max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full">Cerrar</button>
        <h2 className="text-2xl font-bold mb-4">{album.album}</h2>
        <div className="grid grid-cols-3 gap-4">
          {album.pics.map((pic, index) => (
            <img
              key={index}
              src={pic.src}
              alt={`Foto ${index + 1}`}
              className="w-80 h-80 object-cover rounded-lg shadow-md mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
