import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { useUtmTitle } from "@/hooks/use-utm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "../../i18n"; // Если `i18n.ts` в корне `client/src/`

export default function Hero() {
  const title = useUtmTitle();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Чтение параметра lang из URL и установка языка
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang");
    if (lang && (lang === "en" || lang === "tr")) {
      i18n.changeLanguage(lang); // Изменяем язык на основе URL
    }
  }, [i18n]);

  const handleSmoothScroll = () => {
    const target = document.getElementById("video");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLanguage);

    // Обновляем URL с параметром lang
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLanguage); // Устанавливаем lang параметр
    window.history.pushState({}, '', url.toString()); // Обновляем URL в браузере без перезагрузки страницы
  };

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo and Buttons */}
        <div className="pt-6 flex justify-between items-center">
          <img src="/logo1.png" alt="Sale Scout Logo" className="h-8 sm:h-10" />
          <div className="flex gap-4 items-center">
            <button
              onClick={handleLanguageChange}
              className="flex items-center transition-transform duration-500 hover:scale-105"
            >
              <div className="relative w-16 h-8" style={{ top: "3px" }}>
                <span
                  className={`absolute w-full h-full text-center text-xl font-semibold ${i18n.language === "en" ? "opacity-100" : "opacity-0"}`}
                  style={{
                    left: i18n.language === "en" ? "-20px" : "40px",
                  }}
                >
                  EN
                </span>
                <span
                  className={`absolute w-full h-full text-center text-xl font-semibold ${i18n.language === "tr" ? "opacity-100" : "opacity-0"}`}
                  style={{
                    left: i18n.language === "tr" ? "15px" : "-40px",
                  }}
                >
                  TR
                </span>
              </div>
            </button>
            <a href="https://uae.app.salescout.me/login?">
              <Button variant="outline" className="hidden sm:flex transition-opacity duration-300 hover:opacity-80">
                {t("Login")}
              </Button>
            </a>
            <a href="https://uae.app.salescout.me/registration">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
                {t("register")}
              </Button>
            </a>
          </div>
        </div>

        <div className="relative z-10 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-[3rem] leading-[1.1] font-extrabold text-black md:text-[3.75rem] transition-all duration-300 hover:text-blue-600">
              {title}
            </h1>

            {/* Marketplace Logos */}
            <div className="mt-6 flex items-center justify-center md:justify-start space-x-8">
      <div className="w-70 h-70">
        <img
          src="/Hepsiburada.png"
          alt="Hepsiburada"
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
             
            </div>

            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              {t("hero_subtitle")}
            </p>

            <div className="mt-8 flex flex-col items-center md:items-start gap-3">
              <ContactFormDialog buttonName={t("try_for_free")}>
                <Button size="lg" className="gap-2 w-full md:w-auto bg-blue-600 hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
                  {t("try_for_free")} <ArrowRight className="h-4 w-4" />
                </Button>
              </ContactFormDialog>
              <p className="text-xs text-muted-foreground">
                {t("trial_info")}
              </p>

              {/* Mobile-only image button */}
              <Collapsible
                className="w-full md:hidden"
                id="video"
                onOpenChange={(open) => {
                  setIsOpen(open);
                  if (open) {
                    handleSmoothScroll();
                  }
                }}
                open={isOpen}
              >
                
                
              </Collapsible>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="flex flex-1 justify-center"> {/* Убираем `hidden md:flex` */}
  <div className="md:w-[280px] lg:w-[360px] transition-transform duration-300 hover:scale-105">
    <img src="foto.png" alt="Hero Image" className="w-full h-auto object-cover" />
  </div>
</div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)]" />
    </div>
  );
}