async function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`;
  const css = await (
    await fetch(cssUrl, {
      headers: {
        // An old Chrome UA is required — modern UAs get woff2, which Satori
        // (used by ImageResponse) can't parse. This UA gets plain woff/ttf.
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
      },
    })
  ).text();

  // The response contains one @font-face block per unicode-range subset
  // (cyrillic, greek, vietnamese, ...); grab the "latin" one specifically —
  // taking the first block in the file (usually a non-latin subset) would
  // fetch a font file missing the glyphs this image actually renders.
  const latinBlock = css.split(/\/\* [\w-]+ \*\//).find((block) => {
    const rangeMatch = block.match(/unicode-range: ([^;]+);/);
    return rangeMatch?.[1].includes("U+0000-00FF");
  });
  const match = latinBlock?.match(
    /src: url\(([^)]+)\) format\('(opentype|truetype|woff)'\)/,
  );
  if (!match) {
    throw new Error(`Could not find latin font source for ${family} ${weight}`);
  }

  const response = await fetch(match[1]);
  if (!response.ok) {
    throw new Error(`Failed to fetch font file for ${family} ${weight}`);
  }
  return response.arrayBuffer();
}

export async function loadOgFonts() {
  const [fraunces, inter] = await Promise.all([
    loadGoogleFont("Fraunces", 600),
    loadGoogleFont("Inter", 600),
  ]);

  return [
    {
      name: "Fraunces",
      data: fraunces,
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "Inter",
      data: inter,
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}
