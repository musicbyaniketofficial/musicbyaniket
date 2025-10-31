import React from 'react'
import headshot from '../assets/headshot.jpg'
import dil_toda_baki_cover  from '../assets/dil-toda-baaki-hi-main.jpg'
import meri_aankhon_ke_cover from '../assets/meri-aankhon-ke-darvaaze-khul-na-paye.png'

const ARTIST = {
  name: 'Music By Aniket',
  tagline: 'Independent Artist · Producer · Storyteller',
  bio: 'Aniket crafts emotionally resonant songs that balance intimate storytelling with cinematic production. Influenced by indie, R&B and ambient textures.',
  headshot: headshot
}

const PROJECTS = [
  { id:1, title:'Dil toda baki hi main', type:'Single', year:2024, desc:'A real heart break story poured into a rock passion heartbreak ballad', cover: dil_toda_baki_cover, 
  spotify:'https://open.spotify.com/track/6j0rHBaFbW6TvXcT9pOkaE?si=5e9a4a1e22bf4771', youtube:'https://music.apple.com/us/song/dil-toda-baaki-hi-main/1730409709' },
  { id:2, title:'Meri aankhon ke darvaze', type:'BGM ', year:2025, desc:'A Background theme track for a theatre play at jashn-e-rakhta', cover: meri_aankhon_ke_cover,
  spotify:'#', youtube:'#'  }
]

export default function App(){ 
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <header className="relative bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-28 flex items-center gap-8">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">{ARTIST.name}</h1>
            <p className="text-lg opacity-90 mb-4">{ARTIST.tagline}</p>
            <p className="text-gray-300 max-w-prose mb-6">{ARTIST.bio}</p>
            <div className="flex gap-3">
              <a href="https://open.spotify.com/artist/53M7Hui9PzuyC3mX6YNU9D?si=KpFpzTgEQ9O7vxxnQmfYJA" className="px-5 py-3 rounded-full bg-accent text-black font-semibold">Listen on Spotify</a>
              <a href="https://music.apple.com/us/artist/aniket-verma/1730240331" className="px-5 py-3 rounded-full border border-gray-700">Listen on Apple Music</a>
            </div>
          </div>
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden ring-1 ring-white/10">
            <img src={ARTIST.headshot} alt="headshot" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map(p=> (
              <article key={p.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                <div className="md:flex">
                  <img src={p.cover} alt={p.title} className="w-full md:w-56 h-56 object-cover" />
                  <div className="p-5 flex-1">
                    <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                    <div className="text-sm opacity-70 mb-3">{p.type} • {p.year}</div>
                    <p className="mb-4 leading-relaxed text-gray-300">{p.desc}</p>
                    <div className="flex gap-3">
                      <a className="px-3 py-2 rounded-full bg-white text-black font-medium" href={p.spotify}>Spotify</a>
                      <a className="px-3 py-2 rounded-full border" href={p.youtube}>YouTube</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Listen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
              <p className="mb-4">Featured track</p>
              <iframe
				  title="spotify"
				  src="https://open.spotify.com/embed/track/6j0rHBaFbW6TvXcT9pOkaE"
				  width="100%"
				  height="120"
				  frameBorder="0"
				  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				  loading="lazy"
			></iframe>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold mb-3">Find my music</h3>
              <div className="flex flex-wrap gap-3">
                <a className="px-4 py-3 bg-white text-black rounded-full font-medium" href="https://open.spotify.com/artist/53M7Hui9PzuyC3mX6YNU9D?si=jsk5DbpRSN2aO6t7RhREQQ">Spotify</a>
                <a className="px-4 py-3 border rounded-full" href="https://music.apple.com/us/artist/aniket-verma/1730240331">Apple Music</a>
                <a className="px-4 py-3 border rounded-full" href="https://youtube.com/@musicbyaniket">YouTube</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <p className="mb-4">For bookings, press or collaborations — email <a href="mailto:musicbyaniketofficial@gmail.com" className="underline">musicbyaniketofficial@gmail.com</a></p>
            <form name="contact" method="POST" data-netlify="true" className="grid grid-cols-1 md:grid-cols-2 gap-4">
				  <input type="hidden" name="form-name" value="contact" />
				  <input name="name" required className="p-3 rounded-lg bg-gray-800 border border-gray-700" placeholder="Your name" />
				  <input type="email" name="email" required className="p-3 rounded-lg bg-gray-800 border border-gray-700" placeholder="Your email" />
				  <textarea name="message" required className="md:col-span-2 p-3 rounded-lg bg-gray-800 border border-gray-700" rows="5" placeholder="Message"></textarea>
				  <div className="md:col-span-2">
				    <button type="submit" className="px-6 py-3 rounded-full bg-accent text-black font-semibold">Send Message</button>
				  </div>
			</form>
			<form name="contact" netlify hidden>
			  <input type="text" name="name" />
			  <input type="email" name="email" />
			  <textarea name="message"></textarea>
			</form>

          </div>
        </section>
      </main>

      <footer className="pt-8 pb-12 text-sm opacity-70">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>© {new Date().getFullYear()} {ARTIST.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Press</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
