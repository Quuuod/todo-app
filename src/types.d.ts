declare module "*.module.css";
declare module "*.module.less";
declare module "*.less" {
  const content: string;
  export default content;
}
