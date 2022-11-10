# removeFromArray Algorithm (FR)

Cet algorithme permet de retirer un élement particulier d'un tableau, à condition que celui-ci existe.

Exemple :
```javascript
removeFromArray([1, 2, 3, 4], 3); // doit supprimer 3 et retourner [1,2,4]
```

## Particularité

1/ L'agorithme doit ignorer les valeurs non existantes
```javascript
removeFromArray([1, 2, 3, 4], 3, "Foo"); // doit supprimer 3 et retourner [1,2,4] en ignorant "Foo"
```

2/ L'agorithme doit uniquement supprimer les valeurs de même type
```javascript
removeFromArray([1, 2, 3, 4], 3, "1"); // doit supprimer 3 et retourner [1,2,4] en ignorant "1", car il s'agit d'un String
```

3/ L'agorithme doit pouvoir supprimer le tableau entier
```javascript
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4); // doit supprimer les valeurs et retourner []
```

# removeFromArray Algorithm (ENG)

This algorithm makes it possible to remove a particular element from an array, with the condition that it exists.

Example :
```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 from the array and return [1,2,4]
```

## Specificities

1/ The agorithm should ignore non-existing values from the given array
```javascript
removeFromArray([1, 2, 3, 4], 3, "Foo"); // should remove 3 from the array and return [1,2,4], ignoring "Foo"
```

2/ The agorithm should only delete values of the same type
```javascript
removeFromArray([1, 2, 3, 4], 3, "1"); // should remove 3 and return [1,2,4], ignoring "1" because it's a String
```

3/ The agorithm should be able to remove all values from the given array
```javascript
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4); // should remove all values from the array and return []
```