# Fragment Liferay : Table dynamique

## Description

Ce fragment Liferay permet de créer une **table dynamique** avec un nombre configurable de lignes et de colonnes.  
Le contenu des cellules peut être édité directement en **mode connecté (admin)**.  

Il inclut :  
- Gestion dynamique du **nombre de lignes** (`numberOfRows`).  
- Gestion dynamique du **nombre de colonnes** (`numberOfCols`).  

---

## Configuration

| Propriété | Type | Default | Description |
|-----------|------|---------|-------------|
| `numberOfRows` | int | 2 | Nombre de lignes affichées. Ajustable selon les besoins. |
| `numberOfCols` | int | 2 | Nombre de colonnes affichées. Ajustable selon les besoins. |

---

## Utilisation

1. Ajouter le fragment à votre page Liferay.  
2. Configurer le nombre de lignes et de colonnes selon vos besoins.  
3. En **mode connecté (admin)** :  
   - Éditer le contenu des cellules directement sur la page.  

---

## Fonctionnalités clés

- Table configurable en nombre de lignes et colonnes.  
- Contenu des cellules éditable en **mode connecté (admin)**.  
- Intégration facile avec d’autres fragments ou composants Liferay.
