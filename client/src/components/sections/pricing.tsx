import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ContactFormDialog } from "../ui/contact-form-dialog";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log("Current language:", i18n.language);
  }, [i18n.language]);

  const plans = [
    {
      name: t("Basic"),
      price: t("Price1"),
      features: [
        t("Repricerfor"),
        t("Notifications"),
      ],
    },
    {
      name: t("Pro"),
      price: t("Price2"),
      features: [
        t("RepricerforSkus"),
        t("Notificationssystem"),
        t("AnalyticsOnAll"),
        t("Personalmanager24/7"),
      ],
      popular: true,
    },
    {
      name: t("Platinum"),
      price: t("Price3"),
      features: [
        t("EverythingfromProtariff"),
        t("Addingnewfeatures"),
        t("PersonalUAE"),
      ],
    },
  ];

  return (
    <section className="py-24 bg-muted/50" id="pricing">
      <div className="container mx-auto px-2 sm:px-2">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t("SimpleTransparentPricing")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("Choosetheperfect")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-green-500 shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute md:left-1/2 md:-translate-x-1/2 left-6 -top-3">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
                    {t("MostPopular")}
                  </span>
                </div>
              )}
              <CardHeader className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="text-3xl font-bold">{plan.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className={`h-5 w-5 ${plan.popular ? "text-green-500" : "text-primary"} mt-0.5 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ContactFormDialog buttonName={`Plan "${plan.name}"`}>
                  <Button className={`w-full ${plan.popular ? "bg-green-500 hover:bg-green-600" : ""}`}>
                    {t("PRconnectmystore")}
                  </Button>
                </ContactFormDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}