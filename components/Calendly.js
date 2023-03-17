import { InlineWidget } from "react-calendly";

export default function Calendly() {
    return (
      <div>
        <div className="mt-8 sm:hidden">
          <InlineWidget styles={{height: '900px'}} url="https://calendly.com/terezieprchalova/wedding-consultation?primary_color=e198c2" />
        </div>
        <div className="hidden -mt-4 sm:block 2md:hidden">
          <InlineWidget styles={{height: '950px'}} url="https://calendly.com/terezieprchalova/wedding-consultation?primary_color=e198c2" />
        </div>
        <div className="hidden -mt-4 2md:block">
          <InlineWidget styles={{height: '850px'}} url="https://calendly.com/terezieprchalova/wedding-consultation?primary_color=e198c2" />
        </div>
      </div>
    )
  }