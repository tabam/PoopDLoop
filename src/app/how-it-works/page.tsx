import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "How It Works | POOP D LOOP",
  description:
    "Learn how the POOP D LOOP hands-free animal waste collection system works. Simple, hygienic, and effective.",
};

export default function HowItWorksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How POOP D LOOP Works
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The revolutionary hands-free animal waste collection system. Simple to
          use, hygienic, and designed for real-world pet ownership.
        </p>
      </div>

      {/* Technical Diagram Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Precision Engineered Design
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      8.0&quot; Outer Diameter
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Optimal size for easy handling and waste collection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      5.0&quot; Inner Opening
                    </h3>
                    <p className="text-gray-300 text-sm">
                      1.5&quot; rim width provides stable bag attachment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Elastic Band Groove
                    </h3>
                    <p className="text-gray-300 text-sm">
                      0.125&quot; wide × 0.250&quot; deep channel secures bags
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      4 Semi-Circular Notches
                    </h3>
                    <p className="text-gray-300 text-sm">
                      At 90° intervals for easy bag installation & removal
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Symmetrical Design
                    </h3>
                    <p className="text-gray-300 text-sm">
                      0.25&quot; thick - works from either side, no wrong way
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-4">
                <Image
                  src="/images/products/poop-d-loop-diagram.png"
                  alt="POOP D LOOP Technical Diagram"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Simple 4-Step Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Attach Bag",
              description:
                "Stretch the elastic-banded bag opening over the hoop. The elastic snaps securely into the groove. Use the notches for easy finger access.",
              color: "bg-orange-500",
            },
            {
              step: 2,
              title: "Position Hoop",
              description:
                "When your pet begins to squat, quickly place the hoop underneath or behind them. The bright color makes it easy to position.",
              color: "bg-yellow-500",
            },
            {
              step: 3,
              title: "Collect Waste",
              description:
                "Waste falls directly into the bag. No bending, no touching. Leave the hoop as a visible marker if you need to return later.",
              color: "bg-pink-500",
            },
            {
              step: 4,
              title: "Seal & Dispose",
              description:
                "Use the notches to access the elastic band. Pull the bag off - the elastic automatically cinches the bag closed. Dispose hygienically.",
              color: "bg-blue-500",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div
                className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-2xl font-bold text-white">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deferred Collection Section */}
      <section className="mb-20 bg-purple-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Visible Marker Technology
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Can&apos;t collect immediately? No problem. POOP D LOOP doubles as a
            location marker.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Multi-Dog Walks
              </h3>
              <p className="text-gray-600 text-sm">
                Walking multiple dogs? Place the hoop, maintain control of all
                leashes, and return to collect when convenient.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Training Sessions
              </h3>
              <p className="text-gray-600 text-sm">
                Don&apos;t interrupt your puppy&apos;s training. Mark the spot
                with the bright hoop and collect after the session.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                High-Visibility Colors
              </h3>
              <p className="text-gray-600 text-sm">
                Fluorescent colors visible from 50-100 feet. Use different
                colors to mark multiple locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ecosystem Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          The Complete POOP D LOOP Ecosystem
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          POOP D LOOP is more than just a hoop. It&apos;s a complete waste
          management system designed to work together.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🔵</div>
            <h3 className="font-semibold text-gray-900 mb-2">POOP D LOOP</h3>
            <p className="text-gray-600 text-sm mb-4">
              The core hands-free collection hoop. Available in 5 vibrant
              colors.
            </p>
            <p className="text-purple-600 font-semibold">From $19.99</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🧹</div>
            <h3 className="font-semibold text-gray-900 mb-2">SCOOP D POOP</h3>
            <p className="text-gray-600 text-sm mb-4">
              Backup scooper for missed or pre-existing waste. 30&quot; handle.
            </p>
            <p className="text-purple-600 font-semibold">From $14.99</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🗑️</div>
            <h3 className="font-semibold text-gray-900 mb-2">COUP D POOP</h3>
            <p className="text-gray-600 text-sm mb-4">
              Odor-blocking storage container with carbon filter system.
            </p>
            <p className="text-purple-600 font-semibold">From $49.99</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">📦</div>
            <h3 className="font-semibold text-gray-900 mb-2">HOOP D LOOP</h3>
            <p className="text-gray-600 text-sm mb-4">
              Storage rack keeps hoops organized and ready to grab.
            </p>
            <p className="text-purple-600 font-semibold">From $24.99</p>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Technical Specifications
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-6 py-4 text-left">Specification</th>
                <th className="px-6 py-4 text-left">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium">Outer Diameter</td>
                <td className="px-6 py-4">8.0 inches</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Inner Diameter</td>
                <td className="px-6 py-4">5.0 inches</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Rim Width</td>
                <td className="px-6 py-4">1.5 inches</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Thickness</td>
                <td className="px-6 py-4">0.25 inches</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Elastic Groove Width</td>
                <td className="px-6 py-4">0.125 inches</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Elastic Groove Depth</td>
                <td className="px-6 py-4">0.250 inches</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Number of Notches</td>
                <td className="px-6 py-4">4 (at 90° intervals)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">Material</td>
                <td className="px-6 py-4">
                  Injection-molded plastic (PP/HDPE/ABS)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Colors Available</td>
                <td className="px-6 py-4">
                  Fluorescent Orange, Yellow, Pink, Blue, Red
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium">UV Resistance</td>
                <td className="px-6 py-4">Yes - pigments throughout</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Visibility Range</td>
                <td className="px-6 py-4">50-100+ feet</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get in the Loop?
        </h2>
        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of pet owners who have made waste collection hands-free
          and hassle-free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/products?category=Bundles"
            className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors"
          >
            View Bundles
          </Link>
        </div>
      </section>
    </div>
  );
}
