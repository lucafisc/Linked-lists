const Node = (val) => {
  let value = val || null;
  let next = null;
  return {
    value,
    next,
  };
};

const LinkedList = () => {
  let HEAD = null;
  let len = 0;
  const append = (value) => {
    const newNode = Node(value);
    len++;
    if (!HEAD) HEAD = newNode;
    else {
      let last = tail();
      last.next = newNode;
    }
  };
  const prepend = (value) => {
    const newNode = Node(value);
    len++;
    if (!HEAD) HEAD = newNode;
    else {
      newNode.next = HEAD;
      HEAD = newNode;
    }
  };
  const size = () => len;
  const head = () => HEAD;
  const tail = () => {
    if (!HEAD) return null;
    let last = HEAD;
    while (last.next) last = last.next;
    return last;
  };
  const at = (index) => {
    let nod;
    nod = HEAD;
    while (index > 0) {
      nod = nod.next;
      index--;
    }
    return nod;
  };
  const pop = () => {
    if (!HEAD) return null;
    else if (!HEAD.next) HEAD = null;
    let vorlast = at(len - 2);
    vorlast.next = null;
    len--;
  };
  const contains = (val) => {
    if (HEAD.value === val) return true;
    let temp = HEAD;
    while (temp.next) {
      if (temp.value === val) return true;
      temp = temp.next;
    }
    return temp.value === val ? true : false;
  };
  const find = (val) => {
    if (HEAD.value === val) return 0;
    let temp = HEAD;
    let index = 0;
    while (temp.next) {
      temp = temp.next;
      index++;
      if (temp.value === val) return index;
    }
    return null;
  };
  const toString = () => {
    if (!HEAD) return null;
    let string = "";
    let temp = HEAD;
    while (temp.next) {
      string = string.concat(`( ${temp.value} ) ->`);
      temp = temp.next;
    }
    string = string.concat(`( ${temp.value} ) -> null`);
    return string;
  };
  const insertAt = (value, index) => {
    if (!HEAD) return null;
    const newNode = Node(value);
    let oneBefore = HEAD;
    for (let i = 0; i < index - 1; i++) {
      oneBefore = oneBefore.next;
    }
    const oneAfter = oneBefore.next;
    oneBefore.next = newNode;
    newNode.next = oneAfter;
    len++;
  };
  const removeAt = (index) => {
    if (!HEAD) return null;
    if (index > len || index < 0) return;
    if (index === 0) HEAD = HEAD.nextNode;
    let oneBefore = at(index - 1);
    let oneAfter = at(index + 1);
    oneBefore.next = oneAfter;
    len--;
  };
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};