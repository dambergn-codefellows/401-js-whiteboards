Linked List Challenge:
write a function called isSorted that accepts a linked list as
a parameter and returns true if the linked list is sorted in
ascending order

an empty or single item list should be considered sorted.
because it’s not not sorted.

stretch goal: return true if it’s either ascending or descending
```function isSorted(arr) {
  if (arr.length <= 1) {
    return true;
  }

  for (let i = 1; i < arr.length; i++) {
    // if the one on the left is bigger than the one
    // on the right: then it's not sorted ascending
    if (a[i - 1] >= a[i]) {
      return false;
    }
  }
  return true;
}
```
```let current = list.root
while (current) {
  current = current.next
} ```