import Image from "next/image"
import AccountingWeb from "../public/images/design/accountingWeb.jpg"
import AccountingMockup from "../public/images/design/accountingWebMockup.png"

export default function AccountingPage() {
  return (
    <div className="max-w-[1440px] m-auto md:px-8 xl:px-12 xl:mb-6">
      <div className="h1 mb-4 p-6 md:p-0">Accounting website</div>
      <div>
        <div className="h-fit">
            <Image
              className="object-contain !relative"
              src={AccountingWeb}
              alt="Poster"
              fill
            />
        </div>
          <div className="mb-4">
            <Image
              className="object-contain !relative"
              src={AccountingMockup}
              alt="Protein structure"
              fill
            />
          </div>
        </div>
      </div>
  )
}


