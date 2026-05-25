import { Link } from 'react-router-dom'

export default function Navbar(){
return (
<header className='sticky top-0 z-50 bg-white border-b border-slate-200'>
<div className='bg-[#102a5c] text-white text-xs py-2 text-center'>Producción propia • Atención mayorista y minorista</div>
<nav className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
<Link to='/' className='flex items-center gap-3'>
<img src='/miniatura.jpg' alt='Valette' className='w-14 h-14 object-contain'/>
<div>
<p className='font-black text-[#102a5c] leading-none'>ABASTECEDORA</p>
<p className='font-black text-[#e53338] leading-none'>VALETTE</p>
</div>
</Link>
<div className='hidden md:flex gap-6 text-sm font-semibold text-slate-700'>
<Link to='/catalogo'>Catálogo</Link>
<Link to='/mayorista'>Mayorista</Link>
</div>
<a href='https://wa.me/' className='bg-[#e53338] text-white px-4 py-2 rounded-xl font-bold'>WhatsApp</a>
</nav>
</header>
)
}
