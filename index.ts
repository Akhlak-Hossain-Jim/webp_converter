import fs from "fs";
import path from "path";
import sharp from "sharp";

export async function ConvertToWebp() {
  const inputDir = path.join(process.cwd(), "images");
  const outputDir = path.join(process.cwd(), "output");

  console.log("Checking Input & Output Directories...");

  if (!fs.existsSync(inputDir)) {
    console.error("Error: Input directory does not exist, terminating...");
    return;
  }

  if (fs.existsSync(outputDir)) {
    console.log("Removing existing output directory...");
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  console.log("Creating output directory...");
  fs.mkdirSync(outputDir);
  console.log("Output directory created successfully.");

  try {
    console.log("Reading files...");
    const files = await fs.promises.readdir(inputDir);
    let fileCount: number = 0;

    if (files.length === 0) {
      console.error("Error: No files found in input directory, terminating...");
      return;
    }
    console.log(
      `Found ${files.length} files in the directory.\nStarting conversion...`
    );

    for (const file of files) {
      fileCount++;
      console.log(`Converting file ${fileCount} of ${files.length}...`);
      const inputPath = path.join(inputDir, file);
      const outputFileName = `${path.parse(file).name}.webp`;
      const outputPath = path.join(outputDir, outputFileName);

      await sharp(inputPath).webp({ quality: 100 }).toFile(outputPath);
      console.log(
        `Successfully Converted file ${fileCount} of ${files.length}...`
      );
    }

    return;
  } catch (error) {
    console.error("Error: Failed to process images, terminating...");
    console.error(error);
    return;
  }
}

ConvertToWebp();
