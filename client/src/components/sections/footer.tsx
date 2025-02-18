import { Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next"; // добавляем хук для перевода

export default function Footer() {
  const { t } = useTranslation(); // вызываем t() для перевода

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <img src="/logo1.png" alt="Sale Scout Logo" className="h-8 mb-4" />
            <p className="text-sm text-muted-foreground">
              The world's №1 repricer
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">{t("Navigation")}</h3> {/* Перевод строки */}
            <ul className="space-y-2">
              <li><a href="#features">{t("Features")}</a></li>
              <li><a href="#pricing">{t("Pricing")}</a></li>
              <li><a href="#faq">{t("FAQ")}</a></li> {/* Перевод строки */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t("Contact")}</h3> {/* Перевод строки */}
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("Phone")}</li>
              <li>{t("Workinghours")}</li> {/* Перевод строки */}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">{t("SocialMedia")}</h3> {/* Перевод строки */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/UAESaleScoutme/61568159456611/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/uae.salescout.me/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SaleScout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}