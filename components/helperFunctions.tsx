export const getTime = (d: number) => {
  let h: number = Math.floor(d / 3600);
  let m: number = Math.floor((d % 3600) / 60);
  let s: number = Math.floor((d % 3600) % 60);
  // console.log(h, m, s);
  let hDisplay: string = h > 0 ? h + ":" : "";
  let mDisplay: string = m > 0 ? m + ":" : "00:";
  let sDisplay: string = s > 0 ? (s < 10 ? "0" + s : s + "") : "00";
  return hDisplay + mDisplay + sDisplay;
};

export const getOnlyTime = (d: number) => {
  let h: number = Math.floor(d / 3600);
  let m: number = Math.floor((d % 3600) / 60);
  let s: number = Math.floor((d % 3600) % 60);
  // console.log(h, m, s);
  let hDisplay: string = h > 0 ? h + "h " : "";
  let mDisplay: string = m > 0 ? m + "min " : "";
  let sDisplay: string = s > 0 ? s + "s " : "0s ";
  return hDisplay + mDisplay + sDisplay;
};
