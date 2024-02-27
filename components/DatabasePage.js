import Image from "next/image"
import DatabaseWeb from "../public/images/design/databaseWeb.jpg"
import DatabaseMockup from "../public/images/design/databaseMockup.png"

export default function DatabasePage() {
  return (
    <div className="max-w-[1440px] m-auto md:px-8 xl:px-12 xl:mb-6">
      <div className="h1 mb-4 p-6 md:p-0">Database website</div>
      <div>
        <div className="h-fit">
            <Image
              className="object-contain !relative"
              src={DatabaseWeb}
              alt="Poster"
              fill
            />
        </div>
          <div className="mb-4">
            <Image
              className="object-contain !relative"
              src={DatabaseMockup}
              alt="Protein structure"
              fill
            />
          </div>
        </div>
      </div>
  )
}


