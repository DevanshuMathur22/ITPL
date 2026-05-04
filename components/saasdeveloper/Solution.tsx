export default function SolutionsGrid() {
  const data = [
    {
      title: "SaaS App Design and Prototype",
      desc: "A design-led approach to developing SaaS software is the cornerstone to offering a genuine user-first experience. Allow our team to help you crystallize your vision through in-depth research, establishing both the functional and aesthetic aspects to maximize your business value. Together, we will breathe life into your app designs with a seamless execution of operations.",
    },
    {
      title: "SaaS Platform Migration",
      desc: "Whether you’re looking to shift from legacy systems to the cloud or customize your existing cloud infrastructure, our adept team has the expertise to handle the migration process with precision. Data migration, cloud architecture design, app modernization, or end-to-end support as a leading custom SaaS app development provider we’ve got you covered. Embrace the power of SaaS services and take your enterprise to the next level with our migration services.",
    },
    {
      title: "SaaS UI & UX",
      desc: "Get exceptional designs and experiences with our expertly designed user flows, wireframes, and intuitive interfaces. We offer a collection of handpicked designs that exhibit the best-in-class UI/UX. Visual identity and interactive prototypes our goal is to promote user-oriented designs with easy-to-navigate dashboards. Our process of custom SaaS app development ensures the final product reflects an aesthetic appeal.",
    },
    {
      title: "SaaS Application and Development",
      desc: "No extra installations, affordable maintenance, and easy updates - get custom SaaS app development that users appreciate. Additionally, leverage the pay-as-you-go model with easy access to the required functionality. Visually appealing, bug-free, personalized, scalable, and secure apps for any platform with expert guidance. Our team focuses on reliable infrastructure and smooth integration with uncompromised security in deployment.",
    },
   
  ]

  return (
    <section className="py-20 bg-gradient-to-t from-[#d8d8ea] to-[#f7dcdc]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-black font-semibold">
           SaaS Development Services
          </h2>
          <p className="mt-4 text-gray-900 max-w-2xl mx-auto">
           Turn your ideas into working software, we’re a SaaS application development company with the top 1% of tech talents in the industry to provide the highest level of SaaS solutions. Connect with us now and get a working strategy that fits your vision, budget, and business goals.
          </p>
        </div>

        {/* 🔥 GRID 2 CARDS */}
        <div className="grid md:grid-cols-2 gap-12">

          {data.map((item, i) => (
            <div key={i} className="flex gap-4">

              {/* RED BAR */}
              <div className="w-1 bg-red-600 rounded-full" />

              {/* CONTENT */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-3  leading-relaxed text-gray-900">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}