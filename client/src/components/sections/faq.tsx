import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation(); // Хук для получения переводов

  const faqs = [
    {
      question: t("FAQquestion1"),
      answer: t("FAQanswer1"),
    },
    {
      question: t("FAQquestion2"),
      answer: t("FAQanswer2"),
    },
    {
      question: t("FAQquestion3"),
      answer: t("FAQanswer3"),
    },
    {
      question: t("FAQquestion4"),
      answer: t("FAQanswer4"),
    },
    {
      question: t("FAQquestion5"),
      answer: t("FAQanswer5"),
    },
  ];

  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t("FAQ")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("FAQaboutourservice")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-4">{t("WantToSpeakToTheManager")}</p>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=971585661204', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              {t("ContactonWhatsApp")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}