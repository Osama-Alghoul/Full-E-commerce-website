import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function EemployeeCard({
  img,
  name,
  position,
}: {
  img: string;
  name: string;
  position: string;
}) {
  return (
    <div className="w-[370px] snap-start flex-shrink-0">
      <div className="bg-secondary h-[430px] pt-12">
        <img src={img} alt={name} className="w-full h-full object-contain"/>
      </div>
      <div>
        <div className="text-[32px] font-medium">{name}</div>
        <div>{position}</div>
        <div className="flex gap-2">
          <a href="https://x.com" target="_blank">
            <Twitter />
          </a>
          <a href="https://instagram.com" target="_blank">
            <Instagram />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
