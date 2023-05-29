declare type AlternatingCase = (text: string, inverseCase?: boolean, split?: string) => string;
declare type ChunkNumber = (number: number, size: number) => number[];
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
/**Takes a number and breaks it down into smaller parts of a specified size. */
export const ChunkNumber: ChunkNumber = (number, size) => {
    const chunks = [];
    if (number <= 0 || size <= 0) return [];
    for (let i = number; i > 0; i -= size) i > size ? chunks.push(size) : chunks.push(i);
    return chunks;
};
/**Removes all duplicate elements within an array, you can use the ` path ` argument for properties of an array of objects. */
export const RemoveDuplicates = (array: any[], path?: string): any[] => {
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
/**Trims an array to a specified length. Appends an optional remainder message to the new array, replacing `{num}` with the number of elements omitted.*/
export const TrimArray: TrimArray = (array, length, remainderMessage) => {
    let newArray = [];
    array.length <= length ? (newArray = array) : (newArray = [...[...array].splice(0, length)]);
    if (array.length > length && remainderMessage) newArray.push(remainderMessage.replace("{num}", (array.length - length).toString()));
    return newArray;
};
/**Trims a string to a specified length and adds a ellipsis to the end.*/
export const TrimString: TrimString = (string, length, ellipsis = "...") => (string.length > length ? `${string.substring(0, length)}${ellipsis}` : string);
