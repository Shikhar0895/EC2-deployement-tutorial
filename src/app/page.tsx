import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import HeroBlur from "@/components/ui/HeroBlur";

export default function Home() {
  return (
    <div>
      {/* <p className="font-poppins text-4xl ">This is Poppins</p>
      <hr />
      <p className="font-roboto text-4xl font-[700]">This is Roboto 700</p>
      <hr />
      <p className="font-roboto text-4xl font-[300]">This is Roboto 300</p>
      <hr />
      <p className="font-roboto text-4xl font-[400]">This is Roboto 400</p>
      <hr />
      <p className="font-heebo text-4xl font-[500]">This is Heebo</p>
      <hr />
      <p className="font-roboto text-4xl font-[700]">This is roboto Heading</p> */}

      <Navbar />
      <HeroSection />
    </div>
  );
}
