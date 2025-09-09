import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Info, Rocket } from "lucide-react"
import Link from "next/link"

export function PricingCard({data}) {

  // Lite, Plus, Premium, Professional, Elite
  return (
    <Card
      className="w-full h-full overflow-hidden  max-w-sm relative bg-white/30 border border-[#d4e1ff] shadow-[1px_3px_11px_0px_#dbe6ff] backdrop-blur-[12px] rounded-[36px] p-[30px]"
    >
      <span className="size-[600px] block rounded-full absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2  pointer-events-none" style={{background:"radial-gradient(#3c7fe663 0%, #ecf1ff00 60%)"}} aria-hidden="true"></span>

      {/* Header with icon and popular badge */}
      <div className="flex items-start justify-between mb-4">
        {/* <div className="w-12 h-12 bg-[#2463eb] rounded-full flex items-center justify-center">
          {data?.type === "Lite" && <Rocket className="w-6 h-6 text-white" />}
          {data?.type === "Plus" && <Check className="w-6 h-6 text-white" />}
          {data?.type === "Premium" && <Info className="w-6 h-6 text-white" />}
          {data?.type === "Professional" && <span className="w-6 h-6 text-white font-bold text-lg flex items-center justify-center">P</span>}
          {data?.type === "Elite" && <span className="w-6 h-6 text-white font-bold text-lg flex items-center justify-center">E</span>}
        </div> */}
        {/* <div className="bg-[#2463eb] hover:bg-green-600 text-white px-3 py-1 text-xs font-medium">POPULAR</div> */}
      </div>

      {/* Plan title and description */}
      <div className="mb-1">
        <h3 className="text-sm uppercase tracking-wider font-bold text-[#2463eb] mb-1 text-center">{data?.type}</h3>
        {data?.description&& <p className="text-gray-600 text-sm text-center">{data?.description}</p>}
      </div>

      {/* Pricing */}
      <div className="mb-6 text-center">
        <div className="text-4xl font-bold text-gray-900 mb-1">{data?.price}<span className="text-gray-500 text-sm">AED</span></div>
        <div className="text-gray-600 text-sm">/{data?.title}</div>
      </div>

      {/* CTA Button */}
      <Button className="w-full bg-[#2463eb]  text-white font-medium py-4 rounded-xl mb-6">
      <Link
                href="https://calladoc.okadoc.com/en-ae/search/result"
                target="_blank"
             
              >
                Book Now
              </Link>
      </Button>

      {/* Features section */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Features</h4>
        <div className="space-y-3">
          {data?.items.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#2463eb] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm flex-1">{feature.title}</span>
              {/* {feature.hasInfo && <Info className="w-4 h-4 text-gray-400 flex-shrink-0" />} */}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
