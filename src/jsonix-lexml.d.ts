declare module 'jsonix-lexml' {
    export function toJSON(xml: string): Object;
    export function toXML(json: Object): string;
}