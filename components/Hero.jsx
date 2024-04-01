import Link from "next/link";
import { Button } from "../components/ui/button";
import { Download, Send } from "lucide-react";

import { RiArrowDownSLine, RiBriefcase2Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";



const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex flex-col justify-center max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Mirah Mea Aguilar</h1>
            {/* <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p> */}
            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 mx-auto xl:m-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me
                  <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
  
          {/* Image */}
          <div className='hidden xl:flex relative'>
          {/* badge 1 */}
          <Badge 
          containerStyles='absolute top-[24%] -left-[5rem]'
          icon={<RiBriefcase2Fill />} 
          endCountNum={3}
          endCountText='3rd'
          badgeText='Year College'
          />
          {/* badge 2 */}
          <Badge 
          containerStyles='absolute top-[80%] -left-[1rem]'
          icon={<RiTodoFill />} 
          // endCountNum={3}
          endCountText='IT'
          badgeText='Information Technology'
          />
          {/* badge 3 */}
          <Badge 
          containerStyles='absolute top-[55%] -right-8'
          icon={<RiTeamFill />} 
          endCountNum={9}
          endCountText='1'
          badgeText='Finished Project'
          />
          
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top1 -right-2' > </div>
            <DevImg 
            containerStyles='bg-hero_shape w-[509px] h-[470px] bg-no-repeat relative bg-bottom bg-top'
            imgSrc='/hero/developer.png'
            /> 
          </div>
        </div>
        {/* Icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
