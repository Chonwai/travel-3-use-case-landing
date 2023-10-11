// src/app/components/Partners.tsx
export default function Partners() {
    return (
        <div className="relative w-full h-[519px] bg-gradient-to-b from-white to-[#F7FAFA] flex flex-col items-center py-10 space-y-[32px]">
            {/* Title */}
            <div className="w-full h-[39px] flex items-center justify-center bg-white rounded-md">
                <h2 className="text-4xl font-bold text-black">Partners</h2>
            </div>

            {/* Partners Grid */}
            <div className="w-5/6 grid grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-gray-200 w-auto h-[153px]"></div>
                ))}
            </div>
        </div>
    );
}
