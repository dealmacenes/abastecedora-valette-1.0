import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Catalogo(){
return <main className='max-w-6xl mx-auto px-4 py-14'>
<Helmet><title>Catálogo | Abastecedora Valette</title></Helmet>
<h1 className='text-5xl font-black text-[#102a5c] mb-10'>Catálogo</h1>
<div className='grid md:grid-cols-3 gap-6'>
{products.map(product => <Link key={product.slug} to={`/producto/${product.slug}`} className='rounded-3xl overflow-hidden border bg-white'>
<img src={product.image} className='h-60 w-full object-cover'/>
<div className='p-5'><h2 className='text-2xl font-black'>{product.name}</h2></div>
</Link>)}
</div>
</main>
}
