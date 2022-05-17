get groupedList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
      // .filter((r) => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.CreateDate).valueOf() - dayjs(a.CreateDate).valueOf()
      );
    type Result = { title: string; total?: number; items: RecordItem[] }[];
    const result: Result = [
      {
        title: dayjs(newList[0].CreateDate).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.CreateDate), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.CreateDate).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    result.map((group) => {
      group.total = group.items.reduce((sum, item) => {
        console.log(sum);
        console.log(item);
        return sum + item.numberPad;
      }, 0);
    });
    return result;
  }