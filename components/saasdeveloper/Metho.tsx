export default function Metho() {
  return (
    <section className="py-24 bg-[#dadade]">

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* 🔵 CENTER CIRCLE */}
        <div className="
          mx-auto
          w-[320px] h-[320px] md:w-[420px] md:h-[420px]
          rounded-full
          bg-[#eaf2f7]
          border-2 border-dashed border-blue-300
          flex items-center justify-center
          text-center
          px-6
        ">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Our SaaS Products Development Process
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
            Adapt to the ever-changing reality of SaaS. With our SaaS application development services, you’ll always be able to align with your users’ demands.
            </p>
          </div>
        </div>

        {/* 🔵 TOP LEFT */}
        <div className="absolute left-0 top-0 max-w-xs text-center md:text-left">
          <h3 className="text-xl text-red-600 font-semibold">Discovery Phase</h3>
          <p className="mt-2 text-gray-800 text-sm">
            Our analysis team will help to analyze, define, and write down the
value proposition of your Saas application and functional core:
• Detailed product vision
• Competitor and domain analysis
• Requirement description & prioritization
• Tech stack selection and advice

          </p>
        </div>

        {/* 🔵 TOP RIGHT */}
        <div className="absolute right-0 top-0 max-w-xs text-center md:text-right">
          <h3 className="text-xl text-green-800 font-semibold">SUI/UX Design</h3>
          <p className="mt-2 text-gray-600 text-sm">
           Well-ordered Ul and UX is the shortest way to customers' loyalty. Our team at APPNWEB, a Saas solution provider will use the best
practices to create an efficient user flow:
• Information architecture
• Research and analysis
• User experience design
• User interface design
          </p>
        </div>

        {/* 🔵 BOTTOM LEFT */}
        <div className="absolute left-0 bottom-0 max-w-xs text-center md:text-left">
          <h3 className="text-xl text-emerald-500 font-semibold">Architecture Design
and Programming</h3>
          <p className="mt-2 text-gray-600 text-sm">
           When designing custom Saas app development our priority is to
ensure high load and easy scalability of the system for the future.
• Single and multi-tenancy architecture
• Cloud platforms deployment
• Performance optimization|
• Data backups
• API development and integration
• Cloud computing deployment
          </p>
        </div>

        {/* 🔵 BOTTOM RIGHT */}
        <div className="absolute right-0 bottom-0 max-w-xs text-center md:text-right">
          <h3 className="text-xl text-amber-500 font-semibold">Testing and QA</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Our team follows a comprehensive quality assurance approach.
in the development of Saas applications:
• Unit tests
• Code review
• Performance testing
• Load speed testing
• HIPAA & GDPR tests
            </p>
        </div>

      </div>

    </section>
  )
}