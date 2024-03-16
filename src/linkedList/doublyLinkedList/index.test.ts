import DoublyLinkedList from './index';

test('double linked list', () => {
  const list = new DoublyLinkedList<number>();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);

  const result1 = list.print();
  const result2 = list.reversePrint();
  list.delete(1);
  const result3 = list.print();
  const result4 = list.reversePrint();
  list.delete(0);
  const result5 = list.print();
  const result6 = list.reversePrint();

  expect(result1).toEqual(result2.reverse());
  expect(result3).toEqual(result4.reverse());
  expect(result5).toEqual(result6.reverse());
});
