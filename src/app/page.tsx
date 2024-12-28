
import AuthorCard from "@/components/AuthorCard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <Feature/>
    <Mega/>
    <AuthorCard/>
    <Footer/>
   </div>
  );
}
