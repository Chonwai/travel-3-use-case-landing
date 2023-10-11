// src/app/components/TryItSection.tsx
export default function TryItSection() {
    return (
        <div className="flex flex-col items-center py-20 bg-white">
            <div className="flex flex-col items-start w-4/5 space-y-16">
                <div className="flex flex-col space-y-4 w-full">
                    <h2 className="font-inter font-bold text-4xl text-black">Try it right now</h2>
                    <p className="font-inter text-base text-black">
                        some word for it, some words for it, some words for it
                    </p>
                </div>

                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col space-y-8">
                        {[1, 2].map((i) => (
                            <div
                                key={i}
                                className="flex flex-row items-center space-x-4 bg-white p-4 border border-gray-300 rounded-md"
                            >
                                <div className="bg-gray-200 w-12 h-12"></div>
                                <div className="flex flex-col space-y-2">
                                    <div className="bg-gray-200 w-32 h-4"></div>
                                    <div className="bg-gray-200 w-44 h-3"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-200 w-2/3 h-96"></div>
                </div>
            </div>
        </div>
    );
}
