declare type AlternatingCase = (text: string, inverseCase?: boolean, split?: string) => string;
declare type ChunkNumber = (number: number, size: number) => number[];
declare type RandomElement = (array: any[]) => any;
declare type RandomElements = (array: any[], count: number) => any;
declare type RandomNumber = (min: number, max: number) => number;
declare type RemoveDuplicates = (array: any[], path?: string) => any[];
declare type TrimArray = (string: any[], length: number, remainderMessage?: string) => any[];
declare type TrimString = (string: string, length: number, ellipsis?: string) => string;

/**Alternates the case of characters in a string. E.g. `Wow` to `WoW` or `wOw`*/
export const AlternatingCase: AlternatingCase = (string, inverseCase = false, splitBy = "") =>
    string
        .split(splitBy)
        .map((char) => {
            inverseCase = !inverseCase;
            return inverseCase ? char.toLowerCase() : char.toUpperCase();
        })
        .join(splitBy);

/**Takes a number and breaks it down into smaller parts of a specified size.*/
export const ChunkNumber: ChunkNumber = (number, size) => {
    const chunks = [];
    if (number <= 0 || size <= 0) return [];
    for (let i = number; i > 0; i -= size) i > size ? chunks.push(size) : chunks.push(i);
    return chunks;
};

/**Returns a random element from the provided array.*/
export const RandomElement: RandomElement = (array) => array[RandomInt(0, array.length - 1)];

/**Returns random elements from the provided array.*/
export const RandomElements: RandomElements = (array, count) => {
    if (count >= array.length) return array;
    let r = [...array];
    for (let i = 0; i < array.length - count; i++) r.splice(RandomInt(0, r.length - 1), 1);
    return r;
};

/**Returns a random float from the provided min and max.*/
export const RandomFloat: RandomNumber = (min, max) => (max >= min ? Math.random() * (max - min) + min : RandomFloat(max, min));

/**Returns a random int from the provided min and max.*/
export const RandomInt: RandomNumber = (min, max) => Math.round(RandomFloat(min, max));

/** */
export const RangeArray = (array: any[], from: number, to: number): any[] => (from <= to ? [...array].splice(Math.min(from, 0), Math.min(to - from, array.length - from)) : RangeArray(array, to, from));

/**Removes all duplicate elements within an array, you can use the ` path ` argument for a property of an array of objects.*/
export const RemoveDuplicates: RemoveDuplicates = (array, path) => {
    if (array.length == 0 || array.length == 1) return array;
    const added: any[] = [];
    const newArr: any[] = [];
    for (let i = 0; i < array.length; i++) {
        if (path) {
            const element = array[i][path];
            if (added.includes(element)) continue;
            added.push(element);
            newArr.push(array[i]);
        } else {
            if (newArr.includes(array[i])) continue;
            newArr.push(array[i]);
        }
    }
    return newArr;
};

/** */
export const StringifyArray = (array: any[], sep1: string = ", ", sep2: string = " & "): string => (array.length == 1 ? array[0] : RangeArray(array, 0, array.length - 1).join(sep1) + sep2 + array[array.length - 1]);

/**Trims an array to a specified length. Appends an optional remainder message to the new array, replacing `{num}` with the number of elements omitted.*/
export const TrimArray: TrimArray = (array, length, remainderMessage) => {
    let newArray = [];
    array.length <= length ? (newArray = array) : (newArray = [...[...array].splice(0, length)]);
    if (array.length > length && remainderMessage) newArray.push(remainderMessage.replace("{num}", (array.length - length).toString()));
    return newArray;
};

/**Trims a string to a specified length and adds a ellipsis to the end.*/
export const TrimString: TrimString = (string, length, ellipsis = "...") => (string.length > length ? `${string.substring(0, length)}${ellipsis}` : string);
