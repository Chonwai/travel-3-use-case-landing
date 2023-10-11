// src/app/components/Introduction.tsx
export default function Introduction() {
    return (
        <div className="flex flex-col items-center py-20 space-y-24 bg-white">
            <h2 className="font-inter font-bold text-4xl text-black">Introduction</h2>

            <div className="flex flex-col items-center space-y-20">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="flex flex-row justify-between w-full max-w-screen-lg bg-white"
                    >
                        <div className="flex flex-col items-start space-y-4">
                            <h3 className="text-black font-inter font-semibold text-lg">Title</h3>
                            <p className="text-black font-inter text-base max-w-md">
                                DescriptionDescriptionDescriptionDescription
                                DescriptionDescriptionDescriptionDescription
                                DescriptionDescriptionDescriptionDescription
                            </p>
                            <div className="border border-gray-300 box-border w-32 h-10"></div>
                        </div>
                        <div className="bg-gray-200 w-80 h-72"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
