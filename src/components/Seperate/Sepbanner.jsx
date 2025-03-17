

export default function Sepbanner(props) {


    return (
        <div className="font-sans">

            <div className="relative h-[500px] md:h-[400px] lg:h-[300px] w-full rounded-b-2xl">
                <img src={props.bannerImg} alt="Wedding Photography" className="w-full  h-[500px] md:h-[400px] lg:h-[300px]  object-cover rounded-b-2xl" />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 md:p-8 text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center md:text-left">{props.title}</h1>
                </div>
            </div>



        </div>
    );
}
