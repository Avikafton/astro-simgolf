/// <reference types="astro/client" />

declare module "*.png" {
    const image: {
      src: string;
      width: number;
      height: number;
      format: string;
    };
    export default image;
  }
  
  declare module "*.gif" {
    const image: {
      src: string;
      width: number;
      height: number;
      format: string;
    };
    export default image;
  }
  