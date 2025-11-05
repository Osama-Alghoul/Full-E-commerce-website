import { Phone, Mail } from "lucide-react";

export default function Info() {
  return (
    <div className="shadow-[0_1px_13px_0px_#0000000D] p-9 flex flex-col gap-8 max-w-xl">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="bg-primary rounded-full p-2.5">
            <Phone className="text-white" />
          </span>
          Call To Us
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="bg-primary rounded-full p-2.5">
            <Mail className="text-white" />
          </span>
          Write To US
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
    </div>
  );
}
