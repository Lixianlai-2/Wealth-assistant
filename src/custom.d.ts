declare module "*.svg" {
  const content: any;
  export default content;
}

const Tag = {
  id: string,
  name: string,
};

type TagListType = {
  data: Tag[]; // 包含对象的数组
  fetch: () => Tag[];
  save: () => void;
  create: (name: string) => "success" | "duplicate";
  update: (id: string, name: string) => "success" | "not found" | "duplicate";
  remove: (id: string) => boolean;
};

type RecordType = {
  tags: string[];
  remark: string;
  budget: string;
  numberPad: number;
  CreateDate?: Date; // 类，即构造函数
};

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (
    id: string,
    name: string
  ) => "success" | "not found" | "duplicate";
}
