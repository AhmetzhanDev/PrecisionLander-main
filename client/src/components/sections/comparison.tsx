import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";
import { useTranslation } from "react-i18next";

export default function Comparison() {
  const { t } = useTranslation();
  
  const comparisons = {
    old: [
      t("Manually"),
      t("Hiring"),
      t("Guesswork"),
    ],
    new: [
      t("autopriceupdates"),
      t("salescoutworksnonstop"),
      t("higherprofits"),
    ]
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t("Oldway")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("Seehowoursolution")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Way */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{t("manualtimeconsuming")}</h3>
              <ul className="space-y-4">
                {comparisons.old.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-red-500 mt-1">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* New Way */}
          <Card className="border-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{t("smartautomated")}</h3>
              <ul className="space-y-4">
                {comparisons.new.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-green-500 mt-1">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <ContactFormDialog buttonName="Connect my store 1">
            <Button size="lg">{t("ConnectMyStore")}</Button>
          </ContactFormDialog>
        </div>
      </div>
    </section>
  );
}