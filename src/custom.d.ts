declare module "*.svg" {
  const content: any;
  export default content;
}

const Tag = {
  id: string,
  name: string,
};

type RecordType = {
  tags: string[];
  remark: string;
  budget: string;
  numberPad: number;
  CreateDate: Date; // 类，即构造函数
};
