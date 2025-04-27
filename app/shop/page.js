import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "AI自動套圈圈機",
    description: "讓機器幫你圈住快樂，就算失敗也很爽快。",
    buttonText: "搶先預定",
    disabled: false,
    imageSrc: "/products/ring-throw-machine.jpg"
  },
  {
    title: "Coming Soon...",
    description: "下一個ㄎ一ㄤ到爆的小發明正在孵化中！",
    buttonText: "敬請期待",
    disabled: true,
    imageSrc: "/products/comimgsoon.png"
  }
];


export default function Shop() {
  return (
    <div style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#fffefc' }}>

      {/* Hero Banner */}
      <section style={{ minHeight: '60vh', background: 'linear-gradient(to right, #f6d365, #fda085)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>
          不是想買垃圾，<br />只是想買快樂！
        </h1>
        <p style={{ fontSize: '1.5em', color: '#333', marginBottom: '30px' }}>
          你買的不是東西，是偷來的快樂時光。
        </p>
      </section>

      {/* 商品列表區 */}
      <section style={{ padding: '60px 20px', textAlign: 'center', background: '#f9f9f9' }}>
        <h2 style={{ marginBottom: '30px' }}>小小亂搞商品列表</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              buttonText={product.buttonText}
              disabled={product.disabled}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
