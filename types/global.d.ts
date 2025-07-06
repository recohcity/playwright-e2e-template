declare global {
  interface Window {
    testAPI?: {
      selectPieceForTest: (id: number) => void;
      rotatePieceForTest: () => void;
      resetPiecePositionForTest: (id: number) => void;
      markPieceAsCompletedForTest: (id: number) => void;
    };
    __ENV_MODE__?: 'development' | 'production';
  }
}
export {}; 