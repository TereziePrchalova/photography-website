import Image from "next/image"
import PhotographyWeb from "../public/images/design/photographyWeb.jpg"
import PhotographyMockup from "../public/images/design/photographyMockup.png"

export default function PhotographyPage() {
  return (
    <div className="max-w-[1440px] m-auto md:px-8 xl:px-12 xl:mb-6">
      <div className="h1 mb-4 p-6 md:p-0">Photography website</div>
      <div>
        <div className="h-fit">
            <Image
              className="object-contain !relative"
              src={PhotographyWeb}
              alt="Photography web"
              fill
            />
        </div>
          <div className="mb-4">
            <Image
              className="object-contain !relative"
              src={PhotographyMockup}
              alt="Protein structure"
              fill
            />
          </div>
        </div>
      </div>
  )
}