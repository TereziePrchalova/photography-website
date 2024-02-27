import Image from "next/image"
import ConferencePosterMockup from "../public/images/design/flyerMockup.jpg"
import ConferencePoster from "../public/images/design/conferencePoster.jpg"
import ProteinStructure from "../public/images/design/proteinStructure.jpg"
import ProteinSequence from "../public/images/design/ProteinSequence.jpg"

export default function ConferencePage() {
  return (
    <div className="max-w-[1440px] m-auto md:px-8 xl:px-12 xl:mb-6">
      <div className="h1 mb-4 p-6 md:p-0">Conference poster</div>
      <div className="lg:flex">
        <div className="w-full mb-4 lg:w-[55%] h-fit mr-4">
          <div className="mb-4">
            <Image
              className="object-contain !relative"
              src={ConferencePosterMockup}
              alt="Poster"
              fill
            />
          </div>
          <div>
            <Image
              className="object-contain !relative"
              src={ConferencePoster}
              alt="Poster"
              fill
            />
          </div>
        </div>
        <div className="w-full lg:w-[45%]">
          <div className="mb-4">
            <Image
              className="object-contain !relative"
              src={ProteinStructure}
              alt="Protein structure"
              fill
            />
          </div>
          <div className="bg-yellow p-4 mb-4">
            <p className="text-green font-PoppinsMedium">
              This poster was made for the upcoming conference, which should contribute to making molecular biophysics more FAIR (findable, accessible, interoperable, reusable).
            </p>
            <p className="text-green font-PoppinsMedium mt-2">
              Illustrations made by Jakub Svoboda
            </p>
          </div>
          <div>
            <Image
              className="object-contain !relative"
              src={ProteinSequence}
              alt="Protein sequence"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}


