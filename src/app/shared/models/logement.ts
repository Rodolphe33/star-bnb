import { User } from './user';

export interface Logement {
  _id: string;
  titre: string;
  type_propriete: string;
  hote: User;
  tarif_credits_par_nuit: number;
  note_moyenne: number;
  nombre_avis: number;
  capacite: {
    voyageurs: number;
    chambres: number;
    lits: number;
    salles_de_bain: number;
  };
  equipements: [string];
  reglement_interieur: [string];
  description: string;
}
