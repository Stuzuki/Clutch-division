# Clutch Division — Notes de version

## V5.0 · LR Manager — étapes 2 et 3

- **Moteur de match 3v3** : games de 5 minutes avec prolongation en but en or, séries en BO3, BO5 et BO7. Le résultat dépend des statistiques des titulaires, de la forme, de la fatigue, de la cohésion, du coach et d'une part d'aléa : les exploits restent rares mais possibles.
- **Matchs jouables** : choisis ton plan de jeu avant chaque game (équilibré, offensif, défensif, contre-attaque), suis les buts et les passes décisives, ou simule la série.
- **Open Qualifiers d'Europe au format complet** : double élimination (Top 256, BO3 puis BO5 à partir du Top 192), Swiss Top 32 (2 groupes de 16, BO5, 3 victoires ou 3 défaites), GSL Top 16 (2 groupes de 8, upper/lower, BO5), Top 8 en double élimination (BO7).
- **Opens 2, 3, 5 et 6** : 8 équipes directement qualifiées pour le Top 32 grâce au classement, 24 places en double élimination.
- **Points et titres** : barème provisoire (en attente du barème officiel), le vainqueur d'un Open devient champion d'Europe.
- **Onglet Compétitions** avec les quatre phases de chaque Open.

Kick-Off LAN, Majors, LCQ et Worlds arrivent à l'étape 4.


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
