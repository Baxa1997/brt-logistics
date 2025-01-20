import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function QuestionsSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-justify md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl mb-8">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold">
                  What is a CDL temp agency?
                </AccordionTrigger>
                <AccordionContent>
                  A CDL temp agency provides temporary commercial drivers for
                  various transportation needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold">
                  What does a CDL temp agency do?
                </AccordionTrigger>
                <AccordionContent>
                  A CDL temp agency connects qualified commercial drivers with
                  companies needing temporary driving services.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold">
                  What is BRT Logistics, and what do you specialize in?
                </AccordionTrigger>
                <AccordionContent>
                  BRT LOgistics specializes in providing high-quality staffing
                  solutions for the trucking industry.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold">
                  How can I apply for a CDL job through BRT Logistics?
                </AccordionTrigger>
                <AccordionContent>
                  You can apply for a CDL job through our website or contact our
                  team for more information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="font-bold">
                  What types of trucking jobs do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of trucking jobs, including local,
                  regional, and long-haul positions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger className="font-bold">
                  What qualifications do I need to work with BRT Logistics?
                </AccordionTrigger>
                <AccordionContent>
                  You need a valid CDL license and meet specific company
                  requirements to work with BRT Logistics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="font-bold">
                  How does the placement process work?
                </AccordionTrigger>
                <AccordionContent>
                  Our placement process involves matching your skills and
                  experience with suitable job opportunities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="font-bold">
                  Do you provide training or orientation for new hires?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide training and orientation to ensure new hires
                  are prepared for their roles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="font-bold">
                  What benefits can I expect when working with BRT Logistics?
                </AccordionTrigger>
                <AccordionContent>
                  Benefits may include competitive pay, flexible schedules, and
                  access to a wide range of job opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsSection;
