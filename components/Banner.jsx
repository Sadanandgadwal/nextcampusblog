import Image from "next/image";
import Logo from "../static/logoLight.webp";

const Banner = () => {
  return (
    <div
      className="h-max-[10rem] flex items-center justify-center border-y "
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1011%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M504.6008457473367 238.82472252729303L476.288706815634 140.08856028084273 342.3405329118099 231.92484980162192z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1342.9657759506686 473.3314694978758L1428.4939509227927 421.9409573398278 1291.5752637926205 387.8032945257517z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M670.9315239923276 157.08767776299248L519.457101216419 58.51367164030751 508.4368609237625 216.1104501343586z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1294.023%2c441.994C1310.735%2c442.032%2c1329.119%2c439.01%2c1337.405%2c424.497C1345.644%2c410.064%2c1338.343%2c393.05%2c1330.253%2c378.533C1321.86%2c363.471%2c1311.26%2c347.081%2c1294.023%2c346.645C1276.301%2c346.197%2c1263.071%2c361.112%2c1254.477%2c376.618C1246.197%2c391.558%2c1242.141%2c409.685%2c1250.982%2c424.3C1259.587%2c438.526%2c1277.397%2c441.956%2c1294.023%2c441.994' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1397.1592983668618 59.63993955844245L1298.329341267689 17.689111682768015 1284.8180780037637 186.90946126936427z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1078.145%2c538.852C1105.337%2c538.624%2c1127.538%2c521.191%2c1142.794%2c498.68C1160.79%2c472.126%2c1178.869%2c440.182%2c1164.425%2c411.541C1149.053%2c381.062%2c1112.188%2c367.976%2c1078.145%2c370.492C1047.934%2c372.725%2c1025.315%2c395.914%2c1011.45%2c422.848C998.871%2c447.285%2c997.894%2c475.951%2c1011.593%2c499.779C1025.336%2c523.682%2c1050.574%2c539.083%2c1078.145%2c538.852' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M412.155%2c735.999C467.271%2c736.317%2c500.08%2c679.124%2c523.526%2c629.242C542.98%2c587.852%2c542.595%2c542.317%2c522.5%2c501.234C499.157%2c453.511%2c465.174%2c404.92%2c412.155%2c401.555C354.686%2c397.908%2c299.567%2c433.629%2c274.557%2c485.5C252.015%2c532.252%2c278.001%2c582.477%2c302.989%2c627.969C329.406%2c676.061%2c357.286%2c735.682%2c412.155%2c735.999' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M131.84764926325101 234.53378359936758L146.308494933545 292.53306769658707 226.07699824422724 241.84215714253634z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1263.226%2c175.56C1280.736%2c175.542%2c1297.498%2c166.662%2c1305.774%2c151.231C1313.664%2c136.521%2c1309.416%2c119.272%2c1301.215%2c104.733C1292.834%2c89.874%2c1280.243%2c77.005%2c1263.226%2c75.799C1244.09%2c74.443%2c1224.051%2c81.898%2c1214.609%2c98.597C1205.28%2c115.096%2c1210.402%2c135.294%2c1220.525%2c151.319C1229.894%2c166.15%2c1245.684%2c175.578%2c1263.226%2c175.56' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1011'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
      }}
    >
      <div className="max-w-7xl flex-1 flex items-center justify-between pb-10">
        <div className="space-y-5 px-10 flex-[3]">
          <h1 className="max-w-xl text-[6rem] font-mediumSerif text-orange-300 ">
            Stay Connected.
          </h1>
          <h3 className="text-2xl text-white">
            Discover stories, thinking, and expertise in words.
          </h3>
          <button
            type="button"
            className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
