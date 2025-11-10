import { ArrowLeftRightIcon, Truck } from "lucide-react";
import Breadcrumbs from "../../ui/BreadCrumb";

export default function Loading() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
        ]}
      />
      <section className="px-6 lg:px-32 m-auto pb-36">
        <div className="md:pb-36 pb-20">
          <div className="flex xl:flex-row flex-col justify-between md:gap-[70px] gap-9">
            {/* Product Image and Side Images Skeleton (Left Column) */}
            <div className="flex gap-4 flex-2/3">
              <div className="flex-3/4">
                <div className="md:w-[500px] w-full h-[500px] bg-gray-200 flex justify-center items-center animate-pulse">
                  {/* Main Image Placeholder */}
                </div>
              </div>
              {/* You might also want side images placeholders here if your actual component has them */}
            </div>

            {/* Product Details Skeleton (Right Column) */}
            <div className="flex flex-col gap-5 flex-1">
              {/* Title Skeleton */}
              <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse"></div>

              {/* Ratings and Stock Skeleton */}
              <div className="flex gap-4 items-center">
                {/* Ratings Placeholder */}
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                <span className="opacity-50">|</span>
                {/* Stock Status Placeholder */}
                <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Price Skeleton */}
              <div className="h-7 w-1/4 bg-gray-200 rounded animate-pulse"></div>

              {/* Description Skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse"></div>
              </div>

              <hr className="bg-gray-200 h-px border-0" />

              {/* Colors Skeleton */}
              <div className="flex gap-6 items-center">
                <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>{" "}
                {/* "Colors:" text */}
                <div className="flex gap-2">
                  <div className="size-6 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="size-6 rounded-full bg-gray-200 animate-pulse"></div>
                </div>
              </div>

              {/* Sizes Skeleton */}
              <div className="flex gap-6 items-center">
                <div className="h-5 w-14 bg-gray-200 rounded animate-pulse"></div>{" "}
                {/* "Sizes:" text */}
                <div className="flex gap-4">
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Action Buttons Skeleton */}
              <div className="flex gap-4">
                <div className="h-10 w-28 bg-gray-200 rounded animate-pulse"></div>{" "}
                {/* Buy Now/Add to Cart Button */}
                <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>{" "}
                {/* Wishlist Button */}
              </div>

              {/* Delivery/Return Info Skeleton */}
              <div className="rounded-sm border border-gray-400">
                <div className="flex gap-4 items-center p-4">
                  <Truck className="size-10 text-gray-400" />
                  <div>
                    <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-48 mt-1 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <hr className="text-gray-400" />
                <div className="flex gap-4 items-center p-4">
                  <ArrowLeftRightIcon className="size-10 text-gray-400" />
                  <div>
                    <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-48 mt-1 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items Section Skeleton */}
        <div>
          {/* Section Title Skeleton */}
          <div className="h-8 w-48 mb-8 bg-gray-200 rounded animate-pulse"></div>

          {/* Product Card Skeletons */}
          <div className="flex justify-around pt-12 flex-wrap md:gap-0 gap-6">
            {[...Array(4)].map(
              (
                _,
                index // Show 4 placeholders for related products
              ) => (
                <div key={index} className="w-[270px] space-y-3">
                  <div className="h-[250px] w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
