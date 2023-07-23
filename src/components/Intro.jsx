import { Profile } from '../utils/data'

export default function Intro() {
    return (
        <div 
            class="relative bg-cover bg-center bg-no-repeat py-8"
            style={{backgroundSize:`100%`, backgroundPositionY:`-40px`, backgroundImage: `url("https://scontent.fsub21-1.fna.fbcdn.net/v/t1.6435-9/156440778_1711631632358530_9030613638423905483_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeGejCNTREc8c4ILbTEGmS4qk_oPePmU1SST-g94-ZTVJMeWN1Mw2aGNn3tayUir7ZF_YXCX7ZZNdI9GejTvDAST&_nc_ohc=1GaPBbAjZxMAX_VsRMX&_nc_ht=scontent.fsub21-1.fna&oh=00_AfDOlBebY9uBc9L1wVd5osskhtnkXbUTZsV99qaGBGEeBQ&oe=64E42354")`}}>
            <div
            class="absolute opacity-75 inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"
            ></div>
            <div
                class="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                <div class="flex flex-col items-center justify-center lg:flex-row">
                    <Profile />
                    <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                        <h1 class="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                        Hello, I'm Irvan Pratama Putra!
                        </h1>
                        <p class="font-body py-4 text-lg text-justify uppercase text-white">
                        </p>
                        <div class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}