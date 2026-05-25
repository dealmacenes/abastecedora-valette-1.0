import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { categories, products } from '../data/products'

export default function Home(){
return (
<>
<Helmet>
<title>Abastecedora Valette | Producción y venta de carnes</title>
<meta name='description' content='Producción propia y venta mayorista y minorista de carnes en Zona Sur.'/>
</Helmet>
<section className='bg-[#08152f] text-white'>
<div className='max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center'>
<div>
<p className='text-[#ff4b4b] font-bold mb-3'>Producción propia • Zona Sur</p>
<h1 className='text-5xl font-black leading-tight mb-5'>Carne de calidad, directo de origen.</h1>
<p className='text-slate-300 text-lg mb-8'>Precios mayoristas, stock permanente y atención rápida para familias, comercios y gastronómicos.</p>
<div className='flex flex-col sm:flex-row gap-4'>
<a href='https://wa.me/' className='bg-[#e53338] px-6 py-4 rounded-2xl font-bold text-center'>Hacé tu pedido</a>
<Link to='/catalogo' className='border border-white/20 px-6 py-4 rounded-2xl font-bold text-center'>Ver catálogo</Link>
</div>
</div>
<img src='/bifeAncho.jpeg' className='rounded-3xl h-[420px] w-full object-cover'/>
</div>
</section>

<section className='max-w-6xl mx-auto px-4 py-12'>
<div className='grid md:grid-cols-2 gap-6'>
<div className='rounded-3xl p-8 bg-white shadow-lg border'>
<h2 className='text-2xl font-black mb-2'>Minorista</h2>
<p className='text-slate-600 mb-5'>Comprá por unidad con atención rápida.</p>
<a href='https://wa.me/' className='text-[#e53338] font-bold'>Comprar ahora →</a>
</div>
<div className='rounded-3xl p-8 bg-[#102a5c] text-white shadow-lg'>
<h2 className='text-2xl font-black mb-2'>Mayorista</h2>
<p className='text-slate-300 mb-5'>Precios especiales por volumen y distribución.</p>
<Link to='/mayorista' className='text-white font-bold'>Ir a mayorista →</Link>
</div>
</div>
</section>

<section className='max-w-6xl mx-auto px-4 pb-16'>
<div className='flex items-center justify-between mb-6'>
<h2 className='text-3xl font-black text-[#102a5c]'>Categorías principales</h2>
<Link to='/catalogo' className='text-[#e53338] font-bold'>Ver todo</Link>
</div>
<div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
{categories.map(category => (
<Link key={category.slug} to={`/catalogo/${category.slug}`} className='relative rounded-3xl overflow-hidden h-72'>
<img src={category.image} className='absolute inset-0 w-full h-full object-cover'/>
<div className='absolute inset-0 bg-black/45'/>
<div className='absolute bottom-0 p-5 text-white'>
<h3 className='font-black text-2xl'>{category.title}</h3>
<p className='text-sm text-slate-200'>{category.description}</p>
</div>
</Link>
))}
</div>
</section>

<section className='bg-[#102a5c] text-white'>
<div className='max-w-6xl mx-auto px-4 py-14'>
<div className='flex items-center justify-between mb-6'>
<h2 className='text-3xl font-black'>Productos destacados</h2>
<Link to='/catalogo' className='text-white'>Ver catálogo</Link>
</div>
<div className='grid md:grid-cols-3 gap-6'>
{products.map(product => (
<Link key={product.slug} to={`/producto/${product.slug}`} className='bg-white text-slate-900 rounded-3xl overflow-hidden'>
<img src={product.image} className='h-60 w-full object-cover'/>
<div className='p-5'>
<h3 className='font-black text-2xl mb-2'>{product.name}</h3>
<p className='text-slate-600 mb-5'>{product.description}</p>
<div className='text-[#e53338] font-bold'>Consultar precio →</div>
</div>
</Link>
))}
</div>
</div>
</section>
</>
)
}
