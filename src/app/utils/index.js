export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.0135 : isMobile ? 0.017 : 0.02,
      deskPosition: isSmall ? [0, .6, 0] : isMobile ? [0, 0.20, 0] : [0, 0, 0],
      cubePosition: isSmall ? [1, -0.32, 0] : isMobile ? [1.63, -0.37, 0] : isTablet ? [1.44, -0.19, 0] : [2.9, 0.01, 0],
      reactLogoPosition: isSmall ? [.8,1.8, 0] : isMobile ? [1.52, 1.89, 0.17] : isTablet ? [2.09, 1.8, 0] : [3.36, 1.6, 0],
      reactLogoScale: isSmall ? 0.03 : isMobile ? 0.04 : isTablet ? 0.04 : 0.06,
      cubeScale: isSmall ? 0.18 : isMobile ? 0.26 : isTablet ? 0.26 : 0.28,
      ringPosition: isSmall ? [-0.93,1.95,0] : isMobile ? [-1.76, 1.74, 0] : isTablet ? [-2.18, 1.95, 0] : [-3.25, 1.74, 0],
      ringScale: isSmall ? 0.12 : isMobile ? 0.13 : isTablet ? 0.15 : 0.19,
      targetPosition: isSmall ? [-1.07, -0.33, 0.19] : isMobile ? [-1.32, -0.34, 0.38] : [-2.66, -0.47, -0.37],
      targetScale: isSmall ? 0.26 : isMobile ? 0.3 : 0.4,
    };
  };