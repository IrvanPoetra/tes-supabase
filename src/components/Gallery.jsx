import SimpleImageSlider from "react-simple-image-slider";
import { SliderData } from "../utils/data";

export default function Gallery() {
    return (
        <div class="py-16 bg-center bg-no-repeat backdrop-blur md:py-28 bg-cover" id="gallery"
        style={{backgroundImage: `url("https://scontent.fsub21-1.fna.fbcdn.net/v/t39.30808-6/262995825_1919567764898248_34248339514301346_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH04LdjxTGz4hEUQYprrTGcpRght3tRFiqlGCG3e1EWKl_awQt3MaXH9yufX3Vua8sHDfoz8MFSo_VS4jYjQJSm&_nc_ohc=LHj-EaDpPLEAX9D1JW_&_nc_ht=scontent.fsub21-1.fna&oh=00_AfD3uTXlEHFdKh5lJHMs-2cNVKy6SsseMAOiLjnTn6wvrg&oe=64C0F0A0")`}}
        >
            <div
            class="absolute opacity-40 inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"
            ></div>
            <div
                class="container relative z-30 ">
                <h2
                    class="text-center font-header text-4xl font-semibold uppercase text-grey drop-shadow-lg sm:text-5xl lg:text-6xl"
                >
                    Check out my Gallery
                </h2>
                <h3
                    class="pt-6 text-center font-header text-xl font-medium text-white drop-shadow-lg sm:text-2xl lg:text-3xl"
                >
                    Here's some of my shoots
                </h3>

                <div
                    class="flex justify-center pt-12 py-2"
                >
                    <SimpleImageSlider
                        width={960}
                        height={480}
                        images={SliderData}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </div>   
        </div>
    )
}