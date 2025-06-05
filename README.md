# WebP Converter

A simple Node.js tool to convert images to WebP format. This tool helps optimize your images by converting them to the WebP format, which provides superior compression and quality characteristics compared to older formats like JPEG and PNG.

## Prerequisites

- Node.js (v14 or higher)
- pnpm (Package Manager)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Akhlak-Hossain-Jim/webp_converter
cd webp_converter
```

2. Install dependencies:

```bash
pnpm install
```

## Project Structure

```
webp_converter/
├── images/          # Place your input images here
├── output/          # Converted WebP images will be saved here
├── index.ts         # Main conversion script
├── package.json     # Project configuration
└── tsconfig.json    # TypeScript configuration
```

## Usage

1. Place your images in the `images` directory. Supported formats include:

   - JPEG/JPG
   - PNG
   - TIFF
   - GIF
   - Other formats supported by Sharp

2. Run the conversion script:

```bash
pnpm convert
```

3. The converted WebP images will be saved in the `output` directory with the same filename but with a `.webp` extension.

## Features

- Converts multiple images in batch
- Maintains original image quality (100% quality setting)
- Creates output directory if it doesn't exist
- Provides progress feedback during conversion
- Error handling for failed conversions

## Configuration

The default WebP conversion settings are:

- Quality: 100%
- Output format: WebP

To modify these settings, you can edit the `index.ts` file and adjust the Sharp configuration:

```typescript
await sharp(inputPath)
  .webp({ quality: 100 }) // Adjust quality here (0-100)
  .toFile(outputPath);
```

## Dependencies

- `sharp`: High-performance image processing library
- `typescript`: TypeScript support
- `ts-node`: TypeScript execution environment
- `@types/node`: TypeScript definitions for Node.js

## Error Handling

The tool includes error handling for common scenarios:

- Missing input directory
- Empty input directory
- Failed conversions
- File system errors

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests!
