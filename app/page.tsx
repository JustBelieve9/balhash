import { series } from "@/content/media.generated";
import { lakeNote, astanaNote } from "@/content/story";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { ViewCursor } from "@/components/chrome/ViewCursor";
import { Hero } from "@/components/sections/Hero";
import { Films } from "@/components/sections/Films";
import { Part } from "@/components/sections/Part";
import { Download } from "@/components/sections/Download";
import { SeriesGrid } from "@/components/gallery/SeriesGrid";

const lake = series.filter((group) => group.part === "lake");
const astana = series.filter((group) => group.part === "astana");

const photoCount = series.reduce((total, group) => total + group.count, 0);

export default function Home() {
  return (
    <>
      <ViewCursor />
      <Nav />
      <main>
        <Hero />
        <Films />

        <Part id="lake" index="ЧАСТЬ ПЕРВАЯ" title="Озеро" note={lakeNote}>
          <SeriesGrid series={lake} />
        </Part>

        <Part id="astana" index="ЧАСТЬ ВТОРАЯ" title="Астана" note={astanaNote}>
          <SeriesGrid series={astana} />
        </Part>

        <Download photoCount={photoCount} />
      </main>
      <Footer />
    </>
  );
}
