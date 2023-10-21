import Image from "next/image";

export const Banner: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Image
        alt="Image Banner"
        className="object-cover object-center"
        height={800}
        src="/banner-3.png"
        layout="responsive"
        width={1920}
      />
    </div>
  );
};