export function css(...classList) {
  return classList.join(" ");
}

export const container =
  "p-6 max-w-screen-lg m-auto antialiased h-screen flex flex-col";

export const button =
  "p-2 rounded text-lg uppercase font-semibold tracking-wider text-center disabled:opacity-50 disabled:cursor-not-allowed";

export const input = "p-2 border rounded";

export const label = "py-2 px-1 text-gray-700 uppercase tracking-wide font-semibold";
