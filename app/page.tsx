import Image from 'next/image';
import { dummyProducts } from '@/dummydata';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <div>
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
