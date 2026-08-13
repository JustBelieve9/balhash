import { series } from "@/content/media.generated";
import { lakeNote, astanaNote } from "@/content/story";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { ViewCursor } from "@/components/chrome/ViewCursor";
import { Hero } from "@/components/sections/Hero";
import { Opening } from "@/components/sections/Opening";
import { Films } from "@/components/sections/Films";
import { Part } from "@/components/sections/Part";
import { Chronicle } from "@/components/sections/Chronicle";
import { Archive } from "@/components/sections/Archive";
import { Download } from "@/components/sections/Download";
import { SeriesGrid } from "@/components/gallery/SeriesGrid";

const lake = series.filter((group) => group.part === "lake");
const astana = series.filter((group) => group.part === "astana");

// The turquoise water after the storm: the picture the whole trip is about.
const opening = lake.find((group) => group.id === "s-IMG_2560") ?? lake[0];

const photoCount = series.reduce((total, group) => total + group.count, 0);

export default function Home() {
  return (
    <>
      <ViewCursor />
      <Nav />
      <main>
        <Hero />
        <Opening group={opening} />
        <Films />

        <Part id="lake" index="ЧАСТЬ ПЕРВАЯ" title="Озеро" note={lakeNote}>
          <SeriesGrid series={lake} />
        </Part>

        <Chronicle />

        <Part id="astana" index="ЧАСТЬ ВТОРАЯ" title="Астана" note={astanaNote}>
          <SeriesGrid series={astana} />
        </Part>

        <Archive series={series} />
        <Download photoCount={photoCount} />
      </main>
      <Footer />
    </>
  );
}
