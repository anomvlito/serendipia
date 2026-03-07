'use client';

import { useState } from 'react';
import { menuData } from '@/data/menu';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: { id: string; name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const newQ = p.quantity + delta;
          return newQ > 0 ? { ...p, quantity: newQ } : p;
        }
        return p;
      })
    );
  };

  const totalCart = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const sendOrderToWhatsApp = () => {
    if (cart.length === 0) return;
    
    let message = "¡Hola! Quiero hacer un pedido en Serendipia:%0A%0A";
    cart.forEach(item => {
      message += `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toLocaleString('es-CL')})%0A`;
    });
    message += `%0ATotal: *$${totalCart.toLocaleString('es-CL')}*%0A%0A¿Cuánto tiempo demora el retiro?`;

    window.open(`https://wa.me/56982179010?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#f2f2f2] text-black text-xs md:text-sm text-center py-2 px-4 font-medium tracking-wide">
        SERENDIPIA PAN PIZZAS. Horario: Martes a Sábado 12:30 a 22:30 hrs. Domingos cerrado.
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-black border-b border-white/10 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Serendipia Logo" width={60} height={60} className="object-contain hover:scale-105 transition-transform" />
          </a>

          <div className="hidden md:flex gap-8 items-center border border-white/10 rounded-md px-6 py-2">
            <a href="#menu" className="font-semibold text-sm hover:text-gray-300 transition-colors text-white uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">menu</span>
              Categorías
            </a>
            <div className="w-px h-4 bg-white/20"></div>
            <a href="#ubicacion" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
              <span className="material-symbols-outlined text-sm">location_on</span>
              San Joaquín
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:text-gray-300 transition-colors relative" onClick={() => setIsCartOpen(true)}>
              <span className="material-symbols-outlined">local_mall</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand text-xs font-bold text-white rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.reduce((acc, c) => acc + c.quantity, 0)}
                </span>
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button className="text-white relative" onClick={() => setIsCartOpen(!isCartOpen)}>
              <span className="material-symbols-outlined text-2xl">local_mall</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand text-xs font-bold text-white rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.reduce((acc, c) => acc + c.quantity, 0)}
                </span>
              )}
            </button>
            <button 
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-white/10 shadow-2xl py-6 px-6 flex flex-col gap-6">
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-white hover:text-gray-300 border-b border-white/10 pb-3 flex items-center justify-between">
              Menú <span className="material-symbols-outlined">chevron_right</span>
            </a>
            <a href="#historia" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-white hover:text-gray-300 border-b border-white/10 pb-3 flex items-center justify-between">
              Nuestra Historia <span className="material-symbols-outlined">chevron_right</span>
            </a>
            <a href="#ubicacion" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-white hover:text-gray-300 border-b border-white/10 pb-3 flex items-center justify-between">
              Local <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
        )}
      </nav>

      {/* Cart Drawer / Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="w-full md:w-[400px] h-full bg-[#111111] border-l border-white/10 shadow-2xl flex flex-col z-10 transform transition-transform animate-in slide-in-from-right">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
               <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                 <span className="material-symbols-outlined">shopping_basket</span> Tu Pedido
               </h2>
               <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">close</span>
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  <span className="material-symbols-outlined text-6xl mb-4 opacity-50">shopping_cart</span>
                  <p>Tu carrito está vacío</p>
                  <p className="text-sm mt-2">¡Agrega algo rico de nuestro menú!</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center bg-black p-4 rounded-xl border border-white/5">
                     <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">{item.name}</h4>
                        <span className="text-brand text-sm font-semibold">${item.price.toLocaleString('es-CL')}</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="flex items-center bg-[#222222] rounded-lg overflow-hidden">
                           <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 text-white hover:bg-white/10">-</button>
                           <span className="px-2 text-sm text-white font-bold">{item.quantity}</span>
                           <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 text-white hover:bg-white/10">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300">
                           <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                     </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-black border-t border-white/10">
                 <div className="flex justify-between text-white font-bold text-xl mb-6">
                    <span>Total:</span>
                    <span>${totalCart.toLocaleString('es-CL')}</span>
                 </div>
                 <button 
                  onClick={sendOrderToWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-4 px-6 rounded-xl flex justify-center items-center gap-2 transition-transform hover:-translate-y-1"
                 >
                    <span className="material-symbols-outlined">send</span> Enviar por WhatsApp
                 </button>
                 <p className="text-xs text-gray-500 text-center mt-3">Serás redirigido a WhatsApp para confirmar.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section Typography Focused */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center border-b border-white/5 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
        {/* Decoración Hoja */}
        <div className="absolute top-10 -left-10 md:top-20 md:left-20 opacity-[0.03] pointer-events-none -rotate-12">
            <Image src="/images/hoja.png" alt="Hoja" width={450} height={450} className="object-contain" />
        </div>

        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
           <div className="mb-8">
              <Image src="/images/logo.png" alt="Serendipia Logo" width={180} height={180} className="mx-auto" />
           </div>
           <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl uppercase">
             Comida Real. <br /> <span className="text-brand">Fermentación Lenta.</span>
           </h1>
           <p className="text-gray-300 text-lg md:text-2xl mb-10 leading-relaxed font-medium">
              Pizzas artesanales y panadería de masa madre. Auténtico, orgánico, recién horneado.
           </p>
           <a href="#menu" className="inline-block bg-white text-black font-bold py-4 px-12 rounded-full text-lg uppercase tracking-widest hover:bg-gray-200 transition-all hover:scale-105 shadow-xl shadow-white/10">
              Ver Carta y Pedir
           </a>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section id="historia" className="py-20 md:py-28 bg-[#111111] relative overflow-hidden">
        {/* Decoración Hoja */}
        <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none rotate-[30deg]">
            <Image src="/images/hoja.png" alt="Hoja decorativa" width={600} height={600} className="object-contain" />
        </div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <span className="material-symbols-outlined text-5xl text-brand mb-6">local_fire_department</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">Nuestra Historia</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              Serendipia nació de la pasión por los procesos lentos y la comida real. Creemos firmemente que el tiempo es el mejor ingrediente.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Trabajamos con masa madre natural, fermentaciones prolongadas, harinas seleccionadas y productos orgánicos. Somos una pizzería y panadería de barrio, creada con mucho amor en San Joaquín para tu mesa. ¡Bienvenidos a nuestra casa!
            </p>
        </div>
      </section>

      {/* Menu Layout */}
      <section id="menu" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="mb-12">
             <h2 className="text-3xl font-bold text-white mb-2">Pizzas (Salsa Tomate)</h2>
             <p className="text-gray-400 text-sm">Fermentadas a temperatura controlada, con salsa de tomates peritas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {menuData.pizzas.conSalsaDeTomate.map(pizza => (
              <div key={pizza.id} className="flex justify-between items-start gap-4 p-5 bg-[#111111] hover:bg-[#1a1a1a] rounded-2xl transition-colors cursor-pointer border border-white/5 hover:border-white/20 group">
                <div className="flex-1 pr-4">
                  <h3 className="font-bold text-lg text-white group-hover:text-brand transition-colors">{pizza.name}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{pizza.description}</p>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                   <span className="font-bold text-white">${pizza.price.toLocaleString('es-CL')}</span>
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       addToCart({ id: `pizza-t-${pizza.id}`, name: pizza.name, price: pizza.price });
                     }}
                     className="bg-brand/10 hover:bg-brand text-brand hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                   >
                      <span className="material-symbols-outlined text-md">add</span>
                   </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
             <h2 className="text-3xl font-bold text-white mb-2">Pizzas (Salsa Blanca)</h2>
             <p className="text-gray-400 text-sm">Nuestra base especial y quesos seleccionados.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {menuData.pizzas.conSalsaBlanca.map(pizza => (
              <div key={pizza.id} className="flex justify-between items-start gap-4 p-5 bg-[#111111] hover:bg-[#1a1a1a] rounded-2xl transition-colors cursor-pointer border border-white/5 hover:border-white/20 group">
                <div className="flex-1 pr-4">
                  <h3 className="font-bold text-lg text-white group-hover:text-brand transition-colors">{pizza.name}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{pizza.description}</p>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                   <span className="font-bold text-white">${pizza.price.toLocaleString('es-CL')}</span>
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       addToCart({ id: `pizza-b-${pizza.id}`, name: pizza.name, price: pizza.price });
                     }}
                     className="bg-brand/10 hover:bg-brand text-brand hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                   >
                      <span className="material-symbols-outlined text-md">add</span>
                   </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
             <h2 className="text-3xl font-bold text-white mb-2">Panadería</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
             <div className="bg-[#111111] p-6 rounded-2xl border border-white/5">
                <h4 className="text-white text-md font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand">cookie</span> Por Unidad
                </h4>
                <ul className="space-y-4">
                  {menuData.panaderia.panPorUnidad.map(pan => (
                     <li key={pan.id} className="flex justify-between items-center group">
                        <span className="font-medium text-gray-300 transition-colors">{pan.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-white whitespace-nowrap">${pan.price.toLocaleString('es-CL')}</span>
                          <button 
                            onClick={() => addToCart({ id: `pan-u-${pan.id}`, name: pan.name, price: pan.price })}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm bg-white/10 p-1 rounded-full hover:bg-brand hover:text-black">add</span>
                          </button>
                        </div>
                     </li>
                  ))}
                </ul>
             </div>
             <div className="bg-[#111111] p-6 rounded-2xl border border-white/5">
                <h4 className="text-white text-md font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand">scale</span> A Granel
                </h4>
                <ul className="space-y-4">
                  {menuData.panaderia.panAGranel.map(pan => (
                     <li key={pan.id} className="flex justify-between items-center group">
                        <span className="font-medium text-gray-300 transition-colors">
                          {pan.name} <span className="text-xs text-gray-500 font-normal ml-1">(x {pan.unit})</span>
                        </span>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-white whitespace-nowrap">${pan.price.toLocaleString('es-CL')}</span>
                          <button 
                            onClick={() => addToCart({ id: `pan-g-${pan.id}`, name: `${pan.name} (${pan.unit})`, price: pan.price })}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm bg-white/10 p-1 rounded-full hover:bg-brand hover:text-black">add</span>
                          </button>
                        </div>
                     </li>
                  ))}
                </ul>
             </div>
          </div>

        </div>
      </section>

      {/* Galería de Imágenes Inferior */}
      <section className="py-2 bg-black mt-16">
        <div className="grid grid-cols-3 gap-1 md:gap-2">
           <div className="relative aspect-square md:aspect-video w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/images/1.jpeg" fill alt="Pizza 1" className="object-cover" />
           </div>
           <div className="relative aspect-square md:aspect-video w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/images/2.jpeg" fill alt="Local 2" className="object-cover" />
           </div>
           <div className="relative aspect-square md:aspect-video w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/images/3.jpeg" fill alt="Pizza 3" className="object-cover" />
           </div>
        </div>
      </section>

      {/* Reseñas Google */}
      <section className="py-16 md:py-24 bg-[#111111] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-2">Lo que dicen en San Joaquín</h2>
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
      <section id="ubicacion" className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-brand">storefront</span> Visítanos
                </h3>
                <p className="text-lg font-bold text-white">Llico 202</p>
                <p className="text-gray-400">San Joaquín, Región Metropolitana</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-brand">call</span> Retiro y Pedidos
                </h3>
                <p className="text-gray-400 mb-2">Haz tu pedido por WhatsApp y retira calentito sin esperas.</p>
                <a href="https://wa.me/56982179010" target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-bold text-[#25D366] hover:text-[#20bd5a] transition-colors inline-block mt-2">
                  +56 9 8217 9010
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
               <iframe 
                  src="https://maps.google.com/maps?q=Llico+202,+San+Joaquin,+Region+Metropolitana&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
               ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
               <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                  <Image src="/images/logo.png" alt="Serendipia Logo" width={100} height={100} />
               </div>
               <div className="w-full md:w-1/3 flex flex-col gap-2">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos y condiciones</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de privacidad</a>
               </div>
               <div className="w-full md:w-1/3 flex flex-col gap-2 items-center md:items-end">
                  <span className="font-bold text-white mb-2">Social</span>
                  <a href="https://www.instagram.com/serendipiapanypizzas" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                    Instagram <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
               </div>
            </div>
            <div className="mt-12 text-center text-xs text-gray-600">
              © {new Date().getFullYear()} Serendipia Pan Pizzas.
            </div>
         </div>
      </footer>
    </>
  );
}
