export default function ProductsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="h-8 w-48 skeleton rounded" />
        <div className="h-4 w-64 skeleton rounded mt-2" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Skeleton */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-6">
            <div className="h-4 w-20 skeleton rounded" />
            <div className="h-10 skeleton rounded" />
            <div className="h-4 w-24 skeleton rounded" />
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 skeleton rounded" />
              ))}
            </div>
          </div>
        </aside>

        {/* Products Grid Skeleton */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="aspect-square skeleton" />
                <div className="p-4 space-y-3">
                  <div className="h-3 w-16 skeleton rounded" />
                  <div className="h-5 w-full skeleton rounded" />
                  <div className="h-4 w-3/4 skeleton rounded" />
                  <div className="h-6 w-20 skeleton rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
