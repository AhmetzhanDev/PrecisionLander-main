import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function SocialProof() {
  const { t } = useTranslation();

  const testimonials = [
    {
      stars: "★★★★★",
      text: t("reviewsA"),
      author: "Mustafa",
      role: "Hepsiburada Satıcısı"
    },
    {
      stars: "★★★★★",
      text: t("reviewsF"),
      author: "Azra",
      role: "Hepsiburada Satıcısı"
    },
    {
      stars: "★★★★★",
      text: t("reviewsAz"),
      author: "Ada",
      role: "Hepsiburada Satıcısı"
    },
    {
      stars: "★★★★★",
      text: t("reviewsH"),
      author: "Ali",
      role: "Hepsiburada Satıcısı"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("reviews")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("reviewsS")}</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {testimonials.map((item, index) => (
              <Card key={index} className="border-none shadow-md h-full">
                <CardContent className="pt-4 px-4 sm:pt-6 sm:px-6">
                  <div className="text-[#FFD700] text-lg sm:text-xl mb-2">{item.stars}</div>
                  <p className="text-sm sm:text-base mb-3 italic">{item.text}</p>
                  <div className="text-sm font-semibold">{item.author}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}