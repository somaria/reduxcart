import Image from 'next/image';
import { dummyProducts } from '@/dummydata';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <div className='p-4 flex flex-wrap gap-4'>
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
