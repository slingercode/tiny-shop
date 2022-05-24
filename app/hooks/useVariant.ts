import { useEffect, useState } from "react";

export default function useVariant() {
  const VARIANT_KEY = "data-theme";

  const [variant, setVariant] = useState<"light" | "dark">("light");

  useEffect(() => {
    const ls = localStorage.getItem(VARIANT_KEY);
    setVariant(ls ? (ls as "light" | "dark") : "light");
  }, []);

  return {
    variant,
    setVariant: () => {
      const newVariant = variant === "light" ? "dark" : "light";
      setVariant(newVariant);
      localStorage.setItem(VARIANT_KEY, newVariant);
    },
  };
}
