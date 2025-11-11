import { Link } from "react-router";
import SectionTitle from "../../../ui/SectionTitle";

export default function Featured() {
  return (
    <section className="px-3.5 lg:px-0">
      <SectionTitle title="Featured" bigTitle="New Arrival" />
      <main className="p-4 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
            {/* PlayStation 5 - Large Card */}
            <div className="group relative overflow-hidden rounded-lg bg-black md:row-span-2">
              <div className="relative h-[400px] md:h-full px-3.5 pt-3.5">
                <img
                  src="/playstation.png"
                  alt="PlayStation 5"
                  className="object-cover h-full w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                    PlayStation 5
                  </h2>
                  <p className="mb-4 max-w-md text-sm text-gray-300 md:text-base">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <Link
                    to="/products?category=laptops"
                    className="inline-block border-b-2 border-white pb-1 text-sm font-semibold text-white transition-colors hover:border-gray-300 hover:text-gray-300 md:text-base"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Women's Collections */}
            <div className="group relative overflow-hidden rounded-lg bg-black">
              <div className="relative h-[300px]">
                <img
                  src="/woman.png"
                  alt="Women's Collections"
                  className="object-cover h-full w-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                    Women&apos;s Collections
                  </h2>
                  <p className="mb-3 max-w-xs text-sm text-gray-300">
                    Featured woman collections that give you another vibe.
                  </p>
                  <Link
                    to="/products/179"
                    className="inline-block border-b-2 border-white pb-1 text-sm font-semibold text-white transition-colors hover:border-gray-300 hover:text-gray-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Row - Speakers and Perfume */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-start-2">
              {/* Speakers */}
              <div className="group relative overflow-hidden rounded-lg bg-black">
                <div className="relative h-[300px]">
                  <img
                    src="/speakers.png"
                    alt="Speakers"
                    className="object-cover p-2.5"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="mb-2 text-2xl font-bold text-white">
                      Speakers
                    </h2>
                    <p className="mb-3 text-sm text-gray-300">
                      Amazon wireless speakers
                    </p>
                    <Link
                      to="/products/99"
                      className="inline-block border-b-2 border-white pb-1 text-sm font-semibold text-white transition-colors hover:border-gray-300 hover:text-gray-300"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Perfume */}
              <div className="group relative overflow-hidden rounded-lg bg-black">
                <div className="relative h-[300px] p-2.5">
                  <img
                    src="/perfume.png"
                    alt="Perfume"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="mb-2 text-2xl font-bold text-white">
                      Perfume
                    </h2>
                    <p className="mb-3 text-sm text-gray-300">
                      GUCCI INTENSE OUD EDP
                    </p>
                    <Link
                      to="/products/7"
                      className="inline-block border-b-2 border-white pb-1 text-sm font-semibold text-white transition-colors hover:border-gray-300 hover:text-gray-300"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
