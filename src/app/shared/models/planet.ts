import { Logement } from './logement';

export interface Planet {
  _id: string;
  name: string;
  region: string;
  secteur: string;
  climat: string;
  terrain: string;
  gravite: string;
  diametre_km: number;
  periode_rotation_heures: number;
  periode_revolution_jours: number;
  population: number;
  capitales_villes_principales: [string];
  especes_natives: [string];
  affiliations_majeures: [string];
  evenements_marquants: [string];
  description: string;
  logements: Logement;
}
