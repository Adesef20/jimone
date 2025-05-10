'use client';

import { Accordion, AccordionItem } from "@/Components/ui/Accordion";


export default function Faq() {
  return (
    <section className="p-2 shadow-lg bg-slate-200 rounded-lg items-center flex flex-col justify-center">
      <h1 className="text-center font-bold text-3xl text-gray-800 mb-4">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-lg p-4">
        {/* Removed selectionMode to prevent DOM error */}
        <Accordion>
          <AccordionItem key="1" title="What types of car do you sell?">
            We sell a wide range of vehicles: sedans, SUVs, trucks, and luxury cars.
          </AccordionItem>

          <AccordionItem key="2" title="Can I trade in my old car?">
            Absolutely! We offer trade-in options and provide a fair evaluation for your vehicle.
          </AccordionItem>

          <AccordionItem key="3" title="Do you offer a warranty on purchases?">
            Yes, all our cars come with a warranty to ensure quality and customer satisfaction.
          </AccordionItem>

          <AccordionItem key="4" title="How can I book a test drive?">
            Simply contact us or visit our showroom to schedule a test drive at your convenience.
          </AccordionItem>

          <AccordionItem key="5" title="Do you offer financing options?">
            Yes, we provide flexible financing options tailored to your budget.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
