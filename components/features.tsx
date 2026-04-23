"use client"

import { motion } from "framer-motion"

const benefits = [
  {
    title: "Mengatasi Perut yang Kembung dan Begah",
    paragraphs: [
      "Perut kembung setelah naik motor atau kehujanan? Jangan khawatir, Sido Muncul Jamu TOLAK ANGIN siap jadi penyelamat Anda!",
      "Dengan efek karminatifnya, jahe di dalam jamu ini akan bekerja secara efektif mengusir gas-gas yang membuat perut Anda kembung dan begah.[1] Perut Anda akan terasa lebih nyaman!",
    ],
  },
  {
    title: "Meredakan Rasa Mual",
    paragraphs: [
      "Bersamaan dengan perut yang kembung dan begah, Anda mungkin juga akan merasakan mual karena gas yang menekan organ-organ di perut. Mengatasi hal ini, secangkir Jamu TOLAK ANGIN yang hangat akan membantu Anda mengusir rasa mual ini.",
      "Dengan kandungan daun mint yang memiliki minyak atsiri, jamu ini akan meredakan rasa mual sekaligus memblok reflek untuk muntah.[2]",
    ],
  },
  {
    title: "Menurunkan Demam",
    paragraphs: [
      "Jahe dalam jamu ini memiliki peran penting dalam mendukung kesehatan Anda. Rempah ini merangsang produksi keringat yang sehat, yang membantu menurunkan suhu tubuh yang tinggi akibat demam.[3]",
      "Selain itu, jahe juga bekerja untuk mempercepat proses pemulihan, membuat tubuh Anda kembali bugar secara bertahap.",
    ],
  },
  {
    title: "Meredakan Tenggorokan yang Meradang",
    paragraphs: [
      "Sido Muncul Jamu TOLAK ANGIN serbuk juga dapat mengatasi tenggorokan yang sedang radang.",
      "Salah satu kandungan utamanya, yakni jahe, memiliki sifat antibakteri yang mampu melawan Streptococcus Pyogenes, bakteri yang sering menjadi penyebab utama radang tenggorokan.[4] Tenggorokan Anda akan kembali nyaman dan bebas dari rasa sakit yang mengganggu.",
    ],
  },
  {
    title: "Meredakan Batuk dan Pilek",
    paragraphs: [
      "Kandungan buah adas dalam jamu ini menawarkan manfaat untuk meredakan batuk dan pilek.",
      "Efek mukolitik dari buah adas bekerja mengencerkan lendir yang menumpuk di saluran pernapasan.[5] Anda dapat bernapas dengan lebih lega tanpa hidung yang tersumbat akibat pilek atau tenggorokkan yang gatal akibat batuk berdahak.",
    ],
  },
  {
    title: "Mengurangi Rasa Pusing",
    paragraphs: [
      "Mengandalkan khasiat daun cengkeh dalam komposisinya, jamu ini dapat meredakan rasa pusing, memberikan kelegaan pada kepala Anda.",
      "Daun cengkeh mengandung flavonoid yang memiliki sifat analgesik. Melalui sifat ini, flavonoid mampu meredakan berbagai rasa sakit di tubuh, termasuk sakit kepala dan pusing, sehingga membantu kepala Anda terasa lebih ringan dan kembali nyaman.[6][7]",
    ],
  },
  {
    title: "Meningkatkan Ketahanan Fisik",
    paragraphs: [
      "Selain beberapa manfaat di atas, Sido Muncul Jamu TOLAK ANGIN seduh juga akan membantu meningkatkan imunitas Anda.",
      "Gabungan herbal seperti jahe, daun cengkeh, buah adas, dan juga kayu ules bersinergi untuk memperkuat daya tahan tubuh, sehingga Anda lebih kebal terhadap virus dan bakteri penyebab gangguan kesehatan.",
    ],
  },
]

const galleryBenefits = [...benefits, ...benefits]

function excerpt(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }

  return `${text.slice(0, maxLength).trim()}...`
}

export default function FeaturesSection() {
  return (
    <section id="manfaat" className="relative bg-[#143626] px-6 py-28">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="absolute top-0 left-1/2 h-px w-96 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Manfaat
            <span className="ml-3 brand-name">TOLAK ANGIN</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-light leading-relaxed text-white/60">
            Berikut manfaat Jamu <span className="brand-name">TOLAK ANGIN</span> untuk menjaga kenyamanan tubuh dan membantu daya tahan harian.
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#143626] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#143626] to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              className="flex w-max gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
            >
              {galleryBenefits.map((benefit, index) => (
                <article
                  key={`${benefit.title}-${index}`}
                  className="w-[320px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:w-[380px]"
                >
                  <h3 className="mb-3 text-xl font-bold leading-snug text-yellow-300">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    {excerpt(benefit.paragraphs.join(" "), 260)}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
