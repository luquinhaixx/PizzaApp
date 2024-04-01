import Image from "next/image";
import MenuItem from "../menu/MenuItem";
export default function HomeMenu() {
    return (
        <section>
            <div className="absolute h-full left-0 right-0">
                <div className="absolute -top-[70px] left-0 -z-10">
                    <Image src={'/sallad1.png'} width={'109'} height={'189'} alt={'sallad'} />
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={'107'} height={'195'} alt={'sallad'} />
                </div>
            </div>
            <div className="text-center mb-4">
                <h3 className="uppercase text-gray-600 font-semibold leading-4">
                    Check out
                </h3>
                <h2 className="text-primary font-bold text-4xl italic">
                    Menu
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                OLa meu nome é Lucas!
            </div>
        </section>
    )
}