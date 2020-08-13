declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.style";
declare module "*.tsx";
declare module "*.ts";

declare var jQuery: (selector:string) => any;

interface Date {
  format(fmt:string):string;
}

interface Window {
  onscroll: any
}

