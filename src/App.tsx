import './App.css'
// 상단 import에 추가
import footerLogo from './assets/logo.png';
import teamGlass from './assets/team-glass.png';
import berryJumper from './assets/berryjumper.png';



// 최상단 import 부분에 이미지 경로 추가
import boundlessBanner from './assets/boundless_0.png';
import heroImage from './assets/hero.png';

function App() {
  return (
    <div className="relative w-screen min-h-screen bg-[url('/background.png')] bg-cover bg-center text-black font-[Iropke Batang]">

      {/* 상단 고정 배너 (디자인 개선) */}
      <header
        className="fixed top-0 left-0 w-full h-20 shadow z-50 flex items-center justify-between px-6"
        style={{ backgroundColor: '#F6F5F1' }}
      >
        {/* 왼쪽: 로고 클릭 시 최상단으로 */}
        <a href="#top">
          <img src={boundlessBanner} alt="Boundless Logo" className="h-10" />
        </a>

        {/* 오른쪽: 메뉴 항목 */}
        <nav className="flex space-x-6 text-black font-semibold">
          <a href="#top" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#team" className="hover:underline">Team</a>
          <a href="#contribution" className="hover:underline">Contribution</a>
        </nav>
      </header>

      {/* Hero 이미지 + 텍스트/버튼 레이어 */}
      <section id="top" className="relative w-full h-[700px] flex flex-col items-center justify-center text-center">
        {/* hero 이미지 */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none"
        />

        {/* 텍스트 + 버튼 (hero 이미지 위에) */}
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold mb-4">Berryfiable compute</h2>
          <p className="text-lg text-gray-800 font-bold mb-6">
  Boundless는 모든 체인에서 검증 가능한 컴퓨팅에 액세스하기 위한 프로토콜입니다<br />
  그리고 Boundless에 기여하기 위해 이 페이지를 만들었습니다
</p>

          <div className="flex gap-4 justify-center">
            <a
              href="https://x.com/i/communities/1912489680773251490"
              className="border border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              X-community
            </a>
            <a
              href="https://x.com/JumperKid_0"
              className="border border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              KIDTwitter
            </a>
          </div>
        </div>
      </section>

      {/* 본문 콘텐츠 */}
      <main className="pt-20 px-8">
        <section id="about" className="min-h-screen scroll-mt-24 px-4 py-8">
  <h2 className="text-4xl font-bold mb-4">About Boundless</h2>
  <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
    {/* 텍스트 설명 */}
    <div className="flex-1 text-gray-800 leading-relaxed">
      <p>
        Boundless는 RiscZero에서 빌딩중인 탈중앙화된 ZK 증명 마켓플레이스 및 프로토콜 레이어입니다.
        누구든지 ZK 증명을 요청할 수 있고 누구든지 Prover가 되어 증명을 제공할 수 있으며
        이 과정을 통해 암호학적으로 보장된 계산 결과를 블록체인에 반영할 수 있습니다.
      </p>
      <br />
      <p><strong>Boundless 만의 특별한 구조를 살펴보자면</strong></p>
      <ul className="list-disc list-inside">
        <li>Aggregated Proofs: 여러 요청을 Merkle Tree 구조로 합쳐 하나의 Groth16 증명으로 제출하여 가스비를 대폭 절감하고 다수 요청을 한 번에 처리 가능합니다</li>
<br />
        <li>Reverse Dutch Auction: Proof 가격은 시간 경과에 따라 상승하고 가장 먼저 입찰한 Prover가 Lock in/증명 책임을 가지게 됩니다. 실패 시 Stake 슬래시 및 Bounty 방식 보상을 지급합니다</li>
<br />
        <li>Censorship Resistance 설계: Onchain/offchain Proof Request 제출 선택이 가능하고 민감한 요청도 검열 없이 처리 가능합니다</li>
<br />
        <li>Execution 단독 처리: 연산만 맡기고 합의는 기존 블록체인에 맡길 수 있습니다. 즉 Rollup이 아니더라도 사용할 수 있는 범용 ZK Layer 입니다.</li>
<br />
      </ul>
      <br />
      <p><strong>PoVW</strong><br />
      Boundless의 핵심기능 중 가장 중요한 건 PoVW입니다. PoVW는 Boundless가 도입한 새로운 보상 메커니즘으로 기존 블록체인 인센티브 모델인 PoW, PoS의 한계를 극복한 솔루션입니다.
      <br />
      기존의 PoW는 단순한 해시 계산 경쟁이며, PoS는 자본 보유량에 기반하지만
      PoVW는 실제로 수행한 ZK 증명의 연산량에 기반하여 보상을 분배합니다.
      <br />
      그리고 정확성 있는 측정과 공정한 인센티브, 투명한 경제성이 PoVW의 핵심 가치로 뽑힙니다.
      </p>
    </div>

    {/* 이미지 (오른쪽) */}
<div className="flex-1 flex justify-center items-center">
  <img
    src="/Boundless-Glass-09.png"
    alt="Boundless Glass Visual"
    className="max-w-[1000px] w-full h-auto"
  />
</div>

  </div>
</section>




        <section id="team" className="scroll-mt-24 px-8 py-20">
  <h2 className="text-4xl font-bold mb-8 text-center">Boundless Team</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        name: 'Shiv Shankar',
        role: 'Boundless의 CEO입니다',
        twitter: 'https://x.com/ssh_nkar',
        img: 'shiv.png',
      },
      {
        name: 'reka',
        role: 'Boundless의 Co-Founder입니다',
        twitter: 'https://x.com/reka_eth',
        img: 'reka.png',
      },
      {
        name: 'kashvi',
        role: 'Boundless의 community & socials을 담당하고 있습니다',
        twitter: 'https://x.com/kashviETH',
        img: 'kashvi.png',
      },
      {
        name: 'sasha',
        role: 'Boundless 런칭 팀원입니다',
        twitter: 'https://x.com/sashaaldrick',
        img: 'sasha.png',
      },
      {
        name: 'Joe',
        role: 'RiscZero의 COO입니다',
        twitter: 'https://x.com/writtenterribly',
        img: 'joe.png',
      },
      {
        name: 'Jacob Everly',
        role: 'Boundless의 프로덕트 리드 입니다',
        twitter: 'https://x.com/0xEverly',
        img: 'everly.png',
      },
      {
        name: 'santi',
        role: 'Risczero 프로덕트 마케팅 리더입니다',
        twitter: 'https://x.com/zksanca',
        img: 'santi.png',
      },
      {
        name: 'Natalia',
        role: 'Boundless의 훌륭한 팀원입니다',
        twitter: 'https://x.com/talianotnatalie',
        img: 'natalia.png',
      },
    ].map((member) => (
      <div key={member.name} className="flex items-start gap-4">
        <img
          src={`/src/assets/team/${member.img}`}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{member.name}</p>
          <p className="text-sm text-gray-700">{member.role}</p>
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 underline"
          >
            Twitter
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
  {/* 🔽 이미지 추가 (팀 섹션 끝에 중앙 정렬로 삽입) */}
  <div className="flex justify-center mt-12">
    <img
      src={teamGlass}
      alt="Team Section Glass Visual"
      className="w-full max-w-[800px] h-auto"
    />
  </div>
        <section id="contribution" className="min-h-screen scroll-mt-24 px-4 py-8">
  <h2 className="text-4xl font-bold mb-4 text-left">Contribution</h2>

  <div className="flex flex-col lg:flex-row items-start gap-10">
    {/* 왼쪽: 기여 설명 */}
    <div className="flex-1 text-gray-800 leading-relaxed">
      <p>
        기여하는 방법에는 다양하게 있습니다.<br />
        meme을 만들거나, Art를 만들거나, 기술 스레드를 만들거나, 영상을 만들거나 다양하게 기여할 수 있으며<br />
        저처럼 이렇게 homepage를 작성하여 기여해볼 수 있습니다.
      </p>
      <br />
      <p>
        기여를 위해 <a href="https://risczero.notion.site/socialberriescontentguide#1dc051ebc1b580a6ad28ca1aee302e13" target="_blank" className="text-blue-600 underline">berry notion</a> 참고해서
        다양하고 창의성 있게 기여해보세요!
      </p>
      <br />
      <p>
        Twitter에 Boundless 관련 글을 남기고 싶을 땐 <a href="https://x.com/i/communities/1912489680773251490" target="_blank" className="text-blue-600 underline">Boundless Berries 커뮤니티</a>에
        글을 올려보는 것도 좋아요.
      </p>
      <br />
      <ul className="list-disc list-inside">
        <li><a href="https://x.com/JumperKid_0/status/1921969658787463423" target="_blank" className="text-blue-600 underline">Boundless 기술 스레드 (1/2)</a></li>
        <li><a href="https://x.com/JumperKid_0/status/1922040394713579860" target="_blank" className="text-blue-600 underline">Boundless 기술 스레드 (2/2)</a></li>
        <li><a href="https://x.com/JumperKid_0/status/1923012872894021839" target="_blank" className="text-blue-600 underline">Boundless와 Irreducible 협업 분석</a></li>
      </ul>
      <br />
      <p className="text-xl font-bold mt-4">Think bigger, be boundless</p>
    </div>

    {/* 오른쪽: 이미지 */}
    <div className="flex-1 flex justify-center items-center">
      <img
        src={berryJumper}
        alt="Berry Jumper"
        className="max-w-[400px] w-full h-auto"
      />
    </div>
  </div>
</section>


      </main>

      {/* 하단 바 (비고정 & 전체 배경색 변경 + 로컬 이동용 로고 + 링크들) */}
      <footer
  className="flex items-center justify-between px-6 py-10"
  style={{ backgroundColor: '#34332F', color: '#F0F0EB' }}
>
  {/* 왼쪽: 로고 + 링크들 */}
  <div className="flex items-center space-x-6">
    <a href="#top">
      <img src={footerLogo} alt="Boundless Footer Logo" className="h-12" />
    </a>
    <a href="#top">Homepage</a>
    <a href="https://x.com/boundless_xyz" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://discord.gg/BsKyDEzF" target="_blank" rel="noopener noreferrer">Discord</a>
    <a href="https://docs.beboundless.xyz/developers/what" target="_blank" rel="noopener noreferrer">Docs</a>
  </div>

  {/* 오른쪽: 제작자 문구 */}
  <span className="text-sm opacity-70">Created by JumperKID</span>
</footer>

    </div>
  );
}

export default App;