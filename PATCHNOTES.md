# Clutch Division — Notes de version

## V5.0 · Multi-jeux — étape 1 (socle LR Manager)

- **Nouvelle partie** : choisis entre **VL Manager** (FPS tactique 5v5, le jeu actuel) et **LR Manager** (football automobile 3v3).
- **Deux jeux totalement séparés** : effectifs, budgets, compétitions et sauvegardes ne se mélangent jamais. Ta carrière VL Manager reste intacte.
- **LR Manager, monde 2026** : 6 régions (Europe, Amérique du Nord, MENA, Asie, Pacifique, Afrique subsaharienne). L'Europe est jouable en premier avec 256 équipes (partenaires, pros, semi-pros, amateurs) ; les autres régions sont déjà créées.
- **Joueurs 3v3** : mécanique, vitesse, lecture du jeu, rotation, défense, finition, jeu collectif, mental, potentiel.
- **Partenaires** : plus de budget, d'infrastructures, de notoriété et de meilleurs joueurs au départ, sans aucun bonus caché en match.
- **Calendrier 2026** : Kick-Off LAN, Open Qualifiers 1 à 6 (double élimination Top 256, Swiss Top 32, GSL Top 16, Top 8), Majors 1 et 2, Last Chance Qualifier, World Championship.
- **Import JSON** des clubs et des joueurs LR (noms, sigles, régions, partenaires, logos, statistiques), avec modèles intégrés.
- **Export de données** : le fichier « Mes données » contient les deux jeux.

À venir : moteur de match (étape 2), Opens et points (étape 3), Majors, LCQ et Worlds (étape 4), gestion complète (étape 5).


## V4.9 · Final Polish

Dernière mise à jour de finition avant la V5.

**Rachat d'équipe**
- Après un rachat, tu peux changer l'identité de l'équipe : nom complet, sigle (ex. M8.A), logo (garder l'actuel, prendre celui de ton organisation, importer une image ou un logo généré), couleur principale et secondaire, statut d'académie.
- La nouvelle identité s'affiche partout : classements, calendrier, matchs, transferts, organisation, académie.
- Rien n'est effacé : anciens résultats, titres, palmarès et anciens noms restent consultables dans l'historique du club. L'équipe garde le même identifiant, il n'y a jamais de doublon.
- Noms et sigles déjà pris, trop courts ou invalides sont refusés.

**Académies**
- Une académie ne monte jamais en VCT, quels que soient ses résultats. La règle est appliquée par le moteur de compétition.
- Une académie championne du monde garde son titre, reste en VCL, et aucune équipe VCT n'est reléguée.
- Un club VCL indépendant champion du monde monte toujours en VCT, et le dernier VCT de sa région descend (règle propre à Clutch Division, inchangée).

**Compatibilité**
- Les sauvegardes V4.5 sont migrées automatiquement : liens entre organisations et académies vérifiés et réparés, rien n'est perdu.
- Le nom d'une organisation suit désormais celui de son équipe principale.
