const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

/**
 * Extend the default Metro configuration to include font files.
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Custom configuration to include additional asset extensions
const customConfig = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    // Ensure that .ttf files are included as asset file extensions
    assetExts: [...defaultConfig.resolver.assetExts, 'ttf']
  },
};

module.exports = mergeConfig(defaultConfig, customConfig);
