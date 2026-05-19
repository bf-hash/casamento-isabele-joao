import Image from "next/image";

export default function OrangesDivider() {
  return (
    <div className="ij-oranges-divider">
      <div className="ij-oranges-divider__left">
        <Image
          src="/assets/oranges-divider.png"
          alt=""
          width={322}
          height={373}
          unoptimized
        />
      </div>
      <div className="ij-oranges-divider__right">
        <Image
          src="/assets/oranges-divider.png"
          alt=""
          width={322}
          height={373}
          unoptimized
        />
      </div>
    </div>
  );
}
