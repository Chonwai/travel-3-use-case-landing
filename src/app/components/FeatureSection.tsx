// src/app/components/FeatureSection.tsx
export default function FeatureSection() {
    return (
        <div className="py-10 flex flex-col items-center space-y-10 bg-gradient-to-b bg-white">
            <h2 className="text-5xl font-bold mb-8 text-black">Features Section</h2>

            {/* Two rows of feature cards */}
            {[1, 2].map((row) => (
                <div key={row} className="flex justify-between w-5/6 space-x-10">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="bg-white p-4 rounded-lg w-11/12 flex flex-col items-start space-y-4"
                        >
                            <div className="bg-gray-200 w-11/12 h-[153px] rounded-md"></div>
                            <h3 className="text-xl font-bold mb-4 text-black">Title</h3>
                            <p className="text-base text-black">Description</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
