import Link from "next/link";

export default function Home() {
  return (
    <div style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#f4f8fb' }}>

      {/* Hero Banner */}
      <section style={{ height: '100vh', background: 'linear-gradient(to bottom, #c2e9fb, #a1c4fd)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>
          這世界正經得太癲狂，<br />拯救世界就靠 Randy Huang！
        </h1>
        <p style={{ fontSize: '1.5em', color: '#333', marginBottom: '30px' }}>
          這年代，會笑，比會賺更稀有。
        </p>
        <div>
          <Link href="/shop">
            <button style={{ padding: '10px 20px', margin: '5px', fontSize: '1.2em', border: 'none', borderRadius: '5px', background: '#4facfe', color: 'white', cursor: 'pointer' }}>找回快樂</button>
          </Link>
          <button style={{ padding: '10px 20px', margin: '5px', fontSize: '1.2em', border: 'none', borderRadius: '5px', background: '#00f2fe', color: 'white', cursor: 'pointer' }}>一起玩瘋</button>
        </div>
      </section>

      {/* 我是誰區塊 */}
      <section style={{ padding: '60px 20px', textAlign: 'center', background: 'white' }}>
        <h2>我是 Randy Huang</h2>
        <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '1.2em', color: '#555' }}>
          一個拒絕活成公式的人，專門製作無用卻充滿快樂的小發明，讓世界在正經之餘，也能偷偷笑一下。
        </p>
      </section>

      {/* 小發明介紹區 */}
      <section style={{ padding: '60px 20px', background: '#eef6fb', textAlign: 'center' }}>
        <h2>我的小小亂搞作品</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3>AI自動套圈圈機</h3>
            <p>自動出圈，自動套圈，失敗也會笑出來的神機器。</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3>Coming Soon...</h3>
            <p>下一個更ㄎ一ㄤ的小發明，敬請期待！</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '60px 20px', textAlign: 'center', background: 'linear-gradient(to right, #43e97b, #38f9d7)', color: 'white' }}>
        <h2>想要偷渡一點快樂嗎？</h2>
        <p style={{ fontSize: '1.2em', margin: '20px auto', maxWidth: '600px' }}>
          加入 Randy 的快樂實驗室，一起用小小的叛逆對抗正經世界。
        </p>
        <button style={{ padding: '10px 20px', marginTop: '20px', fontSize: '1.2em', border: 'none', borderRadius: '5px', background: 'white', color: '#333', cursor: 'pointer' }}>訂閱我們</button>
      </section>

    </div>
  )
}
