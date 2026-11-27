# Clutch Division

Jeu de management esport sur un FPS tactique 5v5, entièrement dans le navigateur (HTML, CSS et JavaScript, sans serveur ni installation).

**Version 5.1.6** : LR Manager complet (programme partenaire tous les 2 ans, God Mode complet, logos des clubs, circuit RLCS 2026 officiel dans 7 régions, matchs en 3D, gestion du club, réseau social, contrats, entraînement, scrims, God Mode ; voir `PATCHNOTES.md`). Base VL Manager : finitions du rachat d'équipe et des académies (voir `PATCHNOTES.md`), sur la base de la V4.5 : Massive Update 4.0 (organisations multi-sections, carrière du manager, direction et CEO, réunions de crise, bilans de saison, délégation, infrastructures, ambitions des joueurs, mobilité Game Changers, scrims jouables), plus l'audit qualité de 100 tests et ses 24 corrections.

## Jouer

- **En ligne** : ouvre `index.html` via GitHub Pages (Settings → Pages → branche `main`, dossier racine).
- **En local** : télécharge le dépôt et ouvre `index.html` dans un navigateur récent. Garde le dossier `trophies/` à côté : il contient les trophées et le maillot en 3D.

La partie est enregistrée dans le stockage du navigateur. Une copie de secours est gardée automatiquement.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Le jeu complet, prêt à ouvrir |
| `clutch-division.html` | Source du jeu (même contenu, sans l'enveloppe HTML) |
| `trophies/*.js` | Modèles 3D des trophées et du maillot, chargés à la demande |
| `audit-v4.md` | Rapport d'audit V4 : 100 tests, bugs corrigés, risques restants |
| `tests/harness.js` | Harnais utilisé pour l'audit (à charger dans la console du jeu) |

## Fonctionnalités principales

- Quatre régions, Division 1, Division 2 et Game Changers, Masters, Worlds, Coupe du monde esport, Project Blender.
- Moteur de match manche par manche, vetos, stratégies, appels du coach en direct.
- Mercato réaliste : clauses, pré-contrats, prêts, agents, tryouts, académies.
- Réseau social : comptes officiels, journalistes, rivalités, tendances.
- V4 : organisations à plusieurs sections, promotions, licenciements, marché de l'emploi, CEO aux personnalités différentes, infrastructures, ambitions et promesses des joueurs, scrims entre circuits.
- Import de tes propres clubs et joueurs (JSON) depuis « Mods & données ».

Les noms d'équipes, de joueurs, d'agents et de cartes fournis par défaut sont fictifs.
