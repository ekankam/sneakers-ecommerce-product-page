import Header from '@/components/Header';
import ProductDetail from '@/components/ProductDetail';

export default function Page() {
  return (
    <>
      <Header />
      <main className="px-6 md:px-[100px] lg:px-[165px]">
        <ProductDetail />
      </main>
    </>
  );
}
