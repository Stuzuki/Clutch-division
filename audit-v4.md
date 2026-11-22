# Clutch Division V4 — Rapport d'audit qualité

Version auditée puis corrigée : artifact version 101 (fichier `clutch-division.html`).
Copie de sécurité avant toute modification : `audit-backup/clutch-division.avant-audit.html`.
Harnais de tests : `audit-backup/harness.js` (RNG à graine fixe, contrôle d'invariants, journal PASS/FAIL).

**Environnement.** Tous les tests ont tourné dans l'aperçu local (`localhost`), qui a son propre stockage. Aucune sauvegarde du jeu publié (claude.ai) n'a été lue ni modifiée. Les données importées de l'aperçu ont été sauvegardées puis restaurées après les tests d'import.

## 1. Bilan

| Statut | Nombre |
|---|---|
| PASS | 99 |
| FAIL | 0 (après corrections) |
| BLOCKED | 1 (test 029 : fonction absente du jeu) |

Pendant l'audit, 24 défauts ont été trouvés et corrigés : 8 critiques ou majeurs pour les données, 11 majeurs, 5 mineurs. Chaque correction a été suivie d'une relance du test concerné et de la régression des catégories 1 à 3.

### Limites de méthode (à lire avant le tableau)

- **Tests 001 à 010.** Ce sont des tests unitaires de la décision de la direction. Les données sont contrôlées : classement, objectif, confiance, budget, historique et CEO sont fixés à la main, avec une graine aléatoire fixe. Ils ne viennent pas de saisons jouées. Le comportement en saison réelle est couvert par les simulations longues (091).
- **Tests 071 à 080.** Je n'ai pas eu accès à tes vrais fichiers JSON. J'ai généré des fichiers au même format (`{"clubs":[...]}` avec 220 clubs, `{"players":[...]}` avec 1 454 joueurs), avec des cas pièges volontaires.
- **Plusieurs tests ont d'abord échoué à cause de mes propres scripts** (025, 052, 059, 060, 081, 083, 087, 098). Je les ai réécrits et relancés. Ces cas ne sont pas comptés comme bugs du jeu, sauf quand l'analyse a révélé un vrai défaut (052, 087).
- **Simulations longues.** Elles utilisent un « manager automatique » passif : il ne recrute pas, n'entraîne pas et choisit ses réponses au hasard. Les licenciements observés y sont donc plus fréquents qu'avec un vrai joueur.

## 2. Tableau des 100 tests

| # | Statut | Preuve d'exécution |
|---|---|---|
| 001 | PASS | VCT 94 → garder ; GC 89 → garder · contrat prolongé jusqu'en 2026 · décision « bravo » |
| 002 | PASS | VCT 93 → garder ; GC 15 → retirer · le manager garde la VCT, la GC retourne à son staff |
| 003 | PASS | VCT 17 → retirer ; GC 86 → garder · section active basculée sur la GC, pas de licenciement |
| 004 | PASS | Deux sections mauvaises : budget pris en compte (VCT 21 avec gros budget, 29 avec petit). La décision reste le licenciement quand les deux sections sont très en dessous de l'objectif. |
| 005 | PASS | 7e pour un objectif top 8 → garder (+3 « objectif atteint ») |
| 006 | PASS | 9e / objectif 7 : petit budget 45, gros budget 37 (même décision : ultimatum) |
| 007 | PASS | Favori 6e / objectif 2 : 36 → ultimatum (avant correction : licenciement immédiat) · petit club 6e / objectif 9 : 77 → garder |
| 008 | PASS | Patience dégressive : 45 → 41 (1 saison ratée) → 37 (2 de suite) |
| 009 | PASS | Même saison ratée : 39 sans historique, 45 après 3 grandes saisons |
| 010 | PASS | Même situation : Patient 52 → garder · Exigeant 46 → ultimatum · Ambitieux 47 → ultimatum · Gestionnaire 51 → garder |
| 011 | PASS | Promotion GC → GC + VCT : poste « Manager Game Changers + VCT », salaire 24 k → 28 k |
| 012 | PASS | Promotion VCL → VCL + VCT : poste et historique mis à jour |
| 013 | PASS | VCT retirée, GC gardée : poste « Manager Game Changers », section active GC |
| 014 | PASS | Budgets, effectifs et staff des deux sections intacts après retrait, invariants OK |
| 015 | PASS | La VCT retirée est gérée par son head coach, aucun de ses matchs n'est plus proposé au joueur |
| 016 | PASS | Promotion refusée : contrat et sections identiques, refus noté dans l'historique |
| 017 | PASS | Fin de contrat : bonne saison → prolongé jusqu'en 2026 ; mauvaise → non renouvelé + 4 offres |
| 018 | PASS | Licenciement en cours de contrat : indemnité de 60 000 € versée, nouveau club, 10 jours joués sans erreur |
| 019 | PASS | Ancien club inaccessible (changement de section refusé), nouvelle organisation active |
| 020 | PASS | Historique daté et ordonné (voir 087 pour 10 saisons) |
| 021 | PASS | 0 joueur commun, aucune équipe dans la compétition de l'autre section, 40 jours |
| 022 | PASS | Salaires prélevés sur le bon budget (GC −2 333, VCT −13 083) ; section inactive en déficit possible |
| 023 | PASS | Joueur non éligible refusé en GC ; joueuse GC acceptée en VCT |
| 024 | PASS | Ajout répété du même joueur : présent 1 fois, 0 doublon |
| 025 | PASS | Staff propre à chaque section, identique après 2 allers-retours ; réserve séparée |
| 026 | PASS | Nouveau coach GC : staff et budget VCT inchangés |
| 027 | PASS | Même jour : résultats VCT et GC comptés séparément |
| 028 | PASS | Évaluation séparée par section (voir 002 et 003) |
| 029 | BLOCKED | Fonction absente : aucune fermeture de division n'existe (ni en V3 ni en V4) |
| 030 | PASS | 98 transferts IA, VCT et GC délégués : variation des budgets = exactement ce qui part vers les agents libres |
| 031 | PASS | Poste de Sniper vacant → comblé |
| 032 | PASS | 0 acheteur en négatif, aucun argent créé |
| 033 | PASS | Vendeur payé exactement l'indemnité de l'acheteur (98 cas) |
| 034 | PASS | Aucun joueur fidèle et heureux arraché à un club au moins aussi prestigieux (règle ajoutée) |
| 035 | PASS | Valeur IA : 19 ans 75 (pot 90) = 79,2 · 31 ans 75 = 73,1 · 25 ans 82 = 82,0 |
| 036 | PASS | Club prestigieux → coach 17/20 ; petit club → coach 3/20 |
| 037 | PASS | 3 départs le même jour → effectif reconstitué |
| 038 | PASS | 3 tryouts réussis le même jour → 1 seule offre, rangée dans la bonne section |
| 039 | PASS | Prêt + changement de section : retour au club d'origine (avant correction : retour dans la section active) |
| 040 | PASS | Club GC : les agents libres non éligibles ne sont pas signés |
| 041 | PASS | 100 compétitions, 3 011 matchs, 0 doublon, 0 match jamais joué |
| 042 | PASS | Match rejoué et revalidé : points et score inchangés |
| 043 | PASS | 106 classements recalculés depuis les matchs : 0 écart |
| 044 | PASS | 175 égalités départagées (victoires, puis cartes, puis manches) : 0 erreur |
| 045 | PASS | 9 Challengers : participants = 2 premiers de chaque stage |
| 046 | PASS | Règle du jeu (montée seulement si un club de D2 est champion du monde) testée en forçant le cas : D1 reste à 12, la ligue garde un club |
| 047 | PASS | Primes versées 1 fois par étape (10) et par compétition spéciale (2) |
| 048 | PASS | Voir 021 et 027 |
| 049 | PASS | Fin de saison exécutée 1 fois ; jours forcés pendant le bilan sans effet |
| 050 | PASS | 2023 → 2024 : compétitions et points remis à zéro, objectif fixé, historiques conservés |
| 051 | PASS | 12 versements de salaires sur 12 mois (avant : 13, le 26/12 en plus) |
| 052 | PASS | Transfert de 600 k€ : variation globale = prime + agent + visa + renfort du vendeur, à l'euro près |
| 053 | PASS | Toutes les primes d'étape correspondent aux barèmes |
| 054 | PASS | Boutique : recette = ventes × prix ; une seule vente par jour même si le traitement est relancé |
| 055 | PASS | Sponsor arrivé à échéance : retiré, plus de revenu |
| 056 | PASS | Infrastructure : 140 000 € prélevés, livrée en 44 jours, bonus tactique 0,12 → 0,24, entraînement +15 % |
| 057 | PASS | Déficit : confiance 60 → 56, recrutement refusé |
| 058 | PASS | Même perte de 100 k€ : −8 pour un petit budget, −3 pour un gros |
| 059 | PASS | 30 jours rejoués deux fois depuis la même sauvegarde avec la même graine : budgets de tous les clubs identiques |
| 060 | PASS | Coach recruté (5 000 €), ancien libéré ; promotion : salaire +15 % ; rétrogradation : poste mis à jour |
| 061 | PASS | Sauvegarde au format V3 : chargée, données identiques, budgets intacts, 20 jours joués ensuite |
| 062 | PASS | Départ le 01/01/2023, aucune donnée future |
| 063 | PASS | Sauvegarde du 31/05 : état identique octet par octet après rechargement (1 490 Ko) |
| 064 | PASS | Classements identiques après rechargement |
| 065 | PASS | Contrats du manager et des joueurs conservés |
| 066 | PASS | Confiance et historique des résultats conservés |
| 067 | PASS | Promotion conservée |
| 068 | PASS | Écran « Licencié » rouvert après rechargement, nouveau poste conservé |
| 069 | PASS | 4 cycles jouer/sauvegarder/recharger : aucun doublon |
| 070 | PASS | Sauvegarde tronquée → copie de secours chargée + message, fichier abîmé conservé à part ; deux copies abîmées → refus propre, sans plantage ; stockage plein → message d'erreur visible |
| 071 | PASS | 1 454/1 454 joueurs chargés (avant : arrêt à 1 200) |
| 072 | PASS | 220 clubs : 48 VCT, 112 VCL, 60 GC |
| 073 | PASS | Sigle inconnu et sigle ambigu signalés |
| 074 | PASS | Deux « Leo » distincts gardés ; un même joueur sur 2 saisons fusionné |
| 075 | PASS | Photo vide : avatar par défaut, aucune image cassée |
| 076 | PASS | Âge « ? », nation vide, rôle FLEX : profil valide, aucune valeur NaN |
| 077 | PASS | Fichier multi-saisons : la saison 2023 est retenue, un joueur apparu en 2026 démarre agent libre ; fichier d'une seule saison : gardé tel quel |
| 078 | PASS | Chaque club dans le bon circuit |
| 079 | PASS | Club importé avec 2 joueurs → complété à 5 |
| 080 | PASS | 1 454 joueurs en 111 ms, 1 454/1 454 retrouvés en jeu (avant : surplus et clubs inconnus supprimés) |
| 081 | PASS | 18 pages, 6 onglets Organisation, crise, bilan, fiche joueur : 0 erreur |
| 082 | PASS | Vrais clics : promotion accordée, case de délégation basculée |
| 083 | PASS | Notifications cohérentes ; promotion bloquée pendant un licenciement |
| 084 | PASS | Contrats affichés exacts |
| 085 | PASS | Ordre affiché du classement = ordre calculé |
| 086 | PASS | Sélecteur de section : en-tête, effectif et objectif de la GC |
| 087 | PASS | Après 10 saisons : 58 événements tous visibles (avant : 60 derniers seulement), 7 clubs, 10 bilans |
| 088 | PASS | 14 bilans et 6 crises : message cohérent avec la décision |
| 089 | PASS | Demande répétée → la direction s'agace ; mail de scrim accepté 2 fois → 1 scrim ; quitter une section demande une confirmation |
| 090 | PASS | 0 erreur console sur tous les lots et sur 20 saisons |
| 091 | PASS | 2 carrières × 10 saisons, sauvegarde et rechargement à chaque saison : 0 erreur, 0 incohérence |
| 092 | PASS | Promotion et licenciement le même jour : état cohérent, aucun double contrat |
| 093 | PASS | Deux offres : la seconde expire après acceptation de la première |
| 094 | PASS | Aucun coach libre : coach formé en interne, pas de blocage |
| 095 | PASS | Budget nul : recrutement et infrastructure refusés, 0 achat IA |
| 096 | PASS | 3 départs le même jour : effectif, contrats et finances cohérents |
| 097 | PASS | Retraite sous contrat : joueur retiré proprement ; ton équipe affiche l'alerte « 5 titulaires » |
| 098 | PASS | Sauvegarde pendant le bilan : primes non rejouées, passage d'année unique |
| 099 | PASS | Transfert validé 2 fois → une seule prime (avant : deux) ; « Jour suivant » bloqué pendant une crise |
| 100 | PASS | Régression V3 sur une saison : réseau, EWC, Project Blender, Masters, Worlds, Worlds GC, D2, cartes, patchs, God mode |

## 3. Bugs corrigés

### Critiques (perte ou corruption de données)
1. **Import des joueurs limité à 1 200** : avec un pack de 1 454 joueurs, 254 étaient perdus sans prévenir. Limite portée à 5 000, avec avertissement au-delà (071, 080).
2. **Création de partie depuis un import** : les joueurs au-delà de 8 par club et ceux d'un club introuvable étaient supprimés. Ils deviennent désormais agents libres (080).
3. **Chargement d'une sauvegarde abîmée** : le jeu pouvait rester sur un état corrompu, sans copie de secours, et un stockage plein faisait échouer la sauvegarde en silence. Ajout d'une copie de secours, d'une restauration automatique, de la conservation du fichier abîmé et d'un message d'erreur visible (070).
4. **Retour de prêt dans la mauvaise section** : avec deux sections, un joueur VCT prêté revenait dans l'équipe active, par exemple la GC (039).
5. **Migration d'une sauvegarde V3** : 12 % du budget du club partaient dans la réserve dès le premier chargement (061).
6. **Joueur remplacé lors d'un transfert** : il pouvait être revendu à ta propre autre section, y compris un joueur non éligible vers la GC (052).

### Majeurs
7. **Bilan multi-sections** : la mauvaise section pouvait être retirée, et le manager licencié alors qu'une section allait bien. Chaque section a maintenant sa propre décision (002, 003).
8. **Décisions de la direction** :
   - un favori était licencié dès la première mauvaise saison ;
   - deux saisons ratées pesaient autant qu'une seule ;
   - la personnalité du CEO ne changeait aucune décision ;
   - la réserve de l'organisation n'était pas comptée dans le budget (007 à 010).
9. **Double traitement d'un match** possible (points comptés deux fois). Verrou ajouté (042).
10. **13e mois de salaires et de sponsor** versé chaque fin de saison. Défaut présent avant la V4 (051).
11. **Passage d'année sans bilan en cours** : il pouvait sauter une saison. Verrou ajouté (099).
12. **Validation d'un transfert relancée** : la prime était prélevée deux fois (099).
13. **Deux offres d'emploi** pouvaient être acceptées l'une après l'autre (093).
14. **Offres issues des tryouts** en double, et rangées dans la mauvaise section (038).
15. **Données propres à une équipe partagées entre sections** : réserve, tryouts et offres de sponsor. Elles sont maintenant séparées (025).
16. **Salaires d'une section inactive** : ils s'arrêtaient à 0 €, ce qui revenait à des salaires gratuits (022).
17. **Promotion possible pendant un licenciement**, et double demande de scrim le même jour (083, 089).

### Mineurs
18. Doublons fusionnés par pseudo seul : deux joueurs homonymes devenaient un seul (074).
19. Sigles ambigus non signalés à l'import (073).
20. Onglet Carrière limité aux 60 dernières lignes (087).
21. Poste et salaire du manager non mis à jour lors d'une promotion ou d'une rétrogradation ; pas d'indemnité de licenciement (011, 018, 060).
22. L'IA ignorait la fidélité d'un joueur et son salaire (034, 035).
23. Boutique : vente comptée plusieurs fois si le traitement était relancé le même jour (054).
24. Ajout d'une action « Renoncer à une section », avec confirmation (liberté de carrière).

**Fichiers modifiés :** `clutch-division.html` uniquement, publié en version 101 et reconstruit dans le zip PC. Le fichier de test temporaire servi pendant l'audit a été retiré.

## 4. Tests relancés après corrections
- Après les corrections du bilan : catégorie 1 complète (001 à 010).
- Après le changement de section, les salaires et la réserve : 001 à 010, 013, 014, 021, 022 et 025, tous PASS.
- Après le verrou de validation des transferts : 023, 024, 052, 057, 095 et 099, tous PASS.
- Après les corrections d'import : la catégorie 8 entière a été exécutée après correction.

## 5. Simulations longues
| Carrière | Départ | Saisons | Erreurs | Invariants cassés | Rechargements | Clubs dirigés |
|---|---|---|---|---|---|---|
| A | VCT + GC (Voltige) | 10 | 0 | 0 | 10/10 | 7 |
| B | GC Pacifique (Sakura Blossom) | 10 | 0 | 0 | 10/10 | 6 |

Environ 14 s par saison simulée. La sauvegarde grossit d'environ 25 Ko par saison (1,25 Mo → 1,5 Mo).

## 6. Comportement des dirigeants

| Critère demandé | État | Mécanisme réel |
|---|---|---|
| Résultats de chaque division | Oui | Un score et une décision par section |
| Objectifs de début de saison | Oui | Écart entre classement et objectif, plafonné à −18 / +15 |
| Niveau théorique de l'effectif | Indirect | L'objectif vient du classement attendu (points de force), plus la progression de la note moyenne |
| Budget disponible | Oui | Rang du budget dans la ligue, réserve comprise |
| Progression pendant la saison | Oui | Évolution de la note moyenne de l'effectif |
| Historique de l'entraîneur | Oui | Crédit après 3 bonnes saisons, patience qui diminue saison après saison |
| Ancienneté | Partiel | Indulgence pour une arrivée récente ; l'ancienneté joue dans la réponse « Demander du temps » en crise, pas au bilan |
| Confiance du président | Oui | Base du score |
| Personnalité du président | Oui | Bonus/malus et seuil de maintien différents (Patient, Exigeant, Ambitieux, Gestionnaire) |
| Notoriété de l'organisation | Non | Pas pris en compte directement au bilan |
| Ambitions sportives/financières | Partiel | Via le profil Ambitieux ou Gestionnaire |
| Résultats des autres divisions | Oui | Licenciement complet seulement si aucune section ne mérite d'être gardée |
| Possibilité de recruter un remplaçant | Non | La décision ne regarde pas le marché des coachs |
| Situation contractuelle | Oui | Fin de contrat → non-renouvellement plutôt que licenciement |
| Coût d'un licenciement | Oui | Indemnité payée par le club ; la direction est plus indulgente quand le contrat est long |

Tests comparatifs (un seul paramètre change) : budget (006), objectif (005/007), président (010), historique (008/009), confiance (30 → licenciement, 50 → ultimatum, 70 → maintien), progression (facteur affiché dans chaque bilan). Pour un manager qui cumule deux postes, les quatre issues ont été observées : garder les deux (001), retirer un seul poste (002/003), deuxième chance (ultimatum par section) et fin de mission (004).

## 7. Absent ou non testable
- **029** : fermeture d'une division (n'existe pas dans le jeu).
- **Tes vrais fichiers JSON** : non disponibles, remplacés par des fichiers générés au même format.
- **Notoriété de l'organisation et marché des coachs** : pas encore pris en compte dans les décisions de la direction.

## 8. Risques résiduels
1. **Espace de stockage du navigateur.** La sauvegarde (environ 1,5 Mo) et sa copie de secours occupent environ 3 Mo, sur un quota d'environ 5 Mo, en plus des logos et photos importés. Si l'espace manque, la copie de secours est supprimée en premier et un message s'affiche. Une très longue carrière avec beaucoup d'images peut atteindre la limite.
2. **Sections inactives.** Leurs contrats expirants sont renouvelés automatiquement en fin de saison.
3. **Équilibrage.** Un manager passif est licencié environ 3 fois en 10 saisons. L'équilibrage avec un vrai joueur reste à confirmer en jeu réel.
4. **Montée de D2 en D1.** Elle reste exceptionnelle : seulement si un club de D2 gagne les Worlds (règle existante).

## 9. Verdict
Aucun bug critique connu ne reste après corrections. Sur 2 carrières de 10 saisons, avec sauvegarde et rechargement à chaque fin de saison, il n'y a eu aucune erreur ni aucune incohérence. Six risques critiques ont été corrigés et vérifiés : perte de joueurs à l'import, sauvegarde abîmée, prêt mal routé, migration, revente interne et double comptage. La V4 est **stable pour une utilisation de carrière longue**, sous réserve des risques résiduels ci-dessus (surtout l'espace de stockage avec beaucoup d'images importées).
