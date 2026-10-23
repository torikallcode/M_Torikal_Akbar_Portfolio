const marqueeText =
  '— Web developer — Web developer — Web developer — Web developer — Web developer — Web developer'

export default function Marquee() {
  return (
    <div
      className="flex w-full justify-start overflow-hidden bg-hitam py-3"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee will-change-transform">
        {[0, 1].map((copy) => (
          <h2
            key={copy}
            className="whitespace-nowrap pr-2 font-archivo text-2xl font-extralight uppercase tracking-wide text-putih"
          >
            {marqueeText}
          </h2>
        ))}
      </div>
    </div>
  )
}
