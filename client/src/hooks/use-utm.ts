import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function useUtmTitle() {
  const { t } = useTranslation();

  return useMemo(() => {
    const titles = {
      1: t("Maximize"),
      2: t("Boost your sales and profits. Instantly"),
      3: t("Win more BuyBoxes"),
      
    };

    const params = new URLSearchParams(window.location.search);
    const utm_campaign = params.get("utm_campaign") || "";

    return titles[Number(utm_campaign) as keyof typeof titles] || titles[1];
  }, [t]); // Добавляем t в зависимости, чтобы обновлять перевод при смене языка
}

export function getUtm() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_campaign: params.get("utm_campaign") || "",
    utm_source: params.get("utm_source") || "",
  };
}