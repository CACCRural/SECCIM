declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const content:any;
  export default content;
}

declare module '*.otf' {
  const content:any;
  export default content;
}
