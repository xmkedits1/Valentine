export enum AppStage {
  PROPOSAL = 'PROPOSAL',
  CELEBRATION = 'CELEBRATION',
  GALLERY = 'GALLERY'
}

export interface LoveBit {
  id: number;
  placeholder: string;
  correctCode: string;
  hint: string;
}