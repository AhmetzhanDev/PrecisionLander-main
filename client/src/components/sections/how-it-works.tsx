import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ContactFormDialog } from "../ui/contact-form-dialog";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { UserPlus, LinkIcon, Settings } from "lucide-react";

export default function HowItWorks() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log("Current language:", i18n.language);
  }, [i18n.language]);

  const steps = [
    {
      number: "1",
      title: t("HWregister"),
      description: t("HWjustfollow"),
      icon: UserPlus,
    },
    {
      number: "2",
      title: t("HWConnect"),
      description: t("HWConnectyourstorer"),
      icon: LinkIcon,
    },
    {
      number: "3",
      title: t("HWSetminmaxprices"),
      description: t("HWProvideminandmaxprices"),
      icon: Settings,
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("HW")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("HWGetstarted")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted hidden md:block" />

          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md relative bg-background">
              <CardContent className="pt-6">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                {/* Description */}
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ContactFormDialog buttonName="Connect my store 3">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {t("HWConnectmystore")}
            </Button>
          </ContactFormDialog>
        </div>
      </div>
    </section>
  );
}