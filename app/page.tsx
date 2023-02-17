import Header from '@/components/Header';
import ProductDetail from '@/components/ProductDetail';

export default function Page() {
  return (
    <>
      <Header />
      <main className="lg:px-[165px]">
        <ProductDetail />
      </main>
    </>
  );
}
