import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Allyson Freitas | Portfolio",
    short_name: "Allyson Freitas",
    description: "Portfólio de Allyson Freitas - Arquiteto de Experiências Digitais e Desenvolvedor Fullstack B2B.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#818cf8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
