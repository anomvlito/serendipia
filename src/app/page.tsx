'use client';

import { useState } from 'react';
import { menuData } from '@/data/menu';
import Image from 'next/image';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-700 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <Image src="/images/logo.png" alt="Serendipia Logo" width={48} height={48} className="rounded-full border-2 border-brand/50 group-hover:scale-105 transition-transform" />
            <span className="font-display text-2xl tracking-wide text-white group-hover:text-brand transition-colors">
              SERENDIPIA
            </span>
          </a>

          <div className="hidden md:flex gap-8">
            <a href="#menu" className="font-bold text-sm uppercase tracking-widest hover:text-brand transition-colors text-white">Menú</a>
            <a href="#contacto" className="font-bold text-sm uppercase tracking-widest hover:text-brand transition-colors text-white">Contacto</a>
          </div>

          <a
            href="https://wa.me/56982179010"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex bg-brand hover:bg-brand-dark text-dark-900 font-bold py-2 px-6 rounded-full text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-brand/20"
          >
            Pedir Ahora
          </a>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-dark-700 shadow-2xl py-4 px-4 flex flex-col gap-4">
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg uppercase tracking-widest text-white hover:text-brand border-b border-white/5 pb-2">Menú</a>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg uppercase tracking-widest text-white hover:text-brand border-b border-white/5 pb-2">Contacto</a>
            <a
              href="https://wa.me/56982179010"
              target="_blank"
              rel="noreferrer"
              className="bg-brand text-dark-900 font-bold py-3 px-6 rounded-xl text-center text-sm uppercase tracking-widest mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pedir Ahora
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] md:min-h-[80vh] px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-dark-900">
           {/* If we have a hero image, we place it here. For now, solid dark with a gradient overlay. */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-dark-900/50"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 border border-brand/30 text-brand font-bold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm">local_fire_department</span>
            🔥 Pizzas Artesanales · Panadería · Masa Madre
          </div>

          <div className="mb-6">
              <Image src="/images/logo.png" alt="Serendipia Logo" width={160} height={160} className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-brand/80 shadow-2xl shadow-brand/30 object-cover" />
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none tracking-wide text-shadow mb-4">
            SERENDIPIA <br />
            <span className="text-brand">PAN PIZZAS</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Pizzas artesanales y panadería de masa madre. <br />
            <span className="text-brand font-bold">Auténtico, orgánico, recién horneado.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#menu"
              className="bg-brand hover:bg-brand-dark text-dark-900 font-extrabold py-4 px-10 rounded-xl text-sm uppercase tracking-[0.15em] transition-all hover:-translate-y-1 shadow-xl shadow-brand/30 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">restaurant_menu</span>
              Ver Menú
            </a>
            <a
              href="https://wa.me/56982179010"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-4 px-10 rounded-xl text-sm uppercase tracking-[0.15em] transition-all hover:-translate-y-1 shadow-xl shadow-[#25D366]/30 flex items-center justify-center gap-2"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Menu Layout */}
      <section id="menu" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-4 tracking-wide">Nuestro Menú</h2>
            <div className="h-1 w-24 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pl-0 pr-0">
            
            {/* Pizzas con Salsa de Tomate */}
            <div className="bg-dark-800/50 rounded-3xl p-6 md:p-8 border border-white/5 hover:border-brand/30 transition-colors relative group overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand text-dark-900 font-bold text-xs px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Especialidad
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-brand">local_pizza</span>
                <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide">Pizzas (Salsa Tomate)</h3>
              </div>
              <ul className="space-y-4">
                {menuData.pizzas.conSalsaDeTomate.map(pizza => (
                  <li key={pizza.id} className="border-b border-white/5 pb-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="font-bold text-lg text-white">{pizza.name}</span>
                        <p className="text-sm text-gray-400 mt-1 leading-snug">{pizza.description}</p>
                      </div>
                      <span className="text-brand font-bold whitespace-nowrap">${pizza.price.toLocaleString('es-CL')}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pizzas con Salsa Blanca */}
            <div>
               <div className="bg-dark-800/50 rounded-3xl p-6 md:p-8 border border-white/5 hover:border-brand/30 transition-colors mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-4xl text-brand">local_pizza</span>
                  <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide">Pizzas (Salsa Blanca)</h3>
                </div>
                <ul className="space-y-4">
                  {menuData.pizzas.conSalsaBlanca.map(pizza => (
                    <li key={pizza.id} className="border-b border-white/5 pb-3">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="font-bold text-lg text-white">{pizza.name}</span>
                          <p className="text-sm text-gray-400 mt-1 leading-snug">{pizza.description}</p>
                        </div>
                        <span className="text-brand font-bold whitespace-nowrap">${pizza.price.toLocaleString('es-CL')}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

               {/* Panadería */}
               <div className="bg-dark-800/50 rounded-3xl p-6 md:p-8 border border-white/5 hover:border-brand/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-4xl text-brand">bakery_dining</span>
                  <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide">Panadería</h3>
                </div>
                
                <h4 className="text-white text-md font-bold mb-3 uppercase tracking-wide border-b border-brand/50 inline-block">Por Unidad</h4>
                <ul className="space-y-3 mb-6">
                  {menuData.panaderia.panPorUnidad.map(pan => (
                     <li key={pan.id} className="border-b border-white/5 pb-2 flex justify-between">
                        <span className="font-medium text-white">{pan.name}</span>
                        <span className="text-brand font-bold whitespace-nowrap">${pan.price.toLocaleString('es-CL')}</span>
                     </li>
                  ))}
                </ul>

                <h4 className="text-white text-md font-bold mb-3 uppercase tracking-wide border-b border-brand/50 inline-block">A Granel</h4>
                <ul className="space-y-3">
                  {menuData.panaderia.panAGranel.map(pan => (
                     <li key={pan.id} className="border-b border-white/5 pb-2 flex justify-between">
                        <span className="font-medium text-white">{pan.name} <span className="text-xs text-gray-500 font-normal ml-1">(x {pan.unit})</span></span>
                        <span className="text-brand font-bold whitespace-nowrap">${pan.price.toLocaleString('es-CL')}</span>
                     </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reseñas Google */}
      <section className="py-16 md:py-24 bg-dark-800/80 relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide">Lo que dicen en el barrio</h2>
              <div className="h-1 w-24 bg-brand rounded-full mt-4 mx-auto md:mx-0"></div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
              <span className="text-5xl font-bold text-white">4.9</span>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <span className="text-sm text-gray-400">Excelentes valoraciones</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { author: "María González", review: "Las mejores pizzas de San Joaquín, lejos. La masa madre hace toda la diferencia. Super recomendadas." },
              { author: "Carlos Pérez", review: "El pan de molde artesanal es increíble, dura un montón y tiene un sabor espectacular. Mi nueva panadería favorita." },
              { author: "Francisca Silva", review: "Atención rápida y las pizzas salen calentitas. La de pepperoni es un imperdible del fin de semana." }
            ].map((review, i) => (
              <div key={i} className="bg-dark-900 p-6 rounded-2xl border border-white/5 hover:border-brand/30 transition-colors">
                <div className="flex gap-1 text-yellow-400 mb-4 text-sm">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center text-brand font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <span className="font-bold text-white text-sm">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a href="https://www.google.com/maps?q=Serendipia+Pan+y+Pizza+-+Llico+202,+8920000+San+Joaqu%C3%ADn,+Regi%C3%B3n+Metropolitana&ftid=0x9662d11c61cc9a2d:0x43c3062398ec35dd&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjA5LjUuODc0MjI2MzI1MBgAIIgnKj8sOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkNM&skid=ccb0a424-e74e-4c7f-96cc-060784b99dfa&g_st=iw" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full text-sm uppercase tracking-widest transition-colors">
                  <span className="material-symbols-outlined text-yellow-500" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  Déjanos tu reseña en Google
              </a>
          </div>
        </div>
      </section>

      {/* Info & Ubicación */}
      <section id="ubicacion" className="py-16 md:py-24 bg-dark-900 relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            {/* Contacto */}
            <div className="flex flex-col gap-4 items-center md:items-start p-6 rounded-2xl bg-white/5 border border-white/5">
              <span className="material-symbols-outlined text-4xl text-brand">call</span>
              <h3 className="font-display text-2xl text-white tracking-wide">Pedidos</h3>
              <p className="text-gray-400">Haz tu pedido por WhatsApp y retira sin esperas.</p>
              <a href="tel:+56982179010" className="text-xl font-bold text-white hover:text-brand transition-colors">+56 9 8217 9010</a>
              <a href="https://wa.me/56982179010" className="text-[#25D366] font-bold uppercase text-xs tracking-widest mt-2 flex items-center gap-1">
                Escribir a WhatsApp <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            {/* Direccion */}
            <div className="flex flex-col gap-4 items-center md:items-start p-6 rounded-2xl bg-white/5 border border-white/5">
              <span className="material-symbols-outlined text-4xl text-brand">storefront</span>
              <h3 className="font-display text-2xl text-white tracking-wide">Ubicación y Reseñas</h3>
              <p className="text-xl font-bold text-white">Llico 202</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">San Joaquín, Región Metropolitana</p>
              <div className="flex flex-col gap-3 mt-2 items-center md:items-start">
                <a href="https://www.google.com/maps?q=Serendipia+Pan+y+Pizza+-+Llico+202,+8920000+San+Joaqu%C3%ADn,+Regi%C3%B3n+Metropolitana&ftid=0x9662d11c61cc9a2d:0x43c3062398ec35dd&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjA5LjUuODc0MjI2MzI1MBgAIIgnKj8sOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkNM&skid=ccb0a424-e74e-4c7f-96cc-060784b99dfa&g_st=iw" target="_blank" rel="noreferrer"
                  className="text-brand font-bold uppercase text-xs tracking-widest flex items-center gap-1 hover:text-brand-dark transition-colors">
                  Ver en Google Maps <span className="material-symbols-outlined text-sm">map</span>
                </a>
                <a href="https://www.google.com/maps?q=Serendipia+Pan+y+Pizza+-+Llico+202,+8920000+San+Joaqu%C3%ADn,+Regi%C3%B3n+Metropolitana&ftid=0x9662d11c61cc9a2d:0x43c3062398ec35dd&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjA5LjUuODc0MjI2MzI1MBgAIIgnKj8sOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkNM&skid=ccb0a424-e74e-4c7f-96cc-060784b99dfa&g_st=iw" target="_blank" rel="noreferrer"
                  className="text-yellow-500 font-bold uppercase text-xs tracking-widest flex items-center gap-1 hover:text-yellow-600 transition-colors">
                  <span className="material-symbols-outlined text-sm">star</span> Valoraciones en Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Info */}
      <footer id="contacto" className="py-8 bg-black/50 border-t border-white/10 text-center">
         <div className="container mx-auto px-4 flex flex-col items-center gap-4">
            <h2 className="font-display text-4xl text-white">¡Haz tu pedido!</h2>
            <p className="text-gray-400">Contáctanos fácilmente para hacer tu pedido o consultas.</p>
            <a
              href="https://wa.me/56982179010"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-bold uppercase tracking-widest mt-2 flex items-center gap-1 hover:text-brand-dark transition-colors"
            >
              Contactar por WhatsApp <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <p className="text-gray-500 text-sm mt-8">© {new Date().getFullYear()} Serendipia Pan Pizzas. Todos los derechos reservados.</p>
         </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/56982179010"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 hover:rotate-3 group flex items-center justify-center"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

    </>
  );
}
