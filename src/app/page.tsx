import Link from "next/link";
import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="relative h-dvh">
//       <Image
//         src="/images/home-img.jpg"
//         alt="Background image"
//         fill
//         className="object-cover object-center"
//         quality={80}
//       />
//       <main className="relative flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
//         <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
//           <h1 className="text-4xl font-bold">
//             Said&apos;s Computer
//             <br />
//             Repair Shop
//           </h1>
//           <address>987654 Grambacher Strasse, 12345 Berlin</address>
//           <p>Open daily from 9:00 to 18:00</p>
//           <Link href="tel:123456789123" className="hover:underline">
//             123-456-789123
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="relative h-dvh bg-black bg-home-img bg-cover bg-center">
      <main className="relative flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/80 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Said&apos;s Computer
            <br />
            Repair Shop
          </h1>
          <address>987654 Grambacher Strasse, 12345 Berlin</address>
          <p>Open daily from 9:00 to 18:00</p>
          <Link href="tel:123456789123" className="hover:underline">
            123-456-789123
          </Link>
        </div>
      </main>
    </div>
  );
}
