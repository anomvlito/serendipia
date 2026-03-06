'use client';

import { useState } from 'react';
import { menuData } from '@/data/menu';
import Image from 'next/image';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#f2f2f2] text-black text-xs md:text-sm text-center py-2 px-4 font-medium tracking-wide">
        SERENDIPIA PAN PIZZAS. Horario: Martes a Sábado 12:30 a 22:30 hrs. Domingos cerrado.
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black border-b border-white/10 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Serendipia Logo" width={44} height={44} className="rounded-full bg-white p-1 object-contain hover:scale-105 transition-transform" />
          </a>

          <div className="hidden md:flex gap-8 items-center border border-white/10 rounded-md px-6 py-2">
            <a href="#menu" className="font-semibold text-sm hover:text-gray-300 transition-colors text-white uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">menu</span>
              Categorías
            </a>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">location_on</span>
              ¿Dónde quieres pedir?
              <span className="material-symbols-outlined text-sm ml-1">expand_more</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:text-gray-300 transition-colors"><span className="material-symbols-outlined">search</span></button>
            <a href="https://wa.me/56982179010" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 transition-colors"><span className="material-symbols-outlined">login</span></a>
            <a href="https://wa.me/56982179010" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 transition-colors"><span className="material-symbols-outlined">local_mall</span></a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-dark-700 shadow-2xl py-6 px-6 flex flex-col gap-6">
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-white hover:text-gray-300 border-b border-white/10 pb-3 flex items-center justify-between">
              Categorías <span className="material-symbols-outlined">chevron_right</span>
            </a>
            <a href="#ubicacion" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-white hover:text-gray-300 border-b border-white/10 pb-3 flex items-center justify-between">
              Local <span className="material-symbols-outlined">chevron_right</span>
            </a>
            <a
              href="https://wa.me/56982179010"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black font-bold py-4 px-6 rounded text-center text-md uppercase tracking-wider mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hacer un Pedido
            </a>
          </div>
        )}
      </nav>

      {/* Navigation Sub-bar */}
      <div className="hidden md:flex bg-black border-b border-white/5 py-3">
        <div className="container mx-auto px-4 flex gap-6 text-sm font-bold">
           <a href="#" className="text-white">Inicio</a>
           <a href="#menu" className="text-gray-400 hover:text-white transition-colors">Pide</a>
           <a href="#ubicacion" className="text-gray-400 hover:text-white transition-colors">Local</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <Image src="/images/1.jpeg" fill alt="Pizzas Menu" className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center md:justify-start container mx-auto px-6 md:px-12">
          <div className="text-center md:text-left max-w-xl">
             <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">Haz tu pedido</h1>
             <a href="https://wa.me/56982179010" className="inline-block bg-white text-black font-bold py-3.5 px-10 rounded text-lg hover:bg-gray-200 transition-colors">Hacer un pedido</a>
          </div>
        </div>
      </section>

      {/* Bienvenidos Section */}
      <section className="bg-black w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">¡Bienvenidos!</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Hola Familia! Somos SERENDIPIA PAN PIZZAS. Acá encontrarás pizzas elaboradas con masa madre, productos orgánicos y fresca tradición. 
            </p>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Somos un local de barrio, atendemos con retiro en tienda y delivery exprés a través de WhatsApp. ¡Te esperamos!
            </p>
            <a href="#menu" className="inline-block bg-white text-black font-bold py-3 px-10 rounded hover:bg-gray-200 transition-colors">Ver Carta</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-auto">
          <Image src="/images/2.jpeg" fill alt="Local Serendipia" className="object-cover" />
        </div>
      </section>

      {/* Showcase Images Divider */}
      <section className="bg-black pt-16">
        <div className="container mx-auto px-4">
           <div className="w-full h-48 md:h-[400px] relative rounded-xl overflow-hidden">
               <Image src="/images/3.jpeg" fill alt="Detalles Serendipia" className="object-cover" />
           </div>
        </div>
      </section>

      {/* Menu Layout */}
      <section id="menu" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="mb-12">
             <h2 className="text-3xl font-bold text-white mb-2">Pizzas (Salsa Tomate)</h2>
             <p className="text-gray-400 text-sm">Fermentadas a temperatura controlada, con salsa de tomates peritas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {menuData.pizzas.conSalsaDeTomate.map(pizza => (
              <div key={pizza.id} className="flex justify-between items-start gap-4 p-4 hover:bg-[#111111] rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/10 group">
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-gray-200">{pizza.name}</h3>
                  <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{pizza.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                   <span className="font-bold text-white whitespace-nowrap">${pizza.price.toLocaleString('es-CL')}</span>
                   <button className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-sm">add</span>
                   </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
             <h2 className="text-3xl font-bold text-white mb-2">Pizzas (Salsa Blanca)</h2>
             <p className="text-gray-400 text-sm">Nuestra base especial y quesos seleccionados.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {menuData.pizzas.conSalsaBlanca.map(pizza => (
              <div key={pizza.id} className="flex justify-between items-start gap-4 p-4 hover:bg-[#111111] rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/10 group">
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-gray-200">{pizza.name}</h3>
                  <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{pizza.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                   <span className="font-bold text-white whitespace-nowrap">${pizza.price.toLocaleString('es-CL')}</span>
                   <button className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-sm">add</span>
                   </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
             <h2 className="text-3xl font-bold text-white mb-2">Panadería</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
             <div>
                <h4 className="text-white text-md font-bold mb-4 uppercase tracking-widest border-b border-white/20 pb-2">Por Unidad</h4>
                <ul className="space-y-2">
                  {menuData.panaderia.panPorUnidad.map(pan => (
                     <li key={pan.id} className="py-2 flex justify-between group">
                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{pan.name}</span>
                        <span className="font-bold text-white whitespace-nowrap">${pan.price.toLocaleString('es-CL')}</span>
                     </li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="text-white text-md font-bold mb-4 uppercase tracking-widest border-b border-white/20 pb-2">A Granel</h4>
                <ul className="space-y-2">
                  {menuData.panaderia.panAGranel.map(pan => (
                     <li key={pan.id} className="py-2 flex justify-between group">
                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{pan.name} <span className="text-xs text-gray-500 font-normal ml-1">(x {pan.unit})</span></span>
                        <span className="font-bold text-white whitespace-nowrap">${pan.price.toLocaleString('es-CL')}</span>
                     </li>
                  ))}
                </ul>
             </div>
          </div>

        </div>
      </section>

      {/* Reseñas Google */}
      <section className="py-16 md:py-24 bg-[#111111] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Valoraciones</h2>
            </div>
            <div className="flex items-center gap-4 bg-black px-6 py-4 rounded-xl border border-white/10">
              <span className="text-5xl font-black text-white">4.9</span>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <span className="text-sm text-gray-400 mt-1">Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { author: "María González", review: "Las mejores pizzas de San Joaquín, lejos. La masa madre hace toda la diferencia." },
              { author: "Carlos Pérez", review: "El pan de molde artesanal es increíble, dura un montón y tiene un sabor espectacular." },
              { author: "Francisca Silva", review: "Atención rápida y las pizzas salen calentitas. La de pepperoni es un imperdible." }
            ].map((review, i) => (
              <div key={i} className="bg-black p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                <div className="flex gap-1 text-yellow-400 mb-4 text-sm">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-gray-400 mb-6 italic text-sm md:text-base leading-relaxed">"{review.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {review.author.charAt(0)}
                  </div>
                  <span className="font-bold text-white text-sm">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a href="https://www.google.com/maps?q=Serendipia+Pan+y+Pizza+-+Llico+202,+8920000+San+Joaqu%C3%ADn,+Regi%C3%B3n+Metropolitana&ftid=0x9662d11c61cc9a2d:0x43c3062398ec35dd&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjA5LjUuODc0MjI2MzI1MBgAIIgnKj8sOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkNM&skid=ccb0a424-e74e-4c7f-96cc-060784b99dfa&g_st=iw" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-white text-white font-bold py-3 px-8 rounded text-sm transition-colors">
                  Deja tu reseña en Google
              </a>
          </div>
        </div>
      </section>

      {/* Info & Ubicación */}
      <section id="ubicacion" className="py-16 md:py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white mb-4">Pedidos</h3>
              <p className="text-gray-400 mb-2">Haz tu pedido por WhatsApp y retira sin esperas.</p>
              <a href="tel:+56982179010" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">+56 9 8217 9010</a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white mb-4">Local</h3>
              <p className="text-lg font-bold text-white">Llico 202</p>
              <p className="text-sm text-gray-400">San Joaquín, Región Metropolitana</p>
              <a href="https://www.google.com/maps?q=Serendipia+Pan+y+Pizza+-+Llico+202,+8920000+San+Joaqu%C3%ADn,+Regi%C3%B3n+Metropolitana&ftid=0x9662d11c61cc9a2d:0x43c3062398ec35dd&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjA5LjUuODc0MjI2MzI1MBgAIIgnKj8sOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkNM&skid=ccb0a424-e74e-4c7f-96cc-060784b99dfa&g_st=iw" target="_blank" rel="noreferrer"
                 className="text-white hover:text-gray-400 font-bold text-sm tracking-widest flex items-center gap-1 mt-4 transition-colors">
                VER MAPA <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
               <div className="flex justify-center md:justify-start w-full md:w-1/3">
                  <Image src="/images/logo.png" alt="Serendipia Logo" width={100} height={100} className="bg-white rounded-full p-2" />
               </div>
               <div className="w-full md:w-1/3 text-center md:text-left flex flex-col gap-2">
                  <a href="#" className="text-gray-400 hover:text-white text-sm">Términos y condiciones</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">Política de privacidad</a>
               </div>
               <div className="w-full md:w-1/3 text-center flex flex-col gap-2">
                  <span className="font-bold text-white mb-2">Redes sociales</span>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">Instagram</a>
               </div>
            </div>
         </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/56982179010"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 hover:-translate-y-1 block"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
