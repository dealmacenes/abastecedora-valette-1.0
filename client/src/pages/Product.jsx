import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function Product(){
 const { slug } = useParams()
 const product = products.find(p=>p.slug===slug)
 if(!product) return <div className='p-10'>Producto no encontrado.</div>
 return <main className='max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10'>
 <Helmet>
 <title>{product.name} | Abastecedora Valette</title>
 <meta name='description' content={product.description}/>
 </Helmet>
 <img src={product.image} className='rounded-3xl w-full h-[500px] object-cover'/>
 <div>
 <p className='text-[#e53338] font-bold mb-3 uppercase'>{product.category}</p>
 <h1 className='text-5xl font-black text-[#102a5c] mb-5'>{product.name}</h1>
 <p className='text-xl text-slate-600 mb-8'>{product.description}</p>
 <a href='https://wa.me/' className='bg-[#e53338] text-white px-8 py-4 rounded-2xl font-bold inline-block'>Consultar por WhatsApp</a>
 </div>
 </main>
}
