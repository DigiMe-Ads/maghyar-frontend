import photo1       from '../../assets/photo-1.jpg';
import aboutTeam   from '../../assets/about-team.jpg';
import servicesTeam from '../../assets/services-team.jpg';
import aboutSwirl  from '../../assets/about-3d-swirl.png';

const posts = [
  {
    img: photo1,
    day: '01', month: 'NOV',
    author: 'By Kamrul', category: 'Ai Technology',
    title: 'Web3 and the Future of Digital Experiences',
    excerpt: 'Your business absolutely needs a updated daily. This service is best for our Full Representation Service clients who want the',
  },
  {
    img: aboutTeam,
    day: '01', month: 'NOV',
    author: 'By Kamrul', category: 'Social Media',
    title: 'Five ways that can develop your business website',
    excerpt: 'Your business absolutely needs a updated daily. This service is best for our Full Representation Service clients who want the',
  },
  {
    img: servicesTeam,
    day: '01', month: 'NOV',
    author: 'By Kamrul', category: 'Ai Content',
    title: "How UX/UI Design Impacts Your Website's Success",
    excerpt: 'Your business absolutely needs a updated daily. This service is best for our Full Representation Service clients who want the',
  },
];

export default function Blog() {
  return (
    <section
      className="relative w-full bg-[#0a0a0a] py-20 px-4 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── 3D swirl — top left ── */}
      <div
        className="hidden md:block pointer-events-none absolute -left-10 -top-6 opacity-60"
        style={{ width: 'clamp(100px, 10vw, 180px)', animation: 'floatY 6s ease-in-out infinite' }}
      >
        <img src={aboutSwirl} alt="" className="w-full drop-shadow-2xl" />
      </div>

      {/* ── Section header ── */}
      <div className="text-center mb-14">
        <p className="flex items-center justify-center gap-1 text-[#6dbf67] text-xs font-bold tracking-widest uppercase mb-4">
          <span className="font-extrabold">+</span>OUR BLOG
        </p>
        <h2 className="leading-tight" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)' }}>
          <span className="text-white font-bold">Check Out Latest </span>
          <span className="font-bold" style={{ color: 'rgba(255,255,255,0.55)' }}>News</span>
          <br />
          <span className="text-[#e8435a] italic font-bold">Update &amp; Artic</span>
          <span className="italic font-normal" style={{ color: 'rgba(232,67,90,0.18)' }}>le</span>
        </h2>
      </div>

      {/* ── Post grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article key={i} className="flex flex-col">

            {/* Image + date badge */}
            <div className="relative mb-4">
              <div className="w-full rounded-xl overflow-hidden" style={{ height: 'clamp(200px, 22vw, 280px)' }}>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Red date badge — bottom-left, overlaps image */}
              <div
                className="absolute bottom-0 left-5 flex flex-col items-center justify-center"
                style={{
                  background: '#e8435a',
                  width: 52,
                  height: 52,
                  borderRadius: 4,
                  transform: 'translateY(50%)',
                  zIndex: 10,
                }}
              >
                <span className="text-white font-black leading-none" style={{ fontSize: '1.15rem' }}>
                  {post.day}
                </span>
                <span className="text-white font-semibold leading-none" style={{ fontSize: '0.55rem', letterSpacing: '0.08em' }}>
                  {post.month}
                </span>
              </div>
            </div>

            {/* Meta row — offset for the badge overlap */}
            <div className="flex items-center gap-4 mt-6 mb-3 pl-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {/* Author */}
              <div className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span className="text-xs">{post.author}</span>
              </div>
              {/* Category */}
              <div className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                </svg>
                <span className="text-xs">{post.category}</span>
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-white font-bold leading-snug mb-3"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)' }}
            >
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-xs leading-relaxed flex-1 mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {post.excerpt}
            </p>

            {/* Read more */}
            <div
              className="flex items-center gap-2 pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#e8435a' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
              <a
                href="#"
                className="text-white text-xs font-semibold tracking-widest uppercase hover:text-[#e8435a] transition-colors"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
