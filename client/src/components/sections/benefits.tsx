import { useTranslation } from "react-i18next";
import { IPhoneFrame } from "../ui/iphone-frame";
import { ContactFormDialog } from "../ui/contact-form-dialog";
import { Card, CardContent } from "../ui/card";
import { BarChart3, Bell, HeadphonesIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Benefits() {
  const { t, i18n } = useTranslation();

  const benefits = [
    {
      title: t("personalNotifications"),
      description: t("receiveCriticalNotifications"),
      icon: Bell,
    },
    {
      title: t("support24x7"),
      description: t("personalManagerHelp"),
      icon: HeadphonesIcon,
    },
    {
      title: t("analytics"),
      description: t("exploreAnalytics"),
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl" id="features">
            {t("keybenefits")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("everythingyouneed")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ContactFormDialog buttonName="Connect my store 2">
            <Button size="lg">{t("connectmystore")}</Button>
          </ContactFormDialog>
        </div>

        {/* <div className="mt-16">
          <div className="max-w-sm mx-auto">
            <IPhoneFrame videoSrc="/VIDEO_Phone_optimized.mp4" />
          </div>
        </div> */}

        {/* Кнопки для смены языка */}
        <div className="mt-4 text-center">
          <button onClick={() => i18n.changeLanguage("en")}></button>
          <button onClick={() => i18n.changeLanguage("tr")}></button>
        </div>
      </div>
    </section>
  );
}