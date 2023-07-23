// =========== Shadow Generator Types

interface IShadowGeneratorFuncOption {
  xOffset?: number;
  yOffset?: number;
  shadowColor?: string;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
}

export type ShadowGeneratorFunc = (option: IShadowGeneratorFuncOption) => {
  shadowColor?: string;
  shadowOffset?: {
    width: number;
    height: number;
  };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
};
