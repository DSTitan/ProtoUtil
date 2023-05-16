export const TrimString = (string: string, length: number, ellipsis: string = "..."): string => (string.length > length ? `${string.substr(0, length)}${ellipsis}` : string);

export default { TrimString };
