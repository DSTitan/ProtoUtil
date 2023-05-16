declare type TrimStringUtil = (string: string, length: number, ellipsis?: string) => string;

export const TrimString: TrimStringUtil = (string, length, ellipsis = "..."): string => (string.length > length ? `${string.substring(0, length)}${ellipsis}` : string);

const Utility = { TrimString };
export default Utility;
