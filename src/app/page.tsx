'use client';

import { menuData } from '@/data/menu';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-700 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-display text-2xl tracking-wide text-white group-hover:text-brand transition-colors">
              SERENDIPIA PAN PIZZAS
            </span>
          </a>

          <div className="hidden md:flex gap-8">
            <a href="#menu" className="font-bold text-sm uppercase tracking-widest hover:text-brand transition-colors text-white">Menú</a>
            <a href="#contacto" className="font-bold text-sm uppercase tracking-widest hover:text-brand transition-colors text-white">Contacto</a>
          </div>

          <a
            href="https://wa.me/549111111111"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex bg-brand hover:bg-brand-dark text-dark-900 font-bold py-2 px-6 rounded-full text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-brand/20"
          >
            Pedir Ahora
          </a>

          <button className="md:hidden text-white p-2">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] md:min-h-[80vh] px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-dark-900">
           {/* If we have a hero image, we place it here. For now, solid dark with a gradient overlay. */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-dark-900/50"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 border border-brand/30 text-brand font-bold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm">local_fire_department</span>
            🔥 Pizzas Artesanales · Panadería · Masa Madre
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
              href="https://wa.me/"
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

      {/* Footer / Info */}
      <footer id="contacto" className="py-8 bg-black/50 border-t border-white/10 text-center">
         <div className="container mx-auto px-4 flex flex-col items-center gap-4">
            <h2 className="font-display text-4xl text-white">¡Haz tu pedido!</h2>
            <p className="text-gray-400">Contáctanos fácilmente para hacer tu pedido o consultas.</p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-bold uppercase tracking-widest mt-2 flex items-center gap-1 hover:text-brand-dark transition-colors"
            >
              Ver WhatsApp <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <p className="text-gray-500 text-sm mt-8">© {new Date().getFullYear()} Serendipia Pan Pizzas. Todos los derechos reservados.</p>
         </div>
      </footer>

    </>
  );
}
