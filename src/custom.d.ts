declare module "*.svg" {
  const content: any;
  export default content;
}

type RootState = {
  recordList: RecordItem[];
  // 也可以是undefined
  tagList: Tag[];
  currentTag?: Tag;
};

type Tag = {
  id: string;
  name: string;
};

type TagListType = {
  data: Tag[]; // 包含对象的数组
  fetch: () => Tag[];
  save: () => void;
  create: (name: string) => "success" | "duplicate";
  update: (id: string, name: string) => "success" | "not found" | "duplicate";
  remove: (id: string) => boolean;
};

type RecordItem = {
  tags: Tag[];
  remark: string;
  budget: string;
  numberPad: number;
  CreateDate?: string;
};

interface Window {}
