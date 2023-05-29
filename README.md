# UtiliKitty

This npm package provides various useful functions to enhance your productivity while working on your projects!

### Install

```
npm i utilikitty
```

#

```ts
AlternatingCase();
```

Alternates the case of characters in a string.

```ts
import { AlternatingCase } from "utilikitty";

const string = "This is soo cool!";

AlternatingCase(string); // -> tHiS Is sOo cOoL!
AlternatingCase(string, true); // -> ThIs iS SoO CoOl!
```

#

```ts
ChunkNumber();
```

Takes a number and breaks it down into smaller parts of a specified size.

```ts
import { ChunkNumber } from "utilikitty";

ChunkNumber(100, 50); // -> [ 50, 50 ]
ChunkNumber(400, 125); // -> [ 125, 125, 125, 25 ]
ChunkNumber(100, 23); // -> [ 23, 23, 23, 23, 8 ]
```

#

```ts
RemoveDuplicates();
```

Removes all duplicate elements within an array, you can use the `path` argument for a property of an array of objects.

```ts
import { RemoveDuplicates } from "utilikitty";

const array01 = ["cat", "kitty", "cat", "cat"];
const array02 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }, { id: 3 }];

RemoveDuplicates(array01); // -> [ 'cat', 'kitty' ]
RemoveDuplicates(array02, "id"); // -> [ { id: 1 }, { id: 2 }, { id: 3 } ]
```

#

```ts
TrimArray();
```

Trims an array to a specified length. Appends an optional remainder message to the new array, replacing `{num}` with the number of elements omitted.

```ts
import { TrimArray } from "utilikitty";

const array = ["cat", "kitty", "kitten", "dog"];

TrimArray(array, 2); // -> ["cat", "kitty"]
TrimArray(array, 2, "+{num} more"); // -> ["cat", "kitty", "+2 more"]
```

#

```ts
TrimString();
```

Trims a string to a specified length and adds a ellipsis to the end.

```ts
import { TrimString } from "utilikitty";

const string = "The kitty is very cute!";

TrimString(string, 10); // -> The kitty ...
TrimString(string, 10, ">>>"); // -> The kitty >>>
```
