// src/app/components/MainHeading.tsx
export default function MainHeading() {
    return (
        <div className="relative w-full h-[684px] bg-white">
            {/* Header */}
            <div className="relative top-0 left-0 w-full h-[116px] flex justify-between items-center px-16 bg-white z-10">
                <div className="bg-gray-200 w-[204px] h-[60px]"></div>
                <div className="flex space-x-10">
                    <div className="bg-gray-200 w-[129px] h-[48px]"></div>
                    <div className="bg-gray-200 w-[129px] h-[48px]"></div>
                </div>
            </div>

            <div className="relative py-20 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center space-y-[32px]">
                <h1 className="text-6xl font-bold leading-[77px] text-center text-black">
                    A Big Title for Survey + AI
                </h1>
                <p className="text-2xl font-semibold text-center w-full text-black">
                    Build and deploy xxxxxxxxxxxxxxxxxxxx <br />
                    xxxx xxxxx
                </p>
                <div className="flex space-x-10">
                    <div className="bg-gray-200 w-[129px] h-[48px]"></div>
                    <div className="bg-gray-200 w-[129px] h-[48px]"></div>
                </div>
            </div>
        </div>
    );
}
